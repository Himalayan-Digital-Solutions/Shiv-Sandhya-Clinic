import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { PhoneCall, AlertTriangle, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '@/constants';

interface EmergencyCardProps {
    className?: string;
}

export function EmergencyCard({ className }: EmergencyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                "rounded-[2rem] bg-gradient-to-br from-red-600 via-red-500 to-red-700 p-8 md:p-12 text-white shadow-[0_20px_50px_rgba(220,38,38,0.3)] relative overflow-hidden",
                className
            )}
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-between">
                <div className="flex-1 flex flex-col md:flex-row items-center text-center md:text-left gap-6">
                    <div className="w-20 h-20 shrink-0 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 shadow-inner">
                        <AlertTriangle className="w-10 h-10 text-white" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-heading font-bold mb-2">Medical Emergency?</h3>
                        <p className="text-red-100 text-lg">We provide prioritized support for urgent medical situations requiring immediate attention.</p>
                    </div>
                </div>

                <div className="shrink-0 flex flex-col items-center gap-4">
                    <a
                        href={`tel:${CLINIC_INFO.phone}`}
                        className="flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-red-50 hover:scale-105 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] group"
                    >
                        <PhoneCall className="w-6 h-6 group-hover:animate-bounce" />
                        <span className="text-xl">{CLINIC_INFO.phone}</span>
                    </a>
                    <button className="text-red-100 flex items-center gap-2 hover:text-white transition-colors text-sm font-medium">
                        View Emergency Protocol <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
