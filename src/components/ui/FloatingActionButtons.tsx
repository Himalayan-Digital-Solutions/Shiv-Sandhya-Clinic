import { motion } from 'framer-motion';
import { PhoneCall, Navigation } from 'lucide-react';
import { CLINIC_INFO } from '@/constants';

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
);

export function FloatingActionButtons() {
    const whatsappUrl = `https://wa.me/917033166941?text=${encodeURIComponent("Hello! I would like to inquire about the clinic.")}`;
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_INFO.address)}`;

    return (
        <div className="fixed bottom-6 left-6 z-[100] flex flex-col gap-3">
            <motion.a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                initial={{ scale: 0, x: -50 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                aria-label="Get Directions"
            >
                <Navigation className="w-5 h-5 fill-current" />
            </motion.a>

            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                initial={{ scale: 0, x: -50 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                aria-label="WhatsApp Us"
            >
                <WhatsAppIcon className="w-6 h-6 fill-current" />
            </motion.a>

            <motion.a
                href={`tel:${CLINIC_INFO.phone.split(' / ')[0]}`}
                initial={{ scale: 0, x: -50 }}
                animate={{ scale: 1, x: 0 }}
                className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(15,76,129,0.4)] hover:scale-110 transition-transform duration-300"
                aria-label="Call Clinic"
            >
                <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
                >
                    <PhoneCall className="w-6 h-6 fill-current" />
                </motion.div>
            </motion.a>
        </div>
    );
}
