import{r as y,o as a,c as o,a as t,b as p,v as d,x as h,F as c,E as m,n as v,A as x,B as S}from"./vendor-k6VCZUst.js";import{_ as k}from"./_plugin-vue_export-helper-x3n3nnut.js";const V={data(){return{mills:[],parameter:{label:"Oil/WM",value:"owm"},params:{mill_id:999,parameter:"owm",date:new Date().toISOString().slice(0,10),group_id:4},rows:[],max:15,stations:[],parameters:[{label:"Oil/WM",value:"owm"},{label:"VM",value:"vm"},{label:"Oil/DM",value:"odm"},{label:"NOS",value:"nos"}],loading:!1}},mounted(){this.getStations(),this.getMills(),this.reload()},methods:{async getMills(){this.mills=await this.$http.get("/fossnir/mills").then(l=>l.data.data)},async getStations(){this.stations=await this.$http.get("/fossnir/stations").then(l=>l.data.data)},changeDate(l){this.params.date=l.toISOString().slice(0,10),this.$root.date=l.toISOString().slice(0,10),this.reload()},selected(l){this.parameter=l,this.reload()},reload(){this.loadData(),this.getScoreRank(),this.getScore()},async loadData(){if(this.loading=!0,this.params.lenght<2)return;let l=await this.$http.get("/fossnir/data",{params:this.params}).then(n=>n.data);this.rows=l.data,l.meta&&(this.max=l.meta.max),this.loading=!1},getStationName(l){let n=this.stations.findIndex(b=>b.id==l);return this.stations[n]},async getScoreRank(){let l=await this.$http.get("/fossnir/score",{params:this.params}).then(n=>n.data.data);this.$root.scores=l},async getScore(){let l=await this.$http.get("/fossnir/total-score",{params:this.params}).then(n=>n.data.data);this.$root.score=l.score}}},r=l=>(x("data-v-a31adb65"),l=l(),S(),l),D={class:"mt-3"},I={class:"row"},O={class:"col-3"},w={class:"mb-3"},M=r(()=>t("label",{class:"form-label"},"Mill",-1)),N={class:"col-3"},F={class:"mb-3"},T=r(()=>t("label",{class:"form-label"},"OIL IN",-1)),L={class:"col-3"},U={class:"mb-3"},B=r(()=>t("label",{class:"form-label"},"Date",-1)),E={class:"col-3"},P={class:"mb-3"},A=r(()=>t("label",{class:"form-label"},"Parameters",-1)),C={class:"row mb-2"},R={class:"col"},W={class:"info-station"},z={key:0},H={class:"row"},j={class:"col"},q={key:0,class:"table table-sm history"},G=r(()=>t("thead",null,[t("tr",null,[t("th",null,"No"),t("th",null,"MILL"),t("th",null,"STD"),t("th",{class:"c-val"},"07:00"),t("th",{class:"c-val"},"09:00"),t("th",{class:"c-val"},"11:00"),t("th",{class:"c-val"},"13:00"),t("th",{class:"c-val"},"15:00"),t("th",{class:"c-val"},"17:00"),t("th",{class:"c-val"},"19:00"),t("th",{class:"c-val"},"21:00"),t("th",{class:"c-val"},"23:00"),t("th",{class:"c-val"},"01:00"),t("th",{class:"c-val"},"03:00"),t("th",{class:"c-val"},"05:00"),t("th",null,"Sample"),t("th",null,"Today")])],-1)),J={key:0},K={class:"bold"},Q={key:1},X=r(()=>t("tr",null,[t("td",{colspan:"17",style:{height:"400px"}},[t("div",{class:"text-center"},[t("div",{class:"spinner-border",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")])])])],-1)),Y=[X],Z={key:1,class:"table table-sm history"},$=r(()=>t("th",null,"No",-1)),tt=r(()=>t("th",{class:"station"},"STATION",-1)),st=r(()=>t("th",null,"STD",-1)),et=["colspan"],lt=r(()=>t("th",null,"Total Sample",-1)),at={key:0},ot=["colspan"],nt=r(()=>t("div",{class:"text-center"},[t("div",{class:"spinner-border",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")])],-1)),it=[nt],dt={key:1},rt={rowspan:"2"},ct={rowspan:"2",class:"txt-left bold"},ht={rowspan:"2"};function mt(l,n,b,ut,e,u){const g=y("v-select"),f=y("VueDatePicker");return a(),o("div",D,[t("div",I,[t("div",O,[t("div",w,[M,p(g,{label:"mill_name",class:"w-100",modelValue:e.params.mill_id,"onUpdate:modelValue":n[0]||(n[0]=s=>e.params.mill_id=s),reduce:s=>s.id,options:e.mills,"onOption:selected":n[1]||(n[1]=s=>u.reload())},null,8,["modelValue","reduce","options"])])]),t("div",N,[t("div",F,[T,p(g,{label:"name",class:"w-100",modelValue:e.params.group_id,"onUpdate:modelValue":n[2]||(n[2]=s=>e.params.group_id=s),options:e.stations,reduce:s=>s.id,"onOption:selected":n[3]||(n[3]=s=>u.reload())},null,8,["modelValue","options","reduce"])])]),t("div",L,[t("div",U,[B,p(f,{modelValue:e.params.date,"onUpdate:modelValue":[n[4]||(n[4]=s=>e.params.date=s),u.changeDate],"enable-time-picker":!1,"auto-apply":""},null,8,["modelValue","onUpdate:modelValue"])])]),t("div",E,[t("div",P,[A,p(g,{class:"w-100",options:e.parameters,modelValue:e.params.parameter,"onUpdate:modelValue":n[5]||(n[5]=s=>e.params.parameter=s),reduce:s=>s.value,"onOption:selected":u.selected},null,8,["options","modelValue","reduce","onOption:selected"])])])]),t("div",C,[t("div",R,[t("div",W,[e.stations.length>0?(a(),o("span",z,[t("h3",null,d(u.getStationName(e.params.group_id).name),1)])):h("",!0)])])]),t("div",H,[t("div",j,[e.params.mill_id==999?(a(),o("table",q,[G,e.loading?h("",!0):(a(),o("tbody",J,[(a(!0),o(c,null,m(e.rows,(s,_)=>(a(),o("tr",null,[t("td",null,d(_+1),1),t("td",K,d(s.mill),1),t("td",null,d(s.threshold?s.threshold.toFixed(2):"")+" % "+d(e.parameter.label),1),(a(!0),o(c,null,m(s.data,i=>(a(),o("td",{class:v({red:i.result>s.threshold,"t-val":i.result})},d(i.result?i.result.toFixed(2):"")+d(i.result?`/(${i.count_file})`:""),3))),256)),t("td",null,d(s.total_sample),1),t("td",{class:v({red:s.today>s.threshold,"t-val":s.today})},d(s.today?s.today.toFixed(2):""),3)]))),256))])),e.loading?(a(),o("tbody",Q,Y)):h("",!0)])):(a(),o("table",Z,[t("thead",null,[t("tr",null,[$,tt,st,t("th",{colspan:e.max,class:"c-val"},"  TIME SAMPLE",8,et),lt])]),e.loading?(a(),o("tbody",at,[t("tr",null,[t("td",{colspan:e.max+4,style:{height:"400px"}},it,8,ot)])])):h("",!0),e.loading?h("",!0):(a(),o("tbody",dt,[(a(!0),o(c,null,m(e.rows,(s,_)=>(a(),o(c,{key:_},[t("tr",null,[t("td",rt,d(_+1),1),t("td",ct,d(s.product_name),1),t("td",ht,d(s.threshold?s.threshold.toFixed(2):4 .toFixed(2))+"% "+d(e.parameter.label),1),(a(!0),o(c,null,m(s.data,(i,_t)=>(a(),o("td",{class:"c-val t-col",key:i.id},d(("0"+new Date(i.sample_date).getHours()).substr(-2))+":"+d(("0"+new Date(i.sample_date).getMinutes()).substr(-2)),1))),128)),s.data.length>0?(a(!0),o(c,{key:0},m(e.max-s.data.length,i=>(a(),o("td",{class:"c-val t-col",key:i}," "))),128)):h("",!0),t("td",null,d(s.data.length),1)]),t("tr",null,[(a(!0),o(c,null,m(s.data,i=>(a(),o("td",{class:v(["c-val t-val",{red:i[e.params.parameter]>=s.threshold}]),key:i.id},d(i[e.params.parameter].toFixed(2)),3))),128)),s.data.length>0?(a(!0),o(c,{key:0},m(e.max-s.data.length,i=>(a(),o("td",{class:"c-val",key:i}," "))),128)):h("",!0),t("td",{class:v(["c-val t-val",{red:s.avg>=s.threshold}])},d(s.avg.toFixed(2)),3)])],64))),128))]))]))])])])}const gt=k(V,[["render",mt],["__scopeId","data-v-a31adb65"]]);export{gt as default};
