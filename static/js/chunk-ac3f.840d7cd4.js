(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ac3f"],{EhbK:function(e,t,a){},Ew9n:function(e,t,a){"use strict";var n=a("7Qib"),i={name:"slide-view",components:{},computed:{},watch:{},data:function(){return{zIndex:Object(n.g)()}},props:{bodyStyle:{type:Object,default:{padding:0}},listenerIDs:{type:Array,default:function(){return[]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return[]}},appendToBody:{type:Boolean,default:!1}},mounted:function(){var e=this;this.appendToBody&&document.body.appendChild(this.$el),this.listenerIDs.forEach(function(t){document.getElementById(t)&&document.getElementById(t).addEventListener("click",e.handleDocumentClick,!1)})},methods:{handleDocumentClick:function(e){var t=!0;this.noListenerIDs.forEach(function(a){document.getElementById(a)&&document.getElementById(a).contains(e.target)&&(t=!1)}),this.noListenerClass.forEach(function(a){var n=document.getElementsByClassName(a);if(n&&t)for(var i=0;i<n.length;i++){if(n[i].contains(e.target)){t=!1;break}}}),document.getElementById("slide")&&document.getElementById("slide").contains(e.target)&&(t=!1),t&&this.$emit("side-close")},afterEnter:function(){this.$emit("afterEnter")}},beforeDestroy:function(){this.appendToBody&&this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},s=(a("UY1A"),a("KHd+")),l=Object(s.a)(i,function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"slide-fade"},on:{"after-enter":this.afterEnter}},[t("el-card",{ref:"slide",staticClass:"slide-detail-card-container",style:{"z-index":this.zIndex},attrs:{id:"slide","body-style":this.bodyStyle}},[this._t("default")],2)],1)},[],!1,null,"93380e46",null);l.options.__file="SlideView.vue";t.a=l.exports},GPnW:function(e,t,a){"use strict";var n=a("fI0T");a.n(n).a},HJld:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"d",function(){return s}),a.d(t,"e",function(){return l}),a.d(t,"b",function(){return o}),a.d(t,"c",function(){return r});var n=a("t3Un");function i(e){return Object(n.a)({url:"oa/examine/category",method:"post",data:e})}function s(e){return Object(n.a)({url:"oa/examine/categorySave",method:"post",data:e})}function l(e){return Object(n.a)({url:"oa/examine/categoryUpdate",method:"post",data:e})}function o(e){return Object(n.a)({url:"oa/examine/categoryDelete",method:"post",data:e})}function r(e){return Object(n.a)({url:"oa/examine/categoryEnables",method:"post",data:e})}},RQHa:function(e,t,a){"use strict";var n=a("EhbK");a.n(n).a},UY1A:function(e,t,a){"use strict";var n=a("ZwYg");a.n(n).a},ZwYg:function(e,t,a){},fI0T:function(e,t,a){},pp2O:function(e,t,a){"use strict";var n=a("zNax");a.n(n).a},qtIl:function(e,t,a){"use strict";a.r(t);var n=a("ViDN"),i=a("t3Un");function s(e){return Object(i.a)({url:"admin/examine_flow/save",method:"post",data:e})}function l(e){return Object(i.a)({url:"admin/examine_flow/update",method:"post",data:e})}function o(e){return Object(i.a)({url:"admin/examine_flow/delete",method:"post",data:e})}function r(e){return Object(i.a)({url:"admin/examine_flow/enables",method:"post",data:e})}var c=a("HJld"),u=a("8GhS"),d=a("Ktth"),m=a.n(d),h={name:"create-system-examine",components:{CreateView:n.a,XhInput:u.g,XhTextarea:u.o,XhSelect:u.l,XhUserCell:u.p,XhStrucUserCell:u.m},computed:{title:function(){if("examineflow"===this.handle.type){if("save"===this.handle.action)return"新建审批流程";if("update"===this.handle.action)return"编辑审批流程"}else if("examine"===this.handle.type){if("save"===this.handle.action)return"新建审批类型及审批流";if("update"===this.handle.action)return"编辑审批类型及审批流"}}},data:function(){return{loading:!1,crmRules:{},crmForm:{crmFields:[]},currentPage:1,examineType:1,examineList:[{type:1,value:[],show:!1,options:[{name:"负责人主管",value:1},{name:"指定用户（任意一人）",value:2},{name:"指定用户（多人会签）",value:3}]}]}},filters:{typeToComponentName:function(e){return"text"==e?"XhInput":"textarea"==e?"XhTextarea":"select"==e?"XhSelect":"structure"==e?"XhStrucUserCell":void 0},numberToZh:function(e){return m.a.encodeS(e)}},props:{handle:{type:Object,default:function(){return{type:"examineflow",action:"save",id:"",data:null}}}},mounted:function(){if(document.body.appendChild(this.$el),this.getField(),this.handle.data)if(this.handle.data.config&&1===this.handle.data.config){this.examineType=1,this.examineList=[];for(var e=0;e<this.handle.data.stepList.length;e++){var t=this.handle.data.stepList[e],a={};a.type=t.status,2===t.status||3===t.status?(a.show=!0,a.value=t.user_id_info):(a.show=!1,a.value=[]),a.options=0===e?[{name:"负责人主管",value:1},{name:"指定用户（任意一人）",value:2},{name:"指定用户（多人会签）",value:3}]:[{name:"负责人主管",value:1},{name:"指定用户（任意一人）",value:2},{name:"指定用户（多人会签）",value:3},{name:"上一级审批人主管",value:4}],this.examineList.push(a)}}else this.examineType=0},methods:{fieldValueChange:function(e){this.crmForm.crmFields[e.index].value=e.value},getField:function(){var e=[];"examine"==this.handle.type&&(e.push({field:"title",form_type:"text",is_null:1,name:"审批类型名称",setting:[],input_tips:"",value:""}),e.push({field:"examine_remark",form_type:"textarea",is_null:0,name:"审批类型说明",setting:[],input_tips:"",value:""})),e.push({field:"name",form_type:"text",is_null:1,name:"审批流名称",setting:[],input_tips:"",value:this.handle.data?this.handle.data.name:""}),"examineflow"===this.handle.type&&e.push({field:"types",form_type:"select",is_null:0,name:"关联对象",setting:[{name:"合同",value:"crm_contract"},{name:"回款",value:"crm_receivables"}],value:this.handle.data?this.handle.data.types:"crm_contract"}),e.push({field:"structure",form_type:"structure",is_null:0,name:"应用部门",setting:[],input_tips:"默认全公司",value:{users:this.handle.data?this.handle.data.user_ids_info:[],strucs:this.handle.data?this.handle.data.structure_ids_info:[]}}),e.push({field:"remark",form_type:"textarea",is_null:0,name:"流程说明",setting:[],input_tips:"请填写相关注意事项，方便员工在申请时查阅，限制输入2000字",value:this.handle.data?this.handle.data.remark:""}),this.getcrmRulesAndModel(e)},getcrmRulesAndModel:function(e){for(var t=0;t<e.length;t++){var a=e[t],n=[];1==a.is_null&&n.push({required:!0,message:a.name+"不能为空",trigger:["blur","change"]}),this.crmRules[a.field]=n;var i={};i.value=a.value,i.key=a.field,i.data=a,"textarea"==a.form_type&&(i.showblock=!0),this.crmForm.crmFields.push(i)}},saveField:function(){var e=this;this.$refs.crmForm.validate(function(t){if(!t)return e.$message.error("请完善必填信息"),!1;e.validStepsInfo()&&e.submiteParams(e.crmForm.crmFields)})},validStepsInfo:function(){for(var e=0;e<this.examineList.length;e++){var t=this.examineList[e];if((2===t.type||3===t.type)&&0===t.value.length)return this.$message.error("请添加员工"),!1}return!0},submiteParams:function(e){var t=this;this.loading=!0;var a=this.getSubmiteParams(e);"update"==this.handle.action&&(a.id=this.handle.id),this.getRequest()(a).then(function(e){t.loading=!1,t.hidenView(),t.$message.success(e.data),t.$emit("save")}).catch(function(){t.loading=!1})},getRequest:function(){return"examineflow"===this.handle.type?"update"===this.handle.action?l:s:"examine"===this.handle.type?"update"===this.handle.action?c.e:c.d:void 0},getSubmiteParams:function(e){for(var t={},a=0;a<e.length;a++){var n=e[a];"examineflow"===this.handle.type?"structure"===n.key?(t.user_ids=n.value.users.map(function(e){return e.id}),t.structure_ids=n.value.strucs.map(function(e){return e.id})):t[n.key]=n.value:"examine"===this.handle.type&&("title"===n.key?t.title=n.value:"examine_remark"===n.key&&(t.remark=n.value),t.examineFlow||(t.examineFlow={types:"oa_examine"}),"structure"===n.key?(t.examineFlow.user_ids=n.value.users.map(function(e){return e.id}),t.examineFlow.structure_ids=n.value.strucs.map(function(e){return e.id})):t.examineFlow[n.key]=n.value)}for(var i=[],s=0;s<this.examineList.length;s++){var l=this.examineList[s];i.push({status:l.type,user_id:l.value.map(function(e){return e.id})})}return"examineflow"===this.handle.type?(t.config=this.examineType,t.step=i):"examine"===this.handle.type&&(t.examineFlow.config=this.examineType,t.examineFlow.step=i),t},nextPage:function(){var e=this;this.$refs.crmForm.validate(function(t){t&&(e.currentPage=2)})},selectOptionsChange:function(e){2==e.type||3==e.type?e.show=!0:e.show=!1},selectOptionsFocus:function(e,t){if(this.examineList.length>1){var a=t>0?this.examineList[t-1]:null,n=null;if(t<this.examineList.length-1)n=this.examineList[t+1];var i=!1,s=!1,l=!1;!a||2!==a.type&&3!==a.type||(l=!0),n&&4===n.type&&(i=!0,s=!0);var o=[{name:"负责人主管",value:1}];i||o.push({name:"指定用户（任意一人）",value:2}),s||o.push({name:"指定用户（多人会签）",value:3}),l||o.push({name:"上一级审批人主管",value:4}),e.options=o}},examineItemsAdd:function(){this.examineList.push({type:1,value:[],show:!1,options:[{name:"负责人主管",value:1},{name:"指定用户（任意一人）",value:2},{name:"指定用户（多人会签）",value:3},{name:"上一级审批人主管",value:4}]})},flowUserSelect:function(e){this.examineList[e.index].value=e.value},deleteExamineItems:function(e){this.examineList.splice(e,1)},hidenView:function(){this.$emit("hiden-view")},getPaddingLeft:function(e,t){return e.showblock&&1==e.showblock?"0":t%2==0?"0":"25px"},getPaddingRight:function(e,t){return e.showblock&&1==e.showblock?"0":t%2==0?"25px":"0"}},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},f=(a("RQHa"),a("KHd+")),p=Object(f.a)(h,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("create-view",{attrs:{loading:e.loading,"body-style":{height:"100%"}}},[n("flexbox",{staticClass:"crm-create-container",attrs:{direction:"column",align:"stretch"}},[n("flexbox",{staticClass:"crm-create-header"},[n("div",{staticStyle:{flex:"1","font-size":"17px",color:"#333"}},[e._v(e._s(e.title))]),e._v(" "),n("img",{staticClass:"close",attrs:{src:a("cjwK")},on:{click:e.hidenView}})]),e._v(" "),n("flexbox",{staticClass:"crm-create-flex",attrs:{direction:"column",align:"stretch"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.currentPage,expression:"currentPage == 1"}],staticClass:"crm-create-body"},[n("div",{staticClass:"create-name"},[e._v("基本信息")]),e._v(" "),n("el-form",{ref:"crmForm",staticClass:"crm-create-box",attrs:{model:e.crmForm,"label-position":"top"}},e._l(this.crmForm.crmFields,function(t,a){return n("el-form-item",{key:t.key,class:{"crm-create-block-item":t.showblock,"crm-create-item":!t.showblock},style:{"padding-left":e.getPaddingLeft(t,a),"padding-right":e.getPaddingRight(t,a)},attrs:{prop:"crmFields."+a+".value",rules:e.crmRules[t.key]}},[n("div",{staticStyle:{display:"inline-block"},attrs:{slot:"label"},slot:"label"},[n("div",{staticStyle:{margin:"5px 0","font-size":"12px","word-wrap":"break-word","word-break":"break-all"}},[e._v("\n                "+e._s(t.data.name)+"\n                "),n("span",{staticStyle:{color:"#999"}},[e._v("\n                  "+e._s(t.data.input_tips?"（"+t.data.input_tips+"）":"")+"\n                ")])])]),e._v(" "),n(e._f("typeToComponentName")(t.data.form_type),{tag:"component",attrs:{value:t.value,index:a,item:t,radio:!1},on:{"value-change":e.fieldValueChange}})],1)}))],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:2==e.currentPage,expression:"currentPage == 2"}],staticClass:"crm-create-body"},[n("div",{staticStyle:{padding:"0 20px","font-size":"12px"}},[n("el-radio",{attrs:{label:1},model:{value:e.examineType,callback:function(t){e.examineType=t},expression:"examineType"}},[e._v("固定审批流")]),e._v(" "),n("div",{staticClass:"examine-items"},e._l(e.examineList,function(t,a){return n("flexbox",{key:a,staticClass:"examine-item"},[n("div",{staticClass:"examine-item-name"},[e._v("第"+e._s(e._f("numberToZh")(a+1))+"级")]),e._v(" "),n("el-select",{staticClass:"examine-item-select",attrs:{placeholder:"请选择"},on:{focus:function(n){e.selectOptionsFocus(t,a)},change:function(a){e.selectOptionsChange(t)}},model:{value:t.type,callback:function(a){e.$set(t,"type",a)},expression:"item.type"}},e._l(t.options,function(e){return n("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),e._v(" "),t.show?n("xh-user-cell",{staticClass:"examine-item-user",attrs:{radio:!1,index:a,value:t.value},on:{"value-change":e.flowUserSelect}}):e._e(),e._v(" "),n("i",{staticClass:"el-icon-remove examine-item-delete",on:{click:function(t){e.deleteExamineItems(a)}}})],1)})),e._v(" "),n("div",{staticClass:"examine-items-add"},[n("span",{on:{click:e.examineItemsAdd}},[e._v("+ 添加审批层级")])]),e._v(" "),n("div",{staticClass:"examine-add-des"},[n("p",[n("span",{staticClass:"examine-add-required"},[e._v("*")]),e._v("当选择“负责人主管”审批时。系统仅会通知负责人主管，但负责人所有上级（主管、主管的主管）均可审批。")]),e._v(" "),n("p",[n("span",{staticClass:"examine-add-required"},[e._v("*")]),e._v("当选择多个“指定用户”审批时。如果指定用户没有权限查看对应的合同，系统不会通知其审批。 ")]),e._v(" "),n("p",[n("span",{staticClass:"examine-add-required"},[e._v("*")]),e._v("当选择“指定用户（任意一人）”表示指定用户中任意一人审批即可。当选择“指定用户（多人会签）”表示 指定用户中所有人都要审批。")])]),e._v(" "),n("el-radio",{attrs:{label:0},model:{value:e.examineType,callback:function(t){e.examineType=t},expression:"examineType"}},[e._v("授权审批人")])],1)])]),e._v(" "),1==e.currentPage?n("div",{staticClass:"handle-bar"},[n("el-button",{staticClass:"handle-button",nativeOn:{click:function(t){return e.hidenView(t)}}},[e._v("取消")]),e._v(" "),n("el-button",{staticClass:"handle-button",attrs:{type:"primary"},nativeOn:{click:function(t){return e.nextPage(t)}}},[e._v("下一页")])],1):e._e(),e._v(" "),2==e.currentPage?n("div",{staticClass:"handle-bar"},[n("el-button",{staticClass:"handle-button",nativeOn:{click:function(t){return e.hidenView(t)}}},[e._v("取消")]),e._v(" "),n("el-button",{staticClass:"handle-button",attrs:{type:"primary"},nativeOn:{click:function(t){return e.saveField(t)}}},[e._v("保存")]),e._v(" "),n("el-button",{staticClass:"handle-button",attrs:{type:"primary"},nativeOn:{click:function(t){e.currentPage=1}}},[e._v("上一页")])],1):e._e()],1)],1)},[],!1,null,"5411b2b9",null);p.options.__file="CreateSystemExamine.vue";var v=p.exports,_=a("P2sY"),g=a.n(_),x=a("Ew9n"),y=a("EP+0"),w={name:"system-examine-detail",components:{SlideView:x.a,CreateSections:y.a},props:{data:Object},filters:{formatedScopeInfo:function(e){for(var t="",a=e.structure_ids_info?e.structure_ids_info:[],n=0;n<a.length;n++){t=t+a[n].name+"、"}for(var i=e.user_ids_info?e.user_ids_info:[],s=0;s<i.length;s++){t=t+i[s].realname+(s===i.length-1?"":"、")}return t||"全公司"},toRowName:function(e){return"第"+m.a.encodeS(e)+"级"},toRowNameDes:function(e){return 1==e.status?"负责人主管":2==e.status?e.user_id_info.length+"人或签":3==e.status?e.user_id_info.length+"人会签":4==e.status?"上一级审批人主管":""}},watch:{data:function(e){this.getShowData()}},data:function(){return{showData:{},examineStatus:!1}},computed:{},mounted:function(){this.getShowData()},methods:{deleteClick:function(){var e=this;this.$confirm("您确定要删除该审批流?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o({id:e.data.flow_id}).then(function(t){e.$emit("refresh"),e.hideView(),e.$message({type:"success",message:t.data})}).catch(function(){})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},getShowData:function(){this.showData=g()({},this.data),this.examineStatus=0!=this.showData.status},examineStatusChange:function(){var e=this;this.showData.status=this.examineStatus?1:0,this.$confirm("您确定要"+(0===this.examineStatus?"启用":"停用")+"该审批流?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r({id:e.data.flow_id,status:0===e.examineStatus?1:0}).then(function(t){e.$emit("refresh"),e.$message({type:"success",message:t.data})}).catch(function(){e.cancelStatusChange()})}).catch(function(){e.cancelStatusChange(),e.$message({type:"info",message:"已取消删除"})})},cancelStatusChange:function(){this.examineStatus=!this.examineStatus,this.showData.status=this.examineStatus?1:0},hideView:function(){this.$emit("hide-view")}}},b=(a("pp2O"),Object(f.a)(w,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("slide-view",{staticClass:"d-view",attrs:{listenerIDs:["manager-main-container"],noListenerIDs:["examine-table"],appendToBody:!0,"body-style":{padding:"10px 30px",height:"100%"}},on:{"side-close":e.hideView}},[n("flexbox",{staticStyle:{height:"100%"},attrs:{orient:"vertical"}},[n("div",{staticClass:"header"},[n("flexbox",{staticClass:"detail-header"},[n("div",{staticClass:"header-name"},[e._v(e._s(e.showData.name)),n("i",{staticClass:"el-icon-delete delete",on:{click:e.deleteClick}})]),e._v(" "),n("img",{staticClass:"header-close",attrs:{src:a("cjwK")},on:{click:e.hideView}})]),e._v(" "),n("div",{staticClass:"detail-header-des"},[n("div",{staticClass:"status"},[e._v("状态："+e._s(0==e.showData.status?"停用":"启用"))]),e._v(" "),n("div",{staticClass:"status-handle"},[e._v("\n          启用\n          "),n("el-switch",{on:{change:e.examineStatusChange},model:{value:e.examineStatus,callback:function(t){e.examineStatus=t},expression:"examineStatus"}})],1)])],1),e._v(" "),n("div",{staticClass:"detail-body"},[n("create-sections",{staticClass:"create-sections",attrs:{title:"基本信息"}},[n("div",{staticClass:"create-sections-content"},[n("div",{staticClass:"dialog-content"},[n("flexbox",{staticClass:"content-items"},[n("div",{staticClass:"content-items-name"},[e._v("审批名称")]),e._v(" "),n("div",{staticClass:"content-items-value"},[e._v(e._s(e.showData.name))])]),e._v(" "),n("flexbox",{staticClass:"content-items"},[n("div",{staticClass:"content-items-name"},[e._v("适用范围")]),e._v(" "),n("div",{staticClass:"content-items-value"},[e._v(e._s(e._f("formatedScopeInfo")(e.showData)))])]),e._v(" "),n("flexbox",{staticClass:"content-items"},[n("div",{staticClass:"content-items-name"},[e._v("审批说明")]),e._v(" "),n("div",{staticClass:"content-items-value"},[e._v(e._s(e.showData.remark))])])],1)])]),e._v(" "),n("create-sections",{staticClass:"create-sections",attrs:{title:"流程"}},[1==e.showData.config?n("div",{staticClass:"create-sections-content"},e._l(e.showData.stepList,function(t,a){return n("flexbox",{key:a,staticClass:"examine-flow",attrs:{align:"stretch"}},[n("div",{staticClass:"examine-flow-header"},[n("div",{staticClass:"mark-circle"}),e._v(" "),0!=a?n("div",{staticClass:"mark-top-line"}):e._e(),e._v(" "),a<e.showData.stepList.length-1?n("div",{staticClass:"mark-bottom-line"}):e._e()]),e._v(" "),n("div",{staticClass:"examine-flow-body"},[n("div",{staticClass:"body-header"},[n("span",{staticClass:"body-header-name"},[e._v(e._s(e._f("toRowName")(a+1)))]),n("span",{staticClass:"body-header-des"},[e._v("（"+e._s(e._f("toRowNameDes")(t))+"）")])]),e._v(" "),t.user_id_info.length>0?n("flexbox",{staticClass:"examine-users"},e._l(t.user_id_info,function(t,a){return n("div",{key:a,staticClass:"examine-users-item"},[n("div",{directives:[{name:"photo",rawName:"v-photo",value:t,expression:"userItem"},{name:"lazy",rawName:"v-lazy:background-image",value:e.$options.filters.filterUserLazyImg(t.thumb_img),expression:"$options.filters.filterUserLazyImg(userItem.thumb_img)",arg:"background-image"}],key:t.thumb_img,staticClass:"div-photo"}),e._v(" "),n("div",{staticClass:"name"},[e._v(e._s(t.realname))])])})):e._e()],1)])})):n("div",{staticClass:"create-sections-content"},[e._v("授权审批人")])])],1)])],1)},[],!1,null,"7f8dfa6d",null));b.options.__file="systemExamineDetail.vue";var C=b.exports,k=(a("7Qib"),{name:"system-examine",components:{CreateSystemExamine:v,SystemExamineDetail:C},mixins:[],data:function(){return{loading:!1,tableHeight:document.documentElement.clientHeight-240,list:[],fieldList:[{prop:"name",label:"审批流名称",width:150},{prop:"config",label:"流程类型",width:150},{prop:"types",label:"关联对象",width:100},{prop:"user_ids",label:"适用范围",width:150},{prop:"realname",label:"最后修改人",width:150},{prop:"update_time",label:"最后修改时间",width:150},{prop:"status",label:"状态",width:100}],currentPage:1,pageSize:10,pageSizes:[10,20,30,40],total:0,showHandleView:!1,createHandleInfo:{action:"save",type:"examineflow",id:""},showDetail:!1,detailData:{}}},computed:{},mounted:function(){var e=this;window.onresize=function(){e.tableHeight=document.documentElement.clientHeight-240},this.getList()},methods:{getList:function(){var e=this;this.loading=!0,function(e){return Object(i.a)({url:"admin/examine_flow/index",method:"post",data:e})}({page:this.currentPage,limit:this.pageSize}).then(function(t){e.list=t.data.list,e.total=t.data.dataCount,e.loading=!1}).catch(function(){e.loading=!1})},fieldFormatter:function(e,t){if("config"===t.property)return 1===e[t.property]?"固定审批流":0===e[t.property]?"授权审批人":"";if("types"===t.property)return{crm_contract:"合同",crm_receivables:"回款"}[e[t.property]];if("user_ids"===t.property){for(var a="",n=e.structure_ids_info,i=0;i<n.length;i++){a=a+n[i].name+"、"}for(var s=e.user_ids_info,l=0;l<s.length;l++){a=a+s[l].realname+(l===s.length-1?"":"、")}return a||"全公司"}return"status"===t.property?0===e[t.property]?"停用":"启用":e[t.property]},addExamine:function(){this.createHandleInfo={action:"save",type:"examineflow",id:""},this.showHandleView=!0},handleRowClick:function(e,t,a){t.property&&(this.detailData=e,this.showDetail=!0)},handleSizeChange:function(e){this.pageSize=e,this.getList()},handleCurrentChange:function(e){this.currentPage=e,this.getList()},handleClick:function(e,t){var a=this;"edit"===e?(this.createHandleInfo.action="update",this.createHandleInfo.id=t.row.flow_id,this.createHandleInfo.data=t.row,this.showHandleView=!0):"delete"===e?this.$confirm("您确定要删除该审批流?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o({id:t.row.flow_id}).then(function(e){a.list.splice(t.$index,1),a.getList(),a.$message({type:"success",message:e.data})}).catch(function(){})}).catch(function(){a.$message({type:"info",message:"已取消删除"})}):"change"===e?this.$confirm("您确定要"+(0===t.row.status?"启用":"停用")+"该审批流?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r({id:t.row.flow_id,status:0===t.row.status?1:0}).then(function(e){t.row.status=0===t.row.status?1:0,a.$message({type:"success",message:e.data})}).catch(function(){})}).catch(function(){a.$message({type:"info",message:"已取消删除"})}):"copy"===e&&(this.createHandleInfo.action="save",this.createHandleInfo.id="",this.createHandleInfo.data=t.row,this.showHandleView=!0)}}}),S=(a("GPnW"),Object(f.a)(k,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"se-container"},[a("div",{staticClass:"se-header"},[e._v("审批流程管理")]),e._v(" "),a("div",{staticClass:"se-body"},[a("div",{staticClass:"se-table-header"},[a("el-button",{staticClass:"se-table-header-button",attrs:{type:"primary"},on:{click:e.addExamine}},[e._v("添加审批流程")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main-table",staticStyle:{width:"100%"},attrs:{id:"examine-table",data:e.list,height:e.tableHeight,"highlight-current-row":""},on:{"row-click":e.handleRowClick}},[e._l(e.fieldList,function(t,n){return a("el-table-column",{key:n,attrs:{"show-overflow-tooltip":"",formatter:e.fieldFormatter,prop:t.prop,width:t.width,label:t.label},scopedSlots:e._u([{key:"header",fn:function(t){return[a("div",{staticClass:"table-head-name"},[e._v(e._s(t.column.label))])]}}])})}),e._v(" "),a("el-table-column"),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick("edit",t)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick("delete",t)}}},[e._v("删除")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick("change",t)}}},[e._v(e._s(0===t.row.status?"启用":"停用"))]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick("copy",t)}}},[e._v("复制并新建")])]}}])})],2),e._v(" "),a("div",{staticClass:"p-contianer"},[a("el-pagination",{staticClass:"p-bar",attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:pageSize":function(t){e.pageSize=t}}})],1)],1),e._v(" "),e.showHandleView?a("create-system-examine",{attrs:{handle:e.createHandleInfo},on:{save:e.getList,"hiden-view":function(t){e.showHandleView=!1}}}):e._e(),e._v(" "),e.showDetail?a("system-examine-detail",{attrs:{data:e.detailData},on:{refresh:e.getList,"hide-view":function(t){e.showDetail=!1}}}):e._e()],1)},[],!1,null,"ed953e98",null));S.options.__file="SystemExamine.vue";t.default=S.exports},zNax:function(e,t,a){}}]);