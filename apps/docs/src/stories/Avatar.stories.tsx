import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "@ui-component-lib/ui";

const meta: Meta<typeof Avatar> = {
	title: "Primitives/Avatar",
	component: Avatar,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		src: "https://i.pravatar.cc/150",
		alt: "User avatar",
		fallback: "CN",
	},
};

export const Fallback: Story = {
	args: {
		src: "https://broken-url.ru",
		alt: "Cristiano Ronaldo",
		fallback: "CR",
	},
};

export const Sizes: Story = {
	render: () => {
		return (
			<div className="flex items-center gap-4">
				<Avatar
					src="https://i.pravatar.cc/150"
					alt="Avatar"
					fallback="SM"
					size="sm"
				/>
				<Avatar
					src="https://i.pravatar.cc/150"
					alt="Avatar"
					fallback="MD"
					size="md"
				/>
				<Avatar
					src="https://i.pravatar.cc/150"
					alt="Avatar"
					fallback="LG"
					size="lg"
				/>
			</div>
		);
	},
};

export const Shapes: Story = {
	render: () => {
		return (
			<div className="flex items-center gap-4">
				<Avatar fallback="Ci" shape="circle" alt="Circle shaped avatar" />
				<Avatar fallback="Sq" shape="square" alt="Square shaped avatar" />
			</div>
		);
	},
};
