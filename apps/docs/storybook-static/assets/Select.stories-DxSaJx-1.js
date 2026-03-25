import{R as e}from"./iframe-C8_2Xy3M.js";import{U as l,V as a,W as n,X as c,Y as t,Z as E,_ as v,$ as K}from"./index-RmIsQImm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BU_qSK9z.js";import"./index-CEj4hGs3.js";const X={title:"Components/Select",component:l,tags:["autodocs"]},r={render:()=>e.createElement(l,null,e.createElement(a,{className:"w-[280px]"},e.createElement(n,{placeholder:"Select a fruit"})),e.createElement(c,null,e.createElement(t,{value:"apple"},"Apple"),e.createElement(t,{value:"banana"},"Banana"),e.createElement(t,{value:"orange"},"Orange"),e.createElement(t,{value:"grape"},"Grape"),e.createElement(t,{value:"mango"},"Mango")))},m={render:()=>e.createElement(l,null,e.createElement(a,{className:"w-[280px]"},e.createElement(n,{placeholder:"Select a timezone"})),e.createElement(c,null,e.createElement(E,null,e.createElement(v,null,"North America"),e.createElement(t,{value:"est"},"Eastern Standard Time (EST)"),e.createElement(t,{value:"cst"},"Central Standard Time (CST)"),e.createElement(t,{value:"mst"},"Mountain Standard Time (MST)"),e.createElement(t,{value:"pst"},"Pacific Standard Time (PST)")),e.createElement(K,null),e.createElement(E,null,e.createElement(v,null,"Europe"),e.createElement(t,{value:"gmt"},"Greenwich Mean Time (GMT)"),e.createElement(t,{value:"cet"},"Central European Time (CET)"),e.createElement(t,{value:"eet"},"Eastern European Time (EET)"))))},u={render:()=>e.createElement(l,{defaultValue:"banana"},e.createElement(a,{className:"w-[280px]"},e.createElement(n,{placeholder:"Select a fruit"})),e.createElement(c,null,e.createElement(t,{value:"apple"},"Apple"),e.createElement(t,{value:"banana"},"Banana"),e.createElement(t,{value:"orange"},"Orange"),e.createElement(t,{value:"grape"},"Grape")))},S={render:()=>e.createElement(l,{disabled:!0},e.createElement(a,{className:"w-[280px]"},e.createElement(n,{placeholder:"Select a fruit"})),e.createElement(c,null,e.createElement(t,{value:"apple"},"Apple"),e.createElement(t,{value:"banana"},"Banana"),e.createElement(t,{value:"orange"},"Orange")))},s={render:()=>e.createElement(l,null,e.createElement(a,{className:"w-[280px]"},e.createElement(n,{placeholder:"Select a fruit"})),e.createElement(c,null,e.createElement(t,{value:"apple"},"Apple"),e.createElement(t,{value:"banana",disabled:!0},"Banana (Out of stock)"),e.createElement(t,{value:"orange"},"Orange"),e.createElement(t,{value:"grape",disabled:!0},"Grape (Out of stock)"),e.createElement(t,{value:"mango"},"Mango")))},o={render:()=>{const[p,F]=e.useState("");return e.createElement("div",{className:"space-y-4 w-[280px]"},e.createElement("div",null,e.createElement("label",{className:"text-sm font-medium mb-2 block"},"Country"),e.createElement(l,{value:p,onValueChange:F},e.createElement(a,null,e.createElement(n,{placeholder:"Select your country"})),e.createElement(c,null,e.createElement(t,{value:"us"},"United States"),e.createElement(t,{value:"uk"},"United Kingdom"),e.createElement(t,{value:"ca"},"Canada"),e.createElement(t,{value:"au"},"Australia"),e.createElement(t,{value:"de"},"Germany"),e.createElement(t,{value:"fr"},"France")))),p&&e.createElement("p",{className:"text-sm text-neutral-600"},"Selected: ",p))}},i={render:()=>e.createElement(l,null,e.createElement(a,{className:"w-[280px]"},e.createElement(n,{placeholder:"Select a country"})),e.createElement(c,null,e.createElement(t,{value:"us"},"United States"),e.createElement(t,{value:"uk"},"United Kingdom"),e.createElement(t,{value:"ca"},"Canada"),e.createElement(t,{value:"au"},"Australia"),e.createElement(t,{value:"de"},"Germany"),e.createElement(t,{value:"fr"},"France"),e.createElement(t,{value:"jp"},"Japan"),e.createElement(t,{value:"cn"},"China"),e.createElement(t,{value:"in"},"India"),e.createElement(t,{value:"br"},"Brazil"),e.createElement(t,{value:"mx"},"Mexico"),e.createElement(t,{value:"es"},"Spain"),e.createElement(t,{value:"it"},"Italy"),e.createElement(t,{value:"ru"},"Russia"),e.createElement(t,{value:"za"},"South Africa")))},d={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"w-[280px]"},e.createElement("label",{className:"text-sm font-medium mb-2 block"},"Size"),e.createElement(l,{defaultValue:"m"},e.createElement(a,null,e.createElement(n,null)),e.createElement(c,null,e.createElement(t,{value:"xs"},"Extra Small"),e.createElement(t,{value:"s"},"Small"),e.createElement(t,{value:"m"},"Medium"),e.createElement(t,{value:"l"},"Large"),e.createElement(t,{value:"xl"},"Extra Large")))),e.createElement("div",{className:"w-[280px]"},e.createElement("label",{className:"text-sm font-medium mb-2 block"},"Color"),e.createElement(l,{defaultValue:"blue"},e.createElement(a,null,e.createElement(n,null)),e.createElement(c,null,e.createElement(t,{value:"red"},"Red"),e.createElement(t,{value:"blue"},"Blue"),e.createElement(t,{value:"green"},"Green"),e.createElement(t,{value:"black"},"Black"),e.createElement(t,{value:"white"},"White")))),e.createElement("div",{className:"w-[280px]"},e.createElement("label",{className:"text-sm font-medium mb-2 block"},"Quantity"),e.createElement(l,{defaultValue:"1"},e.createElement(a,null,e.createElement(n,null)),e.createElement(c,null,e.createElement(t,{value:"1"},"1"),e.createElement(t,{value:"2"},"2"),e.createElement(t,{value:"3"},"3"),e.createElement(t,{value:"4"},"4"),e.createElement(t,{value:"5"},"5")))))};var I,g,b;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
                <SelectItem value="mango">Mango</SelectItem>
            </SelectContent>
        </Select>
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var T,x,C;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                    <SelectLabel>Europe</SelectLabel>
                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                    <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
}`,...(C=(x=m.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,h,N;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Select defaultValue="banana">
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
            </SelectContent>
        </Select>
}`,...(N=(h=u.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var y,w,V;S.parameters={...S.parameters,docs:{...(y=S.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Select disabled>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
        </Select>
}`,...(V=(w=S.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var G,k,M;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana" disabled>
                    Banana (Out of stock)
                </SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape" disabled>
                    Grape (Out of stock)
                </SelectItem>
                <SelectItem value="mango">Mango</SelectItem>
            </SelectContent>
        </Select>
}`,...(M=(k=s.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var A,B,L;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [country, setCountry] = React.useState("");
    return <div className="space-y-4 w-[280px]">
                <div>
                    <label className="text-sm font-medium mb-2 block">Country</label>
                    <Select value={country} onValueChange={setCountry}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                            <SelectItem value="de">Germany</SelectItem>
                            <SelectItem value="fr">France</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                {country && <p className="text-sm text-neutral-600">Selected: {country}</p>}
            </div>;
  }
}`,...(L=(B=o.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var O,U,W;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
                <SelectItem value="fr">France</SelectItem>
                <SelectItem value="jp">Japan</SelectItem>
                <SelectItem value="cn">China</SelectItem>
                <SelectItem value="in">India</SelectItem>
                <SelectItem value="br">Brazil</SelectItem>
                <SelectItem value="mx">Mexico</SelectItem>
                <SelectItem value="es">Spain</SelectItem>
                <SelectItem value="it">Italy</SelectItem>
                <SelectItem value="ru">Russia</SelectItem>
                <SelectItem value="za">South Africa</SelectItem>
            </SelectContent>
        </Select>
}`,...(W=(U=i.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var z,D,R;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
            <div className="w-[280px]">
                <label className="text-sm font-medium mb-2 block">Size</label>
                <Select defaultValue="m">
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="xs">Extra Small</SelectItem>
                        <SelectItem value="s">Small</SelectItem>
                        <SelectItem value="m">Medium</SelectItem>
                        <SelectItem value="l">Large</SelectItem>
                        <SelectItem value="xl">Extra Large</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="w-[280px]">
                <label className="text-sm font-medium mb-2 block">Color</label>
                <Select defaultValue="blue">
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="red">Red</SelectItem>
                        <SelectItem value="blue">Blue</SelectItem>
                        <SelectItem value="green">Green</SelectItem>
                        <SelectItem value="black">Black</SelectItem>
                        <SelectItem value="white">White</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="w-[280px]">
                <label className="text-sm font-medium mb-2 block">Quantity</label>
                <Select defaultValue="1">
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
}`,...(R=(D=d.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const Y=["Default","WithGroups","WithDefaultValue","Disabled","WithDisabledItems","FormExample","LongList","MultipleSelects"];export{r as Default,S as Disabled,o as FormExample,i as LongList,d as MultipleSelects,u as WithDefaultValue,s as WithDisabledItems,m as WithGroups,Y as __namedExportsOrder,X as default};
