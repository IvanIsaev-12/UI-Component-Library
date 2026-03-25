import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, AlertTitle, AlertDescription } from "@ui-component-lib/ui";

const meta: Meta<typeof Alert> = {
	title: "Components/Alert",
	component: Alert,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
	args: {
		variant: "info",
		children: (
			<>
				<AlertTitle>Information</AlertTitle>
				<AlertDescription>This is an informational alert.</AlertDescription>
			</>
		),
	},
};

export const Success: Story = {
	args: {
		variant: "success",
		children: (
			<>
				<AlertTitle>Success</AlertTitle>
				<AlertDescription>Your action was completed successfully.</AlertDescription>
			</>
		),
	},
};

export const Warning: Story = {
	args: {
		variant: "warning",
		children: (
			<>
				<AlertTitle>Warning</AlertTitle>
				<AlertDescription>Please review this important information.</AlertDescription>
			</>
		),
	},
};

export const Danger: Story = {
	args: {
		variant: "danger",
		children: (
			<>
				<AlertTitle>Error</AlertTitle>
				<AlertDescription>An error occurred while processing your request.</AlertDescription>
			</>
		),
	},
};