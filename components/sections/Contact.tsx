"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Sparkles } from "lucide-react";
import { TextReveal } from "../ui/TextReveal";
import { NoiseOverlay } from "../ui/NoiseOverlay";

export const Contact = () => {
    return (
        <section className="py-32 px-6 max-w-7xl mx-auto relative z-10 mb-24" id="contact">
            <div className="flex flex-col lg:flex-row gap-16 items-start">

                {/* Left Side: Massive Typography & Info */}
                <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                        <TextReveal
                            text="Let's build"
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white block leading-tight"
                        />
                        <TextReveal
                            text="something"
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 block leading-tight"
                            delay={0.5}
                        />
                        <TextReveal
                            text="extraordinary."
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white block leading-tight"
                            delay={1}
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                        className="text-xl text-gray-400 font-light max-w-md border-l-4 border-cyan-500 pl-4"
                    >
                        Ready to push boundaries? Reach out and let's craft an elite digital experience together.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                        className="flex flex-col gap-4 mt-8"
                    >
                        <a href="mailto:rfaizan6000@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group/link w-fit">
                            <div className="p-3 glass rounded-full border border-white/10 group-hover/link:border-cyan-500/50 transition-colors">
                                <Mail size={20} className="text-cyan-400" />
                            </div>
                            <span className="text-lg font-mono">rfaizan6000@gmail.com</span>
                        </a>
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="p-3 glass rounded-full border border-white/10">
                                <MapPin size={20} className="text-purple-400" />
                            </div>
                            <span className="text-lg font-mono">Faisalabad, Pakistan</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Premium Glass Form */}
                <motion.form
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                    className="flex-1 w-full glass rounded-3xl p-8 md:p-12 space-y-8 relative overflow-hidden group border border-white/10 hover:border-cyan-500/30 transition-colors duration-500 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Thanks for reaching out! (Demo Form)");
                    }}
                >
                    <NoiseOverlay />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="space-y-6 relative z-10 w-full">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-mono font-medium text-gray-400 ml-1 uppercase tracking-widest">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all font-light shadow-inner placeholder:text-gray-600"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-mono font-medium text-gray-400 ml-1 uppercase tracking-widest">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all font-light shadow-inner placeholder:text-gray-600"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs font-mono font-medium text-gray-400 ml-1 uppercase tracking-widest">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={5}
                                className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all resize-none font-light shadow-inner placeholder:text-gray-600"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="relative z-10 w-full bg-white text-black font-bold rounded-2xl px-8 py-5 flex items-center justify-center gap-3 hover:bg-gray-200 transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.2)] ml-auto overflow-hidden group/btn"
                    >
                        <span className="relative z-10 flex items-center gap-2 text-lg">
                            Send Request <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
                        <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 scale-150 rotate-12 opacity-0 group-hover/btn:opacity-100 group-hover/btn:rotate-45 transition-all duration-700 pointer-events-none" size={64} />
                    </button>
                </motion.form>
            </div>
        </section>
    );
};
