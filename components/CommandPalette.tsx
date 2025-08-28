"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUIStore } from '../lib/store';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Guestbook', href: '#guestbook' },
  { label: 'Links', href: '#links' },
  { label: 'About', href: '#about' },
  { label: 'Book a Call', href: '#contact' },
];

export default function CommandPalette() {
  const { paletteOpen, closePalette, openPalette } = useUIStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isK = e.key.toLowerCase() === 'k';
      if ((e.ctrlKey || e.metaKey) && isK) {
        e.preventDefault();
        openPalette();
      }
      if (e.key === 'Escape') closePalette();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openPalette, closePalette]);

  useEffect(() => {
    if (paletteOpen) setTimeout(() => inputRef.current?.focus(), 0);
    else setQuery('');
  }, [paletteOpen]);

  const filtered = items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {paletteOpen && (
        <motion.div className="fixed inset-0 z-[60]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closePalette} />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -8 }}
            transition={{ type: 'spring', stiffness: 420, damping: 40, mass: 0.6 }}
            className="relative mx-auto mt-24 w-[90%] max-w-xl rounded-2xl border border-white/20 bg-white/10 text-white shadow-2xl backdrop-blur-xl"
          >
            <div className="p-3 border-b border-white/10">
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent outline-none placeholder-white/50 px-3 py-2"
              />
            </div>
            <motion.ul
              className="max-h-80 overflow-auto p-2"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
            >
              {filtered.map((i) => (
                <motion.li
                  key={i.label}
                  variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                  className="rounded-lg px-3 py-2 cursor-pointer"
                  onClick={() => {
                    window.location.href = i.href;
                    closePalette();
                  }}
                >
                  {i.label}
                </motion.li>
              ))}
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-white/60">No results</li>
              )}
            </motion.ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
