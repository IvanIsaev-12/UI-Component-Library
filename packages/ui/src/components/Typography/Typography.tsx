import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const typographyVariants = cva("", {
    variants: {
        variant: {
            h1: "text-4xl font-bold text-foreground",
            h2: "text-3xl font-bold text-foreground",
            h3: "text-2xl font-semibold text-foreground",
            h4: "text-xl font-semibold text-foreground",
            caption: "text-sm text-foreground-muted",
            label: "text-sm font-medium text-foreground-muted",
            body: "text-base text-foreground-muted",
        },
    },
    defaultVariants: {
        variant: "body",
    },
});

const elMap = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    caption: "span",
    label: "label",
    body: "p",
} as const;

export interface TypographyProps
    extends VariantProps<typeof typographyVariants>,
    React.HTMLAttributes<HTMLElement> {
    className?: string;
    children?: React.ReactNode;
}

export const Typography = ({
    variant,
    className,
    children,
    ...props
}: TypographyProps) => {
    const Component = elMap[variant ?? 'body'];

    return (
        <Component className={cn(typographyVariants({ variant }), className)} {...props}>
            {children}
        </Component>
    );
};

Typography.displayName = "Typography";