"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [mounted, setMounted] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const customCursorX = useSpring(cursorX, springConfig);
    const customCursorY = useSpring(cursorY, springConfig);

    const springConfigOuter = { damping: 15, stiffness: 100, mass: 1 };
    const customCursorOuterX = useSpring(cursorX, springConfigOuter);
    const customCursorOuterY = useSpring(cursorY, springConfigOuter);

    useEffect(() => {
        setMounted(true);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                getComputedStyle(target).cursor === "pointer" ||
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("button") ||
                target.closest("a")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseOut = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseleave", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseleave", handleMouseOut);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!mounted) return null;

    return (
        <>
            <motion.div
                className="custom-cursor bg-cyan-400 w-4 h-4 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                style={{
                    x: customCursorX,
                    y: customCursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovering ? 1.5 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
            />
            <motion.div
                className="custom-cursor border border-purple-500 w-12 h-12 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                style={{
                    x: customCursorOuterX,
                    y: customCursorOuterY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovering ? 1.2 : 1,
                    opacity: isVisible ? 0.5 : 0,
                }}
            />
        </>
    );
};
