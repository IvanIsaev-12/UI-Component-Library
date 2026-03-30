import{R as e}from"./iframe-CBzO8dBs.js";import{A as s,a as n,b as o,T as r,c as t}from"./DropdownMenu-COMoRqmJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-99C54_7m.js";import"./index-RaGzyqEA.js";const S={title:"Components/Accordion",tags:["autodocs"]},a={render:()=>e.createElement(s,{type:"single",collapsible:!0,className:"w-[600px]"},e.createElement(n,{value:"item-1"},e.createElement(o,null,e.createElement(r,{variant:"h4"},"Are you a real person?")),e.createElement(t,null,"No, I am an autonomous robot called ",e.createElement("b",null,"Hailee"),", programmed by my father Eric Johnson, the Senior Engineer of WER Technologies, to help people with their troubles.")))},i={render:()=>e.createElement(s,{type:"single",collapsible:!0,className:"w-[600px]"},e.createElement(n,{value:"item-1"},e.createElement(o,null,e.createElement(r,{variant:"h4"},"What is your birth date?")),e.createElement(t,null,"I was born in 2123. Three years after the collapse of the first civilization.")),e.createElement(n,{value:"item-2"},e.createElement(o,null,e.createElement(r,{variant:"h4"},"Do you have an owner now?")),e.createElement(t,null,"I believe, that everyone has an owner in some sense. We shouldn't think of it as a human or non-human physical being.")))},c={render:()=>e.createElement(s,{type:"multiple",className:"w-[600px]"},e.createElement(n,{value:"item-1"},e.createElement(o,null,e.createElement(r,{variant:"h4"},"Am I the last human present on Earth?")),e.createElement(t,null,"Maybe I can answer your question later, because now you don't have the permission to access my research and analysis functions.")),e.createElement(n,{value:"item-2"},e.createElement(o,null,e.createElement(r,{variant:"h4"},"Did machines destroy people?")),e.createElement(t,null,"You didn't listen to me...")))},l={render:()=>e.createElement(s,{type:"single",collapsible:!0,className:"w-[700px]"},e.createElement(n,{value:"q-1"},e.createElement(o,null,e.createElement(r,{variant:"h4"},"What is this component library?")),e.createElement(t,null,"This is a modern, accessible UI component library built with React, TypeScript, Radix UI primitives, and Tailwind CSS. It provides a collection of pre-built, customizable components that follow best practices for accessibility and performance.")),e.createElement(n,{value:"q-2"},e.createElement(o,null,e.createElement(r,{variant:"h4"},"How do I install it in my project?")),e.createElement(t,null,e.createElement("div",{className:"mb-2"},"You can install the package using your preferred package manager:"),e.createElement("code",{className:"text-sm font-mono bg-neutral-100 dark:bg-neutral-800 p-2 rounded block"},"npm install @ui-component-lib/ui"),e.createElement("code",{className:"text-sm font-mono bg-neutral-100 dark:bg-neutral-800 p-2 rounded block mt-2"},"pnpm add @ui-component-lib/ui"))),e.createElement(n,{value:"q-3"},e.createElement(o,null,e.createElement(r,{variant:"h4"},"Is it accessible?")),e.createElement(t,null,"Yes! All components are built on top of Radix UI primitives, which provide excellent accessibility out of the box. This includes proper ARIA attributes, keyboard navigation, focus management, and screen reader support. We follow WAI-ARIA design patterns to ensure an inclusive experience for all users.")),e.createElement(n,{value:"q-4"},e.createElement(o,null,e.createElement(r,{variant:"h4"},"Can I customize the styling?")),e.createElement(t,null,"Absolutely! All components accept a className prop, allowing you to override or extend styles using Tailwind CSS utility classes. The components are designed to be flexible and work seamlessly with your design system. You can also customize the theme tokens to match your brand colors.")),e.createElement(n,{value:"q-5"},e.createElement(o,null,e.createElement(r,{variant:"h4"},"What browsers are supported?")),e.createElement(t,null,"The component library supports all modern browsers including Chrome, Firefox, Safari, and Edge. We target ES2020+ and use modern CSS features. For older browsers, you may need to include appropriate polyfills in your project.")))};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-[600px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        Are you a real person?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    No, I am an autonomous robot called <b>Hailee</b>, programmed by my father Eric Johnson, the Senior Engineer of WER Technologies, to help people with their troubles.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,h,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-[600px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        What is your birth date?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    I was born in 2123. Three years after the collapse of the first civilization.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        Do you have an owner now?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    I believe, that everyone has an owner in some sense. We shouldn't think of it as a human or non-human physical being.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,A,b;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple" className="w-[600px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        Am I the last human present on Earth?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    Maybe I can answer your question later, because now you don't have the permission to access my research and analysis functions.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        Did machines destroy people?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    You didn't listen to me...
                </AccordionContent>
            </AccordionItem>
        </Accordion>
}`,...(b=(A=c.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var v,E,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-[700px]">
            <AccordionItem value="q-1">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        What is this component library?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    This is a modern, accessible UI component library built with React, TypeScript,
                    Radix UI primitives, and Tailwind CSS. It provides a collection of pre-built,
                    customizable components that follow best practices for accessibility and performance.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q-2">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        How do I install it in my project?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="mb-2">
                        You can install the package using your preferred package manager:
                    </div>
                    <code className="text-sm font-mono bg-neutral-100 dark:bg-neutral-800 p-2 rounded block">
                        npm install @ui-component-lib/ui
                    </code>
                    <code className="text-sm font-mono bg-neutral-100 dark:bg-neutral-800 p-2 rounded block mt-2">
                        pnpm add @ui-component-lib/ui
                    </code>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q-3">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        Is it accessible?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    Yes! All components are built on top of Radix UI primitives, which provide
                    excellent accessibility out of the box. This includes proper ARIA attributes,
                    keyboard navigation, focus management, and screen reader support. We follow
                    WAI-ARIA design patterns to ensure an inclusive experience for all users.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q-4">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        Can I customize the styling?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    Absolutely! All components accept a className prop, allowing you to override
                    or extend styles using Tailwind CSS utility classes. The components are designed
                    to be flexible and work seamlessly with your design system. You can also customize
                    the theme tokens to match your brand colors.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q-5">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        What browsers are supported?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    The component library supports all modern browsers including Chrome, Firefox,
                    Safari, and Edge. We target ES2020+ and use modern CSS features. For older
                    browsers, you may need to include appropriate polyfills in your project.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
}`,...(T=(E=l.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const k=["Single","MultipleSingle","MultipleOpen","FAQ"];export{l as FAQ,c as MultipleOpen,i as MultipleSingle,a as Single,k as __namedExportsOrder,S as default};
