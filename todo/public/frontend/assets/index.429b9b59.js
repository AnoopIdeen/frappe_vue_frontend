var f=(e,t,o)=>new Promise((n,r)=>{var s=i=>{try{c(o.next(i))}catch(d){r(d)}},a=i=>{try{c(o.throw(i))}catch(d){r(d)}},c=i=>i.done?n(i.value):Promise.resolve(i.value).then(s,a);c((o=o.apply(e,t)).next())});import{c as h,a as _,_ as I,b as O,d as v,r as w,o as y,e as S,f as m,g as b,h as L,s as A,i as E,B as N,j as D,k as B,l as P}from"./vendor.9fb9c1af.js";const U=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}};U();const C="modulepreload",p={},R="/assets/todo/frontend/",g=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${R}${n}`,n in p)return;p[n]=!0;const r=n.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":C,r||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),r)return new Promise((c,i)=>{a.addEventListener("load",c),a.addEventListener("error",i)})})).then(()=>t())},j=[{path:"/",name:"Login",component:()=>g(()=>import("./Login.e1574e6f.js"),["assets/Login.e1574e6f.js","assets/vendor.9fb9c1af.js","assets/vendor.901b7133.css"])},{path:"/home",name:"Home",component:()=>g(()=>import("./Home.d1650fb0.js"),["assets/Home.d1650fb0.js","assets/vendor.9fb9c1af.js","assets/vendor.901b7133.css"])}];let k=h({history:_("/frontend"),routes:j});const F={};function J(e,t){const o=w("router-view");return y(),O("div",null,[v(o)])}var x=I(F,[["render",J]]);let l=()=>Object.fromEntries(document.cookie.split("; ").map(e=>e.split("=")).map(e=>[e[0],decodeURIComponent(e[1])]));const H=S({state:{auth:{loading:!1,user_id:l().user_id},user:{fullName:l().full_name,imageURL:l().user_image},uploads:[],sortOrder:JSON.parse(localStorage.getItem("sortOrder"))||{label:"Modified",field:"modified",ascending:!1},view:JSON.parse(localStorage.getItem("view"))||"grid",entityInfo:null,pasteData:{entities:[],action:null},showInfo:!1,hasWriteAccess:!1,currentFolderID:"",homeFolderID:"",currentBreadcrumbs:JSON.parse(localStorage.getItem("currentBreadcrumbs"))||[{label:"",route:""}]},getters:{isLoggedIn:e=>e.auth.user_id&&e.auth.user_id!=="Guest",uploadsInProgress:e=>e.uploads.filter(t=>!t.completed),uploadsCompleted:e=>e.uploads.filter(t=>t.completed)},mutations:{setAuth(e,t){Object.assign(e.auth,t)},setUser(e,t){Object.assign(e.user,t)},setUploads(e,t){e.uploads=t},pushToUploads(e,t){e.uploads.push(t)},updateUpload(e,t){let o=e.uploads.findIndex(n=>n.uuid==t.uuid);Object.assign(e.uploads[o],t)},setSortOrder(e,t){localStorage.setItem("sortOrder",JSON.stringify(t)),e.sortOrder=t},toggleView(e,t){localStorage.setItem("view",JSON.stringify(t)),e.view=t},setEntityInfo(e,t){e.entityInfo=t},setPasteData(e,t){e.pasteData=t},setShowInfo(e,t){e.showInfo=t},setHasWriteAccess(e,t){e.hasWriteAccess=t},setCurrentFolderID(e,t){e.currentFolderID=t},setHomeFolderID(e,t){e.homeFolderID=t},setCurrentBreadcrumbs(e,t){localStorage.setItem("currentBreadcrumbs",JSON.stringify(t)),e.currentBreadcrumbs=t}},actions:{login(o,n){return f(this,arguments,function*({commit:e},t){e("setAuth",{loading:!0});let r=yield m("login",{usr:t.email,pwd:t.password});return console.log("RES",r,l()),r?(e("setAuth",{loading:!1,user_id:l().user_id}),e("setUser",{fullName:l().full_name,imageURL:l().user_image?window.location.origin+l().user_image:null}),r):!1})},logout(t){return f(this,arguments,function*({commit:e}){e("setAuth",{loading:!0}),yield m("logout"),window.location.reload()})},clearUploads({commit:e}){e("setUploads",[])}}});let u=b(x);const V=L({components:B,directives:P});A("resourceFetcher",D);u.use(H);u.use(k);u.use(V);u.use(E);u.component("Button",N);u.mount("#app");
