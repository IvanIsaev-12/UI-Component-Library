import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "@ui-component-lib/ui";

const meta = {
    title: "Components/Progress",
    component: Progress,
    tags: ["autodocs"],
    argTypes: {
        value: {
            control: { type: "range", min: 0, max: 100, step: 1 },
            description: "Current progress value",
        },
        maximum: {
            control: { type: "number" },
            description: "Maximum value",
        },
        variant: {
            control: { type: "select" },
            options: ["primary", "success", "warning", "danger"],
            description: "Visual variant",
        },
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg"],
            description: "Size of the progress bar",
        },
    },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 60,
        maximum: 100,
        variant: "primary",
        size: "md",
    },
    render: (args) => (
        <div className="w-[600px]">
            <Progress {...args} />
        </div>
    ),
};
