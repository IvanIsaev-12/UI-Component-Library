import * as React from "react";
import { cn } from "../../lib/cn";



interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string,
    id?: string
}


const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, id, className, ...props }, ref) => (
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                id={id}
                className={cn(
                    "h-4 w-4 rounded border-neutral-300",
                    "text-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                    "cursor-pointer transition-colors",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
            {label && (
                <label
                    htmlFor={id}
                    className={cn(
                        "text-sm font-medium text-neutral-900",
                        "cursor-pointer select-none",
                        "hover:text-neutral-600 transition-colors",
                        "disabled:cursor-not-allowed disabled:opacity-50"
                    )}
                >
                    {label}
                </label>
            )}
        </div>
    )
);

Checkbox.displayName = "Checkbox";

export { Checkbox };