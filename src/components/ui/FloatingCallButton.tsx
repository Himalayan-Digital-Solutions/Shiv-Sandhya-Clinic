import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function FloatingCallButton() {
    return (
        <motion.a
            href="tel:+910000000000" // Replace with actual number
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(44,182,125,0.4)] hover:bg-secondary/90 hover:scale-110 transition-all duration-300 md:hidden"
            aria-label="Call Clinic"
        >
            <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
            >
                <Phone className="w-6 h-6 fill-current" />
            </motion.div>
        </motion.a>
    );
}
