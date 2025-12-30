"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

export const EncryptedText = ({
    text,
    interval = 50,
    className,
    encryptedClassName,
    revealedClassName,
    revealDelayMs = 0,
}: {
    text: string;
    interval?: number;
    className?: string;
    encryptedClassName?: string;
    revealedClassName?: string;
    revealDelayMs?: number;
}) => {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        let scrambleTimer: NodeJS.Timeout;
        let iteration = 0;

        const startScramble = () => {
            setIsScrambling(true);
            scrambleTimer = setInterval(() => {
                setDisplayText((prev) =>
                    text
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(scrambleTimer);
                    setIsScrambling(false);
                    setDisplayText(text);
                }

                iteration += 1 / 3;
            }, interval);
        };

        timer = setTimeout(startScramble, revealDelayMs);

        return () => {
            clearTimeout(timer);
            clearInterval(scrambleTimer);
        };
    }, [text, interval, revealDelayMs]);

    return (
        <div className={cn("inline-block whitespace-nowrap", className)}>
            <span
                className={cn(
                    isScrambling ? encryptedClassName : revealedClassName
                )}
            >
                {displayText}
            </span>
        </div>
    );
};
