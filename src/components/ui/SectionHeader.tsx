import { cn } from '@/utils/cn';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    alignment?: 'left' | 'center';
    className?: string;
}

export function SectionHeader({ title, subtitle, alignment = 'center', className }: SectionHeaderProps) {
    return (
        <div className={cn('flex flex-col gap-2', alignment === 'center' ? 'items-center text-center' : 'items-start text-left', className)}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted text-lg max-w-2xl mt-2">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
