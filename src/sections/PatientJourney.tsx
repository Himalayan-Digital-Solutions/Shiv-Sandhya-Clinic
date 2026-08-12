import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Timeline } from '@/components/ui/Timeline';

const timelineData = [
    { year: 'Step 1', title: 'Book Appointment', description: 'Schedule your visit online or via phone easily.' },
    { year: 'Step 2', title: 'Arrival & Registration', description: 'A smooth, digital registration process upon arrival.' },
    { year: 'Step 3', title: 'Expert Consultation', description: 'Dedicated time with our specialists without rush.' },
    { year: 'Step 4', title: 'Treatment & Follow-up', description: 'Clear next steps, prescriptions, and follow-up plans.' },
];

export function PatientJourney() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <Container>
                <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
                    <div className="w-full md:w-1/2">
                        <SectionHeader
                            title="Your Seamless Experience"
                            subtitle="From the moment you connect with us, we ensure your healthcare journey is smooth, transparent, and comforting."
                            alignment="left"
                            className="mb-12"
                        />
                        <div className="bg-primary/5 rounded-3xl p-8">
                            <Timeline items={timelineData} />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                            alt="Patient Journey"
                            className="rounded-[2.5rem] shadow-2xl object-cover h-[600px] w-full"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
