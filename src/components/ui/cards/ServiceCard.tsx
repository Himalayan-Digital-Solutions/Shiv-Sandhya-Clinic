import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
    title: string;
    description: string;
    Icon: LucideIcon;
    href?: string;
    className?: string;
}

export function ServiceCard({ title, description, Icon, href = '#', className }: ServiceCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(15,76,129,0.15)" }}
            className={cn("glass-card p-6 md:p-8 group flex flex-col transition-all duration-300", className)}
        >
            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-heading font-bold text-text mb-3">{title}</h3>
            <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">{description}</p>

            <Link
                to={href}
                className="inline-flex items-center text-primary font-medium text-sm hover:text-accent transition-colors mt-auto"
            >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    );
}
