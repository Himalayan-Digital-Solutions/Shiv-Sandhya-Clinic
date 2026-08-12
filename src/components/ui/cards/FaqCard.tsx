import { useState } from 'react';
import { FaqItem } from '@/types';
import { cn } from '@/utils/cn';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FaqCardProps {
    item: FaqItem;
    className?: string;
}

export function FaqCard({ item, className }: FaqCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn("glass-card p-4 transition-all duration-300 hover:shadow-lg", className, isOpen ? "border-primary/50" : "")}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between text-left focus:outline-none"
            >
                <span className="font-medium text-lg text-text">{item.question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary flex-shrink-0 ml-4"
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="pt-4 text-muted text-base leading-relaxed">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
