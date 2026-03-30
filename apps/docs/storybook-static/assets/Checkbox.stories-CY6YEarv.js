import{R as e}from"./iframe-CBzO8dBs.js";import{n as a,T as k}from"./DropdownMenu-COMoRqmJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-99C54_7m.js";import"./index-RaGzyqEA.js";const w={title:"Primitives/Checkbox",component:a,tags:["autodocs"]},r={args:{label:"Vote !",id:"vote"}},d={args:{label:"This option is disabled by default",id:"disabled",disabled:!0}},s={render:()=>e.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4"},e.createElement(a,{label:"Candidate 1",id:"grid-candidate-1"}),e.createElement(a,{label:"Candidate 2",id:"grid-candidate-2"}),e.createElement(a,{label:"Candidate 3",id:"grid-candidate-3"}))},t={render:()=>e.createElement("div",{className:"max-w-md"},e.createElement(a,{label:"I agree to the Terms and Conditions",id:"terms"}))},i={render:()=>e.createElement("div",null,e.createElement(k,{variant:"h4"},"Choose your interests"),e.createElement("div",{className:"space-y-2"},e.createElement(a,{label:"Web Development",id:"web"}),e.createElement(a,{label:"Game Design",id:"game"}),e.createElement(a,{label:"Cybersecurity",id:"security"}),e.createElement(a,{label:"UI/UX Design",id:"design"})))};var n,o,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Vote !",
    id: "vote"
  }
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,m,b;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "This option is disabled by default",
    id: "disabled",
    disabled: true
  }
}`,...(b=(m=d.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var p,g,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Checkbox label="Candidate 1" id="grid-candidate-1" />
            <Checkbox label="Candidate 2" id="grid-candidate-2" />
            <Checkbox label="Candidate 3" id="grid-candidate-3" />
        </div>
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var C,h,v;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
            <Checkbox label="I agree to the Terms and Conditions" id="terms" />
        </div>
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,x,E;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div>
            <Typography variant={"h4"}>
                Choose your interests
            </Typography>
            <div className="space-y-2">
                <Checkbox label="Web Development" id="web" />
                <Checkbox label="Game Design" id="game" />
                <Checkbox label="Cybersecurity" id="security" />
                <Checkbox label="UI/UX Design" id="design" />
            </div>
        </div>
}`,...(E=(x=i.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const G=["Default","Disabled","Grid","TermsAndConditions","MultiSelect"];export{r as Default,d as Disabled,s as Grid,i as MultiSelect,t as TermsAndConditions,G as __namedExportsOrder,w as default};
