import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "@ui-component-lib/ui";

const meta = {
	title: "Components/Divider",
	component: Divider,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A thin horizontal rule used to visually separate sections of content. Applies a subtle border using the current theme tokens.",
			},
		},
	},
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="w-[600px]">
			<p className="mb-4">Content above the divider</p>
			<Divider />
			<p className="mt-4">Content below the divider</p>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "A divider separating two blocks of text — the standard use case.",
			},
		},
	},
};
