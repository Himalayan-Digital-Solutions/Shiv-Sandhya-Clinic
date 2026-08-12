import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MapEmbed } from '@/components/ui/MapEmbed';

export function Location() {
    return (
        <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
            <Container>
                <SectionHeader
                    title="Locate Us"
                    subtitle="Easily reach us in Anishabad, Patna."
                    className="mb-12 max-w-2xl mx-auto text-center"
                />
                <div className="flex flex-col lg:flex-row gap-8 bg-white p-4 md:p-6 rounded-[2rem] shadow-2xl items-center max-w-6xl mx-auto">
                    <div className="w-full lg:w-1/3 p-6 text-center lg:text-left">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto lg:mx-0 mb-6">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <h3 className="font-heading font-bold text-2xl mb-4 text-text">Shiv Sandhya Clinic</h3>
                        <p className="text-muted mb-8 leading-relaxed">
                            First Floor, Ram Sakal Market,<br />
                            Saket Vihar More, Anishabad,<br />
                            Patna, Bihar 800002
                        </p>
                        <Button className="w-full sm:w-auto" variant="primary">
                            <Navigation className="w-5 h-5 mr-2" />
                            Get Directions
                        </Button>
                    </div>
                    <MapEmbed className="w-full lg:w-2/3" />
                </div>
            </Container>
        </section>
    );
}
