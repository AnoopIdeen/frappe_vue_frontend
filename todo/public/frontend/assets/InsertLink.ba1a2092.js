import{_ as d,B as p,I as g,D as L,b as f,n as m,x as D,y as c,d as i,w as a,F as h,r as l,o as v,C as _,v as w}from"./vendor.9fb9c1af.js";const x={name:"InsertLink",props:["editor"],components:{Button:p,Input:g,Dialog:L},data(){return{setLinkDialog:{url:"",show:!1}}},methods:{openDialog(){let t=this.editor.getAttributes("link").href;t&&(this.setLinkDialog.url=t),this.setLinkDialog.show=!0},setLink(t){t===""?this.editor.chain().focus().extendMarkRange("link").unsetLink().run():this.editor.chain().focus().extendMarkRange("link").setLink({href:t}).run(),this.setLinkDialog.show=!1,this.setLinkDialog.url=""},reset(){this.setLinkDialog=this.$options.data().setLinkDialog}}},V=w(" Save ");function y(t,e,B,I,o,s){const r=l("Input"),u=l("Button"),k=l("Dialog");return v(),f(h,null,[m(t.$slots,"default",D(c({onClick:s.openDialog}))),i(k,{options:{title:"Set Link"},modelValue:o.setLinkDialog.show,"onUpdate:modelValue":e[3]||(e[3]=n=>o.setLinkDialog.show=n),onAfterLeave:s.reset},{"body-content":a(()=>[i(r,{type:"text",label:"URL",modelValue:o.setLinkDialog.url,"onUpdate:modelValue":e[0]||(e[0]=n=>o.setLinkDialog.url=n),onKeydown:e[1]||(e[1]=_(n=>s.setLink(n.target.value),["enter"]))},null,8,["modelValue"])]),actions:a(()=>[i(u,{appearance:"primary",onClick:e[2]||(e[2]=n=>s.setLink(o.setLinkDialog.url))},{default:a(()=>[V]),_:1})]),_:1},8,["modelValue","onAfterLeave"])],64)}var C=d(x,[["render",y]]);export{C as default};
