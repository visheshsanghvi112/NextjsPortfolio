"use client";
import { motion } from 'framer-motion';

type CardProps = React.ComponentProps<typeof motion.div> & {
  className?: string;
};

export default function Card({ children, className = '', ...props }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: '0 0 24px #a78bfa' }}
      className={`rounded-2xl p-8 bg-white/10 dark:bg-black/20 shadow-lg hover:shadow-2xl transition ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
