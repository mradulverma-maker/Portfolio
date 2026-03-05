import React from 'react';
import { motion } from 'framer-motion';
import { FiFile, FiCheck, FiZap, FiBarChart, FiClock, FiStar, FiUsers } from 'react-icons/fi';

const stats = [
    { icon: <FiCheck size={20} />, label: "50+ Videos Delivered" },
    { icon: <FiClock size={20} />, label: "3-Day Average Turnaround" },
    { icon: <FiZap size={20} />, label: "Audio-Only? No Problem" },
    { icon: <FiUsers size={20} />, label: "100% Doctor Niche" }
];

const Transformation = () => {
    return (
        <section id="transformation" className="py-24 bg-[#0A0F2C] text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-[#3B82F6] mb-4">This Is What We Actually Do</h2>
                    <p className="text-xl text-slate-400">You give us a voice note. We give you content that builds your brand.</p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 max-w-5xl mx-auto mb-20 bg-white/5 rounded-[40px] overflow-hidden border border-white/10">

                    {/* BEFORE */}
                    <div className="flex-1 p-12 bg-slate-900/50">
                        <h3 className="text-2xl font-serif mb-8 text-slate-500 uppercase tracking-widest text-center">Before</h3>
                        <div className="space-y-6">
                            {[1, 2, 3].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/5 p-4 rounded-xl flex items-center gap-4 border border-white/5"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-600">
                                        <FiFile size={20} />
                                    </div>
                                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-slate-700"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${40 + Math.random() * 40}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* DIVIDER */}
                    <div className="w-px md:w-32 bg-white/10 flex items-center justify-center relative py-8 md:py-0">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="bg-[#3B82F6] w-12 h-12 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] relative z-20"
                        >
                            <FiZap size={24} className="text-white fill-current" />
                        </motion.div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                        </div>
                    </div>

                    {/* AFTER */}
                    <div className="flex-1 p-12 bg-[#3B82F6]/5">
                        <h3 className="text-2xl font-serif mb-8 text-[#3B82F6] uppercase tracking-widest text-center">After</h3>
                        <div className="space-y-6">
                            {[1, 2, 3].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-[#3B82F6]/10 p-4 rounded-xl flex items-center gap-4 border border-[#3B82F6]/20"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
                                        <FiBarChart size={20} />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <motion.div
                                            className="h-2 bg-[#3B82F6]/40 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "90%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.8 + i * 0.2 }}
                                        />
                                        <motion.div
                                            className="h-2 bg-[#3B82F6]/20 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "60%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 1 + i * 0.2 }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="px-6 py-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-3"
                        >
                            <div className="text-[#3B82F6]">{stat.icon}</div>
                            <span className="text-sm font-medium text-slate-300">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Transformation;
