import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "@ui-component-lib/ui";

const meta = {
	title: "Primitives/Switch",
	component: Switch,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A toggle control that switches between on and off states. Supports multiple sizes and color variants, and is fully accessible via keyboard.",
			},
		},
	},
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "The size of the switch",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "md" },
			},
		},
		variant: {
			control: "select",
			options: ["primary", "success", "warning", "danger"],
			description: "The color variant applied when the switch is checked",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "primary" },
			},
		},
		disabled: {
			control: "boolean",
			description: "Prevents interaction when true",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
		defaultChecked: {
			control: "boolean",
			description: "Whether the switch is checked by default (uncontrolled)",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
		},
	},
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: "md",
	},
	render: (args) => (
		<div className="flex items-center gap-2">
			<Switch id="mobile-data" {...args} />
			<label
				htmlFor="mobile-data"
				className="text-sm font-medium cursor-pointer"
			>
				Mobile Data
			</label>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "A standard switch with a label — the most common usage pattern.",
			},
		},
	},
};

export const Sizes: Story = {
	render: () => (
		<div className="space-y-4">
			<div className="flex items-center gap-2">
				<Switch id="sm" size="sm" />
				<label htmlFor="sm" className="text-sm">
					Small
				</label>
			</div>
			<div className="flex items-center gap-2">
				<Switch id="md" size="md" />
				<label htmlFor="md" className="text-sm">
					Medium
				</label>
			</div>
			<div className="flex items-center gap-2">
				<Switch id="lg" size="lg" />
				<label htmlFor="lg" className="text-sm">
					Large
				</label>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "All three switch sizes shown together for comparison.",
			},
		},
	},
};

export const Disabled: Story = {
	render: () => (
		<div className="space-y-4">
			<div className="flex items-center gap-2">
				<Switch id="disabled-off" disabled />
				<label htmlFor="disabled-off" className="text-sm">
					Always Off
				</label>
			</div>
			<div className="flex items-center gap-2">
				<Switch id="disabled-on" disabled defaultChecked />
				<label htmlFor="disabled-on" className="text-sm">
					Always On
				</label>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Disabled switches are not interactive and visually muted — shown in both on and off states.",
			},
		},
	},
};

export const Colors: Story = {
	render: () => (
		<div className="space-y-4">
			<div className="flex items-center gap-2">
				<Switch id="primary-color" variant="primary" defaultChecked />
				<label htmlFor="primary-color" className="text-sm font-medium">
					Primary
				</label>
			</div>
			<div className="flex items-center gap-2">
				<Switch id="success-color" variant="success" defaultChecked />
				<label htmlFor="success-color" className="text-sm font-medium">
					Success
				</label>
			</div>
			<div className="flex items-center gap-2">
				<Switch id="warning-color" variant="warning" defaultChecked />
				<label htmlFor="warning-color" className="text-sm font-medium">
					Warning
				</label>
			</div>
			<div className="flex items-center gap-2">
				<Switch id="danger-color" variant="danger" defaultChecked />
				<label htmlFor="danger-color" className="text-sm font-medium">
					Danger
				</label>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "All color variants shown in the checked state to illustrate the available palette.",
			},
		},
	},
};
