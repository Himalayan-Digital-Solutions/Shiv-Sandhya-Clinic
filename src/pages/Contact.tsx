import { Navbar } from '@/layouts/Navbar';
import { Helmet } from 'react-helmet-async';
import { Footer } from '@/layouts/Footer';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/ui/ContactForm';
import { FloatingActionButtons } from '@/components/ui/FloatingActionButtons';
import { BackToTop } from '@/components/ui/BackToTop';
import { MapEmbed } from '@/components/ui/MapEmbed';
import { GallerySection } from '@/sections/GallerySection';
import { TestimonialSection } from '@/sections/TestimonialSection';
import { FaqSection } from '@/sections/FaqSection';
import { MapPin, Phone, Mail } from 'lucide-react';
import { CLINIC_INFO } from '@/constants';

export default function Contact() {
    return (
        <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-primary">
            <Helmet>
                <title>Contact Us | Shiv Sandhya Clinic Patna</title>
                <meta name="description" content="Get in touch with Shiv Sandhya Clinic. Find our location in Anishabad, call for emergencies, or book an appointment online." />
                <link rel="canonical" href="https://shivsandhyaclinic.com/contact" />
            </Helmet>
            <Navbar />

            {/* Page Header */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent" />
                <Container className="relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Contact & Gallery</h1>
                    <p className="text-lg md:text-xl text-primary-50 max-w-2xl mx-auto opacity-90">
                        Get in touch with our team, find our exact location, or simply explore the clinic through our gallery and patient stories.
                    </p>
                </Container>
            </section>

            {/* Main Contact Area */}
            <section className="py-20 bg-background relative z-20">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Contact Info & Map */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-8">
                            <div className="bg-white p-8 rounded-3xl shadow-soft">
                                <h3 className="font-heading font-bold text-2xl mb-6 text-primary">Get In Touch</h3>
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-text mb-1">Clinic Address</p>
                                            <p className="text-muted text-sm leading-relaxed">{CLINIC_INFO.address}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-text mb-1">Phone Enquiries</p>
                                            <a href={`tel:${CLINIC_INFO.phone}`} className="text-muted text-sm leading-relaxed hover:text-primary transition-colors">{CLINIC_INFO.phone}</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-text mb-1">Email Us</p>
                                            <a href={`mailto:${CLINIC_INFO.email}`} className="text-muted text-sm leading-relaxed hover:text-accent transition-colors">{CLINIC_INFO.email}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Built-in Google Maps Block */}
                            <MapEmbed />
                        </div>

                        {/* Right Contact Form */}
                        <div className="w-full lg:w-1/2">
                            <ContactForm />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Aggregate the requested sections */}
            <GallerySection />
            <TestimonialSection />
            <FaqSection />

            <Footer />
            <FloatingActionButtons />
            <BackToTop />
        </main>
    );
}
