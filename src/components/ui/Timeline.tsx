import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/animations/variants';

interface TimelineItem {
    year: string;
    title: string;
    description: string;
}

interface TimelineProps {
    items: TimelineItem[];
    className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={cn("relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-8", className)}
        >
            {items.map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="relative pl-8">
                    <div className="absolute w-4 h-4 bg-primary rounded-full left-[-9px] top-1.5 shadow-[0_0_0_4px_rgba(15,76,129,0.2)]" />
                    <span className="inline-block px-3 py-1 bg-accent/10 text-primary text-sm font-bold rounded-full mb-2">
                        {item.year}
                    </span>
                    <h4 className="text-xl font-heading font-bold text-text">{item.title}</h4>
                    <p className="mt-2 text-muted max-w-md">{item.description}</p>
                </motion.div>
            ))}
        </motion.div>
    );
}
