import{R as e}from"./iframe-C8_2Xy3M.js";import{a2 as a}from"./index-RmIsQImm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BU_qSK9z.js";import"./index-CEj4hGs3.js";const h={title:"Primitives/Switch",component:a,tags:["autodocs"]},s={args:{size:"md"},render:f=>e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{id:"mobile-data",...f}),e.createElement("label",{htmlFor:"mobile-data",className:"text-sm font-medium cursor-pointer"},"Mobile Data"))},t={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{id:"sm",size:"sm"}),e.createElement("label",{htmlFor:"sm",className:"text-sm"},"Small")),e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{id:"md",size:"md"}),e.createElement("label",{htmlFor:"md",className:"text-sm"},"Medium")),e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{id:"lg",size:"lg"}),e.createElement("label",{htmlFor:"lg",className:"text-sm"},"Large")))},l={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{id:"disabled-off",disabled:!0}),e.createElement("label",{htmlFor:"disabled-off",className:"text-sm"},"Always Off")),e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{id:"disabled-on",disabled:!0,defaultChecked:!0}),e.createElement("label",{htmlFor:"disabled-on",className:"text-sm"},"Always On")))};var m,r,i;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  render: args => <div className="flex items-center gap-2">
            <Switch id="mobile-data" {...args} />
            <label htmlFor="mobile-data" className="text-sm font-medium cursor-pointer">
                Mobile Data
            </label>
        </div>
}`,...(i=(r=s.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,d,n;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(n=(d=t.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var o,b,p;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(b=l.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};const E=["Default","Sizes","Disabled"];export{s as Default,l as Disabled,t as Sizes,E as __namedExportsOrder,h as default};
