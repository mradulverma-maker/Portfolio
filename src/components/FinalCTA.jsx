import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const FinalCTA = () => {
    return (
        <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
            {/* Background radial gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3B82F6_0%,_transparent_100%)] opacity-[0.03]"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-5xl md:text-7xl font-serif text-[#1E3A8A] mb-8">
                        Ready to Build Your <span className="text-[#3B82F6]">Brand?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto">
                        Stop worrying about editing. Start thinking about your patient care. We handle the rest.
                    </p>

                    <div className="relative inline-block group">
                        <div className="absolute -inset-4 bg-green-500/20 rounded-full blur-xl group-hover:bg-green-500/30 transition-all animate-pulse"></div>
                        <motion.a
                            href="https://wa.me/917451059748"
                            target="_blank"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:bg-[#1EBE57] transition-colors"
                        >
                            <FaWhatsapp size={28} /> WhatsApp Us Free
                        </motion.a>
                    </div>

                    <p className="mt-8 text-slate-400 text-sm font-medium tracking-wide">
                        Response time: Usually within 1 hour • 100% No-Obligation Consultation
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
