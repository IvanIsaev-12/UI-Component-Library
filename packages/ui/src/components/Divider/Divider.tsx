import * as React from "react";
import { cn } from "../../lib/cn";


interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
    orientation?: "veritcal" | "horizontal";
}

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
    ({ className, orientation = "horizontal", ...props }, ref) => {
        return (
            <hr
                ref={ref}
                className={cn(
                    "border-neutral-300",
                    orientation === "horizontal"
                        ? "w-full border-t"
                        : "h-full border-l",
                    className
                )}  
                {...props}
            />
        );
    }
);

Divider.displayName = "Divider";

export {Divider};
export type {DividerProps};