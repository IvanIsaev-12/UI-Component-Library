import{R as r}from"./index-ZH-6pyQh.js";import{x as o}from"./index-CWnBjDi5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-jyNdYUlS.js";import"./index-DVyBTwwr.js";const d={title:"Components/Progress",component:o,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current progress value"},maximum:{control:{type:"number"},description:"Maximum value"},variant:{control:{type:"select"},options:["primary","success","warning","danger"],description:"Visual variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the progress bar"}}},e={args:{value:60,maximum:100,variant:"primary",size:"md"},render:n=>r.createElement("div",{className:"w-[600px]"},r.createElement(o,{...n}))};var a,s,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    value: 60,
    maximum: 100,
    variant: "primary",
    size: "md"
  },
  render: args => <div className="w-[600px]">
            <Progress {...args} />
        </div>
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,d as default};
