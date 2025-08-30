"use client";
import { motion } from 'framer-motion';
import React, { useMemo, useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import ProjectCard from '@/components/ProjectCard';
import ProjectHero from '@/components/ProjectHero';
const ProjectStats = dynamic(() => import('@/components/ProjectStats'), { ssr: false, loading: () => null });
const ProjectTestimonials = dynamic(() => import('@/components/ProjectTestimonials'), { ssr: false, loading: () => null });
const FloatingActions = dynamic(() => import('@/components/FloatingActions'), { ssr: false, loading: () => null });
import projects from '@/lib/projectsData';
import ProjectFilter from '@/components/ProjectFilter';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss,
  SiSupabase,
  SiFramer,
  SiSanity,
  SiPrisma,
  SiStripe,
  SiVercel,
  SiOpenai,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiFirebase,
  SiSocketdotio,
  SiD3Dotjs,
  SiThreedotjs,
  SiExpo,
  SiRemix,
  SiChartdotjs
} from 'react-icons/si';

// Map known stack names to icons and colors
const techIconMap: Record<string, { icon: React.ReactNode; color: string }> = {
  'Next.js': { icon: <SiNextdotjs />, color: 'text-white' },
  'React': { icon: <SiReact />, color: 'text-blue-400' },
  'TypeScript': { icon: <SiTypescript />, color: 'text-blue-500' },
  'Tailwind CSS': { icon: <SiTailwindcss />, color: 'text-cyan-400' },
  'Supabase': { icon: <SiSupabase />, color: 'text-green-400' },
  'Framer Motion': { icon: <SiFramer />, color: 'text-pink-500' },
  'Motion.dev': { icon: <SiFramer />, color: 'text-pink-500' },
  'Sanity': { icon: <SiSanity />, color: 'text-red-500' },
  'Sanity CMS': { icon: <SiSanity />, color: 'text-red-500' },
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

type UIProject = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  status: string;
  year: string;
  featured: boolean;
  technologies: Array<{ name: string; icon: React.ReactNode; color: string }>;
  features: string[];
  links: { live?: string; github?: string; figma?: string };
  metrics: { [key: string]: string };
};

// Mapping function for better performance
const mapToUI = (p: (typeof projects)[number], index: number): UIProject => {
  const technologies = (p.stack || []).map((name) => {
    const mapped = techIconMap[name] || { icon: null, color: 'text-gray-300' };
    return { name, icon: mapped.icon, color: mapped.color };
  });
  return {
    id: p.id,
    title: p.name,
    subtitle: p.category || 'Project',
    description: p.description,
    longDescription: p.description,
    image: `/projects/${p.id}.png`,
    category: p.category || 'Project',
    status: p.status || 'Live',
    year: p.year || '',
    featured: index < 3, // mark first few as featured
    technologies,
    features: [
      `Built with ${p.stack.slice(0, 3).join(', ')}${p.stack.length > 3 ? '…' : ''}`,
      'Clean, modern UI and interactions',
      'Optimized for performance and accessibility',
    ],
    links: { live: p.live, github: p.github },
    metrics: {
      year: p.year || '—',
      status: p.status || '—',
      tech: `${p.stack?.length || 0} tech`,
    },
  };
};

const uiProjects: UIProject[] = projects.map(mapToUI);

// Optimized progressive loading with better performance
const useProgressiveList = <T,>(items: T[], initial = 8, step = 6) => {
  const [count, setCount] = useState(initial);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Reset when the source list changes
  useEffect(() => {
    setCount(initial);
  }, [items, initial]);

  useEffect(() => {
    if (!sentinelRef.current) return;
    if (count >= items.length) return;

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCount((c) => Math.min(items.length, c + step));
        }
      });
    }, { 
      rootMargin: '400px 0px',
      threshold: 0.1
    });

    observerRef.current.observe(sentinelRef.current);
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [count, items.length, step]);

  return { visible: items.slice(0, count), sentinelRef, hasMore: count < items.length } as const;
};

function ProjectGridWithFilters({ projects }: { projects: UIProject[] }) {
  const categories = useMemo(() => {
    const cats = new Set<string>(['All']);
    projects.forEach((p) => p.category && cats.add(p.category));
    return Array.from(cats);
  }, [projects]);
  const [active, setActive] = useState<string>('All');
  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active, projects]
  );
  const { visible, sentinelRef, hasMore } = useProgressiveList(filtered, 8, 8);

  return (
    <>
      <ProjectFilter
        categories={categories}
        activeCategory={active}
        onCategoryChange={setActive}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {visible.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            style={{ contentVisibility: 'auto', containIntrinsicSize: '360px 420px' } as React.CSSProperties}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
        {/* Sentinel for IntersectionObserver to load more */}
        {hasMore && (
          <div ref={sentinelRef} className="h-2 col-span-full" />
        )}
      </div>
    </>
  );
}

export default function ProjectsPage() {
  return (
  <div className="min-h-screen bg-black text-white">
  {/* Header and Footer are rendered by RootLayout */}

      {/* Projects Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="text-sm text-gray-400 mb-4 tracking-widest uppercase">Featured Case Studies</div>
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              Curated <span className="italic font-serif bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">work</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A collection of carefully crafted digital experiences, each built with modern technologies 
              and designed to solve real-world problems with elegant solutions.
            </p>
          </motion.div>

          {/* Featured Project Hero */}
          {uiProjects[0] && <ProjectHero project={uiProjects[0]} />}
        </div>
      </section>

    {/* All Projects Grid */}
    <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-light mb-12 text-center"
          >
            All <span className="italic font-serif text-blue-400">Projects</span>
          </motion.h2>
          {/* Filters */}
          <ProjectGridWithFilters projects={uiProjects} />
          
          {/* Grid is rendered inside ProjectGridWithFilters */}
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="py-16 px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Built with <span className="italic font-serif text-green-400">Modern</span> Tech
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every project leverages cutting-edge technologies for optimal performance, 
              scalability, and user experience.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Next.js 15', icon: <SiNextdotjs />, desc: 'App Router & RSC' },
              { name: 'TypeScript', icon: <SiTypescript />, desc: 'Type Safety' },
              { name: 'Tailwind CSS', icon: <SiTailwindcss />, desc: 'Utility-First' },
              { name: 'Framer Motion', icon: <SiFramer />, desc: 'Animations' },
              { name: 'Supabase', icon: <SiSupabase />, desc: 'Backend as a Service' },
              { name: 'Prisma', icon: <SiPrisma />, desc: 'Type-Safe ORM' },
              { name: 'Vercel', icon: <SiVercel />, desc: 'Deployment' },
              { name: 'Sanity', icon: <SiSanity />, desc: 'Headless CMS' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-6 text-center hover:border-gray-600 transition-all group"
              >
                <div className="text-3xl mb-3 text-gray-400 group-hover:text-white transition-colors">
                  {tech.icon}
                </div>
                <h3 className="font-semibold mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <ProjectStats />

      {/* Client Testimonials */}
      <ProjectTestimonials />

      <FloatingActions />
    </div>
  );
}
