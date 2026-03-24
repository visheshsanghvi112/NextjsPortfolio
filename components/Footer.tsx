"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Rocket } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="w-full py-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        {/* Name / Brand */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tighter text-white">
            VISHESH SANGHVI
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
        </div>

        {/* Global Copyright */}
        <div className="text-[10px] items-center gap-2 text-gray-500 font-bold uppercase tracking-[0.2em] flex">
          <span>© {currentYear} ALL RIGHTS RESERVED</span>
        </div>

        {/* Professional Social Connections */}
        <div className="flex items-center gap-8">
          <a href="https://github.com/visheshsanghvi" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-all transform hover:-translate-y-1">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/visheshsanghvi" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#0077b5] transition-all transform hover:-translate-y-1">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/visheshsanghvi" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#1da1f2] transition-all transform hover:-translate-y-1">
            <FaTwitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
