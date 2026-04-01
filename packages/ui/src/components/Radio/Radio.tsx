import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const radioVariants = cva(
	"peer shrink-0 rounded-full border-2 ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50",
	{
		variants: {
			size: {
				sm: "h-3 w-3",
				md: "h-4 w-4",
				lg: "h-5 w-5",
			},
		},
		defaultVariants: {
			size: "md",
		},
	}
);

interface RadioProps
	extends
		Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
		VariantProps<typeof radioVariants> {
	label?: string;
	id?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
	({ className, label, size, id, ...props }, ref) => {
		const radioId = id || React.useId();
		return (
			<div className=" flex items-center gap-2">
				<input
					type="radio"
					ref={ref}
					id={radioId}
					className={cn(
						radioVariants({ size }),
						"border-border-muted text-primary-500 cursor-pointer transition-all duration-200 ease-in-out",
						"checked:bg-primary-500 checked:border-primary-500",
						"checked:animate-radio-pop",
						className
					)}
					{...props}
				/>
				{label && (
					<label
						htmlFor={radioId}
						className="text-sm font-medium cursor-pointer select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
					>
						{label}
					</label>
				)}
			</div>
		);
	}
);

Radio.displayName = "Radio";

export { Radio, radioVariants };
export type { RadioProps };
