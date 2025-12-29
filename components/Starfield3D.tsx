"use client";
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points in a sphere
function generateSpherePoints(count: number, radius: number): Float32Array {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = radius * Math.cbrt(Math.random()); // Cube root for uniform distribution

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
}

// Rotating star field layer
function StarLayer({
    count,
    radius,
    size,
    color,
    rotationSpeed
}: {
    count: number;
    radius: number;
    size: number;
    color: string;
    rotationSpeed: number;
}) {
    const ref = useRef<THREE.Points>(null);
    const positions = useMemo(() => generateSpherePoints(count, radius), [count, radius]);

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta * rotationSpeed * 0.05;
            ref.current.rotation.y += delta * rotationSpeed * 0.08;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color={color}
                size={size}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

// Main 3D Scene
function Scene() {
    return (
        <>
            {/* Ambient background color */}
            <color attach="background" args={['#0a0a12']} />

            {/* Multiple star layers at different depths and speeds - BRIGHTER */}
            {/* Distant white stars - slow rotation */}
            <StarLayer count={4000} radius={50} size={0.15} color="#ffffff" rotationSpeed={0.1} />

            {/* Mid-distance purple stars - larger and brighter */}
            <StarLayer count={2000} radius={40} size={0.2} color="#c084fc" rotationSpeed={0.15} />

            {/* Closer pink stars - more vibrant */}
            <StarLayer count={1500} radius={30} size={0.25} color="#f472b6" rotationSpeed={0.2} />

            {/* Close violet accent stars - brighter */}
            <StarLayer count={800} radius={20} size={0.3} color="#a78bfa" rotationSpeed={0.25} />

            {/* Very close bright stars for maximum visibility */}
            <StarLayer count={400} radius={15} size={0.4} color="#ffffff" rotationSpeed={0.3} />

            {/* Extra bright foreground stars */}
            <StarLayer count={150} radius={10} size={0.5} color="#ffffff" rotationSpeed={0.35} />
        </>
    );
}

// Main exported component with performance fallback
export default function Starfield3D() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 1], fov: 75 }}
                dpr={[1, 1.5]} // Limit pixel ratio for performance
                gl={{
                    antialias: false, // Disable for performance
                    powerPreference: "high-performance",
                    alpha: true,
                }}
                style={{ background: 'transparent' }}
            >
                <Scene />
            </Canvas>
        </div>
    );
}
