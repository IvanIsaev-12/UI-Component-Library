import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const badgeVariants = cva(
	"inline-flex justify-center items-center rounded-full font-medium text-xs px-2 py-0.5 ",
	{
		variants: {
			variant: {
				primary: "bg-primary-200 text-primary-800",
				success: "bg-success-200 text-success-800",
				warning: "bg-warning-200 text-warning-800",
				neutral: "bg-neutral-200 text-neutral-600",
				danger: "bg-danger-200 text-danger-800",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	}
);
export interface BadgeProps
	extends React.ComponentProps<"span">, VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
	({ variant, className, ...props }, ref) => {
		const Comp = "span";
		return (
			<Comp className={cn(badgeVariants({ variant }), className)} {...props} />
		);
	}
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
