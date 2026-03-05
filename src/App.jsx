import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaWhatsapp } from 'react-icons/fa';
import { FiMic, FiImage, FiVideo } from 'react-icons/fi';
import { BsYoutube, BsInstagram, BsFacebook } from 'react-icons/bs';

// Components
import SplitText from './components/SplitText';
import PillNav from './components/PillNav';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import OurClients from './components/OurClients';
import PatientCommunication from './components/PatientCommunication';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
    const [showFloat, setShowFloat] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowFloat(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen bg-[#F8FAFC] overflow-x-hidden font-sans text-slate-800 scroll-smooth">
            {/* Background Dot Grid */}
            <div className="fixed inset-0 z-0 opacity-40 dot-grid-bg pointer-events-none"></div>

            {/* Floating Gradient Blobs */}
            <div className="fixed -top-20 -right-20 w-[600px] h-[600px] bg-blue-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.07] animate-blob pointer-events-none"></div>
            <div className="fixed -bottom-40 -left-40 w-[600px] h-[600px] bg-indigo-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.05] animate-blob pointer-events-none animation-delay-2000"></div>

            {/* Navigation */}
            <PillNav
                logo={<span className="font-serif font-bold text-2xl text-[#1E3A8A]">MedEdit.</span>}
                items={[
                    { label: 'Home', href: '#' },
                    { label: 'Process', href: '#how-it-works' },
                    { label: 'Portfolio', href: '#work' },
                    { label: 'About', href: '#about' }
                ]}
                activeHref="#"
                theme="light"
                pillColor="#1E3A8A"
                hoveredPillTextColor="#ffffff"
            />

            <Hero />


            {/* Main Sections */}
            <HowItWorks />
            <Portfolio />
            <OurClients />
            <PatientCommunication />
            <AboutUs />
            <FinalCTA />

            {/* Footer */}
            <Footer />

            {/* Floating WhatsApp CTA */}
            <AnimatePresence>
                {showFloat && (
                    <motion.a
                        href="https://wa.me/917451059748"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 50 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center shadow-green-500/30"
                    >
                        <FaWhatsapp size={32} />
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
                    </motion.a>
                )}
            </AnimatePresence>

        </div>
    );
}

export default App;
