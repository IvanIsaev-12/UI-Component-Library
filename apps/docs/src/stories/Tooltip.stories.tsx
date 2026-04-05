import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
	Button,
} from "@ui-component-lib/ui";

const meta = {
	title: "Primitives/Tooltip",
	component: Tooltip,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A floating label that appears on hover or focus to provide additional context for an element. Built on Radix UI with full keyboard and screen-reader support.",
			},
		},
	},
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">Hover me</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Add to library</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Basic tooltip that appears above the trigger by default.",
			},
		},
	},
};

export const Top: Story = {
	render: () => (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">Top</Button>
				</TooltipTrigger>
				<TooltipContent side="top">
					<p>Tooltip on top</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Tooltip explicitly positioned above the trigger element.",
			},
		},
	},
};

export const Right: Story = {
	render: () => (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">Right</Button>
				</TooltipTrigger>
				<TooltipContent side="right">
					<p>Tooltip on right</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Tooltip positioned to the right of the trigger.",
			},
		},
	},
};

export const Bottom: Story = {
	render: () => (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">Bottom</Button>
				</TooltipTrigger>
				<TooltipContent side="bottom">
					<p>Tooltip on bottom</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Tooltip positioned below the trigger element.",
			},
		},
	},
};

export const Left: Story = {
	render: () => (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">Left</Button>
				</TooltipTrigger>
				<TooltipContent side="left">
					<p>Tooltip on left</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Tooltip positioned to the left of the trigger.",
			},
		},
	},
};

export const WithCustomDelay: Story = {
	render: () => (
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">No delay</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>This tooltip appears instantly</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Setting delayDuration to 0 on TooltipProvider removes the hover delay.",
			},
		},
	},
};

export const WithArrow: Story = {
	render: () => (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">Hover me</Button>
				</TooltipTrigger>
				<TooltipContent arrow>
					<p>Tooltip with arrow</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Tooltip with a visible arrow pointing at the trigger element.",
			},
		},
	},
};

export const WithLongerContent: Story = {
	render: () => (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">View details</Button>
				</TooltipTrigger>
				<TooltipContent className="max-w-xs">
					<p>
						See how tooltip will handle a bigger text. I hope there won't be any
						issues!
					</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	),
	parameters: {
		docs: {
			description: {
				story: "Tooltip constrained to a max width to wrap longer text gracefully.",
			},
		},
	},
};
