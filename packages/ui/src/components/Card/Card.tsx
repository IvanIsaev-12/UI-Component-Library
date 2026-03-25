import * as React from "react";
import { cn } from "../../lib/cn";



const CardTitle = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (

    <h3
        className={cn("text-lg font-semibold text-neutral-900 dark:text-neutral-50", className)}
        {...props}
    />
);

CardTitle.displayName = "CardTitle";


const CardHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (

    <div
        className={cn("flex flex-col gap-1.5 mb-4", className)}
        {...props}
    />
);

CardHeader.displayName = "CardHeader";

const CardDescription = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (

    <p
        className={cn("text-sm text-neutral-600 dark:text-neutral-400", className)}
        {...props}
    />
);

CardDescription.displayName = "CardDescription";

const CardFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (

    <div
        className={cn("flex flex-row gap-2 mt-4", className)}
        {...props}
    />
);

CardFooter.displayName = "CardFooter";

const CardContent = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (

    <div
        className={cn("text-sm", className)}
        {...props}
    />
);

CardContent.displayName = "CardContent";

const Card = ({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (

    <div className={cn("bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm p-6", className)} {...props}>
        {children}
    </div>
);

Card.displayName = "Card";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };