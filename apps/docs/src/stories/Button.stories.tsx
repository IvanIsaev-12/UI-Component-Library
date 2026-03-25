import { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@ui-component-lib/ui";

const meta = {
	title: "Primitives/Button",
	component: Button,
	tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: { children: "Button" },
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Button",
	},
};
export const Danger: Story = {
	args: {
		variant: "danger",
		children: "Button",
	},
};
export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Button",
	},
};
