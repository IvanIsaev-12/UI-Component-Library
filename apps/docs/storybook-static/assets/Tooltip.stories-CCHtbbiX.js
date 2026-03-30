import{R as e}from"./iframe-CBzO8dBs.js";import{ai as t,aj as o,ak as r,h as n,al as l}from"./DropdownMenu-COMoRqmJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-99C54_7m.js";import"./index-RaGzyqEA.js";const F={title:"Primitives/Tooltip",component:t,tags:["autodocs"]},i={render:()=>e.createElement(o,null,e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(n,{variant:"outline"},"Hover me")),e.createElement(l,null,e.createElement("p",null,"Add to library"))))},a={render:()=>e.createElement(o,null,e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(n,{variant:"outline"},"Top")),e.createElement(l,{side:"top"},e.createElement("p",null,"Tooltip on top"))))},p={render:()=>e.createElement(o,null,e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(n,{variant:"outline"},"Right")),e.createElement(l,{side:"right"},e.createElement("p",null,"Tooltip on right"))))},s={render:()=>e.createElement(o,null,e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(n,{variant:"outline"},"Bottom")),e.createElement(l,{side:"bottom"},e.createElement("p",null,"Tooltip on bottom"))))},c={render:()=>e.createElement(o,null,e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(n,{variant:"outline"},"Left")),e.createElement(l,{side:"left"},e.createElement("p",null,"Tooltip on left"))))},m={render:()=>e.createElement(o,{delayDuration:0},e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(n,{variant:"outline"},"No delay")),e.createElement(l,null,e.createElement("p",null,"This tooltip appears instantly"))))},T={render:()=>e.createElement(o,null,e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(n,{variant:"outline"},"Hover me")),e.createElement(l,{arrow:!0},e.createElement("p",null,"Tooltip with arrow"))))},u={render:()=>e.createElement(o,null,e.createElement(t,null,e.createElement(r,{asChild:!0},e.createElement(n,{variant:"outline"},"View details")),e.createElement(l,{className:"max-w-xs"},e.createElement("p",null,"See how tooltip will handle a bigger text. I hope there won't be any issues!"))))};var d,g,E;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...(E=(g=i.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var h,v,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip on top</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...(C=(v=a.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var B,w,P;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip on right</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...(P=(w=p.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var f,y,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip on bottom</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var S,x,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip on left</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...(D=(x=c.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var L,R,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">No delay</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip appears instantly</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...(W=(R=m.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var A,H,N;T.parameters={...T.parameters,docs:{...(A=T.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent arrow>
          <p>Tooltip with arrow</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...(N=(H=T.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var I,V,_;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">View details</Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p>
            See how tooltip will handle a bigger text. I hope there won't be any issues!
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...(_=(V=u.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const G=["Default","Top","Right","Bottom","Left","WithCustomDelay","WithArrow","WithLongerContent"];export{s as Bottom,i as Default,c as Left,p as Right,a as Top,T as WithArrow,m as WithCustomDelay,u as WithLongerContent,G as __namedExportsOrder,F as default};
