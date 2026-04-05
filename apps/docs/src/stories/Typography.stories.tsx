import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "@ui-component-lib/ui";

const meta = {
	title: "Typography/Typography",
	component: Typography,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A single component that renders the correct semantic HTML element and applies design-system type styles based on the chosen variant. Covers headings, body, label, and caption levels.",
			},
		},
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["h1", "h2", "h3", "h4", "body", "label", "caption"],
			description: "The typographic style and corresponding HTML element to render",
			table: {
				type: { summary: "string" },
			},
		},
		children: {
			control: "text",
			description: "The text content to display",
			table: { type: { summary: "ReactNode" } },
		},
	},
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
	args: { variant: "h1", children: "Heading" },
	parameters: {
		docs: { description: { story: "The largest heading — use for page-level titles." } },
	},
};

export const Heading2: Story = {
	args: { variant: "h2", children: "Heading" },
	parameters: {
		docs: { description: { story: "Section-level heading below h1." } },
	},
};

export const Heading3: Story = {
	args: { variant: "h3", children: "Heading" },
	parameters: {
		docs: { description: { story: "Sub-section heading — third level in the hierarchy." } },
	},
};

export const Heading4: Story = {
	args: { variant: "h4", children: "Heading" },
	parameters: {
		docs: { description: { story: "The smallest heading variant, suitable for card titles and minor sections." } },
	},
};

export const Caption: Story = {
	args: { variant: "caption", children: "Caption" },
	parameters: {
		docs: { description: { story: "Small supplemental text for captions, footnotes, or helper copy." } },
	},
};

export const Label: Story = {
	args: { variant: "label", children: "Label" },
	parameters: {
		docs: { description: { story: "Label text typically used alongside form controls." } },
	},
};

export const Body: Story = {
	args: { variant: "body", children: "Body" },
	parameters: {
		docs: { description: { story: "Default body text for paragraphs and general content." } },
	},
};
