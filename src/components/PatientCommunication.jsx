import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PatientCommunication = () => {
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
        loadScript("https://fast.wistia.com/embed/3n7kl1aw5a.js", "module");
    }, []);

    const wistiaVid = `<style>wistia-player[media-id='3n7kl1aw5a']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/3n7kl1aw5a/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }</style> <wistia-player media-id="3n7kl1aw5a" aspect="1.7777777777777777"></wistia-player>`;

    return (
        <section className="py-20 px-6 bg-[#F8FAFC] font-sans text-slate-800">
            <div className="max-w-[1120px] mx-auto">

                {/* ── HEADER ── */}
                <motion.header
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.2em] uppercase text-[#3B82F6] bg-[#EFF6FF] border border-[#DBEAFE] rounded-full px-4 py-1.5 mb-5">
                        <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-[blink_2s_infinite]"></span>
                        Case Study
                    </div>
                    <h2 className="font-serif text-[clamp(26px,4.2vw,46px)] font-bold text-[#1E3A8A] leading-[1.2] max-w-[780px] mx-auto mb-6">
                        Improving <span className="relative inline-block italic font-normal">Patient Communication<span className="absolute left-0 bottom-[1px] w-full h-[3px] bg-gradient-to-r from-[#D4A843] to-[rgba(212,168,67,0.15)] rounded-[2px] block origin-left"></span></span><br />
                        and Consultation Access
                    </h2>
                    <div className="w-14 h-[3px] bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] rounded-[2px] mx-auto mb-4"></div>
                    <p className="max-w-[560px] mx-auto text-[16px] text-[#64748b] leading-[1.75]">
                        A focused look at how we helped a veterinary specialist build a structured,
                        accessible consultation framework for animal owners online.
                    </p>
                </motion.header>

                {/* ── TWO COLUMN ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[52px] items-start">

                    {/* LEFT: visuals */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="flex flex-col gap-5"
                    >
                        {/* Banner Placeholder (Image replaced inline) */}
                        <div className="bg-white rounded-[18px] overflow-hidden shadow-[0_2px_8px_rgba(30,58,138,0.07),_0_12px_40px_rgba(30,58,138,0.08)] border border-[#E2E8F0] transition-transform duration-350 hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(30,58,138,0.12),_0_24px_60px_rgba(30,58,138,0.13)]">
                            <div className="flex items-center gap-2 px-4 py-2.5 text-[11.5px] font-semibold tracking-[0.1em] uppercase text-white bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px] shrink-0"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 9h18" /></svg>
                                Channel Banner
                            </div>
                            <div className="w-full relative overflow-hidden bg-[#EFF6FF]">
                                <img src="/upscaled_Blue%20modern%20content%20marketing%20business%20facebook%20cover%20banner2.jpg" alt="Channel Banner" className="w-full h-auto object-cover" />
                            </div>
                        </div>

                        {/* WhatsApp Video */}
                        <div className="bg-white rounded-[18px] overflow-hidden shadow-[0_2px_8px_rgba(30,58,138,0.07),_0_12px_40px_rgba(30,58,138,0.08)] border border-[#E2E8F0] transition-transform duration-350 hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(30,58,138,0.12),_0_24px_60px_rgba(30,58,138,0.13)]">
                            <div className="flex items-center gap-2 px-4 py-2.5 text-[11.5px] font-semibold tracking-[0.1em] uppercase text-white bg-gradient-to-br from-[#15803D] to-[#16a34a]">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px] shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L0 24l6.335-1.518A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.576-.487-5.072-1.34l-.362-.214-3.763.902.944-3.668-.235-.378A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                                WhatsApp Consultation Video
                            </div>
                            <div className="w-full aspect-video bg-[#F0FDF4] relative overflow-hidden">
                                <div dangerouslySetInnerHTML={{ __html: wistiaVid }} className="w-full h-full" />
                            </div>
                        </div>

                    </motion.div>

                    {/* RIGHT: text */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="md:sticky md:top-10"
                    >
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-[11.5px] font-semibold tracking-[0.06em] uppercase px-3 py-1 rounded-full border border-[#DBEAFE] text-[#1E3A8A] bg-[#EFF6FF]">Veterinary Care</span>
                            <span className="text-[11.5px] font-semibold tracking-[0.06em] uppercase px-3 py-1 rounded-full border border-[#86EFAC] text-[#15803D] bg-[#F0FDF4]">WhatsApp Outreach</span>
                            <span className="text-[11.5px] font-semibold tracking-[0.06em] uppercase px-3 py-1 rounded-full border border-[#DBEAFE] text-[#1E3A8A] bg-[#EFF6FF]">Content Strategy</span>
                        </div>

                        <h3 className="font-serif text-[clamp(22px,2.8vw,30px)] font-bold text-[#1E3A8A] leading-[1.25] mb-4">Streamlining Consultation Communication</h3>

                        <p className="text-[15.5px] text-[#64748b] leading-[1.8] mb-8">
                            To make it easier for viewers and animal owners to reach professional guidance,
                            we helped organize a clear consultation communication structure. This included
                            a dedicated informational banner and consultation guidance videos that explain
                            how and when to seek professional veterinary advice.
                            <br /><br />
                            These resources help ensure that communication remains structured, accessible,
                            and focused on responsible veterinary care.
                        </p>

                        {/* features */}
                        <ul className="flex flex-col gap-3.5 mb-9 text-[14.5px] text-slate-800 leading-[1.55]">
                            <li className="flex items-start gap-3">
                                <span className="w-7 h-7 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center shrink-0 mt-0.5 text-[#1E3A8A]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg>
                                </span>
                                <span>Dedicated channel banner communicating consultation availability to new visitors</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-7 h-7 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center shrink-0 mt-0.5 text-[#1E3A8A]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                </span>
                                <span>WhatsApp consultation videos guiding pet owners on when to seek veterinary help</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-7 h-7 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center shrink-0 mt-0.5 text-[#1E3A8A]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                </span>
                                <span>Structured access framework reducing friction for first-time consultation inquiries</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-7 h-7 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center shrink-0 mt-0.5 text-[#1E3A8A]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[14px] h-[14px]"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                </span>
                                <span>All content optimised for mobile — where most animal owners first reach out</span>
                            </li>
                        </ul>

                        {/* stats */}
                        <div className="grid grid-cols-2 gap-3.5 mb-9">
                            <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-4.5 shadow-[0_2px_8px_rgba(30,58,138,0.05)] transition-transform duration-250 hover:-translate-y-1">
                                <div className="font-serif text-[26px] font-bold text-[#1E3A8A] leading-none mb-1">200K<span className="text-[16px] text-[#3B82F6]">+</span></div>
                                <div className="text-[12px] text-[#64748b] font-medium">YouTube Subscribers</div>
                            </div>
                            <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-4.5 shadow-[0_2px_8px_rgba(30,58,138,0.05)] transition-transform duration-250 hover:-translate-y-1">
                                <div className="font-serif text-[26px] font-bold text-[#1E3A8A] leading-none mb-1">3<span className="text-[16px] text-[#3B82F6]">x</span></div>
                                <div className="text-[12px] text-[#64748b] font-medium">Consultation Inquiries</div>
                            </div>
                            <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-4.5 shadow-[0_2px_8px_rgba(30,58,138,0.05)] transition-transform duration-250 hover:-translate-y-1">
                                <div className="font-serif text-[26px] font-bold text-[#1E3A8A] leading-none mb-1">48<span className="text-[16px] text-[#3B82F6]">h</span></div>
                                <div className="text-[12px] text-[#64748b] font-medium">Avg. Turnaround</div>
                            </div>
                            <div className="bg-white border border-[#E2E8F0] rounded-[14px] p-4.5 shadow-[0_2px_8px_rgba(30,58,138,0.05)] transition-transform duration-250 hover:-translate-y-1">
                                <div className="font-serif text-[26px] font-bold text-[#1E3A8A] leading-none mb-1">100<span className="text-[16px] text-[#3B82F6]">%</span></div>
                                <div className="text-[12px] text-[#64748b] font-medium">Mobile Optimised</div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a href="#work" className="inline-flex items-center justify-center sm:justify-start gap-2 px-5 py-3 rounded-[10px] text-[14px] font-semibold text-white bg-[#1E3A8A] shadow-[0_4px_14px_rgba(30,58,138,0.3)] transition-all duration-250 hover:bg-[#1e40af] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(30,58,138,0.35)]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" /><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" /><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" /><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" /><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" /><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" /><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" /></svg>
                                View Full Case Study
                            </a>
                            <a href="#wa" className="inline-flex items-center justify-center sm:justify-start gap-2 px-5 py-3 rounded-[10px] text-[14px] font-semibold text-[#1E3A8A] bg-white border-[1.5px] border-[#E2E8F0] transition-all duration-250 hover:border-[#3B82F6] hover:text-[#3B82F6] hover:-translate-y-0.5">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                Get a Free Consult
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* ── TRUST BAR ── */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-16 py-7 px-9 bg-white border border-[#E2E8F0] rounded-[18px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_2px_8px_rgba(30,58,138,0.05)]"
                >
                    <div className="flex items-center gap-2.5 text-[13.5px] font-medium text-slate-800">
                        <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#1E3A8A] shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                        Responsible Medical Content
                    </div>
                    <div className="hidden md:block w-px h-9 bg-[#E2E8F0] shrink-0"></div>
                    <div className="flex items-center gap-2.5 text-[13.5px] font-medium text-slate-800">
                        <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#1E3A8A] shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px]"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        </div>
                        Fast 48-Hour Delivery
                    </div>
                    <div className="hidden md:block w-px h-9 bg-[#E2E8F0] shrink-0"></div>
                    <div className="flex items-center gap-2.5 text-[13.5px] font-medium text-slate-800">
                        <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#1E3A8A] shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px]"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        </div>
                        Doctor-Only Niche Agency
                    </div>
                    <div className="hidden md:block w-px h-9 bg-[#E2E8F0] shrink-0"></div>
                    <div className="flex items-center gap-2.5 text-[13.5px] font-medium text-slate-800">
                        <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#1E3A8A] shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px]"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                        </div>
                        Mobile-First Production
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default PatientCommunication;
