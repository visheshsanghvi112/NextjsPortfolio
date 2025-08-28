"use client";
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer,
  SiSanity,
  SiContentful,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiZod,
  SiPnpm,
  SiBun,
  SiGit,
  SiGithub,
  SiVercel,
  SiAmazon,
  SiDocker,
  SiClerk,
  SiLinux,
  SiSupabase
} from 'react-icons/si';
import { DiRedis } from 'react-icons/di';

export default function Hero() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center pt-20 mb-12"
      >
        <div className="text-sm text-gray-400 mb-4 tracking-widest">MY SKILLS</div>
        <h1 className="text-4xl md:text-6xl font-light mb-2">
          The Secret <span className="italic bg-gradient-to-r from-[#ff6ec7] via-[#a855f7] to-[#ff8c42] bg-clip-text text-transparent font-serif">Sauce</span>
        </h1>
      </motion.div>

      {/* Tech Stack Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 max-w-4xl mx-auto px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
          {/* Frontend Row */}
          <TechBadge icon={<SiReact className="text-[#61DAFB]" />} name="React.JS" />
          <TechBadge icon={<SiNextdotjs className="text-white" />} name="Next.JS" />
          <TechBadge icon={<SiTypescript className="text-[#3178C6]" />} name="TypeScript" />
          <TechBadge icon={<SiTailwindcss className="text-[#06B6D4]" />} name="Tailwind CSS" />
          <TechBadge icon={<SiFramer className="text-[#0055FF]" />} name="Framer Motion" />
          <TechBadge icon={<SiSanity className="text-[#F03E2F]" />} name="Sanity" />
          <TechBadge icon={<SiContentful className="text-[#2478CC]" />} name="Contentful" />
          
          {/* Backend Row */}
          <TechBadge icon={<SiNodedotjs className="text-[#339933]" />} name="Node.JS" />
          <TechBadge icon={<SiExpress className="text-white" />} name="Express.JS" />
          <TechBadge icon={<SiPostgresql className="text-[#336791]" />} name="PostgreSQL" />
          <TechBadge icon={<SiMongodb className="text-[#47A248]" />} name="MongoDB" />
          <TechBadge icon={<SiPrisma className="text-[#2D3748]" />} name="Prisma" />
          <TechBadge icon={<DiRedis className="text-[#DC382D]" />} name="Zustand" />
          <TechBadge icon={<SiZod className="text-[#3068B7]" />} name="Zod" />
          
          {/* Tools Row */}
          <TechBadge icon={<SiPnpm className="text-[#F69220]" />} name="pnpm" />
          <TechBadge icon={<SiBun className="text-[#FBF0DF]" />} name="Bun" />
          <TechBadge icon={<SiGit className="text-[#F05032]" />} name="Git" />
          <TechBadge icon={<SiGithub className="text-white" />} name="GitHub" />
          <TechBadge icon={<SiVercel className="text-white" />} name="Vercel" />
          <TechBadge icon={<SiAmazon className="text-[#FF9900]" />} name="AWS" />
          <TechBadge icon={<SiDocker className="text-[#2496ED]" />} name="Docker" />
          
          {/* Additional */}
          <TechBadge icon={<SiClerk className="text-[#6C47FF]" />} name="Clerk" />
          <TechBadge icon={<SiSupabase className="text-[#3ECF8E]" />} name="Supabase" />
        </div>
      </motion.div>

      {/* Floating Design Element */}
      <div className="absolute top-10 right-10 opacity-20">
        <div className="w-32 h-32 border-2 border-purple-500/30 rounded-full animate-pulse"></div>
        <div className="w-24 h-24 border border-pink-500/30 rounded-full absolute top-4 left-4 animate-ping"></div>
      </div>
    </div>
  );
}

function TechBadge({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-lg px-3 py-2 text-center hover:bg-gray-700/50 transition-all duration-200 cursor-pointer group"
    >
      <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">{icon}</div>
      <div className="text-xs text-gray-300 font-medium">{name}</div>
    </motion.div>
  );
}
