import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@ui-component-lib/ui"

const meta = {
    title: "Primitives/Switch",
    component: Switch,
    tags:["autodocs"]
} satisfies Meta<typeof Switch>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: "md",
    },
    render: (args) => (
        <div className="flex items-center gap-2">
            <Switch id="mobile-data" {...args} />
            <label htmlFor="mobile-data" className="text-sm font-medium cursor-pointer">
                Mobile Data
            </label>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <Switch id="sm" size="sm" />
                <label htmlFor="sm" className="text-sm">Small</label>
            </div>
            <div className="flex items-center gap-2">
                <Switch id="md" size="md" />
                <label htmlFor="md" className="text-sm">Medium</label>
            </div>
            <div className="flex items-center gap-2">
                <Switch id="lg" size="lg" />
                <label htmlFor="lg" className="text-sm">Large</label>
            </div>
        </div>
    ),
};


export const Disabled: Story = {
    render: () => (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <Switch id="disabled-off" disabled />
                <label htmlFor="disabled-off" className="text-sm">Always Off</label>
            </div>
            <div className="flex items-center gap-2">
                <Switch id="disabled-on" disabled defaultChecked />
                <label htmlFor="disabled-on" className="text-sm">Always On</label>
            </div>
        </div>
    ),
};