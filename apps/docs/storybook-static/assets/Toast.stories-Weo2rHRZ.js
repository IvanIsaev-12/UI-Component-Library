import{R as r}from"./iframe-CBzO8dBs.js";import{ag as x,ah as w,h as c}from"./DropdownMenu-COMoRqmJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-99C54_7m.js";import"./index-RaGzyqEA.js";const W=({children:e})=>r.createElement(x,null,e),O={title:"Components/Toast",component:W,tags:["autodocs"]},i=({variant:e})=>{const{displayToast:y}=w(),M=e==="error"?"danger":e==="default"?"primary":e==="success"?"success":"warning";return r.createElement(c,{variant:M,onClick:()=>y(`This is a ${e||"default"} toast!`,e)},"Show ",e||"default"," Toast")},a={args:{children:r.createElement(i,{variant:"default"})}},s={args:{children:r.createElement(i,{variant:"success"})}},t={args:{children:r.createElement(i,{variant:"error"})}},o={args:{children:r.createElement(i,{variant:"warning"})}},R=()=>{const{displayToast:e}=w();return r.createElement("div",{className:"flex gap-4"},r.createElement(c,{variant:"primary",onClick:()=>e("First toast","default")},"Default Toast"),r.createElement(c,{variant:"success",onClick:()=>e("Second toast","success")},"Success Toast"),r.createElement(c,{variant:"danger",onClick:()=>e("Third toast","error")},"Error Toast"))},n={args:{children:r.createElement(R,null)}};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <ToastDemo variant="default" />
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,p,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <ToastDemo variant="success" />
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var T,h,E;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: <ToastDemo variant="error" />
  }
}`,...(E=(h=t.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var f,S,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <ToastDemo variant="warning" />
  }
}`,...(v=(S=o.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var D,C,k;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: <MultipleToasts />
  }
}`,...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const P=["Default","Success","Error","Warning","Multiple"];export{a as Default,t as Error,n as Multiple,s as Success,o as Warning,P as __namedExportsOrder,O as default};
