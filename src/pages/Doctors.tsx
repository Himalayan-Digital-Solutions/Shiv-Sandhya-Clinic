import { Navbar } from '@/layouts/Navbar';
import { Helmet } from 'react-helmet-async';
import { Footer } from '@/layouts/Footer';
import { Container } from '@/components/ui/Container';
import { DoctorProfileCard } from '@/components/ui/cards/DoctorProfileCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { FloatingActionButtons } from '@/components/ui/FloatingActionButtons';
import { BackToTop } from '@/components/ui/BackToTop';

import { doctorsData } from '@/data/doctors';

export default function Doctors() {
    return (
        <main className="min-h-screen bg-primary/5 relative selection:bg-primary/20 selection:text-primary">
            <Helmet>
                <title>Expert Doctors | Shiv Sandhya Clinic</title>
                <meta name="description" content="Meet our highly qualified team of professionals dedicated to providing you with the highest standard of personalized medical care in Patna." />
                <link rel="canonical" href="https://shivsandhyaclinic.com/doctors" />
            </Helmet>
            <Navbar />

            {/* Page Header */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl -z-10" />
                <Container>
                    <SectionHeader
                        title="Our Medical Experts"
                        subtitle="Meet our highly qualified team of professionals. We are committed to providing you with the highest standard of personalized medical care."
                        className="max-w-3xl border-b border-border/50 pb-12 mx-auto"
                    />
                </Container>
            </section>

            {/* Doctors List */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="flex flex-col gap-10 max-w-5xl mx-auto">
                        {doctorsData.map((doctor, idx) => (
                            <motion.div
                                key={doctor.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                            >
                                <DoctorProfileCard doctor={doctor} />
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            <Footer />
            <FloatingActionButtons />
            <BackToTop />
        </main>
    );
}
