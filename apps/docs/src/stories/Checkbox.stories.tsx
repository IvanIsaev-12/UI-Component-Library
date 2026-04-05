import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox, Typography } from "@ui-component-lib/ui";

const meta = {
	title: "Primitives/Checkbox",
	component: Checkbox,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A controlled or uncontrolled checkbox input with an optional visible label. Fully keyboard accessible and supports a disabled state.",
			},
		},
	},
	argTypes: {
		label: {
			control: "text",
			description: "Text label displayed next to the checkbox",
			table: { type: { summary: "string" } },
		},
		id: {
			control: "text",
			description: "HTML id used to associate the label with the input",
			table: { type: { summary: "string" } },
		},
		disabled: {
			control: "boolean",
			description: "Prevents the checkbox from being toggled",
			table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
		},
	},
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Vote !",
		id: "vote",
	},
	parameters: {
		docs: {
			description: {
				story: "A basic checkbox with a label — the most common usage.",
			},
		},
	},
};

export const Disabled: Story = {
	args: {
		label: "This option is disabled by default",
		id: "disabled",
		disabled: true,
	},
	parameters: {
		docs: {
			description: {
				story: "A disabled checkbox that cannot be toggled by the user.",
			},
		},
	},
};

export const Grid: Story = {
	render: () => (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
			<Checkbox label="Candidate 1" id="grid-candidate-1" />
			<Checkbox label="Candidate 2" id="grid-candidate-2" />
			<Checkbox label="Candidate 3" id="grid-candidate-3" />
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Checkboxes arranged in a responsive grid — useful for multi-column option lists.",
			},
		},
	},
};

export const TermsAndConditions: Story = {
	render: () => (
		<div className="max-w-md">
			<Checkbox label="I agree to the Terms and Conditions" id="terms" />
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Single checkbox used as a required acceptance control for legal agreements.",
			},
		},
	},
};

export const MultiSelect: Story = {
	render: () => (
		<div>
			<Typography variant={"h4"}>Choose your interests</Typography>
			<div className="space-y-2">
				<Checkbox label="Web Development" id="web" />
				<Checkbox label="Game Design" id="game" />
				<Checkbox label="Cybersecurity" id="security" />
				<Checkbox label="UI/UX Design" id="design" />
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "A vertical list of checkboxes for selecting multiple options from a set.",
			},
		},
	},
};
