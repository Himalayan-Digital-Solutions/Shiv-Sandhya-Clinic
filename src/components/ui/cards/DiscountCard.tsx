import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

interface DiscountCardProps {
    title: string;
    description: string;
    discountPercentage: number;
    validUntil: string;
    className?: string;
    code?: string;
}

export function DiscountCard({ title, description, discountPercentage, validUntil, code, className }: DiscountCardProps) {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn("relative overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-primary/5 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group border border-border/60 hover:border-primary/30", className)}
        >
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />

            <div className="p-6 md:p-8 relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6 gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                            <Tag className="w-6 h-6" />
                        </div>
                        <h3 className="font-heading font-bold text-xl md:text-2xl text-text group-hover:text-primary transition-colors">{title}</h3>
                    </div>
                    <span className="bg-gradient-to-r from-secondary to-accent text-white font-bold px-4 py-1.5 rounded-full text-sm sm:text-base shadow-md group-hover:shadow-[0_4px_15px_rgba(44,182,125,0.4)] transition-all shrink-0">
                        {discountPercentage}% OFF
                    </span>
                </div>

                <p className="text-muted text-sm flex-grow mb-8 leading-relaxed font-medium">{description}</p>

                <div className="flex items-center justify-between border-t border-border/60 pt-5 mt-auto">
                    <div className="text-sm text-muted flex items-center gap-2">
                        Valid till: <span className="font-bold text-text bg-background px-3 py-1 rounded-lg shadow-sm border border-border/50">{validUntil}</span>
                    </div>
                    {code && (
                        <div className="bg-primary/5 border border-primary/30 text-primary px-4 py-1.5 rounded-xl text-sm font-bold tracking-widest border-dashed shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            {code}
                        </div>
                    )}
                </div>
            </div>

            {/* Hover Shine Effect */}
            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out skew-x-12 z-0" />
        </motion.div>
    );
}
