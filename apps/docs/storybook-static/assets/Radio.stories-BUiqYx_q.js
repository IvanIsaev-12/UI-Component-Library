import{R as e}from"./iframe-CBzO8dBs.js";import{S as t}from"./DropdownMenu-COMoRqmJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-99C54_7m.js";import"./index-RaGzyqEA.js";const z={title:"Primitives/Radio",component:t,tags:["autodocs"]},n={render:()=>e.createElement("div",{className:"space-y-3"},e.createElement(t,{name:"gender",label:"Female",size:"md"}),e.createElement(t,{name:"gender",label:"Male",size:"md"}),e.createElement(t,{name:"gender",label:"Other",size:"md"}))},m={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement("div",null,e.createElement("h4",{className:"text-sm font-medium mb-2"},"Small"),e.createElement("div",{className:"space-y-2"},e.createElement(t,{name:"size-sm",label:"Option 1",size:"sm"}),e.createElement(t,{name:"size-sm",label:"Option 2",size:"sm"}))),e.createElement("div",null,e.createElement("h4",{className:"text-sm font-medium mb-2"},"Medium"),e.createElement("div",{className:"space-y-2"},e.createElement(t,{name:"size-md",label:"Option 1",size:"md"}),e.createElement(t,{name:"size-md",label:"Option 2",size:"md"}))),e.createElement("div",null,e.createElement("h4",{className:"text-sm font-medium mb-2"},"Large"),e.createElement("div",{className:"space-y-2"},e.createElement(t,{name:"size-lg",label:"Option 1",size:"lg"}),e.createElement(t,{name:"size-lg",label:"Option 2",size:"lg"}))))},l={render:()=>{const[a,i]=e.useState("pro");return e.createElement("div",{className:"max-w-md space-y-3 min-w-[300px]"},e.createElement("h3",{className:"text-lg font-semibold mb-4"},"Choose your plan"),e.createElement("label",{className:"flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-background-subtle transition-colors"},e.createElement(t,{name:"plan",value:"free",checked:a==="free",onChange:s=>i(s.target.value)}),e.createElement("div",{className:"flex-1"},e.createElement("div",{className:"font-medium"},"Free"),e.createElement("div",{className:"text-sm text-foreground-muted"},"Shuffle play • Ads included"),e.createElement("div",{className:"text-sm mt-1"},"Listen on mobile and desktop"),e.createElement("div",{className:"text-xs text-foreground-muted mt-1"},"Limited skips • No offline listening"),e.createElement("div",{className:"text-sm font-semibold mt-1"},"0 Ft/month"))),e.createElement("label",{className:"flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-background-subtle transition-colors"},e.createElement(t,{name:"plan",value:"pro",checked:a==="pro",onChange:s=>i(s.target.value)}),e.createElement("div",{className:"flex-1"},e.createElement("div",{className:"font-medium"},"Premium Individual"),e.createElement("div",{className:"text-sm text-foreground-muted"},"Ad-free music • Unlimited skips"),e.createElement("div",{className:"text-sm mt-1"},"Download songs and listen offline"),e.createElement("div",{className:"text-xs text-foreground-muted mt-1"},"1 account • High quality audio"),e.createElement("div",{className:"text-sm font-semibold mt-1"},"4490 Ft/month"))),e.createElement("label",{className:"flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-background-subtle transition-colors"},e.createElement(t,{name:"plan",value:"enterprise",checked:a==="enterprise",onChange:s=>i(s.target.value)}),e.createElement("div",{className:"flex-1"},e.createElement("div",{className:"font-medium"},"Premium Family"),e.createElement("div",{className:"text-sm text-foreground-muted"},"Up to 6 accounts • Ad-free music"),e.createElement("div",{className:"text-sm mt-1"},"Family mix playlist • Parental controls"),e.createElement("div",{className:"text-xs text-foreground-muted mt-1"},"Download & offline listening"),e.createElement("div",{className:"text-sm font-semibold mt-1"},"5690 Ft/month"))),a&&e.createElement("p",{className:"text-sm text-foreground-muted mt-4"},"Selected: ",e.createElement("span",{className:"font-medium text-foreground"},a)))}};var r,d,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
            <Radio name="gender" label="Female" size="md" />
            <Radio name="gender" label="Male" size="md" />
            <Radio name="gender" label="Other" size="md" />
        </div>
}`,...(o=(d=n.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var c,u,p;m.parameters={...m.parameters,docs:{...(c=m.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
            <div>
                <h4 className="text-sm font-medium mb-2">Small</h4>
                <div className="space-y-2">
                    <Radio name="size-sm" label="Option 1" size="sm" />
                    <Radio name="size-sm" label="Option 2" size="sm" />
                </div>
            </div>
            <div>
                <h4 className="text-sm font-medium mb-2">Medium</h4>
                <div className="space-y-2">
                    <Radio name="size-md" label="Option 1" size="md" />
                    <Radio name="size-md" label="Option 2" size="md" />
                </div>
            </div>
            <div>
                <h4 className="text-sm font-medium mb-2">Large</h4>
                <div className="space-y-2">
                    <Radio name="size-lg" label="Option 1" size="lg" />
                    <Radio name="size-lg" label="Option 2" size="lg" />
                </div>
            </div>
        </div>
}`,...(p=(u=m.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var v,f,g;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [plan, setPlan] = React.useState("pro");
    return <div className="max-w-md space-y-3 min-w-[300px]">
                <h3 className="text-lg font-semibold mb-4">Choose your plan</h3>
                <label className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-background-subtle transition-colors">
                    <Radio name="plan" value="free" checked={plan === "free"} onChange={e => setPlan(e.target.value)} />
                    <div className="flex-1">
                        <div className="font-medium">Free</div>
                        <div className="text-sm text-foreground-muted">Shuffle play • Ads included</div>
                        <div className="text-sm mt-1">Listen on mobile and desktop</div>
                        <div className="text-xs text-foreground-muted mt-1">Limited skips • No offline listening</div>
                        <div className="text-sm font-semibold mt-1">0 Ft/month</div>
                    </div>
                </label>

                <label className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-background-subtle transition-colors">
                    <Radio name="plan" value="pro" checked={plan === "pro"} onChange={e => setPlan(e.target.value)} />
                    <div className="flex-1">
                        <div className="font-medium">Premium Individual</div>
                        <div className="text-sm text-foreground-muted">Ad-free music • Unlimited skips</div>
                        <div className="text-sm mt-1">Download songs and listen offline</div>
                        <div className="text-xs text-foreground-muted mt-1">1 account • High quality audio</div>
                        <div className="text-sm font-semibold mt-1">4490 Ft/month</div>
                    </div>
                </label>

                <label className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-background-subtle transition-colors">
                    <Radio name="plan" value="enterprise" checked={plan === "enterprise"} onChange={e => setPlan(e.target.value)} />
                    <div className="flex-1">
                        <div className="font-medium">Premium Family</div>
                        <div className="text-sm text-foreground-muted">Up to 6 accounts • Ad-free music</div>
                        <div className="text-sm mt-1">Family mix playlist • Parental controls</div>
                        <div className="text-xs text-foreground-muted mt-1">Download & offline listening</div>
                        <div className="text-sm font-semibold mt-1">5690 Ft/month</div>
                    </div>
                </label>
                {plan && <p className="text-sm text-foreground-muted mt-4">
                        Selected: <span className="font-medium text-foreground">{plan}</span>
                    </p>}
            </div>;
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const y=["Default","DifferentSizes","SubscriptionPlan"];export{n as Default,m as DifferentSizes,l as SubscriptionPlan,y as __namedExportsOrder,z as default};
