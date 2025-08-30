"use client";
import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiExternalLink, HiCode, HiCalendar, HiTag, HiArrowRight } from 'react-icons/hi';
import Image from 'next/image';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    category: string;
    status: string;
    year: string;
    featured: boolean;
    technologies: Array<{
      name: string;
      icon: React.ReactNode;
      color: string;
    }>;
    features: string[];
    links: {
      live?: string;
      github?: string;
    };
    metrics: {
      [key: string]: string;
    };
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    'Live': 'bg-green-500/20 text-green-400 border-green-500/30',
    'In Development': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Completed': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Archived': 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="group bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 relative overflow-hidden"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full font-medium z-10">
          Featured
        </div>
      )}

      {/* Project Image */}
      <div className="relative rounded-xl aspect-video mb-6 overflow-hidden border border-gray-800">
        <ImageWrapper src={project.image} alt={`${project.title} preview`} />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="flex gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <HiExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <HiCode className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="text-pink-400 text-sm font-medium mb-1">{project.subtitle}</div>
            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
              {project.title}
            </h3>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status as keyof typeof statusColors] || statusColors['Completed']}`}>
            {project.status}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <HiCalendar className="w-3 h-3" />
            <span>{project.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <HiTag className="w-3 h-3" />
            <span>{project.category}</span>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 bg-gray-800/50 border border-gray-700 rounded-md px-2 py-1 hover:border-gray-600 transition-colors"
            >
              <span className={`text-xs ${tech.color}`}>{tech.icon}</span>
              <span className="text-xs text-gray-300">{tech.name}</span>
            </div>
          ))}
          {project.technologies.length > 4 && (
            <div className="flex items-center justify-center bg-gray-800/50 border border-gray-700 rounded-md px-2 py-1 text-xs text-gray-400">
              +{project.technologies.length - 4} more
            </div>
          )}
        </div>

        {/* Metrics */}
        <div className="flex justify-between pt-4 border-t border-gray-800">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-sm font-bold text-white">{value}</div>
              <div className="text-xs text-gray-500 capitalize">{key}</div>
            </div>
          ))}
        </div>

        {/* View Details Button */}
        <div className="mt-4 pt-4 border-t border-gray-800">
          <Link
            href={`/projects/${project.id}`}
            className="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-400 hover:text-purple-300 px-4 py-2 rounded-lg transition-all border border-purple-600/20 hover:border-purple-500/30"
          >
            <span className="text-sm font-medium">View Details</span>
            <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"></div>
    </motion.div>
  );
}

export default memo(ProjectCard);

function ImageWrapper({ src, alt }: { src: string; alt: string }) {
  const [fallback, setFallback] = useState(false);
  const finalSrc = fallback ? '/placeholder.png' : src;
  return (
    <div className="absolute inset-0">
      {/* Use unoptimized to bypass Next image optimizer so dev logs don't error */}
      <Image
        src={finalSrc}
        alt={alt}
        fill
        unoptimized
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        onError={() => setFallback(true)}
        priority={false}
      />
      {/* Subtle dark overlay for better text contrast if needed */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </div>
  );
}
