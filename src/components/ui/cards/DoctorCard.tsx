import { Doctor } from '@/types';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

interface DoctorCardProps {
    doctor: Doctor;
    className?: string;
}

export function DoctorCard({ doctor, className }: DoctorCardProps) {
    return (
        <motion.div
            className={cn("glass-card overflow-hidden group flex flex-col h-full", className)}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
        >
            <div className="h-64 overflow-hidden relative bg-muted/20">
                <img
                    src={doctor.image || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"}
                    alt={doctor.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-heading font-bold text-white">{doctor.name}</h3>
                    <p className="text-accent text-sm font-medium">{doctor.specialty}</p>
                </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <p className="text-muted text-sm mb-3 flex-grow">Experience: {doctor.experience}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {doctor.availability.map((day, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md font-medium">
                            {day}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
