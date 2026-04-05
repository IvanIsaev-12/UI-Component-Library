import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import {
	Table,
	TableCaption,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
	Badge,
} from "@ui-component-lib/ui";

const meta = {
	title: "Components/Table",
	component: Table,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component: "Organizes and displays data efficiently across rows and columns for easy scanning and comparison.",
			},
		},
	},
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Table className="min-w-[1000px]">
			<TableCaption>A list of employees</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Position</TableHead>
					<TableHead className="text-right">Salary</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="font-medium">John Doe</TableCell>
					<TableCell>Software Engineer</TableCell>
					<TableCell className="text-right">$95,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Jane Smith</TableCell>
					<TableCell>Product Manager</TableCell>
					<TableCell className="text-right">$105,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Bob Johnson</TableCell>
					<TableCell>UX Designer</TableCell>
					<TableCell className="text-right">$85,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Alice Brown</TableCell>
					<TableCell>DevOps Engineer</TableCell>
					<TableCell className="text-right">$100,000</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "A basic table structure featuring a header, body rows, and a descriptive caption.",
			},
		},
	},
};

export const WithFooter: Story = {
	render: () => (
		<Table className="min-w-[1000px]">
			<TableCaption>A list of employees</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Position</TableHead>
					<TableHead className="text-right">Salary</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="font-medium">John Doe</TableCell>
					<TableCell>Software Engineer</TableCell>
					<TableCell className="text-right">$95,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Jane Smith</TableCell>
					<TableCell>Product Manager</TableCell>
					<TableCell className="text-right">$105,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Bob Johnson</TableCell>
					<TableCell>UX Designer</TableCell>
					<TableCell className="text-right">$85,000</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Alice Brown</TableCell>
					<TableCell>DevOps Engineer</TableCell>
					<TableCell className="text-right">$100,000</TableCell>
				</TableRow>
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={2}>Average salary</TableCell>
					<TableCell className="text-right">$96,250</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "Demonstrates the use of `TableFooter` to display summary data, such as totals or averages, at the bottom of the dataset.",
			},
		},
	},
};

export const WithBadges: Story = {
	render: () => (
		<Table className="min-w-[1000px]">
			<TableHeader>
				<TableRow>
					<TableHead>Order</TableHead>
					<TableHead className="text-center">Customer</TableHead>
					<TableHead className="text-center">Status</TableHead>
					<TableHead className="text-right">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="font-medium">#32A0</TableCell>
					<TableCell className="text-center">John Isaev</TableCell>
					<TableCell className="text-center">
						<Badge variant="success" className="min-w-[100px] justify-center">
							Completed
						</Badge>
					</TableCell>
					<TableCell className="text-right">$450.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">#BG11</TableCell>
					<TableCell className="text-center">Jane Smith</TableCell>
					<TableCell className="text-center">
						<Badge variant="warning" className="min-w-[100px] justify-center">
							Pending
						</Badge>
					</TableCell>
					<TableCell className="text-right">$280.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">#CF4F</TableCell>
					<TableCell className="text-center">Bob Johnson</TableCell>
					<TableCell className="text-center">
						<Badge variant="danger" className="min-w-[100px] justify-center">
							Cancelled
						</Badge>
					</TableCell>
					<TableCell className="text-right">$120.00</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
	parameters: {
		docs: {
			description: {
				story: "An example of a rich data table integrating **Badge** components to visualize statuses and improve scannability.",
			},
		},
	},
};