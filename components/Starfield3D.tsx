"use client";
import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points in a stretched cylinder for warp speed effect
function generateWarpPoints(count: number, radius: number, depth: number): Float32Array {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const r = Math.sqrt(Math.random()) * radius; // Square root for uniform disc distribution

        positions[i * 3] = Math.cos(angle) * r;
        positions[i * 3 + 1] = Math.sin(angle) * r;
        positions[i * 3 + 2] = (Math.random() - 0.5) * depth; // Spread along z-axis
    }
    return positions;
}

// Flying stars that move towards camera
function FlyingStars({
    count,
    speed,
    size,
    color,
    depth = 100,
    radius = 30
}: {
    count: number;
    speed: number;
    size: number;
    color: string;
    depth?: number;
    radius?: number;
}) {
    const ref = useRef<THREE.Points>(null);
    const positions = useMemo(() => generateWarpPoints(count, radius, depth), [count, radius, depth]);

    // Store original z positions for reset
    const originalZ = useMemo(() => {
        const arr = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            arr[i] = positions[i * 3 + 2];
        }
        return arr;
    }, [positions, count]);

    useFrame((_, delta) => {
        if (ref.current) {
            const positionsArray = ref.current.geometry.attributes.position.array as Float32Array;

            for (let i = 0; i < count; i++) {
                // Move stars towards camera (positive z)
                positionsArray[i * 3 + 2] += delta * speed;

                // Reset star to back when it passes camera
                if (positionsArray[i * 3 + 2] > depth / 2) {
                    positionsArray[i * 3 + 2] = -depth / 2;
                    // Randomize x,y slightly for variety
                    const angle = Math.random() * Math.PI * 2;
                    const r = Math.sqrt(Math.random()) * radius;
                    positionsArray[i * 3] = Math.cos(angle) * r;
                    positionsArray[i * 3 + 1] = Math.sin(angle) * r;
                }
            }

            ref.current.geometry.attributes.position.needsUpdate = true;
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

// Rotating ambient stars for depth
function AmbientStars({ count, radius, size, color, rotationSpeed }: {
    count: number;
    radius: number;
    size: number;
    color: string;
    rotationSpeed: number;
}) {
    const ref = useRef<THREE.Points>(null);
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = radius * Math.cbrt(Math.random());
            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        return pos;
    }, [count, radius]);

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta * rotationSpeed;
            ref.current.rotation.y += delta * rotationSpeed * 1.3;
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
                opacity={0.8}
            />
        </Points>
    );
}

// Mouse parallax effect
function CameraController() {
    const { camera } = useThree();
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const targetRotation = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize mouse position to -1 to 1
            setMouse({
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame(() => {
        // Smooth camera rotation based on mouse position
        targetRotation.current.x = mouse.y * 0.1;
        targetRotation.current.y = mouse.x * 0.15;

        camera.rotation.x += (targetRotation.current.x - camera.rotation.x) * 0.02;
        camera.rotation.y += (targetRotation.current.y - camera.rotation.y) * 0.02;
    });

    return null;
}

// Main 3D Scene with immersive space feel
function Scene() {
    return (
        <>
            {/* Ambient background color */}
            <color attach="background" args={['#050508']} />

            {/* Mouse parallax camera controller */}
            <CameraController />

            {/* Flying stars - reduced count for performance */}
            <FlyingStars count={300} speed={12} size={0.15} color="#ffffff" depth={80} radius={25} />
            <FlyingStars count={200} speed={20} size={0.2} color="#ffffff" depth={100} radius={30} />
            <FlyingStars count={150} speed={30} size={0.25} color="#e0e0ff" depth={120} radius={35} />
            <FlyingStars count={100} speed={45} size={0.35} color="#ffffff" depth={150} radius={40} />

            {/* Ambient rotating stars for background depth - reduced count */}
            <AmbientStars count={1200} radius={70} size={0.12} color="#ffffff" rotationSpeed={0.02} />
            <AmbientStars count={800} radius={55} size={0.15} color="#ffffff" rotationSpeed={0.03} />
            <AmbientStars count={500} radius={45} size={0.18} color="#e8e8ff" rotationSpeed={0.04} />

            {/* Some colored accent stars */}
            <AmbientStars count={500} radius={50} size={0.15} color="#c0b0ff" rotationSpeed={0.035} />

            {/* Bright foreground stars */}
            <AmbientStars count={300} radius={25} size={0.3} color="#ffffff" rotationSpeed={0.06} />

            {/* Bright foreground stars */}
            <AmbientStars count={200} radius={20} size={0.25} color="#ffffff" rotationSpeed={0.08} />
        </>
    );
}

// Main exported component
export default function Starfield3D() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 20], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{
                    antialias: false,
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
