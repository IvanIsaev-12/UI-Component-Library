import{R as e}from"./iframe-BsBO42-d.js";import{D as o,o as i,h as t,p as c,q as s,r as g,s as u,t as D,u as y,I as r}from"./index-DjqJZFuD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DyRqqCoN.js";import"./index-BpW9T3rN.js";const w={title:"Components/Dialog",component:o,tags:["autodocs"]},a={render:()=>e.createElement(o,null,e.createElement(i,{asChild:!0},e.createElement(t,null,"Open Dialog")),e.createElement(c,null,e.createElement(s,null,e.createElement(g,null," City "),e.createElement(u,null," Select a city ")),e.createElement(D,null,"Dialog")))},n={render:()=>e.createElement(o,null,e.createElement(i,{asChild:!0},e.createElement(t,{variant:"danger"},"Delete Account")),e.createElement(c,null,e.createElement(s,null,e.createElement(g,null,"Are you sure?"),e.createElement(u,null,"This action cannot be undone. This will permanently delete your account.")),e.createElement(D,null,e.createElement(y,{asChild:!0},e.createElement(t,{variant:"outline"},"Cancel")),e.createElement(t,{variant:"danger"},"Delete"))))},l={render:()=>e.createElement(o,null,e.createElement(i,{asChild:!0},e.createElement(t,{variant:"primary"},"Open")),e.createElement(c,null,e.createElement(s,null,e.createElement(g,null,"Create Account"),e.createElement(u,null,"Fill in your details below")),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(r,{label:"Username"}),e.createElement(r,{label:"Email"}),e.createElement(r,{label:"Password"})),e.createElement(D,null,e.createElement(y,{asChild:!0},e.createElement(t,{variant:"outline"},"Cancel")),e.createElement(t,{variant:"success"},"Submit"))))};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var E,C,T;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var h,v,B;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
                    <Input label="Username" />
                    <Input label="Email" />
                    <Input label="Password" />
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="success">Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
}`,...(B=(v=l.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};const x=["Default","Destructive","WithForm"];export{a as Default,n as Destructive,l as WithForm,x as __namedExportsOrder,w as default};
