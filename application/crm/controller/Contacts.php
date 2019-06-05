<?php
// +----------------------------------------------------------------------
// | Description: 联系人
// +----------------------------------------------------------------------
// | 
// +----------------------------------------------------------------------

namespace app\crm\controller;

use app\admin\controller\ApiCommon;
use think\Hook;
use think\Request;
use think\Db;

class Contacts extends ApiCommon
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
            'permission'=>['exceldownload'],
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
     * 联系人列表
     * @author Michael_xu
     * @return 
     */
    public function index()
    {
        $contactsModel = model('Contacts');
        $param = $this->param;
        $userInfo = $this->userInfo;
        $param['user_id'] = $userInfo['id'];
        $data = $contactsModel->getDataList($param);       
        return resultArray(['data' => $data]);
    }

    /**
     * 添加联系人
     * @author Michael_xu
     * @param 
     * @return 
     */
    public function save()
    {
        $contactsModel = model('Contacts');
        $param = $this->param;
        $userInfo = $this->userInfo;
        $param['create_user_id'] = $userInfo['id'];
        $param['owner_user_id'] = $userInfo['id'];
        
        if ($data = $contactsModel->createData($param)) {
            //关联 联系人与项目  客户添加与项目添加联系人可共用此接口
            $business_id = $param['business_id']?$param['business_id']:0;
            if($business_id != 0){
                $data['cancel_or_relation'] = 1;// 1:关联 0取消
                $data['business_id'] = $business_id;
                if ($res =  Db::name('crm_contacts_business')->data($data)->insert()) {
                    return resultArray(['data' => '添加成功']);
                } else {
                    return resultArray(['error' => Db::name('crm_contacts_business')->getError()]);
                }
            }
            return resultArray(['data' => '添加成功']);
        } else {
            return resultArray(['error' => $contactsModel->getError()]);
        }
    }

    /**
     * 联系人详情
     * @author Michael_xu
     * @param  
     * @return 
     */
    public function read()
    {
        $contactsModel = model('Contacts');
        $userModel = new \app\admin\model\User();
        $param = $this->param;
        $data = $contactsModel->getDataById($param['id']);
        //判断权限
        $auth_user_ids = $userModel->getUserByPer('crm', 'contacts', 'read');
        if (!in_array($data['owner_user_id'],$auth_user_ids)) {
            header('Content-Type:application/json; charset=utf-8');
            exit(json_encode(['code'=>102,'error'=>'无权操作']));
        }         
        if (!$data) {
            return resultArray(['error' => $contactsModel->getError()]);
        }
        return resultArray(['data' => $data]);
    }

    /**
     * 编辑联系人
     * @author Michael_xu
     * @param 
     * @return 
     */
    public function update()
    {    
        $contactsModel = model('Contacts');
        $userModel = new \app\admin\model\User();
        $param = $this->param;
        $userInfo = $this->userInfo;
        $param['user_id'] = $userInfo['id'];

        //判断权限
        $data = $contactsModel->getDataById($param['id']);
        $auth_user_ids = $userModel->getUserByPer('crm', 'contacts', 'update');
        if (!in_array($data['owner_user_id'],$auth_user_ids)) {
            header('Content-Type:application/json; charset=utf-8');
            exit(json_encode(['code'=>102,'error'=>'无权操作']));
        }        
        if ($contactsModel->updateDataById($param, $param['id'])) {
            return resultArray(['data' => '编辑成功']);
        } else {
            return resultArray(['error' => $contactsModel->getError()]);
        }      
    }

    /**
     * 删除联系人
     * @author Michael_xu
     * @param 
     * @return 
     */
    public function delete()
    {
        $contactsModel = model('Contacts');
        $param = $this->param;        

        if (!is_array($param['id'])) {
            $contacts_id[] = $param['id'];
        } else {
            $contacts_id = $param['id'];
        }
        $delIds = [];
        $errorMessage = [];

        //数据权限判断
        $userModel = new \app\admin\model\User();
        $auth_user_ids = $userModel->getUserByPer('crm', 'business', 'delete');
        foreach ($contacts_id as $k=>$v) {
            $isDel = true;
            //数据详情
            $data = $contactsModel->getDataById($v);
            if (!$data) {
                $isDel = false;
                $errorMessage[] = 'id为'.$v.'的联系人删除失败,错误原因：'.$contactsModel->getError();
                continue;
            }
            if (!in_array($data['owner_user_id'],$auth_user_ids)) {
                $isDel = false;
                $errorMessage[] = '名称为'.$data['name'].'的联系人删除失败,错误原因：无权操作';
                continue;
            }
            $delIds[] = $v;            
        }
        if ($delIds) {
            $data = $contactsModel->delDatas($delIds);
            if (!$data) {
                return resultArray(['error' => $contactsModel->getError()]);
            }
            //删除操作记录
            $actionRecordModel = new \app\admin\model\ActionRecord();
            $res = $actionRecordModel->delDataById(['types' => 'crm_contacts','action_id' => $delIds]);                        
        }        
        if ($errorMessage) {
            return resultArray(['error' => $errorMessage]);
        } else {
            return resultArray(['data' => '删除成功']);
        }         
    }      

    /**
     * 联系人转移
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
        $contactsModel = model('Contacts');
        $settingModel = model('Setting');
        $userModel = new \app\admin\model\User();
        $authIds = $userModel->getUserByPer(); //权限范围的user_id

        if (!$param['owner_user_id']) {
            return resultArray(['error' => '变更负责人不能为空']);
        }
        if (!$param['contacts_id'] || !is_array($param['contacts_id'])) {
            return resultArray(['error' => '请选择需要转移的联系人']); 
        }
        
        $is_remove = $param['is_remove'] == 2 ? : 1;
        $type = $param['type'] == 2 ? : 1;
        
        $data = [];
        $data['owner_user_id'] = $param['owner_user_id'];
        $data['update_time'] = time();
        $errorMessage = [];
        foreach ($param['contacts_id'] as $contacts_id) {
            $contactsInfo = $contactsModel->getDataById($contacts_id);

            if (!$contactsInfo) {
                $errorMessage[] = 'id:为'.$contacts_id.'的联系人转移失败，错误原因：数据不存在；';
                continue;
            }
            //权限判断
            if (!in_array($contactsInfo['owner_user_id'],$authIds)) {
                $errorMessage[] = $contactsInfo['name'].'"转移失败，错误原因：无权限；';
                continue;
            }
            $resContacts = db('crm_contacts')->where(['contacts_id' => $contacts_id])->update($data);
            if (!$resContacts) {
                $errorMessage[] = $contactsInfo['name'].'"转移失败，错误原因：数据出错；';
                continue;
            }
        }
        if (!$errorMessage) {
            return resultArray(['data' => '转移成功']);
        } else {
            return resultArray(['error' => $errorMessage]);
        }
    }

    /**
     * 联系人导入模板
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
        $fieldParam['types'] = 'crm_contacts'; 
        $fieldParam['action'] = 'excel'; 
        $field_list = $fieldModel->field($fieldParam);
        $res = $excelModel->excelImportDownload($field_list, 'crm_contacts');
    }  

    /**
     * 联系人导出
     * @author Michael_xu
     * @param 
     * @return
     */
    public function excelExport()
    {
        $param = $this->param;
        $userInfo = $this->userInfo;
        $param['user_id'] = $userInfo['id'];
        if ($param['contacts_id']) {
           $param['contacts_id'] = ['condition' => 'in','value' => $param['contacts_id'],'form_type' => 'text','name' => ''];
           $param['is_excel'] = 1;
        }        

        $excelModel = new \app\admin\model\Excel();
        // 导出的字段列表
        $fieldModel = new \app\admin\model\Field();
        $field_list = $fieldModel->getIndexFieldList('crm_contacts', $userInfo['id']);
        // 文件名
        $file_name = 'crm_contacts_'.date('Ymd');
        $param['pageType'] = 'all'; 
        $excelModel->exportCsv($file_name, $field_list, function($page) use ($param){
            $list = model('Contacts')->getDataList($param);
            return $list;
        });
    } 

    /**
     * 联系人数据导入
     * @author Michael_xu
     * @param 
     * @return
     */
    public function excelImport()
    {
        $param = $this->param;
        $userInfo = $this->userInfo;
        $excelModel = new \app\admin\model\Excel();
        $param['types'] = 'crm_contacts';
        $param['create_user_id'] = $userInfo['id'];
        $param['owner_user_id'] = $param['owner_user_id'] ? : $userInfo['id'];
        $file = request()->file('file');
        $res = $excelModel->importExcel($file, $param);
        if (!$res) {
            return resultArray(['error'=>$excelModel->getError()]);
        }
        return resultArray(['data'=>'导入成功']);
    }     
    /**
     * 联系人  关联/取消关联  项目
     * @return [type] [description]
     */
    public function relation()
    {
        $param = $this->param;
        // $param['cancel_or_relation'] = 1;// 1:关联 0取消
        // $param['contacts_id'] = 1;
        // $param['business_id'] = 7;
        $id = Db::name('crm_contacts_business')->where(['contacts_id' => ['eq',$param['contacts_id']],'business_id' => ['eq',$param['business_id']]])->column('id');
        if($id){
            if ($res = Db::name('crm_contacts_business')->where('id',$id[0])->update($param)) {
                return resultArray(['data' => $res]);
            } else {
                return resultArray(['error' => Db::name('crm_contacts_business')->getError()]);
            }
        }else{
            if ($res =  Db::name('crm_contacts_business')->data($param)->insert()) {
                return resultArray(['data' => $res]);
            } else {
                return resultArray(['error' => Db::name('crm_contacts_business')->getError()]);
            }
        }
    } 
    /**
     * 关联展示   联系人模块展示项目    项目模块展示联系人
     * @return [type] [description]
     */
    public function relationInfo()
    {
        $param = $this->param;
        if(empty($param['contacts_id']) && empty($param['business_id'])){
            $errorMessage[] = '参数错误！';
            return resultArray(['error' => $errorMessage]);
        }else{
            if($param['contacts_id']){
                $businessModel = model('Business');
                $list = Db::name('crm_contacts_business')->field('business_id')->where(['cancel_or_relation' => ['eq',1],'contacts_id' => ['eq',$param['contacts_id']]])->select();
                foreach ($list as $key => $value) {
                    $data = $businessModel->getDataById($value['business_id']);
                    $list[$key][] = $data;
                }
            }else{
                $contactsModel = model('Contacts');
                $list = Db::name('crm_contacts_business')->field('business_id')->where(['cancel_or_relation' => ['eq',1],'business_id' => ['eq',$param['business_id']]])->select();
                foreach ($list as $key => $value) {
                    $data = $contactsModel->getDataById($value['business_id']);
                    $list[$key][] = $data;
                }
            }
            return resultArray(['data' => $list]);
        }
    }
}
