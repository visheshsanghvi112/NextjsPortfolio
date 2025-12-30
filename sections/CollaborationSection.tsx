"use client";
import { motion } from 'framer-motion';
import { CollaborationBento } from '../components/CollaborationBento';
import { BackgroundBeams, SparklesCore } from '@/components/ui/background-effects';

export default function CollaborationSection() {
  return (
    <section className="min-h-screen text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden bg-black">
      {/* Premium dark background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />

      {/* Aceternity-style background beams */}
      <BackgroundBeams className="opacity-40" />

      {/* Sparkles overlay */}
      <SparklesCore
        className="opacity-30"
        particleCount={40}
        particleColor="rgba(139, 92, 246, 0.5)"
      />

      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-60 right-20 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, 25, 0],
            x: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/3 w-56 h-56 bg-pink-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, -35, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-5 py-2.5 mb-8"
          >
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-gray-300 font-medium tracking-wide">Available for new projects</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Let's Build Something
            </span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </motion.h2>

          {/* Subtitle with highlighted text */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 px-2"
          >
            I believe in creating{' '}
            <span className="text-purple-400 font-medium">meaningful partnerships</span>{' '}
            through transparent communication, cutting-edge technology, and seamless collaboration{' '}
            <span className="text-cyan-400 font-medium">across any time zone</span>.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 px-2"
          >
            {[
              { icon: "💬", text: "Open Communication", color: "from-blue-500/20 to-blue-600/10" },
              { icon: "🔄", text: "Regular Updates", color: "from-purple-500/20 to-purple-600/10" },
              { icon: "🤝", text: "Collaborative", color: "from-pink-500/20 to-pink-600/10" },
              { icon: "⚡", text: "Fast Delivery", color: "from-cyan-500/20 to-cyan-600/10" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
                className={`flex items-center gap-2 bg-gradient-to-r ${benefit.color} backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 cursor-default`}
              >
                <span className="text-base">{benefit.icon}</span>
                <span className="text-sm text-gray-300 font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <CollaborationBento />
        </motion.div>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="relative max-w-2xl mx-auto">
            {/* Glow effect behind CTA */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 blur-2xl rounded-3xl" />

            <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-900/90 to-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-purple-500/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-cyan-500/30 rounded-br-2xl" />

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Ready to get started?
              </h3>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Let's schedule a free consultation to discuss your project and explore how we can create something extraordinary together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:visheshsanghvi112@gmail.com"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
                >
                  <span className="relative z-10">Start a conversation</span>
                  <motion.span
                    className="relative z-10"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>

                <motion.a
                  href="/book"
                  whileHover={{ scale: 1.05, borderColor: "rgba(139, 92, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-700 hover:bg-white/5 text-gray-300 hover:text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Book a call
                  <span>📅</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}