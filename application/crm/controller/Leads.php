<?php
// +----------------------------------------------------------------------
// | Description: 项目
// +----------------------------------------------------------------------
// | 
// +----------------------------------------------------------------------

namespace app\crm\controller;

use app\admin\controller\ApiCommon;
use think\Hook;
use think\Request;
use think\Db;
use PHPExcel_IOFactory;
use PHPExcel_Cell;
use PHPExcel;

class Leads extends ApiCommon
{
    /**
     * 用于判断权限
     * @permission 无限制
     * @allow 登录用户可访问
     * @other 其他根据系统设置
    **/    
    public function _initialize()
    {
        $action = [
            'permission'=>['exceldownload','setfollow'],
            'allow'=>['']            
        ];
        Hook::listen('check_auth',$action);
        $request = Request::instance();
        $a = strtolower($request->action());        
        if (!in_array($a, $action['permission'])) {
            parent::_initialize();
        }
    } 

    /**
     * 项目列表
     * @author Michael_xu
     * @return 
     */
    public function index()
    {
        $leadsModel = model('Leads');
        $param = $this->param;
        $userInfo = $this->userInfo;
        $param['user_id'] = $userInfo['id'];        
        $data = $leadsModel->getDataList($param);       
        return resultArray(['data' => $data]);
    }

    /**
     * 项目公海
     * @author Michael_xu
     * @return 
     */
    public function pool()
    {
        $leadsModel = model('Leads');
        $param = $this->param;
        //项目公海条件(没有负责人或已经到期)
        $end_time = '';
        $param['update_time'] = array();
        
        $data = $leadsModel->getDataList($param);       
        return resultArray(['data' => $data]);
    }    

    /**
     * 添加项目
     * @author Michael_xu
     * @param  \think\Request  $request
     * @return 
     */
    public function save()
    {
        $leadsModel = model('Leads');
        $param = $this->param;
        $userInfo = $this->userInfo;
        $param['create_user_id'] = $userInfo['id'];
        $param['owner_user_id'] = $userInfo['id'];

        if ($leadsModel->createData($param)) {
            return resultArray(['data' => '添加成功']);
        } else {
            return resultArray(['error' => $leadsModel->getError()]);
        }
    }

    /**
     * 项目详情
     * @author Michael_xu
     * @param  
     * @return 
     */
    public function read()
    {
        $leadsModel = model('Leads');
        $userModel = new \app\admin\model\User();
        $param = $this->param;
        $data = $leadsModel->getDataById($param['id']);
        //判断权限
        $auth_user_ids = $userModel->getUserByPer('crm', 'leads', 'read');
        if (!in_array($data['owner_user_id'],$auth_user_ids)) {
            header('Content-Type:application/json; charset=utf-8');
            exit(json_encode(['code'=>102,'error'=>'无权操作']));
        }          
        if (!$data) {
            return resultArray(['error' => $leadsModel->getError()]);
        }
        return resultArray(['data' => $data]);
    }

    /**
     * 编辑项目
     * @author Michael_xu
     * @param 
     * @return 
     */
    public function update()
    {    
        $leadsModel = model('Leads');
        $param = $this->param;
        $userInfo = $this->userInfo;
        $param['user_id'] = $userInfo['id'];
        // //判断权限
        // $data = $leadsModel->getDataById($param['id']);
        // $auth_user_ids = $userModel->getUserByPer('crm', 'leads', 'update');
        // if (!in_array($data['owner_user_id'],$auth_user_ids)) {
        //     header('Content-Type:application/json; charset=utf-8');
        //     exit(json_encode(['code'=>102,'error'=>'无权操作']));
        // }         
        if ($leadsModel->updateDataById($param, $param['id'])) {
            return resultArray(['data' => '编辑成功']);
        } else {
            return resultArray(['error' => $leadsModel->getError()]);
        }       
    }

    /**
     * 删除项目
     * @author Michael_xu
     * @param 
     * @return 
     */
    public function delete()
    {
        $param = $this->param; 
        $leadsModel = model('Leads');
        $recordModel = new \app\admin\model\Record();
        if (!is_array($param['id'])) {
            $leads_id[] = $param['id'];
        } else {
            $leads_id = $param['id'];
        }
        $delIds = [];
        $errorMessage = [];

        //数据权限判断
        $userModel = new \app\admin\model\User();
        $auth_user_ids = $userModel->getUserByPer('crm', 'leads', 'delete');
        foreach ($leads_id as $k=>$v) {
            $isDel = true;
            //数据详情
            $data = $leadsModel->getDataById($v);
            if (!$data) {
                $isDel = false;
                $errorMessage[] = 'id为'.$v.'的项目删除失败,错误原因：'.$leadsModel->getError();
                continue;
            }
            if (!in_array($data['owner_user_id'],$auth_user_ids)) {
                $isDel = false;
                $errorMessage[] = '名称为'.$data['name'].'的项目删除失败,错误原因：无权操作';
                continue;
            }
            $delIds[] = $v;            
        }
        if ($delIds) {
            $data = $leadsModel->delDatas($delIds);
            if (!$data) {
                return resultArray(['error' => $leadsModel->getError()]);
            } 
            //删除跟进记录
            $recordModel->delDataByTypes('crm_leads',$delIds);            
            actionLog($delIds,'','','');           
        }
        if ($errorMessage) {
            return resultArray(['error' => $errorMessage]);
        } else {
            return resultArray(['data' => '删除成功']);
        }
    } 

    /**
     * 项目转化为客户
     * @author Michael_xu
     * @param
     * @return
     */
    public function transform()
    {
        $leadsModel = model('Leads');
        $customerModel = model('Customer');
        $fieldModel = new \app\admin\model\Field();
        $param = $this->param;
        $userInfo = $this->userInfo;
        $userModel = new \app\admin\model\User();
        $authIds = $userModel->getUserByPer(); //权限范围的user_id
        if (!$param['leads_id'] || !is_array($param['leads_id'])) {
            return resultArray(['error' => '请选择需要转化的项目']); 
        }

        $errorMessage = [];
        foreach ($param['leads_id'] as $leads_id) {
            $data = [];
            $leadsInfo = db('crm_leads')->where(['leads_id' => $leads_id])->find();
            //字段对照关系处理
            $data = $fieldModel->getRelevantData('crm_leads',$leadsInfo) ? : [];
            $data['create_user_id'] = $userInfo['id'];
            $data['owner_user_id'] = $userInfo['id'];
            $data['deal_status'] = '未成交'; 
            $data['deal_time'] = time();            
            $data['create_time'] = time();            
            $data['update_time'] = time();            
            //权限判断
            if (!$leadsInfo) {
                $errorMessage[] = '项目《'.$leadsInfo['name'].'》转化失败，错误原因：数据不存在；';
                continue;                
            }
            if (!in_array($leadsInfo['owner_user_id'],$authIds)) {
                $errorMessage[] = '项目《'.$leadsInfo['name'].'》转化失败，错误原因：无权限；';
                continue;
            }
            $resCustomer = $customerModel->createData($data);
            if (!$resCustomer) {
                $errorMessage[] = '项目《'.$leadsInfo['name'].'》转化失败，错误原因：'.$customerModel->getError();
                continue;
            }
            $leadsData = [];
            $leadsData['is_transform'] = 1; //标记为已转化
            $leadsData['customer_id'] = $resCustomer['customer_id'];
            db('crm_leads')->where(['leads_id' => $leads_id])->update($leadsData);
            //修改记录
            updateActionLog($userInfo['id'], 'crm_customer', $resCustomer['customer_id'], '', '', '将项目"'.$leadsInfo['name'].'转化为客户');               
        }
        if (!$errorMessage) {
            return resultArray(['data' => '转化成功']);
        } else {
            return resultArray(['error' => $errorMessage]);
        }
    } 

    /**
     * 项目转移
     * @author Michael_xu
     * @param owner_user_id 变更负责人
     * @param is_remove 1移出，2转为团队成员
     * @param type 权限 1只读2读写
     * @return
     */ 
    public function transfer()
    {
        $param = $this->param;
        $userInfo = $this->userInfo;
        $leadsModel = model('Leads');
        $settingModel = model('Setting');
        $userModel = new \app\admin\model\User();
        $authIds = $userModel->getUserByPer(); //权限范围的user_id

        if (!$param['owner_user_id']) {
            return resultArray(['error' => '变更负责人不能为空']);
        }
        if (!$param['leads_id'] || !is_array($param['leads_id'])) {
            return resultArray(['error' => '请选择需要转移的项目']); 
        }
        
        $is_remove = $param['is_remove'] == 2 ? : 1;
        $type = $param['type'] == 2 ? : 1;
        
        $data = [];
        $data['owner_user_id'] = $param['owner_user_id'];
        $data['update_time'] = time();
        $data['follow'] = '待跟进';

        $ownerUserName = $userModel->getUserNameById($param['owner_user_id']);
        $errorMessage = [];
        foreach ($param['leads_id'] as $leads_id) {
            $leadsInfo = $leadsModel->getDataById($leads_id);
            if (!$leadsInfo) {
                $errorMessage[] = '名称:为《'.$leadsInfo['name'].'》的项目转移失败，错误原因：数据不存在；';
                continue;
            }
            //权限判断
            if (!in_array($leadsInfo['owner_user_id'],$authIds)) {
                $errorMessage[] = '"'.$leadsInfo['name'].'"转移失败，错误原因：无权限；';
                continue;
            }
            $resLeads = db('crm_leads')->where(['leads_id' => $leads_id])->update($data);
            if (!$resLeads) {
                $errorMessage[] = '"'.$leadsInfo['name'].'"转移失败，错误原因：数据出错；';
                continue;
            }
            //修改记录
            updateActionLog($userInfo['id'], 'crm_leads', $leads_id, '', '', '将项目转移给：'.$ownerUserName);             
        }
        if (!$errorMessage) {    
            return resultArray(['data' => '转移成功']);
        } else {
            return resultArray(['error' => $errorMessage]);
        }
    }

    /**
     * 项目导入模板
     * @author Michael_xu
     * @param 
     * @return
     */ 
    public function excelDownload() 
    {
        $param = $this->param;
        $userInfo = $this->userInfo;
        $excelModel = new \app\admin\model\Excel();

        // 导出的字段列表
        $fieldModel = new \app\admin\model\Field();
        $fieldParam['types'] = 'crm_leads'; 
        $fieldParam['action'] = 'excel'; 
        $field_list = $fieldModel->field($fieldParam);        
        // $field_list = $fieldModel->getIndexFieldList('crm_leads', $userInfo['id']);
        $res = $excelModel->excelImportDownload($field_list, 'crm_leads');
    }  

    /**
     * 项目导出
     * @author Michael_xu
     * @param 
     * @return
     */
    public function excelExport()
    {
        $param = $this->param;
        $userInfo = $this->userInfo;
        $param['user_id'] = $userInfo['id'];
        if ($param['leads_id']) {
           $param['leads_id'] = ['condition' => 'in','value' => $param['leads_id'],'form_type' => 'text','name' => ''];
           $param['is_excel'] = 1;
        }        

        $excelModel = new \app\admin\model\Excel();
        // 导出的字段列表
        $fieldModel = new \app\admin\model\Field();
        $field_list = $fieldModel->getIndexFieldList('crm_leads', $userInfo['id']);
        // 文件名
        $file_name = 'crm_leads_'.date('Ymd');
        $param['pageType'] = 'all'; 
        $excelModel->exportCsv($file_name, $field_list, function($page) use ($param){
            $list = model('Leads')->getDataList($param);
            return $list;
        });
    } 

    /**
     * 项目数据导入
     * @author Michael_xu
     * @param 
     * @return
     */
    public function excelImport()
    {
        $param = $this->param;
        $userInfo = $this->userInfo;
        $excelModel = new \app\admin\model\Excel();
        $param['types'] = 'crm_leads';
        $param['create_user_id'] = $userInfo['id'];
        $param['owner_user_id'] = $param['owner_user_id'] ? : $userInfo['id'];
        $file = request()->file('file');
        $res = $excelModel->importExcel($file, $param);
        if (!$res) {
            return resultArray(['error'=>$excelModel->getError()]);
        }
        return resultArray(['data'=>'导入成功,请手动刷新页面']);
    }

    /**
     * 项目标记为已跟进
     * @author Michael_xu
     * @param 
     * @return
     */
    public function setFollow(){
        $param = $this->param;
        $leadsIds = input('post.id/a') ? : [];
        if (!$leadsIds || !is_array($leadsIds)) {
            return resultArray(['error'=>'参数错误']);
        }
        $data['follow'] = '已跟进';
        $data['update_time'] = time();
        $res = db('crm_leads')->where(['leads_id' => ['in',$leadsIds]])->update($data);
        if (!$res) {
            return resultArray(['error'=>'操作失败，请重试']);
        }
        return resultArray(['data'=>'跟进成功']);        
    }            
}
