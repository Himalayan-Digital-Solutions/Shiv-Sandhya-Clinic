import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ServiceCard } from '@/components/ui/cards/ServiceCard';
import { Heart, Activity, Brain, Baby, Eye, Stethoscope } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/animations/variants';

const services = [
    { icon: Stethoscope, title: 'General Physician', desc: 'Expert consultation for common illnesses and condition management.', id: 1 },
    { icon: Activity, title: 'Orthopedic', desc: 'Specialized treatment for bone, joint, and muscle disorders.', id: 2 },
    { icon: Eye, title: 'Skin Specialist', desc: 'Expert treatments for dermatology and skin health.', id: 3 },
    { icon: Heart, title: 'Kidney Specialist', desc: 'Nephrology consultations focusing on kidney health.', id: 4 },
    { icon: Brain, title: 'Critical Care', desc: 'Advanced attention for critical care requirements.', id: 5 },
    { icon: Baby, title: 'Specialist OPD', desc: 'Comprehensive outpatient care from specialized visiting experts.', id: 6 },
];
// Note: used general icons since some specific medical icons might be missing from base lucide. Used close matches.

export function ServicesSection() {
    return (
        <section id="services" className="py-20 md:py-32 bg-background relative">
            <Container>
                <SectionHeader
                    title="Departments & Specializations"
                    subtitle="Our multidisciplinary OPD clinic provides consultation across various specialties under one roof."
                    className="mb-16 max-w-3xl mx-auto"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {services.map((service) => (
                        <motion.div key={service.id} variants={fadeInUp}>
                            <ServiceCard
                                title={service.title}
                                description={service.desc}
                                Icon={service.icon as any}
                                className="h-full"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
