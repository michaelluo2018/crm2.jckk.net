(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4fdb"],{"+9th":function(t,e,a){"use strict";a.d(e,"p",function(){return s}),a.d(e,"n",function(){return r}),a.d(e,"a",function(){return n}),a.d(e,"h",function(){return i}),a.d(e,"j",function(){return l}),a.d(e,"l",function(){return c}),a.d(e,"m",function(){return u}),a.d(e,"u",function(){return d}),a.d(e,"s",function(){return f}),a.d(e,"f",function(){return h}),a.d(e,"d",function(){return m}),a.d(e,"k",function(){return p}),a.d(e,"g",function(){return v}),a.d(e,"q",function(){return b}),a.d(e,"t",function(){return _}),a.d(e,"r",function(){return k}),a.d(e,"o",function(){return D}),a.d(e,"e",function(){return y}),a.d(e,"b",function(){return g}),a.d(e,"c",function(){return w}),a.d(e,"i",function(){return L});var o=a("t3Un");function s(t){return Object(o.a)({url:"oa/task/subTaskList",method:"post",data:t})}function r(t){return Object(o.a)({url:"oa/task/myTask",method:"post",data:t})}function n(t){return Object(o.a)({url:"oa/task/save",method:"post",data:t})}function i(t){return Object(o.a)({url:"oa/task/delete",method:"post",data:t})}function l(t){return Object(o.a)({url:"oa/task/read",method:"post",data:t})}function c(t){return Object(o.a)({url:"oa/task/update",method:"post",data:t})}function u(t){return Object(o.a)({url:"oa/task/updateName",method:"post",data:t})}function d(t){return Object(o.a)({url:"oa/task/updateStoptime",method:"post",data:t})}function f(t){return Object(o.a)({url:"oa/task/updateOwner",method:"post",data:t})}function h(t){return Object(o.a)({url:"oa/task/updateLable",method:"post",data:t})}function m(t){return Object(o.a)({url:"oa/tasklable/save",method:"post",data:t})}function p(t){return Object(o.a)({url:"oa/tasklable/update",method:"post",data:t})}function v(t){return Object(o.a)({url:"oa/tasklable/delete",method:"post",data:t})}function b(t){return Object(o.a)({url:"oa/tasklable/index",method:"post",data:t})}function _(t){return Object(o.a)({url:"oa/task/updatePriority",method:"post",data:t})}function k(t){return Object(o.a)({url:"oa/task/taskOver",method:"post",data:t})}function D(t){return Object(o.a)({url:"oa/task/readLoglist",method:"post",data:t})}function y(t){return Object(o.a)({url:"oa/task/delOwnerById",method:"post",data:t})}function g(t){return Object(o.a)({url:"oa/taskcomment/save",method:"post",data:t})}function w(t){return Object(o.a)({url:"oa/taskcomment/delete",method:"post",data:t})}function L(t){return Object(o.a)({url:"oa/task/delrelation",method:"post",data:t})}},"1RnH":function(t,e,a){"use strict";var o=a("+9th"),s=a("mkuN"),r=a("Er7M"),n=a("7Qib"),i={components:{CrmRelative:s.a,RelatedBusinessCell:r.a},data:function(){return{showTypes:["customer","contacts","business","contract"],showPopover:!1,relevanceAll:{customer_ids:[],contract_ids:[],contacts_ids:[],business_ids:[]},relatedListData:{},showRelative:!1,showTaskRelative:!1}},watch:{allData:function(){this.relatedListData=this.allData}},props:{marginLeft:{type:String,default:"20px"},allData:{type:Object,default:function(){return{contacts:[],customer:[],business:[],contract:[]}}},isTask:{type:Boolean,default:!1},taskID:Number,alterable:{type:Boolean,default:!0},alterableColor:{type:String,default:"#999"}},mounted:function(){this.relatedListData=this.allData},methods:{crmrelativeClose:function(){this.showPopover=!1},checkInfos:function(t){var e=this;this.showPopover=!1,this.relatedListData=t.data;var a=function(a){var o=t.data[a];e.relevanceAll[a+"_ids"]=o.map(function(t,e,o){return t[a+"_id"]})};for(var o in t.data)a(o);this.$emit("checkInfos",this.relevanceAll)},delRelevance:function(t,e,a){var s=this;this.$confirm("确认取消关联?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",customClass:"is-particulars"}).then(function(){Object(o.i)({task_id:s.taskID,type:{customer:1,contacts:2,business:3,contract:4}[t],id:a[t+"_id"]}).then(function(a){s.relatedListData[t].splice(e,1),s.relatedListData=Object(n.h)(s.relatedListData),s.$message.success("关联取消成功")}).catch(function(){})}).catch(function(){s.$message.info("已取消操作")})},checkRelatedDetail:function(t,e){e.key=e[t+"_id"],this.$emit("checkRelatedDetail",t,e)}}},l=(a("zrTB"),a("KHd+")),c=Object(l.a)(i,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"related-business",style:{"margin-left":t.marginLeft}},[!t.isTask&&t.alterable?o("el-popover",{attrs:{placement:"bottom",width:"800","popper-class":"no-padding-popover",trigger:"click"},model:{value:t.showPopover,callback:function(e){t.showPopover=e},expression:"showPopover"}},[t.showRelative?o("crm-relative",{ref:"crmrelative",attrs:{show:t.showPopover,radio:!1,selectedData:t.relatedListData,showTypes:t.showTypes},on:{close:t.crmrelativeClose,changeCheckout:t.checkInfos}}):t._e(),t._v(" "),o("p",{staticClass:"add-file",attrs:{slot:"reference"},on:{click:function(e){t.showRelative=!0}},slot:"reference"},[o("img",{attrs:{src:a("AFlK"),alt:""}}),t._v("\n      关联业务\n    ")])],1):t._e(),t._v(" "),t.alterable?t._e():o("p",{staticClass:"alterable-p",style:{color:t.alterableColor}},[t._v("关联业务")]),t._v(" "),t._l(t.relatedListData,function(e,a){return o("div",{key:a},t._l(e,function(e,s){return o("related-business-cell",{key:s,attrs:{data:e,cellIndex:s,type:a,showFoot:t.isTask},on:{unbind:t.delRelevance,detail:function(o){t.checkRelatedDetail(a,e)}}})}))}),t._v(" "),t.isTask?o("el-popover",{attrs:{placement:"bottom",width:"800","popper-class":"no-padding-popover",trigger:"click"},model:{value:t.showPopover,callback:function(e){t.showPopover=e},expression:"showPopover"}},[t.showTaskRelative?o("crm-relative",{ref:"crmrelative",attrs:{radio:!1,show:t.showPopover,selectedData:t.relatedListData,showTypes:t.showTypes},on:{close:t.crmrelativeClose,changeCheckout:t.checkInfos}}):t._e(),t._v(" "),o("p",{staticClass:"add-file",attrs:{slot:"reference"},on:{click:function(e){t.showTaskRelative=!0}},slot:"reference"},[o("img",{attrs:{src:a("AFlK"),alt:""}}),t._v("\n      关联业务\n    ")])],1):t._e()],2)},[],!1,null,"2d4087b3",null);c.options.__file="relatedBusiness.vue";e.a=c.exports},BuGm:function(t,e,a){"use strict";a.r(e);var o=a("gDS+"),s=a.n(o),r=a("FyfS"),n=a.n(r),i=a("Dh/N"),l=(a("KTTK"),a("1RnH")),c=a("0hym"),u=a("7Qib"),d={components:{relatedBusiness:l.a,XhUser:c.a},data:function(){return{zIndex:Object(u.g)(),formList:[{label:"主题",field:"title",type:"color"},{label:"开始时间",field:"start_time",type:"time"},{label:"结束时间",field:"end_time",type:"time"},{label:"参与人",field:"owner_user_ids",type:"participant"},{label:"备注",field:"remark",type:"textarea",width:"100%"}],options:[{value:0,label:"无"},{value:1,label:"准时提醒"},{value:2,label:"5分钟前"},{value:3,label:"15分钟前"},{value:4,label:"30分钟前"},{value:5,label:"一个小时前"},{value:6,label:"二个小时前"},{value:7,label:"一天前"},{value:8,label:"二天前"},{value:9,label:"一周前"}],fileList:[],loading:!1,colorList:["#3E8EF7","#11C06C","#0BB2D4","#EB6709","#FF4C52","#526069","#9262F4"],rules:{title:[{required:!0,message:"主题不能为空",trigger:"blur"},{max:50,message:"主题长度最多为50个字符",trigger:"blur"}],start_time:[{required:!0,message:"开始时间不能为空",trigger:"blur"}],end_time:[{required:!0,message:"结束时间不能为空",trigger:"blur"}]},relevanceAll:{},allData:{},colleaguesList:[]}},props:{formData:{type:Object,default:function(){return{color:""}}},text:{type:String,default:"创建日程"},appendToBody:{type:Boolean,default:!1}},created:function(){},mounted:function(){this.appendToBody&&document.body.appendChild(this.$el),this.allData.business=this.formData.businessList?this.formData.businessList:[],this.allData.contacts=this.formData.contactsList?this.formData.contactsList:[],this.allData.contract=this.formData.contractList?this.formData.contractList:[],this.allData.customer=this.formData.customerList?this.formData.customerList:[],this.formData.ownerList&&(this.colleaguesList=[].concat(this.formData.ownerList)),"创建日程"==this.text&&this.$set(this.formData,"color","#3E8EF7")},methods:{close:function(){1==this.$route.query.routerKey?this.$router.go(-1):this.$emit("closeDialog")},checkInfos:function(t){this.relevanceAll=t},onSubmit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.loading=!0;var a=t.formData,o=[],r=!0,l=!1,c=void 0;try{for(var u,d=n()(t.colleaguesList);!(r=(u=d.next()).done);r=!0){var f=u.value;o.push(f.id)}}catch(t){l=!0,c=t}finally{try{!r&&d.return&&d.return()}finally{if(l)throw c}}if("创建日程"==t.text)Object(i.a)({title:a.title,start_time:new Date(a.start_time).getTime()/1e3,end_time:new Date(a.end_time).getTime()/1e3,owner_user_ids:o,remark:a.remark,color:a.color,customer_ids:t.relevanceAll.customer_ids,contacts_ids:t.relevanceAll.contacts_ids,business_ids:t.relevanceAll.business_ids,contract_ids:t.relevanceAll.contract_ids}).then(function(e){1==t.$route.query.routerKey?t.$router.push("schedule"):t.$emit("onSubmit"),t.loading=!1}).catch(function(e){t.loading=!1});else{var h={customer_ids:[],contract_ids:[],contacts_ids:[],business_ids:[]};if(t.allData.customer){var m=!0,p=!1,v=void 0;try{for(var b,_=n()(t.allData.customer);!(m=(b=_.next()).done);m=!0){var k=b.value;h.customer_ids.push(k.customer_id)}}catch(t){p=!0,v=t}finally{try{!m&&_.return&&_.return()}finally{if(p)throw v}}}if(t.allData.contract){var D=!0,y=!1,g=void 0;try{for(var w,L=n()(t.allData.contract);!(D=(w=L.next()).done);D=!0){var x=w.value;h.contract_ids.push(x.contract_id)}}catch(t){y=!0,g=t}finally{try{!D&&L.return&&L.return()}finally{if(y)throw g}}}if(t.allData.contacts){var C=!0,O=!1,j=void 0;try{for(var $,T=n()(t.allData.contacts);!(C=($=T.next()).done);C=!0){var B=$.value;h.contacts_ids.push(B.contacts_id)}}catch(t){O=!0,j=t}finally{try{!C&&T.return&&T.return()}finally{if(O)throw j}}}if(t.allData.business){var R=!0,I=!1,A=void 0;try{for(var P,K=n()(t.allData.business);!(R=(P=K.next()).done);R=!0){var S=P.value;h.business_ids.push(S.business_id)}}catch(t){I=!0,A=t}finally{try{!R&&K.return&&K.return()}finally{if(I)throw A}}}var F="{}"==s()(t.relevanceAll)?h:t.relevanceAll;Object(i.c)({event_id:a.event_id,title:a.title,start_time:new Date(a.start_time).getTime()/1e3,end_time:new Date(a.end_time).getTime()/1e3,owner_user_ids:o,remark:a.remark,color:a.color,customer_ids:F.customer_ids,contacts_ids:F.contacts_ids,business_ids:F.business_ids,contract_ids:F.contract_ids}).then(function(e){t.$emit("onSubmit"),t.loading=!1}).catch(function(e){t.loading=!1})}})},httpRequest:function(t){this.fileList.push(t.file)},onRemove:function(t){for(var e in this.fileList)this.fileList[e].uid==t.uid&&this.fileList.splice(e,1)},changeColor:function(t){this.$set(this.formData,"color",t)},changeCheckout:function(t){this.colleaguesList=t.data},selectDelect:function(t,e){this.$refs.xhuser[0].cancelCheckItem(t),this.colleaguesList.splice(e,1)}},beforeDestroy:function(){this.appendToBody&&this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},f=(a("Osyj"),a("KHd+")),h=Object(f.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"create-schedule",style:{"z-index":t.zIndex}},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"add-schedule"},[o("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[o("span",{staticClass:"text"},[t._v(t._s(t.text))]),t._v(" "),o("img",{staticClass:"el-icon-close rt",attrs:{src:a("cjwK"),alt:""},on:{click:t.close}})]),t._v(" "),o("div",{staticClass:"content"},[o("el-form",{ref:"form",attrs:{model:t.formData,rules:t.rules}},t._l(t.formList,function(e,a){return o("el-form-item",{key:a,class:"el-form-item-"+e.field,style:{width:e.width},attrs:{prop:e.field,label:e.label}},["time"==e.type?[o("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.formData[e.field],callback:function(a){t.$set(t.formData,e.field,a)},expression:"formData[item.field]"}})]:"textarea"==e.type?[o("el-input",{attrs:{type:"textarea",autosize:{minRows:6},placeholder:"请输入内容"},model:{value:t.formData[e.field],callback:function(a){t.$set(t.formData,e.field,a)},expression:"formData[item.field]"}})]:"participant"==e.type?[o("el-popover",{attrs:{placement:"bottom-end",width:"280",trigger:"click"}},[o("xh-user",{ref:"xhuser",refInFor:!0,attrs:{selectedData:t.colleaguesList},on:{changeCheckout:t.changeCheckout}}),t._v(" "),o("div",{staticClass:"select-box",attrs:{slot:"reference"},slot:"reference"},[t._l(t.colleaguesList,function(e,a){return o("span",{key:a,staticClass:"select-box-span"},[t._v("\n                  "+t._s(e.realname)+"\n                  "),o("span",{staticClass:"el-icon-close",on:{click:function(o){o.stopPropagation(),t.selectDelect(e,a)}}})])}),t._v(" "),o("span",{staticClass:"el-icon-plus"})],2)],1)]:"select"==e.type?[o("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formData[e.field],callback:function(a){t.$set(t.formData,e.field,a)},expression:"formData[item.field]"}},t._l(t.options,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))]:"color"==e.type?[o("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.formData[e.field],callback:function(a){t.$set(t.formData,e.field,a)},expression:"formData[item.field]"}},[o("i",{staticClass:"el-input__icon",attrs:{slot:"prefix"},slot:"prefix"},[o("span",{staticClass:"bg-color",style:{background:t.formData.color}})])]),t._v(" "),o("div",{staticClass:"color-box"},t._l(t.colorList,function(e,a){return o("span",{key:a,style:{background:e},on:{click:function(a){t.changeColor(e)}}})}))]:o("el-input",{model:{value:t.formData[e.field],callback:function(a){t.$set(t.formData,e.field,a)},expression:"formData[item.field]"}})],2)})),t._v(" "),o("related-business",{attrs:{allData:t.allData},on:{checkInfos:t.checkInfos}})],1),t._v(" "),o("div",{staticClass:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("保存")]),t._v(" "),o("el-button",{on:{click:t.close}},[t._v("取消")])],1)])])},[],!1,null,"bdadf58a",null);h.options.__file="createSchedule.vue";e.default=h.exports},"Dh/N":function(t,e,a){"use strict";a.d(e,"d",function(){return s}),a.d(e,"a",function(){return r}),a.d(e,"b",function(){return n}),a.d(e,"c",function(){return i});var o=a("t3Un");function s(t){return Object(o.a)({url:"oa/event/index",method:"post",data:t})}function r(t){return Object(o.a)({url:"oa/event/save",method:"post",data:t})}function n(t){return Object(o.a)({url:"oa/event/delete",method:"post",data:t})}function i(t){return Object(o.a)({url:"oa/event/update",method:"post",data:t})}},KRs8:function(t,e,a){},Osyj:function(t,e,a){"use strict";var o=a("lBvL");a.n(o).a},lBvL:function(t,e,a){},zrTB:function(t,e,a){"use strict";var o=a("KRs8");a.n(o).a}}]);