import{g as s,r as n,o,c as p,d as h,x as c}from"./vendor--BJOIQwQ.js";import{_ as d}from"./_plugin-vue_export-helper-x3n3nnut.js";const m={props:{url:String,params:Object,title:String},data(){return{trends:[],isShow:!0,lineChart:{chart:{type:"area"},title:{text:this.title},xAxis:{type:"datetime",title:{},labels:{formatter:function(){return s.dateFormat("%d",+this.value)}},tickInterval:24*3600*1e3},yAxis:{title:{text:"Percentage %"}},responsive:{},series:[{name:"cpo",type:"area",data:[],pointStart:null,pointInterval:24*3600*1e3,fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,s.getOptions().colors[0]],[1,s.color(s.getOptions().colors[0]).setOpacity(0).get("rgba")]]},dataLabels:{enabled:!0,format:"{y} %"}},{name:"std",type:"line",data:[],pointStart:null,pointInterval:24*3600*1e3}]}}},mounted(){this.load()},methods:{async load(){let e=await this.$http.get(this.url,{params:this.params}).then(a=>a.data),t=this;e.meta.parameter,t.lineChart.series[0].data=[],t.lineChart.series[1].data=[],t.lineChart.series[0].pointStart=Date.parse(e.meta.start_date),t.lineChart.series[0].pointStart=Date.parse(e.meta.start_date),t.lineChart.series[0].name=e.meta.parameter,e.data.forEach(a=>{let r=(a.result?parseFloat(a.result):0).toFixed(2);t.lineChart.series[0].data.push([Date.parse(a.tgl),parseFloat(r)]),t.lineChart.series[1].data.push([Date.parse(a.tgl),e.meta.threshold])})}},watch:{params:{deep:!0,handler(e,t){this.load()}}}},u={class:"mt-3"};function _(e,t,a,i,r,g){const l=n("highcharts");return o(),p("div",u,[r.isShow?(o(),h(l,{key:0,options:r.lineChart},null,8,["options"])):c("",!0)])}const C=d(m,[["render",_]]);export{C as default};
