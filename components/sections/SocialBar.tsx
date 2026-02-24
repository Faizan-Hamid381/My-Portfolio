"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { MagneticIcon } from "@/components/ui/MagneticIcon";
import { motion } from "framer-motion";

export const SocialBar = () => {
    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/Faizan-Hamid381",
            icon: <Github size={24} className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/faizan-hamid-11118737a",
            icon: <Linkedin size={24} className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />,
        },
        {
            name: "Email",
            url: "mailto:rfaizan6000@gmail.com",
            icon: <Mail size={24} className="text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 rounded-full flex items-center gap-8 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
            {socialLinks.map((link) => (
                <MagneticIcon key={link.name} intensity={0.3}>
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center p-2 rounded-full hover:bg-white/5 transition-colors"
                        aria-label={link.name}
                    >
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-full bg-current opacity-0 blur-md group-hover:opacity-20 transition-opacity" style={{ color: "inherit" }} />
                        {link.icon}
                    </a>
                </MagneticIcon>
            ))}
        </motion.div>
    );
};
