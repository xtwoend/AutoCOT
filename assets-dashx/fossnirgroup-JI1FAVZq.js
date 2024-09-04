import{o as r,c as u,a as t,b as i,F as p,E as b,v as d,u as g,w as f,r as m}from"./vendor-k6VCZUst.js";import{_ as v}from"./_plugin-vue_export-helper-x3n3nnut.js";const V={props:{title:String},data(){return{show:!1,row:{mill_id:4,group_id:null,product_name:null},rows:[],mills:[],products:[]}},async mounted(){this.getMills(),this.getGroups(),this.getData(),this.getProducts()},methods:{async getProducts(){this.products=await this.$http.get("/threshold/products",{params:this.row}).then(o=>o.data.data)},async getMills(){this.mills=await this.$http.get("/fossnir/mills").then(o=>o.data.data)},async getGroups(){this.groups=await this.$http.get("/fossnir/stations").then(o=>o.data.data)},async getData(){this.rows=[],(await this.$http.get("/threshold/groups",{params:this.row}).then(s=>s.data.data)).forEach(s=>this.rows.push(s))},edit(o){this.row=o,this.show=!0},del(o){if(confirm("Your sure!")==!0){this.$http.delete(`/group-delete/${o.id}`);let s=this.rows.findIndex(c=>c.id===o.id);this.rows.splice(s,1)}},async save(){this.row=await this.$http.post("/threshold/group-update",this.row).then(o=>o.data.data),await this.getData(),this.show=!1}}},y={class:"threshold-setting container mt-4"},k={class:"row"},C={class:"col-3"},x={class:"mb-3"},I=t("label",{class:"form-label"},"Mill",-1),D={class:"table table-sm table-striped table-hover"},N=t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",null,"MILL"),t("th",null,"Group"),t("th",null,"Product Name"),t("th")])],-1),S=["onClick"],E=["onClick"],M={class:"form-setting"},P={class:"mb-3"},G=t("label",{class:"form-label"},"Mill",-1),L={class:"mb-3"},U=t("label",{class:"form-label"},"Group",-1),B={class:"mb-3"},O=t("label",{class:"form-label"},"Product Name",-1),A={class:"mb-3 d-flex justify-content-end"};function F(o,s,c,j,l,n){const a=m("v-select"),h=m("vue3-simple-typeahead"),_=m("com-modal");return r(),u(p,null,[t("div",y,[t("div",k,[t("div",C,[t("div",x,[I,i(a,{label:"mill_name",class:"w-100",modelValue:l.row.mill_id,"onUpdate:modelValue":s[0]||(s[0]=e=>l.row.mill_id=e),reduce:e=>e.id,options:l.mills,"onOption:selected":s[1]||(s[1]=e=>n.getData())},null,8,["modelValue","reduce","options"])])])]),t("button",{class:"btn btn-success float-end",onClick:s[2]||(s[2]=e=>l.show=!0)},"Add New Standart"),t("table",D,[N,t("tbody",null,[(r(!0),u(p,null,b(l.rows,e=>(r(),u("tr",{key:e.id},[t("td",null,d(e.id),1),t("td",null,d(e.mill.mill_name),1),t("td",null,d(e.group.name),1),t("td",null,d(e.product_name),1),t("td",null,[t("a",{class:"pointer",onClick:w=>n.edit(e)},"Edit",8,S),g(" | "),t("a",{class:"pointer",onClick:w=>n.del(e)},"Del",8,E)])]))),128))])])]),i(_,{modelValue:l.show,"onUpdate:modelValue":s[10]||(s[10]=e=>l.show=e),header:"Add/Edit Standart",closeable:""},{default:f(()=>[t("div",M,[t("div",P,[G,i(a,{label:"mill_name",class:"w-100",modelValue:l.row.mill_id,"onUpdate:modelValue":s[3]||(s[3]=e=>l.row.mill_id=e),reduce:e=>e.id,options:l.mills,"onOption:selected":s[4]||(s[4]=e=>n.getProducts())},null,8,["modelValue","reduce","options"])]),t("div",L,[U,i(a,{label:"name",class:"w-100",modelValue:l.row.group_id,"onUpdate:modelValue":s[5]||(s[5]=e=>l.row.group_id=e),options:o.groups,reduce:e=>e.id},null,8,["modelValue","options","reduce"])]),t("div",B,[O,i(h,{id:"typeahead_id",class:"form-control",items:l.products,minInputLength:1,defaultItem:l.row.product_name,onOnInput:s[6]||(s[6]=e=>l.row.product_name=e.input),onSelectItem:s[7]||(s[7]=e=>l.row.product_name=e)},null,8,["items","defaultItem"])]),t("div",A,[t("button",{onClick:s[8]||(s[8]=e=>l.show=!1),class:"btn btn btn-outline-secondary mr2"},"Cancel"),t("button",{onClick:s[9]||(s[9]=(...e)=>n.save&&n.save(...e)),class:"btn btn-success"},"Save")])])]),_:1},8,["modelValue"])],64)}const q=v(V,[["render",F]]);export{q as default};
