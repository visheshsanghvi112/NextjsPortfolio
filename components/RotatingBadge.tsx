"use client";
import { motion } from 'framer-motion';
import { useId } from 'react';

interface RotatingBadgeProps {
  text?: string;
  size?: number;
  className?: string;
}

export default function RotatingBadge({ 
  text = "OPEN TO WORK · OPEN TO WORK ·", 
  size = 95,
  className = ""
}: RotatingBadgeProps) {
  const uniqueId = useId();
  
  return (
    <div className={`relative ${className}`}>
      {/* Outer rotating container */}
      <motion.div 
        className="relative rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1.5 leading-none font-medium"
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ 
          width: size, 
          height: size,
          transformOrigin: 'center center'
        }}
      >
        {/* Inner black circle */}
        <div 
          className="relative rounded-full bg-black p-2"
          style={{ 
            width: size - 12, 
            height: size - 12 
          }}
        >
          {/* Text container */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ 
              width: size - 32, 
              height: size - 32 
            }}
          >
            <svg 
              className="transform-origin-center-center" 
              viewBox="0 0 100 100" 
              overflow="visible" 
              fill="black" 
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                inset: 0,
                transformOrigin: 'center center'
              }}
            >
              <path 
                id={uniqueId}
                d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50" 
                strokeWidth="none" 
                fill="transparent"
              />
              <text>
                <textPath 
                  href={`#${uniqueId}`} 
                  startOffset="0" 
                  dominantBaseline="hanging" 
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    wordSpacing: '5px',
                    letterSpacing: '2.1px',
                    fill: 'rgba(242, 242, 242, 0.9)'
                  }}
                >
                  {text}
                </textPath>
              </text>
            </svg>
          </div>
          
          {/* Center star icon */}
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 fill-white text-white opacity-80"
            style={{ width: '2.5rem', height: '2.5rem' }}
          >
            <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
          </svg>
        </div>
      </motion.div>
      
      <span className="sr-only">{text}</span>
    </div>
  );
}