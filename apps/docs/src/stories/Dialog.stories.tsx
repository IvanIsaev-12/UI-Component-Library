import React from "react";
import { Meta, StoryObj } from "@storybook/react";
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
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
					<Input label="Username" />
					<Input label="Email" />
					<Input label="Password" />
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
