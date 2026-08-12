import { Container } from '@/components/ui/Container';
import { DiscountCard } from '@/components/ui/cards/DiscountCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function DiscountBanner() {
    return (
        <section className="py-20 md:py-24 bg-background">
            <Container>
                <SectionHeader
                    title="Current Health Packages"
                    subtitle="Take advantage of our exclusive seasonal health checkup packages."
                    className="mb-12"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <DiscountCard
                        title="Medicine Discount"
                        description="Avail direct savings on all prescribed medicines purchased through our clinic."
                        discountPercentage={20}
                        validUntil="Year Round"
                        code="MEDICINE"
                    />
                    <DiscountCard
                        title="Laboratory Tests"
                        description="Comprehensive blood work, imaging, and full diagnostic tests at reduced rates."
                        discountPercentage={30}
                        validUntil="Year Round"
                    />
                    <DiscountCard
                        title="OPD Consultation"
                        description="Discount available directly on standard consultation charges for new patients."
                        discountPercentage={10}
                        validUntil="Year Round"
                        code="OPDCARE"
                        className="md:col-span-2 lg:col-span-1"
                    />
                </div>
            </Container>
        </section>
    );
}
