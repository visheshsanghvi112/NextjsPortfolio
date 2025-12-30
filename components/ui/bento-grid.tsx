"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={cn(
                "row-span-1 rounded-2xl group/bento relative overflow-hidden",
                "transition-all duration-500",
                "p-[1px]", // Border gradient wrapper
                className
            )}
        >
            {/* Animated gradient border */}
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500"
                style={{
                    background: "linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.4), rgba(6, 182, 212, 0.4))",
                }}
            />

            {/* Spotlight effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(139, 92, 246, 0.15), transparent 40%)`
                    ),
                }}
            />

            {/* Inner card */}
            <div className={cn(
                "relative h-full rounded-2xl",
                "bg-gradient-to-br from-gray-900/95 via-gray-900/98 to-black",
                "border border-white/[0.05] group-hover/bento:border-white/[0.1]",
                "backdrop-blur-xl",
                "flex flex-col",
                "shadow-xl shadow-black/20 group-hover/bento:shadow-2xl group-hover/bento:shadow-purple-500/10"
            )}>
                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 rounded-2xl opacity-[0.02] group-hover/bento:opacity-[0.04] transition-opacity duration-500"
                    style={{
                        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px',
                    }}
                />

                {/* Header/Animation area */}
                <div className="flex-1 rounded-t-2xl overflow-hidden relative">
                    {/* Subtle top glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500" />
                    {header}
                </div>

                {/* Content area */}
                <div className="p-4 relative">
                    {/* Bottom glow line */}
                    <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />

                    <motion.div
                        className="transition-all duration-300"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                    >
                        <div className="flex items-center gap-2 mb-1.5">
                            <motion.div
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                {icon}
                            </motion.div>
                            <div className="font-sans font-semibold text-neutral-100 text-sm tracking-tight">
                                {title}
                            </div>
                        </div>
                        <div className="font-sans font-normal text-neutral-400 text-xs leading-relaxed">
                            {description}
                        </div>
                    </motion.div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-tr-2xl opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-bl-2xl opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500" />
            </div>
        </motion.div>
    );
};
