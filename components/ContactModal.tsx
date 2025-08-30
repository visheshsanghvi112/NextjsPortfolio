"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiX, 
  HiMail, 
  HiCalendar,
  HiExternalLink 
} from 'react-icons/hi';
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaTwitter 
} from 'react-icons/fa';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100vh" }}
            transition={{ 
              type: "spring", 
              duration: 0.5, 
              bounce: 0.2,
              damping: 25,
              stiffness: 300
            }}
            className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-4"
          >
            <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden w-full max-w-lg">
              {/* Header */}
              <div className="relative p-8 pb-6">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-700/50 transition-colors"
                >
                  <HiX className="w-5 h-5 text-gray-400" />
                </button>
                
                <div className="text-center">
                  <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    Let's Connect
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400"
                  >
                    Choose your preferred way to reach out
                  </motion.p>
                </div>

                {/* Social Links */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-center gap-4 mt-6"
                >
                  <motion.a
                    href="https://linkedin.com/in/visheshsanghvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-[#0077B5]/20 border border-[#0077B5]/30 flex items-center justify-center text-[#0077B5] hover:bg-[#0077B5]/30 transition-all"
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/visheshsanghvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-gray-700/50 border border-gray-600 flex items-center justify-center text-white hover:bg-gray-600/50 transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/visheshsanghvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-[#1DA1F2]/20 border border-[#1DA1F2]/30 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2]/30 transition-all"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Quick Connect Tabs */}
              <div className="px-8 pb-6">
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="px-4 py-2 bg-white/10 border border-gray-600 rounded-xl text-white font-medium hover:bg-white/15 transition-all"
                  >
                    Quick connect
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => {
                      onClose();
                      const element = document.getElementById('contact');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 border border-gray-600 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                  >
                    Fill a form
                  </motion.button>
                </div>

                {/* Contact Options */}
                <div className="space-y-4 mb-6">
                  {/* Email Card */}
                  <motion.a
                    href="mailto:visheshsanghvi112@gmail.com"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group block p-5 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <HiMail className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-white text-lg">Email</h3>
                          <HiExternalLink className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>
                        <p className="font-medium text-white text-sm break-all mb-1">visheshsanghvi112@gmail.com</p>
                        <p className="text-sm text-gray-400">Send me an email directly</p>
                      </div>
                    </div>
                  </motion.a>

                  {/* Calendar Card */}
                  <motion.button
                    onClick={() => {
                      onClose();
                      window.location.href = '/book';
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group block w-full p-5 bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all text-left"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <HiCalendar className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-white text-lg">Book a Call</h3>
                          <HiExternalLink className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>
                        <p className="font-medium text-white text-sm mb-1">Schedule a time slot</p>
                        <p className="text-sm text-gray-400">Book a call on my calendar</p>
                      </div>
                    </div>
                  </motion.button>
                </div>

                {/* Availability Status */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center justify-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-xl"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                  <span className="text-green-400 font-medium text-sm text-center">Currently available for new opportunities</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}