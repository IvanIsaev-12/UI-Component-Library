import{R as e}from"./iframe-BsBO42-d.js";import{n as a,T as k}from"./index-DjqJZFuD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DyRqqCoN.js";import"./index-BpW9T3rN.js";const N={title:"Primitives/Checkbox",component:a,tags:["autodocs"]},r={args:{label:"Vote !",id:"vote"}},s={args:{label:"This option is disabled by default",id:"disabled",disabled:!0}},t={render:()=>e.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4"},e.createElement(a,{label:"Candidate 1"}),e.createElement(a,{label:"Candidate 2"}),e.createElement(a,{label:"Candidate 3"}))},d={render:()=>e.createElement("div",{className:"max-w-md"},e.createElement(a,{label:"I agree tho the Terms and Conditions",id:"terms"}))},n={render:()=>e.createElement("div",null,e.createElement(k,{variant:"h4"},"Choose your interests"),e.createElement("div",{className:"spacw-y-2"},e.createElement(a,{label:"Web Development",id:"web"}),e.createElement(a,{label:"Game Design",id:"game"}),e.createElement(a,{label:"Cybersecurity",id:"security"}),e.createElement(a,{label:"UI/UX Design",id:"design"})))};var o,i,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Vote !",
    id: "vote"
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,m,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "This option is disabled by default",
    id: "disabled",
    disabled: true
  }
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var p,u,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Checkbox label="Candidate 1" />
            <Checkbox label="Candidate 2" />
            <Checkbox label="Candidate 3" />
        </div>
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var C,h,v;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
            <Checkbox label="I agree tho the Terms and Conditions" id="terms" />
        </div>
}`,...(v=(h=d.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,x,E;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div>
            <Typography variant={"h4"}>
                Choose your interests
            </Typography>
            <div className="spacw-y-2">
                <Checkbox label="Web Development" id="web" />
                <Checkbox label="Game Design" id="game" />
                <Checkbox label="Cybersecurity" id="security" />
                <Checkbox label="UI/UX Design" id="design" />
            </div>
        </div>
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const G=["Default","Disabled","Grid","TermsAndConditions","MultiSelect"];export{r as Default,s as Disabled,t as Grid,n as MultiSelect,d as TermsAndConditions,G as __namedExportsOrder,N as default};
