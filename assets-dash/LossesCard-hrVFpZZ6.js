import{o as a,c as _,a as s,t as e,n as c,y as d,z as n}from"./vendor-_TY6xysw.js";import{_ as i}from"./_plugin-vue_export-helper-x3n3nnut.js";const h={props:{loss:Boolean,losses:Object}},o=t=>(d("data-v-eaf471b0"),t=t(),n(),t),v={class:"losses-card"},r={class:"row"},u={class:"col-12 cx-1"},x={class:"row cm-2"},m={class:"col-7 cx-6 p-0"},f={class:"val"},T=o(()=>s("div",{class:"col-5 cx-7 p-0"},[s("span",null,"STD"),s("span",null,"% Oil/WM")],-1)),w=o(()=>s("div",{class:"row"},[s("div",{class:"col cx-1"},"TOTAL")],-1)),b={class:"col-6 cx-6 p-0"},S={class:"val"},A=o(()=>s("span",null,"ACT % Oil/WM",-1)),M={class:"col-6 cx-6"},O={class:"val"},E=o(()=>s("span",{class:"text-end"},"sample",-1)),I=o(()=>s("div",{class:"row"},[s("div",{class:"col-12 cx-1"},"LAST SAMPLE")],-1)),y={class:"col-6 cx-6 p-0"},B={class:"val"},C=o(()=>s("span",null,"ACT % Oil/WM",-1)),F={class:"col-6 cx-6"},L={class:"val"},W=o(()=>s("span",{class:"text-end"},"TIME",-1)),k=o(()=>s("div",{class:"row"},[s("div",{class:"col-12 cx-1"},"BEFORE LAST")],-1)),p={class:"col-6 cx-6 p-0"},z={class:"val"},D=o(()=>s("span",null,"ACT % Oil/WM",-1)),g={class:"col-6 cx-6"},j={class:"val"},N=o(()=>s("span",{class:"text-end"},"TIME",-1));function P(t,R,l,V,q,G){return a(),_("div",v,[s("div",r,[s("div",u,[s("span",null,e(l.losses.mill),1)])]),s("div",x,[s("div",m,[s("span",f,e(l.losses.threshold?l.losses.threshold.toFixed(2):"")+"%",1)]),T]),w,s("div",{class:c(["row cm-2",{empty:l.losses.result==null,loss:l.losses.result>l.losses.threshold}])},[s("div",b,[s("span",S,e(l.losses.result?l.losses.result.toFixed(2):""),1),A]),s("div",M,[s("span",O,e(l.losses.count),1),E])],2),I,s("div",{class:c(["row cm-2",{empty:l.losses.last_result==null,loss:l.losses.last_result>l.losses.threshold}])},[s("div",y,[s("span",B,e(l.losses.last_result?l.losses.last_result.toFixed(2):""),1),C]),s("div",F,[s("span",L,e(l.losses.last_time),1),W])],2),k,s("div",{class:c(["row cm-2",{empty:l.losses.before_last_result==null,loss:l.losses.before_last_result>l.losses.threshold}])},[s("div",p,[s("span",z,e(l.losses.before_last_result?l.losses.before_last_result.toFixed(2):""),1),D]),s("div",g,[s("span",j,e(l.losses.before_last_time),1),N])],2)])}const K=i(h,[["render",P],["__scopeId","data-v-eaf471b0"]]);export{K as default};
