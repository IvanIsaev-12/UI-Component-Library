import{R as e}from"./iframe-BsBO42-d.js";import{a2 as a}from"./index-DjqJZFuD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DyRqqCoN.js";import"./index-BpW9T3rN.js";const F={title:"Primitives/Switch",component:a,tags:["autodocs"]},t={args:{size:"md"},render:N=>e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{id:"mobile-data",...N}),e.createElement("label",{htmlFor:"mobile-data",className:"text-sm font-medium cursor-pointer"},"Mobile Data"))},s={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{id:"sm",size:"sm"}),e.createElement("label",{htmlFor:"sm",className:"text-sm"},"Small")),e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{id:"md",size:"md"}),e.createElement("label",{htmlFor:"md",className:"text-sm"},"Medium")),e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{id:"lg",size:"lg"}),e.createElement("label",{htmlFor:"lg",className:"text-sm"},"Large")))},l={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{id:"disabled-off",disabled:!0}),e.createElement("label",{htmlFor:"disabled-off",className:"text-sm"},"Always Off")),e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{id:"disabled-on",disabled:!0,defaultChecked:!0}),e.createElement("label",{htmlFor:"disabled-on",className:"text-sm"},"Always On")))},r={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{id:"primary-color",variant:"primary",defaultChecked:!0}),e.createElement("label",{htmlFor:"primary-color",className:"text-sm font-medium"},"Primary")),e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{id:"success-color",variant:"success",defaultChecked:!0}),e.createElement("label",{htmlFor:"success-color",className:"text-sm font-medium"},"Success")),e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{id:"warning-color",variant:"warning",defaultChecked:!0}),e.createElement("label",{htmlFor:"warning-color",className:"text-sm font-medium"},"Warning")),e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{id:"danger-color",variant:"danger",defaultChecked:!0}),e.createElement("label",{htmlFor:"danger-color",className:"text-sm font-medium"},"Danger")))};var m,c,n;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  render: args => <div className="flex items-center gap-2">
            <Switch id="mobile-data" {...args} />
            <label htmlFor="mobile-data" className="text-sm font-medium cursor-pointer">
                Mobile Data
            </label>
        </div>
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var i,d,o;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
            <div className="flex items-center gap-2">
                <Switch id="sm" size="sm" />
                <label htmlFor="sm" className="text-sm">Small</label>
            </div>
            <div className="flex items-center gap-2">
                <Switch id="md" size="md" />
                <label htmlFor="md" className="text-sm">Medium</label>
            </div>
            <div className="flex items-center gap-2">
                <Switch id="lg" size="lg" />
                <label htmlFor="lg" className="text-sm">Large</label>
            </div>
        </div>
}`,...(o=(d=s.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var p,f,u;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
            <div className="flex items-center gap-2">
                <Switch id="disabled-off" disabled />
                <label htmlFor="disabled-off" className="text-sm">Always Off</label>
            </div>
            <div className="flex items-center gap-2">
                <Switch id="disabled-on" disabled defaultChecked />
                <label htmlFor="disabled-on" className="text-sm">Always On</label>
            </div>
        </div>
}`,...(u=(f=l.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var g,b,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
            <div className="flex items-center gap-2">
                <Switch id="primary-color" variant="primary" defaultChecked />
                <label htmlFor="primary-color" className="text-sm font-medium">Primary</label>
            </div>
            <div className="flex items-center gap-2">
                <Switch id="success-color" variant="success" defaultChecked />
                <label htmlFor="success-color" className="text-sm font-medium">Success</label>
            </div>
            <div className="flex items-center gap-2">
                <Switch id="warning-color" variant="warning" defaultChecked />
                <label htmlFor="warning-color" className="text-sm font-medium">Warning</label>
            </div>
            <div className="flex items-center gap-2">
                <Switch id="danger-color" variant="danger" defaultChecked />
                <label htmlFor="danger-color" className="text-sm font-medium">Danger</label>
            </div>
        </div>
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const y=["Default","Sizes","Disabled","Colors"];export{r as Colors,t as Default,l as Disabled,s as Sizes,y as __namedExportsOrder,F as default};
