(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1e6f"],{"9dyF":function(e,t,a){},"9xER":function(e,t,a){"use strict";var i=a("QaXd");a.n(i).a},DdS2:function(e,t,a){"use strict";var i=a("J1TW");a.n(i).a},"EPw/":function(e,t,a){},HReK:function(e,t,a){},J1TW:function(e,t,a){},JNa0:function(e,t,a){"use strict";var i=a("tY/4");a.n(i).a},K6D0:function(e,t,a){"use strict";var i=a("ooHJ"),n=a("Ew9n"),s=a("F03V"),l=a("U05J"),o=a("8DbX"),c=a("EgJF"),r=a("3biH"),d=(a("7Qib"),a("4+0Q")),u={name:"money-detail",components:{SlideView:n.a,CRMDetailHead:s.a,CRMBaseInfo:l.a,RelativeHandle:o.a,ExamineInfo:r.a,CRMCreateView:c.default},mixins:[d.a],props:{id:[String,Number],listenerIDs:{type:Array,default:function(){return["crm-main-container"]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,crmType:"receivables",detailData:{},headDetails:[{title:"客户名称",value:""},{title:"合同金额",value:""},{title:"合同名称",value:""},{title:"回款日期",value:""},{title:"回款金额",value:""},{title:"负责人",value:""}],tabnames:[{label:"基本信息",name:"basicinfo"},{label:"操作记录",name:"operationlog"}],tabCurrentName:"basicinfo",isCreate:!1}},computed:{tabName:function(){return"basicinfo"==this.tabCurrentName?"c-r-m-base-info":"operationlog"==this.tabCurrentName?"relative-handle":""}},mounted:function(){},methods:{getDetial:function(){var e=this;this.loading=!0,Object(i.f)({id:this.id}).then(function(t){e.loading=!1,e.detailData=t.data,e.headDetails[0].value=t.data.customer_id_info?t.data.customer_id_info.name:"",e.headDetails[1].value=t.data.contract_id_info?t.data.contract_id_info.money:"",e.headDetails[2].value=t.data.contract_id_info?t.data.contract_id_info.name:"",e.headDetails[3].value="0000-00-00"==t.data.return_time?"":t.data.return_time,e.headDetails[4].value=t.data.money,e.headDetails[5].value=t.data.owner_user_id_info?t.data.owner_user_id_info.realname:""}).catch(function(){e.loading=!1})},hideView:function(){this.$emit("hide-view")},handleClick:function(e,t){},editSaveSuccess:function(){this.$emit("handle",{type:"save-success"}),this.getDetial()}}},m=(a("DdS2"),a("KHd+")),v=Object(m.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("slide-view",{directives:[{name:"empty",rawName:"v-empty",value:!e.canShowDetail,expression:"!canShowDetail"}],attrs:{listenerIDs:e.listenerIDs,noListenerIDs:e.noListenerIDs,noListenerClass:e.noListenerClass,"body-style":{padding:0,height:"100%"}},on:{"side-close":e.hideView}},[e.canShowDetail?a("flexbox",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"d-container",attrs:{"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限",direction:"column",align:"stretch"}},[a("c-r-m-detail-head",{attrs:{crmType:"receivables",detail:e.detailData,headDetails:e.headDetails,id:e.id},on:{handle:e.detailHeadHandle,close:e.hideView}}),e._v(" "),a("div",{staticClass:"examine-info"},[a("examine-info",{staticClass:"examine-info-border",attrs:{id:e.id,examineType:"crm_receivables",flow_id:e.detailData.flow_id}})],1),e._v(" "),a("div",{staticClass:"tabs"},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.tabCurrentName,callback:function(t){e.tabCurrentName=t},expression:"tabCurrentName"}},e._l(e.tabnames,function(e,t){return a("el-tab-pane",{key:t,attrs:{label:e.label,name:e.name}})}))],1),e._v(" "),a("div",{staticClass:"t-loading-content"},[a("keep-alive",[a(e.tabName,{tag:"component",attrs:{crmType:"receivables",detail:e.detailData,id:e.id}})],1)],1)],1):e._e(),e._v(" "),e.isCreate?a("c-r-m-create-view",{attrs:{"crm-type":"receivables",action:{type:"update",id:this.id}},on:{"save-success":e.editSaveSuccess,"hiden-view":function(t){e.isCreate=!1}}}):e._e()],1)},[],!1,null,"7ca74169",null);v.options.__file="MoneyDetail.vue";t.a=v.exports},PS1M:function(e,t,a){"use strict";var i=a("qbf4"),n=a("Ew9n"),s=a("F03V"),l=a("UEWd"),o=a("QJC7"),c=a("8KPp"),r=a("gd5k"),d=a("aQg/"),u=a("y9lt"),m=a("KzkL"),v=a("7Qib"),p=a("i68b"),f={name:"contacts-follow",components:{MixAdd:l.a,RecordLog:o.a,JournalLog:c.a,ExamineLog:r.a,TaskLog:d.a,ScheduleLog:u.a},mixins:[p.a],props:{id:[String,Number],crmType:{type:String,default:""}},watch:{},data:function(){return{sendLoading:!1,next_time:"",is_event:!1,logType:"record",logTypes:[{type:"record",name:"跟进记录"},{type:"log",name:"日志"},{type:"examine",name:"审批"},{type:"task",name:"任务"},{type:"schedule",name:"日程"}]}},computed:{componentsName:function(){return"record"==this.logType?"RecordLog":"log"==this.logType?"JournalLog":"examine"==this.logType?"ExamineLog":"task"==this.logType?"TaskLog":"schedule"==this.logType?"ScheduleLog":""}},mounted:function(){},activated:function(){},deactivated:function(){},methods:{handleTypeDrop:function(e){this.followType=e},logTabsClick:function(e,t){this.logType=e.type},sendInfo:function(){this.$refs.mixadd.$emit("submit-info")},submitInfo:function(e){var t=this;if(!this.is_event||this.next_time){var a={};a.types="crm_"+this.crmType,a.types_id=this.id,a.content=e.content,a.category=this.followType;var i=e.images.map(function(e,t,a){return e.file_id}),n=e.files.map(function(e,t,a){return e.file_id});a.file_id=i.concat(n),this.next_time&&(a.is_event=this.is_event?1:0,a.next_time=Object(v.d)(this.next_time)),this.sendLoading=!0,Object(m.l)(a).then(function(e){t.sendLoading=!1,t.$message.success(e.data),t.$refs.mixadd.resetInfo(),t.is_event=!1,t.next_time="",t.$bus.emit("follow-log-refresh",{type:"record-log"})}).catch(function(){t.sendLoading=!1})}else this.$message.error("请选择下次联系时间")}}},h=(a("oI+y"),a("KHd+")),g=Object(h.a)(f,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"f-container"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.sendLoading,expression:"sendLoading"}]},[a("mix-add",{ref:"mixadd",attrs:{crmType:e.crmType,id:e.id},on:{"mixadd-info":e.submitInfo}}),e._v(" "),a("flexbox",{staticClass:"se-section"},[a("div",{staticClass:"se-name"},[e._v("记录类型")]),e._v(" "),a("el-dropdown",{staticStyle:{"margin-right":"20px"},attrs:{trigger:"click"},on:{command:e.handleTypeDrop}},[a("flexbox",{staticClass:"se-select"},[a("div",{staticClass:"se-select-name"},[e._v(e._s(e.followType?e.followType:"请选择"))]),e._v(" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right",staticStyle:{color:"#ccc"}})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.followTypes,function(t,i){return a("el-dropdown-item",{key:i,attrs:{command:t.type}},[e._v(e._s(t.name))])}))],1),e._v(" "),a("div",{staticClass:"se-name"},[e._v("下次联系时间")]),e._v(" "),a("el-date-picker",{staticClass:"se-datepicker",attrs:{type:"datetime",placeholder:"选择日期","default-value":new Date,"value-format":"yyyy-MM-dd HH:mm:ss",editable:!1},model:{value:e.next_time,callback:function(t){e.next_time=t},expression:"next_time"}}),e._v(" "),a("el-checkbox",{model:{value:e.is_event,callback:function(t){e.is_event=t},expression:"is_event"}},[e._v("添加到日程提醒")]),e._v(" "),a("el-button",{staticClass:"se-send",attrs:{type:"primary"},nativeOn:{click:function(t){return e.sendInfo(t)}}},[e._v("发布")])],1)],1),e._v(" "),a("div",{staticClass:"log-cont"},[e.logTypes.length>0?a("flexbox",{staticStyle:{"border-bottom":"1px solid #E6E6E6"}},e._l(e.logTypes,function(t,i){return a("flexbox",{key:i,staticStyle:{width:"auto"},nativeOn:{click:function(a){e.logTabsClick(t,i)}}},[a("div",{staticClass:"log-tabs-item",style:{color:e.logType==t.type?"#F18C70":"#777"}},[e._v(e._s(t.name))]),e._v(" "),e.logTypes.length-1!=i?a("div",{staticClass:"log-tabs-line"}):e._e()])})):e._e(),e._v(" "),a("keep-alive",[a(e.componentsName,{tag:"component",attrs:{id:e.id,crmType:e.crmType}})],1)],1)])},[],!1,null,"6741833e",null);g.options.__file="ContactsFollow.vue";var b=g.exports,_=a("U05J"),y=a("5j45"),C=a("8DbX"),w=a("C+sD"),x=a("EgJF"),D=(a("wd/R"),a("4+0Q")),T={name:"contacts-detail",components:{SlideView:n.a,CRMDetailHead:s.a,ContactsFollow:b,CRMBaseInfo:_.a,RelativeBusiness:y.a,RelativeHandle:C.a,RelativeFiles:w.a,CRMCreateView:x.default},mixins:[D.a],props:{id:[String,Number],listenerIDs:{type:Array,default:function(){return["crm-main-container"]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,crmType:"contacts",detailData:{},headDetails:[{title:"客户名称",value:""},{title:"职务",value:""},{title:"手机",value:""},{title:"更新时间",value:""}],tabCurrentName:"followlog",isCreate:!1}},computed:{tabName:function(){return"followlog"==this.tabCurrentName?"contacts-follow":"basicinfo"==this.tabCurrentName?"c-r-m-base-info":"business"==this.tabCurrentName?"relative-business":"file"==this.tabCurrentName?"relative-files":"operationlog"==this.tabCurrentName?"relative-handle":""},tabnames:function(){var e=[];return e.push({label:"跟进记录",name:"followlog"}),this.crm.contacts&&this.crm.contacts.read&&e.push({label:"基本信息",name:"basicinfo"}),this.crm.business&&this.crm.business.index&&e.push({label:"项目",name:"business"}),e.push({label:"附件",name:"file"}),e.push({label:"操作记录",name:"operationlog"}),e}},mounted:function(){},methods:{getDetial:function(){var e=this;this.loading=!0,Object(i.f)({id:this.id}).then(function(t){e.loading=!1,e.detailData=t.data,e.headDetails[0].value=t.data.customer_id_info?t.data.customer_id_info.name:"",e.headDetails[1].value=t.data.post,e.headDetails[2].value=t.data.mobile,e.headDetails[3].value=t.data.update_time}).catch(function(){e.loading=!1})},hideView:function(){this.$emit("hide-view")},handleClick:function(e,t){},editSaveSuccess:function(){this.$emit("handle",{type:"save-success"}),this.getDetial()}}},k=(a("ZSW8"),Object(h.a)(T,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("slide-view",{directives:[{name:"empty",rawName:"v-empty",value:!e.canShowDetail,expression:"!canShowDetail"}],attrs:{listenerIDs:e.listenerIDs,noListenerIDs:e.noListenerIDs,noListenerClass:e.noListenerClass,"body-style":{padding:0,height:"100%"}},on:{"side-close":e.hideView}},[e.canShowDetail?a("flexbox",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"d-container",attrs:{"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限",direction:"column",align:"stretch"}},[a("c-r-m-detail-head",{attrs:{crmType:"contacts",detail:e.detailData,headDetails:e.headDetails,id:e.id},on:{handle:e.detailHeadHandle,close:e.hideView}}),e._v(" "),a("div",{staticClass:"tabs"},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.tabCurrentName,callback:function(t){e.tabCurrentName=t},expression:"tabCurrentName"}},e._l(e.tabnames,function(e,t){return a("el-tab-pane",{key:t,attrs:{label:e.label,name:e.name}})}))],1),e._v(" "),a("div",{staticClass:"t-loading-content",attrs:{id:"follow-log-content"}},[a("keep-alive",[a(e.tabName,{tag:"component",attrs:{crmType:"contacts",detail:e.detailData,id:e.id}})],1)],1)],1):e._e(),e._v(" "),e.isCreate?a("c-r-m-create-view",{attrs:{"crm-type":"contacts",action:{type:"update",id:this.id}},on:{"save-success":e.editSaveSuccess,"hiden-view":function(t){e.isCreate=!1}}}):e._e()],1)},[],!1,null,"3105c266",null));k.options.__file="ContactsDetail.vue";t.a=k.exports},QaXd:function(e,t,a){},UgdY:function(e,t,a){"use strict";var i=a("qe+6");a.n(i).a},WLrW:function(e,t,a){"use strict";var i=a("EPw/");a.n(i).a},ZSW8:function(e,t,a){"use strict";var i=a("HReK");a.n(i).a},mqlf:function(e,t,a){"use strict";var i=a("5tgW"),n=a("Ew9n"),s=a("F03V"),l=a("UEWd"),o=a("QJC7"),c=a("KzkL"),r=a("7Qib"),d=a("i68b"),u={name:"clue-follow",components:{MixAdd:l.a,RecordLog:o.a},mixins:[d.a],props:{id:[String,Number],crmType:{type:String,default:""}},watch:{},data:function(){return{sendLoading:!1,next_time:"",is_event:!1,logType:"record",logTypes:[]}},computed:{componentsName:function(){return"record"==this.logType?"RecordLog":""}},mounted:function(){},activated:function(){},deactivated:function(){},methods:{handleTypeDrop:function(e){this.followType=e},logTabsClick:function(e,t){this.logType=e.type},sendInfo:function(){this.$refs.mixadd.$emit("submit-info")},submitInfo:function(e){var t=this;if(!this.is_event||this.next_time){var a={};a.types="crm_"+this.crmType,a.types_id=this.id,a.content=e.content,a.category=this.followType;var i=e.images.map(function(e,t,a){return e.file_id}),n=e.files.map(function(e,t,a){return e.file_id});a.file_id=i.concat(n),this.next_time&&(a.is_event=this.is_event?1:0,a.next_time=Object(r.d)(this.next_time)),this.sendLoading=!0,Object(c.l)(a).then(function(e){t.sendLoading=!1,t.$message.success(e.data),t.$refs.mixadd.resetInfo(),t.is_event=!1,t.next_time="",t.$bus.emit("follow-log-refresh",{type:"record-log"})}).catch(function(){t.sendLoading=!1})}else this.$message.error("请选择下次联系时间")}}},m=(a("WLrW"),a("KHd+")),v=Object(m.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"f-container"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.sendLoading,expression:"sendLoading"}]},[a("mix-add",{ref:"mixadd",attrs:{crmType:e.crmType,id:e.id},on:{"mixadd-info":e.submitInfo}}),e._v(" "),a("flexbox",{staticClass:"se-section"},[a("div",{staticClass:"se-name"},[e._v("记录类型")]),e._v(" "),a("el-dropdown",{staticStyle:{"margin-right":"20px"},attrs:{trigger:"click"},on:{command:e.handleTypeDrop}},[a("flexbox",{staticClass:"se-select"},[a("div",{staticClass:"se-select-name"},[e._v(e._s(e.followType?e.followType:"请选择"))]),e._v(" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right",staticStyle:{color:"#ccc"}})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.followTypes,function(t,i){return a("el-dropdown-item",{key:i,attrs:{command:t.type}},[e._v(e._s(t.name))])}))],1),e._v(" "),a("div",{staticClass:"se-name"},[e._v("下次联系时间")]),e._v(" "),a("el-date-picker",{staticClass:"se-datepicker",attrs:{type:"datetime",placeholder:"选择日期","default-value":new Date,"value-format":"yyyy-MM-dd HH:mm:ss",editable:!1},model:{value:e.next_time,callback:function(t){e.next_time=t},expression:"next_time"}}),e._v(" "),a("el-checkbox",{model:{value:e.is_event,callback:function(t){e.is_event=t},expression:"is_event"}},[e._v("添加到日程提醒")]),e._v(" "),a("el-button",{staticClass:"se-send",attrs:{type:"primary"},nativeOn:{click:function(t){return e.sendInfo(t)}}},[e._v("发布")])],1)],1),e._v(" "),a("div",{staticClass:"log-cont"},[e.logTypes.length>0?a("flexbox",{staticStyle:{"border-bottom":"1px solid #E6E6E6"}},e._l(e.logTypes,function(t,i){return a("flexbox",{key:i,staticStyle:{width:"auto"},nativeOn:{click:function(a){e.logTabsClick(t,i)}}},[a("div",{staticClass:"log-tabs-item",style:{color:e.logType==t.type?"#F18C70":"#777"}},[e._v(e._s(t.name))]),e._v(" "),e.logTypes.length-1!=i?a("div",{staticClass:"log-tabs-line"}):e._e()])})):e._e(),e._v(" "),a(e.componentsName,{tag:"component",attrs:{id:e.id,crmType:e.crmType}})],1)])},[],!1,null,"24f06d50",null);v.options.__file="ClueFollow.vue";var p=v.exports,f=a("U05J"),h=a("C+sD"),g=a("8DbX"),b=a("EgJF"),_=(a("wd/R"),a("4+0Q")),y={name:"clue-detail",components:{SlideView:n.a,CRMDetailHead:s.a,ClueFollow:p,CRMBaseInfo:f.a,RelativeFiles:h.a,RelativeHandle:g.a,CRMCreateView:b.default},mixins:[_.a],props:{id:[String,Number],listenerIDs:{type:Array,default:function(){return["crm-main-container"]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,crmType:"leads",detailData:{},headDetails:[{title:"线索来源",value:""},{title:"手机",value:""},{title:"负责人",value:""},{title:"更新时间",value:""}],tabnames:[{label:"跟进记录",name:"followlog"},{label:"基本信息",name:"basicinfo"},{label:"附件",name:"file"},{label:"操作记录",name:"operationlog"}],tabCurrentName:"followlog",isCreate:!1}},computed:{tabName:function(){return"followlog"==this.tabCurrentName?"clue-follow":"basicinfo"==this.tabCurrentName?"c-r-m-base-info":"file"==this.tabCurrentName?"relative-files":"operationlog"==this.tabCurrentName?"relative-handle":""}},mounted:function(){},methods:{getDetial:function(){var e=this;this.loading=!0,Object(i.f)({id:this.id}).then(function(t){e.detailData=t.data,e.headDetails[0].value=t.data.source,e.headDetails[1].value=t.data.mobile,e.headDetails[2].value=t.data.owner_user_id_info?t.data.owner_user_id_info.realname:"",e.headDetails[3].value=t.data.update_time,e.loading=!1}).catch(function(){e.loading=!1})},hideView:function(){this.$emit("hide-view")},handleClick:function(e,t){},editSaveSuccess:function(){this.$emit("handle",{type:"save-success"}),this.getDetial()}}},C=(a("JNa0"),Object(m.a)(y,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("slide-view",{directives:[{name:"empty",rawName:"v-empty",value:!e.canShowDetail,expression:"!canShowDetail"}],attrs:{listenerIDs:e.listenerIDs,noListenerIDs:e.noListenerIDs,noListenerClass:e.noListenerClass,"body-style":{padding:0,height:"100%"}},on:{"side-close":e.hideView}},[e.canShowDetail?a("flexbox",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"d-container",attrs:{"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限",direction:"column",align:"stretch"}},[a("c-r-m-detail-head",{attrs:{crmType:"leads",detail:e.detailData,headDetails:e.headDetails,id:e.id},on:{handle:e.detailHeadHandle,close:e.hideView}}),e._v(" "),a("div",{staticClass:"tabs"},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.tabCurrentName,callback:function(t){e.tabCurrentName=t},expression:"tabCurrentName"}},e._l(e.tabnames,function(e,t){return a("el-tab-pane",{key:t,attrs:{label:e.label,name:e.name}})}))],1),e._v(" "),a("div",{staticClass:"t-loading-content",attrs:{id:"follow-log-content"}},[a("keep-alive",[a(e.tabName,{tag:"component",attrs:{crmType:"leads",id:e.id}})],1)],1)],1):e._e(),e._v(" "),e.isCreate?a("c-r-m-create-view",{attrs:{"crm-type":"leads",action:{type:"update",id:this.id}},on:{"save-success":e.editSaveSuccess,"hiden-view":function(t){e.isCreate=!1}}}):e._e()],1)},[],!1,null,"50fb8487",null));C.options.__file="ClueDetail.vue";t.a=C.exports},n1dw:function(e,t,a){"use strict";var i=a("UcQx"),n=a("Ew9n"),s=a("F03V"),l=a("UEWd"),o=a("QJC7"),c=a("8KPp"),r=a("gd5k"),d=a("aQg/"),u=a("y9lt"),m=a("KzkL"),v=a("7Qib"),p=a("i68b"),f={name:"business-follow",components:{MixAdd:l.a,RecordLog:o.a,JournalLog:c.a,ExamineLog:r.a,TaskLog:d.a,ScheduleLog:u.a},mixins:[p.a],props:{id:[String,Number],crmType:{type:String,default:""}},watch:{},data:function(){return{sendLoading:!1,next_time:"",is_event:!1,logType:"record",logTypes:[{type:"record",name:"跟进记录"},{type:"log",name:"日志"},{type:"examine",name:"审批"},{type:"task",name:"任务"},{type:"schedule",name:"日程"}]}},computed:{componentsName:function(){return"record"==this.logType?"RecordLog":"log"==this.logType?"JournalLog":"examine"==this.logType?"ExamineLog":"task"==this.logType?"TaskLog":"schedule"==this.logType?"ScheduleLog":""}},mounted:function(){},activated:function(){},deactivated:function(){},methods:{handleTypeDrop:function(e){this.followType=e},logTabsClick:function(e,t){this.logType=e.type},sendInfo:function(){this.$refs.mixadd.$emit("submit-info")},submitInfo:function(e){var t=this;if(!this.is_event||this.next_time){var a={};a.types="crm_"+this.crmType,a.types_id=this.id,a.content=e.content,a.category=this.followType;var i=e.images.map(function(e,t,a){return e.file_id}),n=e.files.map(function(e,t,a){return e.file_id});a.file_id=i.concat(n),this.next_time&&(a.is_event=this.is_event?1:0,a.next_time=Object(v.d)(this.next_time)),this.sendLoading=!0,Object(m.l)(a).then(function(e){t.sendLoading=!1,t.$message.success(e.data),t.$refs.mixadd.resetInfo(),t.is_event=!1,t.next_time="",t.$bus.emit("follow-log-refresh",{type:"record-log"})}).catch(function(){t.sendLoading=!1})}else this.$message.error("请选择下次联系时间")}}},h=(a("UgdY"),a("KHd+")),g=Object(h.a)(f,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"f-container"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.sendLoading,expression:"sendLoading"}]},[a("mix-add",{ref:"mixadd",attrs:{crmType:e.crmType,id:e.id},on:{"mixadd-info":e.submitInfo}}),e._v(" "),a("flexbox",{staticClass:"se-section"},[a("div",{staticClass:"se-name"},[e._v("记录类型")]),e._v(" "),a("el-dropdown",{staticStyle:{"margin-right":"20px"},attrs:{trigger:"click"},on:{command:e.handleTypeDrop}},[a("flexbox",{staticClass:"se-select"},[a("div",{staticClass:"se-select-name"},[e._v(e._s(e.followType?e.followType:"请选择"))]),e._v(" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right",staticStyle:{color:"#ccc"}})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.followTypes,function(t,i){return a("el-dropdown-item",{key:i,attrs:{command:t.type}},[e._v(e._s(t.name))])}))],1),e._v(" "),a("div",{staticClass:"se-name"},[e._v("下次联系时间")]),e._v(" "),a("el-date-picker",{staticClass:"se-datepicker",attrs:{type:"datetime",placeholder:"选择日期","default-value":new Date,"value-format":"yyyy-MM-dd HH:mm:ss",editable:!1},model:{value:e.next_time,callback:function(t){e.next_time=t},expression:"next_time"}}),e._v(" "),a("el-checkbox",{model:{value:e.is_event,callback:function(t){e.is_event=t},expression:"is_event"}},[e._v("添加到日程提醒")]),e._v(" "),a("el-button",{staticClass:"se-send",attrs:{type:"primary"},nativeOn:{click:function(t){return e.sendInfo(t)}}},[e._v("发布")])],1)],1),e._v(" "),a("div",{staticClass:"log-cont"},[a("flexbox",{staticStyle:{"border-bottom":"1px solid #E6E6E6"}},e._l(e.logTypes,function(t,i){return a("flexbox",{key:i,staticStyle:{width:"auto"},nativeOn:{click:function(a){e.logTabsClick(t,i)}}},[a("div",{staticClass:"log-tabs-item",style:{color:e.logType==t.type?"#F18C70":"#777"}},[e._v(e._s(t.name))]),e._v(" "),e.logTypes.length-1!=i?a("div",{staticClass:"log-tabs-line"}):e._e()])})),e._v(" "),a("keep-alive",[a(e.componentsName,{tag:"component",attrs:{id:e.id,crmType:e.crmType}})],1)],1)])},[],!1,null,"3e76e734",null);g.options.__file="BusinessFollow.vue";var b=g.exports,_=a("U05J"),y=a("cYid"),C=a("/U9q"),w=a("8DbX"),x=a("DUlf"),D=a("SE13"),T=a("C+sD"),k=a("EgJF"),N=(a("wd/R"),a("4+0Q")),S={name:"business-detail",components:{SlideView:n.a,CRMDetailHead:s.a,BusinessFollow:b,CRMBaseInfo:_.a,RelativeContract:y.a,RelativeContacts:C.a,RelativeHandle:w.a,RelativeTeam:x.a,RelativeProduct:D.a,RelativeFiles:T.a,CRMCreateView:k.default},mixins:[N.a],props:{id:[String,Number],listenerIDs:{type:Array,default:function(){return["crm-main-container"]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,crmType:"business",detailData:{},headDetails:[{title:"客户名称",value:""},{title:"项目金额（元）",value:""},{title:"项目状态",value:""},{title:"负责人",value:""},{title:"创建时间",value:""}],tabCurrentName:"followlog",status:[],statuHandleItems:[{name:"赢单",type:1,value:"100%",img:a("y4JV")},{name:"输单",type:2,value:"0%",img:a("migV")},{name:"无效",type:3,value:"0%",img:a("x8Bg")}],isCreate:!1}},computed:{tabName:function(){return"followlog"==this.tabCurrentName?"business-follow":"basicinfo"==this.tabCurrentName?"c-r-m-base-info":"team"==this.tabCurrentName?"relative-team":"contract"==this.tabCurrentName?"relative-contract":"operationlog"==this.tabCurrentName?"relative-handle":"product"==this.tabCurrentName?"relative-product":"file"==this.tabCurrentName?"relative-files":"contacts"==this.tabCurrentName?"relative-contacts":""},tabnames:function(){var e=[];return e.push({label:"跟进记录",name:"followlog"}),this.crm.business&&this.crm.business.read&&e.push({label:"基本信息",name:"basicinfo"}),this.crm.contacts&&this.crm.contacts.index&&e.push({label:"联系人",name:"contacts"}),this.crm.contract&&this.crm.contract.index&&e.push({label:"合同",name:"contract"}),this.crm.product&&this.crm.product.index&&e.push({label:"产品",name:"product"}),e.push({label:"相关团队",name:"team"}),e.push({label:"附件",name:"file"}),e.push({label:"操作记录",name:"operationlog"}),e}},mounted:function(){},methods:{getDetial:function(){var e=this;this.loading=!0,Object(i.e)({id:this.id}).then(function(t){e.loading=!1,e.detailData=t.data,e.handleBusinessStatus(t.data),e.headDetails[0].value=t.data.customer_id_info?t.data.customer_id_info.name:"",e.headDetails[1].value=t.data.money,e.headDetails[2].value=t.data.status_id_info,e.headDetails[3].value=t.data.owner_user_id_info?t.data.owner_user_id_info.realname:"",e.headDetails[4].value=t.data.update_time}).catch(function(){e.loading=!1})},hideView:function(){this.$emit("hide-view")},handleClick:function(e,t){},handleBusinessStatus:function(e){this.status=[];var t=e.status_list.status,a=e.status_id;if(t){for(var i=!1,n=0,s=0;s<t.length;s++){var l=t[s];0==a?0!=e.is_end?1==e.is_end?l.class="state-suc":l.class="state-invalid":l.class="state-undo":l.status_id==a?(l.class="state-suc",l.isdoing=!0,i=!0,n=s):i?0!=e.is_end?1==e.is_end?l.class="state-suc":l.class="state-invalid":l.class="state-undo":l.class="state-suc",this.status.push(l)}var o={type:e.is_end};0==e.is_end?(o.name="结束",o.overIcon=["el-icon-arrow-down","el-icon--right"],n==t.length-1?o.class="state-doing":(this.status.length>0&&0!=a&&(this.status[n+1].class="state-doing"),o.class="state-undo")):1==e.is_end?(o.name="赢单",o.title="赢单",o.detail="赢单率100%",o.overIcon=["el-icon-check","el-icon--right"],o.class="state-suc"):2==e.is_end?(o.name="输单",o.title="赢单率0%",o.detail=e.remark,o.overIcon=["el-icon-circle-close","el-icon--right"],o.class="state-fail"):3==e.is_end&&(o.name="无效",o.title="赢单率0%",o.detail=e.remark,o.overIcon=["el-icon-remove-outline","el-icon--right"],o.class="state-invalid"),this.status.push(o)}},handleStatuChange:function(e,t){var a=this;if(0==this.detailData.is_end&&!e.isdoing){var n="确定进入"+e.name+"阶段";this.$confirm(n,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.loading=!0,Object(i.a)({business_id:a.id,status_id:e.status_id}).then(function(e){a.loading=!1,a.$message.success(e.data),a.getDetial()}).catch(function(){a.loading=!1})}).catch(function(){a.$message({type:"info",message:"已取消操作"})})}},handleStatuResult:function(e,t){var a=this;if(0==this.detailData.is_end)if(2==e.type||3==e.type){var n="请填写"+e.name+"原因：",s=e.name+"原因";this.$prompt(n,s,{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(t){var n=t.value;a.loading=!0,Object(i.a)({business_id:a.id,status_id:e.status_id,is_end:e.type,remark:n}).then(function(e){a.loading=!1,a.$message.success(e.data),a.getDetial()}).catch(function(){a.loading=!1})}).catch(function(){a.$message({type:"info",message:"取消输入"})})}else{n="确定将当前项目设为"+e.name+"吗?";this.$confirm(n,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.loading=!0,Object(i.a)({business_id:a.id,status_id:e.status_id,is_end:e.type}).then(function(e){a.loading=!1,a.$message.success(e.data),a.getDetial()}).catch(function(){a.loading=!1})}).catch(function(){a.$message({type:"info",message:"已取消操作"})})}},editSaveSuccess:function(){this.$emit("handle",{type:"save-success"}),this.getDetial()}}},I=(a("9xER"),Object(h.a)(S,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("slide-view",{directives:[{name:"empty",rawName:"v-empty",value:!e.canShowDetail,expression:"!canShowDetail"}],attrs:{listenerIDs:e.listenerIDs,noListenerIDs:e.noListenerIDs,noListenerClass:e.noListenerClass,"body-style":{padding:0,height:"100%"}},on:{"side-close":e.hideView}},[e.canShowDetail?a("flexbox",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"d-container",attrs:{"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限",direction:"column",align:"stretch"}},[a("c-r-m-detail-head",{attrs:{crmType:"business",detail:e.detailData,headDetails:e.headDetails,id:e.id},on:{handle:e.detailHeadHandle,close:e.hideView}},[a("div",{staticClass:"busi-line"})]),e._v(" "),e.status.length>0?a("div",{staticStyle:{padding:"10px 50px"}},[a("flexbox",{staticClass:"busi-state",style:{opacity:(e.detailData.is_end,1)}},e._l(e.status,function(t,i){return a("a",{key:i},[a("el-popover",{attrs:{placement:"bottom",title:t.name,width:"150",trigger:"hover",content:"赢单率"+t.rate+"%"}},[e.status.length-1!=i?a("div",{staticClass:"busi-state-item",class:t.class,attrs:{slot:"reference"},on:{click:function(a){e.handleStatuChange(t,i)}},slot:"reference"},[e._v("\n              "+e._s(t.name)+"\n              "),0==i?a("div",{staticClass:"state-circle circle-left"}):e._e(),e._v(" "),0!=i?a("div",{staticClass:"state-arrow arrow-left"}):e._e(),e._v(" "),a("div",{staticClass:"state-arrow arrow-right"})]):e._e()]),e._v(" "),e.status.length-1==i?a("el-popover",{attrs:{placement:"bottom",title:0==t.type?"":t.title,content:0==t.type?"":t.detail,width:"150",trigger:"hover"}},[0==t.type?a("div",{staticClass:"state-handel-cont"},e._l(e.statuHandleItems,function(t,i){return a("flexbox",{key:i,staticClass:"state-handel-item",nativeOn:{click:function(a){e.handleStatuResult(t,i)}}},[a("img",{staticClass:"state-handel-item-img",attrs:{src:t.img}}),e._v(" "),a("div",{staticClass:"state-handel-item-name"},[e._v(e._s(t.name))]),e._v(" "),a("div",{staticClass:"state-handel-item-value"},[e._v(e._s(t.value))])])})):e._e(),e._v(" "),a("div",{staticClass:"busi-state-item",class:t.class,attrs:{slot:"reference"},slot:"reference"},[a("i",{class:t.overIcon,staticStyle:{"margin-right":"8px"}}),e._v("\n              "+e._s(t.name)+"\n              "),a("div",{staticClass:"state-arrow arrow-left"}),e._v(" "),a("div",{staticClass:"state-circle circle-right"})])]):e._e()],1)}))],1):e._e(),e._v(" "),a("div",{staticClass:"tabs"},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.tabCurrentName,callback:function(t){e.tabCurrentName=t},expression:"tabCurrentName"}},e._l(e.tabnames,function(e,t){return a("el-tab-pane",{key:t,attrs:{label:e.label,name:e.name}})}))],1),e._v(" "),a("div",{staticClass:"t-loading-content",attrs:{id:"follow-log-content"}},[a("keep-alive",[a(e.tabName,{tag:"component",attrs:{crmType:"business",detail:e.detailData,id:e.id}})],1)],1)],1):e._e(),e._v(" "),e.isCreate?a("c-r-m-create-view",{attrs:{"crm-type":"business",action:{type:"update",id:this.id}},on:{"save-success":e.editSaveSuccess,"hiden-view":function(t){e.isCreate=!1}}}):e._e()],1)},[],!1,null,"307f63c8",null));I.options.__file="BusinessDetail.vue";t.a=I.exports},"oI+y":function(e,t,a){"use strict";var i=a("9dyF");a.n(i).a},"qe+6":function(e,t,a){},"tY/4":function(e,t,a){},x8Bg:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJGQkE4RTNGNDE2NTExRTlBREMyQzM3QjE2QkFDODFCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJGQkE4RTQwNDE2NTExRTlBREMyQzM3QjE2QkFDODFCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkZCQThFM0Q0MTY1MTFFOUFEQzJDMzdCMTZCQUM4MUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkZCQThFM0U0MTY1MTFFOUFEQzJDMzdCMTZCQUM4MUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4PPbYiAAABIklEQVR42mI8c+YMAxbABsQBUGwJxFJA/AuInwDxeSBeD8QboWIogAWLYYFA3AXEKlgs0YDiSCC+A8TlQLwOWRETEpsZiDuhClQYCAOQmrVQPczYXNgGxGUMpAOYnnJkF4aQaRiyoSEwA0Fh089AOZgAMgtkYCgQy1DBQGkgDmOCJg1qgQCQgaZUNNAEFMsSyCLq6uoMPDw8ROn+8uULw82bN5GFJJmwpXZKAMiFz4GYFyaAZiOp4DnIhZeo6MAzIAM3UNHADSADV0NLEUrBU5BZsEgpooKBhUD8E5aXQa7spsCwbqgZKMVXJRBPIcOwqVC9GOXhXyDOhZYad4gw6A60HMiB6sVZYoMKzc1QxaDS2xia8WEBfxZaBazGlikAAgwA3vc6LEJJ7+0AAAAASUVORK5CYII="}}]);