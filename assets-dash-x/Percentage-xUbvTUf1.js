import{o,c as r,b as n,r as h}from"./vendor-k6VCZUst.js";import{_ as a}from"./_plugin-vue_export-helper-x3n3nnut.js";const d={props:{value:Number,height:Number,width:Number,size:{type:Number,default:45}},watch:{value:{handler(e,t){this.options.series[0].data[0].y=parseInt(e),this.options.series[0].data[0].color=this.getColor(e)},deep:!0}},data(){return{options:{title:!1,legend:!1,chart:{type:"solidgauge",width:this.width?this.width:300,height:this.height?this.height:null,backgroundColor:"rgba(0,0,0,0)"},pane:{size:"96%",startAngle:0,background:{backgroundColor:"#DBE3F1",outerRadius:"102%",innerRadius:"60%",borderWidth:0,shape:"arc"}},tooltip:{enabled:!1},credits:{enabled:!1},yAxis:{min:0,max:100,lineWidth:0,minorTickInterval:null,tickPixelInterval:400,tickWidth:0,tickInterval:5,tickWidth:2,tickPosition:"inside",tickLength:33,tickColor:"#fff",title:{enabled:!1},labels:{enabled:!1},zIndex:100},plotOptions:{solidgauge:{dataLabels:{y:this.size>45?-40:-35,borderWidth:0,format:"{y}",style:{fontSize:this.size+"px",fontWeight:"bold",color:"#000000"}}}},series:[{data:[{y:parseInt(this.value),color:this.getColor(this.value)}]}]}}},created(){window.addEventListener("resize",this.resize)},destroyed(){window.removeEventListener("resize",this.resize)},mounted(){this.options.chart.width=this.$refs.cdm.clientWidth,this.options.chart.height=this.$refs.cdm.clientHeight-140},methods:{resize(e){this.options.chart.width=this.$refs.cdm.clientWidth,this.options.chart.height=this.$refs.cdm.clientHeight-150},getColor(e){let t=["#385391","#4EAD5B","#F5C242","#E93323"];return e>=90?t[0]:e<90&&e>=80?t[1]:e<80&&e>=60?t[2]:t[3]}}},l={ref:"cdm",style:{width:"100%"}};function c(e,t,p,f,i,u){const s=h("highcharts");return o(),r("div",l,[n(s,{options:i.options},null,8,["options"])],512)}const b=a(d,[["render",c]]);export{b as default};