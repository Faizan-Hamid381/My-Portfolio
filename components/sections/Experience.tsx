"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Database, Server, ExternalLink } from "lucide-react";
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

                {/* Main Experience Card (Replaced with Universal POS System Project) - Takes up 8 columns */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                    className="md:col-span-8 group glass rounded-3xl relative overflow-hidden transition-all duration-700 border border-white/5 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] flex flex-col"
                >
                    <NoiseOverlay />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/5 opacity-30 group-hover:opacity-100 transition-opacity duration-700 z-0" />

                    <div className="relative w-full h-[50%] md:h-[55%] shrink-0 z-10 border-b border-white/5">
                        <img src="/universal-pos.png" alt="Universal POS System" className="w-full h-full object-cover" />
                    </div>

                    <div className="relative z-10 flex flex-col flex-1 p-6 md:p-8">
                        <div className="flex justify-between items-start mb-2">
                            <div />
                            <a href="#" className="p-3 glass rounded-full opacity-0 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white/10 hover:text-cyan-300 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]" aria-label="View Project">
                                <ExternalLink size={20} />
                            </a>
                        </div>

                        <div className="mt-auto">
                            <h3 className="font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all text-xl md:text-2xl mb-2">
                                Universal POS System
                            </h3>
                            <p className="text-gray-400 leading-relaxed line-clamp-2 md:line-clamp-none max-w-lg mb-4 text-sm md:text-base">
                                A comprehensive, adaptable Point of Sale terminal featuring real-time inventory tracking, dynamic cart management, and efficient checkout workflows.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {["React", "Node.js", "PostgreSQL"].map((tech) => (
                                    <span key={tech} className="px-3 py-1.5 text-xs font-semibold font-mono text-gray-300 bg-white/5 border border-white/10 rounded-full flex items-center gap-1.5 backdrop-blur-md">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
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
