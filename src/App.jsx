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
import AboutUs from './components/AboutUs';

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
            {/* Animated Background Blobs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
            </div>

            {/* Navigation */}
            <PillNav
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
