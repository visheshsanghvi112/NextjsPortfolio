"use client";

import { motion } from "framer-motion";

interface BorderBeamProps {
    className?: string;
    duration?: number;
    borderWidth?: number;
    colorFrom?: string;
    colorTo?: string;
    delay?: number;
}

export function BorderBeam({
    className,
    duration = 8, // Slower default for elegance
    borderWidth = 1.5,
    colorFrom = "#10b981", // Emerald
    colorTo = "#3b82f6",   // Blue
    delay = 0,
}: BorderBeamProps) {
    return (
        <div
            className={`absolute inset-0 rounded-[inherit] pointer-events-none z-10 overflow-hidden ${className}`}
            style={{
                padding: `${borderWidth}px`,
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
            }}
        >
            <motion.div
                className="absolute top-1/2 left-1/2 w-[200%] h-[200%]"
                style={{
                    background: `conic-gradient(from 0deg, transparent 0deg, ${colorFrom} 20deg, ${colorTo} 60deg, transparent 120deg)`,
                    transform: 'translate(-50%, -50%)',
                }}
                animate={{ rotate: 360 }}
                transition={{
                    duration,
                    ease: "linear",
                    repeat: Infinity,
                    delay,
                }}
            />
        </div>
    );
}
