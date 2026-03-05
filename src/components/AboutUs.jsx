import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <section id="about" className="py-24 px-6 bg-white font-sans text-slate-800">
            <div className="max-w-[1200px] mx-auto">
                {/* HEADER */}
                <header className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-[6px] text-[11px] font-bold tracking-[0.15em] uppercase text-[#3B82F6] bg-[#EFF6FF] border border-[#DBEAFE] rounded-full px-4 py-1.5 mb-6"
                    >
                        <span className="w-[6px] h-[6px] bg-[#22c55e] rounded-full"></span>
                        ABOUT US
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-[40px] md:text-[56px] font-bold text-[#1E3A8A] leading-[1.1] mb-6"
                    >
                        The Team Behind the Work
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[17px] md:text-[20px] text-slate-500 max-w-3xl mx-auto mb-8 leading-[1.6]"
                    >
                        Video editors focused on helping doctors communicate their expertise clearly and professionally.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="w-16 h-[3px] bg-[#3B82F6] rounded-full mx-auto"
                    ></motion.div>
                </header>

                {/* MRADUL ROW */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Background blob/shape */}
                        <div className="absolute top-0 -bottom-10 -left-6 md:-left-10 w-full bg-[#EEF2FF] rounded-[40px] -z-10"></div>

                        {/* Image Container */}
                        <div className="relative rounded-[32px] overflow-hidden border-[6px] border-white shadow-xl aspect-[4/5] max-w-[450px] mx-auto lg:mx-0">
                            <img src="/mradul.png" alt="Mradul" className="w-full h-full object-cover object-top" />
                        </div>

                        {/* 01 TEAM Badge */}
                        <div className="absolute top-8 -right-4 md:-right-8 bg-white rounded-2xl w-[70px] h-[70px] md:w-[80px] md:h-[80px] shadow-lg flex flex-col items-center justify-center border border-slate-100 z-10">
                            <span className="font-serif text-2xl md:text-3xl font-bold text-[#1E3A8A] leading-none mb-1">01</span>
                            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.1em] uppercase text-slate-400">Team</span>
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute bottom-10 -right-4 md:-right-8 bg-[#1E3A8A] rounded-full px-5 py-3 shadow-lg flex items-center gap-3 z-10 border-[3px] border-white">
                            <span className="w-2 h-2 bg-[#22c55e] rounded-full"></span>
                            <span className="text-sm font-semibold text-white">2+ Years Experience</span>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col"
                    >
                        <div className="inline-flex items-center bg-[#EFF6FF] text-[#3B82F6] text-[10px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full w-fit mb-4">
                            CO-FOUNDER
                        </div>

                        <h3 className="font-serif text-[40px] md:text-[48px] font-bold text-[#1E3A8A] leading-none mb-3">
                            Mradul
                        </h3>

                        <p className="text-[#3B82F6] font-bold tracking-wide uppercase text-xs md:text-sm mb-6">
                            CO-FOUNDER & VIDEO EDITOR
                        </p>

                        <div className="w-10 h-[3px] bg-[#D4A843] rounded-full mb-8"></div>

                        <p className="text-slate-500 text-[15px] leading-[1.8] mb-6">
                            Mradul focuses on transforming raw recordings into structured, professional medical content. With over 2 years of experience in video editing, he specializes in long-form educational videos, short informational clips, and consultation guidance videos designed for healthcare audiences.
                        </p>

                        <p className="text-slate-500 text-[15px] leading-[1.8] mb-10">
                            His work includes timeline editing, storytelling structure, subtitle integration, color correction, audio enhancement, and content pacing to ensure that complex medical information is presented clearly and professionally. He also works on thumbnail design and platform optimization to help educational videos reach the right audience.
                        </p>

                        {/* Skill Chips */}
                        <div className="flex flex-wrap gap-3">
                            {['Timeline Editing', 'Storytelling Structure', 'Subtitle Integration', 'Color Correction', 'Audio Enhancement', 'Content Pacing', 'Thumbnail Design', 'Platform Optimization'].map(skill => (
                                <span key={skill} className="text-[13px] font-medium text-slate-600 bg-white border border-slate-200 rounded-lg px-4 py-2 hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors cursor-default shadow-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* UTKARSH ROW */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center bg-[#EFF6FF] text-[#3B82F6] text-[10px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full w-fit mb-4">
                            VIDEO EDITOR
                        </div>

                        <h3 className="font-serif text-[40px] md:text-[48px] font-bold text-[#1E3A8A] leading-none mb-3">
                            Utkarsh
                        </h3>

                        <p className="text-[#3B82F6] font-bold tracking-wide uppercase text-xs md:text-sm mb-6">
                            VIDEO EDITOR & CONTENT PRODUCTION SPECIALIST
                        </p>

                        <div className="w-10 h-[3px] bg-[#D4A843] rounded-full mb-8"></div>

                        <p className="text-slate-500 text-[15px] leading-[1.8] mb-6">
                            Utkarsh works on the technical and visual refinement of medical content. With more than 2 years of experience in video editing, he focuses on ensuring that each video maintains a clear structure, professional presentation, and smooth viewing experience.
                        </p>

                        <p className="text-slate-500 text-[15px] leading-[1.8] mb-10">
                            His expertise includes video sequencing, motion graphics, caption editing, color grading, sound balancing, and visual pacing. He plays a key role in producing educational videos and short-form content that help doctors communicate their knowledge in a clear and accessible format.
                        </p>

                        {/* Skill Chips */}
                        <div className="flex flex-wrap gap-3">
                            {['Video Sequencing', 'Motion Graphics', 'Caption Editing', 'Color Grading', 'Sound Balancing', 'Visual Pacing', 'Short-Form Content', 'Educational Video'].map(skill => (
                                <span key={skill} className="text-[13px] font-medium text-slate-600 bg-white border border-slate-200 rounded-lg px-4 py-2 hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors cursor-default shadow-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative order-1 lg:order-2"
                    >
                        {/* Background blob/shape */}
                        <div className="absolute top-0 -bottom-10 -right-6 md:-right-10 w-full bg-[#EEF2FF] rounded-[40px] -z-10"></div>

                        {/* Image Container */}
                        <div className="relative rounded-[32px] overflow-hidden border-[6px] border-white shadow-xl aspect-[4/5] max-w-[450px] mx-auto lg:mx-0 lg:ml-auto">
                            <img src="/utkarsh.jpg" alt="Utkarsh" className="w-full h-full object-cover object-top" />
                        </div>

                        {/* 02 TEAM Badge */}
                        <div className="absolute top-8 -left-4 md:-left-8 bg-white rounded-2xl w-[70px] h-[70px] md:w-[80px] md:h-[80px] shadow-lg flex flex-col items-center justify-center border border-slate-100 z-10">
                            <span className="font-serif text-2xl md:text-3xl font-bold text-[#1E3A8A] leading-none mb-1">02</span>
                            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.1em] uppercase text-slate-400">Team</span>
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute bottom-10 -left-4 md:-left-8 bg-[#1E3A8A] rounded-full px-5 py-3 shadow-lg flex items-center gap-3 z-10 border-[3px] border-white">
                            <span className="w-2 h-2 bg-[#22c55e] rounded-full"></span>
                            <span className="text-sm font-semibold text-white">2+ Years Experience</span>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;
