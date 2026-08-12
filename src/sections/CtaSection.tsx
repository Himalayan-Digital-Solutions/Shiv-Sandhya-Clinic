import { Container } from '@/components/ui/Container';
import { AppointmentButton } from '@/components/ui/AppointmentButton';

export function CtaSection() {
    return (
        <section className="py-20 md:py-24 relative overflow-hidden bg-primary">
            <div className="absolute inset-0 bg-primary/80 z-10" />
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop)' }}
            />
            <Container className="relative z-20 text-center">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
                    Your Health Cannot Wait.
                    <br className="hidden md:block" />
                    <span className="text-accent">Book Your Consultation Today.</span>
                </h2>
                <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                    Join thousands of satisfied patients who trust Shiv Sandhya Clinic for their families healthcare needs.
                </p>
                <AppointmentButton
                    size="lg"
                    className="!bg-none !bg-white !text-primary hover:!bg-slate-100 shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all font-bold group"
                    showIcon={false}
                    onClick={(e) => {
                        e.preventDefault();
                        const whatsappUrl = `https://wa.me/917033166941?text=${encodeURIComponent("Hello! I would like to schedule an online consultation as soon as possible.")}`;
                        window.open(whatsappUrl, '_blank');
                    }}
                >
                    Schedule Online Now
                </AppointmentButton>
            </Container>
        </section>
    );
}
