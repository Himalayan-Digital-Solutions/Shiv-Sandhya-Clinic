import { Navbar } from '@/layouts/Navbar';
import { Helmet } from 'react-helmet-async';
import { Footer } from '@/layouts/Footer';
import { Hero } from '@/sections/Hero';
import { Highlights } from '@/sections/Highlights';
import { Statistics } from '@/sections/Statistics';
import { AboutSection } from '@/sections/AboutSection';
import { WhyChooseUs } from '@/sections/WhyChooseUs';
import { DiscountBanner } from '@/sections/DiscountBanner';
import { DoctorPreview } from '@/sections/DoctorPreview';
import { ServicesSection } from '@/sections/ServicesSection';
import { ScheduleSection } from '@/sections/ScheduleSection';
import { PatientJourney } from '@/sections/PatientJourney';
import { TestimonialSection } from '@/sections/TestimonialSection';
import { GallerySection } from '@/sections/GallerySection';
import { FaqSection } from '@/sections/FaqSection';
import { Location } from '@/sections/Location';
import { CtaSection } from '@/sections/CtaSection';
import { FloatingActionButtons } from '@/components/ui/FloatingActionButtons';
import { BackToTop } from '@/components/ui/BackToTop';

export default function Home() {
    return (
        <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-primary">
            <Helmet>
                <title>Shiv Sandhya Clinic | Premium Healthcare in Patna</title>
                <meta name="description" content="Shiv Sandhya is Patna's premium healthcare facility offering specialized care, top-tier doctors, and compassionate service." />
                <link rel="canonical" href="https://shivsandhyaclinic.com/" />
            </Helmet>
            <Navbar />

            <Hero />
            <Highlights />
            <Statistics />
            <AboutSection />
            <WhyChooseUs />
            <DiscountBanner />
            <ServicesSection />
            <DoctorPreview />
            <ScheduleSection />
            <PatientJourney />
            <TestimonialSection />
            <GallerySection />
            <FaqSection />
            <Location />
            <CtaSection />

            <Footer />

            <FloatingActionButtons />
            <BackToTop />
        </main>
    );
}
