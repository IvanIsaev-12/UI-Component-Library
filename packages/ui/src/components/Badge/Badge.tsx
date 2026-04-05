import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const badgeVariants = cva(
	"inline-flex justify-center items-center rounded-full font-medium text-xs px-2 py-0.5 ",
	{
		variants: {
			variant: {
				primary:
					"bg-primary-200 text-primary-800 dark:bg-primary-900 dark:text-primary-200",
				success:
					"bg-success-200 text-success-800 dark:bg-success-900 dark:text-success-200",
				warning:
					"bg-warning-200 text-warning-800 dark:bg-warning-900 dark:text-warning-200",
				neutral:
					"bg-background-muted text-foreground-muted",
				danger:
					"bg-danger-200 text-danger-800 dark:bg-danger-900 dark:text-danger-200",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	}
);

export interface BadgeProps
	extends React.ComponentProps<"span">,
		VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
	({ variant, className, ...props }, ref) => (
		<span
			ref={ref}
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	)
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
