(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-222c"],{"+H+P":function(e,t,i){"use strict";var a={name:"edit-image",components:{VueCropper:i("fnnb").VueCropper},computed:{},watch:{show:{handler:function(e){this.showDialog=e},deep:!0,immediate:!0},image:function(e){this.cropperImg=e}},data:function(){return{loading:!1,showDialog:!1,cropperImg:"",previewImg:""}},props:{width:{type:String,default:"450px"},title:{type:String,default:"编辑头像"},saveButtonTitle:{type:String,default:"开始上传"},show:{type:Boolean,default:!1},fixedNumber:{type:Array,default:function(){return[1,1]}},previewWidth:{type:String,default:"70px"},previewHeight:{type:String,default:"70px"},previewRadius:{type:String,default:"35px"},file:[File],image:String},mounted:function(){this.cropperImg=this.image},methods:{realTime:function(e){var t=this;this.$refs.cropper.getCropData(function(e){t.previewImg=e})},submiteImage:function(){var e=this;this.$refs.cropper.getCropBlob(function(t){e.$emit("save",{blob:t,file:e.file,image:e.previewImg}),e.hiddenView()})},hiddenView:function(){this.$emit("close")}}},o=(i("rWvU"),i("KHd+")),n=Object(o.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{title:e.title,width:e.width,"append-to-body":!0,visible:e.showDialog},on:{close:e.hiddenView,"update:visible":function(t){e.showDialog=t}}},[i("flexbox",{staticClass:"content"},[i("div",{staticClass:"cropper-box"},[i("vueCropper",{ref:"cropper",attrs:{canMove:!0,autoCrop:!0,fixed:!0,fixedNumber:e.fixedNumber,outputType:"png",img:e.cropperImg},on:{realTime:e.realTime}})],1),e._v(" "),i("div",{staticClass:"preview"},[i("div",{staticClass:"preview-name"},[e._v("预览")]),e._v(" "),i("img",{staticClass:"preview-img",style:{width:e.previewWidth,height:e.previewHeight,"border-radius":e.previewRadius},attrs:{src:e.previewImg}})])]),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submiteImage()}}},[e._v(e._s(e.saveButtonTitle))])],1)],1)},[],!1,null,"66720548",null);n.options.__file="EditImage.vue";t.a=n.exports},"4aBD":function(e,t,i){"use strict";var a=i("J4v9");i.n(a).a},"8QCs":function(e,t,i){},BjcG:function(e,t,i){},Fj67:function(e,t,i){"use strict";i.r(t);var a=i("EJiy"),o=i.n(a),n=i("QbLZ"),s=i.n(n),r=i("UMFu"),l=i("L2JU"),u=i("+H+P"),c=i("7Qib"),d={name:"edit-info",components:{},computed:s()({},Object(l.b)(["userInfo"])),watch:{show:{handler:function(e){this.showDialog=e,this.ruleForm={realname:this.userInfo.realname,ename:this.userInfo.ename,email:this.userInfo.email,sex:this.userInfo.sex,username:this.userInfo.username}},deep:!0,immediate:!0}},data:function(){return{loading:!1,showDialog:!1,rules:{email:[{validator:function(e,t,i){!t||""==t||Object(c.i)(t)?i():i(new Error("邮箱格式有误"))},trigger:"change"}],username:[{validator:function(e,t,i){!t||""==t||Object(c.j)(t)?i():i(new Error("手机格式有误"))},trigger:"change"}]},ruleForm:{realname:"",email:"",sex:"",username:""}}},props:{show:{type:Boolean,default:!1}},mounted:function(){},methods:{hiddenView:function(){this.$emit("close")},save:function(){var e=this;this.$refs.ruleForm.validate(function(t){if(!t)return!1;e.loading=!0,Object(r.c)(e.ruleForm).then(function(t){e.loading=!1,e.$emit("save"),e.hiddenView()}).catch(function(){e.loading=!1})})}}},m=(i("4aBD"),i("KHd+")),p=Object(m.a)(d,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{title:"编辑个人信息",visible:e.showDialog,width:"500px","before-close":e.hiddenView},on:{"update:visible":function(t){e.showDialog=t}}},[i("el-form",{ref:"ruleForm",staticClass:"create-box",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"80px","label-position":"top"}},[i("el-form-item",{staticClass:"create-item",attrs:{label:"姓名",prop:"name"}},[i("el-input",{model:{value:e.ruleForm.realname,callback:function(t){e.$set(e.ruleForm,"realname",t)},expression:"ruleForm.realname"}})],1),e._v(" "),i("el-form-item",{staticClass:"create-item",attrs:{label:"英文名",prop:"ename"}},[i("el-input",{model:{value:e.ruleForm.ename,callback:function(t){e.$set(e.ruleForm,"ename",t)},expression:"ruleForm.ename"}})],1),e._v(" "),i("el-form-item",{staticClass:"create-item",attrs:{label:"邮箱",prop:"email"}},[i("el-input",{model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),e._v(" "),i("el-form-item",{staticClass:"create-item",attrs:{label:"性别",prop:"sex"}},[i("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"请选择"},model:{value:e.ruleForm.sex,callback:function(t){e.$set(e.ruleForm,"sex",t)},expression:"ruleForm.sex"}},e._l([{label:"男",value:"男"},{label:"女",value:"女"}],function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),i("el-form-item",{staticClass:"create-item",attrs:{label:"手机号（登录名）",prop:"username"}},[i("el-input",{model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保 存")]),e._v(" "),i("el-button",{on:{click:e.hiddenView}},[e._v("取 消")])],1)],1)},[],!1,null,"1a51be72",null);p.options.__file="EditInfo.vue";var f=p.exports,v=i("X4fA"),g={name:"edit-password",components:{},computed:s()({},Object(l.b)(["userInfo"])),watch:{show:{handler:function(e){this.showDialog=e,this.ruleForm.id=this.userInfo.id},deep:!0,immediate:!0}},data:function(){return{loading:!1,showDialog:!1,rules:{old_pwd:[{required:!0,message:"请输入原密码",trigger:"blur"},{min:6,max:12,message:"长度在 6 到 12 个字符",trigger:"blur"}],new_pwd:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,max:12,message:"长度在 6 到 12 个字符",trigger:"blur"}]},ruleForm:{id:"",old_pwd:"",new_pwd:""}}},props:{show:{type:Boolean,default:!1}},mounted:function(){},methods:{hiddenView:function(){this.$emit("close")},save:function(){var e=this;this.$refs.ruleForm.validate(function(t){if(!t)return!1;e.loading=!0,Object(r.b)(e.ruleForm).then(function(t){e.loading=!1,Object(v.c)().then(function(){e.$confirm("修改成功, 请重新登录","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning"}).then(function(){e.$router.push("/login")}).catch(function(){})})}).catch(function(){e.loading=!1})})}}},h=(i("vBYf"),Object(m.a)(g,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{title:"编辑密码",visible:e.showDialog,width:"500px","before-close":e.hiddenView},on:{"update:visible":function(t){e.showDialog=t}}},[i("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"80px","label-position":"top"}},[i("el-form-item",{attrs:{label:"原密码",prop:"old_pwd"}},[i("el-input",{model:{value:e.ruleForm.old_pwd,callback:function(t){e.$set(e.ruleForm,"old_pwd",t)},expression:"ruleForm.old_pwd"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"新密码",prop:"new_pwd"}},[i("el-input",{model:{value:e.ruleForm.new_pwd,callback:function(t){e.$set(e.ruleForm,"new_pwd",t)},expression:"ruleForm.new_pwd"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保 存")]),e._v(" "),i("el-button",{on:{click:e.hiddenView}},[e._v("取 消")])],1)],1)},[],!1,null,"367271a6",null));h.options.__file="EditPassword.vue";var w=h.exports,b={name:"person",components:{EditImage:u.a,EditInfo:f,EditPassword:w},computed:s()({},Object(l.b)(["userInfo"])),data:function(){return{loading:!1,showEditImage:!1,editImage:null,editFile:null,showEditInfo:!1,showEditPassword:!1,list:[{name:"姓名",props:"realname"},{name:"英文名",props:"ename"},{name:"部门",props:"structure_name"},{name:"岗位",props:"post"},{name:"直属上级",props:"parent_name"},{name:"性别",props:"sex"},{name:"手机号（登录名）",props:"username"},{name:"邮箱",props:"email"}]}},mounted:function(){this.getDetail()},methods:{getDetail:function(){var e=this;this.loading=!0,this.$store.dispatch("GetUserInfo").then(function(t){e.loading=!1}).catch(function(){e.loading=!1})},editClick:function(e){"password"==e?this.showEditPassword=!0:"info"==e?this.showEditInfo=!0:"back"==e&&this.$router.go(-1)},changePersonImage:function(){document.getElementById("inputFile").click()},uploadFile:function(e){var t=e.target.files[0],i=new FileReader,a=this;i.onload=function(e){var i=void 0;i="object"===o()(e.target.result)?window.URL.createObjectURL(new Blob([e.target.result])):e.target.result,a.editImage=i,a.editFile=t,a.showEditImage=!0,e.target.value=""},i.readAsDataURL(t)},submiteImage:function(e){var t=this;this.loading=!0;var i=new FormData;i.append("id",this.userInfo.id),i.append("file",e.blob,e.file.name),Object(r.d)(i).then(function(e){t.loading=!1,t.getDetail()}).catch(function(){t.loading=!1})}}},_=(i("KCR/"),Object(m.a)(b,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"person-container"},[i("div",{staticClass:"header-handle"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.editClick("password")}}},[e._v("修改密码")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.editClick("info")}}},[e._v("编辑")]),e._v(" "),i("el-button",{attrs:{plain:""},on:{click:function(t){e.editClick("back")}}},[e._v("返回")])],1),e._v(" "),i("flexbox",{staticClass:"person-info"},[i("div",{staticClass:"person-head"},[i("div",{directives:[{name:"photo",rawName:"v-photo",value:e.userInfo,expression:"userInfo"},{name:"lazy",rawName:"v-lazy:background-image",value:e.$options.filters.filterUserLazyImg(e.userInfo.thumb_img),expression:"$options.filters.filterUserLazyImg(userInfo.thumb_img)",arg:"background-image"}],staticClass:"div-photo person-head-img"}),e._v(" "),i("div",{staticClass:"select-picture",on:{click:e.changePersonImage}},[i("div",[e._v("点击更换头像")])])]),e._v(" "),i("div",{staticClass:"person-body"},[i("div",{staticClass:"person-name"},[e._v(e._s(e.userInfo.realname))]),e._v(" "),i("div",{staticClass:"person-detail"},[e._v("部门："+e._s(e.userInfo.structure_name)+"    职位："+e._s(e.userInfo.post))])])]),e._v(" "),i("div",{staticClass:"segmentation"}),e._v(" "),i("div",{staticClass:"section"},[e._m(0),e._v(" "),i("flexbox",{staticClass:"content",attrs:{gutter:0,wrap:"wrap"}},e._l(e.list,function(t,a){return i("flexbox-item",{key:a,staticClass:"info-cell",attrs:{span:.5}},[i("flexbox",{staticClass:"info-cell-box",attrs:{align:"stretch"}},[i("div",{staticClass:"info-cell-box-name"},[e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"info-cell-box-value"},[e._v(e._s(e.userInfo[t.props]))])])],1)}))],1),e._v(" "),i("input",{attrs:{type:"file",id:"inputFile",accept:"image/png, image/jpeg, image/gif, image/jpg"},on:{change:e.uploadFile}}),e._v(" "),i("edit-image",{attrs:{show:e.showEditImage,file:e.editFile,image:e.editImage},on:{save:e.submiteImage,close:function(t){e.showEditImage=!1}}}),e._v(" "),i("edit-info",{attrs:{show:e.showEditInfo},on:{save:e.getDetail,close:function(t){e.showEditInfo=!1}}}),e._v(" "),i("edit-password",{attrs:{show:e.showEditPassword},on:{save:e.getDetail,close:function(t){e.showEditPassword=!1}}})],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"section-header"},[t("div",{staticClass:"section-mark"}),this._v(" "),t("div",{staticClass:"section-title"},[this._v("基本信息")])])}],!1,null,"325cad14",null));_.options.__file="index.vue";t.default=_.exports},J4v9:function(e,t,i){},"KCR/":function(e,t,i){"use strict";var a=i("8QCs");i.n(a).a},beAH:function(e,t,i){},rWvU:function(e,t,i){"use strict";var a=i("beAH");i.n(a).a},vBYf:function(e,t,i){"use strict";var a=i("BjcG");i.n(a).a}}]);