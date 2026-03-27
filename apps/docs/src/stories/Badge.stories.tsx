import { Meta, StoryObj } from "@storybook/react-vite";
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
		className: "w-[100px] h-6",
		children: "Badge",
	},
};
export const Success: Story = {
	args: {
		variant: "success",
		className: "w-[100px] h-6",
		children: "Badge",
	},
};
export const Warning: Story = {
	args: {
		variant: "warning",
		className: "w-[100px] h-6",
		children: "Badge",
	},
};
export const Neutral: Story = {
	args: {
		variant: "neutral",
		className: "w-[100px] h-6",
		children: "Badge",
	},
};
export const Danger: Story = {
	args: {
		variant: "danger",
		className: "w-[100px] h-6",
		children: "Badge",
	},
};
