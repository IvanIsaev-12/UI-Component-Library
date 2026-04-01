import * as React from "react";
import { cn } from "../../lib/cn";

interface CheckboxProps extends Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	"type"
> {
	label?: string;
	id?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
	({ label, id, className, ...props }, ref) => {
		const generatedId = React.useId();
		const checkboxId = id || generatedId;

		return (
			<div className="flex items-center gap-2">
				<input
					type="checkbox"
					id={checkboxId}
					className={cn(
						"h-4 w-4 rounded border-border-muted",
						"text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
						"cursor-pointer transition-all duration-200 ease-in-out",
						"checked:animate-checkbox-pop",
						"disabled:cursor-not-allowed disabled:opacity-50",
						"dark:bg-background-subtle dark:checked:bg-primary-500",
						className
					)}
					ref={ref}
					aria-label={!label ? props["aria-label"] : undefined}
					{...props}
				/>
				{label && (
					<label
						htmlFor={checkboxId}
						className={cn(
							"text-sm font-medium text-foreground",
							"cursor-pointer select-none",
							"hover:text-foreground-muted transition-colors",
							"disabled:cursor-not-allowed disabled:opacity-50"
						)}
					>
						{label}
					</label>
				)}
			</div>
		);
	}
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
