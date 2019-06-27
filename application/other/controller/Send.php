<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/6/27
 * Time: 16:51
 */
namespace app\other\controller;

use think\Request;
use think\Db;
use app\common\adapter\AuthAdapter;
use app\common\controller\Common;

class Send extends Common
{
    public function mail(){
        halt(1);
    }
}