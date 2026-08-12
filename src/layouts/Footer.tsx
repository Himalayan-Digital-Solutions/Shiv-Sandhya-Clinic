import { CLINIC_INFO, NAV_LINKS } from '@/constants';
import { Container } from '@/components/ui/Container';
import { HeartPulse, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-text text-white pt-16 pb-8 border-t-[8px] border-primary">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-accent">
                                <HeartPulse className="w-7 h-7" />
                            </div>
                            <div>
                                <h2 className="font-heading font-bold text-2xl text-white leading-tight">Shiv Sandhya</h2>
                                <p className="text-[11px] uppercase tracking-widest text-secondary font-bold">OPD Clinic</p>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Providing premium, compassionate healthcare for all ages. Your health and wellbeing is our primary mission.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-6 text-white relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
                        </h3>
                        <ul className="space-y-3 pl-0 list-none">
                            {NAV_LINKS.map(link => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-gray-400 hover:text-accent transition-colors flex items-center group text-sm">
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-accent" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-6 text-white relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-400 text-sm leading-relaxed">{CLINIC_INFO.address}</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">{CLINIC_INFO.phone}</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">{CLINIC_INFO.email}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Operating Hours */}
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-6 text-white relative inline-block">
                            Opening Hours
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
                        </h3>
                        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                            <div className="flex items-center mb-3">
                                <Clock className="w-5 h-5 text-accent mr-3" />
                                <span className="text-sm font-medium text-white">Mon - Sun</span>
                            </div>
                            <p className="text-gray-400 text-sm pl-8">09:00 AM - 09:00 PM</p>

                            <div className="mt-4 pt-4 border-t border-white/10">
                                <p className="text-xs text-accent font-semibold flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
                                    24/7 Emergency Support
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        &copy; {currentYear} Shiv Sandhya Clinic. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
