"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface MagicRevealImageProps {
    src: string;
    alt: string;
    className?: string;
}

export function MagicRevealImage({ src, alt, className = "" }: MagicRevealImageProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isRevealed, setIsRevealed] = useState(false);
    const [revealProgress, setRevealProgress] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Initialize canvas with cover layer
    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        // Fill with gradient cover
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, "#1a1a2e");
        gradient.addColorStop(0.5, "#16213e");
        gradient.addColorStop(1, "#0f0f23");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Add subtle pattern
        ctx.fillStyle = "rgba(139, 92, 246, 0.1)";
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 3 + 1;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }, []);

    // Handle brush/scratch effect
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container || isRevealed) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Update mouse position for cursor
        setMousePos({ x: e.clientX, y: e.clientY });

        // Erase in a circular area (brush effect)
        ctx.globalCompositeOperation = "destination-out";

        // Multiple circles for softer brush edge
        const brushSize = 25;
        for (let i = 0; i < 5; i++) {
            const offsetX = (Math.random() - 0.5) * 8;
            const offsetY = (Math.random() - 0.5) * 8;
            const gradient = ctx.createRadialGradient(
                x + offsetX, y + offsetY, 0,
                x + offsetX, y + offsetY, brushSize
            );
            gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
            gradient.addColorStop(0.5, "rgba(0, 0, 0, 0.8)");
            gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x + offsetX, y + offsetY, brushSize, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.globalCompositeOperation = "source-over";

        // Calculate reveal progress
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let transparentPixels = 0;
        for (let i = 3; i < imageData.data.length; i += 4) {
            if (imageData.data[i] === 0) transparentPixels++;
        }
        const progress = transparentPixels / (imageData.data.length / 4);
        setRevealProgress(progress);

        // Auto-reveal if mostly scratched
        if (progress > 0.5 && !isRevealed) {
            setIsRevealed(true);
        }
    };

    return (
        <div
            ref={containerRef}
            className={`relative ${className}`}
            style={{ cursor: isHovering && !isRevealed ? 'none' : 'default' }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* The actual image underneath */}
            <motion.img
                src={src}
                alt={alt}
                className="w-full h-full rounded-full object-cover"
                animate={{
                    scale: isRevealed ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
            />

            {/* Canvas overlay for scratch effect */}
            <motion.canvas
                ref={canvasRef}
                className="absolute inset-0 rounded-full pointer-events-none"
                animate={{
                    opacity: isRevealed ? 0 : 1,
                }}
                transition={{ duration: 0.5 }}
            />

            {/* Custom brush cursor - now inside the container */}
            {isHovering && !isRevealed && (
                <div
                    className="fixed pointer-events-none"
                    style={{
                        left: `${mousePos.x}px`,
                        top: `${mousePos.y}px`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 999999,
                        width: '60px',
                        height: '60px',
                    }}
                >
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-50 blur-lg animate-pulse" />

                    {/* Middle ring */}
                    <div className="absolute inset-2 rounded-full border-4 border-purple-400 bg-purple-900/50" />

                    {/* Center dot */}
                    <div className="absolute inset-[22px] rounded-full bg-purple-300" />

                    {/* Sparkle particles */}
                    <div className="absolute top-0 right-0 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />

                    {/* Cross hair */}
                    <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-purple-300/50" />
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-purple-300/50" />
                </div>
            )}

            {/* Hint text */}
            {!isRevealed && revealProgress < 0.1 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovering ? 1 : 0.7 }}
                    className="absolute inset-0 flex items-center justify-center rounded-full pointer-events-none"
                >
                    <span className="text-[8px] text-purple-300/80 font-medium tracking-wider uppercase">
                        Brush to reveal
                    </span>
                </motion.div>
            )}

            {/* Glow effect when revealed */}
            {isRevealed && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-md -z-10"
                />
            )}
        </div>
    );
}
