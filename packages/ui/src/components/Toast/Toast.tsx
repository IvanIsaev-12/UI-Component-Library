import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { X } from "lucide-react";

const toastVariants = cva(
	"fixed bottom-4 right-4 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-[300px] transition-all duration-300 border",
	{
		variants: {
			variant: {
				default: "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 border-neutral-200 dark:border-neutral-700",
				success: "bg-success-100 dark:bg-success-900 text-success-800 dark:text-success-100 border-success-200 dark:border-success-800",
				error: "bg-danger-100 dark:bg-danger-900 text-danger-800 dark:text-danger-100 border-danger-200 dark:border-danger-800",
				warning: "bg-warning-100 dark:bg-warning-900 text-warning-900 dark:text-warning-100 border-warning-200 dark:border-warning-800"
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
					className="hover:opacity-75 transition-opacity"
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
