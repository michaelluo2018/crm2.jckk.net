(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6e86"],{"9UHu":function(e,t,s){"use strict";var a=s("ESwN");s.n(a).a},"9gh/":function(e,t,s){},ESwN:function(e,t,s){},GiIE:function(e,t,s){},W9HI:function(e,t,s){"use strict";s.r(t);var a=s("oj9+"),i=s("MT78"),n=s.n(i),o=s("oU2a"),l={name:"customer-conversion-statistics",data:function(){return{loading:!1,showType:"line",axisOption:null,pieOption:null,axisChart:null,postParams:{},list:[],axisList:[],fieldList:[{field:"name",name:"客户名称"},{field:"contract_name",name:"合同名称"},{field:"contract_money",name:"合同金额（元）"},{field:"r_money",name:"回款金额（元）"},{field:"industry",name:"客户行业"},{field:"source",name:"客户来源"},{field:"owner_realname",name:"负责人"},{field:"create_realname",name:"创建人"},{field:"create_time",name:"创建时间"},{field:"order_time",name:"下单时间"}]}},mixins:[a.a],computed:{},mounted:function(){this.initPie(),this.initAxis()},methods:{showTypeChange:function(e){this.showType=e,this.refreshChartInfo()},refreshChartInfo:function(){"pie"!=this.showType?(this.axisOption.series[0].type=this.showType,this.axisChart.setOption(this.axisOption,!0)):this.axisChart.setOption(this.pieOption,!0)},searchClick:function(e){this.postParams=e,this.getDataList(),this.getRecordList()},getDataList:function(){var e=this;this.loading=!0,Object(o.b)(this.postParams).then(function(t){e.loading=!1;var s=t.data||[];e.axisList=s;for(var a=[],i=[],n=[],o=0;o<s.length;o++){var l=s[o];a.push({name:l.type,value:l.proportion}),i.push(l.proportion),n.push(l.type)}e.pieOption.legend.data=n,e.pieOption.series[0].data=a,e.axisOption.xAxis[0].data=n,e.axisOption.series[0].data=i,e.refreshChartInfo()}).catch(function(){e.loading=!1})},getRecordList:function(e){var t=this;this.list=[];var s={};if(void 0!==e){var a=this.axisList[e];s.user_id=this.postParams.user_id,s.structure_id=this.postParams.structure_id,s.start_time=a.start_time,s.end_time=a.end_time}else s=this.postParams;this.loading=!0,Object(o.c)(s).then(function(e){t.loading=!1,t.list=e.data}).catch(function(){t.loading=!1})},initAxis:function(){var e=this;this.axisChart=n.a.init(document.getElementById("axismain")),this.axisChart.on("click",function(t){e.getRecordList(t.dataIndex)}),this.axisOption={color:["#6ca2ff"],tooltip:{trigger:"axis",formatter:"{b} : {c}% ",axisPointer:{type:"shadow"}},grid:{top:"40px",left:"30px",right:"30px",bottom:"40px",containLabel:!0,borderColor:"#fff"},xAxis:[{type:"category",data:[],axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!1}}],yAxis:[{type:"value",name:"",axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD",formatter:"{value}%"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!1}}],series:[{name:"",type:this.showType,barWidth:15,data:[]}]}},initPie:function(){this.pieOption={color:this.chartColors,tooltip:{trigger:"item",formatter:"{b} : {c}% "},legend:{type:"scroll",bottom:"0px",data:[]},series:[{name:"",type:"pie",radius:"55%",center:["40%","50%"],stillShowZeroSum:!1,data:[],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}}},r=(s("bD4/"),s("KHd+")),u=Object(r.a)(l,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main-container"},[s("filtrate-handle-view",{staticClass:"filtrate-bar",attrs:{moduleType:"customer",showCustomSelect:!0,customDefault:e.showType,customOptions:[{name:"折线图",value:"line"},{name:"饼状图",value:"pie"},{name:"柱状图",value:"bar"}]},on:{load:function(t){e.loading=!0},change:e.searchClick,typeChange:e.showTypeChange}}),e._v(" "),s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("div",{staticClass:"table-content"},[s("el-table",{attrs:{data:e.list,height:"400",stripe:"",border:"","highlight-current-row":""}},e._l(e.fieldList,function(e,t){return s("el-table-column",{key:t,attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",prop:e.field,label:e.name}})}))],1)])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"axis-content"},[t("div",{attrs:{id:"axismain"}})])}],!1,null,"18a3ab5b",null);u.options.__file="CustomerConversionStatistics.vue";t.default=u.exports},"bD4/":function(e,t,s){"use strict";var a=s("9gh/");s.n(a).a},dOKi:function(e,t,s){"use strict";var a=s("GiIE");s.n(a).a},"gXW+":function(e,t,s){"use strict";var a=s("KTTK"),i=s("UcQx"),n=s("conU"),o=s("uKQN"),l=s("wd/R"),r=s.n(l),u={name:"filtrate-handle-view",components:{timeTypeSelect:o.a},watch:{},data:function(){return{pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},yearValue:"",timeTypeValue:{},structuresProps:{children:"children",label:"label",value:"id"},deptList:[],structuresSelectValue:"",userOptions:[],userSelectValue:"",businessOptions:[],businessStatusValue:"",productValue:[],productOptions:[],customValue:""}},props:{moduleType:{required:!0,type:String},showYearSelect:{default:!1,type:Boolean},showBusinessSelect:{default:!1,type:Boolean},showUserSelect:{default:!0,type:Boolean},showCustomSelect:{default:!1,type:Boolean},customDefault:"",customOptions:{default:function(){return[]},type:Array},showProductSelect:{default:!1,type:Boolean}},mounted:function(){var e=this;this.showCustomSelect&&(this.customValue=this.customDefault),this.showYearSelect&&(this.yearValue=r()(new Date).year().toString()),this.$emit("load"),this.getDeptList(function(){e.showBusinessSelect?e.getBusinessStatusList(function(){e.postFiltrateValue()}):e.postFiltrateValue()}),this.showProductSelect&&this.getProductCategoryIndex()},methods:{customSelectChange:function(){this.$emit("typeChange",this.customValue)},timeTypeChange:function(e){this.timeTypeValue=e},getDeptList:function(e){var t=this;Object(a.b)({m:"bi",c:this.moduleType,a:"read"}).then(function(s){t.deptList=s.data,s.data.length>0?(t.structuresSelectValue=s.data[0].id,t.showUserSelect&&t.getUserList()):t.structuresSelectValue="",e(!0)}).catch(function(){t.$emit("error")})},structuresValueChange:function(e){this.showUserSelect&&(this.userSelectValue="",this.userOptions=[],this.getUserList())},getUserList:function(){var e=this,t={};t.structure_id=this.structuresSelectValue,Object(a.j)(t).then(function(t){e.userOptions=t.data}).catch(function(){e.$emit("error")})},getBusinessStatusList:function(e){var t=this;Object(i.g)().then(function(s){t.businessOptions=s.data,s.data.length>0&&(t.businessStatusValue=s.data[0].type_id),e(!0)}).catch(function(){t.$emit("error")})},getProductCategoryIndex:function(){var e=this;Object(n.r)({type:"tree"}).then(function(t){e.productOptions=t.data}).catch(function(){})},postFiltrateValue:function(){var e={structure_id:this.structuresSelectValue};this.showUserSelect&&(e.user_id=this.userSelectValue),this.showBusinessSelect&&(e.type_id=this.businessStatusValue),this.showProductSelect&&(e.category_id=this.productValue.length>0?this.productValue[this.productValue.length-1]:""),this.showYearSelect?e.year=this.yearValue:"custom"==this.timeTypeValue.type?(e.start_time=this.timeTypeValue.startTime,e.end_time=this.timeTypeValue.endTime):e.type=this.timeTypeValue.value,this.$emit("change",e)}},beforeDestroy:function(){}},c=(s("9UHu"),s("KHd+")),d=Object(c.a)(u,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"filtrate-content"},[e.showYearSelect?e._e():s("time-type-select",{on:{change:e.timeTypeChange}}),e._v(" "),e.showYearSelect?s("el-date-picker",{attrs:{type:"year",clearable:!1,"value-format":"yyyy","picker-options":e.pickerOptions,placeholder:"选择年"},model:{value:e.yearValue,callback:function(t){e.yearValue=t},expression:"yearValue"}}):e._e(),e._v(" "),s("el-select",{attrs:{placeholder:"选择部门"},on:{change:e.structuresValueChange},model:{value:e.structuresSelectValue,callback:function(t){e.structuresSelectValue=t},expression:"structuresSelectValue"}},e._l(e.deptList,function(e){return s("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),e.showUserSelect?s("el-select",{attrs:{clearable:!0,placeholder:"选择员工"},model:{value:e.userSelectValue,callback:function(t){e.userSelectValue=t},expression:"userSelectValue"}},e._l(e.userOptions,function(e){return s("el-option",{key:e.id,attrs:{label:e.realname,value:e.id}})})):e._e(),e._v(" "),e.showBusinessSelect?s("el-select",{attrs:{placeholder:"项目组"},model:{value:e.businessStatusValue,callback:function(t){e.businessStatusValue=t},expression:"businessStatusValue"}},e._l(e.businessOptions,function(e){return s("el-option",{key:e.type_id,attrs:{label:e.name,value:e.type_id}})})):e._e(),e._v(" "),e.showProductSelect?s("el-cascader",{staticStyle:{width:"100%"},attrs:{options:e.productOptions,"change-on-select":"","show-all-levels":!1,props:{children:"children",label:"label",value:"category_id"}},model:{value:e.productValue,callback:function(t){e.productValue=t},expression:"productValue"}}):e._e(),e._v(" "),e.showCustomSelect?s("el-select",{attrs:{placeholder:"图标类型"},on:{change:e.customSelectChange},model:{value:e.customValue,callback:function(t){e.customValue=t},expression:"customValue"}},e._l(e.customOptions,function(e){return s("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})):e._e(),e._v(" "),s("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.postFiltrateValue()}}},[e._v("搜索")])],1)},[],!1,null,"403d10b9",null);d.options.__file="filtrateHandleView.vue";t.a=d.exports},oU2a:function(e,t,s){"use strict";s.d(t,"j",function(){return i}),s.d(t,"k",function(){return n}),s.d(t,"i",function(){return o}),s.d(t,"g",function(){return l}),s.d(t,"h",function(){return r}),s.d(t,"c",function(){return u}),s.d(t,"b",function(){return c}),s.d(t,"d",function(){return d}),s.d(t,"e",function(){return h}),s.d(t,"l",function(){return p}),s.d(t,"a",function(){return m}),s.d(t,"f",function(){return f});var a=s("t3Un");function i(e){return Object(a.a)({url:"bi/customer/total",method:"post",data:e})}function n(e){return Object(a.a)({url:"bi/customer/statistics",method:"post",data:e})}function o(e){return Object(a.a)({url:"bi/customer/recordTimes",method:"post",data:e})}function l(e){return Object(a.a)({url:"bi/customer/recordList",method:"post",data:e})}function r(e){return Object(a.a)({url:"bi/customer/recordMode",method:"post",data:e})}function u(e){return Object(a.a)({url:"bi/customer/conversionInfo",method:"post",data:e})}function c(e){return Object(a.a)({url:"bi/customer/conversion",method:"post",data:e})}function d(e){return Object(a.a)({url:"bi/customer/pool",method:"post",data:e})}function h(e){return Object(a.a)({url:"bi/customer/poolList",method:"post",data:e})}function p(e){return Object(a.a)({url:"bi/customer/userCycle",method:"post",data:e})}function m(e){return Object(a.a)({url:"bi/customer/addressCycle",method:"post",data:e})}function f(e){return Object(a.a)({url:"bi/customer/productCycle",method:"post",data:e})}},"oj9+":function(e,t,s){"use strict";var a=s("gXW+");t.a={data:function(){return{chartColors:["#6CA2FF","#6AC9D7","#72DCA2","#48E78D","#FECD51","#DBB375","#FF7474","#F59561","#A3AEBC","#4C84FF","#0DBEB4","#00DEDE","#FFAA00","#C7C116","#F7A57C","#F661AC","#8652EE"]}},components:{filtrateHandleView:a.a},props:{},computed:{},watch:{},mounted:function(){},methods:{},deactivated:function(){}}},uKQN:function(e,t,s){"use strict";var a=s("7Qib"),i={name:"time-type-select",computed:{iconClass:function(){return this.showTypePopover?"arrow-up":"arrow-down"},typeShowValue:function(){return this.sureCustomContent?this.startTime||this.endTime?(this.startTime||"")+"-"+(this.endTime||""):"":this.selectType.label}},data:function(){return{selectType:{label:"本年",value:"year"},showTypePopover:!1,showCustomContent:!1,sureCustomContent:!1,startTime:"",endTime:"",typeOptions:[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"本周",value:"week"},{label:"上周",value:"lastWeek"},{label:"本月",value:"month"},{label:"上月",value:"lastMonth"},{label:"本季度",value:"quarter"},{label:"上季度",value:"lastQuarter"},{label:"本年",value:"year"},{label:"去年",value:"lastYear"}]}},props:{defaultType:Object},mounted:function(){this.defaultType?this.selectType=this.defaultType:this.$emit("change",{type:"default",value:this.selectType.value})},methods:{typeSelectClick:function(e){this.showTypePopover=!1,this.sureCustomContent=!1,this.showCustomContent=!1,this.selectType=e,this.$emit("change",{type:"default",value:this.selectType.value})},customSureClick:function(){this.startTime&&this.endTime&&(this.sureCustomContent=!0,this.showTypePopover=!1,this.$emit("change",{type:"custom",startTime:Object(a.d)(this.startTime),endTime:Object(a.d)(this.endTime)}))}}},n=(s("dOKi"),s("KHd+")),o=Object(n.a)(i,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-popover",{attrs:{placement:"bottom",width:"200","popper-class":"no-padding-popover",trigger:"click"},model:{value:e.showTypePopover,callback:function(t){e.showTypePopover=t},expression:"showTypePopover"}},[s("div",{staticClass:"type-popper"},[s("div",{staticClass:"type-content"},[e._l(e.typeOptions,function(t,a){return s("div",{key:a,staticClass:"type-content-item",class:{selected:e.selectType.value==t.value&&!e.showCustomContent},on:{click:function(s){e.typeSelectClick(t)}}},[s("div",{staticClass:"mark"}),e._v(e._s(t.label)+"\n      ")])}),e._v(" "),s("div",{staticClass:"type-content-item",class:{selected:e.showCustomContent},on:{click:function(t){e.showCustomContent=!0}}},[s("div",{staticClass:"mark"}),e._v("自定义\n      ")])],2),e._v(" "),e.showCustomContent?s("div",{staticClass:"type-content-custom"},[s("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}}),e._v(" "),s("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}}),e._v(" "),s("el-button",{on:{click:e.customSureClick}},[e._v("确定")])],1):e._e()]),e._v(" "),s("el-input",{staticClass:"type-select",attrs:{slot:"reference",placeholder:"请选择选择",readonly:!0},slot:"reference",model:{value:e.typeShowValue,callback:function(t){e.typeShowValue=t},expression:"typeShowValue"}},[s("i",{class:["el-input__icon","el-icon-"+e.iconClass],attrs:{slot:"suffix"},slot:"suffix"})])],1)},[],!1,null,"77676b5a",null);o.options.__file="index.vue";t.a=o.exports}}]);