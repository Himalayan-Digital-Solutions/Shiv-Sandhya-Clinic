import ReactCountUp from 'react-countup';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Users, Award, Smile, Activity } from 'lucide-react';

const stats = [
    { id: 1, label: 'Happy Patients', value: 15000, suffix: '+', icon: <Smile className="w-6 h-6" /> },
    { id: 2, label: 'Expert Doctors', value: 25, suffix: '+', icon: <Users className="w-6 h-6" /> },
    { id: 3, label: 'Awards Won', value: 15, suffix: '', icon: <Award className="w-6 h-6" /> },
    { id: 4, label: 'Years Experience', value: 10, suffix: '+', icon: <Activity className="w-6 h-6" /> },
];

export function Statistics() {
    return (
        <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-4 shadow-lg backdrop-blur-sm border border-white/20">
                                {stat.icon}
                            </div>
                            <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-2">
                                <ReactCountUp
                                    end={stat.value}
                                    duration={2.5}
                                    separator=","
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                                {stat.suffix}
                            </div>
                            <p className="text-white/80 font-medium md:text-lg">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
