"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiArrowUp, HiChatAlt2, HiDownload } from 'react-icons/hi';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadResume = () => {
    // This would normally download a real resume
    const link = document.createElement('a');
    link.href = '/resume-vishesh-sanghvi.pdf';
    link.download = 'Vishesh_Sanghvi_Resume.pdf';
    link.click();
  };

  return (
    <div className="fixed bottom-6 sm:bottom-8 right-4 sm:right-8 z-50 flex flex-col gap-3 sm:gap-4 pointer-events-none">
      {/* Chat/Contact Button */}
      <motion.button
        className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
  title="Let&apos;s Chat"
      >
        <HiChatAlt2 className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
        <div className="hidden sm:block absolute -left-20 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Let&apos;s Chat
        </div>
      </motion.button>

      {/* Download Resume Button */}
      <motion.button
        className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={downloadResume}
        title="Download Resume"
      >
        <HiDownload className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
        <div className="hidden sm:block absolute -left-24 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Download CV
        </div>
      </motion.button>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group border border-gray-600"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            title="Back to Top"
          >
            <HiArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
            <div className="hidden sm:block absolute -left-20 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Back to top
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating particles effect */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            animate={{
              y: [-20, -40, -20],
              x: [0, 10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 20}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
