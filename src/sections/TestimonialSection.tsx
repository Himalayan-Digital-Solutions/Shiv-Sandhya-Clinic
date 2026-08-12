import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TestimonialCard } from '@/components/ui/cards/TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    { name: 'Sanjay Verma', role: 'Anishabad Resident', content: 'The best clinic in Patna. The doctors are very patient and the facilities are top-notch. I highly recommend for family healthcare.', rating: 5 },
    { name: 'Meera Rajput', role: 'Mother of two', content: 'Extremely clean and hygienic environment. The pediatric department took great care of my daughter.', rating: 5 },
    { name: 'Ravi Kumar', role: 'Business Owner', content: 'Minimal waiting time and very professional staff. The master health checkup was thorough and affordable.', rating: 5 },
    { name: 'Pooja Singh', role: 'Teacher', content: 'Very grateful for the orthopedic consultation I received here. My knee pain is finally manageable.', rating: 4 },
];

export function TestimonialSection() {
    return (
        <section className="py-20 md:py-32 bg-primary/5">
            <Container>
                <SectionHeader
                    title="Patient Stories"
                    subtitle="Don't just take our word for it. Here is what our patients have to say about their experience."
                    className="mb-16"
                />

                <div className="max-w-6xl mx-auto pb-12">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-16"
                    >
                        {testimonials.map((testimonial, idx) => (
                            <SwiperSlide key={idx} className="pb-12 h-auto flex">
                                <TestimonialCard {...testimonial} className="h-full w-full" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </section>
    );
}
