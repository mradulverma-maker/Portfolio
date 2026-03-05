import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiTrendingUp, FiSettings, FiGlobe } from 'react-icons/fi';

const features = [
    {
        icon: <FiShield />,
        title: "100% Medical HIPAA Compliant",
        desc: "We handle patient data and clinic ethics with the highest standards of privacy."
    },
    {
        icon: <FiTrendingUp />,
        title: "Patient-First Strategy",
        desc: "Our edits aren't just pretty; they are designed to convert viewers into clinic appointments."
    },
    {
        icon: <FiSettings />,
        title: "Zero Effort Required",
        desc: "You record once. We automate the structure, subtitles, and branding for every channel."
    },
    {
        icon: <FiGlobe />,
        title: "Doctor-First Niche",
        desc: "We speak your language. No more explaining medical terms to generic editors."
    }
];

const WhyUs = () => {
    return (
        <section id="about" className="py-24 bg-[#050817] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <span className="text-[#3B82F6] font-bold uppercase tracking-widest text-sm mb-4 block">Why Doctors Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                            A Video Agency That Understands <span className="text-[#3B82F6]">Medicine.</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.map((item, idx) => (
                                <div key={idx} className="group">
                                    <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] mb-4 group-hover:bg-[#3B82F6] group-hover:text-white transition-all">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="aspect-square bg-gradient-to-br from-[#1E3A8A] to-[#0A0F2C] rounded-[40px] p-12 flex flex-col justify-center border border-white/10 shadow-2xl relative z-10">
                            <div className="mb-10 opacity-20 text-white text-6xl font-serif">"</div>
                            <p className="text-2xl font-serif text-blue-100 italic leading-relaxed mb-8">
                                Doctors are the busiest professionals on earth. My goal was to create a system where they can build a global authority brand without spending more than 15 minutes a week on recording.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-700 animate-pulse"></div>
                                <div>
                                    <h5 className="text-[#3B82F6] font-bold font-sans uppercase tracking-widest text-sm">FOUNDER STATEMENT</h5>
                                    <p className="text-slate-400 text-sm">MedEdit Lead Producer</p>
                                </div>
                            </div>
                        </div>
                        {/* Design Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyUs;
