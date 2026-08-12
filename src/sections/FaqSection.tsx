import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FaqCard } from '@/components/ui/cards/FaqCard';

const faqs = [
    { question: 'Where is Shiv Sandhya Clinic located?', answer: 'We are situated on the First Floor of Ram Sakal Market at Saket Vihar More, Anishabad, Patna, Bihar.' },
    { question: 'What are the OPD timings?', answer: 'Our OPD timings are Morning: 08:00 AM – 10:00 AM and Evening: 04:00 PM – 08:00 PM. We are closed on Saturdays.' },
    { question: 'Which doctor is available on Wednesday?', answer: 'Dr. Pappu Kumar (Orthopedic Specialist) is available for consultation every Wednesday.' },
    { question: 'Is a General Physician available on Monday?', answer: 'Yes, Dr. Om Prakash Kumar (General Physician) is available on Monday and Tuesday.' },
    { question: 'Is there a medicine discount?', answer: 'Yes, we offer a 10% to 20% discount on all prescribed medicines purchased through our clinic.' },
    { question: 'Is laboratory testing available?', answer: 'Yes, and we offer an exclusive 30% discount on all laboratory diagnostic tests.' },
    { question: 'How can I contact Shiv Sandhya Clinic?', answer: 'You can reach out to us via direct phone call or WhatsApp at +91 70331 66941.' },
    { question: 'Is walk-in consultation available?', answer: 'Yes, walk-ins are fully supported and we offer a 10% discount on standard OPD consultation fees.' },
];

export function FaqSection() {
    return (
        <section className="py-20 md:py-32 bg-primary/5">
            <Container>
                <SectionHeader
                    title="Frequently Asked Questions"
                    subtitle="Find quick answers to common queries about our clinic and services."
                    className="mb-16 max-w-2xl mx-auto"
                />

                <div className="max-w-3xl mx-auto flex flex-col gap-4">
                    {faqs.map((faq, idx) => (
                        <FaqCard key={idx} item={faq} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
