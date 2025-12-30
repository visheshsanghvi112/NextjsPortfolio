"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface DottedGlowBackgroundProps {
    className?: string;
    gap?: number;
    radius?: number;
    color?: string;
    glowColor?: string;
    opacity?: number;
    speedMin?: number;
    speedMax?: number;
}

export function DottedGlowBackground({
    className,
    gap = 20,
    radius = 1.6,
    color = "#525252",
    glowColor = "#d8b4fe",
    opacity = 1,
    speedMin = 0.5,
    speedMax = 1.5,
}: DottedGlowBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let dots: { x: number; y: number; phase: number; speed: number; isGlowing: boolean }[] = [];

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth * window.devicePixelRatio;
                canvas.height = parent.clientHeight * window.devicePixelRatio;
                canvas.style.width = `${parent.clientWidth}px`;
                canvas.style.height = `${parent.clientHeight}px`;
                ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
                initDots(parent.clientWidth, parent.clientHeight);
            }
        };

        const initDots = (width: number, height: number) => {
            dots = [];
            const cols = Math.ceil(width / gap);
            const rows = Math.ceil(height / gap);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    dots.push({
                        x: i * gap + gap / 2,
                        y: j * gap + gap / 2,
                        phase: Math.random() * Math.PI * 2,
                        speed: speedMin + Math.random() * (speedMax - speedMin),
                        isGlowing: Math.random() > 0.8, // 20% chance to be a "glowing" dot
                    });
                }
            }
        };

        const draw = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

            dots.forEach((dot) => {
                dot.phase += dot.speed * 0.05;
                // Oscillate intensity
                const intensity = (Math.sin(dot.phase) + 1) / 2; // 0 to 1

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);

                // Determine color and alpha
                if (dot.isGlowing) {
                    ctx.fillStyle = glowColor;
                    // Pulse between semi-visible and very bright
                    ctx.globalAlpha = opacity * (0.3 + intensity * 0.7);
                } else {
                    ctx.fillStyle = color;
                    // Pulse between barely visible and dim
                    ctx.globalAlpha = opacity * (0.1 + intensity * 0.3);
                }

                ctx.fill();
                ctx.globalAlpha = 1; // Reset alpha
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        resize();
        draw();
        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [gap, radius, color, glowColor, opacity, speedMin, speedMax]);

    return (
        <div
            className={cn("absolute inset-0 pointer-events-none", className)}
            style={{
                maskImage: "radial-gradient(circle at center, black 0%, transparent 90%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 90%)",
            }}
        >
            <canvas ref={canvasRef} />
        </div>
    );
}
