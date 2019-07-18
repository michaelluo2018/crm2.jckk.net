(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fdd2"],{"6XJn":function(t,e,i){},GqqC:function(t,e,i){},HOpM:function(t,e,i){"use strict";var a=i("GqqC");i.n(a).a},Hhli:function(t,e,i){"use strict";var a=i("EP+0"),s=i("MT78"),r=i.n(s),n=i("UxrY"),o=i.n(n),l={name:"statistical-overview",components:{CreateSections:a.a,RadialProgressBar:o.a},computed:{showList:function(){return this.list&&this.list.length>3?this.list.slice(0,3):this.list||[]}},data:function(){return{barOption:null,barChart:null}},watch:{data:function(){this.changeBarData()}},props:{data:{type:Object,default:function(){return{allNum:0,archiveNum:0,completionRate:0,delayRate:0,doneNum:0,overtimeNum:0,undoneNum:0}}},list:Array},mounted:function(){this.initBar(),this.changeBarData()},methods:{changeBarData:function(){this.barOption.series[0].data=[this.data.allNum||0,this.data.undoneNum||0,this.data.doneNum||0,this.data.overtimeNum||0,this.data.archiveNum||0],this.barChart.setOption(this.barOption,!0)},initBar:function(){this.barChart=r.a.init(document.getElementById("barmain")),this.barOption={tooltip:{show:!1},legend:{show:!1},grid:{top:"15px",left:0,right:0,bottom:"10px",containLabel:!0},xAxis:{type:"category",data:["总任务","未完成","已完成","已逾期","已归档"],axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#666"},axisLine:{lineStyle:{color:"#ECECEC"}},splitLine:{show:!1}},yAxis:{show:!1},series:[{name:"成交客户数",type:"bar",barWidth:10,label:{show:!0,position:"top",color:"#333"},itemStyle:{barBorderRadius:[7.5,7.5,0,0]},color:function(t){return["#0067E5","#0067E5","#0067E5","#FF5D60","#19DBC1"][t.dataIndex]},data:[]}]}}}},c=(i("HOpM"),i("KHd+")),d=Object(c.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("create-sections",{attrs:{title:"任务总览"}},[i("flexbox",{staticClass:"content"},[i("div",{staticClass:"content-progress"},[i("radial-progress-bar",{staticClass:"progress",attrs:{diameter:120,"completed-steps":t.data.completionRate||0,"total-steps":100,strokeWidth:7,"inner-stroke-color":"#E7F2FA","start-color":"#0067E5","stop-color":"#0067E5"}},[i("p",{staticClass:"progress-title"},[t._v("完成率")]),t._v(" "),i("p",{staticClass:"progress-value"},[t._v(t._s(t.data.completionRate||0)),i("span",[t._v("%")])])]),t._v(" "),i("radial-progress-bar",{staticClass:"progress",attrs:{diameter:120,"completed-steps":t.data.delayRate||0,"total-steps":100,strokeWidth:7,"inner-stroke-color":"#E8F2FA","start-color":"#FF5D60","stop-color":"#FF5D60"}},[i("p",{staticClass:"progress-title"},[t._v("逾期率")]),t._v(" "),i("p",{staticClass:"progress-value"},[t._v(t._s(t.data.delayRate||0)),i("span",[t._v("%")])])])],1),t._v(" "),i("div",{staticClass:"content-bar"},[i("div",{attrs:{id:"barmain"}})]),t._v(" "),t.list&&t.list.length>0?i("div",{staticClass:"content-user"},[i("div",{staticClass:"content-user-items"},[t._l(t.showList,function(e,a){return i("div",{key:a,staticClass:"main-user"},[i("div",{directives:[{name:"photo",rawName:"v-photo",value:e,expression:"item"},{name:"lazy",rawName:"v-lazy:background-image",value:t.$options.filters.filterUserLazyImg(e.thumb_img),expression:"$options.filters.filterUserLazyImg(item.thumb_img)",arg:"background-image"}],key:e.thumb_img,staticClass:"div-photo main-user-head"}),t._v(" "),i("div",{staticClass:"main-user-name"},[t._v(t._s(e.realname))])])}),t._v(" "),t.list.length>3?i("el-tooltip",{attrs:{placement:"top",effect:"light","popper-class":"tooltip-change-border task-tooltip"}},[i("div",{staticClass:"tooltip-content",staticStyle:{margin:"10px 10px 10px 0"},attrs:{slot:"content"},slot:"content"},t._l(t.list,function(e,a){return i("div",{key:a,staticClass:"item-label",staticStyle:{display:"inline-block","margin-right":"10px"}},[a>2?i("span",{staticClass:"k-name"},[t._v(t._s(e.realname))]):t._e()])})),t._v(" "),i("span",{staticClass:"main-user-more"},[i("i",[t._v("...")])])]):t._e()],2),t._v(" "),i("div",{staticClass:"content-user-title"},[t._v("项目负责人")])]):t._e()]),t._v(" "),t._t("default")],2)},[],!1,null,"ae1b02ae",null);d.options.__file="statisticalOverview.vue";e.a=d.exports},ME4h:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var a=i("t3Un");function s(t){return Object(a.a)({url:"work/work/statistic",method:"post",data:t})}},UrT4:function(t,e,i){"use strict";var a=i("EP+0"),s=i("MT78"),r=i.n(s),n={name:"statistical-task",components:{CreateSections:a.a},computed:{},data:function(){return{barOption:null,barChart:null,id:Math.ceil(100*Math.random())}},watch:{list:function(){this.changeBarData()}},props:{title:{type:String,default:""},type:String,list:{type:Array,default:function(){return[]}}},mounted:function(){this.initBar(),this.changeBarData()},methods:{changeBarData:function(){for(var t=[],e=[],i=[],a=0;a<this.list.length;a++){var s=this.list[a];"task"==this.type?(t.push(s.name),e.push(s.undoneTask),i.push(s.doneTask)):"label"==this.type&&(t.push(s.lablename),e.push(s.undoneTask),i.push(s.doneTask))}this.barOption.xAxis[0].data=t,this.barOption.series[0].data=i,this.barOption.series[1].data=e,this.barChart.setOption(this.barOption,!0)},initBar:function(){this.barChart=r.a.init(document.getElementById("barmain"+this.id)),this.barOption={color:["#6ca2ff","#ff7474"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["已完成","未完成"],bottom:"0px",itemWidth:14},grid:{top:"20px",left:"20px",right:"20px",bottom:"30px",containLabel:!0},xAxis:[{type:"category",data:[],axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#666"},axisLine:{lineStyle:{color:"#ECECEC"}},splitLine:{show:!1}}],yAxis:{splitNumber:3,axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:"#ECECEC"}},axisLabel:{textStyle:{color:"#666"}}},series:[{name:"已完成",type:"bar",stack:"one",barWidth:"15%",data:[]},{name:"未完成",type:"bar",stack:"one",barWidth:"15%",data:[]}]}}}},o=(i("xgRV"),i("KHd+")),l=Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("create-sections",{attrs:{title:this.title}},[e("div",{staticClass:"barmain",attrs:{id:"barmain"+this.id}})])},[],!1,null,"76a65db4",null);l.options.__file="statisticalTask.vue";e.a=l.exports},UxrY:function(t,e,i){t.exports=i("u1YS")},cKmN:function(t,e,i){"use strict";i.r(e);var a=i("F/D6"),s=i("ME4h"),r=i("Hhli"),n=i("UrT4"),o=i("lT1d"),l={components:{StatisticalOverview:r.a,StatisticalTask:n.a,StatisticalMember:o.a},data:function(){return{loading:!1,detailData:{},projectList:[{work_id:"all",name:"全部"}],workId:"all"}},created:function(){this.getProjectList(),this.getDetail()},methods:{getDetail:function(){var t=this;this.loading=!0,Object(s.a)({work_id:this.workId}).then(function(e){t.detailData=e.data,t.loading=!1}).catch(function(e){t.loading=!1})},getProjectList:function(){var t=this;Object(a.a)().then(function(e){t.projectList=[{work_id:"all",name:"全部"}].concat(e.data)}).catch(function(){})}}},c=(i("eLvB"),i("KHd+")),d=Object(c.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project"},[i("div",{staticClass:"project-header"},[t._v("\n    统计分析\n  ")]),t._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"project-body"},[i("statistical-overview",{staticClass:"statistical-overview",attrs:{data:t.detailData.dataCount,list:t.detailData.ownerList}},[i("el-select",{staticClass:"project-body-select",attrs:{placeholder:"请选择"},on:{change:t.getDetail},model:{value:t.workId,callback:function(e){t.workId=e},expression:"workId"}},t._l(t.projectList,function(t){return i("el-option",{key:t.workId,attrs:{label:t.name,value:t.work_id}})}))],1),t._v(" "),"all"!=t.workId?i("flexbox",{staticClass:"statistical-task"},[i("statistical-task",{staticClass:"statistical-task-item",attrs:{type:"task",list:t.detailData.classList,title:"任务列表"}}),t._v(" "),i("statistical-task",{staticClass:"statistical-task-item",attrs:{type:"label",list:t.detailData.labelList,title:"标签分析"}})],1):t._e(),t._v(" "),i("statistical-member",{staticClass:"statistical-member",attrs:{list:t.detailData.userList}})],1)])},[],!1,null,"8aa7f8b0",null);d.options.__file="index.vue";e.default=d.exports},eLvB:function(t,e,i){"use strict";var a=i("qfJc");i.n(a).a},hb9p:function(t,e,i){"use strict";var a=i("6XJn");i.n(a).a},lT1d:function(t,e,i){"use strict";var a={name:"statistical-member",components:{CreateSections:i("EP+0").a},computed:{},data:function(){return{fieldList:[{prop:"name",label:"姓名"},{prop:"allCount",label:"任务总数"},{prop:"doneCount",label:"已完成数"},{prop:"undoneCount",label:"未完成数"},{prop:"overtimeCount",label:"逾期数"},{prop:"completionRate",label:"完成率"}]}},props:{list:Array},mounted:function(){},methods:{fieldFormatter:function(t,e){return"name"==e.property?t.userInfo.realname:t[e.property]||"--"},cellStyle:function(t){var e=t.row,i=t.column;t.rowIndex,t.columnIndex;return"overtimeCount"===i.property&&e.overtimeCount?{color:"#FF5D60"}:"completionRate"===i.property&&e.completionRate?{color:"#19DBC1"}:{}}}},s=(i("mdkt"),i("KHd+")),r=Object(s.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("create-sections",{attrs:{title:"成员完成情况"}},[i("el-table",{staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.list,height:"500",stripe:"",border:"","highlight-current-row":"","cell-style":t.cellStyle}},t._l(t.fieldList,function(e,a){return i("el-table-column",{key:a,attrs:{"show-overflow-tooltip":"",prop:e.prop,label:e.label,formatter:t.fieldFormatter}})}))],1)},[],!1,null,"357cd70c",null);r.options.__file="statisticalMember.vue";e.a=r.exports},mdkt:function(t,e,i){"use strict";var a=i("oNtP");i.n(a).a},oNtP:function(t,e,i){},qfJc:function(t,e,i){},u1YS:function(t,e,i){"use strict";i.r(e);var a={props:{diameter:{type:Number,required:!1,default:200},totalSteps:{type:Number,required:!0,default:10},completedSteps:{type:Number,required:!0,default:0},startColor:{type:String,required:!1,default:"#bbff42"},stopColor:{type:String,required:!1,default:"#429321"},strokeWidth:{type:Number,required:!1,default:10},animateSpeed:{type:Number,required:!1,default:1e3},innerStrokeColor:{type:String,required:!1,default:"#323232"},fps:{type:Number,required:!1,default:60},timingFunc:{type:String,required:!1,default:"linear"}},data:()=>({gradient:{fx:.99,fy:.5,cx:.5,cy:.5,r:.65},gradientAnimation:null,currentAngle:0,strokeDashoffset:0}),computed:{radius(){return this.diameter/2},circumference(){return Math.PI*this.innerCircleDiameter},stepSize(){return 0===this.totalSteps?0:100/this.totalSteps},finishedPercentage(){return this.stepSize*this.completedSteps},circleSlice(){return 2*Math.PI/this.totalSteps},animateSlice(){return this.circleSlice/this.totalPoints},innerCircleDiameter(){return this.diameter-2*this.strokeWidth},innerCircleRadius(){return this.innerCircleDiameter/2},totalPoints(){return this.animateSpeed/this.animationIncrements},animationIncrements(){return 1e3/this.fps},hasGradient(){return this.startColor!==this.stopColor},containerStyle(){return{height:`${this.diameter}px`,width:`${this.diameter}px`}},progressStyle(){return{height:`${this.diameter}px`,width:`${this.diameter}px`,strokeWidth:`${this.strokeWidth}px`,strokeDashoffset:this.strokeDashoffset,transition:`stroke-dashoffset ${this.animateSpeed}ms ${this.timingFunc}`}},strokeStyle(){return{height:`${this.diameter}px`,width:`${this.diameter}px`,strokeWidth:`${this.strokeWidth}px`}},innerCircleStyle(){return{width:`${this.innerCircleDiameter}px`}}},methods:{getStopPointsOfCircle(t){const e=[];for(let i=0;i<t;i++){const t=this.circleSlice*i;e.push(this.getPointOfCircle(t))}return e},getPointOfCircle:t=>({x:.5+.5*Math.cos(t),y:.5+.5*Math.sin(t)}),gotoPoint(){const t=this.getPointOfCircle(this.currentAngle);this.gradient.fx=t.x,this.gradient.fy=t.y},changeProgress({isAnimate:t=!0}){if(this.strokeDashoffset=(100-this.finishedPercentage)/100*this.circumference,this.gradientAnimation&&clearInterval(this.gradientAnimation),!t)return void this.gotoNextStep();const e=(this.completedSteps-1)*this.circleSlice;let i=(this.currentAngle-e)/this.animateSlice;const a=Math.abs(i-this.totalPoints)/this.totalPoints,s=i<this.totalPoints;this.gradientAnimation=setInterval(()=>{s&&i>=this.totalPoints||!s&&i<this.totalPoints?clearInterval(this.gradientAnimation):(this.currentAngle=e+this.animateSlice*i,this.gotoPoint(),i+=s?a:-a)},this.animationIncrements)},gotoNextStep(){this.currentAngle=this.completedSteps*this.circleSlice,this.gotoPoint()}},watch:{totalSteps(){this.changeProgress({isAnimate:!0})},completedSteps(){this.changeProgress({isAnimate:!0})},diameter(){this.changeProgress({isAnimate:!0})},strokeWidth(){this.changeProgress({isAnimate:!0})}},created(){this.changeProgress({isAnimate:!1})}},s=(i("hb9p"),i("KHd+")),r=Object(s.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"radial-progress-container",style:t.containerStyle},[i("div",{staticClass:"radial-progress-inner",style:t.innerCircleStyle},[t._t("default")],2),t._v(" "),i("svg",{staticClass:"radial-progress-bar",attrs:{width:t.diameter,height:t.diameter,version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[i("defs",[i("radialGradient",{attrs:{id:"radial-gradient"+t._uid,fx:t.gradient.fx,fy:t.gradient.fy,cx:t.gradient.cx,cy:t.gradient.cy,r:t.gradient.r}},[i("stop",{attrs:{offset:"30%","stop-color":t.startColor}}),t._v(" "),i("stop",{attrs:{offset:"100%","stop-color":t.stopColor}})],1)],1),t._v(" "),i("circle",{style:t.strokeStyle,attrs:{r:t.innerCircleRadius,cx:t.radius,cy:t.radius,fill:"transparent",stroke:t.innerStrokeColor,"stroke-dasharray":t.circumference,"stroke-dashoffset":"0","stroke-linecap":"round"}}),t._v(" "),i("circle",{style:t.progressStyle,attrs:{transform:"rotate(270, "+t.radius+","+t.radius+")",r:t.innerCircleRadius,cx:t.radius,cy:t.radius,fill:"transparent",stroke:"url(#radial-gradient"+t._uid+")","stroke-dasharray":t.circumference,"stroke-dashoffset":t.circumference,"stroke-linecap":"round"}})])])},[],!1,null,null,null);r.options.__file="RadialProgressBar.vue";e.default=r.exports},xgRV:function(t,e,i){"use strict";var a=i("xk4a");i.n(a).a},xk4a:function(t,e,i){}}]);