"use client";
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

type GlassButtonProps = React.ComponentProps<typeof motion.button> & {
  children: React.ReactNode;
};

export default function GlassButton({ children, ...props }: GlassButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 bg-purple-600/80 hover:bg-purple-600 text-white rounded-full shadow-lg flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20"
      {...props}
    >
  {children}
  <ArrowRightIcon className="w-5 h-5" />
    </motion.button>
  );
}
