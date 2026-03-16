import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const spinnerVariants = cva("animate-spin", {
	variants: {
		size: {
			sm: "h-6 w-6",
			md: "h-8 w-8",
			lg: "h-10 w-10",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export interface SpinnerProps
	extends VariantProps<typeof spinnerVariants>,
		React.SVGProps<SVGSVGElement> {
	className?: string;
}

export const Spinner = ({ size, className, ...props }: SpinnerProps) => {
	return (
		<svg
			className={cn(spinnerVariants({ size }), className)}
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			role="status"
			aria-labelledby="spinner-title"
			{...props}
		>
			<title id="spinner-title">Loading</title>
			<style>
				{`
				.spinner_V8m1 {
					transform-origin: center;
					animation: spinner_zKoa 2s linear infinite;
				}
				.spinner_V8m1 circle {
					stroke-linecap: round;
					animation: spinner_YpZS 2s ease-in-out infinite;
				}
				@keyframes spinner_zKoa {
					100% { transform: rotate(360deg); }
				}
				@keyframes spinner_YpZS {
					0%, 100% { stroke-dasharray: 1 150; stroke-dashoffset: 0; }
					50% { stroke-dasharray: 90 150; stroke-dashoffset: -35; }
				}
			`}
			</style>
			<g className="spinner_V8m1">
				<circle cx="12" cy="12" r="10" fill="none" strokeWidth="4" />
			</g>
		</svg>
	);
};

Spinner.displayName = "Spinner";
