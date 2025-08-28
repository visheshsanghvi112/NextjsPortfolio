"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 backdrop-blur border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-[#ff6ec7] via-[#a855f7] to-[#ff8c42] bg-clip-text text-transparent mb-4"
            >
              Vishesh Sanghvi
            </motion.div>
            <p className="text-gray-300 mb-4 max-w-md">
              Full-stack developer passionate about creating exceptional digital experiences 
              with modern web technologies.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/visheshsanghvi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center hover:border-gray-500 transition-all group"
              >
                <FaGithub className="text-lg text-white group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/visheshsanghvi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-[#0077B5]/10 border border-[#0077B5]/30 rounded-full flex items-center justify-center hover:bg-[#0077B5]/20 transition-all group"
              >
                <FaLinkedinIn className="text-lg text-[#0077B5] group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a
                href="https://twitter.com/visheshsanghvi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-[#1DA1F2]/10 border border-[#1DA1F2]/30 rounded-full flex items-center justify-center hover:bg-[#1DA1F2]/20 transition-all group"
              >
                <FaTwitter className="text-lg text-[#1DA1F2] group-hover:scale-110 transition-transform" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
      <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
        <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
        <li><Link href="/#about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
        <li><Link href="/#projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
        <li><Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Web Development</span></li>
              <li><span className="text-gray-300">Mobile Apps</span></li>
              <li><span className="text-gray-300">UI/UX Design</span></li>
              <li><span className="text-gray-300">Consulting</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Vishesh Sanghvi. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
