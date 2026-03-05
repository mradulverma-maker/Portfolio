import React from 'react';
import { motion } from 'framer-motion';

const OurClients = () => {
    return (
        <section className="py-24 bg-[#F8FAFC] flex flex-col items-center justify-center font-sans relative overflow-hidden">
            <div className="w-full max-w-[1100px] px-6 relative z-10">

                {/* HEADLINE */}
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-[13px] font-semibold tracking-[0.18em] uppercase text-[#3B82F6] mb-2"
                >
                    Our Clients
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-center font-serif text-[clamp(32px,5vw,52px)] font-bold text-[#1E3A8A] mb-2 leading-[1.15]"
                >
                    Trusted by <span className="relative inline-block">Medical Professionals<span className="absolute bottom-[2px] left-0 w-full h-[3px] bg-gradient-to-r from-[#D4A843] to-transparent rounded-[2px]"></span></span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="text-center text-[#64748b] text-[16px] mb-14"
                >
                    Real doctors. Real results. Real growth.
                </motion.p>

                {/* CARD BROWSER */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <div className="bg-white rounded-[28px] py-12 px-7 md:px-[52px] max-w-[680px] w-full relative shadow-[0_4px_6px_rgba(30,58,138,0.04),0_20px_60px_rgba(30,58,138,0.10),0_0_0_1px_rgba(59,130,246,0.08)] overflow-hidden transition-transform duration-400 hover:-translate-y-1.5 hover:shadow-[0_8px_12px_rgba(30,58,138,0.06),0_32px_80px_rgba(30,58,138,0.16),0_0_0_1px_rgba(59,130,246,0.14)] relative group">

                        {/* Decorative bg blobs */}
                        <div className="absolute -top-[60px] -right-[60px] w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.10)_0%,transparent_70%)] pointer-events-none"></div>
                        <div className="absolute -bottom-[40px] -left-[40px] w-[160px] h-[160px] rounded-full bg-[radial-gradient(circle,rgba(212,168,67,0.08)_0%,transparent_70%)] pointer-events-none"></div>

                        {/* Verified badge */}
                        <div className="inline-flex items-center gap-[6px] bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] border border-[#3B82F6]/25 rounded-full px-3.5 py-1.5 text-[12px] font-semibold text-[#1E3A8A] tracking-[0.04em] mb-8 relative z-10">
                            <span className="w-[7px] h-[7px] bg-[#22c55e] rounded-full animate-pulse"></span>
                            Verified Client
                        </div>

                        {/* Profile row */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-7 relative z-10">

                            {/* Animated avatar */}
                            <div className="relative shrink-0 w-[140px] h-[140px] md:w-[160px] md:h-[160px]">
                                <div className="absolute -inset-[5px] rounded-full bg-[conic-gradient(from_0deg,#3B82F6_0deg,#D4A843_120deg,#3B82F6_240deg,#D4A843_360deg)] animate-[spin_4s_linear_infinite] opacity-50 z-0"></div>
                                <div className="absolute inset-[3px] bg-white rounded-full z-10"></div>
                                <div className="absolute inset-[5px] rounded-full bg-gradient-to-br from-[#DBEAFE] to-[#EFF6FF] z-20 overflow-hidden flex items-center justify-center">
                                    <img src="/IMG-20260204-WA0070%20(1)%20(1).jpg" alt="Dr. S. K. Mishra" className="w-full h-full object-cover object-top scale-100 relative z-10" />
                                </div>                            </div>

                            {/* Info */}
                            <div className="flex-1 pt-1 text-center md:text-left">
                                <h3 className="font-serif text-[24px] font-bold text-[#1E3A8A] mb-1 leading-[1.2]">Dr. S. K. Mishra</h3>
                                <p className="text-[13px] font-semibold text-[#3B82F6] tracking-[0.06em] uppercase mb-3.5">Veterinary Specialist</p>
                                <p className="text-[15px] text-[#64748b] leading-[1.7] mb-5 font-normal">
                                    Dr. Mishra is a respected veterinary professional known for
                                    educating pet owners through clear and practical guidance on
                                    animal health and wellness.
                                </p>

                                {/* Stats */}
                                <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
                                    <a href="https://www.youtube.com/@dogandvet/videos" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#FEF2F2] border border-[#FECACA] rounded-full px-4 py-1.5 text-[13px] font-semibold text-[#DC2626] no-underline transition-all duration-250 hover:bg-[#DC2626] hover:text-white hover:border-[#DC2626] hover:scale-[1.03]">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                                        YouTube Channel
                                    </a>
                                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] border border-[#86EFAC] rounded-full px-4 py-1.5 text-[13px] font-bold text-[#15803D]">
                                        <span className="text-[11px]">▲</span> 200K+ Subscribers
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/15 to-transparent my-8 relative z-10"></div>

                        {/* Quote */}
                        <div className="relative md:pl-5 text-center md:text-left z-10 block">
                            <span className="absolute left-0 -top-3 font-serif text-[52px] text-[#3B82F6] opacity-15 leading-none hidden md:block">"</span>
                            <p className="text-[15px] text-[#1e293b] leading-[1.75] italic font-normal inline md:block">
                                "Working with this team completely transformed how I communicate with pet owners online.
                                They took my simple clinic recordings and turned them into polished, shareable content
                                that my audience actually trusts."
                            </p>
                            <div className="flex gap-1 mt-3.5 justify-center md:justify-start">
                                {[...Array(5)].map((_, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
                                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                                        className="text-[#D4A843] text-[16px]"
                                    >
                                        ★
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default OurClients;
