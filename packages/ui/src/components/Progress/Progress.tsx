import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const progressVariants = cva(
	"w-full bg-background-muted rounded-full overflow-hidden",
	{
		variants: {
			variant: {
				primary: "[&>div]:bg-primary-500",
				success: "[&>div]:bg-success-500",
				warning: "[&>div]:bg-warning-500",
				danger: "[&>div]:bg-danger-500",
			},
			size: {
				sm: "h-1",
				md: "h-2",
				lg: "h-4",
			},
		},
		defaultVariants: {
			size: "md",
			variant: "primary",
		},
	}
);

interface ProgressProps
	extends
		React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof progressVariants> {
	value?: number;
	maximum?: number;
	label?: string;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
	(
		{ className, value = 0, variant, maximum = 100, size, label, ...props },
		ref
	) => {
		const percentage = Math.min(Math.max((value / maximum) * 100, 0), 100);

		// Development-time accessibility warning
		React.useEffect(() => {
			// @ts-ignore - process.env is replaced at build time
			if (
				typeof process !== "undefined" &&
				process.env?.NODE_ENV === "development"
			) {
				const hasAccessibleName =
					label || props["aria-label"] || props["aria-labelledby"];
				if (!hasAccessibleName) {
					console.warn(
						"Progress: Missing accessible label.\n" +
							"Please add one of: label prop, aria-label, or aria-labelledby.\n" +
							'Example: <Progress value={50} label="Upload progress" />\n\n' +
							"This ensures screen readers can announce the progress bar's purpose."
					);
				}
			}
		}, [label, props["aria-label"], props["aria-labelledby"]]);

		return (
			<div
				ref={ref}
				className={cn(progressVariants({ size, variant }), className)}
				role="progressbar"
				aria-valuenow={value}
				aria-valuemin={0}
				aria-valuemax={maximum}
				aria-label={label}
				{...props}
			>
				<div
					className="h-full transition-all duration-300 ease-in-out"
					style={{ width: `${percentage}%` }}
				/>
			</div>
		);
	}
);

Progress.displayName = "Progress";

export { Progress, progressVariants };
export type { ProgressProps };
