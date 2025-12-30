"use client";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";
import { useState, useRef, MouseEvent, useEffect } from "react";

interface SpotlightRevealProps {
    children: React.ReactNode;
    className?: string;
}

export function SpotlightReveal({ children, className = "" }: SpotlightRevealProps) {
    const [isHovering, setIsHovering] = useState(false);
    const [revealProgress, setRevealProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for cursor
    const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);

        // Calculate reveal progress based on mouse movement
        const progress = Math.min(revealProgress + 0.08, 1);
        setRevealProgress(progress);
    };

    // Huge spotlight that follows cursor
    const maskImage = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, black, transparent)`;

    // Reset reveal on mouse leave
    const handleMouseLeave = () => {
        setIsHovering(false);
        setTimeout(() => setRevealProgress(0), 300);
    };

    // Auto-reveal animation on hover
    useEffect(() => {
        if (isHovering && revealProgress < 1) {
            const interval = setInterval(() => {
                setRevealProgress(prev => Math.min(prev + 0.02, 1));
            }, 50);
            return () => clearInterval(interval);
        }
    }, [isHovering, revealProgress]);

    return (
        <div
            ref={containerRef}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
        >
            {/* Blurred/dark overlay */}
            <div className="relative">
                <motion.div
                    className="absolute inset-0 z-10 backdrop-blur-md bg-black/60"
                    animate={{ opacity: isHovering ? 1 - revealProgress : 1 }}
                    transition={{ duration: 0.3 }}
                />
                {children}
            </div>

            {/* Revealed content through spotlight */}
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                    maskImage: isHovering ? maskImage : undefined,
                    WebkitMaskImage: isHovering ? maskImage : undefined,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovering ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {children}
            </motion.div>

            {/* Big Magic Wand Cursor */}
            {isHovering && (
                <motion.div
                    className="fixed pointer-events-none z-50"
                    style={{
                        left: smoothX,
                        top: smoothY,
                        x: "-50%",
                        y: "-140%",
                    }}
                >
                    {/* Magic Wand/Stick */}
                    <div className="relative">
                        {/* Wand handle - long stick */}
                        <div className="relative" style={{ width: '12px', height: '180px' }}>
                            {/* Stick gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-amber-900 via-amber-700 to-amber-900 rounded-full" />

                            {/* Stick shine */}
                            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-amber-300/60 to-transparent rounded-full" />

                            {/* Grip lines */}
                            <div className="absolute top-1/2 left-0 right-0 h-px bg-amber-950" />
                            <div className="absolute top-[45%] left-0 right-0 h-px bg-amber-950" />
                            <div className="absolute top-[55%] left-0 right-0 h-px bg-amber-950" />
                        </div>

                        {/* Star tip at top */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                            {/* Outer glow */}
                            <div className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2">
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-80 animate-pulse" />
                            </div>

                            {/* Star shape */}
                            <svg width="48" height="48" viewBox="0 0 24 24" className="relative -translate-x-1/2 -translate-y-1/2">
                                {/* Multiple star layers for depth */}
                                <motion.path
                                    d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z"
                                    fill="url(#starGradient)"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.path
                                    d="M12 4L13.5 10.5L20 12L13.5 13.5L12 20L10.5 13.5L4 12L10.5 10.5Z"
                                    fill="white"
                                    opacity="0.8"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                                <defs>
                                    <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#fbbf24" />
                                        <stop offset="50%" stopColor="#a855f7" />
                                        <stop offset="100%" stopColor="#ec4899" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Sparkle particles around star */}
                            <motion.div
                                className="absolute top-0 left-0 w-2 h-2 bg-yellow-300 rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [1, 0.5, 1],
                                    x: [-10, -15, -10],
                                    y: [-5, -10, -5]
                                }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute top-0 right-0 w-2 h-2 bg-purple-300 rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [1, 0.5, 1],
                                    x: [10, 15, 10],
                                    y: [-5, -10, -5]
                                }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                            />
                            <motion.div
                                className="absolute bottom-0 left-1/2 w-2 h-2 bg-pink-300 rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [1, 0.5, 1],
                                    y: [10, 15, 10]
                                }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                            />
                        </div>

                        {/* Magic particles trail */}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1.5 h-1.5 rounded-full"
                                style={{
                                    left: '50%',
                                    top: `${100 + i * 10}px`,
                                    background: i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#a855f7' : '#ec4899',
                                }}
                                animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0, 1.5, 0],
                                    x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 40],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
}
