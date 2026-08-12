import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Clock, ShieldCheck, Stethoscope } from 'lucide-react';
import { staggerContainer, fadeInUp } from '@/animations/variants';

const highlights = [
    {
        icon: <Stethoscope className="w-8 h-8 flex-shrink-0" />,
        title: 'Top Specialists',
        desc: 'Experienced doctors from various medical fields.'
    },
    {
        icon: <Clock className="w-8 h-8 flex-shrink-0" />,
        title: 'Minimal Wait Time',
        desc: 'Efficient scheduling ensures you are seen on time.'
    },
    {
        icon: <ShieldCheck className="w-8 h-8 flex-shrink-0" />,
        title: 'Safe & Hygienic',
        desc: 'Following international standards of clinic hygiene.'
    }
];

export function Highlights() {
    return (
        <section className="py-12 md:py-20 relative z-20 -mt-16 md:-mt-24">
            <Container>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {highlights.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className="glass-card shadow-xl p-8 flex items-start gap-5 hover:border-primary/40 transition-colors"
                        >
                            <div className="text-primary bg-primary/10 p-3 rounded-2xl">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-xl text-text mb-2">{item.title}</h3>
                                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
