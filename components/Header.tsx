"use client";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  
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
        <div className="flex items-center justify-center md:justify-center relative">
          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/60 border border-gray-700/60 text-white px-3 py-2 rounded-full text-sm"
          >
            Menu
          </button>

          <nav className="hidden md:inline-flex bg-gray-800/50 backdrop-blur rounded-full px-6 py-3 items-center gap-6 text-sm border border-gray-700/50">
            <Link 
              href="/" 
              className={`relative transition px-3 py-2 rounded-full ${
                pathname === '/' 
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
              className={`relative transition px-3 py-2 rounded-full ${
                pathname.startsWith('/projects') 
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
              onClick={() => handleScrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 shadow-lg"
            >
              Book a Call
            </button>
          </nav>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden mt-3"
            >
              <div className="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-2xl p-3 space-y-2">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-xl ${pathname === '/' ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5'}`}
                >
                  Home
                </Link>
                <button
                  onClick={() => { setOpen(false); handleScrollToSection('about'); }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-gray-300 hover:bg-white/5"
                >
                  About
                </button>
                <Link
                  href="/projects"
                  onClick={() => setOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-xl ${pathname.startsWith('/projects') ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5'}`}
                >
                  Projects
                </Link>
                <button
                  onClick={() => { setOpen(false); handleScrollToSection('contact'); }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-gray-300 hover:bg-white/5"
                >
                  Contact
                </button>
                <button
                  onClick={() => { setOpen(false); handleScrollToSection('contact'); }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-xl font-medium"
                >
                  Book a Call
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
