import { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'danger' | 'success';
}

export function Badge({ variant = 'primary', className, children, ...props }: BadgeProps) {
    const variants = {
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-white',
        accent: 'bg-accent/20 text-primary',
        outline: 'border border-border text-muted bg-transparent',
        danger: 'bg-red-500/10 text-red-500',
        success: 'bg-green-500/10 text-green-600',
    };

    return (
        <span
            className={cn("px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider", variants[variant], className)}
            {...props}
        >
            {children}
        </span>
    );
}
