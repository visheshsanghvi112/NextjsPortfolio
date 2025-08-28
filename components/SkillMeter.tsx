"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SkillMeterProps {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

export default function SkillMeter({ name, level, icon, color }: SkillMeterProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(level);
    }, 500);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg`}>
          {icon}
        </div>
        <span className="font-medium text-gray-300">{name}</span>
        <span className="ml-auto text-sm text-gray-400 font-mono">{level}%</span>
      </div>
      
      <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/50">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className={`h-full bg-gradient-to-r ${color} shadow-sm`}
        />
        
        {/* Shimmer effect */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ 
            duration: 1.5, 
            ease: "easeInOut", 
            repeat: Infinity, 
            repeatDelay: 3 
          }}
          className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
        />
      </div>
      
      {/* Hover glow effect */}
      <div className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r ${color} blur-xl rounded-lg`} />
    </motion.div>
  );
}
