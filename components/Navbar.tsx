"use client";
import { motion } from 'framer-motion';

const links = [
  { name: 'Home', href: '/', active: true },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'More', href: '#more' },
  { name: 'Book a Call', href: '#contact' },
];

import { useUIStore } from '../lib/store';

export default function Navbar() {
  const { openPalette } = useUIStore();
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 420, damping: 40, mass: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-2 flex gap-6 items-center shadow-lg"
    >
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`relative px-3 py-1 text-white/80 font-medium transition hover:text-purple-300 ${link.active ? 'text-purple-300' : ''}`}
        >
          {link.name}
          {link.active && (
            <motion.span layoutId="activeLink" className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-purple-400" />
          )}
        </a>
      ))}
      <button onClick={openPalette} className="ml-2 rounded-full px-3 py-1 text-sm bg-white/10 hover:bg-white/20 border border-white/20">⌘K</button>
    </motion.nav>
  );
}
