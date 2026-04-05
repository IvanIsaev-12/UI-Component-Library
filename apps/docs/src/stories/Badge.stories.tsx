import { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@ui-component-lib/ui";

const meta = {
	title: "Primitives/Badge",
	component: Badge,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A small label used to highlight status, categories, or counts. Supports primary, success, warning, danger, and neutral variants.",
			},
		},
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["primary", "success", "warning", "danger", "neutral"],
			description: "The visual style and semantic meaning of the badge",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "primary" },
			},
		},
		children: {
			control: "text",
			description: "The text content displayed inside the badge",
			table: {
				type: { summary: "ReactNode" },
			},
		},
	},
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: "primary",
		className: "w-[100px] h-6",
		children: "Badge",
	},
	parameters: {
		docs: {
			description: {
				story: "Default badge used for general labelling and categorisation.",
			},
		},
	},
};

export const Success: Story = {
	args: {
		variant: "success",
		className: "w-[100px] h-6",
		children: "Badge",
	},
	parameters: {
		docs: {
			description: {
				story: "Indicates a positive or completed status.",
			},
		},
	},
};

export const Warning: Story = {
	args: {
		variant: "warning",
		className: "w-[100px] h-6",
		children: "Badge",
	},
	parameters: {
		docs: {
			description: {
				story: "Draws attention to items that need review or caution.",
			},
		},
	},
};

export const Neutral: Story = {
	args: {
		variant: "neutral",
		className: "w-[100px] h-6",
		children: "Badge",
	},
	parameters: {
		docs: {
			description: {
				story: "A muted badge for inactive or secondary labels.",
			},
		},
	},
};

export const Danger: Story = {
	args: {
		variant: "danger",
		className: "w-[100px] h-6",
		children: "Badge",
	},
	parameters: {
		docs: {
			description: {
				story: "Signals an error, failure, or destructive state.",
			},
		},
	},
};
