(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2c6b"],{"0OoJ":function(t,e,a){"use strict";var s=a("sqmv");a.n(s).a},"9UHu":function(t,e,a){"use strict";var s=a("ESwN");a.n(s).a},ESwN:function(t,e,a){},GiIE:function(t,e,a){},NAyz:function(t,e,a){"use strict";var s=a("oj9+");e.a={data:function(){return{loading:!1,axisOption:{color:["#6ca2ff"],tooltip:{trigger:"axis",formatter:"{b} : {c}元",axisPointer:{type:"shadow"}},grid:{top:"40px",left:"30px",right:"50px",bottom:"40px",containLabel:!0,borderColor:"#fff"},xAxis:[{name:"（元）",type:"value",data:[],axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD",formatter:"{value}"},axisLine:{show:!1}}],yAxis:[{type:"category",axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#BDBDBD"},axisLine:{lineStyle:{color:"#BDBDBD"}},splitLine:{show:!1}}],series:[{type:"bar",label:{normal:{show:!0,position:"right",color:"#333"}},barWidth:20,data:[]}]},axisChart:null,list:[],fieldList:[]}},mixins:[s.a],components:{},props:{},computed:{},watch:{},mounted:function(){},methods:{},deactivated:function(){}}},X8ug:function(t,e,a){"use strict";a.d(e,"c",function(){return i}),a.d(e,"f",function(){return n}),a.d(e,"i",function(){return o}),a.d(e,"e",function(){return l}),a.d(e,"b",function(){return u}),a.d(e,"a",function(){return r}),a.d(e,"h",function(){return c}),a.d(e,"g",function(){return d}),a.d(e,"d",function(){return p});var s=a("t3Un");function i(t){return Object(s.a)({url:"bi/ranking/contract",method:"post",data:t})}function n(t){return Object(s.a)({url:"bi/ranking/receivables",method:"post",data:t})}function o(t){return Object(s.a)({url:"bi/ranking/signing",method:"post",data:t})}function l(t){return Object(s.a)({url:"bi/ranking/product",method:"post",data:t})}function u(t){return Object(s.a)({url:"bi/ranking/addCustomer",method:"post",data:t})}function r(t){return Object(s.a)({url:"bi/ranking/addContacts",method:"post",data:t})}function c(t){return Object(s.a)({url:"bi/ranking/recordNun",method:"post",data:t})}function d(t){return Object(s.a)({url:"bi/ranking/recordCustomer",method:"post",data:t})}function p(t){return Object(s.a)({url:"bi/ranking/examine",method:"post",data:t})}},dOKi:function(t,e,a){"use strict";var s=a("GiIE");a.n(s).a},"gXW+":function(t,e,a){"use strict";var s=a("KTTK"),i=a("UcQx"),n=a("conU"),o=a("uKQN"),l=a("wd/R"),u=a.n(l),r={name:"filtrate-handle-view",components:{timeTypeSelect:o.a},watch:{},data:function(){return{pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}},yearValue:"",timeTypeValue:{},structuresProps:{children:"children",label:"label",value:"id"},deptList:[],structuresSelectValue:"",userOptions:[],userSelectValue:"",businessOptions:[],businessStatusValue:"",productValue:[],productOptions:[],customValue:""}},props:{moduleType:{required:!0,type:String},showYearSelect:{default:!1,type:Boolean},showBusinessSelect:{default:!1,type:Boolean},showUserSelect:{default:!0,type:Boolean},showCustomSelect:{default:!1,type:Boolean},customDefault:"",customOptions:{default:function(){return[]},type:Array},showProductSelect:{default:!1,type:Boolean}},mounted:function(){var t=this;this.showCustomSelect&&(this.customValue=this.customDefault),this.showYearSelect&&(this.yearValue=u()(new Date).year().toString()),this.$emit("load"),this.getDeptList(function(){t.showBusinessSelect?t.getBusinessStatusList(function(){t.postFiltrateValue()}):t.postFiltrateValue()}),this.showProductSelect&&this.getProductCategoryIndex()},methods:{customSelectChange:function(){this.$emit("typeChange",this.customValue)},timeTypeChange:function(t){this.timeTypeValue=t},getDeptList:function(t){var e=this;Object(s.b)({m:"bi",c:this.moduleType,a:"read"}).then(function(a){e.deptList=a.data,a.data.length>0?(e.structuresSelectValue=a.data[0].id,e.showUserSelect&&e.getUserList()):e.structuresSelectValue="",t(!0)}).catch(function(){e.$emit("error")})},structuresValueChange:function(t){this.showUserSelect&&(this.userSelectValue="",this.userOptions=[],this.getUserList())},getUserList:function(){var t=this,e={};e.structure_id=this.structuresSelectValue,Object(s.j)(e).then(function(e){t.userOptions=e.data}).catch(function(){t.$emit("error")})},getBusinessStatusList:function(t){var e=this;Object(i.g)().then(function(a){e.businessOptions=a.data,a.data.length>0&&(e.businessStatusValue=a.data[0].type_id),t(!0)}).catch(function(){e.$emit("error")})},getProductCategoryIndex:function(){var t=this;Object(n.r)({type:"tree"}).then(function(e){t.productOptions=e.data}).catch(function(){})},postFiltrateValue:function(){var t={structure_id:this.structuresSelectValue};this.showUserSelect&&(t.user_id=this.userSelectValue),this.showBusinessSelect&&(t.type_id=this.businessStatusValue),this.showProductSelect&&(t.category_id=this.productValue.length>0?this.productValue[this.productValue.length-1]:""),this.showYearSelect?t.year=this.yearValue:"custom"==this.timeTypeValue.type?(t.start_time=this.timeTypeValue.startTime,t.end_time=this.timeTypeValue.endTime):t.type=this.timeTypeValue.value,this.$emit("change",t)}},beforeDestroy:function(){}},c=(a("9UHu"),a("KHd+")),d=Object(c.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filtrate-content"},[t.showYearSelect?t._e():a("time-type-select",{on:{change:t.timeTypeChange}}),t._v(" "),t.showYearSelect?a("el-date-picker",{attrs:{type:"year",clearable:!1,"value-format":"yyyy","picker-options":t.pickerOptions,placeholder:"选择年"},model:{value:t.yearValue,callback:function(e){t.yearValue=e},expression:"yearValue"}}):t._e(),t._v(" "),a("el-select",{attrs:{placeholder:"选择部门"},on:{change:t.structuresValueChange},model:{value:t.structuresSelectValue,callback:function(e){t.structuresSelectValue=e},expression:"structuresSelectValue"}},t._l(t.deptList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),t.showUserSelect?a("el-select",{attrs:{clearable:!0,placeholder:"选择员工"},model:{value:t.userSelectValue,callback:function(e){t.userSelectValue=e},expression:"userSelectValue"}},t._l(t.userOptions,function(t){return a("el-option",{key:t.id,attrs:{label:t.realname,value:t.id}})})):t._e(),t._v(" "),t.showBusinessSelect?a("el-select",{attrs:{placeholder:"项目组"},model:{value:t.businessStatusValue,callback:function(e){t.businessStatusValue=e},expression:"businessStatusValue"}},t._l(t.businessOptions,function(t){return a("el-option",{key:t.type_id,attrs:{label:t.name,value:t.type_id}})})):t._e(),t._v(" "),t.showProductSelect?a("el-cascader",{staticStyle:{width:"100%"},attrs:{options:t.productOptions,"change-on-select":"","show-all-levels":!1,props:{children:"children",label:"label",value:"category_id"}},model:{value:t.productValue,callback:function(e){t.productValue=e},expression:"productValue"}}):t._e(),t._v(" "),t.showCustomSelect?a("el-select",{attrs:{placeholder:"图标类型"},on:{change:t.customSelectChange},model:{value:t.customValue,callback:function(e){t.customValue=e},expression:"customValue"}},t._l(t.customOptions,function(t){return a("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})):t._e(),t._v(" "),a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.postFiltrateValue()}}},[t._v("搜索")])],1)},[],!1,null,"403d10b9",null);d.options.__file="filtrateHandleView.vue";e.a=d.exports},lYWf:function(t,e,a){"use strict";a.r(e);var s=a("NAyz"),i=a("MT78"),n=a.n(i),o=a("X8ug"),l={name:"ranking-examine-statistics",data:function(){return{}},mixins:[s.a],computed:{},mounted:function(){this.fieldList=[{field:"user_name",name:"员工"},{field:"structure_name",name:"部门"},{field:"count",name:"出差次数（次）"}],this.initAxis()},methods:{getDataList:function(t){var e=this;this.loading=!0,Object(o.d)(t).then(function(t){e.loading=!1,e.list=t.data||[];for(var a=[],s=[],i=t.data.length>10?10:t.data.length,n=0;n<i;n++){var o=t.data[n];a.splice(0,0,parseFloat(o.count)),s.splice(0,0,o.user_name)}e.axisOption.yAxis[0].data=s,e.axisOption.series[0].data=a,e.axisChart.setOption(e.axisOption,!0)}).catch(function(){e.loading=!1})},initAxis:function(){this.axisChart=n.a.init(document.getElementById("axismain")),this.axisOption.tooltip.formatter="{b} : {c}次",this.axisOption.xAxis[0].name="（次）",this.axisChart.setOption(this.axisOption,!0)}}},u=(a("0OoJ"),a("KHd+")),r=Object(u.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main-container"},[a("filtrate-handle-view",{staticClass:"filtrate-bar",attrs:{showUserSelect:!1,moduleType:"ranking"},on:{load:function(e){t.loading=!0},change:t.getDataList}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"content-title"},[t._v("出差次数排行（按创建人、出差时间统计）")]),t._v(" "),a("div",{directives:[{name:"empty",rawName:"v-empty",value:0===t.list.length,expression:"list.length === 0"}],staticClass:"axis-content",attrs:{"xs-empty-text":"暂无排行"}},[a("div",{attrs:{id:"axismain"}})]),t._v(" "),a("div",{staticClass:"table-content"},[a("el-table",{attrs:{data:t.list,height:"400",stripe:"",border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"公司总排名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.$index+1)+"\n          ")]}}])}),t._v(" "),t._l(t.fieldList,function(t,e){return a("el-table-column",{key:e,attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",prop:t.field,label:t.name}})})],2)],1)])],1)},[],!1,null,"6bc06954",null);r.options.__file="RankingExamineStatistics.vue";e.default=r.exports},"oj9+":function(t,e,a){"use strict";var s=a("gXW+");e.a={data:function(){return{chartColors:["#6CA2FF","#6AC9D7","#72DCA2","#48E78D","#FECD51","#DBB375","#FF7474","#F59561","#A3AEBC","#4C84FF","#0DBEB4","#00DEDE","#FFAA00","#C7C116","#F7A57C","#F661AC","#8652EE"]}},components:{filtrateHandleView:s.a},props:{},computed:{},watch:{},mounted:function(){},methods:{},deactivated:function(){}}},sqmv:function(t,e,a){},uKQN:function(t,e,a){"use strict";var s=a("7Qib"),i={name:"time-type-select",computed:{iconClass:function(){return this.showTypePopover?"arrow-up":"arrow-down"},typeShowValue:function(){return this.sureCustomContent?this.startTime||this.endTime?(this.startTime||"")+"-"+(this.endTime||""):"":this.selectType.label}},data:function(){return{selectType:{label:"本年",value:"year"},showTypePopover:!1,showCustomContent:!1,sureCustomContent:!1,startTime:"",endTime:"",typeOptions:[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"本周",value:"week"},{label:"上周",value:"lastWeek"},{label:"本月",value:"month"},{label:"上月",value:"lastMonth"},{label:"本季度",value:"quarter"},{label:"上季度",value:"lastQuarter"},{label:"本年",value:"year"},{label:"去年",value:"lastYear"}]}},props:{defaultType:Object},mounted:function(){this.defaultType?this.selectType=this.defaultType:this.$emit("change",{type:"default",value:this.selectType.value})},methods:{typeSelectClick:function(t){this.showTypePopover=!1,this.sureCustomContent=!1,this.showCustomContent=!1,this.selectType=t,this.$emit("change",{type:"default",value:this.selectType.value})},customSureClick:function(){this.startTime&&this.endTime&&(this.sureCustomContent=!0,this.showTypePopover=!1,this.$emit("change",{type:"custom",startTime:Object(s.d)(this.startTime),endTime:Object(s.d)(this.endTime)}))}}},n=(a("dOKi"),a("KHd+")),o=Object(n.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-popover",{attrs:{placement:"bottom",width:"200","popper-class":"no-padding-popover",trigger:"click"},model:{value:t.showTypePopover,callback:function(e){t.showTypePopover=e},expression:"showTypePopover"}},[a("div",{staticClass:"type-popper"},[a("div",{staticClass:"type-content"},[t._l(t.typeOptions,function(e,s){return a("div",{key:s,staticClass:"type-content-item",class:{selected:t.selectType.value==e.value&&!t.showCustomContent},on:{click:function(a){t.typeSelectClick(e)}}},[a("div",{staticClass:"mark"}),t._v(t._s(e.label)+"\n      ")])}),t._v(" "),a("div",{staticClass:"type-content-item",class:{selected:t.showCustomContent},on:{click:function(e){t.showCustomContent=!0}}},[a("div",{staticClass:"mark"}),t._v("自定义\n      ")])],2),t._v(" "),t.showCustomContent?a("div",{staticClass:"type-content-custom"},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),t._v(" "),a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}}),t._v(" "),a("el-button",{on:{click:t.customSureClick}},[t._v("确定")])],1):t._e()]),t._v(" "),a("el-input",{staticClass:"type-select",attrs:{slot:"reference",placeholder:"请选择选择",readonly:!0},slot:"reference",model:{value:t.typeShowValue,callback:function(e){t.typeShowValue=e},expression:"typeShowValue"}},[a("i",{class:["el-input__icon","el-icon-"+t.iconClass],attrs:{slot:"suffix"},slot:"suffix"})])],1)},[],!1,null,"77676b5a",null);o.options.__file="index.vue";e.a=o.exports}}]);