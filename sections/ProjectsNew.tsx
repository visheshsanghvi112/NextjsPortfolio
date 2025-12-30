// Demo Projects Section
"use client";
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowRight, HiExternalLink } from 'react-icons/hi';
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { MouseEvent } from 'react';

const featuredProjects = [
  {
    name: 'JHC Research',
    description: 'Research organization website with publications and profiles.',
    tech: [
      { name: 'HTML', icon: <SiReact />, color: 'text-blue-400' },
      { name: 'CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
      { name: 'JavaScript', icon: <SiTypescript />, color: 'text-yellow-400' },
    ],
    status: 'Live',
    live: 'https://jhc-researchh.vercel.app',
    code: 'https://github.com/visheshsanghvi112/jhc-research-horizon-90',
    image: '/projects/jhc-research.png',
    featured: true,
  },
  {
    name: 'Billifyy',
    description: 'Invoice generator and management app for freelancers.',
    tech: [
      { name: 'React', icon: <SiReact />, color: 'text-blue-400' },
      { name: 'Vite', icon: <SiNextdotjs />, color: 'text-white' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
      { name: 'Firebase', icon: <SiTypescript />, color: 'text-yellow-400' },
    ],
    status: 'Live',
    live: 'https://billifyy.vercel.app',
    code: 'https://github.com/visheshsanghvi112/billifyy',
    image: '/projects/billifyy.png',
    featured: true,
  },
];

function ProjectCard({ project, index }: { project: typeof featuredProjects[0], index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className={`relative group bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 overflow-hidden ${project.featured ? 'border-purple-500/30' : 'border-gray-700/50'}`}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(147, 51, 234, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-6 right-6 z-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg shadow-purple-500/20">
          Featured
        </div>
      )}

      {/* Status Badge */}
      <div className={`relative z-10 inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-sm font-medium ${project.status === 'Live'
        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
        }`}>
        <div className={`w-2 h-2 rounded-full ${project.status === 'Live' ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'
          }`}></div>
        {project.status}
      </div>

      {/* Project Image & Enhanced Overlay (Optimized) */}
      <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl aspect-video mb-6 overflow-hidden group-hover:shadow-2xl group-hover:shadow-purple-500/10 transition-all duration-500">
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
          placeholder="blur"
          blurDataURL="/placeholder.png"
          priority={false}
        />
        {/* Overlay with links (simplified) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
          <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold shadow-lg transition-all flex items-center gap-2 hover:scale-105"
            >
              Live <HiExternalLink className="w-4 h-4" />
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/90 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold shadow-lg transition-all flex items-center gap-2 border border-gray-700 hover:scale-105"
            >
              Code <HiExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
          {project.name}
        </h3>
        <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 group-hover:border-gray-600 transition-colors"
            >
              <span className={tech.color}>{tech.icon}</span>
              <span className="text-sm text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-sm text-gray-400 mb-4 tracking-widest uppercase flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-gray-700"></span>
            Selected Work
            <span className="w-8 h-[1px] bg-gray-700"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Featured <span className="italic font-serif bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of recent work that combines innovative design with cutting-edge technology
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="relative group inline-flex items-center gap-3 bg-white/5 border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-2xl font-medium text-lg transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">View All Projects</span>
            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            Explore detailed case studies, source code, and live demos
          </p>
        </motion.div>
      </div>
    </section>
  );
}
