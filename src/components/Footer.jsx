import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#050817] pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">

                    <div className="max-w-sm">
                        <h3 className="text-2xl font-serif text-white mb-6">MedEdit.</h3>
                        <p className="text-slate-500 leading-relaxed mb-6">
                            The premier video editing agency dedicated exclusively to medical professionals and healthcare leaders globally.
                        </p>
                        <div className="flex gap-4">
                            {['fb', 'ig', 'li', 'yt'].map((s) => (
                                <a key={s} href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#3B82F6] transition-all">
                                    <span className="text-xs uppercase font-bold">{s}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
                        <div>
                            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h5>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-slate-500 hover:text-[#3B82F6] transition-colors text-sm">Home</a></li>
                                <li><a href="#how-it-works" className="text-slate-500 hover:text-[#3B82F6] transition-colors text-sm">Process</a></li>
                                <li><a href="#work" className="text-slate-500 hover:text-[#3B82F6] transition-colors text-sm">Portfolio</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Services</h5>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-slate-500 hover:text-[#3B82F6] transition-colors text-sm">Reel Editing</a></li>
                                <li><a href="#" className="text-slate-500 hover:text-[#3B82F6] transition-colors text-sm">YouTube Management</a></li>
                                <li><a href="#" className="text-slate-500 hover:text-[#3B82F6] transition-colors text-sm">Clinic Branding</a></li>
                                <li><a href="#" className="text-slate-500 hover:text-[#3B82F6] transition-colors text-sm">Voiceover AI</a></li>
                            </ul>
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Niche-Specific</h5>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                We follow all medical ethics and procedure guidelines for visual representation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-600 text-xs">
                        &copy; {new Date().getFullYear()} MedEdit Agency. All Rights Reserved. Not affiliated with any medical board.
                    </p>
                    <ul className="flex gap-8 text-xs text-slate-600">
                        <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
