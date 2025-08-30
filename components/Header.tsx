"use client";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useContactModal } from '../contexts/ContactModalContext';
import { 
  HiHome, 
  HiUser, 
  HiCollection, 
  HiMail, 
  HiPhone,
  HiSearch,
  HiX
} from 'react-icons/hi';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { openModal } = useContactModal();

  const handleScrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/#${sectionId}`;
    } else {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-8">
        <div className="flex items-center justify-between md:justify-center relative">


          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <nav className="hidden md:inline-flex bg-gray-800/50 backdrop-blur rounded-full px-6 py-3 items-center gap-6 text-sm border border-gray-700/50">
            <Link
              href="/"
              className={`relative transition px-3 py-2 rounded-full ${pathname === '/'
                ? 'text-white bg-white/10'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              Home
            </Link>
            <button
              onClick={() => handleScrollToSection('about')}
              className="text-gray-400 hover:text-white hover:bg-white/5 transition px-3 py-2 rounded-full"
            >
              About
            </button>
            <Link
              href="/projects"
              className={`relative transition px-3 py-2 rounded-full ${pathname.startsWith('/projects')
                ? 'text-white bg-white/10'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              Projects
            </Link>
            <button
              onClick={() => handleScrollToSection('contact')}
              className="text-gray-400 hover:text-white hover:bg-white/5 transition px-3 py-2 rounded-full"
            >
              Contact
            </button>
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 shadow-lg"
            >
              Book a Call
            </button>
          </nav>
        </div>

        {/* Command Palette Style Mobile Menu */}
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setOpen(false)}
              />
              
              {/* Command Palette */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="fixed top-20 left-4 right-4 z-50 md:hidden"
              >
                <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Search Header */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-700/50">
                    <HiSearch className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400 text-sm flex-1">Navigation</span>
                    <button
                      onClick={() => setOpen(false)}
                      className="p-1 rounded-lg hover:bg-gray-700/50 transition-colors"
                    >
                      <HiX className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

                  {/* Navigation Items */}
                  <div className="p-2">
                    {/* Home */}
                    <motion.div
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group ${
                          pathname === '/' 
                            ? 'bg-white/10 text-white' 
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          pathname === '/' 
                            ? 'bg-blue-500/20 text-blue-400' 
                            : 'bg-gray-700/50 text-gray-400 group-hover:bg-blue-500/20 group-hover:text-blue-400'
                        } transition-all`}>
                          <HiHome className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">Home</div>
                          <div className="text-xs text-gray-500">Welcome to my portfolio</div>
                        </div>
                        {pathname === '/' && (
                          <div className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-md">
                            Current
                          </div>
                        )}
                      </Link>
                    </motion.div>

                    {/* About */}
                    <motion.div
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() => { setOpen(false); handleScrollToSection('about'); }}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl transition-all group w-full text-left text-gray-300 hover:text-white"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gray-700/50 text-gray-400 group-hover:bg-purple-500/20 group-hover:text-purple-400 flex items-center justify-center transition-all">
                          <HiUser className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">About</div>
                          <div className="text-xs text-gray-500">Learn more about me</div>
                        </div>
                      </button>
                    </motion.div>

                    {/* Projects */}
                    <motion.div
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/projects"
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group ${
                          pathname.startsWith('/projects') 
                            ? 'bg-white/10 text-white' 
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          pathname.startsWith('/projects') 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-gray-700/50 text-gray-400 group-hover:bg-green-500/20 group-hover:text-green-400'
                        } transition-all`}>
                          <HiCollection className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">Projects</div>
                          <div className="text-xs text-gray-500">Showcase of my work</div>
                        </div>
                        {pathname.startsWith('/projects') && (
                          <div className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-md">
                            Current
                          </div>
                        )}
                      </Link>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() => { setOpen(false); handleScrollToSection('contact'); }}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl transition-all group w-full text-left text-gray-300 hover:text-white"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gray-700/50 text-gray-400 group-hover:bg-orange-500/20 group-hover:text-orange-400 flex items-center justify-center transition-all">
                          <HiMail className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">Contact</div>
                          <div className="text-xs text-gray-500">Get in touch with me</div>
                        </div>
                      </button>
                    </motion.div>

                    {/* Divider */}
                    <div className="my-2 border-t border-gray-700/50" />

                    {/* Book a Call - Special CTA */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() => { setOpen(false); openModal(); }}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl w-full text-left bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-white hover:from-purple-600/30 hover:to-pink-600/30 transition-all group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center">
                          <HiPhone className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">Book a Call</div>
                          <div className="text-xs text-purple-200">Let's discuss your project</div>
                        </div>
                        <div className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-md font-medium">
                          Free
                        </div>
                      </button>
                    </motion.div>
                  </div>

                  {/* Footer */}
                  <div className="px-4 py-3 border-t border-gray-700/50 bg-gray-800/30">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Navigate</span>
                      <div className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 bg-gray-700/50 rounded text-xs">ESC</kbd>
                        <span>to close</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
