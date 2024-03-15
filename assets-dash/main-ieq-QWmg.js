import{_ as e}from"./style-95uUns4W.js";import{r as a,o as i,c as D,a as t,b as _,d as O,e as T,H as P,f as c,s as f,S as A,g as u,h as L,i as V,j as R,p as I,D as w,K as S,C as b,k as l}from"./vendor-_TY6xysw.js";import k from"./home-7u5IZB5u.js";import y from"./trend-8RTF4CWM.js";import C from"./settings-CRQGoMEk.js";import x from"./grafic-i87QPxAA.js";import M from"./score-94y7HLEj.js";import N from"./performance-NpzJqtAJ.js";import j from"./NotFound-GVKBljbv.js";import{_ as H}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./LossesCard-ave5fO7C.js";import"./TrendMonth-NwidzWqM.js";import"./TrendYear-6tQLLRzF.js";import"./TrendDay-rLGBPGVQ.js";import"./ScoreCard-9MfIgG7K.js";const B={"/":k,"/trend":y,"/grafic":x,"/setting":C,"/score":M,"/performance":N};var p=document.querySelector('meta[name="rank_url"]');let U=new Date,$=U.toISOString().split("T")[0];const F={data(){return{currentPath:window.location.hash,rankUrl:p?p.content:null,date:$,score:0}},computed:{currentView(){return B[this.currentPath.slice(1)||"/"]||j}},mounted(){window.addEventListener("hashchange",()=>{this.currentPath=window.location.hash}),this.getScore()},methods:{async getScore(){let o=await this.$http.get("/fossnir/total-score",{params:{date:this.date}}).then(r=>r.data.data);this.score=o.score}},watch:{date:{handler(o,r){o!==r&&this.getScore()},deep:!0}}},q={class:"dashboard-app container-fluid"},G=t("header",{class:"header"},[t("span",{class:"text-center"},"PERFORMANCE PRODUCTION, QUALITY & LOSSES (DEMO)")],-1),K={class:"row p-2"},Y={class:"col-4"},z={class:"row mt-2"},Q={class:"col-12"},Z=t("div",{class:"col-12"},[t("div",{class:"dash-title mt-2 txt-white"}," ")],-1),J={class:"col-6"},W={class:"card mt-2 bg-blue"},X=t("div",{class:"card-header text-center"},[t("h2",{class:"txt-white"},"TOTAL")],-1),ee={class:"card-body"},te={class:"col-6"},oe={class:"card mt-2 bg-blue"},se={class:"col-8"};function re(o,r,ce,ne,n,v){const h=a("com-menu"),E=a("com-percentage"),g=a("com-mill-rank");return i(),D("div",q,[G,t("div",K,[t("div",Y,[t("div",z,[t("div",Q,[_(h,{active:"grafic"})]),Z,t("div",J,[t("div",W,[X,t("div",ee,[_(E,{value:n.score},null,8,["value"])])])]),t("div",te,[t("div",oe,[_(g,{url:"/fossnir/score",date:n.date},null,8,["date"])])])])]),t("div",se,[(i(),O(T(v.currentView)))])])])}const ae=H(F,[["render",re]]);P(c);f(c);A(c);var _e=document.querySelector('meta[name="base_url"]').content;u.defaults.baseURL=_e||"http://192.168.170.87:9502";const s=L(ae);s.use(V());s.use(R);s.use(I,u);s.component("EasyDataTable",w);s.component("VueDatePicker",S);s.component("v-select",b);const d=Object.assign({"./components/LossesCard.vue":()=>e(()=>import("./LossesCard-ave5fO7C.js"),__vite__mapDeps([0,1,2,3])),"./components/Menu.vue":()=>e(()=>import("./Menu-WRKA-t_q.js"),__vite__mapDeps([4,1,2,5])),"./components/MillRank.vue":()=>e(()=>import("./MillRank-r3RgdKZw.js"),__vite__mapDeps([6,1,2])),"./components/Modal.vue":()=>e(()=>import("./Modal-v3wayqGs.js"),__vite__mapDeps([7,1,2,8])),"./components/Percentage.vue":()=>e(()=>import("./Percentage-QljD_2Lc.js"),__vite__mapDeps([9,1,2])),"./components/ScoreCard.vue":()=>e(()=>import("./ScoreCard-9MfIgG7K.js"),__vite__mapDeps([10,1,2,11])),"./components/ScoreDaily.vue":()=>e(()=>import("./ScoreDaily-lbMW8MJL.js"),__vite__mapDeps([12,1,2])),"./components/TrendDay.vue":()=>e(()=>import("./TrendDay-rLGBPGVQ.js"),__vite__mapDeps([13,1,2])),"./components/TrendMonth.vue":()=>e(()=>import("./TrendMonth-NwidzWqM.js"),__vite__mapDeps([14,1,2])),"./components/TrendYear.vue":()=>e(()=>import("./TrendYear-6tQLLRzF.js"),__vite__mapDeps([15,1,2]))});Object.keys(d).forEach(o=>s.component("com-"+o.split("/").pop().split(".")[0].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),l(d[o])));const m=Object.assign({"./pages/NotFound.vue":()=>e(()=>import("./NotFound-GVKBljbv.js"),__vite__mapDeps([16,1,2])),"./pages/grafic.vue":()=>e(()=>import("./grafic-i87QPxAA.js"),__vite__mapDeps([17,14,1,2,15,13,18])),"./pages/history.vue":()=>e(()=>import("./history-L0aVIEPh.js"),__vite__mapDeps([19,14,1,2,20])),"./pages/home.vue":()=>e(()=>import("./home-7u5IZB5u.js"),__vite__mapDeps([21,0,1,2,3,22])),"./pages/losses.vue":()=>e(()=>import("./losses-baGmnpUa.js"),__vite__mapDeps([23,0,1,2,3])),"./pages/oilcontent.vue":()=>e(()=>import("./oilcontent-wshhwgfj.js"),__vite__mapDeps([24,1,2])),"./pages/performance.vue":()=>e(()=>import("./performance-NpzJqtAJ.js"),__vite__mapDeps([25,1,2,26])),"./pages/score.vue":()=>e(()=>import("./score-94y7HLEj.js"),__vite__mapDeps([27,10,1,2,11])),"./pages/settings.vue":()=>e(()=>import("./settings-CRQGoMEk.js"),__vite__mapDeps([28,1,2,29])),"./pages/threshold.vue":()=>e(()=>import("./threshold-Jzo4Q8Cn.js"),__vite__mapDeps([30,1,2])),"./pages/trend.vue":()=>e(()=>import("./trend-8RTF4CWM.js"),__vite__mapDeps([31,1,2,32]))});Object.keys(m).forEach(o=>s.component("page-"+o.split("/").pop().split(".")[0],l(m[o])));s.mount("#app");
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets-dash/LossesCard-ave5fO7C.js","assets-dash/vendor-_TY6xysw.js","assets-dash/_plugin-vue_export-helper-x3n3nnut.js","assets-dash/LossesCard-CjS8VuZj.css","assets-dash/Menu-WRKA-t_q.js","assets-dash/Menu-iRN-4K42.css","assets-dash/MillRank-r3RgdKZw.js","assets-dash/Modal-v3wayqGs.js","assets-dash/Modal-Sn_Zvimh.css","assets-dash/Percentage-QljD_2Lc.js","assets-dash/ScoreCard-9MfIgG7K.js","assets-dash/ScoreCard-bf-zsHDh.css","assets-dash/ScoreDaily-lbMW8MJL.js","assets-dash/TrendDay-rLGBPGVQ.js","assets-dash/TrendMonth-NwidzWqM.js","assets-dash/TrendYear-6tQLLRzF.js","assets-dash/NotFound-GVKBljbv.js","assets-dash/grafic-i87QPxAA.js","assets-dash/grafic-X3ki1NaZ.css","assets-dash/history-L0aVIEPh.js","assets-dash/history-kKhE0MkD.css","assets-dash/home-7u5IZB5u.js","assets-dash/home-9hkmU7Qy.css","assets-dash/losses-baGmnpUa.js","assets-dash/oilcontent-wshhwgfj.js","assets-dash/performance-NpzJqtAJ.js","assets-dash/performance-AKmmuWd8.css","assets-dash/score-94y7HLEj.js","assets-dash/settings-CRQGoMEk.js","assets-dash/settings-y5Tg5i8A.css","assets-dash/threshold-Jzo4Q8Cn.js","assets-dash/trend-8RTF4CWM.js","assets-dash/trend-VWT8lsCM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
