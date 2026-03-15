import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const buttonVariants = cva(
	"inline-flex justify-center items-center gap-2 rounded-md transition-colors shrink-0 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				primary:
					"bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500",
				secondary:
					"bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-neutral-400",
				outline:
					"bg-transparent border border-neutral-300 hover:bg-neutral-50 text-neutral-900 focus-visible:ring-neutral-400",
				ghost:
					"hover:bg-neutral-100 text-neutral-900 focus-visible:ring-neutral-400",
				danger:
					"bg-danger-600 text-white hover:bg-danger-700 focus-visible:ring-danger-500",
				success: "bg-success-600 text-white hover:bg-success-700",
			},
			size: {
				sm: "h-8 px-3 text-xs",
				md: "h-10 px-4 text-sm",
				lg: "h-12 px-6 text-base",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	}
);

export interface ButtonProps
	extends
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	isLoading?: boolean;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			asChild = false,
			isLoading = false,
			children,
			disabled,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				disabled={disabled || isLoading}
				aria-busy={isLoading || undefined}
				{...props}
			>
				{isLoading ? <span>Loading...</span> : children}
			</Comp>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
