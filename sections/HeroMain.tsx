"use client";
import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { useContactModal } from '../contexts/ContactModalContext';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      {/* Live Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Optimized animated gradient orbs with will-change */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl will-change-transform"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Secondary moving orb - reduced complexity */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl will-change-transform"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Third floating orb - simplified */}
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-40 h-40 md:w-60 md:h-60 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl will-change-transform"
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Reduced Floating Particles - Only render after mount */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 6 }, (_, i) => {
            const particles = [
              { left: 10, top: 20, delay: 0, duration: 8 },
              { left: 85, top: 15, delay: 2, duration: 10 },
              { left: 25, top: 70, delay: 4, duration: 7 },
              { left: 70, top: 80, delay: 1, duration: 9 },
              { left: 45, top: 30, delay: 3, duration: 6 },
              { left: 90, top: 60, delay: 5, duration: 8 },
            ];
            const particle = particles[i];
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/15 rounded-full will-change-transform"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [0, -80, 0],
                  opacity: [0, 0.8, 0],
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

      {/* Optimized Animated Grid Lines */}
      <div className="absolute inset-0 opacity-3">
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Optimized Floating Design Elements */}
      <div className="hidden lg:block absolute top-10 right-10 opacity-15">
        <motion.div
          className="w-24 h-24 border border-purple-500/20 rounded-full will-change-transform"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="hidden lg:block absolute bottom-20 left-10 opacity-10">
        <motion.div
          className="w-20 h-20 border border-blue-500/20 rounded-full will-change-transform"
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Optimized Shooting Stars Effect - Only render after mount */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 2 }, (_, i) => {
            const stars = [
              { left: 20, top: 15, delay: 5 },
              { left: 70, top: 25, delay: 15 },
            ];
            const star = stars[i];
            return (
              <motion.div
                key={`star-${i}`}
                className="absolute w-px h-px bg-white/60 rounded-full will-change-transform"
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                }}
                animate={{
                  x: [0, 150],
                  y: [0, 75],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: star.delay,
                  ease: "linear"
                }}
              />
            );
          })}
        </div>
      )}

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 md:px-8">


        {/* Status notification banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur border border-green-500/30 rounded-full px-3 py-2 md:px-4 md:py-2 text-green-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs md:text-sm">Available for new projects</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-12 leading-tight px-2">
            <span className="block text-white mb-1 sm:mb-2">
              Building
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Digital Magic
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            Full-stack developer crafting exceptional web experiences with modern technologies.
            From concept to deployment, I bring ideas to life.
          </p>

          {/* Profile Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 md:mb-12">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
              <img
                src="/pp.jpg"
                alt="Vishesh Sanghvi"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-lg md:text-xl font-semibold text-white">Vishesh Sanghvi</h2>
              <p className="text-sm md:text-base text-gray-400">Full Stack Developer</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-4">
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/25 min-h-[48px]"
            >
              Let's Work Together
              <span className="text-base sm:text-lg md:text-xl">→</span>
            </motion.button>

            <motion.a
              href="mailto:visheshsanghvi112@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-4 sm:px-4 md:px-6 py-3 sm:py-3 md:py-4 rounded-full font-medium text-sm sm:text-base md:text-lg transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gray-800/30 min-h-[48px]"
            >
              <HiMail className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">visheshsanghvi112@gmail.com</span>
              <span className="sm:hidden">Email Me</span>
            </motion.a>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
