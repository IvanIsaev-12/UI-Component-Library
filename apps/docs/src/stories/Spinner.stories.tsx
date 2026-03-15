import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@ui-component-lib/ui";

const meta: Meta<typeof Spinner> = {
	title: "Primitives/Spinner",
	component: Spinner,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
	render: () => {
		return (
			<div className="flex items-center gap-4 text-primary-600">
				<Spinner size="sm" />
				<Spinner size="md" />
				<Spinner size="lg" />
			</div>
		);
	},
};
