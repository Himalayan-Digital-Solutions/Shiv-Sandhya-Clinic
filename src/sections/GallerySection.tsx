import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GalleryCard } from '@/components/ui/cards/GalleryCard';

const galleryImages = [
    { image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop', alt: 'Reception Area' },
    { image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop', alt: 'Modern Equipment' },
    { image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000&auto=format&fit=crop', alt: 'Patient Room' },
    { image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop', alt: 'Consultation' },
];

export function GallerySection() {
    return (
        <section className="py-20 md:py-32 bg-background">
            <Container>
                <SectionHeader
                    title="Take a Tour"
                    subtitle="Explore our state-of-the-art facilities designed for comfort and precision."
                    className="mb-12 max-w-2xl mx-auto"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {galleryImages.map((item, idx) => (
                        <GalleryCard key={idx} image={item.image} alt={item.alt} className="h-[250px] md:h-[300px]" />
                    ))}
                </div>
            </Container>
        </section>
    );
}
