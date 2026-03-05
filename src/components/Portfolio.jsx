import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';

const Portfolio = () => {
    useEffect(() => {
        const loadScript = (src, type) => {
            if (!document.querySelector(`script[src="${src}"]`)) {
                const script = document.createElement("script");
                script.src = src;
                script.async = true;
                if (type) script.type = type;
                document.body.appendChild(script);
            }
        };
        loadScript("https://fast.wistia.com/player.js");
        loadScript("https://fast.wistia.com/embed/kurc5410l8.js", "module");
        loadScript("https://fast.wistia.com/embed/5gt5vktiv7.js", "module");
        loadScript("https://fast.wistia.com/embed/3qigmo551a.js", "module");
        loadScript("https://fast.wistia.com/embed/508bnz0t1o.js", "module");
    }, []);

    const wistia1 = `<style>wistia-player[media-id='kurc5410l8']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/kurc5410l8/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }</style> <wistia-player media-id="kurc5410l8" aspect="1.7777777777777777"></wistia-player>`;
    const wistia2 = `<style>wistia-player[media-id='5gt5vktiv7']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/5gt5vktiv7/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }</style> <wistia-player media-id="5gt5vktiv7" aspect="1.7777777777777777"></wistia-player>`;
    const wistiaShort1 = `<style>wistia-player[media-id='3qigmo551a']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/3qigmo551a/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }</style> <wistia-player media-id="3qigmo551a" aspect="0.5625"></wistia-player>`;
    const wistiaShort2 = `<style>wistia-player[media-id='508bnz0t1o']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/508bnz0t1o/swatch'); display: block; filter: blur(5px); padding-top:176.67%; }</style> <wistia-player media-id="508bnz0t1o" aspect="0.5660377358490566"></wistia-player>`;

    return (
        <section id="work" className="py-24 bg-[#60A5FA] text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-6">
                        <BlurText
                            text="Helping Doctors Share Their Expertise With Clarity and Trust."
                            delay={100}
                            animateBy="words"
                            direction="top"
                            className="text-4xl md:text-5xl font-serif text-white leading-tight underline decoration-2 underline-offset-8 decoration-white/40"
                        />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
                    <div dangerouslySetInnerHTML={{ __html: wistia1 }} className="w-full h-full bg-slate-900" />
                    <div dangerouslySetInnerHTML={{ __html: wistia2 }} className="w-full h-full bg-slate-900 flex flex-col justify-center" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h3 className="text-3xl md:text-4xl font-serif text-white leading-relaxed">
                        Quick Insights for{" "}
                        <span className="relative inline-block whitespace-nowrap">
                            <span className="relative z-10">Patient Education</span>
                            <svg className="absolute -bottom-1 left-0 w-full h-3 text-white/50 z-0" viewBox="0 0 100 12" preserveAspectRatio="none">
                                <path d="M0 8 Q 50 15 100 2" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 max-w-2xl mx-auto">
                    <div className="rounded-[40px] overflow-hidden shadow-2xl bg-slate-900 border-4 border-white/10">
                        <div dangerouslySetInnerHTML={{ __html: wistiaShort1 }} className="w-full h-full" />
                    </div>
                    <div className="rounded-[40px] overflow-hidden shadow-2xl bg-slate-900 border-4 border-white/10">
                        <div dangerouslySetInnerHTML={{ __html: wistiaShort2 }} className="w-full h-full" />
                    </div>
                </div>

                <div className="text-center mt-16 group inline-block w-full text-center">
                    <a href="https://drive.google.com" target="_blank" rel="noreferrer" className="text-white hover:text-blue-50 font-bold text-xl transition-all flex items-center justify-center gap-2 relative inline-flex pb-1">
                        View All Work on Google Drive
                        <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
