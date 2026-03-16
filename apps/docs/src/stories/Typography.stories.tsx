import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@ui-component-lib/ui";

const meta: Meta<typeof Typography> = {
	title: "Primitives/Typography",
	component: Typography,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
	args: {
		variant: "h1",
        children: "Heading"
	},
};
export const Heading2: Story = {
	args: {
		variant: "h2",
        children: "Heading"
	},
};
export const Heading3: Story = {
	args: {
		variant: "h3",
        children: "Heading"
	},
};
export const Heading4: Story = {
	args: {
		variant: "h4",
        children: "Heading"
	},
};
export const Caption: Story = {
	args: {
		variant: "caption",
        children: "Caption"
	},
};
export const Label: Story = {
	args: {
		variant: "label",
        children: "Label"
	},
};
export const Body: Story = {
	args: {
		variant: "body",
        children: "Body"
	},
};