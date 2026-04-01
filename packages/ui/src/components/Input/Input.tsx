import * as React from "react";
import { cn } from "../../lib/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	tip?: string;
	error?: string;
	className?: string;
	id?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ label, tip, error, className, id, ...props }, ref) => (
		<div className="flex flex-col gap-1 w-full">
			{label && (
				<label
					className="text-sm font-medium text-foreground-muted"
					htmlFor={id}
				>
					{label}
				</label>
			)}

			<input
				id={id}
				ref={ref}
				className={cn(
					"flex h-10 w-full rounded-md border px-3 py-1 text-sm outline-none",
					"bg-background text-foreground",
					"placeholder:text-placeholder",
					"border-border",
					"transition-all duration-300 ease-in-out",
					"hover:border-border-muted",
					"focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
					"disabled:opacity-50 disabled:cursor-not-allowed",
					error && "border-danger",
					className
				)}
				aria-invalid={!!error}
				aria-describedby={error ? `${id}-error` : tip ? `${id}-tip` : undefined}
				{...props}
			/>

			{tip && !error && (
				<span
					id={`${id}-tip`}
					className="text-xs text-foreground-subtle"
				>
					{tip}
				</span>
			)}

			{error && (
				<span
					id={`${id}-error`}
					className="text-xs text-danger"
				>
					{error}
				</span>
			)}
		</div>
	)
);

Input.displayName = "Input";

export { Input };
export type { InputProps };