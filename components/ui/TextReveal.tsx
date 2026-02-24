"use client";

import { motion, Variants } from "framer-motion";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export const TextReveal = ({ text, className = "", delay = 0 }: TextRevealProps) => {
    const characters = Array.from(text);

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay * 0.1 },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "inherit" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {characters.map((char, index) => (
                <motion.span variants={child} key={index} className={className}>
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.div>
    );
};
