import { cn } from '@/utils/cn';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
    rating?: number;
    className?: string;
}

export function TestimonialCard({ name, role, content, rating = 5, className }: TestimonialCardProps) {
    return (
        <div className={cn("glass-card p-6 md:p-8 relative", className)}>
            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={cn("w-5 h-5", i < rating ? "text-yellow-400" : "text-gray-200")}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
            <p className="text-text/80 text-base leading-relaxed mb-6 pb-6 border-b border-border/50">
                "{content}"
            </p>
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                    {name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-heading font-bold text-text text-sm">{name}</h4>
                    <p className="text-muted text-xs">{role}</p>
                </div>
            </div>
        </div>
    );
}
