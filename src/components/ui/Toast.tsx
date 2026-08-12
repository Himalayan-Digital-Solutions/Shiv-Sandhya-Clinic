import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useEffect } from 'react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
    id: string;
    message: string;
    type?: ToastType;
    onClose: (id: string) => void;
    duration?: number;
}

export function Toast({ id, message, type = 'info', onClose, duration = 3000 }: ToastProps) {
    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => onClose(id), duration);
            return () => clearTimeout(timer);
        }
    }, [id, duration, onClose]);

    const icons = {
        success: <CheckCircle className="w-5 h-5 text-green-500" />,
        error: <AlertCircle className="w-5 h-5 text-red-500" />,
        info: <AlertCircle className="w-5 h-5 text-primary" />
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            layout
            className={cn(
                "flex items-center gap-3 px-4 py-3 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl border-l-4 pointer-events-auto min-w-[300px]",
                type === 'success' ? 'border-green-500' : type === 'error' ? 'border-red-500' : 'border-primary'
            )}
        >
            {icons[type]}
            <p className="flex-grow text-sm font-medium text-text">{message}</p>
            <button onClick={() => onClose(id)} className="text-muted hover:text-text focus:outline-none">
                <X className="w-4 h-4" />
            </button>
        </motion.div>
    );
}

export function ToastContainer({ toasts, removeToast }: { toasts: any[], removeToast: (id: string) => void }) {
    return (
        <div className="fixed bottom-0 right-0 z-[100] p-4 flex flex-col gap-3 pointer-events-none sm:p-6">
            <AnimatePresence>
                {toasts.map(toast => (
                    <Toast key={toast.id} {...toast} onClose={removeToast} />
                ))}
            </AnimatePresence>
        </div>
    );
}
