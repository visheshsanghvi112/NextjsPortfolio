"use client";
import { motion } from 'framer-motion';
import { CollaborationBento } from '../components/CollaborationBento';

export default function CollaborationSection() {
  return (
    <section className="min-h-screen text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden bg-black">
      {/* Much darker background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,30,50,0.3),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,20,40,0.2),transparent_70%)]" />
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-purple-500/5 rounded-full blur-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-pink-500/5 rounded-full blur-xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur border border-blue-500/20 rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-blue-300 font-medium">Ready to work together</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
          >
            Let's Build Something
            <br className="hidden sm:block" />
            <span className="text-white">Amazing Together</span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2"
          >
            I believe in creating <span className="text-blue-400 font-semibold">meaningful partnerships</span> with my clients through 
            transparent communication, cutting-edge technology, and seamless collaboration across any time zone.
          </motion.p>
          
          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 px-2"
          >
            {[
              { icon: "💬", text: "Open Communication" },
              { icon: "🔄", text: "Regular Updates" },
              { icon: "🤝", text: "Collaborative Approach" },
              { icon: "⚡", text: "Fast Delivery" }
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-full px-3 sm:px-4 py-2">
                <span className="text-base sm:text-lg">{benefit.icon}</span>
                <span className="text-xs sm:text-sm md:text-base text-gray-300 font-medium">{benefit.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CollaborationBento />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur border border-gray-700/50 rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Ready to get started?
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              Let's schedule a free consultation to discuss your project and see how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.a
                href="mailto:visheshsanghvi112@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start a conversation
                <span>→</span>
              </motion.a>
              <motion.a
                href="/book"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gray-800/30"
              >
                Book a call
                <span>📅</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}