(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-da10"],{"0G8+":function(t,e,i){},"1qNb":function(t,e,i){},"4f+9":function(t,e,i){"use strict";var a=i("mYOy");i.n(a).a},"6ZrO":function(t,e,i){},"9HXj":function(t,e,i){},B2Fc:function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"d",function(){return n}),i.d(e,"f",function(){return l}),i.d(e,"e",function(){return c}),i.d(e,"c",function(){return o}),i.d(e,"b",function(){return r});var a=i("t3Un");function s(t){return Object(a.a)({url:"bi/achievement/statistics",method:"post",data:t})}function n(t){return Object(a.a)({url:"bi/product/statistics",method:"post",data:t})}function l(t){return Object(a.a)({url:"bi/receivables/statistics",method:"post",data:t})}function c(t){return Object(a.a)({url:"bi/receivables/statisticList",method:"post",data:t})}function o(t){return Object(a.a)({url:"bi/customer/statistics",method:"post",data:t})}function r(t){return Object(a.a)({url:"bi/business/funnel",method:"post",data:t})}},K6D0:function(t,e,i){"use strict";var a=i("ooHJ"),s=i("Ew9n"),n=i("F03V"),l=i("U05J"),c=i("8DbX"),o=i("EgJF"),r=i("3biH"),u=(i("7Qib"),i("4+0Q")),d={name:"money-detail",components:{SlideView:s.a,CRMDetailHead:n.a,CRMBaseInfo:l.a,RelativeHandle:c.a,ExamineInfo:r.a,CRMCreateView:o.default},mixins:[u.a],props:{id:[String,Number],listenerIDs:{type:Array,default:function(){return["crm-main-container"]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,crmType:"receivables",detailData:{},headDetails:[{title:"客户名称",value:""},{title:"合同金额",value:""},{title:"合同名称",value:""},{title:"回款日期",value:""},{title:"回款金额",value:""},{title:"负责人",value:""}],tabnames:[{label:"基本信息",name:"basicinfo"},{label:"操作记录",name:"operationlog"}],tabCurrentName:"basicinfo",isCreate:!1}},computed:{tabName:function(){return"basicinfo"==this.tabCurrentName?"c-r-m-base-info":"operationlog"==this.tabCurrentName?"relative-handle":""}},mounted:function(){},methods:{getDetial:function(){var t=this;this.loading=!0,Object(a.e)({id:this.id}).then(function(e){t.loading=!1,t.detailData=e.data,t.headDetails[0].value=e.data.customer_id_info?e.data.customer_id_info.name:"",t.headDetails[1].value=e.data.contract_id_info?e.data.contract_id_info.money:"",t.headDetails[2].value=e.data.contract_id_info?e.data.contract_id_info.name:"",t.headDetails[3].value="0000-00-00"==e.data.return_time?"":e.data.return_time,t.headDetails[4].value=e.data.money,t.headDetails[5].value=e.data.owner_user_id_info?e.data.owner_user_id_info.realname:""}).catch(function(){t.loading=!1})},hideView:function(){this.$emit("hide-view")},handleClick:function(t,e){},editSaveSuccess:function(){this.getDetial()}}},m=(i("XCNI"),i("KHd+")),f=Object(m.a)(d,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("slide-view",{directives:[{name:"empty",rawName:"v-empty",value:!t.canShowDetail,expression:"!canShowDetail"}],attrs:{listenerIDs:t.listenerIDs,noListenerIDs:t.noListenerIDs,noListenerClass:t.noListenerClass,"body-style":{padding:0,height:"100%"}},on:{"side-close":t.hideView}},[t.canShowDetail?i("flexbox",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"d-container",attrs:{"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限",direction:"column",align:"stretch"}},[i("c-r-m-detail-head",{attrs:{crmType:"receivables",detail:t.detailData,headDetails:t.headDetails,id:t.id},on:{handle:t.detailHeadHandle,close:t.hideView}}),t._v(" "),i("div",{staticClass:"examine-info"},[i("examine-info",{staticClass:"examine-info-border",attrs:{id:t.id,examineType:"crm_receivables",flow_id:t.detailData.flow_id}})],1),t._v(" "),i("div",{staticClass:"tabs"},[i("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.tabCurrentName,callback:function(e){t.tabCurrentName=e},expression:"tabCurrentName"}},t._l(t.tabnames,function(t,e){return i("el-tab-pane",{key:e,attrs:{label:t.label,name:t.name}})}))],1),t._v(" "),i("div",{staticClass:"t-loading-content"},[i("keep-alive",[i(t.tabName,{tag:"component",attrs:{crmType:"receivables",detail:t.detailData,id:t.id}})],1)],1)],1):t._e(),t._v(" "),t.isCreate?i("c-r-m-create-view",{attrs:{"crm-type":"receivables",action:{type:"update",id:this.id}},on:{"save-success":t.editSaveSuccess,"hiden-view":function(e){t.isCreate=!1}}}):t._e()],1)},[],!1,null,"271ce2ae",null);f.options.__file="MoneyDetail.vue";e.a=f.exports},N0PQ:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZGRjBCRTYxRTBBNzExRTg5QkREOEQxRjlDMkUxOUExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZGRjBCRTYyRTBBNzExRTg5QkREOEQxRjlDMkUxOUExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkZGMEJFNUZFMEE3MTFFODlCREQ4RDFGOUMyRTE5QTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkZGMEJFNjBFMEE3MTFFODlCREQ4RDFGOUMyRTE5QTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz704RrgAAABwUlEQVR42uSXz0sCQRTH36h1sGNlaHjpVJoHC0KCOnVJOwSdqmM/6NZ/EF071rluQaduGQWd9BZEqWBhQQQmHYIQikDU6bs6G8Oy4q7sskYPPuzOzFu+++a9mZ1lnHNywlzkkDkm7JEb7/m8rWIDoVBHEc+DEuAaSmLMtqk+An6dfr8Ys0T4BHxJUbUzJq6q/yc47kR4CXg1fevgTcf3Faxp+vrAsuHikqxH054A5y2mWvYxnEaPwZTc/Kl1zJPJBt27gbR667YlnUjYMNWMORMxi8edETZhH+AZ9IIx4LZb+A5sieskGALfYMWW4hIFdQtmwJyIVt5gruEziucfrF5OVbAKZsGpzq42BVIQH+6suFovlRRQojnTzWethl73IO52wYaVEd+DcTDSaFUqRPV6c6RYJJ5ON8WJFqwuLkWl/7cWMhmE4SLm8xHP5YhFIkrEJPsYibhqQDgKCur3moXDROUy8Wy2KRoMqn5PZoQLBoSnxTf7otHyeonFYsSiUVlUsUMzwttAOfnV2my3e2ATvKjiFAjIPpdg30yOr0DYRL6VpbMDFoEPPIpz2EGrl2fyn0S3Hm8tNfbv/p1+BBgA+Vdv2Iz9D6cAAAAASUVORK5CYII="},OPCT:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVENDNERTkxRTA5QjExRThBQkRDQjRERjVBMjY3MzE0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVENDNERTkyRTA5QjExRThBQkRDQjRERjVBMjY3MzE0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUQ0M0RFOEZFMDlCMTFFOEFCRENCNERGNUEyNjczMTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ0M0RFOTBFMDlCMTFFOEFCRENCNERGNUEyNjczMTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7c1/V2AAABIElEQVR42mL8//8/AwicPXuWgVxgbGwMZzMRUBsGxBeB+AXITigfL2DBIxcCxHlA7AnEz4CYB4gnQ+VW4dKEz4UNQBwNNQwEvgBxBhAn4XMhPgMFgPghmthPIP5NroF/cYgzkmsgMw7x/+Qa+AGIZbBEIgu5BjYC8VIgloLyQbE8E4gXkJtsVkMt3Ak1DOTiDiBeSa6BDFDNK0nJNdi8rArEa4H4IzQC0PFHqLwqMQaqA/ERID4IxIrQJIKOFaDyR6Dq8Xq5DYon4fHVe6g8J1RtMD4XugDxYiKDazYQu5GSbMgC6AbuAeJYIvWmAPEuQmFYDQ3w/1Cvv8dikCDU0mIgtifkwhtAbAdV+BBHsnkIlbeDqieYsG+ixxwpACDAAIZEQR7SM/O0AAAAAElFTkSuQmCC"},QJC7:function(t,e,i){"use strict";var a=i("7Qib"),s={name:"follow-record-cell",components:{CRMFullScreenDetail:function(){return Promise.all([i.e("chunk-682f"),i.e("chunk-6f45"),i.e("chunk-d3ca"),i.e("chunk-0bc3"),i.e("chunk-4a48")]).then(i.bind(null,"uMjE"))}},props:{item:{type:Object,default:function(){return{}}},crmType:{type:String,default:""}},data:function(){return{showFullDetail:!1,relationID:"",relationCrmType:""}},computed:{},mounted:function(){},methods:{previewImg:function(t,e){this.$bus.emit("preview-image-bus",{index:e,data:t.map(function(t,e,i){return t.url=t.file_path,t})})},downloadFile:function(t){Object(a.a)({path:t.file_path,name:t.name})},checkRelationDetail:function(t,e){this.relationID=e,this.relationCrmType=t,this.showFullDetail=!0}}},n=(i("4f+9"),i("KHd+")),l=Object(n.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fl-c"},[a("flexbox",{staticClass:"fl-h"},[a("div",{directives:[{name:"photo",rawName:"v-photo",value:t.item.create_user_info,expression:"item.create_user_info"},{name:"lazy",rawName:"v-lazy:background-image",value:t.$options.filters.filterUserLazyImg(t.item.create_user_info.thumb_img),expression:"$options.filters.filterUserLazyImg(item.create_user_info.thumb_img)",arg:"background-image"}],staticClass:"div-photo fl-h-img"}),t._v(" "),a("div",{staticClass:"fl-h-b"},[a("div",{staticClass:"fl-h-name"},[t._v(t._s(t.item.create_user_info.realname))]),t._v(" "),a("div",{staticClass:"fl-h-time"},[t._v(t._s(t._f("filterTimestampToFormatTime")(t.item.create_time,"YYYY-MM-DD HH:mm")))])]),t._v(" "),a("flexbox",{staticClass:"fl-h-mark"},[a("img",{staticClass:"fl-h-mark-img",attrs:{src:i("N0PQ")}}),t._v(" "),a("div",{staticClass:"fl-h-mark-name"},[t._v("跟进记录")])])],1),t._v(" "),a("div",{staticClass:"fl-b"},[a("div",{staticClass:"fl-b-content"},[t._v(t._s(t.item.content))]),t._v(" "),t.item.dataInfo.imgList&&t.item.dataInfo.imgList.length>0?a("flexbox",{staticClass:"fl-b-images",attrs:{wrap:"wrap"}},t._l(t.item.dataInfo.imgList,function(e,i){return a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.file_path_thumb,expression:"file.file_path_thumb",arg:"background-image"}],key:e.file_path_thumb,staticClass:"fl-b-img-item",on:{click:function(e){t.previewImg(t.item.dataInfo.imgList,i)}}})})):t._e(),t._v(" "),t.item.dataInfo.fileList&&t.item.dataInfo.fileList.length>0?a("div",{staticClass:"fl-b-files"},t._l(t.item.dataInfo.fileList,function(e,s){return a("flexbox",{key:s,staticClass:"cell"},[a("img",{staticClass:"cell-head",attrs:{src:i("6KEE")}}),t._v(" "),a("div",{staticClass:"cell-body"},[t._v(t._s(e.name)),a("span",{staticStyle:{color:"#ccc"}},[t._v("（"+t._s(e.size)+"）")])]),t._v(" "),a("i",{staticClass:"el-icon-download cell-foot",staticStyle:{cursor:"pointer",color:"#ccc"},on:{click:function(i){t.downloadFile(e)}}})])})):t._e(),t._v(" "),t.item.category||t.item.next_time?a("div",{staticClass:"follow"},[t.item.category?a("span",{staticClass:"follow-info"},[t._v(t._s(t.item.category))]):t._e(),t._v(" "),t.item.next_time?a("span",{staticClass:"follow-info"},[t._v(t._s(t._f("filterTimestampToFormatTime")(t.item.next_time,"YYYY-MM-DD HH:mm:ss")))]):t._e()]):t._e(),t._v(" "),t.item.dataInfo.contactsList&&t.item.dataInfo.contactsList.length>0?a("div",{staticClass:"fl-b-other"},[a("div",{staticClass:"fl-b-other-name"},[t._v("关联联系人")]),t._v(" "),a("div",t._l(t.item.dataInfo.contactsList,function(e,i){return a("flexbox",{key:i,staticClass:"cell",nativeOn:{click:function(i){t.checkRelationDetail("contacts",e.contacts_id)}}},[a("i",{staticClass:"wukong wukong-contacts cell-head crm-type",style:{opacity:0==i?1:0}}),t._v(" "),a("div",{staticClass:"cell-body",staticStyle:{color:"#6394E5",cursor:"pointer"}},[t._v(t._s(e.name))])])}))]):t._e(),t._v(" "),t.item.dataInfo.businessList&&t.item.dataInfo.businessList.length>0?a("div",{staticClass:"fl-b-other"},[a("div",{staticClass:"fl-b-other-name"},[t._v("关联商机")]),t._v(" "),a("div",t._l(t.item.dataInfo.businessList,function(e,i){return a("flexbox",{key:i,staticClass:"cell",nativeOn:{click:function(i){t.checkRelationDetail("business",e.business_id)}}},[a("i",{staticClass:"wukong wukong-business cell-head crm-type",style:{opacity:0==i?1:0}}),t._v(" "),a("div",{staticClass:"cell-body",staticStyle:{color:"#6394E5",cursor:"pointer"}},[t._v(t._s(e.name))])])}))]):t._e()],1),t._v(" "),a("c-r-m-full-screen-detail",{attrs:{visible:t.showFullDetail,crmType:t.relationCrmType,id:t.relationID},on:{"update:visible":function(e){t.showFullDetail=e}}})],1)},[],!1,null,"4d2a7a8c",null);l.options.__file="FollowRecordCell.vue";var c=l.exports,o=i("KzkL"),r={name:"record-log",components:{FollowRecordCell:c},props:{id:[String,Number],crmType:{type:String,default:""}},watch:{id:function(t){this.refreshList()}},data:function(){return{loading:!1,loadMoreLoading:!0,isPost:!1,page:1,list:[]}},computed:{},mounted:function(){var t=this;this.$bus.on("follow-log-refresh",function(e){"record-log"==e.type&&t.refreshList()});var e=this,i=document.getElementById("follow-log-content");i.onscroll=function(){i.scrollTop+i.clientHeight==i.scrollHeight&&1==e.loadMoreLoading&&(e.isPost?e.loadMoreLoading=!1:(e.isPost=!0,e.page++,e.getList()))},this.getList()},activated:function(){},deactivated:function(){},methods:{getList:function(){var t=this;this.loading=!0,Object(o.h)({page:this.page,limit:10,types:"crm_"+this.crmType,types_id:this.id,by:"record"}).then(function(e){t.list=t.list.concat(e.data.list),e.data.list.length<10?t.loadMoreLoading=!1:t.loadMoreLoading=!0,t.loading=!1,t.isPost=!1}).catch(function(){t.isPost=!1,t.loading=!1})},refreshList:function(){this.page=1,this.list=[],this.getList()}},beforeDestroy:function(){this.$bus.off("follow-log-refresh")}},u=(i("qSEU"),Object(n.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[i("div",{directives:[{name:"empty",rawName:"v-empty",value:0===t.list.length,expression:"list.length === 0"}]},[i("div",{staticClass:"log-items"},[t._l(t.list,function(e,a){return i("follow-record-cell",{key:a,attrs:{item:e,crmType:t.crmType}})}),t._v(" "),i("div",{staticClass:"load"},[i("el-button",{attrs:{type:"text",loading:t.loadMoreLoading}},[t._v(t._s(t.loadMoreLoading?"加载更多":"没有更多了"))])],1)],2)])])},[],!1,null,"283f90d1",null));u.options.__file="RecordLog.vue";e.a=u.exports},"RU/L":function(t,e,i){i("Rqdy");var a=i("WEpk").Object;t.exports=function(t,e,i){return a.defineProperty(t,e,i)}},Rqdy:function(t,e,i){var a=i("Y7ZC");a(a.S+a.F*!i("jmDH"),"Object",{defineProperty:i("2faE").f})},SEkw:function(t,e,i){t.exports={default:i("RU/L"),__esModule:!0}},UEWd:function(t,e,i){"use strict";var a=i("7Qib"),s=i("KTTK"),n={name:"mix-add",components:{CrmRelative:i("mkuN").a},props:{showRelativeBusiness:{type:Boolean,default:!1},showRelativeContacts:{type:Boolean,default:!1},id:[String,Number],crmType:{type:String,default:""}},data:function(){return{content:"",inputAutosize:{minRows:1,maxRows:6},barItems:[{img:i("S1Xc"),title:"图片",type:"img",data:"image/*"},{img:i("rl4O"),title:"附件",type:"file",data:"*.*"}],imgFiles:[],files:[],business:[],contacts:[],showRelativeType:""}},computed:{},mounted:function(){this.showRelativeBusiness&&this.barItems.push({img:i("i91G"),title:"关联商机",type:"business",show:!1}),this.showRelativeContacts&&this.barItems.push({img:i("OPCT"),title:"关联联系人",type:"contacts",show:!1}),this.$on("submit-info",function(){this.$emit("mixadd-info",{content:this.content,files:this.files,images:this.imgFiles,business:this.business,contacts:this.contacts})})},methods:{resetInfo:function(){this.content="",this.imgFiles=[],this.files=[],this.business=[],this.contacts=[],this.showRelativeType=""},checkRelativeInfos:function(t){"business"==this.showRelativeType?this.business=t.data:"contacts"==this.showRelativeType&&(this.contacts=t.data)},barClick:function(t){"business"==t.type?(this.showRelativeType=t.type,t.show=!0):"contacts"==t.type&&(this.showRelativeType=t.type,t.show=!0)},uploadFile:function(t){for(var e=this,i=t.target.files,n=this,l=function(l){var c=i[l];(o={}).module_id=e.id,o.module="crm_"+e.crmType,"image/*"==t.target.accept?o["img[]"]=c:"*.*"==t.target.accept&&(o["file[]"]=c),Object(s.e)(o).then(function(e){e.data.forEach(function(e,i){e.size=Object(a.c)(c.size),"image/*"==t.target.accept?n.imgFiles.push(e):"*.*"==t.target.accept&&(e.icon=Object(a.f)(c),n.files.push(e))})}).catch(function(){})},c=0;c<i.length;c++){var o;l(c)}t.target.value=""},deleteAllImg:function(){this.imgFiles=[]},deleteImgOrFile:function(t,e,i){var a=this;Object(s.c)({save_name:e.save_name,module_id:this.id,module:"crm_"+this.crmType}).then(function(e){"image"==t?a.imgFiles.splice(i,1):a.files.splice(i,1),a.$message.success(e.data)}).catch(function(){})},mouseImgOver:function(t,e){t.showDelete=!0,this.$set(this.imgFiles,e,t)},mouseImgLeave:function(t,e){t.showDelete=!1,this.$set(this.imgFiles,e,t)},inputFocus:function(){var t=this;this.inputAutosize={minRows:3,maxRows:6},this.$nextTick(function(){t.$refs.textarea.resizeTextarea()})}},beforeDestroy:function(){this.$off("submit-info")}},l=(i("yNwx"),i("KHd+")),c=Object(l.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mix-container"},[a("div",{staticClass:"i-cont"},[a("el-input",{ref:"textarea",attrs:{type:"textarea",autosize:t.inputAutosize,clearable:"",resize:"none",placeholder:"请输入内容"},on:{focus:t.inputFocus},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),t.imgFiles.length>0?a("section",{staticClass:"img-cont"},[a("flexbox",{attrs:{wrap:"wrap"}},[t._l(t.imgFiles,function(e,i){return a("div",{key:i,staticClass:"img-item",style:{"background-image":"url("+e.path+")"},on:{mouseover:function(a){t.mouseImgOver(e,i)},mouseleave:function(a){t.mouseImgLeave(e,i)}}},[e.showDelete?a("div",{staticClass:"img-delete",on:{click:function(a){t.deleteImgOrFile("image",e,i)}}},[t._v("×")]):t._e()])}),t._v(" "),a("div",{staticClass:"img-item-add"},[a("input",{staticClass:"img-item-iput",attrs:{type:"file",accept:"image/*",multiple:""},on:{change:t.uploadFile}})])],2),t._v(" "),a("div",{staticClass:"img-bar",on:{click:t.deleteAllImg}},[t._v("全部删除")])],1):t._e(),t._v(" "),t.files.length>0?a("section",{staticClass:"file-cont"},[a("flexbox",{staticClass:"f-header"},[a("img",{staticClass:"f-logo",attrs:{src:i("rl4O")}}),t._v(" "),a("div",{staticClass:"f-name"},[t._v("附件")])]),t._v(" "),a("div",{staticClass:"f-body"},t._l(t.files,function(e,i){return a("flexbox",{key:i,staticClass:"f-item"},[a("img",{staticClass:"f-img",attrs:{src:e.icon}}),t._v(" "),a("div",{staticClass:"f-name"},[t._v(t._s(e.name+"("+e.size+")"))]),t._v(" "),a("div",{staticClass:"close-button",on:{click:function(a){t.deleteImgOrFile("file",e,i)}}},[t._v("×")])])})),t._v(" "),a("div",{staticClass:"img-bar",on:{click:function(e){t.files=[]}}},[t._v("全部删除")])],1):t._e(),t._v(" "),t.business.length>0?a("section",{staticClass:"c-cont"},[a("flexbox",{staticClass:"c-header"},[a("img",{staticClass:"c-logo",attrs:{src:i("i91G")}}),t._v(" "),a("div",{staticClass:"c-name"},[t._v("商机")])]),t._v(" "),a("div",{staticClass:"c-body"},[a("flexbox",{attrs:{wrap:"wrap"}},t._l(t.business,function(e,i){return a("flexbox",{key:i,staticClass:"c-item"},[a("div",{staticClass:"c-item-name"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"c-item-close",on:{click:function(e){t.business.splice(i,1)}}},[t._v("×")])])}))],1)],1):t._e(),t._v(" "),t.contacts.length>0?a("section",{staticClass:"c-cont"},[a("flexbox",{staticClass:"c-header"},[a("img",{staticClass:"c-logo",attrs:{src:i("OPCT")}}),t._v(" "),a("div",{staticClass:"c-name"},[t._v("联系人")])]),t._v(" "),a("div",{staticClass:"c-body"},[a("flexbox",{attrs:{wrap:"wrap"}},t._l(t.contacts,function(e,i){return a("flexbox",{key:i,staticClass:"c-item"},[a("div",{staticClass:"c-item-name"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"c-item-close",on:{click:function(e){t.contacts.splice(i,1)}}},[t._v("×")])])}))],1)],1):t._e(),t._v(" "),a("flexbox",{staticClass:"bar-cont"},[t._l(t.barItems,function(e,i){return["img"==e.type||"file"==e.type?a("flexbox",{key:i,staticClass:"bar-item",nativeOn:{click:function(i){t.barClick(e)}}},[a("input",{staticClass:"bar-input",attrs:{type:"file",accept:e.data,multiple:""},on:{change:t.uploadFile}}),t._v(" "),a("img",{staticClass:"bar-img",attrs:{src:e.img}}),t._v(" "),a("div",{staticClass:"bar-title"},[t._v(t._s(e.title))])]):a("el-popover",{key:i,attrs:{placement:"bottom",width:"700","popper-class":"no-padding-popover",trigger:"click"},model:{value:e.show,callback:function(i){t.$set(e,"show",i)},expression:"item.show"}},[a("crm-relative",{ref:"crmrelative",refInFor:!0,attrs:{show:e.show,radio:!1,action:{type:"condition",data:{form_type:"customer",customer_id:t.id}},selectedData:"business"==e.type?{business:t.business}:{contacts:t.contacts},"crm-type":e.type},on:{close:function(t){e.show=!1},changeCheckout:t.checkRelativeInfos}}),t._v(" "),a("flexbox",{staticClass:"bar-item",attrs:{slot:"reference"},nativeOn:{click:function(i){t.barClick(e)}},slot:"reference"},[a("img",{staticClass:"bar-img",attrs:{src:e.img}}),t._v(" "),a("div",{staticClass:"bar-title"},[t._v(t._s(e.title))])])],1)]})],2)],1)},[],!1,null,"72849f50",null);c.options.__file="MixAdd.vue";e.a=c.exports},UWxO:function(t,e,i){"use strict";i.r(e);var a=i("MT78"),s=i.n(a),n=i("KTTK"),l=i("wd/R"),c=i.n(l),o=i("B2Fc"),r=i("KzkL"),u=i("7Qib"),d=i("xfX+"),m=i("K6D0"),f={name:"money-statistics",components:{ContractDetail:d.a,MoneyDetail:m.a},data:function(){return{pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}},loading:!1,tableHeight:400,dateSelect:"",structuresProps:{children:"children",label:"label",value:"id"},deptList:[],structuresSelectValue:"",userOptions:[],userSelectValue:"",list:[],showType:0,formatterRules:{},fieldContractList:[],fieldReceivablesList:[],rowID:"",showContractDview:!1,showMoneyDview:!1}},computed:{fieldList:function(){return 1==this.showType?this.fieldContractList:2==this.showType?this.fieldReceivablesList:[]}},mounted:function(){this.dateSelect=c()(new Date).year().toString(),this.initAxis(),this.getDeptList()},methods:{getDeptList:function(){var t=this;this.loading=!0,Object(n.b)().then(function(e){t.deptList=e.data,e.data.length>0&&(t.structuresSelectValue=e.data[0].id,t.getUserList(),t.getAxisData()),t.loading=!1}).catch(function(){t.loading=!1})},structuresValueChange:function(t){this.userSelectValue="",this.userOptions=[],this.getUserList()},getUserList:function(){var t=this,e={};e.structure_id=this.structuresSelectValue,Object(n.j)(e).then(function(e){t.userOptions=e.data}).catch(function(){})},handleClick:function(t){"search"===t&&this.getAxisData()},getAxisData:function(){var t=this;this.loading=!0,this.showType=0,Object(o.f)({year:this.dateSelect,structure_id:this.structuresSelectValue,user_id:this.userSelectValue}).then(function(e){for(var i=[],a=[],s=1;s<13;s++){var n=e.data.charMonthArr[s];i.push(n.receivablesMoney),a.push(n.contractMoney),t.list.push(n)}t.axisOption.series[0].data=i,t.axisOption.series[1].data=a,t.axisChart.setOption(t.axisOption,!0),t.loading=!1}).catch(function(){t.loading=!1})},initAxis:function(){var t=s.a.init(document.getElementById("axismain")),e={color:["#6ca2ff","#ff7474"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["回款金额","合同金额"],bottom:"0px",itemWidth:14},grid:{top:"40px",left:"20px",right:"20px",bottom:"40px",containLabel:!0,borderColor:"#fff"},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!1}}],yAxis:[{type:"value",name:"合同金额",axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD",formatter:"{value} 元"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!1}}],series:[{name:"回款金额",type:"bar",yAxisIndex:0,data:[]},{name:"合同金额",type:"bar",yAxisIndex:0,data:[]}]};t.setOption(e,!0);var i=this;t.on("click",function(t){0===t.seriesIndex?0===i.fieldReceivablesList.length?i.getFieldList("receivables",function(){i.showType=2,i.getDataList(t.dataIndex+1,2)}):(i.showType=2,i.getDataList(t.dataIndex+1,2)):1===t.seriesIndex&&(0===i.fieldContractList.length?i.getFieldList("contract",function(){i.showType=1,i.getDataList(t.dataIndex+1,1)}):(i.showType=1,i.getDataList(t.dataIndex+1,1)))}),this.axisOption=e,this.axisChart=t},getDataList:function(t,e){var i=this;this.loading=!0,Object(o.e)({year:this.dateSelect,structure_id:this.structuresSelectValue,month:t,type:e,user_id:this.userSelectValue}).then(function(t){i.loading=!1,i.list=t.data}).catch(function(){i.loading=!1})},getFieldList:function(t,e){var i=this;this.loading=!0,Object(r.r)({types:"crm_"+t,module:"crm",controller:t,action:"index"}).then(function(a){for(var s=0;s<a.data.length;s++){var n=a.data[s];if("date"===n.form_type){i.formatterRules[n.field]={formatter:function(t){return"0000-00-00"==t&&(t=""),t}}}else if("datetime"===n.form_type){i.formatterRules[n.field]={formatter:function(t){return 0!=t&&t?c()(Object(u.e)(t)).format("YYYY-MM-DD HH:mm:ss"):""}}}else if("create_user_id"===n.field){i.formatterRules[n.field]={type:"crm",formatter:function(t){return t?t.realname:""}}}else if("user"===n.form_type){i.formatterRules[n.field]={type:"crm",formatter:function(t){if(t){for(var e="",i=0;i<t.length;i++)e=e+t[i].realname+(i===t.length-1?"":",");return e}return""}}}else if("structure"===n.form_type){i.formatterRules[n.field]={type:"crm",formatter:function(t){if(t){for(var e="",i=0;i<t.length;i++)e=e+t[i].name+(i===t.length-1?"":",");return e}return""}}}else if("contacts_id"===n.field||"customer_id"===n.field||"business_id"===n.field||"contract_id"===n.field){i.formatterRules[n.field]={type:"crm",formatter:function(t){return t?t.name:""}}}else if("status_id"===n.field||"type_id"===n.field||"category_id"===n.field){i.formatterRules[n.field]={type:"crm",formatter:function(t){return t||""}}}var l=0;l=n.width?n.width:n.name.length<=6?15*n.name.length+45:140,"contract"===t?i.fieldContractList.push({prop:n.field,label:n.name,width:l}):"receivables"===t&&i.fieldReceivablesList.push({prop:n.field,label:n.name,width:l})}e()}).catch(function(){i.loading=!1})},fieldFormatter:function(t,e){var i=this.formatterRules[e.property];return i?"crm"===i.type?e.property?i.formatter(t[e.property+"_info"]):"":i.formatter(t[e.property]):t[e.property]},handleRowClick:function(t,e,i){1==this.showType?(this.rowID=t.contract_id,this.showContractDview=!0):2==this.showType&&(this.rowID=t.receivables_id,this.showMoneyDview=!0)}}},h=(i("nou2"),i("KHd+")),v=Object(h.a)(f,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("flexbox",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main-container",attrs:{direction:"column",align:"stretch"}},[i("div",{staticClass:"handle-bar"},[i("el-date-picker",{attrs:{type:"year",clearable:!1,"value-format":"yyyy","picker-options":t.pickerOptions,placeholder:"选择年"},model:{value:t.dateSelect,callback:function(e){t.dateSelect=e},expression:"dateSelect"}}),t._v(" "),i("el-select",{attrs:{placeholder:"选择部门"},on:{change:t.structuresValueChange},model:{value:t.structuresSelectValue,callback:function(e){t.structuresSelectValue=e},expression:"structuresSelectValue"}},t._l(t.deptList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),i("el-select",{attrs:{clearable:!0,placeholder:"选择员工"},model:{value:t.userSelectValue,callback:function(e){t.userSelectValue=e},expression:"userSelectValue"}},t._l(t.userOptions,function(t){return i("el-option",{key:t.id,attrs:{label:t.realname,value:t.id}})})),t._v(" "),i("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.handleClick("search")}}},[t._v("搜索")])],1),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"axis-content"},[i("div",{staticStyle:{width:"850px",height:"400px"},attrs:{id:"axismain"}})]),t._v(" "),0!==t.showType?i("div",{staticClass:"box"},[i("el-table",{attrs:{data:t.list,height:t.tableHeight,stripe:"","highlight-current-row":""},on:{"row-click":t.handleRowClick}},t._l(t.fieldList,function(e,a){return i("el-table-column",{key:a,attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",formatter:t.fieldFormatter,prop:e.prop,label:e.label}})}))],1):t._e()]),t._v(" "),t.showContractDview?i("contract-detail",{staticClass:"d-view",attrs:{id:t.rowID,"append-to-body":""},on:{"hide-view":function(e){t.showContractDview=!1}}}):t._e(),t._v(" "),t.showMoneyDview?i("money-detail",{staticClass:"d-view",attrs:{id:t.rowID,"append-to-body":""},on:{"hide-view":function(e){t.showMoneyDview=!1}}}):t._e()],1)},[],!1,null,"a4865016",null);v.options.__file="MoneyStatistics.vue";e.default=v.exports},XCNI:function(t,e,i){"use strict";var a=i("1qNb");i.n(a).a},YEIV:function(t,e,i){"use strict";e.__esModule=!0;var a=function(t){return t&&t.__esModule?t:{default:t}}(i("SEkw"));e.default=function(t,e,i){return e in t?(0,a.default)(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},i91G:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU2RjI0NjM0RTA5QjExRTg4QTE5QjM2OEE1QUE5MUZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU2RjI0NjM1RTA5QjExRTg4QTE5QjM2OEE1QUE5MUZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTZGMjQ2MzJFMDlCMTFFODhBMTlCMzY4QTVBQTkxRkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTZGMjQ2MzNFMDlCMTFFODhBMTlCMzY4QTVBQTkxRkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4H2LzoAAAAnklEQVR42mI8c+YMA7WAsbExAxMDlQGygSuA+B8Q/8eD/0HV4QQsSOwwNAtwAZChEcS4kJFIXzES62WqhyFdDESOqH1ocjuwRRQLAQPxRZQHEvsvLKKYKIkAbD5FNvA/kZr/ExuGq5HC6wiauo1I4bWa2IQdDsXYgP+gTTZUN5DYiPpHbDqERRQjAUtXE2sgvojCnnD///8/uCMFIMAAVWsql9WKpTgAAAAASUVORK5CYII="},mYOy:function(t,e,i){},nou2:function(t,e,i){"use strict";var a=i("0G8+");i.n(a).a},qSEU:function(t,e,i){"use strict";var a=i("9HXj");i.n(a).a},rl4O:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUzM0EzN0E0RTA5QjExRTg4MTZEOEM2ODYxNjE5QjM3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUzM0EzN0E1RTA5QjExRTg4MTZEOEM2ODYxNjE5QjM3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTMzQTM3QTJFMDlCMTFFODgxNkQ4QzY4NjE2MTlCMzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTMzQTM3QTNFMDlCMTFFODgxNkQ4QzY4NjE2MTlCMzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7neeY0AAABL0lEQVR42syUv0tCURSA1Vzam5ya+h8ag5DG3GpqqsAiwVFoECJc+jGpCFZrLTpFUjQ7PPwjClxyiCY3+y6cB5fLud0rOXjhG965j++de865L5skSWaRK5dZ8JpHmIUG/MAA1v4jNLIWVKAO6/CmSWOFO3AAJbiCLVjVpLHCV9iAF3ke+6S5wDFr8Az78Ons29LHkNDImnAO3/AAZeU9I+3AZhrI/9EAU7Nd6egIbuEJJk5tL2RPzVCTpfGZ0qieZF/TMvTJzmT+TqzsbFnZ/pidYUORHcKNzF87JHMzPJXUB1ZsBY6gGyNzhUM4lhEYS6ztqZkqc4+8B1N4h4LSgH5I5gq/YFuRprL7kEwbm4kjrYrsLkbmuymp9AMu4VpGZhZz6fOeuJEWl+KP/SvAAHR5UyjSji44AAAAAElFTkSuQmCC"},yNwx:function(t,e,i){"use strict";var a=i("6ZrO");i.n(a).a}}]);