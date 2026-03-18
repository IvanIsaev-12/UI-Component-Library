import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@ui-component-lib/ui";

const meta = {
    title: "Components/Divider",
    component: Divider,
    tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="w-[600px]">
            <p className="mb-4">Content above the divider</p>
            <Divider />
            <p className="mt-4">Content below the divider</p>
        </div>
    ),
};
