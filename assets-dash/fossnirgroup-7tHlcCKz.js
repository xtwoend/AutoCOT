import{o as r,c as u,a as t,b as i,F as p,B as b,u as d,t as g,w as f,r as m}from"./vendor-oCMwW_3J.js";import{_ as v}from"./_plugin-vue_export-helper-x3n3nnut.js";const V={props:{title:String},data(){return{show:!1,row:{mill_id:4,group_id:null,product_name:null},rows:[],mills:[],products:[]}},async mounted(){this.getMills(),this.getGroups(),this.getData(),this.getProducts()},methods:{async getProducts(){this.products=await this.$http.get("/threshold/products",{params:this.row}).then(o=>o.data.data)},async getMills(){this.mills=await this.$http.get("/fossnir/mills").then(o=>o.data.data)},async getGroups(){this.groups=await this.$http.get("/fossnir/stations").then(o=>o.data.data)},async getData(){this.rows=[],(await this.$http.get("/threshold/groups",{params:this.row}).then(e=>e.data.data)).forEach(e=>this.rows.push(e))},edit(o){this.row=o,this.show=!0},del(o){if(confirm("Your sure!")==!0){this.$http.delete(`/group-delete/${o.id}`);let e=this.rows.findIndex(c=>c.id===o.id);this.rows.splice(e,1)}},async save(){this.row=await this.$http.post("/threshold/group-update",this.row).then(o=>o.data.data),await this.getData(),this.show=!1}}},y={class:"threshold-setting container mt-4"},k={class:"row"},C={class:"col-3"},x={class:"mb-3"},I=t("label",{class:"form-label"},"Mill",-1),D={class:"table table-sm table-striped table-hover"},N=t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",null,"MILL"),t("th",null,"Group"),t("th",null,"Product Name"),t("th")])],-1),S=["onClick"],M=["onClick"],B={class:"form-setting"},E={class:"mb-3"},G=t("label",{class:"form-label"},"Mill",-1),L={class:"mb-3"},P=t("label",{class:"form-label"},"Group",-1),U={class:"mb-3"},A=t("label",{class:"form-label"},"Product Name",-1),F={class:"mb-3 d-flex justify-content-end"};function O(o,e,c,j,l,n){const a=m("v-select"),h=m("vue3-simple-typeahead"),_=m("com-modal");return r(),u(p,null,[t("div",y,[t("div",k,[t("div",C,[t("div",x,[I,i(a,{label:"mill_name",class:"w-100",modelValue:l.row.mill_id,"onUpdate:modelValue":e[0]||(e[0]=s=>l.row.mill_id=s),reduce:s=>s.id,options:l.mills,"onOption:selected":e[1]||(e[1]=s=>n.getData())},null,8,["modelValue","reduce","options"])])])]),t("button",{class:"btn btn-success float-end",onClick:e[2]||(e[2]=s=>l.show=!0)},"Add New Standart"),t("table",D,[N,t("tbody",null,[(r(!0),u(p,null,b(l.rows,s=>(r(),u("tr",{key:s.id},[t("td",null,d(s.id),1),t("td",null,d(s.mill.mill_name),1),t("td",null,d(s.group.name),1),t("td",null,d(s.product_name),1),t("td",null,[t("a",{class:"pointer",onClick:w=>n.edit(s)},"Edit",8,S),g(" | "),t("a",{class:"pointer",onClick:w=>n.del(s)},"Del",8,M)])]))),128))])])]),i(_,{modelValue:l.show,"onUpdate:modelValue":e[9]||(e[9]=s=>l.show=s),header:"Add/Edit Standart",closeable:""},{default:f(()=>[t("div",B,[t("div",E,[G,i(a,{label:"mill_name",class:"w-100",modelValue:l.row.mill_id,"onUpdate:modelValue":e[3]||(e[3]=s=>l.row.mill_id=s),reduce:s=>s.id,options:l.mills},null,8,["modelValue","reduce","options"])]),t("div",L,[P,i(a,{label:"name",class:"w-100",modelValue:l.row.group_id,"onUpdate:modelValue":e[4]||(e[4]=s=>l.row.group_id=s),options:o.groups,reduce:s=>s.id},null,8,["modelValue","options","reduce"])]),t("div",U,[A,i(h,{id:"typeahead_id",class:"form-control",items:l.products,minInputLength:1,defaultItem:l.row.product_name,onOnInput:e[5]||(e[5]=s=>l.row.product_name=s.input),onSelectItem:e[6]||(e[6]=s=>l.row.product_name=s)},null,8,["items","defaultItem"])]),t("div",F,[t("button",{onClick:e[7]||(e[7]=s=>l.show=!1),class:"btn btn btn-outline-secondary mr2"},"Cancel"),t("button",{onClick:e[8]||(e[8]=(...s)=>n.save&&n.save(...s)),class:"btn btn-success"},"Save")])])]),_:1},8,["modelValue"])],64)}const q=v(V,[["render",O]]);export{q as default};
