"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiArrowLeft, 
  HiClock, 
  HiVideoCamera,
  HiLocationMarker,
  HiUser
} from 'react-icons/hi';
import Link from 'next/link';

// Declare Cal for TypeScript
declare global {
  interface Window {
    Cal: any;
  }
}

export default function BookingPage() {

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Book a Call</h1>
            <p className="text-gray-400 text-lg">Schedule a 30-minute consultation with me</p>
          </div>
        </motion.div>

        {/* Cal.com Full Width Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-7xl mx-auto"
        >
          {/* Cal.com iframe embed with proper dimensions */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
            <iframe
              src="https://cal.com/vishesh-sanghvi/30min?embed=true&theme=dark"
              width="100%"
              height="650"
              frameBorder="0"
              className="w-full"
              title="Book a meeting with Vishesh Sanghvi"
              loading="lazy"
              style={{
                minHeight: '650px',
                background: 'transparent'
              }}
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}