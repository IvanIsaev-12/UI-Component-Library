import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "@ui-component-lib/ui";

const meta = {
	title: "Components/Progress",
	component: Progress,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A horizontal bar that displays the completion status of a task or process. Supports multiple variants and sizes, and accepts an optional label.",
			},
		},
	},
	argTypes: {
		value: {
			control: { type: "range", min: 0, max: 100, step: 1 },
			description: "Current progress value",
			table: { type: { summary: "number" } },
		},
		maximum: {
			control: { type: "number" },
			description: "Maximum value — defaults to 100",
			table: { type: { summary: "number" }, defaultValue: { summary: "100" } },
		},
		variant: {
			control: { type: "select" },
			options: ["primary", "success", "warning", "danger"],
			description: "Visual color variant of the progress bar",
			table: { type: { summary: "string" }, defaultValue: { summary: "primary" } },
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
			description: "Height of the progress bar",
			table: { type: { summary: "string" }, defaultValue: { summary: "md" } },
		},
		label: {
			control: "text",
			description: "Optional label displayed above or alongside the bar",
			table: { type: { summary: "string" } },
		},
	},
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: 60,
		maximum: 100,
		variant: "primary",
		size: "md",
		label: "Progress",
	},
	render: (args) => (
		<div className="w-[600px]">
			<Progress {...args} />
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Interactive default story — use the controls panel to adjust value, variant, and size.",
			},
		},
	},
};
