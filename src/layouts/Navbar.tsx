import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import ClinicLogo from '@/assets/logo/logo.png';
import { AppointmentButton } from '@/components/ui/AppointmentButton';
import { Drawer } from '@/components/ui/Drawer';
import { NAV_LINKS, CLINIC_INFO } from '@/constants';
import { cn } from '@/utils/cn';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b",
                    isScrolled
                        ? "glass py-3 border-border/50 shadow-sm"
                        : "bg-white/95 py-5 border-transparent"
                )}
            >
                <Container className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors overflow-hidden">
                            <img src={ClinicLogo} alt="Shiv Sandhya Clinic Logo" className="w-full h-full object-contain mix-blend-multiply" />
                        </div>
                        <div>
                            <h1 className="font-heading font-bold text-xl text-primary leading-tight">Shiv Sandhya</h1>
                            <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">OPD Clinic</p>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-text hover:text-primary transition-colors hover:-translate-y-0.5 transform duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <div className="text-right mr-4 border-r border-border pr-4 hidden lg:block">
                            <p className="text-xs text-muted">Emergency Call</p>
                            <a href={`tel:${CLINIC_INFO.phone}`} className="font-bold text-primary hover:text-accent transition-colors">
                                {CLINIC_INFO.phone}
                            </a>
                        </div>
                        <AppointmentButton size="sm" />
                    </div>

                    <button
                        className="md:hidden w-12 h-12 flex items-center justify-center text-text hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open Mobile Menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </Container>
            </header>

            <Drawer
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            >
                <div className="p-6 flex flex-col h-full overflow-y-auto">
                    <div className="flex items-center gap-2 mb-10 mt-4 shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary overflow-hidden">
                            <img src={ClinicLogo} alt="Shiv Sandhya Clinic Logo" className="w-full h-full object-contain mix-blend-multiply" />
                        </div>
                        <div>
                            <h1 className="font-heading font-bold text-xl text-primary leading-tight">Shiv Sandhya</h1>
                        </div>
                    </div>

                    <nav className="flex flex-col gap-6 flex-grow">
                        {NAV_LINKS.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-lg font-heading font-semibold text-text hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-8 pt-8 border-t border-border flex flex-col gap-4 shrink-0">
                        <div className="flex flex-col">
                            <span className="text-xs text-muted mb-1">Call for appointments</span>
                            <a href={`tel:${CLINIC_INFO.phone}`} className="font-bold text-primary text-xl">
                                {CLINIC_INFO.phone}
                            </a>
                        </div>
                        <AppointmentButton
                            className="w-full justify-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                    </div>
                </div>
            </Drawer>
        </>
    );
}
