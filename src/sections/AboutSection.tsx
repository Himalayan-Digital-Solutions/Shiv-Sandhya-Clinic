import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/animations/variants';

const bulletPoints = [
    "Experienced Doctors",
    "Affordable Consultation",
    "Discount on Medicines & Lab Tests",
    "Located Centrally in Anishabad",
];

export function AboutSection() {
    const navigate = useNavigate();

    return (
        <section id="about" className="py-20 md:py-32 bg-background relative">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                                alt="Clinic Interior"
                                className="w-full h-[250px] md:h-[300px] object-cover rounded-3xl shadow-lg mt-8"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2670&auto=format&fit=crop"
                                alt="Patient Care"
                                className="w-full h-[250px] md:h-[300px] object-cover rounded-3xl shadow-lg"
                            />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-2xl">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                                <span className="font-heading font-bold text-2xl text-secondary">Est.</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full lg:w-1/2 flex flex-col"
                    >
                        <SectionHeader
                            title="A Legacy of Care & Healing"
                            subtitle="Shiv Sandhya Clinic is a multi-specialty OPD clinic located at Ram Sakal Market, First Floor, Saket Vihar More, Anishabad, Patna."
                            alignment="left"
                            className="mb-8"
                        />

                        <motion.p variants={fadeInUp} className="text-muted leading-relaxed mb-6">
                            Shiv Sandhya Clinic is committed to providing accessible, affordable, and patient-focused healthcare for families in Anishabad and nearby areas of Patna. With experienced doctors from multiple specialties visiting on scheduled days, the clinic offers convenient outpatient consultation along with discounted medicines, laboratory services, and OPD charges.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {bulletPoints.map((point, idx) => (
                                <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                    <span className="text-text font-medium text-sm">{point}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={fadeInUp}>
                            <Button className="group" onClick={() => navigate('/doctors')}>
                                Doctors
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
