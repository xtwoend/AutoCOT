import{o as i,c as n,b as l,r as c}from"./vendor-k6VCZUst.js";import{_ as p}from"./_plugin-vue_export-helper-x3n3nnut.js";const h={props:{url:String,date:String},data(){return{params:{},options:{chart:{type:"bar",height:535,backgroundColor:"rgba(0,0,0,0)"},title:{text:"SCORE RANK <br> TODAY",style:{color:"#fff",fontSize:16}},legend:{enabled:!1},xAxis:{type:"category"},plotOptions:{series:{pointWidth:20}},tooltip:{enabled:!1},yAxis:{allowDecimals:!1,min:0,max:100,opposite:!1,tickInterval:10,minTickInterval:10,title:{text:null}},series:[{name:"RANK",color:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#385492"],[1,"#97B8DE"]]},dataLabels:{enabled:!0,format:"{y} %"},data:[]}]}}},mounted(){this.getScore()},methods:{async getScore(){this.params.date=this.date;let t=await this.$http.get(this.url,{params:this.params}).then(o=>o.data.data),e=[];t.forEach(o=>{e.push({name:o.mill,y:Math.floor(o.score),color:this.getColor(o.score)})}),this.options.series[0].data=e.sort((o,s)=>s.y-o.y)},getColor(t){let e=["#385391","#4EAD5B","#F5C242","#E93323"];return t>=90?e[0]:t<90&&t>=80?e[1]:t<80&&t>=60?e[2]:e[3]}},watch:{date:{handler(t,e){t!==e&&(this.getScore(),this.options.title.text=`SCORE RANK <br> ${t}`)},deep:!0}}},d={class:"p-1"};function f(t,e,o,s,r,m){const a=c("highcharts");return i(),n("div",d,[l(a,{options:r.options},null,8,["options"])])}const _=p(h,[["render",f]]);export{_ as default};