import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DoctorCard } from '@/components/ui/cards/DoctorCard';
import { Button } from '@/components/ui/Button';
import { staggerContainer, fadeInUp } from '@/animations/variants';
import { doctorsData } from '@/data/doctors';

export function DoctorPreview() {
    return (
        <section id="doctors" className="py-20 md:py-32 bg-white relative">
            <Container>
                <SectionHeader
                    title="Meet Our Experts"
                    subtitle="Our clinic is led by some of the most experienced and compassionate medical professionals in Patna."
                    className="mb-16 max-w-3xl mx-auto"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {doctorsData.map(doctor => (
                        <motion.div key={doctor.id} variants={fadeInUp}>
                            <DoctorCard doctor={doctor} />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-16 text-center">
                    <Button variant="outline">View All Doctors</Button>
                </div>
            </Container>
        </section>
    );
}
