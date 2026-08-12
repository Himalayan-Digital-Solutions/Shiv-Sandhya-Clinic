import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Shield, Sparkles, HeartHandshake, Clock4 } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/animations/variants';

const features = [
    { icon: <Shield className="w-6 h-6" />, title: 'Experienced Doctors', desc: 'Consult with highly qualified specialists right here in Anishabad.' },
    { icon: <Sparkles className="w-6 h-6" />, title: 'Affordable Consultation', desc: 'Premium healthcare that is accessible and affordable for every family.' },
    { icon: <HeartHandshake className="w-6 h-6" />, title: 'Patient-focused Care', desc: 'Our dedicated team treats every patient with compassion and respect.' },
    { icon: <Clock4 className="w-6 h-6" />, title: 'Easy OPD Consultation', desc: 'Streamlined appointment booking and timely attention on scheduled days.' },
];

export function WhyChooseUs() {
    return (
        <section className="py-20 md:py-32 bg-primary/5 relative">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="w-full lg:w-1/2"
                    >
                        <SectionHeader
                            title="Why Shiv Sandhya?"
                            subtitle="We go beyond basic checkups to provide a comprehensive, comforting healthcare experience."
                            alignment="left"
                            className="mb-10"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, idx) => (
                                <motion.div key={idx} variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow-soft">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                                        {feature.icon}
                                    </div>
                                    <h4 className="font-heading font-bold text-lg mb-2">{feature.title}</h4>
                                    <p className="text-muted text-sm">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop"
                            alt="Exceptional Healthcare"
                            className="w-full rounded-[2rem] shadow-2xl object-cover h-[500px]"
                        />
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-primary/60 to-transparent" />
                        <div className="absolute bottom-10 left-10 right-10 text-white">
                            <h3 className="font-heading font-bold text-3xl mb-2">Exclusive Discounts</h3>
                            <p className="text-white/80 font-medium">10% - 30% Off on Medicines & Labs.</p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
