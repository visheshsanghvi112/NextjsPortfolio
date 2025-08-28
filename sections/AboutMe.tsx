"use client";
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaTwitter, FaArrowRight } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-gray-400 text-sm uppercase tracking-wider mb-4">
              KNOW ABOUT ME
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="text-white">Full-Stack Developer and</span>
              <br />
              <span className="text-white">a little bit of </span>
              <span className="italic bg-gradient-to-r from-[#ff6ec7] via-[#a855f7] to-[#ff8c42] bg-clip-text text-transparent font-serif">
                everything
              </span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-8">
              <p>
                I'm <span className="font-semibold text-white">Vishesh Sanghvi</span>, a proactive full-stack developer passionate 
                about creating dynamic web experiences. From frontend to 
                backend, I thrive on solving complex problems with clean, 
                efficient code. My expertise spans React, Next.js, and Node.js, 
                and I'm always eager to learn more.
              </p>

              <p>
                When I'm not immersed in work, I'm exploring new ideas and 
                staying curious. Life's about balance, and I love embracing 
                every part of it.
              </p>

              <p className="font-medium text-white">
                I believe in waking up each day eager to make a difference!
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mb-8">
              <motion.a
                href="https://linkedin.com/in/visheshsanghvi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 bg-[#0077B5]/10 border border-[#0077B5]/30 rounded-lg flex items-center justify-center hover:bg-[#0077B5]/20 transition-all group"
              >
                <FaLinkedinIn className="text-[#0077B5] text-lg group-hover:scale-110 transition-transform" />
              </motion.a>
              
              <motion.a
                href="https://github.com/visheshsanghvi112"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all group"
              >
                <FaGithub className="text-white text-lg group-hover:scale-110 transition-transform" />
              </motion.a>
              
              <motion.a
                href="https://twitter.com/alexlegend786"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 bg-[#1DA1F2]/10 border border-[#1DA1F2]/30 rounded-lg flex items-center justify-center hover:bg-[#1DA1F2]/20 transition-all group"
              >
                <FaTwitter className="text-[#1DA1F2] text-lg group-hover:scale-110 transition-transform" />
              </motion.a>
            </div>

            {/* Work Experience Button */}
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 text-white font-medium text-lg hover:text-gray-300 transition-all group"
            >
              <span>Work Experience</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="group-hover:translate-x-2 transition-transform"
              >
                <FaArrowRight className="text-lg" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Blue gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-3xl transform rotate-6"></div>
              
              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: -2 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-3xl overflow-hidden p-2 transform -rotate-2"
              >
                <img
                  src="/pp.jpg"
                  alt="Vishesh Sanghvi"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
