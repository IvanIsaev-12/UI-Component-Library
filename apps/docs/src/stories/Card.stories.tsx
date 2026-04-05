import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@ui-component-lib/ui";

const meta = {
	title: "Components/Card",
	component: Card,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A flexible container component composed of Card, CardHeader, CardTitle, CardDescription, CardContent, and CardFooter. Use it to group related information into a visually distinct surface.",
			},
		},
	},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="max-w-md">
			<Card>
				<CardHeader>
					<CardTitle>Title</CardTitle>
					<CardDescription>Description</CardDescription>
				</CardHeader>
				<CardContent>
					Our analytics dashboard provides real-time insights into your business
					performance. Track key metrics, visualize trends, and make data-driven
					decisions to grow your business.
				</CardContent>
				<CardFooter>Text</CardFooter>
			</Card>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "A complete card with header, description, content, and footer.",
			},
		},
	},
};

export const NoFooter: Story = {
	render: () => (
		<div className="max-w-md">
			<Card>
				<CardHeader>
					<CardTitle>Notification</CardTitle>
					<CardDescription>You have 3 unread messages</CardDescription>
				</CardHeader>
				<CardContent>
					Check your inbox for new messages from your team. Your monthly report
					is ready for review.
				</CardContent>
			</Card>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Card without a footer — suitable for informational content that needs no action.",
			},
		},
	},
};

export const Grid: Story = {
	render: () => (
		<div className="max-w-4xl">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<Card>
					<CardHeader>
						<CardTitle>Total Users</CardTitle>
						<CardDescription>Active users this month</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-3xl font-bold">2,543</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Revenue</CardTitle>
						<CardDescription>Total earnings</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-3xl font-bold">$12,584</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Growth</CardTitle>
						<CardDescription>Month over month</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-3xl font-bold">+23%</p>
					</CardContent>
				</Card>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Cards arranged in a responsive three-column grid — a common dashboard metric pattern.",
			},
		},
	},
};

export const WithButton: Story = {
	render: () => (
		<div className="max-w-md">
			<Card>
				<CardHeader>
					<CardTitle>Deploy Project</CardTitle>
					<CardDescription>Deploy your project to production</CardDescription>
				</CardHeader>
				<CardContent>
					Your project is ready to be deployed. Click below to start the
					deployment process.
				</CardContent>
				<CardFooter>
					<Button variant="outline">Cancel</Button>
					<Button variant="primary">Deploy Now</Button>
				</CardFooter>
			</Card>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Card with action buttons in the footer — ideal for confirmation dialogs or task cards.",
			},
		},
	},
};
