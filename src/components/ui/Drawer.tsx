import { useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    direction?: 'left' | 'right';
    children: ReactNode;
    className?: string;
}

export function Drawer({ isOpen, onClose, direction = 'right', children, className }: DrawerProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ x: direction === 'right' ? '100%' : '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: direction === 'right' ? '100%' : '-100%' }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className={cn(
                            "fixed top-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl overflow-y-auto",
                            direction === 'right' ? "right-0" : "left-0",
                            className
                        )}
                    >
                        <div className="absolute top-4 right-4 z-10">
                            <button
                                onClick={onClose}
                                className="rounded-full p-2 bg-muted/10 hover:bg-muted/20 transition-colors focus:outline-none"
                            >
                                <X className="w-5 h-5 text-text" />
                            </button>
                        </div>
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
