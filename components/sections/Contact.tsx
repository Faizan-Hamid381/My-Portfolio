"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Sparkles } from "lucide-react";
import { TextReveal } from "../ui/TextReveal";
import { NoiseOverlay } from "../ui/NoiseOverlay";

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsSuccess(false);

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "54c05df5-3047-4331-a5d4-6dc5674828f5");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (res.ok) {
                setIsSuccess(true);
                e.currentTarget.reset(); // Clear form on success
                // Temporarily show success state, then revert
                setTimeout(() => {
                    setIsSuccess(false);
                }, 3000);
            } else {
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Network error. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    onSubmit={handleSubmit}
                >
                    <NoiseOverlay />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="space-y-6 relative z-10 w-full">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-mono font-medium text-gray-400 ml-1 uppercase tracking-widest">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all font-light shadow-inner placeholder:text-gray-600"
                                placeholder="John Doe"
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-mono font-medium text-gray-400 ml-1 uppercase tracking-widest">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all font-light shadow-inner placeholder:text-gray-600"
                                placeholder="john@example.com"
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs font-mono font-medium text-gray-400 ml-1 uppercase tracking-widest">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all resize-none font-light shadow-inner placeholder:text-gray-600"
                                placeholder="Tell me about your project..."
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting || isSuccess}
                        className={`relative z-10 w-full font-bold rounded-2xl px-8 py-5 flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] ml-auto overflow-hidden group/btn ${isSuccess
                                ? "bg-cyan-500 text-white shadow-[0_0_40px_rgba(6,182,212,0.4)]"
                                : "bg-white text-black hover:bg-gray-200 hover:scale-[1.02]"
                            } ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                        <span className="relative z-10 flex items-center gap-2 text-lg">
                            {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Request"}
                            {!isSubmitting && !isSuccess && <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
                        </span>
                        {!isSuccess && (
                            <>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
                                <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 scale-150 rotate-12 opacity-0 group-hover/btn:opacity-100 group-hover/btn:rotate-45 transition-all duration-700 pointer-events-none" size={64} />
                            </>
                        )}
                    </button>
                </motion.form>
            </div>
        </section>
    );
};
