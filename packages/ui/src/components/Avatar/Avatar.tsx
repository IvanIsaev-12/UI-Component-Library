import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn'

export const avatarVariants = cva (
    'flex relative shrink-0 overflow-hidden',
    {
        variants: {
            size: {
                sm: 'h-8 w-8 text-xs',
                md: 'h-10 w-10 text-sm',
                lg: 'h-14 w-14 text-base',
            },
            shape: {
                circle: 'rounded-full',
                square: 'rounded-md'
            },
        },
        defaultVariants: {
            size: 'md',
            shape: 'circle',
        }
    }
);

export interface AvatarProps extends
    VariantProps<typeof avatarVariants> {
    src?: string;
    fallback?: string;
    alt?: string;
    className?: string;
}


export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps> (
    ({src, fallback, alt, className, size, shape}, ref) => {
        return (
            <AvatarPrimitive.Root
                ref={ref}
                className={cn(avatarVariants({size, shape}), className)}
            >
                <AvatarPrimitive.Image
                    src={src}
                    alt={alt}
                    className='h-full w-full object-cover'
                />
                <AvatarPrimitive.Fallback
                    className='flex h-full w-full justify-center items-center bg-neutral-300 text-neutral-700 font-medium'
                >
                    {fallback}
                </AvatarPrimitive.Fallback>
            </AvatarPrimitive.Root>
        )
    }
);

Avatar.displayName = "Avatar";