import * as React from "react";
import { cn } from "../../lib/cn";




interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string,
    error?: string,
    resize?: "resize-none" | "resize-vertical",
    id?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, error, resize = "resize-vertical", className, rows = 4, cols, wrap, id, ...props }, ref) => (
        <div className="flex flex-col gap-1.5">
            {label && (
                <label className="text-sm font-medium text-neutral-900 dark:text-neutral-50" htmlFor={id}>
                    {label}
                </label>
            )}
            <textarea
                id={id}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
                ref={ref}
                rows={rows}
                cols={cols}
                wrap={wrap}
                className={cn(
                    "w-full rounded-md border px-3 py-2 text-sm",
                    "placeholder:text-neutral-400 dark:placeholder:text-neutral-600",
                    "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    "transition-colors",
                    error
                        ? "border-danger-500 focus:ring-danger-500"
                        : "border-neutral-300 dark:border-neutral-700",
                    resize === "resize-none" ? "resize-none" : "resize-y",
                    className
                )}
                {...props}
            />
            {error && (
                <p id={`${id}-error`} className="text-sm text-danger-600">{error}</p>
            )}
        </div>
    )
);

Textarea.displayName = "Textarea";

export { Textarea };

export type { TextareaProps }; 