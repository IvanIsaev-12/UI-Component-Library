import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox, Typography } from "@ui-component-lib/ui";

const meta = {
	title: "Primitives/Checkbox",
	component: Checkbox,
	tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Vote !",
		id: "vote",
	},
};

export const Disabled: Story = {
	args: {
		label: "This option is disabled by default",
		id: "disabled",
		disabled: true,
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
};

export const TermsAndConditions: Story = {
	render: () => (
		<div className="max-w-md">
			<Checkbox label="I agree to the Terms and Conditions" id="terms" />
		</div>
	),
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
};
