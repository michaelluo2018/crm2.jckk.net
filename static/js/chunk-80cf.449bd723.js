(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-80cf"],{"8BBA":function(t,e,s){},B2Fc:function(t,e,s){"use strict";s.d(e,"a",function(){return o}),s.d(e,"b",function(){return i});var a=s("t3Un");function o(t){return Object(a.a)({url:"bi/achievement/statistics",method:"post",data:t})}function i(t){return Object(a.a)({url:"bi/product/statistics",method:"post",data:t})}},Evrk:function(t,e,s){},MHbi:function(t,e,s){"use strict";var a=s("Evrk");s.n(a).a},"RU/L":function(t,e,s){s("Rqdy");var a=s("WEpk").Object;t.exports=function(t,e,s){return a.defineProperty(t,e,s)}},Rqdy:function(t,e,s){var a=s("Y7ZC");a(a.S+a.F*!s("jmDH"),"Object",{defineProperty:s("2faE").f})},SEkw:function(t,e,s){t.exports={default:s("RU/L"),__esModule:!0}},SW5X:function(t,e,s){"use strict";var a=s("vnDa");s.n(a).a},YEIV:function(t,e,s){"use strict";e.__esModule=!0;var a=function(t){return t&&t.__esModule?t:{default:t}}(s("SEkw"));e.default=function(t,e,s){return e in t?(0,a.default)(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}},aRRD:function(t,e,s){"use strict";var a=s("8BBA");s.n(a).a},fwlh:function(t,e,s){"use strict";s.r(e);var a=s("B2Fc"),o=s("xfX+"),i=s("ppJE"),n=s("8gwX"),l=s("oj9+");function r(t){return t?t.num?t.num:t.realname?t.realname:t.name:""}var u={name:"product-statistics",components:{ContractDetail:o.a,CustomerDetail:i.a,ProductDetail:n.a},data:function(){return{loading:!1,tableHeight:document.documentElement.clientHeight-155,postParams:{},headFieldList:[{field:"category_id_info",name:"产品分类",width:"115px"},{field:"product_id",name:"产品名称",width:"115px"},{field:"contract_id",name:"合同编号",width:"115px"},{field:"owner_user_id",name:"负责人",width:"115px"},{field:"customer_id",name:"客户名称",width:"115px"},{field:"sales_price",name:"销售单价",width:"115px"},{field:"num",name:"数量",width:"115px"},{field:"subtotal",name:"订单产品小计",width:"115px"}],infoFieldList:[{field:"name1",name:"产品分类",width:"115px"},{field:"name2",name:"产品名称",width:"115px"},{field:"name3",name:"合同编号",width:"115px"},{field:"name4",name:"负责人",width:"115px"},{field:"count",name:"客户名称",width:"115px"},{field:"money",name:"销售单价",width:"115px"}],list:[],spanList:[],newList:[],formatterRules:{product_id:r,contract_id:r,owner_user_id:r,customer_id:r},showContractview:!1,showCustomerView:!1,showProductview:!1,rowID:""}},mixins:[l.a],computed:{},mounted:function(){var t=this;window.onresize=function(){var e=document.documentElement.clientHeight;t.tableHeight=e-155}},methods:{objectSpanMethod:function(t){t.row,t.column;var e=t.rowIndex,s=t.columnIndex,a=this.spanList[e];return 0==s?0==a.rowspan?{rowspan:0,colspan:0}:{rowspan:a.rowspan,colspan:1}:1==s?0==a.product_rowspan?{rowspan:0,colspan:0}:{rowspan:a.product_rowspan,colspan:1}:void 0},fieldFormatter:function(t,e){var s=this.formatterRules[e.property];return s?e.property?s(t[e.property+"_info"]):"":t[e.property]},handleRowClick:function(t,e,s){"customer_id"===e.property?(this.showProductview&&(this.showProductview=!1),this.showContractview&&(this.showContractview=!1),this.rowID=t.customer_id,this.showCustomerView=!0):"product_id"===e.property?(this.showCustomerView&&(this.showCustomerView=!1),this.showContractview&&(this.showContractview=!1),this.rowID=t.product_id,this.showProductview=!0):"contract_id"===e.property&&(this.showProductview&&(this.showProductview=!1),this.showCustomerView&&(this.showCustomerView=!1),this.rowID=t.contract_id,this.showContractview=!0)},cellStyle:function(t){t.row,t.column;var e=t.rowIndex,s=t.columnIndex,a=this.spanList[e];return 1==a.isSum?{backgroundColor:"#FFF9F2"}:1==a.isAllSum?{backgroundColor:"#FFF3E8"}:1===s||2===s||4===s?{color:"#3E84E9",cursor:"pointer"}:void 0},getProductDatalist:function(t){var e=this;this.loading=!0,Object(a.b)(t).then(function(t){e.list=t.data,e.handleShowInfo(),e.loading=!1}).catch(function(){e.loading=!1})},handleShowInfo:function(){for(var t=[],e=[],s=0,a=0,o=0,i=0,n=0,l=0,r=0;r<this.list.length;r++){var u=this.list[r];if(0==e.length)s=0,a=0,o=parseFloat(u.num),i=parseFloat(u.subtotal),n=parseFloat(u.num),l=parseFloat(u.subtotal),e.push({rowspan:1,product_rowspan:1}),t.push(u);else if(u.category_id!=this.list[r-1].category_id){(c=e[s]).rowspan+=1,t.push({num:o,subtotal:i}),e.push({rowspan:0,product_rowspan:1,isSum:!0}),t.push({num:n,subtotal:l}),e.push({rowspan:1,product_rowspan:1,isAllSum:!0}),e.push({rowspan:1,product_rowspan:1}),o=parseFloat(u.num),i=parseFloat(u.subtotal),n=parseFloat(u.num),l=parseFloat(u.subtotal),t.push(u),s=e.length-1,a=e.length-1}else{var c;if((c=e[s]).rowspan+=1,u.product_id==this.list[r-1].product_id)e[a].product_rowspan+=1,e.push({rowspan:0,product_rowspan:0}),o+=parseFloat(u.num),i+=parseFloat(u.subtotal),n+=parseFloat(u.num),l+=parseFloat(u.subtotal),t.push(u);else c.rowspan+=1,t.push({num:o,subtotal:i}),e.push({rowspan:0,product_rowspan:1,isSum:!0}),e.push({rowspan:0,product_rowspan:1}),a=e.length-1,o=u.num,i=parseFloat(u.subtotal),n+=parseFloat(u.num),l+=parseFloat(u.subtotal),t.push(u)}if(this.list.length-1==r)(c=e[s]).rowspan+=1,t.push({num:o,subtotal:i}),o=0,i=0,e.push({rowspan:0,product_rowspan:1,isSum:!0}),t.push({num:n,subtotal:l}),n=0,l=0,e.push({rowspan:1,product_rowspan:1,isAllSum:!0})}this.spanList=e,this.newList=t}}},c=(s("aRRD"),s("KHd+")),p=Object(c.a)(u,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main-container"},[s("filtrate-handle-view",{staticClass:"filtrate-bar",attrs:{moduleType:"product"},on:{load:function(e){t.loading=!0},change:t.getProductDatalist}}),t._v(" "),s("div",{staticClass:"content"},[s("el-table",{attrs:{id:"crm-table",data:t.newList,"max-height":t.tableHeight,"span-method":t.objectSpanMethod,border:"","cell-style":t.cellStyle},on:{"row-click":t.handleRowClick}},t._l(t.headFieldList,function(e,a){return s("el-table-column",{key:a,attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",formatter:t.fieldFormatter,prop:e.field,label:e.name}})}))],1),t._v(" "),t.showContractview?s("contract-detail",{staticClass:"d-view",attrs:{id:t.rowID},on:{"hide-view":function(e){t.showContractview=!1}}}):t._e(),t._v(" "),t.showCustomerView?s("customer-detail",{staticClass:"d-view",attrs:{id:t.rowID},on:{"hide-view":function(e){t.showCustomerView=!1}}}):t._e(),t._v(" "),t.showProductview?s("product-detail",{staticClass:"d-view",attrs:{id:t.rowID},on:{"hide-view":function(e){t.showProductview=!1}}}):t._e()],1)},[],!1,null,"71e9fdd4",null);p.options.__file="ProductStatistics.vue";e.default=p.exports},"gXW+":function(t,e,s){"use strict";var a=s("KTTK"),o=s("UcQx"),i=s("conU"),n=s("uKQN"),l=s("wd/R"),r=s.n(l),u={name:"filtrate-handle-view",components:{timeTypeSelect:n.a},watch:{},data:function(){return{pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}},yearValue:"",timeTypeValue:{},structuresProps:{children:"children",label:"label",value:"id"},deptList:[],structuresSelectValue:"",userOptions:[],userSelectValue:"",businessOptions:[],businessStatusValue:"",productValue:[],productOptions:[],customValue:""}},props:{moduleType:{required:!0,type:String},showYearSelect:{default:!1,type:Boolean},showBusinessSelect:{default:!1,type:Boolean},showUserSelect:{default:!0,type:Boolean},showCustomSelect:{default:!1,type:Boolean},customDefault:"",customOptions:{default:function(){return[]},type:Array},showProductSelect:{default:!1,type:Boolean}},mounted:function(){var t=this;this.showCustomSelect&&(this.customValue=this.customDefault),this.showYearSelect&&(this.yearValue=r()(new Date).year().toString()),this.$emit("load"),this.getDeptList(function(){t.showBusinessSelect?t.getBusinessStatusList(function(){t.postFiltrateValue()}):t.postFiltrateValue()}),this.showProductSelect&&this.getProductCategoryIndex()},methods:{customSelectChange:function(){this.$emit("typeChange",this.customValue)},timeTypeChange:function(t){this.timeTypeValue=t},getDeptList:function(t){var e=this;Object(a.b)({m:"bi",c:this.moduleType,a:"read"}).then(function(s){e.deptList=s.data,s.data.length>0?(e.structuresSelectValue=s.data[0].id,e.showUserSelect&&e.getUserList()):e.structuresSelectValue="",t(!0)}).catch(function(){e.$emit("error")})},structuresValueChange:function(t){this.showUserSelect&&(this.userSelectValue="",this.userOptions=[],this.getUserList())},getUserList:function(){var t=this,e={};e.structure_id=this.structuresSelectValue,Object(a.j)(e).then(function(e){t.userOptions=e.data}).catch(function(){t.$emit("error")})},getBusinessStatusList:function(t){var e=this;Object(o.g)().then(function(s){e.businessOptions=s.data,s.data.length>0&&(e.businessStatusValue=s.data[0].type_id),t(!0)}).catch(function(){e.$emit("error")})},getProductCategoryIndex:function(){var t=this;Object(i.o)({type:"tree"}).then(function(e){t.productOptions=e.data}).catch(function(){})},postFiltrateValue:function(){var t={structure_id:this.structuresSelectValue};this.showUserSelect&&(t.user_id=this.userSelectValue),this.showBusinessSelect&&(t.type_id=this.businessStatusValue),this.showProductSelect&&(t.category_id=this.productValue.length>0?this.productValue[this.productValue.length-1]:""),this.showYearSelect?t.year=this.yearValue:"custom"==this.timeTypeValue.type?(t.start_time=this.timeTypeValue.startTime,t.end_time=this.timeTypeValue.endTime):t.type=this.timeTypeValue.value,this.$emit("change",t)}},beforeDestroy:function(){}},c=(s("MHbi"),s("KHd+")),p=Object(c.a)(u,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"filtrate-content"},[t.showYearSelect?t._e():s("time-type-select",{on:{change:t.timeTypeChange}}),t._v(" "),t.showYearSelect?s("el-date-picker",{attrs:{type:"year",clearable:!1,"value-format":"yyyy","picker-options":t.pickerOptions,placeholder:"选择年"},model:{value:t.yearValue,callback:function(e){t.yearValue=e},expression:"yearValue"}}):t._e(),t._v(" "),s("el-select",{attrs:{placeholder:"选择部门"},on:{change:t.structuresValueChange},model:{value:t.structuresSelectValue,callback:function(e){t.structuresSelectValue=e},expression:"structuresSelectValue"}},t._l(t.deptList,function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),t.showUserSelect?s("el-select",{attrs:{clearable:!0,placeholder:"选择员工"},model:{value:t.userSelectValue,callback:function(e){t.userSelectValue=e},expression:"userSelectValue"}},t._l(t.userOptions,function(t){return s("el-option",{key:t.id,attrs:{label:t.realname,value:t.id}})})):t._e(),t._v(" "),t.showBusinessSelect?s("el-select",{attrs:{placeholder:"项目组"},model:{value:t.businessStatusValue,callback:function(e){t.businessStatusValue=e},expression:"businessStatusValue"}},t._l(t.businessOptions,function(t){return s("el-option",{key:t.type_id,attrs:{label:t.name,value:t.type_id}})})):t._e(),t._v(" "),t.showProductSelect?s("el-cascader",{staticStyle:{width:"100%"},attrs:{options:t.productOptions,"change-on-select":"","show-all-levels":!1,props:{children:"children",label:"label",value:"category_id"}},model:{value:t.productValue,callback:function(e){t.productValue=e},expression:"productValue"}}):t._e(),t._v(" "),t.showCustomSelect?s("el-select",{attrs:{placeholder:"图标类型"},on:{change:t.customSelectChange},model:{value:t.customValue,callback:function(e){t.customValue=e},expression:"customValue"}},t._l(t.customOptions,function(t){return s("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})):t._e(),t._v(" "),s("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.postFiltrateValue()}}},[t._v("搜索")])],1)},[],!1,null,"324f38a2",null);p.options.__file="filtrateHandleView.vue";e.a=p.exports},"oj9+":function(t,e,s){"use strict";var a=s("gXW+");e.a={data:function(){return{chartColors:["#6CA2FF","#6AC9D7","#72DCA2","#48E78D","#FECD51","#DBB375","#FF7474","#F59561","#A3AEBC","#4C84FF","#0DBEB4","#00DEDE","#FFAA00","#C7C116","#F7A57C","#F661AC","#8652EE"]}},components:{filtrateHandleView:a.a},props:{},computed:{},watch:{},mounted:function(){},methods:{},deactivated:function(){}}},uKQN:function(t,e,s){"use strict";var a={name:"time-type-select",computed:{iconClass:function(){return this.showTypePopover?"arrow-up":"arrow-down"},typeShowValue:function(){return this.sureCustomContent?this.startTime||this.endTime?(this.startTime||"")+"-"+(this.endTime||""):"":this.selectType.label}},data:function(){return{selectType:{label:"本年",value:"year"},showTypePopover:!1,showCustomContent:!1,sureCustomContent:!1,startTime:"",endTime:"",typeOptions:[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"本周",value:"week"},{label:"上周",value:"lastWeek"},{label:"本月",value:"month"},{label:"上月",value:"lastMonth"},{label:"本季度",value:"quarter"},{label:"上季度",value:"lastQuarter"},{label:"本年",value:"year"},{label:"去年",value:"lastYear"}]}},props:{defaultType:Object},mounted:function(){this.defaultType?this.selectType=this.defaultType:this.$emit("change",{type:"default",value:this.selectType.value})},methods:{typeSelectClick:function(t){this.showTypePopover=!1,this.sureCustomContent=!1,this.showCustomContent=!1,this.selectType=t,this.$emit("change",{type:"default",value:this.selectType.value})},customSureClick:function(){this.startTime&&this.endTime&&(this.sureCustomContent=!0,this.showTypePopover=!1,this.$emit("change",{type:"custom",startTime:this.startTime,endTime:this.endTime}))}}},o=(s("SW5X"),s("KHd+")),i=Object(o.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-popover",{attrs:{placement:"bottom",width:"200","popper-class":"no-padding-popover",trigger:"click"},model:{value:t.showTypePopover,callback:function(e){t.showTypePopover=e},expression:"showTypePopover"}},[s("div",{staticClass:"type-popper"},[s("div",{staticClass:"type-content"},[t._l(t.typeOptions,function(e,a){return s("div",{key:a,staticClass:"type-content-item",class:{selected:t.selectType.value==e.value&&!t.showCustomContent},on:{click:function(s){t.typeSelectClick(e)}}},[s("div",{staticClass:"mark"}),t._v(t._s(e.label)+"\n      ")])}),t._v(" "),s("div",{staticClass:"type-content-item",class:{selected:t.showCustomContent},on:{click:function(e){t.showCustomContent=!0}}},[s("div",{staticClass:"mark"}),t._v("自定义\n      ")])],2),t._v(" "),t.showCustomContent?s("div",{staticClass:"type-content-custom"},[s("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),t._v(" "),s("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}}),t._v(" "),s("el-button",{on:{click:t.customSureClick}},[t._v("确定")])],1):t._e()]),t._v(" "),s("el-input",{staticClass:"type-select",attrs:{slot:"reference",placeholder:"请选择选择",readonly:!0},slot:"reference",model:{value:t.typeShowValue,callback:function(e){t.typeShowValue=e},expression:"typeShowValue"}},[s("i",{class:["el-input__icon","el-icon-"+t.iconClass],attrs:{slot:"suffix"},slot:"suffix"})])],1)},[],!1,null,"8d513086",null);i.options.__file="index.vue";e.a=i.exports},vnDa:function(t,e,s){}}]);