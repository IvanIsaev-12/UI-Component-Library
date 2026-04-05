import { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@ui-component-lib/ui";

const meta = {
	title: "Primitives/Button",
	component: Button,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A versatile button component that supports multiple variants, sizes, and states. Built with accessibility in mind and supports loading states.",
			},
		},
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["primary", "secondary", "outline", "ghost", "danger", "success", "warning"],
			description: "The visual style variant of the button",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "primary" },
			},
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg", "icon"],
			description: "The size of the button",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "md" },
			},
		},
		children: {
			control: "text",
			description: "The content to display inside the button",
			table: {
				type: { summary: "ReactNode" },
			},
		},
		disabled: {
			control: "boolean",
			description: "Whether the button is disabled",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		isLoading: {
			control: "boolean",
			description: "Whether the button is in a loading state",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		asChild: {
			control: "boolean",
			description: "Render as a child component (using Radix UI Slot)",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		onClick: {
			action: "clicked",
			description: "Click event handler",
			table: {
				type: { summary: "MouseEventHandler<HTMLButtonElement>" },
			},
		},
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Button",
		variant: "primary",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Secondary Button",
	},
	parameters: {
		docs: {
			description: {
				story: "A secondary button with a muted background style.",
			},
		},
	},
};

export const Danger: Story = {
	args: {
		variant: "danger",
		children: "Delete",
	},
	parameters: {
		docs: {
			description: {
				story: "Use for destructive actions like deleting or removing items.",
			},
		},
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Outline Button",
	},
	parameters: {
		docs: {
			description: {
				story: "A button with a transparent background and border.",
			},
		},
	},
};

export const Success: Story = {
	args: {
		variant: "success",
		children: "Confirm",
	},
	parameters: {
		docs: {
			description: {
				story: "Use for successful or confirmation actions.",
			},
		},
	},
};

export const Warning: Story = {
	args: {
		variant: "warning",
		children: "Warning",
	},
	parameters: {
		docs: {
			description: {
				story: "Use for actions that require caution or attention.",
			},
		},
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
		children: "Ghost Button",
	},
	parameters: {
		docs: {
			description: {
				story: "A minimal button with no background, showing only on hover.",
			},
		},
	},
};

export const Loading: Story = {
	args: {
		variant: "primary",
		children: "Submit",
		isLoading: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Button in a loading state, which is automatically disabled.",
			},
		},
	},
};

export const Disabled: Story = {
	args: {
		variant: "primary",
		children: "Disabled Button",
		disabled: true,
	},
	parameters: {
		docs: {
			description: {
				story: "A disabled button that cannot be interacted with.",
			},
		},
	},
};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
			<Button size="sm">Small</Button>
			<Button size="md">Medium</Button>
			<Button size="lg">Large</Button>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Buttons are available in three sizes: small, medium (default), and large.",
			},
		},
	},
};
