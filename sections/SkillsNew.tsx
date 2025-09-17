"use client";
import { motion } from 'framer-motion';
import SkillMeter from '../components/SkillMeter';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiAmazon,
  SiFramer,
  SiFigma
} from 'react-icons/si';

const frontendSkills = [
  { name: 'React', level: 95, icon: <SiReact className="w-4 h-4" />, color: 'from-blue-400 to-blue-600' },
  { name: 'Next.js', level: 92, icon: <SiNextdotjs className="w-4 h-4" />, color: 'from-gray-700 to-gray-900' },
  { name: 'TypeScript', level: 88, icon: <SiTypescript className="w-4 h-4" />, color: 'from-blue-500 to-blue-700' },
  { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="w-4 h-4" />, color: 'from-cyan-400 to-cyan-600' },
  { name: 'Framer Motion', level: 85, icon: <SiFramer className="w-4 h-4" />, color: 'from-pink-500 to-purple-600' },
];

const backendSkills = [
  { name: 'Node.js', level: 87, icon: <SiNodedotjs className="w-4 h-4" />, color: 'from-green-500 to-green-700' },
  { name: 'PostgreSQL', level: 82, icon: <SiPostgresql className="w-4 h-4" />, color: 'from-blue-600 to-blue-800' },
  { name: 'MongoDB', level: 79, icon: <SiMongodb className="w-4 h-4" />, color: 'from-green-400 to-green-600' },
  { name: 'Prisma', level: 84, icon: <SiPrisma className="w-4 h-4" />, color: 'from-indigo-500 to-indigo-700' },
];

const toolsSkills = [
  { name: 'Docker', level: 75, icon: <SiDocker className="w-4 h-4" />, color: 'from-blue-500 to-blue-700' },
  { name: 'AWS', level: 72, icon: <SiAmazon className="w-4 h-4" />, color: 'from-orange-400 to-orange-600' },
  { name: 'Figma', level: 80, icon: <SiFigma className="w-4 h-4" />, color: 'from-purple-500 to-pink-500' },
];

export default function Skills() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-light mb-4">
          Technical <span className="italic font-serif bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels across different domains
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {/* Frontend Skills */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-2xl p-4 sm:p-6"
        >
          <h3 className="text-xl font-semibold mb-6 text-blue-400 flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            Frontend Development
          </h3>
          <div className="space-y-4">
            {frontendSkills.map((skill, index) => (
              <SkillMeter key={skill.name} {...skill} />
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-2xl p-4 sm:p-6"
        >
          <h3 className="text-xl font-semibold mb-6 text-green-400 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            Backend Development
          </h3>
          <div className="space-y-4">
            {backendSkills.map((skill, index) => (
              <SkillMeter key={skill.name} {...skill} />
            ))}
          </div>
        </motion.div>

        {/* Tools & Others */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-2xl p-4 sm:p-6 md:col-span-2 lg:col-span-1"
        >
          <h3 className="text-xl font-semibold mb-6 text-purple-400 flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            Tools & Design
          </h3>
          <div className="space-y-4">
            {toolsSkills.map((skill, index) => (
              <SkillMeter key={skill.name} {...skill} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Overall Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
      >
        <div className="text-center bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur border border-gray-700 rounded-xl p-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">5+</div>
          <div className="text-sm text-gray-400">Years Experience</div>
        </div>
        <div className="text-center bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur border border-gray-700 rounded-xl p-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">50+</div>
          <div className="text-sm text-gray-400">Projects Completed</div>
        </div>
        <div className="text-center bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur border border-gray-700 rounded-xl p-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">15+</div>
          <div className="text-sm text-gray-400">Technologies</div>
        </div>
        <div className="text-center bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur border border-gray-700 rounded-xl p-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">100%</div>
          <div className="text-sm text-gray-400">Client Satisfaction</div>
        </div>
      </motion.div>
    </section>
  );
}
