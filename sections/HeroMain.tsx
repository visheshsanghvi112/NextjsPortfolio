"use client";
import { motion } from 'framer-motion';
import { HiSparkles, HiMail } from 'react-icons/hi';

export default function Hero() {
  return (
  <section id="home" className="min-h-[90vh] md:min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24">
      {/* Static Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

  <div className="relative z-10 text-center max-w-5xl mx-auto px-4 md:px-6">
        {/* Blue notification banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur border border-blue-500/30 rounded-full px-4 py-2 text-blue-300">
            <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">New</span>
            <HiSparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm">Next Ventures is live!</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight">
            <span className="block text-white">
              I help founders turn ideas
            </span>
            <span className="block">
              into seamless <span className="italic font-serif bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">digital experiences</span>
            </span>
          </h1>

          <div className="text-gray-400 text-base md:text-lg mb-10 md:mb-12 tracking-wide flex items-center justify-center gap-3">
            <span>Hello, I'm Vishesh Sanghvi</span>
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
              <img 
                src="/pp.jpg" 
                alt="Vishesh Sanghvi" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span>a Full Stack Developer</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#ff6ec7] via-[#a855f7] to-[#ff8c42] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2"
            >
              Let's Connect
              <span className="text-xl">→</span>
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-600 text-white px-6 py-3 rounded-xl font-medium text-lg hover:border-gray-400 hover:bg-gray-800/50 transition-all flex items-center gap-2"
            >
              <HiMail className="w-5 h-5 text-gray-400" />
              hello@visheshsanghvi.in
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
