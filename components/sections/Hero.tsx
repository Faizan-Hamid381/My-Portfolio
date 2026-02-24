"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Clock, Terminal } from "lucide-react";
import { TextReveal } from "../ui/TextReveal";

export const Hero = () => {
    const [time, setTime] = useState<string>("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Current time in PKT (UTC+5)
        const updateTime = () => {
            const now = new Date();
            // Format as HH:MM:SS AM/PM
            const options: Intl.DateTimeFormatOptions = {
                timeZone: "Asia/Karachi",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            };
            setTime(new Intl.DateTimeFormat("en-US", options).format(now));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
            {/* Advanced Background Animated Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    x: [0, 50, 0],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, -90, 0],
                    x: [0, -50, 0],
                    y: [0, 50, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none"
            />

            {/* Center abstract shapes */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-[100px] pointer-events-none"
            />

            <div className="z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 w-full gap-12">

                {/* Left Column: Text & Terminal */}
                <div className="flex-1 flex flex-col items-start space-y-8 w-full">
                    {/* PKT Time Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="glass rounded-full px-5 py-2.5 flex items-center gap-3 text-sm text-cyan-300 font-mono tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.15)] border border-cyan-500/20"
                    >
                        <Clock size={16} className="text-purple-400" />
                        <span>System Time: PKT {mounted && time ? `[${time}]` : "[--:--:--]"}</span>
                    </motion.div>

                    {/* Massive Typography */}
                    <div className="space-y-2 w-full">
                        <TextReveal
                            text="Creative"
                            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 block leading-tight"
                            delay={0}
                        />
                        <TextReveal
                            text="Developer"
                            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 block leading-tight"
                            delay={2}
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-xl md:text-2xl text-gray-400 font-light max-w-xl border-l-4 border-purple-500 pl-4"
                    >
                        Hi, I'm <strong className="text-white font-semibold">Faizan Hamid</strong>. Building complex, scalable, and visually elite digital experiences.
                    </motion.p>

                    {/* Hacker Terminal */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="w-full max-w-xl glass rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-white/10"
                    >
                        <div className="bg-[#0a0a0a]/80 backdrop-blur-md px-4 py-3 border-b border-white/5 flex items-center gap-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <span className="mx-auto text-xs text-gray-500 font-mono flex items-center gap-2">
                                <Terminal size={14} /> _terminal
                            </span>
                        </div>
                        <div className="p-5 font-mono text-sm md:text-base leading-relaxed">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                                <span className="text-green-400">faizan@system</span>
                                <span className="text-gray-400">:</span>
                                <span className="text-blue-400">~/stack</span>
                                <span className="text-gray-400">$</span> ./init_skills.sh
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ delay: 2, duration: 0.5 }}
                                className="text-cyan-300 mt-2 flex flex-col gap-1"
                            >
                                <span className="animate-[typing_2s_steps(40,end)] overflow-hidden border-r-2 border-cyan-400 whitespace-nowrap">
                                    ssLoading modules: [Python] [PHP] [Next.js]
                                </span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 4 }}
                                    className="text-green-400 mt-1"
                                >
                                    System fully operational. Ready for deployment.
                                </motion.span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Dynamic Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.5, ease: "backOut", delay: 0.5 }}
                    className="relative group flex justify-center mt-12 lg:mt-0 w-full lg:w-auto"
                >
                    {/* Elaborate glowing borders and rings */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-md opacity-60 animate-pulse" />

                    {/* Ring decoration */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-8 border border-white/10 rounded-full border-dashed pointer-events-none hidden md:block"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-12 border border-cyan-500/20 rounded-full pointer-events-none hidden md:block"
                    />

                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 glass overflow-hidden flex items-center justify-center bg-[#050505] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                        <Image
                            src="/myprofile.jpg"
                            alt="Faizan Hamid"
                            width={320}
                            height={320}
                            priority
                            className="w-full h-full object-cover rounded-full md:grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Inner glass overlay for extra premium feel */}
                        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
