"use client";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../../lib/cn";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogClose = DialogPrimitive.Close;
const DialogPortal = DialogPrimitive.Portal;

const DialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("flex flex-col gap-1.5 mb-4", className)} {...props} />
);

DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("flex justify-end gap-2 mt-4", className)} {...props} />
);

DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef<
	React.ComponentRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cn("text-lg font-semibold", className)}
		{...props}
	/>
));

DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef<
	React.ComponentRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cn("text-sm text-foreground-subtle", className)}
		{...props}
	/>
));

DialogDescription.displayName = DialogPrimitive.Description.displayName;

const DialogOverlay = React.forwardRef<
	React.ComponentRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cn(
			"fixed inset-0 z-50 bg-black/50",
			"data-[state=open]:animate-in data-[state=closed]:animate-out",
			"data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
			className
		)}
		{...props}
	/>
));

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
	React.ComponentRef<typeof DialogPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
	return (
		<DialogPrimitive.Portal>
			<DialogOverlay />
			<DialogPrimitive.Content
				ref={ref}
				className={cn(
					"fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-50",
					"bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl rounded-2xl p-6",
					"text-neutral-900 dark:text-neutral-50",
					"w-[calc(100%-2rem)] sm:w-full max-w-lg",
					"max-h-[85vh] overflow-y-auto",
					"data-[state=open]:animate-in data-[state=closed]:animate-out",
					"data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
					"data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
					className
				)}
				{...props}
			>
				<DialogPrimitive.Close
					className={cn(
						"absolute right-4 top-4 p-2 rounded-md",
						"text-neutral-600 dark:text-neutral-400",
						"hover:text-neutral-900 dark:hover:text-neutral-50",
						"hover:bg-neutral-100 dark:hover:bg-neutral-800",
						"transition-all",
						"focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
						"disabled:pointer-events-none"
					)}
					aria-label="Close"
				>
					<X className="h-5 w-5" />
				</DialogPrimitive.Close>
				{children}
			</DialogPrimitive.Content>
		</DialogPrimitive.Portal>
	);
});

DialogContent.displayName = DialogPrimitive.Content.displayName;

export {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogTitle,
	DialogDescription,
	DialogTrigger,
	DialogClose,
};
