import g from"./LossesCard-OKTWpm-R.js";import{r as c,o as l,c as i,a as s,b as r,v,x as m,F as b,E as f,A as S,B as w}from"./vendor-k6VCZUst.js";import{_ as V}from"./_plugin-vue_export-helper-x3n3nnut.js";const y={components:{LossesCard:g},data(){return{loading:!1,parameter:{label:"Oil/WM",value:"owm"},parameters:[{label:"Oil/WM",value:"owm"},{label:"VM",value:"vm"},{label:"Oil/DM",value:"odm"},{label:"NOS",value:"nos"}],params:{parameter:"owm",date:new Date().toISOString().slice(0,10),group_id:4},stations:[],rows:[]}},mounted(){this.getStations(),this.reload()},methods:{changeDate(e){this.params.date=e.toISOString().slice(0,10),this.$root.date=e.toISOString().slice(0,10),this.reload()},selected(e){this.parameter=e,this.reload()},reload(){this.loadData(),this.getScoreRank(),this.getScore()},async getStations(){this.stations=await this.$http.get("/fossnir/stations").then(e=>e.data.data)},async loadData(){this.loading=!0,this.rows=await this.$http.get("/fossnir/daily",{params:this.params}).then(e=>e.data.data),this.loading=!1},getStationName(e){let t=this.stations.findIndex(p=>p.id==e);return this.stations[t]},async getScoreRank(){let e=await this.$http.get("/fossnir/score",{params:this.params}).then(t=>t.data.data);this.$root.scores=e},async getScore(){let e=await this.$http.get("/fossnir/total-score",{params:this.params}).then(t=>t.data.data);this.$root.score=e.score}}},d=e=>(S("data-v-56d2405d"),e=e(),w(),e),k={class:"mt-3"},O={class:"row"},D={class:"col-4"},I={class:"mb-3"},x=d(()=>s("label",{class:"form-label"},"OIL IN",-1)),N={class:"col-4"},B={class:"mb-3"},L=d(()=>s("label",{class:"form-label"},"Date",-1)),M={class:"col-4"},U={class:"mb-3"},C=d(()=>s("label",{class:"form-label"},"Parameters",-1)),P={class:"row"},E={class:"col"},F={class:"info-station"},R={key:0},W={class:"row"},A={key:1,class:"col-12",style:{height:"400px"}},H=d(()=>s("div",{class:"text-center",style:{"margin-top":"200px"}},[s("div",{class:"spinner-border",role:"status"},[s("span",{class:"visually-hidden"},"Loading...")])],-1)),j=[H];function q(e,t,p,z,a,n){const h=c("v-select"),_=c("VueDatePicker"),u=c("losses-card");return l(),i("div",k,[s("div",O,[s("div",D,[s("div",I,[x,r(h,{label:"name",class:"w-100",modelValue:a.params.group_id,"onUpdate:modelValue":t[0]||(t[0]=o=>a.params.group_id=o),options:a.stations,reduce:o=>o.id,"onOption:selected":t[1]||(t[1]=o=>n.reload())},null,8,["modelValue","options","reduce"])])]),s("div",N,[s("div",B,[L,r(_,{modelValue:a.params.date,"onUpdate:modelValue":[t[2]||(t[2]=o=>a.params.date=o),n.changeDate],"enable-time-picker":!1,"auto-apply":""},null,8,["modelValue","onUpdate:modelValue"])])]),s("div",M,[s("div",U,[C,r(h,{class:"w-100",label:"label",options:a.parameters,modelValue:a.params.parameter,"onUpdate:modelValue":t[3]||(t[3]=o=>a.params.parameter=o),reduce:o=>o.value,"onOption:selected":n.selected},null,8,["options","modelValue","reduce","onOption:selected"])])])]),s("div",P,[s("div",E,[s("div",F,[a.stations.length>0?(l(),i("span",R,[s("h3",null,v(n.getStationName(a.params.group_id).name),1)])):m("",!0)])])]),s("div",W,[a.loading?m("",!0):(l(!0),i(b,{key:0},f(a.rows,(o,G)=>(l(),i("div",{class:"col-2",key:o.id},[r(u,{losses:o},null,8,["losses"])]))),128)),a.loading?(l(),i("div",A,j)):m("",!0)])])}const T=V(y,[["render",q],["__scopeId","data-v-56d2405d"]]);export{T as default};