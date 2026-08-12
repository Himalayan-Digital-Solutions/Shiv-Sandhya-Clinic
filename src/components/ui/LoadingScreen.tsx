import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center p-4 text-center"
        >
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(15,76,129,0.2)]"
            >
                <Activity className="w-12 h-12 text-primary animate-pulse" />
            </motion.div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-3">Shiv Sandhya Clinic</h2>
            <p className="text-muted text-sm tracking-[0.2em] uppercase font-bold">Preparing Experience</p>
        </motion.div>
    );
}
