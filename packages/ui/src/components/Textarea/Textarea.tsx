import * as React from "react";
import { cn } from "../../lib/cn";




interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string,
    error?: string,
    resize?: "resize-none" | "resize-vertical",
    id?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, error, resize = "resize-vertical", className, rows = 4, cols, wrap, id, ...props }, ref) => {
        const generatedId = React.useId();
        const textareaId = id || generatedId;

        return (
            <div className="flex flex-col gap-1.5">
                {label && (
                    <label className="text-sm font-medium text-foreground" htmlFor={textareaId}>
                        {label}
                    </label>
                )}
                <textarea
                    id={textareaId}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${textareaId}-error` : undefined}
                    aria-label={!label ? props["aria-label"] : undefined}
                    ref={ref}
                    rows={rows}
                    cols={cols}
                    wrap={wrap}
                    className={cn(
                        "w-full rounded-md border px-3 py-2 text-sm",
                        "placeholder:text-placeholder",
                        "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        "transition-colors",
                        error
                            ? "border-danger-500 focus:ring-danger-500"
                            : "border-border",
                        resize === "resize-none" ? "resize-none" : "resize-y",
                        className
                    )}
                    {...props}
                />
                {error && (
                    <p id={`${textareaId}-error`} className="text-sm text-danger-600">{error}</p>
                )}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";

export { Textarea };

export type { TextareaProps }; 