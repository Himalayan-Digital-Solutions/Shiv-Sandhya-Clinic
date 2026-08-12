import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Home = lazy(() => import('@/pages/Home'));
const Doctors = lazy(() => import('@/pages/Doctors'));
const Services = lazy(() => import('@/pages/Services'));
const Contact = lazy(() => import('@/pages/Contact'));

import { AnimatePresence } from 'framer-motion';
import { PageTransition } from '@/components/ui/PageTransition';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { useState, useEffect } from 'react';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingScreen key="lazy-loading-boundary" />}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                    <Route path="/doctors" element={<PageTransition><Doctors /></PageTransition>} />
                    <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                    <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                </Routes>
            </Suspense>
        </AnimatePresence>
    );
}

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Artificial delay to show off the beautiful loading screen
        return () => clearTimeout(timer);
    }, []);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Shiv Sandhya Clinic | Premium Healthcare in Patna</title>
                <meta name="description" content="Premium OPD Clinic in Anishabad, Patna providing expert healthcare services." />
            </Helmet>
            <AnimatePresence mode="wait">
                {isLoading && <LoadingScreen key="loading" />}
            </AnimatePresence>
            {!isLoading && (
                <Router>
                    <AnimatedRoutes />
                </Router>
            )}
        </HelmetProvider>
    );
}

export default App;
