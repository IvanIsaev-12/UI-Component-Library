import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../../lib/cn";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogClose = DialogPrimitive.Close;

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
		className={cn("text-sm text-neutral-600 dark:text-neutral-400", className)}
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
			"fixed inset-0 bg-neutral-900/50",
			"data-[state=open]:animate-in data-[state=closed]:animate-out",
			"data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
			"duration-200",
			className
		)}
		{...props}
	/>
));

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
	React.ComponentRef<typeof DialogPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<DialogPrimitive.Portal>
		<DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
			className={cn(
				"fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]",
				"bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-xl rounded-2xl p-6",
				"w-[calc(100%-2rem)] sm:w-full max-w-lg",
				"max-h-[85vh] overflow-y-auto",
				"data-[state=open]:animate-in data-[state=closed]:animate-out",
				"data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
				"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
				"duration-300",
				className
			)}
			{...props}
		>
			<DialogPrimitive.Close
				className={cn(
					"absolute right-4 top-4 p-1 rounded-md",
					"text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-700",
					"opacity-70 hover:opacity-100",
					"transition-all",
					"focus:outline-none focus:ring-2 focus:ring-neutral-950 dark:focus:ring-neutral-300 focus:ring-offset-2",
					"disabled:pointer-events-none"
				)}
				aria-label="Close"
			>
				<X className="h-4 w-4" />
			</DialogPrimitive.Close>
			{children}
		</DialogPrimitive.Content>
	</DialogPrimitive.Portal>
));

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
