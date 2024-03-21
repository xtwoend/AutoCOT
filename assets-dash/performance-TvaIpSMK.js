import{r as d,o as n,c as r,a as s,F as m,E as p,n as c,v as _,b as i,A as h,B as b}from"./vendor-k6VCZUst.js";import{_ as u}from"./_plugin-vue_export-helper-x3n3nnut.js";const v={data(){return{mills:[],params:{mill_id:12,type:"today"},scores:null,values:[],fosnir:0}},async mounted(){this.getMills(),this.loadData(),this.fosnirScore(),await setInterval(()=>{this.loadData(),this.fosnirScore()},5e3)},methods:{async loadData(){this.values={3:0,4:0,5:0},this.scores=await this.$http.get("/mill/performance",{params:this.params}).then(t=>t.data.data),this.scores.forEach(t=>{let o=t.scount>0?t.stotal/t.scount:0;this.values[t.device_id]=parseInt(o)})},async getMills(){this.mills=await this.$http.get("/fossnir/mills").then(t=>t.data.data)},async fosnirScore(){this.fosnir=0;let t=await this.$http.get("/fossnir/score-mill",{params:this.params}).then(o=>o.data.data.score);this.fosnir=parseInt(t)}},computed:{},watch:{params:{handler(t,o){this.loadData()},deep:!0}}},y=t=>(h("data-v-10969eb6"),t=t(),b(),t),g={class:"mt-3"},S={class:"row g-0"},f=["onClick","disabled"],E={class:"col-1 d-grid gap-1 p-1"},I={class:"col-1 d-grid gap-1 p-1"},T={class:"col-1 d-grid gap-1 p-1"},R={class:"row g-2",style:{"margin-top":"3rem"}},k={class:"col-2 mb-4"},w={class:"col-2 mb-4"},C={class:"col-2 mb-4"},D={class:"col-2 d-grid gap-2 mb-4"},L={class:"col-2 mb-4"},x={class:"col-2 mb-4"},N={class:"col-2 mb-4"},O={class:"col-2 mb-4"},A={class:"col-2 mb-4"},B={class:"col-2 mb-4"},M={class:"col-2 mb-4"},F=y(()=>s("div",{class:"row",style:{"margin-top":"6rem"}},[s("div",{class:"col"},[s("div",{class:"hot-news"}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae obcaecati quos, et autem doloremque perspiciatis labore deserunt ")])],-1));function P(t,o,K,V,e,Y){const a=d("com-score-card");return n(),r("div",g,[s("div",S,[(n(!0),r(m,null,p(e.mills,l=>(n(),r("div",{class:"col-1 d-grid gap-1 p-1",key:l.id},[s("button",{onClick:q=>e.params.mill_id=l.id,class:c(["btn txt-sm btn-primary btn-block",{active:e.params.mill_id==l.id}]),disabled:l.id!==12},_(l.mill_name),11,f)]))),128)),s("div",E,[s("button",{onClick:o[0]||(o[0]=l=>e.params.type="today"),class:c(["btn txt-sm btn-primary btn-block",{active:e.params.type=="today"}])},"TODAY",2)]),s("div",I,[s("button",{onClick:o[1]||(o[1]=l=>e.params.type="month"),class:c(["btn txt-sm btn-primary btn-block",{active:e.params.type=="month"}])},"MTD",2)]),s("div",T,[s("button",{onClick:o[2]||(o[2]=l=>e.params.type="year"),class:c(["btn txt-sm btn-primary btn-block",{active:e.params.type=="year"}])},"YTD",2)])]),s("div",R,[s("div",k,[i(a,{name:"ST. LOADING RAMP",score:null,disabled:""})]),s("div",w,[i(a,{name:"ST. STERILLIZER",score:null,disabled:""})]),s("div",C,[i(a,{name:"ST. TRESHER",score:null,disabled:""})]),s("div",D,[i(a,{name:"ST. PRESS",score:e.values[4]},null,8,["score"])]),s("div",L,[i(a,{name:"ST. NUT KERNEL",score:e.values[5]},null,8,["score"])]),s("div",x,[i(a,{name:"ST. KLARIFIKASI",score:e.values[3]},null,8,["score"])]),s("div",N,[i(a,{name:"ST. OIL RECOVERY",score:null,disabled:""})]),s("div",O,[i(a,{name:"GENSET",score:null,disabled:""})]),s("div",A,[i(a,{name:"BOILER",score:null,disabled:""})]),s("div",B,[i(a,{name:"WTP",score:null,disabled:""})]),s("div",M,[i(a,{name:"FOSNIR SCORE",score:e.fosnir},null,8,["score"])])]),F])}const H=u(v,[["render",P],["__scopeId","data-v-10969eb6"]]);export{H as default};