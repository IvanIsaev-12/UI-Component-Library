import{R as e}from"./iframe-C8_2Xy3M.js";import{A as s,a as o,b as r,T as n,c as a}from"./index-RmIsQImm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BU_qSK9z.js";import"./index-CEj4hGs3.js";const x={title:"Components/Accordion",tags:["autodocs"]},t={render:()=>e.createElement(s,{type:"single",collapsible:!0,className:"w-[600px]"},e.createElement(o,{value:"item-1"},e.createElement(r,null,e.createElement(n,{variant:"h4"},"Are you a real person?")),e.createElement(a,null,e.createElement(n,{variant:"caption"},"No, I am an autonomous roobt called ",e.createElement("b",null,"Hailee"),", programmed by my father Eric Johnson, the Senior Engineer of WER Technologies, to help people with their troubles."))))},i={render:()=>e.createElement(s,{type:"single",collapsible:!0,className:"w-[600px]"},e.createElement(o,{value:"item-1"},e.createElement(r,null,e.createElement(n,{variant:"h4"},"What is your birth date?")),e.createElement(a,null,e.createElement(n,{variant:"caption"},"I was born in 2123. Three years after the collapse of the first civilization."))),e.createElement(o,{value:"item-2"},e.createElement(r,null,e.createElement(n,{variant:"h4"},"Do you have an owner now?")),e.createElement(a,null,e.createElement(n,{variant:"caption"},"I believe, that everyone has an owner in some sense. We shouldn't think of it as a human or non-human physical being."))))},c={render:()=>e.createElement(s,{type:"multiple",className:"w-[600px]"},e.createElement(o,{value:"item-1"},e.createElement(r,null,e.createElement(n,{variant:"h4"},"Am I the last human present on Earth?")),e.createElement(a,null,e.createElement(n,{variant:"caption"},"Maybe I can answer your question later, because now you don't have the permission to access my research and analysis funcitons."))),e.createElement(o,{value:"item-2"},e.createElement(r,null,e.createElement(n,{variant:"h4"},"Did machines destroy people?")),e.createElement(a,null,e.createElement(n,{variant:"caption"},"You didn't listen too me..."))))},l={render:()=>e.createElement(s,{type:"single",collapsible:!0,className:"w-[700px]"},e.createElement(o,{value:"q-1"},e.createElement(r,null,e.createElement(n,{variant:"h4"},"What is this component library?")),e.createElement(a,null,e.createElement(n,{variant:"body"},"This is a modern, accessible UI component library built with React, TypeScript, Radix UI primitives, and Tailwind CSS. It provides a collection of pre-built, customizable components that follow best practices for accessibility and performance."))),e.createElement(o,{value:"q-2"},e.createElement(r,null,e.createElement(n,{variant:"h4"},"How do I install it in my project?")),e.createElement(a,null,e.createElement(n,{variant:"body",className:"mb-2"},"You can install the package using your preferred package manager:"),e.createElement(n,{variant:"caption",className:"font-mono bg-neutral-100 p-2 rounded block"},"npm install @ui-component-lib/ui"),e.createElement(n,{variant:"caption",className:"font-mono bg-neutral-100 p-2 rounded block mt-2"},"pnpm add @ui-component-lib/ui"))),e.createElement(o,{value:"q-3"},e.createElement(r,null,e.createElement(n,{variant:"h4"},"Is it accessible?")),e.createElement(a,null,e.createElement(n,{variant:"body"},"Yes! All components are built on top of Radix UI primitives, which provide excellent accessibility out of the box. This includes proper ARIA attributes, keyboard navigation, focus management, and screen reader support. We follow WAI-ARIA design patterns to ensure an inclusive experience for all users."))),e.createElement(o,{value:"q-4"},e.createElement(r,null,e.createElement(n,{variant:"h4"},"Can I customize the styling?")),e.createElement(a,null,e.createElement(n,{variant:"body"},"Absolutely! All components accept a className prop, allowing you to override or extend styles using Tailwind CSS utility classes. The components are designed to be flexible and work seamlessly with your design system. You can also customize the theme tokens to match your brand colors."))),e.createElement(o,{value:"q-5"},e.createElement(r,null,e.createElement(n,{variant:"h4"},"What browsers are supported?")),e.createElement(a,null,e.createElement(n,{variant:"body"},"The component library supports all modern browsers including Chrome, Firefox, Safari, and Edge. We target ES2020+ and use modern CSS features. For older browsers, you may need to include appropriate polyfills in your project."))))};var p,m,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-[600px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        Are you a real person?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    <Typography variant={"caption"}>
                        No, I am an autonomous roobt called <b>Hailee</b>, programmed by my father Eric Johnson, the Senior Engineer of WER Technologies, to help people with their troubles.
                    </Typography>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var y,u,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-[600px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        What is your birth date?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    <Typography variant={"caption"}>
                        I was born in 2123. Three years after the collapse of the first civilization.
                    </Typography>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        Do you have an owner now?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    <Typography variant={"caption"}>
                        I believe, that everyone has an owner in some sense. We shouldn't think of it as a human or non-human physical being.
                    </Typography>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,b,A;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple" className="w-[600px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        Am I the last human present on Earth?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    <Typography variant={"caption"}>
                        Maybe I can answer your question later, because now you don't have the permission to access my research and analysis funcitons.
                    </Typography>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        Did machines destroy people?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    <Typography variant={"caption"}>
                        You didn't listen too me...
                    </Typography>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
}`,...(A=(b=c.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var v,T,E;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-[700px]">
            <AccordionItem value="q-1">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        What is this component library?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    <Typography variant={"body"}>
                        This is a modern, accessible UI component library built with React, TypeScript,
                        Radix UI primitives, and Tailwind CSS. It provides a collection of pre-built,
                        customizable components that follow best practices for accessibility and performance.
                    </Typography>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q-2">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        How do I install it in my project?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    <Typography variant={"body"} className="mb-2">
                        You can install the package using your preferred package manager:
                    </Typography>
                    <Typography variant={"caption"} className="font-mono bg-neutral-100 p-2 rounded block">
                        npm install @ui-component-lib/ui
                    </Typography>
                    <Typography variant={"caption"} className="font-mono bg-neutral-100 p-2 rounded block mt-2">
                        pnpm add @ui-component-lib/ui
                    </Typography>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q-3">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        Is it accessible?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    <Typography variant={"body"}>
                        Yes! All components are built on top of Radix UI primitives, which provide
                        excellent accessibility out of the box. This includes proper ARIA attributes,
                        keyboard navigation, focus management, and screen reader support. We follow
                        WAI-ARIA design patterns to ensure an inclusive experience for all users.
                    </Typography>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q-4">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        Can I customize the styling?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    <Typography variant={"body"}>
                        Absolutely! All components accept a className prop, allowing you to override
                        or extend styles using Tailwind CSS utility classes. The components are designed
                        to be flexible and work seamlessly with your design system. You can also customize
                        the theme tokens to match your brand colors.
                    </Typography>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q-5">
                <AccordionTrigger>
                    <Typography variant={"h4"}>
                        What browsers are supported?
                    </Typography>
                </AccordionTrigger>
                <AccordionContent>
                    <Typography variant={"body"}>
                        The component library supports all modern browsers including Chrome, Firefox,
                        Safari, and Edge. We target ES2020+ and use modern CSS features. For older
                        browsers, you may need to include appropriate polyfills in your project.
                    </Typography>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
}`,...(E=(T=l.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const N=["Single","MultipleSingle","MultipleOpen","FAQ"];export{l as FAQ,c as MultipleOpen,i as MultipleSingle,t as Single,N as __namedExportsOrder,x as default};
