import{R as e}from"./iframe-BsBO42-d.js";import{U as l,V as a,W as n,X as c,Y as t,Z as E,_ as v,$ as q}from"./index-DjqJZFuD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DyRqqCoN.js";import"./index-BpW9T3rN.js";const Q={title:"Components/Select",component:l,tags:["autodocs"]},m={render:()=>e.createElement(l,null,e.createElement(a,{className:"w-[280px]","aria-label":"Select a fruit"},e.createElement(n,{placeholder:"Select a fruit"})),e.createElement(c,null,e.createElement(t,{value:"apple"},"Apple"),e.createElement(t,{value:"banana"},"Banana"),e.createElement(t,{value:"orange"},"Orange"),e.createElement(t,{value:"grape"},"Grape"),e.createElement(t,{value:"mango"},"Mango")))},u={render:()=>e.createElement(l,null,e.createElement(a,{className:"w-[280px]","aria-label":"Select a timezone"},e.createElement(n,{placeholder:"Select a timezone"})),e.createElement(c,null,e.createElement(E,null,e.createElement(v,null,"North America"),e.createElement(t,{value:"est"},"Eastern Standard Time (EST)"),e.createElement(t,{value:"cst"},"Central Standard Time (CST)"),e.createElement(t,{value:"mst"},"Mountain Standard Time (MST)"),e.createElement(t,{value:"pst"},"Pacific Standard Time (PST)")),e.createElement(q,null),e.createElement(E,null,e.createElement(v,null,"Europe"),e.createElement(t,{value:"gmt"},"Greenwich Mean Time (GMT)"),e.createElement(t,{value:"cet"},"Central European Time (CET)"),e.createElement(t,{value:"eet"},"Eastern European Time (EET)"))))},S={render:()=>e.createElement(l,{defaultValue:"banana"},e.createElement(a,{className:"w-[280px]","aria-label":"Select a fruit"},e.createElement(n,{placeholder:"Select a fruit"})),e.createElement(c,null,e.createElement(t,{value:"apple"},"Apple"),e.createElement(t,{value:"banana"},"Banana"),e.createElement(t,{value:"orange"},"Orange"),e.createElement(t,{value:"grape"},"Grape")))},s={render:()=>e.createElement(l,{disabled:!0},e.createElement(a,{className:"w-[280px]","aria-label":"Select a fruit"},e.createElement(n,{placeholder:"Select a fruit"})),e.createElement(c,null,e.createElement(t,{value:"apple"},"Apple"),e.createElement(t,{value:"banana"},"Banana"),e.createElement(t,{value:"orange"},"Orange")))},o={render:()=>e.createElement(l,null,e.createElement(a,{className:"w-[280px]","aria-label":"Select a fruit"},e.createElement(n,{placeholder:"Select a fruit"})),e.createElement(c,null,e.createElement(t,{value:"apple"},"Apple"),e.createElement(t,{value:"banana",disabled:!0},"Banana (Out of stock)"),e.createElement(t,{value:"orange"},"Orange"),e.createElement(t,{value:"grape",disabled:!0},"Grape (Out of stock)"),e.createElement(t,{value:"mango"},"Mango")))},i={render:()=>{const[r,R]=e.useState("");return e.createElement("div",{className:"space-y-4 w-[280px]"},e.createElement("div",null,e.createElement("label",{htmlFor:r,className:"text-sm font-medium mb-2 block"},"Country"),e.createElement(l,{value:r,onValueChange:R},e.createElement(a,{"aria-label":"Select country"},e.createElement(n,{placeholder:"Select your country"})),e.createElement(c,null,e.createElement(t,{value:"us"},"United States"),e.createElement(t,{value:"uk"},"United Kingdom"),e.createElement(t,{value:"ca"},"Canada"),e.createElement(t,{value:"au"},"Australia"),e.createElement(t,{value:"de"},"Germany"),e.createElement(t,{value:"fr"},"France")))),r&&e.createElement("p",{className:"text-sm text-neutral-600"},"Selected: ",r))}},d={render:()=>e.createElement(l,null,e.createElement(a,{className:"w-[280px]","aria-label":"Select a country"},e.createElement(n,{placeholder:"Select a country"})),e.createElement(c,null,e.createElement(t,{value:"us"},"United States"),e.createElement(t,{value:"uk"},"United Kingdom"),e.createElement(t,{value:"ca"},"Canada"),e.createElement(t,{value:"au"},"Australia"),e.createElement(t,{value:"de"},"Germany"),e.createElement(t,{value:"fr"},"France"),e.createElement(t,{value:"jp"},"Japan"),e.createElement(t,{value:"cn"},"China"),e.createElement(t,{value:"in"},"India"),e.createElement(t,{value:"br"},"Brazil"),e.createElement(t,{value:"mx"},"Mexico"),e.createElement(t,{value:"es"},"Spain"),e.createElement(t,{value:"it"},"Italy"),e.createElement(t,{value:"ru"},"Russia"),e.createElement(t,{value:"za"},"South Africa")))},p={render:()=>e.createElement("div",{className:"space-y-4"},e.createElement("div",{className:"w-[280px]"},e.createElement("label",{htmlFor:"size-select",className:"text-sm font-medium mb-2 block"},"Size"),e.createElement(l,{defaultValue:"m"},e.createElement(a,{id:"size-select"},e.createElement(n,null)),e.createElement(c,null,e.createElement(t,{value:"xs"},"Extra Small"),e.createElement(t,{value:"s"},"Small"),e.createElement(t,{value:"m"},"Medium"),e.createElement(t,{value:"l"},"Large"),e.createElement(t,{value:"xl"},"Extra Large")))),e.createElement("div",{className:"w-[280px]"},e.createElement("label",{htmlFor:"color-select",className:"text-sm font-medium mb-2 block"},"Color"),e.createElement(l,{defaultValue:"blue"},e.createElement(a,{id:"color-select"},e.createElement(n,null)),e.createElement(c,null,e.createElement(t,{value:"red"},"Red"),e.createElement(t,{value:"blue"},"Blue"),e.createElement(t,{value:"green"},"Green"),e.createElement(t,{value:"black"},"Black"),e.createElement(t,{value:"white"},"White")))),e.createElement("div",{className:"w-[280px]"},e.createElement("label",{htmlFor:"quantity-select",className:"text-sm font-medium mb-2 block"},"Quantity"),e.createElement(l,{defaultValue:"1"},e.createElement(a,{id:"quantity-select"},e.createElement(n,null)),e.createElement(c,null,e.createElement(t,{value:"1"},"1"),e.createElement(t,{value:"2"},"2"),e.createElement(t,{value:"3"},"3"),e.createElement(t,{value:"4"},"4"),e.createElement(t,{value:"5"},"5")))))};var I,g,b;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Select>
            <SelectTrigger className="w-[280px]" aria-label="Select a fruit">
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
}`,...(b=(g=m.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,T,x;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Select>
            <SelectTrigger className="w-[280px]" aria-label="Select a timezone">
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
}`,...(x=(T=u.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var C,h,y;S.parameters={...S.parameters,docs:{...(C=S.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Select defaultValue="banana">
            <SelectTrigger className="w-[280px]" aria-label="Select a fruit">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
            </SelectContent>
        </Select>
}`,...(y=(h=S.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var N,w,V;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Select disabled>
            <SelectTrigger className="w-[280px]" aria-label="Select a fruit">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
        </Select>
}`,...(V=(w=s.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var G,k,M;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Select>
            <SelectTrigger className="w-[280px]" aria-label="Select a fruit">
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
}`,...(M=(k=o.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var A,z,B;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [country, setCountry] = React.useState("");
    return <div className="space-y-4 w-[280px]">
                <div>
                    <label htmlFor={country} className="text-sm font-medium mb-2 block">Country</label>
                    <Select value={country} onValueChange={setCountry}>
                        <SelectTrigger aria-label="Select country">
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
}`,...(B=(z=i.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var F,L,O;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Select>
            <SelectTrigger className="w-[280px]" aria-label="Select a country">
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
}`,...(O=(L=d.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var U,W,D;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
            <div className="w-[280px]">
                <label htmlFor="size-select" className="text-sm font-medium mb-2 block">Size</label>
                <Select defaultValue="m">
                    <SelectTrigger id="size-select">
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
                <label htmlFor="color-select" className="text-sm font-medium mb-2 block">Color</label>
                <Select defaultValue="blue">
                    <SelectTrigger id="color-select">
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
                <label htmlFor="quantity-select" className="text-sm font-medium mb-2 block">Quantity</label>
                <Select defaultValue="1">
                    <SelectTrigger id="quantity-select">
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
}`,...(D=(W=p.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};const X=["Default","WithGroups","WithDefaultValue","Disabled","WithDisabledItems","FormExample","LongList","MultipleSelects"];export{m as Default,s as Disabled,i as FormExample,d as LongList,p as MultipleSelects,S as WithDefaultValue,o as WithDisabledItems,u as WithGroups,X as __namedExportsOrder,Q as default};
