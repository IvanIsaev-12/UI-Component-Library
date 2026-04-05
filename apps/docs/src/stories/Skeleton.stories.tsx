import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "@ui-component-lib/ui";

const meta = {
	title: "Components/Skeleton",
	component: Skeleton,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A placeholder that mimics the shape of content while it is loading. Use it to reduce perceived load time and prevent layout shift.",
			},
		},
	},
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => <Skeleton className="h-4 w-[250px]" />,
	parameters: {
		docs: {
			description: {
				story: "A single line skeleton — suitable for text placeholders.",
			},
		},
	},
};

export const Round: Story = {
	render: () => <Skeleton className="h-12 w-12 rounded-full" />,
	parameters: {
		docs: {
			description: {
				story: "Circular skeleton used as a placeholder for avatars or icons.",
			},
		},
	},
};

export const Card: Story = {
	render: () => (
		<div className="flex flex-col space-y-3">
			<Skeleton className="h-[125px] w-[250px] rounded-xl" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Card-shaped skeleton with an image area and two text lines below.",
			},
		},
	},
};

export const ProfileCard: Story = {
	render: () => (
		<div className="flex items-center space-x-4">
			<Skeleton className="h-12 w-12 rounded-full" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Profile row skeleton — avatar circle with name and subtitle lines beside it.",
			},
		},
	},
};
