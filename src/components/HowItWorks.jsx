import React from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiScissors, FiCheckCircle } from 'react-icons/fi';

const steps = [
    {
        icon: <FiSend size={32} />,
        number: "01",
        title: "You Send Us Anything",
        desc: "Audio files, messy photos, or quick voice notes."
    },
    {
        icon: <FiScissors size={32} />,
        number: "02",
        title: "We Handle Everything",
        desc: "Professional editing, structure, and visual layers."
    },
    {
        icon: <FiCheckCircle size={32} />,
        number: "03",
        title: "You Get Ready-to-Post Content",
        desc: "High-quality videos customized for your brand."
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A8A] mb-6">From Raw to Ready — In 3 Steps</h2>
                    <div className="w-20 h-1 bg-[#3B82F6] mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6 relative">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="flex-1 bg-white p-10 rounded-3xl shadow-xl shadow-blue-900/5 border-2 border-slate-200 text-center relative z-10 group hover:border-[#3B82F6] transition-colors"
                            >
                                <div className="w-20 h-20 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-[#3B82F6] mx-auto mb-8 group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                                    {step.icon}
                                </div>
                                <div className="text-6xl font-serif text-slate-100 absolute top-6 right-8 select-none group-hover:text-blue-50 transition-colors">
                                    {step.number}
                                </div>
                                <h3 className="text-2xl font-serif text-[#1E3A8A] mb-4">{step.title}</h3>
                                <p className="text-slate-500">{step.desc}</p>
                            </motion.div>

                            {index < steps.length - 1 && (
                                <div className="hidden lg:flex flex-1 items-center justify-center">
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="w-full h-px border-t-2 border-dashed border-[#3B82F6]/30 relative origin-left"
                                    >
                                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 border-t-2 border-r-2 border-[#3B82F6]/50 rotate-45 transform"></div>
                                    </motion.div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
