import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { FiMic, FiImage, FiVideo } from 'react-icons/fi';
import { BsYoutube, BsInstagram, BsFacebook } from 'react-icons/bs';
import SplitText from './SplitText';

const Hero = () => {
    return (
        <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] w-full px-6 pt-20 pb-10">
            {/* Headlines */}
            <div className="text-center max-w-4xl mx-auto mb-16 mt-10">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] font-serif text-[#1E3A8A] mb-8 relative inline-block px-4"
                >
                    Professional Video Content for <span className="relative inline-block text-[#3B82F6]">Doctors.<span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#3B82F6]/30 rounded-full"></span></span>
                </motion.h1>

                <SplitText
                    text="Turn simple clinic recordings into clear, patient-trusted videos."
                    className="text-[20px] md:text-[24px] text-slate-500 font-sans mx-auto max-w-2xl leading-relaxed"
                    delay={40}
                    duration={0.8}
                    ease="easeOut"
                    splitType="words"
                    from={{ opacity: 0, y: 15 }}
                    to={{ opacity: 1, y: 0 }}
                />
            </div>

            {/* Transformation Flow Row */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 w-full max-w-6xl mb-20"
            >
                {/* LEFT GROUP: Inputs */}
                <div className="flex flex-col items-center">
                    <span className="text-[12px] uppercase tracking-[0.2em] text-slate-400 mb-8 font-bold border-b border-slate-200 pb-2">INPUT: RAW CONTENT</span>
                    <div className="flex gap-4 md:gap-8">
                        {[FiMic, FiImage, FiVideo].map((Icon, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="relative w-[75px] h-[75px] md:w-[90px] md:h-[90px] rounded-full flex items-center justify-center group cursor-pointer"
                            >
                                {/* Rotating Border */}
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#3B82F6] opacity-60 animate-spin-slow group-hover:opacity-100 transition-opacity"></div>
                                {/* Pulse Effect */}
                                <div className="absolute inset-0 rounded-full bg-[#3B82F6]/0 group-hover:bg-[#3B82F6]/5 transition-all group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"></div>
                                {/* Icon Container (Static) */}
                                <div className="relative z-10 bg-white w-[56px] h-[56px] md:w-[68px] md:h-[68px] rounded-full flex items-center justify-center shadow-xl text-slate-600 group-hover:text-[#3B82F6] transition-all">
                                    <Icon size={idx === 1 ? 26 : 30} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CENTER: Arrow */}
                <div className="flex items-center justify-center text-slate-800 rotate-90 lg:rotate-0 py-4 lg:py-0">
                    <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-[#1E3A8A]"
                    >
                        <svg
                            className="w-10 h-10 lg:w-16 lg:h-16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </motion.div>
                </div>

                {/* RIGHT GROUP: Outputs */}
                <div className="flex flex-col items-center">
                    <span className="text-[12px] uppercase tracking-[0.2em] text-slate-400 mb-8 font-bold border-b border-slate-200 pb-2">OUTPUT: READY CONTENT</span>
                    <div className="flex gap-4 md:gap-8">
                        {/* YouTube */}
                        <motion.div whileHover={{ y: -5, scale: 1.05 }} className="w-[75px] h-[75px] md:w-[90px] md:h-[90px] bg-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all cursor-pointer border border-slate-50">
                            <BsYoutube size={42} className="text-[#FF0000]" />
                        </motion.div>
                        {/* Instagram */}
                        <motion.div whileHover={{ y: -5, scale: 1.05 }} className="w-[75px] h-[75px] md:w-[90px] md:h-[90px] bg-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all cursor-pointer border border-slate-50">
                            <BsInstagram size={40} className="text-[#E4405F]" />
                        </motion.div>
                        {/* Facebook */}
                        <motion.div whileHover={{ y: -5, scale: 1.05 }} className="w-[75px] h-[75px] md:w-[90px] md:h-[90px] bg-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all cursor-pointer border border-slate-50">
                            <BsFacebook size={40} className="text-[#1877F2]" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                className="mt-6 mb-16 w-full md:w-auto px-6 text-center"
            >
                <a href="#work" className="inline-block w-full md:w-auto bg-[#3B82F6] text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-blue-500/50 hover:bg-[#2563EB] transition-all hover:scale-[1.03] active:scale-[0.98]">
                    See Our Work
                </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-300 animate-bounce"
            >
                <FaChevronDown size={28} />
            </motion.div>
        </section>
    );
};

export default Hero;
