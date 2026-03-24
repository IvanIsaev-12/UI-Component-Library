import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ToastProvider, useToast, Button } from "@ui-component-lib/ui";

// Wrapper component for Storybook
const ToastWrapper = ({ children }: { children: React.ReactNode }) => {
    return <ToastProvider>{children}</ToastProvider>;
};

const meta = {
    title: "Components/Toast",
    component: ToastWrapper,
    tags: ["autodocs"],
} satisfies Meta<typeof ToastWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

const ToastDemo = ({ variant }: { variant?: "default" | "success" | "error" | "warning" }) => {
    const { displayToast } = useToast();

    // Map toast variants to button variants
    const buttonVariant = variant === "error" ? "danger" : variant === "default" ? "primary" : variant;

    return (
        <Button
            variant={buttonVariant as any}
            onClick={() => displayToast(`This is a ${variant || "default"} toast!`, variant)}
        >
            Show {variant || "default"} Toast
        </Button>
    );
};

export const Default: Story = {
    args: {
        children: <ToastDemo variant="default" />,
    },
};

export const Success: Story = {
    args: {
        children: <ToastDemo variant="success" />,
    },
};

export const Error: Story = {
    args: {
        children: <ToastDemo variant="error" />,
    },
};

export const Warning: Story = {
    args: {
        children: <ToastDemo variant="warning" />,
    },
};

const MultipleToasts = () => {
    const { displayToast } = useToast();

    return (
        <div className="flex gap-4">
            <Button variant="primary" onClick={() => displayToast("First toast", "default")}>
                Default Toast
            </Button>
            <Button variant="success" onClick={() => displayToast("Second toast", "success")}>
                Success Toast
            </Button>
            <Button variant="danger" onClick={() => displayToast("Third toast", "error")}>
                Error Toast
            </Button>
        </div>
    );
};

export const Multiple: Story = {
    args: {
        children: <MultipleToasts />,
    },
};
