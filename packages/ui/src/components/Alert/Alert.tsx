import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

export const alertVariants = cva(
	"flex flex-col gap-1 border border-l-4 p-4 rounded-md shadow-sm",
	{
		variants: {
			variant: {
				info: "bg-primary-50 text-primary-900 border-primary-300 border-l-primary-500 dark:bg-primary-950 dark:text-primary-100 dark:border-primary-800 dark:border-l-primary-400",
				success:
					"bg-success-100 text-success-900 border-success-300 border-l-success-500 dark:bg-success-950 dark:text-success-100 dark:border-success-800 dark:border-l-success-400",
				warning:
					"bg-warning-100 text-warning-900 border-warning-300 border-l-warning-500 dark:bg-warning-950 dark:text-warning-100 dark:border-warning-800 dark:border-l-warning-400",
				danger:
					"bg-danger-100 text-danger-900 border-danger-300 border-l-danger-500 dark:bg-danger-950 dark:text-danger-100 dark:border-danger-800 dark:border-l-danger-400",
			},
		},
		defaultVariants: {
			variant: "info",
		},
	}
);

const AlertTitle = ({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
	<p
		className={cn("font-semibold text-base leading-tight", className)}
		{...props}
	/>
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = ({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
	<p
		className={cn("text-sm leading-relaxed opacity-90", className)}
		{...props}
	/>
);
AlertDescription.displayName = "AlertDescription";

export interface AlertProps extends VariantProps<typeof alertVariants> {
	className?: string;
	children?: React.ReactNode;
}

const Alert = ({ className, children, variant, ...props }: AlertProps) => {
	return (
		<div
			role="alert"
			className={cn(alertVariants({ variant }), className)}
			{...props}
		>
			{children}
		</div>
	);
};
Alert.displayName = "Alert";

export { Alert, AlertTitle, AlertDescription };
