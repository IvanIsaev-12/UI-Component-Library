import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@ui-component-lib/ui";

const meta = {
	title: "Primitives/Badge",
	component: Badge,
	tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: "primary",
		children: "Badge",
	},
};
export const Success: Story = {
	args: {
		variant: "success",
		children: "Badge",
	},
};
export const Warning: Story = {
	args: {
		variant: "warning",
		children: "Badge",
	},
};
export const Neutral: Story = {
	args: {
		variant: "neutral",
		children: "Badge",
	},
};
export const Danger: Story = {
	args: {
		variant: "danger",
		children: "Badge",
	},
};
