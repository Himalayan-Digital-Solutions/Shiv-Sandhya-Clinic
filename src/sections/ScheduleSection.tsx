import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScheduleCard } from '@/components/ui/cards/ScheduleCard';

const schedule = [
    { day: 'Monday', time: '08:00 AM - 10:00 AM | 04:00 PM - 08:00 PM', isOpen: true },
    { day: 'Tuesday', time: '08:00 AM - 10:00 AM | 04:00 PM - 08:00 PM', isOpen: true },
    { day: 'Wednesday', time: '08:00 AM - 10:00 AM | 04:00 PM - 08:00 PM', isOpen: true },
    { day: 'Thursday', time: '08:00 AM - 10:00 AM | 04:00 PM - 08:00 PM', isOpen: true },
    { day: 'Friday', time: '08:00 AM - 10:00 AM | 04:00 PM - 08:00 PM', isOpen: true },
    { day: 'Saturday', time: 'Closed', isOpen: false },
    { day: 'Sunday', time: '08:00 AM - 10:00 AM | 04:00 PM - 08:00 PM', isOpen: true },
];

export function ScheduleSection() {
    return (
        <section id="schedule" className="py-20 bg-primary/5">
            <Container>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto items-center">
                    <div className="w-full lg:w-[45%]">
                        <SectionHeader
                            title="OPD Timings"
                            subtitle="Plan your visit according to our standard operating hours. For emergencies, please call our hotline directly."
                            alignment="left"
                            className="mb-8"
                        />
                        <div className="p-6 bg-white rounded-2xl shadow-soft border border-border">
                            <h4 className="font-bold text-lg mb-4 text-primary">Need an appointment fast?</h4>
                            <p className="text-muted text-sm mb-6">Booking in advance helps us minimize your waiting time and provide the best care.</p>
                            <div className="flex items-center gap-4 bg-secondary/10 p-4 rounded-xl">
                                <span className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold shrink-0">Call</span>
                                <div>
                                    <p className="text-xs text-muted mb-1">Direct Line</p>
                                    <p className="font-heading font-bold text-lg">7033166941</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[55%]">
                        <div className="glass-card p-3 sm:p-5">
                            {schedule.map((item, idx) => (
                                <ScheduleCard key={idx} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
