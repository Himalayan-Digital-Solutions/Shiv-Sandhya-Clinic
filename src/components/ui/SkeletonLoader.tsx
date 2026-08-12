import { cn } from '@/utils/cn';

interface SkeletonProps {
    className?: string;
}

export function SkeletonLoader({ className }: SkeletonProps) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-muted/20",
                className
            )}
        />
    );
}
