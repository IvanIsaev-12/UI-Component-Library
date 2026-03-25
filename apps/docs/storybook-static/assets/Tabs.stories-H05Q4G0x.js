import{R as e}from"./iframe-C8_2Xy3M.js";import{ab as s,ac as o,ad as a,ae as t,I as l}from"./index-RmIsQImm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BU_qSK9z.js";import"./index-CEj4hGs3.js";const P={title:"Components/Tabs",component:s,tags:["autodocs"]},r={render:()=>e.createElement(s,{defaultValue:"account",className:""},e.createElement(o,{className:"w-[450px]"},e.createElement(a,{value:"account",className:"flex-1"},"Account"),e.createElement(a,{value:"password",className:"flex-1"},"Password")),e.createElement(t,{value:"account",className:"space-y-4"},e.createElement("div",null,e.createElement("h3",{className:"text-lg font-semibold"},"Account Settings"),e.createElement("p",{className:"text-sm text-neutral-600 mt-1"},"Make changes to your account here. Click save when you're done.")),e.createElement(l,{id:"name",label:"Name",placeholder:"Enter your name"}),e.createElement(l,{id:"email",label:"Email",type:"email",placeholder:"Enter your email"})),e.createElement(t,{value:"password",className:"space-y-4"},e.createElement("div",null,e.createElement("h3",{className:"text-lg font-semibold"},"Password Settings"),e.createElement("p",{className:"text-sm text-neutral-600 mt-1"},"Change your password here. After saving, you'll be logged out.")),e.createElement(l,{id:"current-password",label:"Current Password",type:"password",placeholder:"Enter current password"}),e.createElement(l,{id:"new-password",label:"New Password",type:"password",placeholder:"Enter new password"})))},n={render:()=>e.createElement(s,{defaultValue:"overview",className:"w-[450px]"},e.createElement(o,{className:"w-[450px]!"},e.createElement(a,{value:"overview",className:"flex-1"},"Overview"),e.createElement(a,{value:"analytics",className:"flex-1"},"Analytics"),e.createElement(a,{value:"reports",className:"flex-1"},"Reports")),e.createElement(t,{value:"overview",className:"mt-4"},e.createElement("p",{className:"text-sm text-neutral-600"},"Overview dashboard showing key metrics and recent activity.")),e.createElement(t,{value:"analytics",className:"mt-4"},e.createElement("p",{className:"text-sm text-neutral-600"},"Detailed analytics and performance data.")),e.createElement(t,{value:"reports",className:"mt-4"},e.createElement("p",{className:"text-sm text-neutral-600"},"Generate and download custom reports.")))},c={render:()=>e.createElement(s,{defaultValue:"available",className:"w-full max-w-md"},e.createElement(o,{className:"w-full"},e.createElement(a,{value:"available",className:"flex-1"},"Available"),e.createElement(a,{value:"pending",className:"flex-1",disabled:!0},"Pending"),e.createElement(a,{value:"archived",className:"flex-1",disabled:!0},"Archived")),e.createElement(t,{value:"available",className:"mt-4"},e.createElement("p",{className:"text-sm text-neutral-600"},"These items are currently available. Other tabs are disabled.")))},m={render:()=>e.createElement(s,{defaultValue:"home",className:"w-full max-w-2xl"},e.createElement(o,null,e.createElement(a,{value:"home"},"Home"),e.createElement(a,{value:"products"},"Products"),e.createElement(a,{value:"services"},"Services"),e.createElement(a,{value:"about"},"About"),e.createElement(a,{value:"contact"},"Contact"),e.createElement(a,{value:"blog"},"Blog")),e.createElement(t,{value:"home",className:"mt-4"},e.createElement("p",{className:"text-sm text-neutral-600"},"Welcome to our homepage.")),e.createElement(t,{value:"products",className:"mt-4"},e.createElement("p",{className:"text-sm text-neutral-600"},"Browse our product catalog.")),e.createElement(t,{value:"services",className:"mt-4"},e.createElement("p",{className:"text-sm text-neutral-600"},"Explore our services.")),e.createElement(t,{value:"about",className:"mt-4"},e.createElement("p",{className:"text-sm text-neutral-600"},"Learn more about us.")),e.createElement(t,{value:"contact",className:"mt-4"},e.createElement("p",{className:"text-sm text-neutral-600"},"Get in touch with us.")),e.createElement(t,{value:"blog",className:"mt-4"},e.createElement("p",{className:"text-sm text-neutral-600"},"Read our latest posts.")))};var u,i,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="">
            <TabsList className="w-[450px]">
                <TabsTrigger value="account" className="flex-1">
                    Account
                </TabsTrigger>
                <TabsTrigger value="password" className="flex-1">
                    Password
                </TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold">Account Settings</h3>
                    <p className="text-sm text-neutral-600 mt-1">
                        Make changes to your account here. Click save when you're done.
                    </p>
                </div>
                <Input id="name" label="Name" placeholder="Enter your name" />
                <Input id="email" label="Email" type="email" placeholder="Enter your email" />
            </TabsContent>
            <TabsContent value="password" className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold">Password Settings</h3>
                    <p className="text-sm text-neutral-600 mt-1">
                        Change your password here. After saving, you'll be logged out.
                    </p>
                </div>
                <Input id="current-password" label="Current Password" type="password" placeholder="Enter current password" />
                <Input id="new-password" label="New Password" type="password" placeholder="Enter new password" />
            </TabsContent>
        </Tabs>
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,b,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview" className="w-[450px]">
            <TabsList className="w-[450px]!">
                <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                <TabsTrigger value="analytics" className="flex-1">Analytics</TabsTrigger>
                <TabsTrigger value="reports" className="flex-1">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
                <p className="text-sm text-neutral-600">
                    Overview dashboard showing key metrics and recent activity.
                </p>
            </TabsContent>
            <TabsContent value="analytics" className="mt-4">
                <p className="text-sm text-neutral-600">
                    Detailed analytics and performance data.
                </p>
            </TabsContent>
            <TabsContent value="reports" className="mt-4">
                <p className="text-sm text-neutral-600">
                    Generate and download custom reports.
                </p>
            </TabsContent>
        </Tabs>
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var T,g,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="available" className="w-full max-w-md">
            <TabsList className="w-full">
                <TabsTrigger value="available" className="flex-1">
                    Available
                </TabsTrigger>
                <TabsTrigger value="pending" className="flex-1" disabled>
                    Pending
                </TabsTrigger>
                <TabsTrigger value="archived" className="flex-1" disabled>
                    Archived
                </TabsTrigger>
            </TabsList>
            <TabsContent value="available" className="mt-4">
                <p className="text-sm text-neutral-600">
                    These items are currently available. Other tabs are disabled.
                </p>
            </TabsContent>
        </Tabs>
}`,...(N=(g=c.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var x,w,E;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="home" className="w-full max-w-2xl">
            <TabsList>
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
                <TabsTrigger value="blog">Blog</TabsTrigger>
            </TabsList>
            <TabsContent value="home" className="mt-4">
                <p className="text-sm text-neutral-600">Welcome to our homepage.</p>
            </TabsContent>
            <TabsContent value="products" className="mt-4">
                <p className="text-sm text-neutral-600">Browse our product catalog.</p>
            </TabsContent>
            <TabsContent value="services" className="mt-4">
                <p className="text-sm text-neutral-600">Explore our services.</p>
            </TabsContent>
            <TabsContent value="about" className="mt-4">
                <p className="text-sm text-neutral-600">Learn more about us.</p>
            </TabsContent>
            <TabsContent value="contact" className="mt-4">
                <p className="text-sm text-neutral-600">Get in touch with us.</p>
            </TabsContent>
            <TabsContent value="blog" className="mt-4">
                <p className="text-sm text-neutral-600">Read our latest posts.</p>
            </TabsContent>
        </Tabs>
}`,...(E=(w=m.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const L=["Default","Compact","WithDisabled","ManyTabs"];export{n as Compact,r as Default,m as ManyTabs,c as WithDisabled,L as __namedExportsOrder,P as default};
