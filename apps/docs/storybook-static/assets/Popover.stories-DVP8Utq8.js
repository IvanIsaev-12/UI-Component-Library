import{R as e}from"./iframe-CBzO8dBs.js";import{P as t,O as n,h as a,Q as r,n as p}from"./DropdownMenu-COMoRqmJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-99C54_7m.js";import"./index-RaGzyqEA.js";const A={title:"Components/Popover",component:t,tags:["autodocs"]},o={render:()=>e.createElement(t,null,e.createElement(n,{asChild:!0},e.createElement(a,{variant:"outline"},"Open Popover")),e.createElement(r,null,e.createElement("div",{className:"space-y-2"},e.createElement("h4",{className:"font-medium text-sm"},"Popover Title"),e.createElement("p",{className:"text-sm text-neutral-600"},"This is a popover with some content. You can put any content you want here."))))},s={render:()=>e.createElement(t,null,e.createElement(n,{asChild:!0},e.createElement(a,{variant:"outline"},"Update dimensions")),e.createElement(r,null,e.createElement("div",{className:"space-y-4"},e.createElement("div",null,e.createElement("h4",{className:"font-medium text-sm mb-2"},"Dimensions"),e.createElement("p",{className:"text-xs text-neutral-600 mb-3"},"Set the dimensions for the layer.")),e.createElement("div",{className:"space-y-2"},e.createElement("div",{className:"flex gap-2 items-center"},e.createElement("label",{htmlFor:"width",className:"text-sm w-16"},"Width"),e.createElement("input",{id:"width",type:"number",defaultValue:"100",className:"flex-1 h-8 rounded-md border border-neutral-300 px-2 text-sm"})),e.createElement("div",{className:"flex gap-2 items-center"},e.createElement("label",{htmlFor:"height",className:"text-sm w-16"},"Height"),e.createElement("input",{id:"height",type:"number",defaultValue:"100",className:"flex-1 h-8 rounded-md border border-neutral-300 px-2 text-sm"}))))))},l={render:()=>e.createElement("div",{className:"flex gap-4 items-center justify-center h-64"},e.createElement(t,null,e.createElement(n,{asChild:!0},e.createElement(a,{variant:"outline"},"Top")),e.createElement(r,{side:"top"},e.createElement("p",{className:"text-sm"},"Content appears on top"))),e.createElement(t,null,e.createElement(n,{asChild:!0},e.createElement(a,{variant:"outline"},"Right")),e.createElement(r,{side:"right"},e.createElement("p",{className:"text-sm"},"Content appears on right"))),e.createElement(t,null,e.createElement(n,{asChild:!0},e.createElement(a,{variant:"outline"},"Bottom")),e.createElement(r,{side:"bottom"},e.createElement("p",{className:"text-sm"},"Content appears on bottom"))),e.createElement(t,null,e.createElement(n,{asChild:!0},e.createElement(a,{variant:"outline"},"Left")),e.createElement(r,{side:"left"},e.createElement("p",{className:"text-sm"},"Content appears on left"))))},i={render:()=>e.createElement(t,null,e.createElement(n,{asChild:!0},e.createElement(a,{variant:"outline"},"Wide Popover")),e.createElement(r,{className:"w-96"},e.createElement("div",{className:"space-y-2"},e.createElement("h4",{className:"font-medium text-sm"},"Custom Width"),e.createElement("p",{className:"text-sm text-neutral-600"},"This popover has a custom width applied using className. You can make it as wide or narrow as you need for your content."))))},m={render:()=>e.createElement(t,null,e.createElement(n,{asChild:!0},e.createElement(a,{variant:"outline"},"Checkbox")),e.createElement(r,{className:"w-96"},e.createElement("div",{className:"space-y-3"},e.createElement(p,{label:"Candidate 1",id:"popover-candidate-1"}),e.createElement(p,{label:"Candidate 2",id:"popover-candidate-2"}),e.createElement(p,{label:"Candidate 3",id:"popover-candidate-3"}))))},c={render:()=>e.createElement(t,null,e.createElement(n,{asChild:!0},e.createElement(a,{variant:"outline"},"View Options")),e.createElement(r,null,e.createElement("div",{className:"space-y-2"},e.createElement("h4",{className:"font-medium text-sm mb-2"},"Quick Actions"),e.createElement("ul",{className:"space-y-1"},e.createElement("li",{className:"text-sm p-2 hover:bg-neutral-100 rounded cursor-pointer"},"Edit profile"),e.createElement("li",{className:"text-sm p-2 hover:bg-neutral-100 rounded cursor-pointer"},"Account settings"),e.createElement("li",{className:"text-sm p-2 hover:bg-neutral-100 rounded cursor-pointer"},"Notifications"),e.createElement("li",{className:"text-sm p-2 hover:bg-neutral-100 rounded cursor-pointer text-danger-600"},"Sign out")))))};var d,u,v;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="space-y-2">
                    <h4 className="font-medium text-sm">Popover Title</h4>
                    <p className="text-sm text-neutral-600">
                        This is a popover with some content. You can put any content you want here.
                    </p>
                </div>
            </PopoverContent>
        </Popover>
}`,...(v=(u=o.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var h,g,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Update dimensions</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="space-y-4">
                    <div>
                        <h4 className="font-medium text-sm mb-2">Dimensions</h4>
                        <p className="text-xs text-neutral-600 mb-3">
                            Set the dimensions for the layer.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex gap-2 items-center">
                            <label htmlFor="width" className="text-sm w-16">Width</label>
                            <input id="width" type="number" defaultValue="100" className="flex-1 h-8 rounded-md border border-neutral-300 px-2 text-sm" />
                        </div>
                        <div className="flex gap-2 items-center">
                            <label htmlFor="height" className="text-sm w-16">Height</label>
                            <input id="height" type="number" defaultValue="100" className="flex-1 h-8 rounded-md border border-neutral-300 px-2 text-sm" />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var E,N,P;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center justify-center h-64">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Top</Button>
                </PopoverTrigger>
                <PopoverContent side="top">
                    <p className="text-sm">Content appears on top</p>
                </PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Right</Button>
                </PopoverTrigger>
                <PopoverContent side="right">
                    <p className="text-sm">Content appears on right</p>
                </PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Bottom</Button>
                </PopoverTrigger>
                <PopoverContent side="bottom">
                    <p className="text-sm">Content appears on bottom</p>
                </PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Left</Button>
                </PopoverTrigger>
                <PopoverContent side="left">
                    <p className="text-sm">Content appears on left</p>
                </PopoverContent>
            </Popover>
        </div>
}`,...(P=(N=l.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var C,b,f;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Wide Popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-96">
                <div className="space-y-2">
                    <h4 className="font-medium text-sm">Custom Width</h4>
                    <p className="text-sm text-neutral-600">
                        This popover has a custom width applied using className. You can make it as wide or narrow as you need for your content.
                    </p>
                </div>
            </PopoverContent>
        </Popover>
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,T,w;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Checkbox</Button>
            </PopoverTrigger>
            <PopoverContent className="w-96">
                <div className="space-y-3">
                    <Checkbox label="Candidate 1" id="popover-candidate-1" />
                    <Checkbox label="Candidate 2" id="popover-candidate-2" />
                    <Checkbox label="Candidate 3" id="popover-candidate-3" />
                </div>
            </PopoverContent>
        </Popover>
}`,...(w=(T=m.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var B,W,k;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">View Options</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="space-y-2">
                    <h4 className="font-medium text-sm mb-2">Quick Actions</h4>
                    <ul className="space-y-1">
                        <li className="text-sm p-2 hover:bg-neutral-100 rounded cursor-pointer">
                            Edit profile
                        </li>
                        <li className="text-sm p-2 hover:bg-neutral-100 rounded cursor-pointer">
                            Account settings
                        </li>
                        <li className="text-sm p-2 hover:bg-neutral-100 rounded cursor-pointer">
                            Notifications
                        </li>
                        <li className="text-sm p-2 hover:bg-neutral-100 rounded cursor-pointer text-danger-600">
                            Sign out
                        </li>
                    </ul>
                </div>
            </PopoverContent>
        </Popover>
}`,...(k=(W=c.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};const L=["Default","WithForm","DifferentSides","CustomWidth","WithCheckbox","WithList"];export{i as CustomWidth,o as Default,l as DifferentSides,m as WithCheckbox,s as WithForm,c as WithList,L as __namedExportsOrder,A as default};
