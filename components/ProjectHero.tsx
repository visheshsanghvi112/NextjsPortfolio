"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiExternalLink, HiCode, HiEye } from 'react-icons/hi';
import { SiFigma } from 'react-icons/si';

interface ProjectHeroProps {
  project: {
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    image: string;
    category: string;
    status: string;
    year: string;
    technologies: Array<{
      name: string;
      icon: React.ReactNode;
      color: string;
    }>;
    features: string[];
    links: {
      live?: string;
      github?: string;
      figma?: string;
    };
    metrics: {
      [key: string]: string;
    };
  };
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10 rounded-3xl"></div>
      
      <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 lg:p-12 overflow-hidden">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          {project.status}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-pink-400 font-medium text-lg mb-2">{project.subtitle}</div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {project.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {project.longDescription}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2 }}
              className="space-y-3"
            >
              {project.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-white font-semibold">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 hover:border-gray-600 transition-colors"
                  >
                    <span className={tech.color}>{tech.icon}</span>
                    <span className="text-sm text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-medium transition-all hover:scale-105"
                >
                  <HiExternalLink className="w-4 h-4" />
                  View Live
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-medium transition-all border border-gray-600 hover:border-gray-500"
                >
                  <HiCode className="w-4 h-4" />
                  Source Code
                </a>
              )}
              {project.links.figma && (
                <a
                  href={project.links.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-transparent hover:bg-gray-800/50 text-gray-300 hover:text-white px-4 py-3 rounded-xl font-medium transition-all border border-gray-700 hover:border-gray-600"
                >
                  <SiFigma className="w-4 h-4" />
                  Design
                </a>
              )}
            </motion.div>
          </div>

          {/* Project Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            {/* Browser Mockup */}
            <div className="bg-gray-800 rounded-t-2xl p-4 border-t border-l border-r border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-gray-700 rounded-md px-4 py-1 mx-4">
                  <div className="text-xs text-gray-400 truncate">
                    {project.links.live || 'localhost:3000'}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Image */}
            <div className="relative bg-gradient-to-br from-purple-900 to-pink-900 rounded-b-2xl border-l border-r border-b border-gray-700 aspect-video overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
              
              {/* Project Image */}
              <Image
                src={project.image || '/placeholder.png'}
                alt={`${project.title} preview`}
                fill
                unoptimized
                sizes="100vw"
                className="object-cover"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <HiEye className="w-12 h-12 text-white/80" />
              </div>
            </div>

            {/* Floating Metrics */}
            <div className="absolute -bottom-6 -right-6 grid grid-cols-3 gap-3">
              {Object.entries(project.metrics).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-gray-900/90 backdrop-blur border border-gray-700 rounded-xl p-3 text-center min-w-[80px]"
                >
                  <div className="text-sm font-bold text-white">{value}</div>
                  <div className="text-xs text-gray-400 capitalize">{key}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
}
