import * as React from "react";
import { cn } from "../../lib/cn";

const CardTitle = ({
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
	<h3
		className={cn("text-lg font-semibold text-foreground", className)}
		{...props}
	/>
);

CardTitle.displayName = "CardTitle";

const CardHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("flex flex-col gap-1.5 mb-4", className)} {...props} />
);

CardHeader.displayName = "CardHeader";

const CardDescription = ({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
	<p
		className={cn("text-sm text-foreground-muted", className)}
		{...props}
	/>
);

CardDescription.displayName = "CardDescription";

const CardFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("flex flex-row gap-2 mt-4", className)} {...props} />
);

CardFooter.displayName = "CardFooter";

const CardContent = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("text-sm", className)} {...props} />
);

CardContent.displayName = "CardContent";

const Card = ({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"p-6 bg-background-muted border border-border rounded-xl shadow-sm",
			className
		)}
		{...props}
	>
		{children}
	</div>
);

Card.displayName = "Card";

export {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
};
