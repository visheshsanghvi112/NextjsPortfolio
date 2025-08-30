"use client";
import type React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';
// Header and Footer are provided by RootLayout
import { HiArrowLeft, HiExternalLink, HiCode, HiCalendar, HiUsers, HiLightningBolt, HiTag } from 'react-icons/hi';
import { SiFigma } from 'react-icons/si';
import projects from '@/lib/projectsData';
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiSupabase, SiFramer, SiSanity, SiPrisma, SiStripe, SiVercel, SiOpenai,
  SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiFirebase, SiSocketdotio, SiD3Dotjs, SiThreedotjs, SiExpo, SiRemix, SiChartdotjs
} from 'react-icons/si';

const techIconMap: Record<string, { icon: React.ReactNode; color: string }> = {
  'Next.js': { icon: <SiNextdotjs />, color: 'text-white' },
  'React': { icon: <SiReact />, color: 'text-blue-400' },
  'TypeScript': { icon: <SiTypescript />, color: 'text-blue-500' },
  'Tailwind CSS': { icon: <SiTailwindcss />, color: 'text-cyan-400' },
  'Supabase': { icon: <SiSupabase />, color: 'text-green-400' },
  'Framer Motion': { icon: <SiFramer />, color: 'text-pink-500' },
  'Sanity': { icon: <SiSanity />, color: 'text-red-500' },
  'Prisma': { icon: <SiPrisma />, color: 'text-indigo-400' },
  'Stripe': { icon: <SiStripe />, color: 'text-purple-500' },
  'Vercel': { icon: <SiVercel />, color: 'text-white' },
  'OpenAI': { icon: <SiOpenai />, color: 'text-emerald-400' },
  'HTML': { icon: <SiHtml5 />, color: 'text-orange-500' },
  'CSS': { icon: <SiCss3 />, color: 'text-blue-500' },
  'JavaScript': { icon: <SiJavascript />, color: 'text-yellow-400' },
  'Bootstrap': { icon: <SiBootstrap />, color: 'text-purple-600' },
  'Firebase': { icon: <SiFirebase />, color: 'text-amber-400' },
  'Socket.IO': { icon: <SiSocketdotio />, color: 'text-gray-300' },
  'D3.js': { icon: <SiD3Dotjs />, color: 'text-orange-400' },
  'Three.js': { icon: <SiThreedotjs />, color: 'text-white' },
  'Expo': { icon: <SiExpo />, color: 'text-white' },
  'Remix': { icon: <SiRemix />, color: 'text-white' },
  'Chart.js': { icon: <SiChartdotjs />, color: 'text-pink-400' },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const raw = projects.find(p => p.id === slug);

  if (!raw) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-purple-400 hover:text-purple-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const project = {
    title: raw.name,
    subtitle: raw.category || 'Project',
    description: raw.description,
    longDescription: raw.description,
    year: raw.year || '—',
    duration: undefined as string | undefined,
    team: undefined as string | undefined,
    role: undefined as string | undefined,
    client: undefined as string | undefined,
    status: raw.status || 'Live',
  image: `/projects/${raw.id}.png`,
    technologies: (raw.stack || []).map((name) => name),
    features: [
      { title: 'Modern Stack', description: `Built with ${raw.stack.slice(0,3).join(', ')}${raw.stack.length>3?'…':''}` },
      { title: 'Clean UI', description: 'Responsive, accessible, and fast.' },
    ],
    results: [],
    links: { live: raw.live, github: raw.github, figma: undefined as string | undefined },
  };

  return (
    <div className="min-h-screen bg-black text-white">
  {/* Header is rendered by RootLayout */}

      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="fixed top-24 left-8 z-40"
      >
        <Link 
          href="/projects"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Projects</span>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Live' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    <div className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      project.status === 'Live' ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'
                    }`}></div>
                    {project.status}
                  </div>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {project.title}
                </h1>
                <p className="text-xl text-purple-400 font-medium">{project.subtitle}</p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Project Meta */}
              <div className="grid grid-cols-2 gap-6 py-6 border-t border-gray-800">
                <div>
                  <div className="text-gray-400 text-sm mb-1">Year</div>
                  <div className="text-white font-semibold">{project.year}</div>
                </div>
                {project.duration && (
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Duration</div>
                    <div className="text-white font-semibold">{project.duration}</div>
                  </div>
                )}
                {project.team && (
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Team Size</div>
                    <div className="text-white font-semibold">{project.team}</div>
                  </div>
                )}
                {project.role && (
                  <div>
                    <div className="text-gray-400 text-sm mb-1">My Role</div>
                    <div className="text-white font-semibold">{project.role}</div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-medium transition-all hover:scale-105"
                  >
                    <HiExternalLink className="w-4 h-4" />
                    View Live Project
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
              </div>
            </motion.div>

            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-6 text-white/20">🚀</div>
                    <div className="text-white/80 text-2xl font-bold">{project.title}</div>
                    <div className="text-white/60 text-lg">{project.subtitle}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl font-light mb-8 text-center"
          >
            Technology <span className="italic font-serif text-blue-400">Stack</span>
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={typeof tech === 'string' ? tech : String(index)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 hover:border-gray-600 transition-colors"
              >
                <span className="text-gray-300 flex items-center gap-2">
                  {techIconMap[String(tech)]?.icon && (
                    <span className={techIconMap[String(tech)]?.color}>{techIconMap[String(tech)]?.icon}</span>
                  )}
                  {String(tech)}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-4"
            >
              <div className="flex items-center gap-2 text-gray-400 text-sm"><HiTag className="w-4 h-4"/>Category</div>
              <div className="text-white font-semibold">{project.subtitle}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-4"
            >
              <div className="flex items-center gap-2 text-gray-400 text-sm"><HiCalendar className="w-4 h-4"/>Year</div>
              <div className="text-white font-semibold">{project.year}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-4"
            >
              <div className="flex items-center gap-2 text-gray-400 text-sm"><HiLightningBolt className="w-4 h-4"/>Status</div>
              <div className="text-white font-semibold">{project.status}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-4"
            >
              <div className="flex items-center gap-2 text-gray-400 text-sm"><HiCode className="w-4 h-4"/>Tech Count</div>
              <div className="text-white font-semibold">{project.technologies.length}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl font-light mb-12 text-center"
          >
            Key <span className="italic font-serif text-green-400">Features</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {project.features.map((feature, index) => (
              <motion.div
                key={typeof feature === 'string' ? feature : feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{typeof feature === 'string' ? feature : feature.title}</h3>
                {typeof feature !== 'string' && (
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl font-light mb-12 text-center"
          >
            Project <span className="italic font-serif text-purple-400">Impact</span>
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(
              (project.results || []) as Array<{ metric: string; value: string; description?: string }>
            ).map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur border border-gray-700 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {result.value}
                </div>
                <div className="text-white font-medium mb-1">{result.metric}</div>
                <div className="text-sm text-gray-400">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  {/* Footer is rendered by RootLayout */}
    </div>
  );
}
