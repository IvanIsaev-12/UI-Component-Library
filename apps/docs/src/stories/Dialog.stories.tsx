import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
	Button,
	Input,
} from "@ui-component-lib/ui";

const meta = {
	title: "Components/Dialog",
	component: Dialog,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component: "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
			},
		},
	},
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story: "The basic dialog structure used to interrupt the user with important information or a simple call to action.",
			},
		},
	},
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Open Dialog</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle> City </DialogTitle>
					<DialogDescription> Select a city </DialogDescription>
				</DialogHeader>
				<DialogFooter>Dialog</DialogFooter>
			</DialogContent>
		</Dialog>
	),
};

export const Destructive: Story = {
	parameters: {
		docs: {
			description: {
				story: "Used for high-risk actions. This pattern emphasizes the 'Danger' state to prevent accidental data loss.",
			},
		},
	},
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="danger">Delete Account</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your
						account.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="outline">Cancel</Button>
					</DialogClose>
					<Button variant="danger">Delete</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
};

export const WithForm: Story = {
	parameters: {
		docs: {
			description: {
				story: "Demonstrates how to embed input fields within the dialog body for quick data entry without navigating away.",
			},
		},
	},
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="primary">Open</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create Account</DialogTitle>
					<DialogDescription>Fill in your details below</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col gap-4">
					<Input label="Username" id="username" />
					<Input label="Email" id="email" type="email" />
					<Input label="Password" id="password" type="password" />
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="outline">Cancel</Button>
					</DialogClose>
					<Button variant="success">Submit</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
};
