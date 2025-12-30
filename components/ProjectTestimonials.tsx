"use client";
import { motion } from 'framer-motion';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Emma Thompson',
    role: 'Senior Designer',
    company: 'PixelCraft',
    quote: "Efficient, innovative, and a pleasure to work with",
    description: "Working with Vishesh has been a fantastic experience. He's not only highly skilled in frontend technologies but also brings a refreshing creativity to every project.",
  },
  {
    name: 'Ethan Parker',
    role: 'Manager',
    company: 'TechFusion',
    quote: "A reliable developer with a keen eye for detail",
    description: "Vishesh delivered exceptional work on our project. His meticulous approach and strong communication skills greatly enhanced the quality of our web applications.",
  },
  {
    name: 'Ryan Mitchell',
    role: 'CTO',
    company: 'Innovate Solutions',
    quote: "Consistent excellence in every project",
    description: "Vishesh is a standout frontend developer. His ability to deliver high-quality code and engaging user interfaces consistently makes him a valuable team member.",
  },
  {
    name: 'Emily Thompson',
    role: 'Creative Director',
    company: 'H. Studios',
    quote: "A master of frontend development",
    description: "Vishesh is a fantastic frontend developer! He took our requirements and turned them into something amazing. His attention to detail made the whole process smooth.",
  },
  {
    name: 'Michael Rodriguez',
    role: 'Product Manager',
    company: 'Digital Dynamics',
    quote: "Transforms ideas into reality",
    description: "Vishesh has an exceptional ability to bring our vision to life. His technical expertise combined with attention to detail is invaluable.",
  },
];

export default function ProjectTestimonials() {
  return (
    <section className="py-20 relative overflow-hidden bg-black flex flex-col items-center justify-center min-h-[50vh]">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mb-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 mb-4"
        >
          Kind Words
        </motion.h2>
        <p className="text-neutral-400 max-w-lg mx-auto text-sm md:text-base">
          Feedback from people I've had the pleasure of working with.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
