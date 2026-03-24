import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { X } from "lucide-react";

const toastVariants = cva(
	"fixed bottom-4 right-4 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-white min-w-[300px] transition-all duration-300",
	{
		variants: {
			variant: {
				default: "bg-primary-500",
				success: "bg-success-500",
				error: "bg-danger-500",
				warning: "bg-warning-500"
			},
			animation: {
				enter: "animate-slide-in-right opacity-100",
				exit: "animate-slide-out-right opacity-0"
			}
		},
		defaultVariants: {
			variant: "default",
			animation: "enter"
		}
	}
)


interface ToastProps extends VariantProps<typeof toastVariants> {
	message: string,
	onClose: () => void
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
	({ message, variant, onClose, ...props }, ref) => {
		const [isExiting, setIsExiting] = React.useState(false);

		const handleClose = () => {
			setIsExiting(true);
			// Wait for animation to complete before calling onClose
			setTimeout(() => {
				onClose();
			}, 300); // Match the duration-300 in Tailwind
		};

		return (
			<div
				ref={ref}
				className={cn(toastVariants({ variant, animation: isExiting ? "exit" : "enter" }))}
				{...props}
			>
				<span className="flex-1">{message}</span>
				<button
					onClick={handleClose}
					className="text-white hover:opacity-75 transition-opacity"
				>
					<X className="h-4 w-4" />
				</button>
			</div>
		);
	}
);

Toast.displayName = "Toast";

export { Toast };
export type { ToastProps };
