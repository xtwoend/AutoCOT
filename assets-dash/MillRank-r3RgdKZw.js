import{o as i,c as n,b as l,r as c}from"./vendor-_TY6xysw.js";import{_ as p}from"./_plugin-vue_export-helper-x3n3nnut.js";const h={props:{url:String,date:String},data(){return{params:{},options:{chart:{type:"bar",height:500,backgroundColor:"rgba(0,0,0,0)"},title:{text:"SCORE RANK <br> TODAY",style:{color:"#fff",fontSize:16}},legend:{enabled:!1},xAxis:{type:"category"},plotOptions:{series:{pointWidth:20}},yAxis:{allowDecimals:!1,min:0,max:100,opposite:!1,tickInterval:10,minTickInterval:10,title:{text:null}},series:[{name:"RANK",color:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#385492"],[1,"#97B8DE"]]},data:[]}]}}},mounted(){this.getScore()},methods:{async getScore(){this.params.date=this.date;let e=await this.$http.get(this.url,{params:this.params}).then(t=>t.data.data),s=[];e.forEach(t=>{s.push([t.mill,t.score])}),this.options.series[0].data=s.sort((t,o)=>o[1]-t[1])}},watch:{date:{handler(e,s){e!==s&&(this.getScore(),this.options.title.text=`SCORE RANK <br> ${e}`)},deep:!0}}},d={class:"p-1"};function m(e,s,t,o,a,f){const r=c("highcharts");return i(),n("div",d,[l(r,{options:a.options},null,8,["options"])])}const _=p(h,[["render",m]]);export{_ as default};
