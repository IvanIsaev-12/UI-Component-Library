import{R as e}from"./iframe-CBzO8dBs.js";import{w as r,x as u,h as a,y as l,z as d,E as o,F as n,G as H,H as K,J as j,K as t,L as h,M as _,N as I}from"./DropdownMenu-COMoRqmJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-99C54_7m.js";import"./index-RaGzyqEA.js";const ne={title:"Components/DropdownMenu",component:r,tags:["autodocs"]},c={render:()=>e.createElement(r,null,e.createElement(u,{asChild:!0},e.createElement(a,{variant:"outline"},"Open Menu")),e.createElement(l,null,e.createElement(d,null,"My Account"),e.createElement(o,null),e.createElement(n,null,"Profile"),e.createElement(n,null,"Billing"),e.createElement(n,null,"Team"),e.createElement(n,null,"Subscription")))},m={render:()=>e.createElement(r,null,e.createElement(u,{asChild:!0},e.createElement(a,{variant:"outline"},"File Menu")),e.createElement(l,{className:"w-56"},e.createElement(d,null,"Actions"),e.createElement(o,null),e.createElement(n,null,"New File",e.createElement(t,null,"⌘N")),e.createElement(n,null,"Save",e.createElement(t,null,"⌘S")),e.createElement(n,null,"Open",e.createElement(t,null,"⌘O")),e.createElement(o,null),e.createElement(n,null,"Print",e.createElement(t,null,"⌘P"))))},s={render:()=>{const[E,S]=e.useState(!0),[Q,X]=e.useState(!1),[Y,Z]=e.useState(!1);return e.createElement(r,null,e.createElement(u,{asChild:!0},e.createElement(a,{variant:"outline"},"View Options")),e.createElement(l,{className:"w-56"},e.createElement(d,null,"Appearance"),e.createElement(o,null),e.createElement(h,{checked:E,onCheckedChange:S,onSelect:p=>p.preventDefault()},"Status Bar"),e.createElement(h,{checked:Q,onCheckedChange:X,onSelect:p=>p.preventDefault()},"Activity Bar"),e.createElement(h,{checked:Y,onCheckedChange:Z,onSelect:p=>p.preventDefault()},"Panel")))}},w={render:()=>{const[E,S]=e.useState("bottom");return e.createElement(r,null,e.createElement(u,{asChild:!0},e.createElement(a,{variant:"outline"},"Panel Position")),e.createElement(l,{className:"w-56"},e.createElement(d,null,"Panel Position"),e.createElement(o,null),e.createElement(_,{value:E,onValueChange:S},e.createElement(I,{value:"top"},"Top"),e.createElement(I,{value:"bottom"},"Bottom"),e.createElement(I,{value:"right"},"Right"))))}},M={render:()=>e.createElement(r,null,e.createElement(u,{asChild:!0},e.createElement(a,{variant:"outline"},"More Actions")),e.createElement(l,{className:"w-56"},e.createElement(d,null,"Actions"),e.createElement(o,null),e.createElement(n,null,"New Tab"),e.createElement(n,null,"New Window"),e.createElement(o,null),e.createElement(H,null,e.createElement(K,null,"Share"),e.createElement(j,null,e.createElement(n,null,"Email link"),e.createElement(n,null,"Copy link"),e.createElement(o,null),e.createElement(n,null,"Social Media"))),e.createElement(o,null),e.createElement(n,null,"Settings")))},i={render:()=>e.createElement(r,null,e.createElement(u,{asChild:!0},e.createElement(a,{variant:"outline"},"Edit Menu")),e.createElement(l,{className:"w-56"},e.createElement(d,null,"Edit"),e.createElement(o,null),e.createElement(n,null,"Undo",e.createElement(t,null,"⌘Z")),e.createElement(n,{disabled:!0},"Redo",e.createElement(t,null,"⌘Y")),e.createElement(o,null),e.createElement(n,null,"Cut",e.createElement(t,null,"⌘X")),e.createElement(n,null,"Copy",e.createElement(t,null,"⌘C")),e.createElement(n,{disabled:!0},"Paste",e.createElement(t,null,"⌘V"))))},D={render:()=>e.createElement(r,null,e.createElement(u,{asChild:!0},e.createElement(a,{variant:"outline"},"User Menu")),e.createElement(l,{className:"w-56"},e.createElement(d,null,"john@example.com"),e.createElement(o,null),e.createElement(n,null,"Profile"),e.createElement(n,null,"Settings"),e.createElement(n,null,"Keyboard shortcuts"),e.createElement(o,null),e.createElement(n,null,"Team"),e.createElement(H,null,e.createElement(K,null,"Invite users"),e.createElement(j,null,e.createElement(n,null,"Email"),e.createElement(n,null,"Message"),e.createElement(o,null),e.createElement(n,null,"More..."))),e.createElement(o,null),e.createElement(n,null,"GitHub"),e.createElement(n,null,"Support"),e.createElement(n,{disabled:!0},"API"),e.createElement(o,null),e.createElement(n,{className:"text-danger-600"},"Log out",e.createElement(t,null,"⇧⌘Q"))))};var g,C,b;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
}`,...(b=(C=c.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var v,B,P;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">File Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    New File
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Save
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Open
                    <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Print
                    <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
}`,...(P=(B=m.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var T,k,N;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [showStatusBar, setShowStatusBar] = React.useState(true);
    const [showActivityBar, setShowActivityBar] = React.useState(false);
    const [showPanel, setShowPanel] = React.useState(false);
    return <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">View Options</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar} onSelect={(e: Event) => e.preventDefault()}>
                        Status Bar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar} onSelect={(e: Event) => e.preventDefault()}>
                        Activity Bar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel} onSelect={(e: Event) => e.preventDefault()}>
                        Panel
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>;
  }
}`,...(N=(k=s.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var R,A,f;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [position, setPosition] = React.useState("bottom");
    return <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Panel Position</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>;
  }
}`,...(f=(A=w.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var L,y,x;M.parameters={...M.parameters,docs:{...(L=M.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">More Actions</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>New Tab</DropdownMenuItem>
                <DropdownMenuItem>New Window</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuItem>Email link</DropdownMenuItem>
                        <DropdownMenuItem>Copy link</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Social Media</DropdownMenuItem>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
}`,...(x=(y=M.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var W,O,G;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Edit Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Edit</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Undo
                    <DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                    Redo
                    <DropdownMenuShortcut>⌘Y</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Cut
                    <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Copy
                    <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                    Paste
                    <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
}`,...(G=(O=i.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var U,V,F;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">User Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>john@example.com</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Keyboard shortcuts</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-danger-600">
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
}`,...(F=(V=D.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const oe=["Default","WithShortcuts","WithCheckboxes","WithRadioGroup","WithSubmenu","WithDisabledItems","UserMenu"];export{c as Default,D as UserMenu,s as WithCheckboxes,i as WithDisabledItems,w as WithRadioGroup,m as WithShortcuts,M as WithSubmenu,oe as __namedExportsOrder,ne as default};
