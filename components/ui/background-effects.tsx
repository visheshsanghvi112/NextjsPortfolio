"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(
                "absolute inset-0 overflow-hidden pointer-events-none",
                className
            )}
        >
            {/* Primary beam */}
            <motion.div
                className="absolute w-[40rem] h-[40rem] opacity-20"
                style={{
                    background: `radial-gradient(circle at center, rgba(139, 92, 246, 0.3), transparent 50%)`,
                    left: mousePosition.x - 320,
                    top: mousePosition.y - 320,
                }}
                animate={{
                    left: mousePosition.x - 320,
                    top: mousePosition.y - 320,
                }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
            />

            {/* Secondary beam */}
            <motion.div
                className="absolute w-[30rem] h-[30rem] opacity-15"
                style={{
                    background: `radial-gradient(circle at center, rgba(236, 72, 153, 0.3), transparent 50%)`,
                }}
                animate={{
                    left: mousePosition.x - 240 + 100,
                    top: mousePosition.y - 240 + 50,
                }}
                transition={{ type: "spring", damping: 40, stiffness: 150, delay: 0.05 }}
            />

            {/* Ambient beams */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
        </div>
    );
};

export const SparklesCore = ({
    id,
    className,
    particleColor = "#ffffff",
    particleCount = 50,
}: {
    id?: string;
    className?: string;
    particleColor?: string;
    particleCount?: number;
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        const createParticles = () => {
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    size: Math.random() * 1.5 + 0.5,
                    opacity: Math.random() * 0.5 + 0.2,
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.globalAlpha = p.opacity;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        resize();
        createParticles();
        animate();

        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [particleColor, particleCount]);

    return (
        <canvas
            ref={canvasRef}
            id={id}
            className={cn("absolute inset-0 pointer-events-none", className)}
        />
    );
};

export const MovingBorder = ({
    children,
    duration = 2000,
    className,
    containerClassName,
    borderRadius = "1rem",
}: {
    children: React.ReactNode;
    duration?: number;
    className?: string;
    containerClassName?: string;
    borderRadius?: string;
}) => {
    return (
        <div
            className={cn("relative p-[1px] overflow-hidden", containerClassName)}
            style={{ borderRadius }}
        >
            {/* Animated border */}
            <div
                className="absolute inset-0"
                style={{
                    borderRadius,
                    background: `linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)`,
                    animation: `spin ${duration}ms linear infinite`,
                }}
            />
            <div
                className={cn("relative bg-gray-900 z-10", className)}
                style={{ borderRadius }}
            >
                {children}
            </div>
        </div>
    );
};

export const GlowingBorder = ({
    children,
    className,
    glowColor = "purple",
}: {
    children: React.ReactNode;
    className?: string;
    glowColor?: "purple" | "cyan" | "pink";
}) => {
    const colors = {
        purple: "shadow-purple-500/20 hover:shadow-purple-500/40",
        cyan: "shadow-cyan-500/20 hover:shadow-cyan-500/40",
        pink: "shadow-pink-500/20 hover:shadow-pink-500/40",
    };

    return (
        <div
            className={cn(
                "relative rounded-xl transition-all duration-500",
                "shadow-lg hover:shadow-xl",
                colors[glowColor],
                className
            )}
        >
            {children}
        </div>
    );
};
