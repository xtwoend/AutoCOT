import{D as W,h as w}from"./DateRangePicker-9NPP0ede.js";import{u as $,v as F,w as C,x as M,y as J,z as T,A as P,o as p,B as U,E as q,G,I as K,J as Q,L as X,M as Z,g as f,h as a,j as y,F as V,k as A,t as g,r as S,m as ee,q as ae}from"./vendor-053hF-fK.js";import{_ as te}from"./_plugin-vue_export-helper-x3n3nnut.js";const z="--vc-auto-duration",le=`height var(${z}) cubic-bezier(0.33, 1, 0.68, 1)`,D={padding:0},se=300,oe={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:"0"};function B(e){return e.value?parseFloat(getComputedStyle(e.value).height):0}function H(e){var l;return{height:`${((l=e.value)==null?void 0:l.scrollHeight)||0}px`}}function L(e){if(!e.value)return{};const{transition:l}=getComputedStyle(e.value);return l==="all 0s ease 0s"?{transition:le}:{transition:l}}function N(e){if(!e.value)return!0;const{transition:l}=getComputedStyle(e.value);return typeof window.requestAnimationFrame>"u"||matchMedia("(prefers-reduced-motion: reduce)").matches||l.includes("none")||l.includes("height 0s")}function ne(e=0){if(e===0)return 0;const l=e/36,d=Math.round((4+15*l**.25+l/5)*10);return Number.isFinite(d)?d:0}const ie=$({inheritAttrs:!0,__name:"Collapse",props:{when:{type:Boolean},baseHeight:{default:0},as:{default:"div"}},emits:["collapse","expand","collapsed","expanded"],setup(e,{emit:l}){const d=e,m=l,s=F(d,"when"),n=F(d,"baseHeight"),u=C(()=>({overflow:"hidden",height:`${n.value}px`})),h=C(()=>({...D,...n.value===0?{display:"none"}:u.value})),o=M(null),c=M(s.value?"expanded":"collapsed"),i=t=>c.value=t;function r(){return s.value?D:n.value===0?oe:h.value}const b=J(r()),v=t=>b.value=t,_=t=>v({...b.value,...t}),R=M(se),j=t=>R.value=t,Y=C(()=>({[z]:`${R.value}ms`}));function I(){v(D),i("expanded"),m("expanded")}function O(){v(h.value),i("collapsed"),m("collapsed")}T(()=>{if(!o.value)return;const t=ne(o.value.scrollHeight-n.value);t>0&&j(t),!s.value&&n.value===0&&v(h.value)}),P(s,t=>{if(t){if(N(o))return I();i("expanding"),m("expand"),v({...D,...u.value,...Y.value}),requestAnimationFrame(()=>{_({...H(o),...L(o),willChange:"height"})})}else{if(N(o))return O();i("collapsing"),m("collapse"),_({...Y.value,...H(o)}),requestAnimationFrame(()=>{_({...u.value,...L(o),willChange:"height"})})}}),P(n,t=>{s.value||(t>0?_({display:void 0,height:`${t}px`}):_({display:"none"}))});function E(t){var k;t.target===o.value&&t.propertyName==="height"&&(s.value?((k=o.value)==null?void 0:k.scrollHeight)===B(o)&&I():n.value===B(o)&&O())}return(t,k)=>(p(),U(Z(d.as),{ref_key:"collapseRef",ref:o,style:X(b.value),onTransitionend:E,"data-collapse":c.value},{default:q(()=>[G(t.$slots,"default",K(Q({state:c.value})))]),_:3},40,["style","data-collapse"]))}}),re={components:{DateRangePicker:W,Collapse:ie},data(){return{data:{},collspanId:"default",params:{},mills:[],columns:[{label:"Date",field:"sample_date"},{label:"Instrument Serial",field:"instrument_serial"},{label:"Parameter",field:"result"}],dateRange:{startDate:this.from?Date.parse(this.from):new Date,endDate:this.to?Date.parse(this.to):new Date},locale:{direction:"ltr",separator:" - ",applyLabel:"Apply",cancelLabel:"Cancel",weekLabel:"W",customRangeLabel:"Custom Range",daysOfWeek:w.weekdaysMin(),monthNames:w.monthsShort(),firstDay:1}}},mounted(){this.getMills()},methods:{async getMills(){this.mills=await this.$http.get("/fossnir/mills").then(e=>e.data.data)},async loadData(){Object.keys(this.params).length<4||(this.data=await this.$http.get(`/fossnir/report/${this.params.mill_id}/losses`,{params:this.params}).then(e=>e.data.data))},millSelected(e){this.params.mill_id=e.id,this.loadData()},async updatePicker(e){this.params.from=w(e.startDate).format("YYYY-MM-DD"),this.params.to=w(e.endDate).format("YYYY-MM-DD"),await this.loadData()},selected(e){this.params.parameter=e,this.loadData()}}},x=e=>(ee("data-v-5a4f6080"),e=e(),ae(),e),de={class:"mt-3"},ce={class:"row"},ue={class:"col-4"},pe={class:"mb-3"},me=x(()=>a("label",{class:"form-label"},"Mill",-1)),he={class:"col-4"},ve={class:"mb-3"},_e=x(()=>a("label",{class:"form-label"},"Date",-1)),fe={class:"col-4"},ge={class:"mb-3"},be=x(()=>a("label",{class:"form-label"},"Parameters",-1)),we={class:"overflow-y-scroll body-scroll"},ye={class:"row"},De={class:"col"},xe={class:"sample-data"},ke=["onClick"],Ce={class:"table table-sm"},Me=x(()=>a("thead",null,[a("tr",null,[a("th",null,"Date"),a("th",null,"Serial Instrument"),a("th",null,"Parameter"),a("th",null,"Result")])],-1));function Se(e,l,d,m,s,n){const u=S("v-select"),h=S("date-range-picker"),o=S("Collapse");return p(),f("div",de,[a("div",ce,[a("div",ue,[a("div",pe,[me,y(u,{label:"mill_name",class:"w-100",options:s.mills,"onOption:selected":n.millSelected},null,8,["options","onOption:selected"])])]),a("div",he,[a("div",ve,[_e,y(h,{class:"mr-4",ref:"picker",modelValue:s.dateRange,"onUpdate:modelValue":[l[0]||(l[0]=c=>s.dateRange=c),n.updatePicker],"auto-apply":"",dateRange:s.dateRange,"locale-data":s.locale,format:"DD/MM/YYYY"},null,8,["modelValue","onUpdate:modelValue","dateRange","locale-data"])])]),a("div",fe,[a("div",ge,[be,y(u,{class:"w-100",options:["Oil/WM","VM","Oil/DM","NOS"],"onOption:selected":n.selected},null,8,["onOption:selected"])])])]),a("div",we,[a("div",ye,[a("div",De,[(p(!0),f(V,null,A(s.data,(c,i)=>(p(),f("div",xe,[a("div",{class:"product-name",onClick:r=>s.collspanId=i},g(i),9,ke),y(o,{when:s.collspanId==i},{default:q(()=>[a("table",Ce,[Me,a("tbody",null,[(p(!0),f(V,null,A(c,(r,b)=>(p(),f("tr",{key:r.id},[a("td",null,g(r.sample_date),1),a("td",null,g(r.instrument_serial),1),a("td",null,g(r.parameter),1),a("td",null,g(r.result),1)]))),128))])])]),_:2},1032,["when"])]))),256))])])])])}const Oe=te(re,[["render",Se],["__scopeId","data-v-5a4f6080"]]);export{Oe as default};