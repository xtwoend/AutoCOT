import h from"./Trend-KcNn2fU3.js";import{D as u,h as o}from"./DateRangePicker-9NPP0ede.js";import{o as d,g as f,h as t,j as l,B as b,l as v,r as i,m as D,q as g}from"./vendor-053hF-fK.js";import{_ as w}from"./_plugin-vue_export-helper-x3n3nnut.js";const k={components:{TrendTemplate:h,DateRangePicker:u},data(){return{trendUrl:null,mills:[],params:{},options:[],dateRange:{startDate:this.from?Date.parse(this.from):new Date,endDate:this.to?Date.parse(this.to):new Date},locale:{direction:"ltr",separator:" - ",applyLabel:"Apply",cancelLabel:"Cancel",weekLabel:"W",customRangeLabel:"Custom Range",daysOfWeek:o.weekdaysMin(),monthNames:o.monthsShort(),firstDay:1}}},mounted(){this.getMills()},methods:{async getMills(){this.mills=await this.$http.get("/fossnir/mills").then(e=>e.data.data)},async loadProducts(){this.params.hasOwnProperty("mill_id")&&(this.options=await this.$http.get(`/fossnir/products/${this.params.mill_id}`,{params:this.params}).then(e=>e.data.data),this.trendUrl="/fossnir/report/"+this.params.mill_id)},async millSelected(e){this.params.mill_id=e.id,await this.loadProducts()},async updatePicker(e){this.params.from=o(e.startDate).format("YYYY-MM-DD"),this.params.to=o(e.endDate).format("YYYY-MM-DD"),await this.loadProducts()},selected(e){this.params.product=e},changeParameter(e){this.params.prameter=e}}},r=e=>(D("data-v-43471b12"),e=e(),g(),e),y={class:"mt-3"},M={class:"row"},Y={class:"col-3"},O={class:"mb-3"},P=r(()=>t("label",{class:"form-label"},"Mill",-1)),R={class:"col-3"},S={class:"mb-3"},V=r(()=>t("label",{class:"form-label"},"Date",-1)),U={class:"col-3"},B={class:"mb-3"},N=r(()=>t("label",{class:"form-label"},"Stations",-1)),C={class:"col-3"},I={class:"mb-3"},L=r(()=>t("label",{class:"form-label"},"Parameters",-1)),x={class:"overflow-y-scroll body-scroll"},W={class:"row"},T={class:"col"};function j(e,c,q,A,s,a){const n=i("v-select"),m=i("date-range-picker"),p=i("trend-template");return d(),f("div",y,[t("div",M,[t("div",Y,[t("div",O,[P,l(n,{label:"mill_name",class:"w-100",options:s.mills,"onOption:selected":a.millSelected},null,8,["options","onOption:selected"])])]),t("div",R,[t("div",S,[V,l(m,{class:"mr-4",ref:"picker",modelValue:s.dateRange,"onUpdate:modelValue":[c[0]||(c[0]=_=>s.dateRange=_),a.updatePicker],"auto-apply":"",dateRange:s.dateRange,"locale-data":s.locale,format:"DD/MM/YYYY"},null,8,["modelValue","onUpdate:modelValue","dateRange","locale-data"])])]),t("div",U,[t("div",B,[N,l(n,{class:"w-100",options:s.options,"onOption:selected":a.selected},null,8,["options","onOption:selected"])])]),t("div",C,[t("div",I,[L,l(n,{class:"w-100",options:["Oil/WM","VM","Oil/DM","NOS"],"onOption:selected":a.changeParameter},null,8,["onOption:selected"])])])]),t("div",x,[t("div",W,[t("div",T,[s.trendUrl?(d(),b(p,{key:0,url:this.trendUrl,params:s.params},null,8,["url","params"])):v("",!0)])])])])}const H=w(k,[["render",j],["__scopeId","data-v-43471b12"]]);export{H as default};
