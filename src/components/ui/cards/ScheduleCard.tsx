import { cn } from '@/utils/cn';

interface ScheduleCardProps {
    day: string;
    time: string;
    isOpen: boolean;
    className?: string;
}

export function ScheduleCard({ day, time, isOpen, className }: ScheduleCardProps) {
    const timeParts = time.split(' | ');

    return (
        <div className={cn("flex items-center p-3 sm:p-4 border-b border-border/60 last:border-0 gap-3 sm:gap-6 hover:bg-slate-50/50 transition-colors", className)}>
            <span className="font-medium text-text w-[100px] sm:w-[130px] shrink-0 inline-block">{day}</span>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-2 flex-grow">
                {timeParts.map((part, idx) => (
                    <span key={idx} className="text-muted text-xs sm:text-sm whitespace-nowrap flex items-center">
                        {part}
                        {idx < timeParts.length - 1 && (
                            <span className="hidden lg:inline-block ml-2 text-border">|</span>
                        )}
                    </span>
                ))}
            </div>

            <div className="shrink-0 ml-auto">
                {isOpen ? (
                    <span className="bg-secondary/15 text-secondary text-xs px-2.5 py-1 rounded-md font-bold shadow-sm">Open</span>
                ) : (
                    <span className="bg-red-500/10 text-red-500 text-xs px-2.5 py-1 rounded-md font-bold shadow-sm">Closed</span>
                )}
            </div>
        </div>
    );
}
