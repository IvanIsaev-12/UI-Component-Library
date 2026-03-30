import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { ChevronRight } from "lucide-react";

const BreadcrumbItem = ({
	className,
	...props
}: React.LiHTMLAttributes<HTMLLIElement>) => (
	<li className={cn("inline-flex items-center gap-2 ", className)} {...props} />
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = ({
	className,
	...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
	<a
		className={cn(
			"transition-colors hover:text-foreground font-medium text-neutral-600 dark:text-neutral-300",
			className
		)}
		{...props}
	/>
);
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbList = ({
	className,
	...props
}: React.OlHTMLAttributes<HTMLOListElement>) => (
	<ol
		className={cn(
			"flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400",
			className
		)}
		{...props}
	/>
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbPage = ({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
	<span
		role="link"
		aria-disabled="true"
		aria-current="page"
		className={cn(
			"font-medium text-neutral-900 dark:text-neutral-50",
			className
		)}
		{...props}
	/>
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
	children,
	className,
	...props
}: React.LiHTMLAttributes<HTMLLIElement>) => (
	<li
		role="presentation"
		aria-hidden="true"
		className={cn("text-neutral-400 dark:text-neutral-500", className)}
		{...props}
	>
		{children ?? <ChevronRight className="w-4 h-4" />}
	</li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
const Breadcrumb = React.forwardRef<
	HTMLElement,
	React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
	return (
		<nav
			ref={ref}
			aria-label="breadcrumb"
			className={cn("relative", className)}
			{...props}
		/>
	);
});

Breadcrumb.displayName = "Breadcrumb";

export {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
};
