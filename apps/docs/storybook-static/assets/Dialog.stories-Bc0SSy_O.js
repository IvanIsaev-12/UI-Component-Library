import{R as e}from"./iframe-CBzO8dBs.js";import{D as o,o as i,h as t,p as s,q as c,r as u,s as g,t as m,u as B,I as r}from"./DropdownMenu-COMoRqmJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-99C54_7m.js";import"./index-RaGzyqEA.js";const S={title:"Components/Dialog",component:o,tags:["autodocs"]},a={render:()=>e.createElement(o,null,e.createElement(i,{asChild:!0},e.createElement(t,null,"Open Dialog")),e.createElement(s,null,e.createElement(c,null,e.createElement(u,null," City "),e.createElement(g,null," Select a city ")),e.createElement(m,null,"Dialog")))},n={render:()=>e.createElement(o,null,e.createElement(i,{asChild:!0},e.createElement(t,{variant:"danger"},"Delete Account")),e.createElement(s,null,e.createElement(c,null,e.createElement(u,null,"Are you sure?"),e.createElement(g,null,"This action cannot be undone. This will permanently delete your account.")),e.createElement(m,null,e.createElement(B,{asChild:!0},e.createElement(t,{variant:"outline"},"Cancel")),e.createElement(t,{variant:"danger"},"Delete"))))},l={render:()=>e.createElement(o,null,e.createElement(i,{asChild:!0},e.createElement(t,{variant:"primary"},"Open")),e.createElement(s,null,e.createElement(c,null,e.createElement(u,null,"Create Account"),e.createElement(g,null,"Fill in your details below")),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(r,{label:"Username",id:"username"}),e.createElement(r,{label:"Email",id:"email",type:"email"}),e.createElement(r,{label:"Password",id:"password",type:"password"})),e.createElement(m,null,e.createElement(B,{asChild:!0},e.createElement(t,{variant:"outline"},"Cancel")),e.createElement(t,{variant:"success"},"Submit"))))};var D,d,p;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Dialog>
            <DialogTrigger asChild>
                <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle> City </DialogTitle>
                    <DialogDescription> Select a city </DialogDescription>
                </DialogHeader>
                <DialogFooter>Dialog</DialogFooter>
            </DialogContent>
        </Dialog>
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var E,C,y;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Dialog>
            <DialogTrigger asChild>
                <Button variant="danger">Delete Account</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="danger">Delete</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
}`,...(y=(C=n.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var T,h,v;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Dialog>
            <DialogTrigger asChild>
                <Button variant="primary">Open</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Account</DialogTitle>
                    <DialogDescription>Fill in your details below</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    <Input label="Username" id="username" />
                    <Input label="Email" id="email" type="email" />
                    <Input label="Password" id="password" type="password" />
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="success">Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const x=["Default","Destructive","WithForm"];export{a as Default,n as Destructive,l as WithForm,x as __namedExportsOrder,S as default};
