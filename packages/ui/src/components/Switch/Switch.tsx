import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import * as SwitchPrimitive from "@radix-ui/react-switch";

const switchVariants = cva(
	"relative inline-flex items-center shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-border-muted dark:data-[state=unchecked]:bg-border",
	{
		variants: {
			size: {
				sm: "h-5 w-9 p-0.5",
				md: "h-6 w-11 p-0.5",
				lg: "h-8 w-14 p-1",
			},
			variant: {
				primary:
					"data-[state=checked]:bg-primary-500 focus-visible:ring-primary-500",
				success:
					"data-[state=checked]:bg-success-500 focus-visible:ring-success-500",
				warning:
					"data-[state=checked]:bg-warning-500 focus-visible:ring-warning-500",
				danger:
					"data-[state=checked]:bg-danger-500 focus-visible:ring-danger-500",
			},
		},
		defaultVariants: {
			size: "md",
			variant: "primary",
		},
	}
);

const thumbVariants = cva(
	"block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-[calc(100%-4px)]",
	{
		variants: {
			size: {
				sm: "h-4 w-4",
				md: "h-5 w-5",
				lg: "h-6 w-6",
			},
		},
		defaultVariants: { size: "md" },
	}
);

interface SwitchThumbProps
	extends
		React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Thumb>,
		VariantProps<typeof thumbVariants> {}

const SwitchThumb = React.forwardRef<
	React.ComponentRef<typeof SwitchPrimitive.Thumb>,
	SwitchThumbProps
>(({ className, size, ...props }, ref) => {
	return (
		<SwitchPrimitive.Thumb
			ref={ref}
			className={cn(thumbVariants({ size }), className)}
			{...props}
		/>
	);
});

interface SwitchProps
	extends
		React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
		VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<
	React.ComponentRef<typeof SwitchPrimitive.Root>,
	SwitchProps
>(({ className, size, variant, ...props }, ref) => {
	return (
		<SwitchPrimitive.Root
			ref={ref}
			className={cn(switchVariants({ size, variant }), className)}
			{...props}
		>
			<SwitchThumb size={size} />
		</SwitchPrimitive.Root>
	);
});
Switch.displayName = "Switch";

export { Switch, switchVariants };
export type { SwitchProps };
