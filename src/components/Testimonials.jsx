import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiMoreHorizontal, FiCalendar } from 'react-icons/fi';

const reviews = [
    {
        name: "Dr. Sameer K.",
        time: "10:24 AM",
        msg: "I just posted the latest reel you guys edited. The response has been incredible. My patients are finally understanding the procedures better!",
        color: "bg-[#25D366]"
    },
    {
        name: "Dr. Anjali M.",
        time: "02:15 PM",
        msg: "The banner for the surgery clinic looks so professional. Thank you for making it so clean and clinical yet engaging.",
        color: "bg-[#34B7F1]"
    },
    {
        name: "Dr. Vikram S.",
        time: "Yesterday",
        msg: "Can we start working on the 10-part series? If they come out like the last one, we'll have a great year.",
        color: "bg-[#59ce72]"
    }
];

const videos = [1, 2, 3];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A8A] mb-6">What Doctors Are Saying</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">Real feedback from clinical experts who trust us with their professional brand content.</p>
                </motion.div>

                {/* WhatsApp Chat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {reviews.map((rev, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, rotate: index % 2 === 0 ? -2 : 2 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-[20px] p-6 shadow-xl shadow-blue-900/5 relative border border-slate-100"
                        >
                            {/* WhatsApp Header Style */}
                            <div className="flex items-center justify-between mb-4 border-b border-slate-50 pb-3">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full ${rev.color} flex items-center justify-center text-white font-bold`}>
                                        {rev.name.charAt(4)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm">{rev.name}</h4>
                                        <span className="text-[10px] text-green-500 font-medium">Online</span>
                                    </div>
                                </div>
                                <div className="text-slate-300">
                                    <FiMoreHorizontal />
                                </div>
                            </div>

                            {/* Message Bubble Style */}
                            <div className="bg-[#E7FFDB] p-4 rounded-xl rounded-tl-none relative shadow-sm text-slate-800 text-sm leading-relaxed mb-4">
                                {rev.msg}
                                <div className="absolute bottom-1 right-2 flex items-center gap-1 text-[9px] text-slate-400">
                                    {rev.time} <FiCheck className="text-blue-500" />
                                </div>
                                {/* Arrow Tail */}
                                <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] border-t-[#E7FFDB] border-l-[10px] border-l-transparent"></div>
                            </div>

                            <div className="flex items-center gap-3 text-[11px] text-slate-400">
                                <FiCalendar /> Verified Client feedback
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Video Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {videos.map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="aspect-[9/16] bg-slate-200 rounded-[30px] relative overflow-hidden group cursor-pointer border-4 border-white shadow-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 group-hover:bg-[#3B82F6] transition-colors">
                                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-white ml-1"></div>
                                </div>
                                <div className="text-white font-bold">Video Review {i + 1}</div>
                                <div className="text-white/60 text-xs tracking-wider uppercase">DR. CLIENT NAME</div>
                            </div>
                            {/* Visual Fake Noise/Texture */}
                            <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
