import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../../lib/cn";

const tooltipContentStyles = `
  z-50 rounded-md
  bg-neutral-900 px-3 py-1.5
  text-sm text-white shadow-md
  animate-in fade-in-0 zoom-in-95
  data-[state=closed]:animate-out
  data-[state=closed]:fade-out-0
  data-[state=closed]:zoom-out-95
  data-[side=top]:slide-in-from-bottom-2
  data-[side=right]:slide-in-from-left-2
  data-[side=bottom]:slide-in-from-top-2
  data-[side=left]:slide-in-from-right-2
`;

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;


interface TooltipContentProps extends
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
    sideOffset?: number;
    arrow?: boolean;
}


const TooltipContent = React.forwardRef<
    React.ComponentRef<typeof TooltipPrimitive.Content>,
    TooltipContentProps
>(({ className, sideOffset = 4, arrow, children, ...props }, ref) => (
    <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(tooltipContentStyles, className)}
            {...props}
        >
            {children}
            {arrow && (
                <TooltipPrimitive.Arrow className="size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] bg-neutral-900 fill-neutral-900" />
            )}
        </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
));

TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
