import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { AppointmentButton } from '@/components/ui/AppointmentButton';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/animations/variants';

export function Hero() {
    const ref = useRef(null);
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax values
    const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

    return (
        <section ref={ref} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
            <motion.div
                style={{ opacity: opacityBg }}
                className="absolute top-0 left-0 w-full h-[120%] bg-gradient-to-br from-primary/5 via-background to-secondary/10 -z-10 animate-gradient"
            />

            {/* Decorative Circles */}
            <motion.div
                animate={{ y: [-30, 30, -30], x: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
                className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl -z-10"
            />
            <motion.div
                animate={{ y: [30, -30, 30], x: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
                className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl -z-10"
            />

            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                    <motion.div
                        className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={fadeInUp} className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm w-fit mx-auto lg:mx-0">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                            </span>
                            Accepting New Patients
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text leading-tight mb-4"
                        >
                            Trusted Multi-Specialty <br />
                            OPD Clinic <span className="text-gradient">in Patna</span>
                        </motion.h1>

                        <motion.div
                            variants={fadeInUp}
                            className="mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            <p className="text-xl md:text-2xl font-heading font-bold text-primary mb-6 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                यहाँ पर सभी प्रकार के रोगों की ईलाज की सुविधा है।
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                {['Experienced Doctors', 'Affordable Consultation', 'General Physician', 'Orthopedic', 'Skin Specialist', 'Kidney Specialist', 'Patient First Healthcare'].map((tag) => (
                                    <span key={tag} className="px-3 py-1 rounded-lg bg-white shadow-sm text-muted animate-fade-in text-sm font-medium border border-border/50 hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                        >
                            <AppointmentButton size="lg" className="w-full sm:w-auto" showIcon />
                            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => navigate('/services')}>
                                Explore Services
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px]"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div style={{ y: yImage }} className="absolute inset-0 rounded-3xl overflow-hidden glass shadow-2xl p-2 bg-white">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop"
                                alt="Modern Clinic Facilities"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </motion.div>
                        {/* Floating Glass Component */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 glass-card p-4 md:p-6 flex items-center gap-4 z-10 w-[240px] md:w-[280px]"
                        >
                            <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl shadow-lg">
                                20+
                            </div>
                            <div className="flex flex-col">
                                <span className="font-heading font-bold text-text">Expert Doctors</span>
                                <span className="text-muted text-xs">Serving the community</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
