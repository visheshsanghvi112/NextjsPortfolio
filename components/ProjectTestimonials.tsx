"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiStar } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Emma Thompson',
    role: 'Senior Designer',
    company: 'PixelCraft',
    avatar: 'ET',
    quote: "Efficient, innovative, and a pleasure to work with",
    description: "Working with Vishesh has been a fantastic experience. He's not only highly skilled in frontend technologies but also brings a refreshing creativity to every project. His ability to solve complex problems quickly and effectively makes him a key asset to our team.",
    bgColor: 'from-blue-500 via-blue-600 to-blue-700',
    shadowColor: 'shadow-blue-500/25',
    rating: 5,
    project: 'E-Commerce Platform',
    duration: '3 months',
  },
  {
    name: 'Ethan Parker',
    role: 'Manager',
    company: 'TechFusion',
    avatar: 'EP',
    quote: "A reliable developer with a keen eye for detail",
    description: "Vishesh delivered exceptional work on our project. His meticulous approach and strong communication skills greatly enhanced the quality of our web applications. He's a dependable developer who collaborates seamlessly with the team.",
    bgColor: 'from-purple-500 via-purple-600 to-purple-800',
    shadowColor: 'shadow-purple-500/25',
    rating: 5,
    project: 'SaaS Dashboard',
    duration: '4 months',
  },
  {
    name: 'Ryan Mitchell',
    role: 'CTO',
    company: 'Innovate Solutions',
    avatar: 'RM',
    quote: "Consistent excellence in every project",
    description: "Vishesh is a standout frontend developer. His ability to deliver high-quality code and engaging user interfaces consistently makes him a valuable team member. He's proactive, reliable, and dedicated.",
    bgColor: 'from-teal-500 via-teal-600 to-cyan-700',
    shadowColor: 'shadow-teal-500/25',
    rating: 5,
    project: 'Analytics Platform',
    duration: '6 months',
  },
  {
    name: 'Emily Thompson',
    role: 'Creative Director',
    company: 'H. Studios',
    avatar: 'ET',
    quote: "A master of frontend development with design sensibility",
    description: "Vishesh is a fantastic frontend developer! He took our requirements and turned them into something amazing. His attention to detail, creativity, and clear communication made the whole process smooth.",
    bgColor: 'from-emerald-500 via-green-600 to-emerald-700',
    shadowColor: 'shadow-emerald-500/25',
    rating: 5,
    project: 'Portfolio Website',
    duration: '2 months',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Product Manager',
    company: 'Digital Dynamics',
    avatar: 'MR',
    quote: "Transforms ideas into reality with exceptional skill",
    description: "Vishesh has an exceptional ability to bring our vision to life. His technical expertise combined with attention to detail and commitment to delivering seamless user experiences makes him invaluable.",
    bgColor: 'from-rose-500 via-pink-600 to-rose-700',
    shadowColor: 'shadow-rose-500/25',
    rating: 5,
    project: 'Mobile App',
    duration: '5 months',
  },
];

export default function ProjectTestimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
  <section className="py-14 md:py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="text-sm text-gray-400 mb-6 tracking-[0.2em] uppercase font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Testimonials
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-extralight mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Word on the street{' '}
            <span className="italic font-light bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              about me
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
        </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`relative group cursor-pointer perspective-1000 h-full`}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Main Card */}
              <div className={`
                bg-gradient-to-br ${testimonial.bgColor} rounded-3xl p-6 text-white h-full
                ${testimonial.shadowColor} shadow-2xl backdrop-blur-sm
                border border-white/10 relative overflow-hidden
                transition-all duration-500 group-hover:shadow-3xl
                ${hoveredIndex === index ? 'shadow-4xl' : ''}
              `}
              style={{ minHeight: '360px' }}
              >
                
                {/* Floating Quote Icon */}
                <motion.div 
                  className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                  animate={{
                    rotate: hoveredIndex === index ? 360 : 0,
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <FaQuoteLeft className="w-4 h-4 text-white/80" />
                </motion.div>

                {/* Animated Background Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <motion.div 
                    className="absolute top-4 right-8 w-2 h-2 bg-white/30 rounded-full"
                    animate={{
                      y: hoveredIndex === index ? [-5, 5, -5] : 0,
                      opacity: hoveredIndex === index ? [0.3, 0.8, 0.3] : 0.3,
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-6 left-4 w-1 h-1 bg-white/40 rounded-full"
                    animate={{
                      x: hoveredIndex === index ? [-2, 2, -2] : 0,
                      opacity: hoveredIndex === index ? [0.4, 0.9, 0.4] : 0.4,
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  ></motion.div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Rating Stars */}
                  <motion.div 
                    className="flex items-center gap-1 mb-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: index * 0.1 + 0.6 + i * 0.1 }}
                      >
                        <HiStar className="w-4 h-4 text-yellow-300" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quote + Description (flex-1 to balance heights) */}
                  <div className="flex-1">
                    <motion.h3 
                      className="text-lg font-semibold mb-4 leading-tight group-hover:text-white transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      &quot;{testimonial.quote}&quot;
                    </motion.h3>

                    <motion.p 
                      className="text-sm opacity-90 leading-relaxed mb-6 text-white/90"
                      animate={{ opacity: hoveredIndex === index ? 1 : 0.9 }}
                    >
                      {testimonial.description}
                    </motion.p>
                  </div>

                  {/* Project Tag */}
                  <motion.div 
                    className="inline-block px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-xs font-medium mb-4 border border-white/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    {testimonial.project} • {testimonial.duration}
                  </motion.div>

                  {/* Client Info */}
                  <motion.div 
                    className="flex items-center gap-3 mt-auto"
                    whileHover={{ x: 2 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-sm border border-white/30"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {testimonial.avatar}
                    </motion.div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-xs opacity-90">{testimonial.role}</div>
                      <div className="text-xs opacity-70">{testimonial.company}</div>
                    </div>
                  </motion.div>
                </div>

                {/* Shine Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0"
                  animate={{
                    x: hoveredIndex === index ? ['-100%', '200%'] : '-100%',
                    opacity: hoveredIndex === index ? [0, 1, 0] : 0,
                  }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                ></motion.div>
              </div>

              {/* Card Reflection */}
              <motion.div 
                className={`
                  absolute -bottom-6 left-0 right-0 h-20 rounded-3xl 
                  bg-gradient-to-br ${testimonial.bgColor} opacity-20 blur-xl -z-10
                `}
                animate={{
                  opacity: hoveredIndex === index ? 0.4 : 0.2,
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400 text-lg mb-6">
            Ready to work together and create something amazing?
          </p>
          <motion.button 
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Start a Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
