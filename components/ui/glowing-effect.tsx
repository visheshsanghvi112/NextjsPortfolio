"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface GlowingEffectProps {
    spread?: number;
    glow?: boolean;
    disabled?: boolean;
    proximity?: number;
    inactiveZone?: number;
    borderWidth?: number;
}

export const GlowingEffect = ({
    spread = 40,
    glow = true,
    disabled = false,
    proximity = 64,
    inactiveZone = 0.01,
    borderWidth = 1,
}: GlowingEffectProps) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!cardRef.current || disabled) return;

            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (x < -proximity || x > rect.width + proximity || y < -proximity || y > rect.height + proximity) {
                setOpacity(0);
                return;
            }

            setPosition({ x, y });
            setOpacity(1);
        },
        [disabled, proximity]
    );

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    return (
        <>
            <div
                ref={cardRef}
                className="absolute inset-0 h-full w-full rounded-[inherit] pointer-events-none overflow-hidden"
            >
                <div
                    className="absolute inset-0 rounded-[inherit]"
                    style={{
                        background: `radial-gradient(${spread}px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.6), transparent 100%)`,
                        opacity: glow ? opacity : 0,
                        transition: "opacity 0.2s"
                    }}
                />
            </div>
            {/* Optional: Add a subtle border container if needed by parent implementation */}
        </>
    );
};
