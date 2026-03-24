import * as React from "react";
import { cn } from "../../lib/cn";


interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn("animate-pulse rounded-md bg-neutral-200", className)}
				{...props}
			/>
		)
	}
);

export type { SkeletonProps };

Skeleton.displayName = "Skeleton";

export { Skeleton };
