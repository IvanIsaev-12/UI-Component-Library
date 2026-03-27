import{R as r}from"./iframe-BsBO42-d.js";import{R as o}from"./index-DjqJZFuD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DyRqqCoN.js";import"./index-BpW9T3rN.js";const d={title:"Components/Progress",component:o,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current progress value"},maximum:{control:{type:"number"},description:"Maximum value"},variant:{control:{type:"select"},options:["primary","success","warning","danger"],description:"Visual variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the progress bar"}}},e={args:{value:60,maximum:100,variant:"primary",size:"md",label:"Progress"},render:n=>r.createElement("div",{className:"w-[600px]"},r.createElement(o,{...n}))};var a,s,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    value: 60,
    maximum: 100,
    variant: "primary",
    size: "md",
    label: "Progress"
  },
  render: args => <div className="w-[600px]">
            <Progress {...args} />
        </div>
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,d as default};
