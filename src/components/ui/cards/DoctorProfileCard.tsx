import { Doctor } from '@/types';
import { cn } from '@/utils/cn';
import { AppointmentButton } from '@/components/ui/AppointmentButton';
import { CalendarDays, Clock, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface DoctorProfileCardProps {
    doctor: Doctor;
    className?: string;
}

export function DoctorProfileCard({ doctor, className }: DoctorProfileCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className={cn("glass-card overflow-hidden flex flex-col md:flex-row transition-all shadow-md hover:shadow-xl", className)}
        >
            <div className="w-full md:w-1/3 h-64 md:h-auto overflow-hidden relative">
                <img
                    src={doctor.image}
                    alt={doctor.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
                />
                {doctor.availableToday && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-600 flex items-center gap-2 shadow-sm border border-white/40">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Available Today
                    </div>
                )}
            </div>

            <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                <div>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4 border-b border-border/50 pb-4">
                        <div>
                            <h3 className="text-2xl font-heading font-bold text-primary mb-1">{doctor.name}</h3>
                            <p className="text-accent font-medium">{doctor.specialty}</p>
                        </div>
                        <div className="bg-primary/5 px-4 py-2 rounded-xl text-center shadow-sm">
                            <span className="block text-xl font-bold text-primary">{doctor.experience}</span>
                            <span className="text-[10px] text-muted uppercase tracking-wider font-bold">Experience</span>
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                            <GraduationCap className="w-5 h-5 text-muted shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-semibold text-text mb-0.5">Qualification</p>
                                <p className="text-muted text-sm">{doctor.qualification}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <CalendarDays className="w-5 h-5 text-muted shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-semibold text-text mb-1.5">Visiting Days</p>
                                <div className="flex flex-wrap gap-2">
                                    {doctor.availability.map((day, idx) => (
                                        <span key={idx} className="bg-white border border-border text-muted text-xs px-2.5 py-1 rounded-md font-medium shadow-sm">
                                            {day}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {doctor.schedule && (
                            <div className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-muted shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-text mb-1.5">Schedule</p>
                                    <ul className="text-sm text-muted space-y-1">
                                        {doctor.schedule.map((slot, sIdx) => (
                                            <li key={sIdx} className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-accent/50 rounded-full" />
                                                <span className="font-medium min-w-[50px]">{slot.day}:</span>
                                                <span>{slot.time}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto border-t border-border/50 pt-6">
                    <AppointmentButton className="w-full sm:w-auto flex-1 shadow-sm" showIcon />
                    <button className="text-sm font-medium text-primary hover:text-accent transition-colors w-full sm:w-auto text-center py-2">
                        View Detailed Profile
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
