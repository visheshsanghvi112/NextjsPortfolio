"use client";
import { motion } from 'framer-motion';
import { HiCode, HiUsers, HiLightBulb, HiTrendingUp } from 'react-icons/hi';

const stats = [
  {
    icon: <HiCode className="w-6 h-6" />,
    label: 'Lines of Code',
    value: '50K+',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    icon: <HiUsers className="w-6 h-6" />,
    label: 'Happy Clients',
    value: '25+',
    color: 'from-green-400 to-emerald-400',
  },
  {
    icon: <HiLightBulb className="w-6 h-6" />,
    label: 'Projects Built',
    value: '15+',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    icon: <HiTrendingUp className="w-6 h-6" />,
    label: 'Performance Boost',
    value: '+40%',
    color: 'from-purple-400 to-pink-400',
  },
];

export default function ProjectStats() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-light text-center mb-12"
        >
          Impact <span className="italic font-serif text-purple-400">by Numbers</span>
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur border border-gray-700 rounded-xl p-6 text-center hover:border-gray-600 transition-all group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
