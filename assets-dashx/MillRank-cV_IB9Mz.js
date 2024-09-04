import{o as i,c as n,b as l,r as a}from"./vendor-k6VCZUst.js";import{_ as c}from"./_plugin-vue_export-helper-x3n3nnut.js";const h={props:{scores:{type:Array,default:[]},date:String},data(){return{params:{},options:{chart:{type:"bar",backgroundColor:"rgba(0,0,0,0)"},title:{text:"SCORE RANK <br> TODAY",style:{color:"#222831",fontSize:16}},legend:{enabled:!1},xAxis:{type:"category",labels:{style:{color:"#222831",fontSize:"1em",fontWeight:"bold"}}},plotOptions:{series:{pointWidth:35}},tooltip:{enabled:!1},yAxis:{allowDecimals:!1,min:0,max:100,opposite:!1,tickInterval:10,minTickInterval:10,title:{text:null}},series:[{name:"RANK",color:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#385492"],[1,"#97B8DE"]]},dataLabels:{enabled:!0,format:"{y} %",style:{fontWeight:"bold",fontSize:"1.2em"}},data:[]}]}}},mounted(){this.options.chart.height=this.$refs.hxx.clientHeight-10,this.buildScores()},created(){window.addEventListener("resize",this.resize)},destroyed(){window.removeEventListener("resize",this.resize)},methods:{resize(){this.options.chart.height=this.$refs.hxx.clientHeight-10},buildScores(){let t=[];this.scores.forEach(e=>{t.push({name:e.mill,y:Math.floor(e.score),color:this.getColor(e.score)})}),this.options.series[0].data=t.sort((e,o)=>o.y-e.y)},getColor(t){let e=["#385391","#4EAD5B","#F5C242","#E93323"];return t>=100?e[0]:t<100&&t>=90?e[1]:t<90&&t>=80?e[2]:e[3]}},watch:{scores:{handler(t,e){this.buildScores()},deep:!0},date:{handler(t,e){this.options.title.text=`SCORE RANK <br> ${t}`},deep:!0}}},d={class:"p-1 h-100",ref:"hxx"};function p(t,e,o,f,s,m){const r=a("highcharts");return i(),n("div",d,[l(r,{options:s.options},null,8,["options"])],512)}const b=c(h,[["render",p]]);export{b as default};
