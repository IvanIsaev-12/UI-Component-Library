import{R as e}from"./iframe-BsBO42-d.js";import{w as r,x as u,h as a,y as l,z as d,E as o,F as n,G as F,H,J as K,K as t,L as h,M as Z,N as S}from"./index-DjqJZFuD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DyRqqCoN.js";import"./index-BpW9T3rN.js";const ee={title:"Components/DropdownMenu",component:r,tags:["autodocs"]},p={render:()=>e.createElement(r,null,e.createElement(u,{asChild:!0},e.createElement(a,{variant:"outline"},"Open Menu")),e.createElement(l,null,e.createElement(d,null,"My Account"),e.createElement(o,null),e.createElement(n,null,"Profile"),e.createElement(n,null,"Billing"),e.createElement(n,null,"Team"),e.createElement(n,null,"Subscription")))},c={render:()=>e.createElement(r,null,e.createElement(u,{asChild:!0},e.createElement(a,{variant:"outline"},"File Menu")),e.createElement(l,{className:"w-56"},e.createElement(d,null,"Actions"),e.createElement(o,null),e.createElement(n,null,"New File",e.createElement(t,null,"⌘N")),e.createElement(n,null,"Save",e.createElement(t,null,"⌘S")),e.createElement(n,null,"Open",e.createElement(t,null,"⌘O")),e.createElement(o,null),e.createElement(n,null,"Print",e.createElement(t,null,"⌘P"))))},m={render:()=>{const[D,E]=e.useState(!0),[j,Q]=e.useState(!1),[X,Y]=e.useState(!1);return e.createElement(r,null,e.createElement(u,{asChild:!0},e.createElement(a,{variant:"outline"},"View Options")),e.createElement(l,{className:"w-56"},e.createElement(d,null,"Appearance"),e.createElement(o,null),e.createElement(h,{checked:D,onCheckedChange:E},"Status Bar"),e.createElement(h,{checked:j,onCheckedChange:Q},"Activity Bar"),e.createElement(h,{checked:X,onCheckedChange:Y},"Panel")))}},s={render:()=>{const[D,E]=e.useState("bottom");return e.createElement(r,null,e.createElement(u,{asChild:!0},e.createElement(a,{variant:"outline"},"Panel Position")),e.createElement(l,{className:"w-56"},e.createElement(d,null,"Panel Position"),e.createElement(o,null),e.createElement(Z,{value:D,onValueChange:E},e.createElement(S,{value:"top"},"Top"),e.createElement(S,{value:"bottom"},"Bottom"),e.createElement(S,{value:"right"},"Right"))))}},w={render:()=>e.createElement(r,null,e.createElement(u,{asChild:!0},e.createElement(a,{variant:"outline"},"More Actions")),e.createElement(l,{className:"w-56"},e.createElement(d,null,"Actions"),e.createElement(o,null),e.createElement(n,null,"New Tab"),e.createElement(n,null,"New Window"),e.createElement(o,null),e.createElement(F,null,e.createElement(H,null,"Share"),e.createElement(K,null,e.createElement(n,null,"Email link"),e.createElement(n,null,"Copy link"),e.createElement(o,null),e.createElement(n,null,"Social Media"))),e.createElement(o,null),e.createElement(n,null,"Settings")))},M={render:()=>e.createElement(r,null,e.createElement(u,{asChild:!0},e.createElement(a,{variant:"outline"},"Edit Menu")),e.createElement(l,{className:"w-56"},e.createElement(d,null,"Edit"),e.createElement(o,null),e.createElement(n,null,"Undo",e.createElement(t,null,"⌘Z")),e.createElement(n,{disabled:!0},"Redo",e.createElement(t,null,"⌘Y")),e.createElement(o,null),e.createElement(n,null,"Cut",e.createElement(t,null,"⌘X")),e.createElement(n,null,"Copy",e.createElement(t,null,"⌘C")),e.createElement(n,{disabled:!0},"Paste",e.createElement(t,null,"⌘V"))))},i={render:()=>e.createElement(r,null,e.createElement(u,{asChild:!0},e.createElement(a,{variant:"outline"},"User Menu")),e.createElement(l,{className:"w-56"},e.createElement(d,null,"john@example.com"),e.createElement(o,null),e.createElement(n,null,"Profile"),e.createElement(n,null,"Settings"),e.createElement(n,null,"Keyboard shortcuts"),e.createElement(o,null),e.createElement(n,null,"Team"),e.createElement(F,null,e.createElement(H,null,"Invite users"),e.createElement(K,null,e.createElement(n,null,"Email"),e.createElement(n,null,"Message"),e.createElement(o,null),e.createElement(n,null,"More..."))),e.createElement(o,null),e.createElement(n,null,"GitHub"),e.createElement(n,null,"Support"),e.createElement(n,{disabled:!0},"API"),e.createElement(o,null),e.createElement(n,{className:"text-danger-600"},"Log out",e.createElement(t,null,"⇧⌘Q"))))};var I,g,C;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(C=(g=p.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var b,B,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(B=c.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var P,T,k;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
                    <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
                        Status Bar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
                        Activity Bar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
                        Panel
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>;
  }
}`,...(k=(T=m.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var N,R,A;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(A=(R=s.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var L,y,x;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(x=(y=w.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var f,W,O;M.parameters={...M.parameters,docs:{...(f=M.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(O=(W=M.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var G,U,V;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(V=(U=i.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const ne=["Default","WithShortcuts","WithCheckboxes","WithRadioGroup","WithSubmenu","WithDisabledItems","UserMenu"];export{p as Default,i as UserMenu,m as WithCheckboxes,M as WithDisabledItems,s as WithRadioGroup,c as WithShortcuts,w as WithSubmenu,ne as __namedExportsOrder,ee as default};
