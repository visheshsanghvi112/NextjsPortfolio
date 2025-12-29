"use client";
import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';
import { useEffect, useState, useMemo } from 'react';
import { useContactModal } from '../contexts/ContactModalContext';
import dynamic from 'next/dynamic';

// Dynamically import 3D starfield to prevent SSR issues
const Starfield3D = dynamic(() => import('../components/Starfield3D'), {
  ssr: false,
  loading: () => null, // Don't show loading state, CSS fallback is there
});

// Star field component for the cosmic background with colored stars
function StarField({ count = 100 }: { count?: number }) {
  const starColors = [
    { bg: 'bg-white', shadow: 'rgba(255, 255, 255, 0.6)' },      // White
    { bg: 'bg-white', shadow: 'rgba(255, 255, 255, 0.6)' },      // White (more common)
    { bg: 'bg-purple-300', shadow: 'rgba(168, 85, 247, 0.6)' },  // Purple
    { bg: 'bg-pink-300', shadow: 'rgba(255, 110, 199, 0.5)' },   // Pink
    { bg: 'bg-violet-300', shadow: 'rgba(139, 92, 246, 0.5)' },  // Violet
    { bg: 'bg-cyan-200', shadow: 'rgba(165, 243, 252, 0.4)' },   // Cyan accent
  ];

  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const colorIndex = Math.floor(Math.random() * starColors.length);
      return {
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.6 + 0.3,
        twinkleDelay: Math.random() * 5,
        twinkleDuration: Math.random() * 3 + 2,
        color: starColors[colorIndex],
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`absolute rounded-full ${star.color.bg}`}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            boxShadow: star.size > 2 ? `0 0 ${star.size * 2}px ${star.color.shadow}` : 'none',
          }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.twinkleDuration,
            repeat: Infinity,
            delay: star.twinkleDelay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Starfield Background - renders on client only */}
      {mounted && <Starfield3D />}

      {/* CSS Fallback Background - visible while 3D loads */}
      <div className="absolute inset-0" style={{ background: '#0a0a12' }}>
        {/* Base cosmic gradient matching your portfolio */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 120% 80% at 50% 100%, rgba(26, 26, 46, 0.9) 0%, transparent 60%),
              radial-gradient(ellipse 80% 60% at 50% 0%, rgba(35, 35, 91, 0.6) 0%, transparent 50%),
              linear-gradient(180deg, #0a0a12 0%, #12121f 40%, #1a1a2e 100%)
            `
          }}
        />

        {/* Purple nebula glow - left side */}
        <div
          className="absolute top-1/4 left-0 w-1/2 h-1/2"
          style={{
            background: 'radial-gradient(ellipse 80% 80% at 20% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Pink/magenta nebula glow - right side */}
        <div
          className="absolute top-1/3 right-0 w-1/2 h-1/2"
          style={{
            background: 'radial-gradient(ellipse 80% 80% at 80% 40%, rgba(255, 110, 199, 0.06) 0%, transparent 60%)',
            filter: 'blur(50px)',
          }}
        />

        {/* Subtle orange accent glow */}
        <div
          className="absolute bottom-1/4 left-1/3 w-1/3 h-1/3"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(255, 140, 66, 0.04) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Top atmospheric glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2"
          style={{
            background: 'radial-gradient(ellipse 100% 50% at 50% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)'
          }}
        />
      </div>

      {/* Star Field - Only render after mount */}
      {mounted && <StarField count={120} />}

      {/* Shooting Stars - More visible and frequent */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { delay: 0, startX: 15, startY: 5, angle: 35 },
            { delay: 2, startX: 45, startY: 8, angle: 40 },
            { delay: 4, startX: 75, startY: 3, angle: 30 },
            { delay: 6, startX: 30, startY: 12, angle: 38 },
            { delay: 8, startX: 60, startY: 6, angle: 42 },
            { delay: 10, startX: 85, startY: 10, angle: 32 },
          ].map((meteor, i) => (
            <motion.div
              key={`meteor-${i}`}
              className="absolute"
              style={{
                left: `${meteor.startX}%`,
                top: `${meteor.startY}%`,
              }}
              animate={{
                x: [0, 300],
                y: [0, 150],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: meteor.delay,
                repeatDelay: 4,
                ease: "easeIn"
              }}
            >
              <div
                className="w-1.5 h-1.5 bg-white rounded-full"
                style={{
                  boxShadow: `
                    0 0 8px 3px rgba(255, 255, 255, 0.8),
                    -30px 0 20px 3px rgba(255, 255, 255, 0.5),
                    -60px 0 35px 2px rgba(255, 255, 255, 0.3),
                    -100px 0 50px 1px rgba(255, 255, 255, 0.15)
                  `
                }}
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Planet Horizon with Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none overflow-hidden">
        {/* Main planet body - curved horizon */}
        <div
          className="relative w-full"
          style={{
            height: '500px',
          }}
        >
          {/* Outer atmospheric glow - purple tinted */}
          <div
            className="absolute bottom-0 left-1/2 w-[200%]"
            style={{
              height: '400px',
              background: 'radial-gradient(ellipse 50% 100% at 50% 100%, rgba(139, 92, 246, 0.12) 0%, rgba(168, 85, 247, 0.05) 40%, transparent 70%)',
              transform: 'translateX(-50%)',
            }}
          />

          {/* Bright rim light - purple/pink gradient glow */}
          <div
            className="absolute bottom-0 left-1/2"
            style={{
              width: '200vw',
              height: '600px',
              borderRadius: '50% 50% 0 0',
              background: 'linear-gradient(to top, #1a1a2e 0%, rgba(26, 26, 46, 0.98) 85%, transparent 100%)',
              boxShadow: `
                0 -4px 120px 15px rgba(139, 92, 246, 0.15),
                0 -3px 80px 8px rgba(168, 85, 247, 0.12),
                0 -2px 40px 4px rgba(255, 110, 199, 0.1),
                0 -1px 10px 2px rgba(255, 255, 255, 0.3),
                inset 0 3px 40px 0 rgba(139, 92, 246, 0.05)
              `,
              transform: 'translateX(-50%) translateY(75%)',
            }}
          />

          {/* Inner glow accent line - purple/pink gradient */}
          <motion.div
            className="absolute bottom-0 left-1/2 w-full"
            style={{
              height: '3px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 110, 199, 0.3) 15%, rgba(168, 85, 247, 0.6) 35%, rgba(255, 255, 255, 0.7) 50%, rgba(168, 85, 247, 0.6) 65%, rgba(255, 110, 199, 0.3) 85%, transparent 100%)',
              filter: 'blur(1px)',
              transform: 'translateX(-50%) translateY(-140px)',
            }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      {/* Subtle ambient particles floating up - colored */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => {
            const particles = [
              { left: 15, bottom: 20, delay: 0, duration: 12, color: 'bg-purple-400/30' },
              { left: 30, bottom: 10, delay: 2, duration: 14, color: 'bg-pink-400/25' },
              { left: 50, bottom: 15, delay: 4, duration: 10, color: 'bg-white/20' },
              { left: 65, bottom: 25, delay: 1, duration: 13, color: 'bg-violet-400/30' },
              { left: 80, bottom: 5, delay: 3, duration: 11, color: 'bg-pink-300/25' },
              { left: 25, bottom: 30, delay: 5, duration: 15, color: 'bg-purple-300/30' },
              { left: 70, bottom: 20, delay: 6, duration: 12, color: 'bg-white/25' },
              { left: 45, bottom: 8, delay: 7, duration: 14, color: 'bg-violet-300/25' },
            ];
            const particle = particles[i];
            return (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 ${particle.color} rounded-full`}
                style={{
                  left: `${particle.left}%`,
                  bottom: `${particle.bottom}%`,
                }}
                animate={{
                  y: [0, -200, -400],
                  opacity: [0, 0.5, 0],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "linear"
                }}
              />
            );
          })}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 md:px-8 pt-16 md:pt-20">
        {/* Status notification banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-white/80">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs md:text-sm font-medium">Available for new projects</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
            <span className="block text-white mb-2">
              I help founders turn ideas
            </span>
            <span className="block italic font-light bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              into seamless digital experiences
            </span>
          </h1>

          {/* Profile Info */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 md:mb-12 text-gray-300">
            <span className="text-base md:text-lg">Hello, I'm</span>
            <span className="text-base md:text-lg font-semibold text-white">Vishesh Sanghvi</span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
              <img
                src="/pp.jpg"
                alt="Vishesh Sanghvi"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-base md:text-lg text-gray-400">a Full Stack Developer</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 hover:bg-white/20 hover:border-white/30"
            >
              <span>Let's Connect</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.button>

            <motion.a
              href="mailto:visheshsanghvi112@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm md:text-base"
            >
              <HiMail className="w-5 h-5" />
              <span>hello@visheshsanghvi112@gmail.com</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
