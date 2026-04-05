import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "@ui-component-lib/ui";

const meta = {
	title: "Primitives/Avatar",
	component: Avatar,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"Displays a user's profile image with automatic fallback to initials when the image fails to load. Supports multiple sizes and circle or square shapes.",
			},
		},
	},
	argTypes: {
		src: {
			control: "text",
			description: "URL of the profile image",
			table: { type: { summary: "string" } },
		},
		alt: {
			control: "text",
			description: "Alt text for the image — used by screen readers",
			table: { type: { summary: "string" } },
		},
		fallback: {
			control: "text",
			description: "Initials or short text shown when the image cannot load",
			table: { type: { summary: "string" } },
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "Size of the avatar",
			table: { type: { summary: "string" }, defaultValue: { summary: "md" } },
		},
		shape: {
			control: "select",
			options: ["circle", "square"],
			description: "Shape of the avatar container",
			table: { type: { summary: "string" }, defaultValue: { summary: "circle" } },
		},
	},
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		src: "https://i.pravatar.cc/150",
		alt: "User avatar",
		fallback: "CN",
	},
	parameters: {
		docs: {
			description: {
				story: "Avatar with a valid image URL — the image is displayed normally.",
			},
		},
	},
};

export const Fallback: Story = {
	args: {
		src: "https://broken-url.ru",
		alt: "Cristiano Ronaldo",
		fallback: "CR",
	},
	parameters: {
		docs: {
			description: {
				story: "When the image URL is broken or unavailable, the fallback initials are shown instead.",
			},
		},
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
	parameters: {
		docs: {
			description: {
				story: "All three avatar sizes — small, medium, and large — shown side by side.",
			},
		},
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
	parameters: {
		docs: {
			description: {
				story: "Avatars rendered in circle and square shapes using the fallback text.",
			},
		},
	},
};
