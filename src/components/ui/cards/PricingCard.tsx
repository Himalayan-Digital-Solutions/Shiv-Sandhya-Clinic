import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface PricingCardProps {
    title: string;
    price: string;
    subtitle?: string;
    features: string[];
    isPopular?: boolean;
    className?: string;
}

export function PricingCard({ title, price, subtitle, features, isPopular = false, className }: PricingCardProps) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className={cn(
                "glass-card p-8 flex flex-col h-full relative transition-shadow hover:shadow-2xl",
                isPopular ? "border-primary shadow-xl scale-105 z-10" : "border-border/50",
                className
            )}
        >
            {isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
                    Most Recommended
                </div>
            )}

            <div className="text-center mb-8 border-b border-border pb-8">
                <h3 className="font-heading font-bold text-2xl text-text mb-2">{title}</h3>
                {subtitle && <p className="text-muted text-sm mb-6">{subtitle}</p>}
                <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-heading font-bold text-primary">{price}</span>
                </div>
            </div>

            <ul className="flex-grow space-y-4 mb-8">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted text-sm leading-relaxed">{feature}</span>
                    </li>
                ))}
            </ul>

            <Button variant={isPopular ? 'primary' : 'outline'} className="w-full mt-auto">
                Choose Plan
            </Button>
        </motion.div>
    );
}
