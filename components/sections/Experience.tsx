"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Database } from "lucide-react";
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skillGroup, idx) => (
                    <motion.div
                        key={skillGroup.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: idx * 0.2, type: "spring", stiffness: 50 }}
                        className="group glass rounded-3xl p-8 relative overflow-hidden border border-white/5 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 flex flex-col h-full"
                    >
                        <NoiseOverlay />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10 flex flex-col h-full justify-center">
                            <div className="flex items-center gap-3 mb-6 text-white font-semibold text-xl">
                                {skillGroup.icon}
                                <span className="tracking-wide">{skillGroup.name}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map(item => (
                                    <span key={item} className="px-4 py-2 text-sm font-mono text-gray-400 bg-white/5 border border-white/10 rounded-md backdrop-blur-md group-hover:text-gray-200 transition-colors">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
