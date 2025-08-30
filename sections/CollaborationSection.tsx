"use client";
import { motion } from 'framer-motion';
import { CollaborationBento } from '../components/CollaborationBento';

export default function CollaborationSection() {
  return (
    <section className="min-h-screen text-white py-20 px-8 relative overflow-hidden bg-black">
      {/* Much darker background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,30,50,0.3),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,20,40,0.2),transparent_70%)]" />
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Let's Collaborate
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I believe in building strong partnerships with my clients through open communication, 
            cutting-edge technology, and flexible collaboration across time zones.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CollaborationBento />
        </motion.div>
      </div>
    </section>
  );
}