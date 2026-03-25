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
				<label className="text-sm font-medium text-neutral-600 dark:text-neutral-400" htmlFor={id}>
					{label}
				</label>
			)}
			<input
				id={id}
				className={cn(
					"flex h-10 w-full text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600 rounded-md border bg-transparent px-3 py-1 outline-none disabled:opacity-50 disabled:cursor-not-allowed",
					"transition-all duration-300 ease-in-out",
					"hover:border-neutral-400 dark:hover:border-neutral-600",
					"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
					error ? "border-danger-500" : "border-neutral-300 dark:border-neutral-700",
					className
				)}
				ref={ref}
				aria-invalid={!!error}
				aria-describedby={error ? `${id}-error` : undefined}
				{...props}
			/>
			{tip && <span className="text-xs text-neutral-600 dark:text-neutral-400">{tip}</span>}
			{error && (
				<span className="text-xs text-danger-600" id={`${id}-error`}>
					{error}
				</span>
			)}
		</div>
	)
);

Input.displayName = "Input";

export { Input };
export type { InputProps };
