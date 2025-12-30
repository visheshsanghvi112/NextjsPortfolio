"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = ({
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
}: {
    id?: string;
    className?: string;
    background?: string;
    minSize?: number;
    maxSize?: number;
    speed?: number;
    particleColor?: string;
    particleDensity?: number;
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvasEl = canvasRef.current;
        if (!canvasEl) return;
        const canvas: HTMLCanvasElement = canvasEl;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationId: number;

        const canvasWidth = canvas.parentElement?.clientWidth || window.innerWidth;
        const canvasHeight = canvas.parentElement?.clientHeight || window.innerHeight;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            opacitySpeed: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * ((maxSize || 1) - (minSize || 0.1)) + (minSize || 0.1);
                this.speedX = (Math.random() - 0.5) * (speed || 1);
                this.speedY = (Math.random() - 0.5) * (speed || 1);
                this.opacity = Math.random();
                this.opacitySpeed = Math.random() * 0.02 * (Math.random() > 0.5 ? 1 : -1);
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;

                this.opacity += this.opacitySpeed;
                if (this.opacity > 1 || this.opacity < 0) this.opacitySpeed *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = particleColor || "#ffffff";
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            // Approximate density logic
            const count = (canvas.width * canvas.height) / (particleDensity || 10000) * 5;
            for (let i = 0; i < (count < 20 ? 20 : count); i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            animationId = requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => {
            canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
            canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
            init();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationId);
        };
    }, [maxSize, minSize, particleColor, particleDensity, speed]);

    return (
        <canvas
            ref={canvasRef}
            id={id}
            className={cn("pointer-events-none", className)}
            style={{
                background: background || "transparent",
            }}
        />
    );
};
