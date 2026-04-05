import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { ToastProvider, useToast, Button } from "@ui-component-lib/ui";

// Wrapper component for Storybook
const ToastWrapper = ({ children }: { children: React.ReactNode }) => {
	return <ToastProvider>{children}</ToastProvider>;
};

const meta = {
	title: "Components/Toast",
	component: ToastWrapper,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component: "A succinct message that provides temporary feedback about an operation in a non-disruptive way.",
			},
		},
	},
} satisfies Meta<typeof ToastWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

const ToastDemo = ({
	variant,
}: {
	variant?: "default" | "success" | "error" | "warning";
}) => {
	const { displayToast } = useToast();

	const buttonVariant: "primary" | "success" | "danger" | "warning" =
		variant === "error"
			? "danger"
			: variant === "default"
				? "primary"
				: variant === "success"
					? "success"
					: "warning";

	return (
		<Button
			variant={buttonVariant}
			onClick={() =>
				displayToast(`This is a ${variant || "default"} toast!`, variant)
			}
		>
			Show {variant || "default"} Toast
		</Button>
	);
};

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story: "The standard toast notification used for general information or neutral system updates.",
			},
		},
	},
	args: {
		children: <ToastDemo variant="default" />,
	},
};

export const Success: Story = {
	parameters: {
		docs: {
			description: {
				story: "A green-themed toast used to confirm that an action (like saving or sending) was completed successfully.",
			},
		},
	},
	args: {
		children: <ToastDemo variant="success" />,
	},
};

export const Error: Story = {
	parameters: {
		docs: {
			description: {
				story: "A red-themed toast designed to grab attention when a process fails or an error occurs.",
			},
		},
	},
	args: {
		children: <ToastDemo variant="error" />,
	},
};

export const Warning: Story = {
	parameters: {
		docs: {
			description: {
				story: "An amber-themed toast used to warn users about potential issues that don't necessarily stop a process.",
			},
		},
	},
	args: {
		children: <ToastDemo variant="warning" />,
	},
};

const MultipleToasts = () => {
	const { displayToast } = useToast();
	return (
		<div className="flex gap-4">
			<Button
				variant="primary"
				onClick={() => displayToast("First toast", "default")}
			>
				Default Toast
			</Button>
			<Button
				variant="success"
				onClick={() => displayToast("Second toast", "success")}
			>
				Success Toast
			</Button>
			<Button
				variant="danger"
				onClick={() => displayToast("Third toast", "error")}
			>
				Error Toast
			</Button>
		</div>
	);
};

export const Multiple: Story = {
	parameters: {
		docs: {
			description: {
				story: "Demonstrates the stacking behavior and queue management when multiple toasts are triggered in quick succession.",
			},
		},
	},
	args: {
		children: <MultipleToasts />,
	},
};