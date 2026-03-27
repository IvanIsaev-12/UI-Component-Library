import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger, Typography } from "@ui-component-lib/ui";

const meta = {
    title: "Components/Accordion",
    tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
    render: () => (
        <Accordion type="single" collapsible className="w-[600px]">
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
    ),
};
export const MultipleSingle: Story = {
    render: () => (
        <Accordion type="single" collapsible className="w-[600px]">
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
    ),
};
export const MultipleOpen: Story = {
    render: () => (
        <Accordion type="multiple" className="w-[600px]">
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
    ),
};

export const FAQ: Story = {
    render: () => (
        <Accordion type="single" collapsible className="w-[700px]">
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
    ),
};
