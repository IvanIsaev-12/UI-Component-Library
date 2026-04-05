import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@ui-component-lib/ui";
import { Slash } from "lucide-react";

const meta = {
	title: "Components/Breadcrumb",
	component: Breadcrumb,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A navigation aid that displays the current page's location within a hierarchy. It allows users to track their path and navigate back to parent levels via a sequence of links.",
			},
		},
	},
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story: "The standard breadcrumb structure using text links and default chevron separators.",
			},
		},
	},
	render: () => (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="/news">News</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>Help</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	),
};

export const WithCustomSeparator: Story = {
	parameters: {
		docs: {
			description: {
				story: "Demonstrates how to replace the default separator with a custom icon, such as a forward slash.",
			},
		},
	},
	render: () => (
		<div className="space-y-4">
			<Breadcrumb id="nav-1">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator>
						<Slash className="h-4 w-4" />
					</BreadcrumbSeparator>
					<BreadcrumbItem>
						<BreadcrumbLink href="/news">News</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator>
						<Slash className="h-4 w-4" />
					</BreadcrumbSeparator>
					<BreadcrumbItem>
						<BreadcrumbPage>Help</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	),
};

export const LongPath: Story = {
	parameters: {
		docs: {
			description: {
				story: "An example of the breadcrumb behavior when dealing with deeply nested page hierarchies.",
			},
		},
	},
	render: () => (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="/settings/screen">Screen</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="/settings/screen/manage">
						Manage Screen Settings
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="/settings/screen/manage/brightness">
						Screen Brightness
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="/settings/screen/manage/brightness/custom">
						Set Custom Brightness
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>Save</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	),
};
