"use client";

import { motion } from "framer-motion";
import { ExternalLink, Database, Code2, Server, Layout, ArrowUpRight } from "lucide-react";
import { TextReveal } from "../ui/TextReveal";
import { NoiseOverlay } from "../ui/NoiseOverlay";

const projects = [
    {
        title: "E-Commerce Core",
        description: "A high-performance scalable backend for a massive e-commerce platform.",
        tech: ["Node.js", "Redis", "PostgreSQL"],
        icon: <Server className="text-cyan-400 mb-4" size={32} />,
        color: "from-cyan-500/20 to-blue-500/5",
        borderGlow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] group-hover:border-cyan-400/50",
        spanClass: "md:col-span-2 md:row-span-2", // Large priority card
    },
    {
        title: "Fast Food POS System",
        description: "A comprehensive point-of-sale system tailored for fast food environments, streamlining order management and inventory tracking.",
        tech: ["PHP", "JavaScript", "MySQL"],
        icon: <Database className="text-purple-400 mb-4" size={32} />,
        color: "from-purple-500/20 to-pink-500/5",
        borderGlow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:border-purple-400/50",
        spanClass: "md:col-span-1 md:row-span-2", // Tall card
    },
    {
        title: "Advanced Web Scraper",
        description: "Robust data extraction tool capable of navigating complex DOM structures.",
        tech: ["Python", "Selenium"],
        icon: <Layout className="text-emerald-400 mb-4" size={32} />,
        color: "from-emerald-500/20 to-teal-500/5",
        borderGlow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] group-hover:border-emerald-400/50",
        spanClass: "md:col-span-1 md:row-span-1", // Standard card
    },
    {
        title: "Portfolio V1",
        description: "Previous iteration of the personal portfolio.",
        tech: ["React", "Tailwind"],
        icon: <Code2 className="text-orange-400 mb-4" size={32} />,
        color: "from-orange-500/20 to-red-500/5",
        borderGlow: "group-hover:shadow-[0_0_30px_rgba(251,146,60,0.3)] group-hover:border-orange-400/50",
        spanClass: "md:col-span-2 md:row-span-1", // Wide card
    }
];

export const Projects = () => {
    return (
        <section className="py-32 px-6 max-w-7xl mx-auto relative z-10" id="projects">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                <div className="max-w-2xl">
                    <TextReveal
                        text="Curated"
                        className="text-4xl md:text-6xl font-bold tracking-tight text-white block mb-2"
                    />
                    <TextReveal
                        text="Work & Projects."
                        className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 block"
                        delay={0.5}
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-gray-400 mt-6 text-lg border-l-2 border-white/20 pl-4"
                    >
                        A selection of my recent work, highlighting complex problem-solving, modern tech stacks, and relentless attention to detail.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                >
                    <a href="https://github.com/Faizan-Hamid381" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 glass px-6 py-3 rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-cyan-500/50 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                        <span>View GitHub</span>
                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: idx * 0.15, type: "spring", stiffness: 50 }}
                        className={`group glass rounded-3xl p-8 relative overflow-hidden transition-all duration-700 border border-white/5 ${project.borderGlow} ${project.spanClass} flex flex-col`}
                    >
                        <NoiseOverlay />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 group-hover:opacity-100 transition-opacity duration-700`} />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 bg-[#0a0a0a]/50 rounded-2xl glass border border-white/5 shadow-inner">
                                    {project.icon}
                                </div>
                                <a href="#" className="p-3 glass rounded-full opacity-0 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white/10 hover:text-cyan-300 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]" aria-label="View Project">
                                    <ExternalLink size={20} />
                                </a>
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-8 leading-relaxed line-clamp-2 md:line-clamp-none max-w-md">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="px-4 py-1.5 text-xs font-semibold font-mono text-gray-300 bg-white/5 border border-white/10 rounded-full flex items-center gap-1.5 backdrop-blur-md">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
