import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, AlertTitle, AlertDescription } from "@ui-component-lib/ui";

const meta = {
	title: "Components/Alert",
	component: Alert,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"Displays a short, important message that attracts the user's attention without interrupting their task. Supports info, success, warning, and danger variants.",
			},
		},
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["info", "success", "warning", "danger"],
			description: "The visual style and semantic meaning of the alert",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "info" },
			},
		},
		children: {
			control: false,
			description: "Content inside the alert — typically AlertTitle and AlertDescription",
			table: {
				type: { summary: "ReactNode" },
			},
		},
	},
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
	args: {
		variant: "info",
		children: (
			<>
				<AlertTitle>Information</AlertTitle>
				<AlertDescription>This is an informational alert.</AlertDescription>
			</>
		),
	},
	parameters: {
		docs: {
			description: {
				story: "Default informational alert for neutral, helpful messages.",
			},
		},
	},
};

export const Success: Story = {
	args: {
		variant: "success",
		children: (
			<>
				<AlertTitle>Success</AlertTitle>
				<AlertDescription>
					Your action was completed successfully.
				</AlertDescription>
			</>
		),
	},
	parameters: {
		docs: {
			description: {
				story: "Use to confirm that an operation completed without errors.",
			},
		},
	},
};

export const Warning: Story = {
	args: {
		variant: "warning",
		children: (
			<>
				<AlertTitle>Warning</AlertTitle>
				<AlertDescription>
					Please review this important information.
				</AlertDescription>
			</>
		),
	},
	parameters: {
		docs: {
			description: {
				story: "Use to caution the user before proceeding with a potentially risky action.",
			},
		},
	},
};

export const Danger: Story = {
	args: {
		variant: "danger",
		children: (
			<>
				<AlertTitle>Error</AlertTitle>
				<AlertDescription>
					An error occurred while processing your request.
				</AlertDescription>
			</>
		),
	},
	parameters: {
		docs: {
			description: {
				story: "Use to communicate a critical error or failed operation.",
			},
		},
	},
};
