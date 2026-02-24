"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Terminal, Code, Cpu, Database } from "lucide-react";
import { TextReveal } from "../ui/TextReveal";
import { NoiseOverlay } from "../ui/NoiseOverlay";

const skills = [
    { name: "Frontend", icon: <Code size={20} className="text-cyan-400" />, items: ["React", "Next.js", "Tailwind", "Framer Motion"] },
    { name: "Backend", icon: <Database size={20} className="text-purple-400" />, items: ["Node.js", "PHP", "PostgreSQL", "MySQL"] },
    { name: "Core", icon: <Cpu size={20} className="text-pink-400" />, items: ["Python", "JavaScript", "TypeScript", "C++"] }
];

export const Experience = () => {
    return (
        <section className="py-32 px-6 max-w-7xl mx-auto relative z-10" id="experience">
            <div className="text-center mb-20">
                <TextReveal
                    text="Experience"
                    className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 block mb-2"
                />
                <TextReveal
                    text="& Core Skills."
                    className="text-4xl md:text-6xl font-bold tracking-tight text-white block"
                    delay={0.5}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* Main Experience Card - Takes up 8 columns */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                    className="md:col-span-8 group glass rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-700 border border-white/5 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] flex flex-col"
                >
                    <NoiseOverlay />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-8">
                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-[#0a0a0a]/50 rounded-2xl glass border border-white/5 shadow-inner hidden sm:block">
                                    <Briefcase size={32} className="text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Exinex Pro</h3>
                                    <h4 className="text-purple-400 font-mono text-sm md:text-base mt-2 flex items-center gap-2">
                                        <Terminal size={16} /> Full Stack Developer
                                    </h4>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 font-mono text-sm glass px-5 py-2.5 rounded-full border border-white/10 w-fit">
                                <Calendar size={16} className="text-pink-400" />
                                <span>Present</span>
                            </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed text-lg border-l-2 border-purple-500/30 pl-6 mb-8 mt-4">
                            Leading the development and architecture of online execution tasks. Focusing on building robust, scalable full-stack solutions and optimizing user workflows for maximum efficiency. Architecting high-performance systems and managing critical databases.
                        </p>
                    </div>
                </motion.div>

                {/* Skills Container - Takes up 4 columns */}
                <div className="md:col-span-4 flex flex-col gap-6">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={skillGroup.name}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.2, type: "spring", stiffness: 50 }}
                            className="group glass rounded-3xl p-6 relative overflow-hidden border border-white/5 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 flex-1"
                        >
                            <NoiseOverlay />
                            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full justify-center">
                                <div className="flex items-center gap-3 mb-4 text-white font-semibold text-lg">
                                    {skillGroup.icon}
                                    <span className="tracking-wide">{skillGroup.name}</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map(item => (
                                        <span key={item} className="px-3 py-1.5 text-xs font-mono text-gray-400 bg-white/5 border border-white/10 rounded-md backdrop-blur-md group-hover:text-gray-200 transition-colors">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
