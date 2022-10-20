import{a as y,v as b,b as e,c as m,m as u,D as f,s as w,h as x,d as V,H as D}from"./vendor.995a312e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();window.axios=y;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const h=(s,o)=>{const a=s.__vccOpts||s;for(const[i,t]of o)a[i]=t;return a},k={props:{options:Array,default:{type:Array,default:()=>[]}},data(){return{show:!1,selected:this.default}},methods:{showDropdown(){this.show=!this.show},hide(){this.show=!1}},watch:{selected(s){this.$emit("checked",s)}},directives:{clickOutside:b.directive}},E={class:"dd"},N={id:"list1",class:"dropdown-check-list",tabindex:"100"},S={key:0,class:"items"},C=["id","value"],L=["for"];function A(s,o,a,i,t,n){const l=e.resolveDirective("click-outside");return e.withDirectives((e.openBlock(),e.createElementBlock("div",E,[e.createElementVNode("div",N,[e.createElementVNode("span",{class:"anchor form-control",onClick:o[0]||(o[0]=(...c)=>n.showDropdown&&n.showDropdown(...c))},"Select Parameter"),t.show?(e.openBlock(),e.createElementBlock("ul",S,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.options,(c,r)=>(e.openBlock(),e.createElementBlock("li",{key:r},[e.withDirectives(e.createElementVNode("input",{type:"checkbox",id:r,value:c,"onUpdate:modelValue":o[1]||(o[1]=d=>t.selected=d)},null,8,C),[[e.vModelCheckbox,t.selected]]),e.createElementVNode("label",{for:r},e.toDisplayString(c.text),9,L)]))),128))])):e.createCommentVNode("",!0)])])),[[l,n.hide]])}const _=h(k,[["render",A]]);const v=["#2f7ed8","#0d233a","#8bbc21","#910000","#1aadce","#492970","#f28f43","#77a1e5","#c42525","#a6c96a","#7cb5ec","#434348","#90ed7d","#f7a35c","#8085e9","#f15c80","#e4d354","#2b908f","#f45b5b","#91e8e1"];const q={props:{url:String,title:String,defaultData:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]}},components:{Datepicker:m,Dropdown:_},data(){return{items:this.defaultData,params:{from:new Date,to:new Date,interval:3600,limit:1e3,select:[]},data:[],realtime:{},fetchReady:!1,colors:v,options:{chart:{type:"line",zoomType:"x",height:600},time:{useUTC:!0},title:{text:this.title,style:{fontSize:"24px",fontWeight:"bold"}},xAxis:{type:"datetime",title:{text:""}},yAxis:[],tooltip:{crosshairs:!0,shared:!0},legend:{enabled:!0},series:[]}}},mounted(){this.fetchData()},methods:{interval(s){this.params.interval=s,this.fetchData()},selected(s){this.items=s,this.fetchData()},async fetchData(){this.$refs.chart.chart.showLoading();let s=[],o=[],a=[];this.items.forEach((i,t)=>{let n=this.colors[t];o.push({title:{text:i.text,style:{color:n}},lineColor:n,labels:{style:{color:n},align:"left",x:14},lineWidth:1,opposite:!0}),s.push({id:i.data,yAxis:t,type:i.type?i.type:"spline",name:i.text,color:n,lineWidth:1,data:[]}),a.push(i.data)}),this.options.series=s,this.options.yAxis=o,this.params.select=a,await axios.get(this.url,{params:this.params}).then(i=>{i.data.data.forEach(n=>{let l=n.unix_time;for(const c in n){let r=this.options.series.findIndex(d=>d.id===c);r>=0&&this.options.series[r].data.push([l,n[c]])}})}),this.$refs.chart.chart.hideLoading()}}},$={class:"report"},P={class:"table-wrapper"},B={class:"toolbox"},T={class:"date-selected"},I=e.createStaticVNode('<option value="10">10s</option><option value="60">1m</option><option value="900">15m</option><option value="1800">30m</option><option value="3600">1h</option><option value="7200">2h</option><option value="10800">3h</option><option value="18000">5h</option><option value="36000">10h</option><option value="86400">24h</option>',10),O=[I],U={class:"chart"};function z(s,o,a,i,t,n){const l=e.resolveComponent("dropdown"),c=e.resolveComponent("datepicker"),r=e.resolveComponent("highcharts");return e.openBlock(),e.createElementBlock("div",$,[e.createElementVNode("div",P,[e.createElementVNode("div",B,[e.createVNode(l,{options:a.columns,onChecked:n.selected,default:a.defaultData},null,8,["options","onChecked","default"]),e.createElementVNode("div",T,[e.createVNode(c,{class:"mr-2",type:"datetime",modelValue:t.params.from,"onUpdate:modelValue":o[0]||(o[0]=d=>t.params.from=d),name:"from",textInput:"",autoApply:"",closeOnAutoApply:!1,placeholder:"from"},null,8,["modelValue"]),e.createVNode(c,{class:"mr-2",type:"datetime",modelValue:t.params.to,"onUpdate:modelValue":o[1]||(o[1]=d=>t.params.to=d),name:"to",textInput:"",autoApply:"",closeOnAutoApply:!1,placeholder:"to"},null,8,["modelValue"]),e.withDirectives(e.createElementVNode("select",{"onUpdate:modelValue":o[2]||(o[2]=d=>t.params.interval=d),class:"form-control wd-80 mr-2"},O,512),[[e.vModelSelect,t.params.interval]]),e.createElementVNode("button",{class:"btn btn-primary",onClick:o[3]||(o[3]=(...d)=>n.fetchData&&n.fetchData(...d))},"Show")])]),e.createElementVNode("div",U,[e.createVNode(r,{ref:"chart",class:"hc","constructor-type":"stockChart",options:t.options},null,8,["options"])])])])}const M=h(q,[["render",z]]),W={props:{url:String,title:String,mqtt:{type:Object,default(s){return{url:null,username:null,password:null,topic:null,timefield:"_terminalTime"}}},defaultData:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]}},components:{Dropdown:_},data(){return{items:this.defaultData,mqttConnection:null,colors:v,params:{last:30},options:{chart:{type:"line",zoomType:"x",height:600},time:{useUTC:!1},title:{text:this.title,style:{fontSize:"24px",fontWeight:"bold"}},xAxis:{type:"datetime",title:{text:""}},yAxis:[],tooltip:{crosshairs:!0,shared:!0},legend:{enabled:!0},series:[]}}},created(){this.mqttConnection=u.exports.connect(this.mqtt.url,{username:this.mqtt.username,password:this.mqtt.password})},mounted(){this.fetchData(),this.listen()},methods:{listen(){if(this.mqttConnection){let s=this;this.mqttConnection.on("connect",function(){s.mqttConnection.subscribe(s.mqtt.topic,function(o){o||console.log("connected")})}),this.mqttConnection.on("message",this.received)}},received(s,o){let a=JSON.parse(o.toString()),i=Date.parse(a[this.mqtt.timefield]);for(const t in a){let n=this.options.series.findIndex(l=>l.id===t);n>=0&&(this.options.series[n].data.shift(),this.options.series[n].data.push([i,parseInt(a[t])]))}},selected(s){this.items=s,this.fetchData()},async fetchData(){this.$refs.chart.chart.showLoading();let s=[],o=[];this.mqttI&&this.mqttI.end(),this.items.forEach((a,i)=>{let t=this.colors[i];o.push({title:{text:a.text,style:{color:t}},lineColor:t,labels:{style:{color:t},align:"left",x:14},lineWidth:1,opposite:!0}),s.push({id:a.data,yAxis:i,type:a.type?a.type:"spline",name:a.text,color:t,lineWidth:1,data:[]})}),this.options.series=s,this.options.yAxis=o,await axios.get(this.url,{params:this.params}).then(a=>{a.data.data.forEach(t=>{let n=Date.parse(t.terminal_time),l=JSON.parse(t.data);for(const c in l){let r=this.options.series.findIndex(d=>d.id===c);r>=0&&this.options.series[r].data.push([n,parseInt(l[c])])}})}),this.$refs.chart.chart.hideLoading()}}},R={class:"report"},j={class:"table-wrapper"},H={class:"toolbox"},F={class:"chart"};function J(s,o,a,i,t,n){const l=e.resolveComponent("dropdown"),c=e.resolveComponent("highcharts");return e.openBlock(),e.createElementBlock("div",R,[e.createElementVNode("div",j,[e.createElementVNode("div",H,[e.createVNode(l,{options:a.columns,onChecked:n.selected,default:a.defaultData},null,8,["options","onChecked","default"])]),e.createElementVNode("div",F,[e.createVNode(c,{ref:"chart","constructor-type":"stockChart",class:"hc",options:t.options},null,8,["options"])])])])}const X=h(W,[["render",J]]);const K={props:{url:String,export:String,headers:Array,title:String},components:{Vue3EasyDataTable:f,Datepicker:m},data(){return{options:{page:1,rowsPerPage:25},params:{from:{month:new Date().getMonth().toString(),year:new Date().getFullYear().toString()},interval:60},dataLength:0,isLoading:!1,items:[]}},mounted(){this.fetchData()},watch:{options:{handler(s){this.fetchData()},deep:!0}},methods:{async fetchData(){let s=Object.assign(this.params,this.options);this.isLoading=!0,this.items=[];let o=await axios.get(this.url,{params:s}).then(a=>a.data);this.items=o.data,this.dataLength=o.meta.total,this.options.page=o.meta.current_page,this.options.rowsPerPage=o.meta.per_page,this.isLoading=!1},download(){let s=this.export.split("?");const o=new URLSearchParams(s[1]);o.append("interval",this.params.interval),o.append("month",parseInt(this.params.from.month)+1),o.append("year",parseInt(this.params.from.year)),window.open(s[0]+"?"+o.toString(),"_blank")}}},Q={class:"report"},Y={class:"table-wrapper"},G={class:"toolbox"},Z={class:"title"},ee={class:"date-selected"},te=e.createStaticVNode('<option value="10">10s</option><option value="60">1m</option><option value="900">15m</option><option value="1800">30m</option><option value="3600">1h</option><option value="7200">2h</option><option value="10800">3h</option><option value="18000">5h</option><option value="36000">10h</option><option value="86400">24h</option>',10),oe=[te],se={class:"table-content"};function ne(s,o,a,i,t,n){const l=e.resolveComponent("datepicker"),c=e.resolveComponent("Vue3EasyDataTable");return e.openBlock(),e.createElementBlock("div",Q,[e.createElementVNode("div",Y,[e.createElementVNode("div",G,[e.createElementVNode("h2",Z,e.toDisplayString(a.title),1),e.createElementVNode("div",ee,[e.createVNode(l,{class:"mr-2",monthPicker:"",modelValue:t.params.from,"onUpdate:modelValue":o[0]||(o[0]=r=>t.params.from=r),name:"from",textInput:"",autoApply:"",closeOnAutoApply:!1,placeholder:"from"},null,8,["modelValue"]),e.withDirectives(e.createElementVNode("select",{"onUpdate:modelValue":o[1]||(o[1]=r=>t.params.interval=r),class:"form-control wd-80 mr-2"},oe,512),[[e.vModelSelect,t.params.interval]]),e.createElementVNode("button",{class:"btn btn-primary mr-2",onClick:o[2]||(o[2]=(...r)=>n.fetchData&&n.fetchData(...r))},"Show"),e.createElementVNode("button",{class:"btn btn-success",onClick:o[3]||(o[3]=(...r)=>n.download&&n.download(...r))},"Download")])]),e.createElementVNode("div",se,[e.createVNode(c,{"show-index":"","buttons-pagination":"","table-class-name":"customize-table","server-options":t.options,"onUpdate:server-options":o[4]||(o[4]=r=>t.options=r),"server-items-length":t.dataLength,loading:t.isLoading,headers:a.headers,items:t.items,ref:"vtable"},e.createSlots({_:2},[e.renderList(s.$slots,(r,d)=>({name:d,fn:e.withCtx(g=>[e.renderSlot(s.$slots,d,e.normalizeProps(e.guardReactiveProps(g||{})))])}))]),1032,["server-options","server-items-length","loading","headers","items"])])])])}const ae=h(K,[["render",ne]]);const ie={props:{url:String,headers:Array,title:String},components:{Vue3EasyDataTable:f},data(){return{options:{page:1,rowsPerPage:25},dataLength:0,isLoading:!1,items:[]}},mounted(){this.fetchData()},watch:{options:{handler(s){this.fetchData()},deep:!0}},methods:{async fetchData(){this.isLoading=!0,this.items=[];let s=await axios.get(this.url,{params:this.options}).then(o=>o.data);this.items=s.data,this.dataLength=s.meta.total,this.options.page=s.meta.current_page,this.options.rowsPerPage=s.meta.per_page,this.isLoading=!1}}},re={class:"report"},le={class:"table-wrapper"},ce={class:"toolbox"},de={class:"title"},pe=e.createElementVNode("div",{class:"date-selected"},null,-1),he={class:"table-content"};function me(s,o,a,i,t,n){const l=e.resolveComponent("Vue3EasyDataTable");return e.openBlock(),e.createElementBlock("div",re,[e.createElementVNode("div",le,[e.createElementVNode("div",ce,[e.createElementVNode("h2",de,e.toDisplayString(a.title),1),pe]),e.createElementVNode("div",he,[e.createVNode(l,{"show-index":"","buttons-pagination":"","table-class-name":"customize-table","server-options":t.options,"onUpdate:server-options":o[0]||(o[0]=c=>t.options=c),"server-items-length":t.dataLength,loading:t.isLoading,headers:a.headers,items:t.items,ref:"vtable"},e.createSlots({_:2},[e.renderList(s.$slots,(c,r)=>({name:r,fn:e.withCtx(d=>[e.renderSlot(s.$slots,r,e.normalizeProps(e.guardReactiveProps(d||{})))])}))]),1032,["server-options","server-items-length","loading","headers","items"])])])])}const ue=h(ie,[["render",me]]),fe={props:{topic:String},data(){return{message:null,options:{}}},created(){this.listen()},methods:{listen(){let s=u.exports.connect("ws://192.168.170.87:9001",this.options),o=this;s.on("connect",function(){s.subscribe(o.topic,function(a){a||(console.log("connected"),s.publish(o.topic,"Hello mqtt"))})}),s.on("message",function(a,i){console.log("topic",a),console.log(i.toString()),o.message=i})}}};function _e(s,o,a,i,t,n){return e.openBlock(),e.createElementBlock("div",null,e.toDisplayString(t.message),1)}const ve=h(fe,[["render",_e]]);w(x);const p=V({mounted(){},data(){return{active:null}}});p.use(D);p.component("trend-view",M);p.component("trend-live",X);p.component("log-table",ae);p.component("v-table",ue);p.component("v-mqtt",ve);p.mount("#app");
