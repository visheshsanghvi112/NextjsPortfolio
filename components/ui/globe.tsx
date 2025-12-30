"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from '@react-spring/web';

export const World = ({
    globeConfig,
    data,
}: {
    globeConfig: any;
    data: any[];
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef(null);
    const pointerInteractionMovement = useRef(0);
    const [{ r }, api] = useSpring(() => ({
        r: 0,
        config: {
            mass: 1,
            tension: 280,
            friction: 40,
            precision: 0.001,
        },
    }));

    const updatePointerInteraction = (value: any) => {
        pointerInteracting.current = value;
        canvasRef.current!.style.cursor = value ? "grabbing" : "grab";
    };

    const updateMovement = (clientX: any) => {
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 200 });
        }
    };

    const onRender = (state: any) => {
        if (!pointerInteracting.current) {
            state.phi += 0.005;
        }
        state.phi += r.get();
        state.width = state.width * 2;
        state.height = state.height * 2;
    };

    useEffect(() => {
        let phi = 0;
        let width = 0;
        const onResize = () =>
            canvasRef.current && (width = canvasRef.current.offsetWidth);
        window.addEventListener("resize", onResize);
        onResize();
        const globe = createGlobe(canvasRef.current!, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                if (!pointerInteracting.current) {
                    phi += 0.005;
                }
                state.phi = phi + r.get();
                state.width = width * 2;
                state.height = width * 2;
            },
            ...globeConfig,
        });

        // Cleanup is tricky with Cobe if it doesn't return destroy.
        // Cobe returns a function to destroy.
        return () => {
            globe.destroy();
        };
    }, [globeConfig, r]);

    return (
        <div
            style={{
                width: "100%",
                maxWidth: 600,
                aspectRatio: 1,
                margin: "auto",
                position: "relative",
            }}
        >
            <canvas
                ref={canvasRef}
                onPointerDown={(e) =>
                    updatePointerInteraction(
                        e.clientX - pointerInteractionMovement.current
                    )
                }
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) => updateMovement(e.clientX)}
                onTouchMove={(e) =>
                    e.touches[0] && updateMovement(e.touches[0].clientX)
                }
                style={{
                    width: "100%",
                    height: "100%",
                    cursor: "grab",
                    contain: "layout paint size",
                    opacity: 0,
                    transition: "opacity 1s ease",
                }}
                onContextMenu={(e) => e.preventDefault()} // Prevent right click
            />
        </div>
    );
};
