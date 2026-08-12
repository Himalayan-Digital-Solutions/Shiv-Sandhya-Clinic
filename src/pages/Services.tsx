import { Navbar } from '@/layouts/Navbar';
import { Helmet } from 'react-helmet-async';
import { Footer } from '@/layouts/Footer';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ServicesSection } from '@/sections/ServicesSection';
import { DiscountBanner } from '@/sections/DiscountBanner';
import { ScheduleSection } from '@/sections/ScheduleSection';
import { PatientJourney } from '@/sections/PatientJourney';
import { EmergencyCard } from '@/components/ui/cards/EmergencyCard';
import { PricingCard } from '@/components/ui/cards/PricingCard';
import { ShieldCheck, HeartPulse, Stethoscope, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/animations/variants';
import { FloatingActionButtons } from '@/components/ui/FloatingActionButtons';
import { BackToTop } from '@/components/ui/BackToTop';

const pricingPlans = [
    {
        title: 'Basic Consultation',
        subtitle: 'Standard check-up',
        price: '₹500',
        features: ['General Physician Consultation', 'Basic Vitals Check', 'Prescription Issuance']
    },
    {
        title: 'Comprehensive Care',
        subtitle: 'For thorough health assessment',
        price: '₹1200',
        isPopular: true,
        features: ['Specialist Consultation', 'Detailed Vitals & Diagnostics Review', 'Dietary & Lifestyle Advice', 'Follow-up within 7 days']
    },
    {
        title: 'Family Package',
        subtitle: 'Yearly healthcare coverage',
        price: '₹4999',
        features: ['4 Consultations per year', 'Free Basic Blood Work', 'Priority Appointment Booking', 'Pediatric & Geriatric Care Support']
    }
];

const benefits = [
    { icon: <ShieldCheck className="w-8 h-8" />, title: 'Certified Excellence', desc: 'All doctors are fully licensed and strictly vetted.' },
    { icon: <HeartPulse className="w-8 h-8" />, title: 'Compassionate Care', desc: 'We treat every patient like a standard family member.' },
    { icon: <Stethoscope className="w-8 h-8" />, title: 'Advanced Diagnostics', desc: 'Modern equipment ensuring precise health assessments.' },
    { icon: <Trophy className="w-8 h-8" />, title: 'Award Winning', desc: 'Recognized as one of the best OPD clinics in the region.' },
];

export default function Services() {
    return (
        <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-primary">
            <Helmet>
                <title>Medical Services | Shiv Sandhya Clinic Patna</title>
                <meta name="description" content="Explore our specialized medical services, transparent pricing packages, and unparalleled patient care at Shiv Sandhya Clinic." />
                <link rel="canonical" href="https://shivsandhyaclinic.com/services" />
            </Helmet>
            <Navbar />

            {/* Page Header */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent" />
                <Container className="relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Our Services & Specializations</h1>
                    <p className="text-lg md:text-xl text-primary-50 max-w-2xl mx-auto opacity-90">
                        Comprehensive healthcare tailored to your family's needs. Discover our departments, pricing, and patient benefits.
                    </p>
                </Container>
            </section>

            {/* Emergency Banner */}
            <section className="py-12 bg-background relative -mt-10 z-20">
                <Container>
                    <EmergencyCard />
                </Container>
            </section>

            {/* Departments (Reusing existing block) */}
            <ServicesSection />

            {/* Benefits */}
            <section className="py-20 bg-white">
                <Container>
                    <SectionHeader title="Patient Benefits" subtitle="Why thousands choose our care every year." className="mb-16 max-w-2xl mx-auto" />
                    <motion.div
                        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {benefits.map((b, idx) => (
                            <motion.div key={idx} variants={fadeInUp} className="text-center p-6 glass-card border-none bg-primary/5 hover:bg-primary/10 transition-colors">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-sm">
                                    {b.icon}
                                </div>
                                <h4 className="font-heading font-bold text-lg mb-3">{b.title}</h4>
                                <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </Container>
            </section>

            {/* Patient Process */}
            <PatientJourney />

            {/* Pricing */}
            <section className="py-20 md:py-32 bg-primary/5">
                <Container>
                    <SectionHeader
                        title="Transparent Pricing"
                        subtitle="No hidden fees. Honest consultations ensuring medical care is accessible to all."
                        className="mb-16 max-w-2xl mx-auto"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
                        {pricingPlans.map((plan, idx) => (
                            <PricingCard key={idx} {...plan} />
                        ))}
                    </div>
                </Container>
            </section>

            {/* Discounts & Packages */}
            <DiscountBanner />

            {/* Working Hours */}
            <ScheduleSection />

            <Footer />
            <FloatingActionButtons />
            <BackToTop />
        </main>
    );
}
