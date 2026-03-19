import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Radio  } from "@ui-component-lib/ui";

const meta: Meta<typeof Radio> = {
	title: "Primitives/Radio",
	component: Radio,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
    render: () => (
        <div className="space-y-3 ">
            <Radio name="gender" label="Female" size={"md"} />
            <Radio name="gender" label="Male" size={"md"} />
            <Radio name="gender" label="Undefined" size={"md"} />
        </div>
    )
}