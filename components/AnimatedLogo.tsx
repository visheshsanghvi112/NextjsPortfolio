"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedLogoProps {
  size?: number;
  className?: string;
}

export default function AnimatedLogo({ size = 60, className = "" }: AnimatedLogoProps) {
  const logoRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logoRef.current || !containerRef.current) return;

    const logo = logoRef.current;
    const container = containerRef.current;
    
    // Set initial states
    gsap.set([".letter-v", ".letter-s"], { 
      opacity: 0, 
      scale: 0,
      rotation: -180,
      transformOrigin: "center center"
    });
    
    gsap.set(".glow-ring", { 
      opacity: 0, 
      scale: 0.5,
      rotation: 0
    });
    
    gsap.set(".particles", { 
      opacity: 0, 
      scale: 0,
      y: 20
    });

    // Create master timeline
    const tl = gsap.timeline({ 
      repeat: -1, 
      repeatDelay: 3,
      ease: "power2.inOut"
    });

    // Initial entrance animation
    tl.to(".glow-ring", {
      opacity: 1,
      scale: 1,
      rotation: 360,
      duration: 1.5,
      ease: "back.out(1.7)"
    })
    .to(".letter-v", {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.8")
    .to(".letter-s", {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.6")
    .to(".particles", {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.4")
    
    // Continuous animations
    .to(".glow-ring", {
      rotation: "+=360",
      duration: 4,
      ease: "none"
    }, "-=0.5")
    .to(".letter-v", {
      y: -5,
      duration: 1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    }, "-=3")
    .to(".letter-s", {
      y: 5,
      duration: 1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    }, "-=3")
    .to(".particles", {
      rotation: 360,
      scale: 1.2,
      duration: 2,
      stagger: 0.2,
      ease: "power2.inOut"
    }, "-=2");

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(container, {
        scale: 1.1,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
      
      gsap.to(".glow-ring", {
        scale: 1.2,
        opacity: 0.8,
        duration: 0.3
      });
      
      gsap.to([".letter-v", ".letter-s"], {
        scale: 1.1,
        duration: 0.3,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(container, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(".glow-ring", {
        scale: 1,
        opacity: 1,
        duration: 0.3
      });
      
      gsap.to([".letter-v", ".letter-s"], {
        scale: 1,
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.out"
      });
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative cursor-pointer ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        ref={logoRef}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="overflow-visible"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#ec4899" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </radialGradient>

          {/* Filters */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feOffset dx="0" dy="2"/>
            <feGaussianBlur stdDeviation="2" result="offset-blur"/>
            <feFlood floodColor="#000000" floodOpacity="0.3"/>
            <feComposite in2="offset-blur" operator="in"/>
            <feMerge> 
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background glow ring */}
        <circle
          className="glow-ring"
          cx="50"
          cy="50"
          r="45"
          fill="url(#glowGradient)"
          opacity="0.6"
        />

        {/* Outer ring */}
        <circle
          className="glow-ring"
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="url(#primaryGradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
          filter="url(#glow)"
        />

        {/* Main container circle */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="rgba(0,0,0,0.8)"
          stroke="url(#primaryGradient)"
          strokeWidth="1"
          filter="url(#innerShadow)"
        />

        {/* Letter V */}
        <g className="letter-v" transform="translate(35, 30)">
          <path
            d="M 0 0 L 8 20 L 16 0"
            fill="none"
            stroke="url(#primaryGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
          />
          <path
            d="M 2 2 L 8 16 L 14 2"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
        </g>

        {/* Letter S */}
        <g className="letter-s" transform="translate(45, 30)">
          <path
            d="M 12 2 Q 2 2 2 8 Q 2 12 8 12 Q 18 12 18 18 Q 18 24 8 24"
            fill="none"
            stroke="url(#primaryGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#glow)"
          />
          <path
            d="M 12 4 Q 4 4 4 8 Q 4 10 8 10 Q 16 10 16 18 Q 16 22 8 22"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>

        {/* Floating particles */}
        <circle className="particles" cx="20" cy="25" r="1.5" fill="url(#primaryGradient)" opacity="0.8" />
        <circle className="particles" cx="80" cy="30" r="1" fill="url(#primaryGradient)" opacity="0.6" />
        <circle className="particles" cx="25" cy="75" r="1.2" fill="url(#primaryGradient)" opacity="0.7" />
        <circle className="particles" cx="75" cy="70" r="0.8" fill="url(#primaryGradient)" opacity="0.9" />
        <circle className="particles" cx="15" cy="50" r="1" fill="url(#primaryGradient)" opacity="0.5" />
        <circle className="particles" cx="85" cy="55" r="1.3" fill="url(#primaryGradient)" opacity="0.8" />

        {/* Center dot */}
        <circle
          cx="50"
          cy="50"
          r="2"
          fill="url(#primaryGradient)"
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
}