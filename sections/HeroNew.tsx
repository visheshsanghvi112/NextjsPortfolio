"use client";
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
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
  SiSupabase,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiFigma,
  SiRedis,
  SiGraphql,
  SiFirebase,
  SiStripe,
  SiLinux,
  SiNginx,
  SiKubernetes,
  SiJest,
  SiCypress,
  SiVite,
  SiNetlify,
} from 'react-icons/si';

// ============================================
// BACKGROUND GRADIENT ANIMATION 
// ============================================
const BackgroundGradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
};

// ============================================
// 3D TILT TECH CARD WITH SPOTLIGHT
// ============================================
function TechCard3D({ icon, name, color }: { icon: React.ReactNode; name: string; color?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05, z: 20 }}
      className="relative cursor-pointer perspective-1000"
    >
      {/* Card container */}
      <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-xl border border-white/[0.08] rounded-xl p-3 min-h-[70px] flex flex-col items-center justify-center overflow-hidden group">

        {/* Spotlight effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${isHovered ? '50%' : '50%'} 50%, ${color || 'rgba(139, 92, 246, 0.15)'}, transparent 70%)`,
          }}
        />

        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${color || 'rgba(59, 130, 246, 0.3)'}, transparent, ${color || 'rgba(139, 92, 246, 0.3)'})`,
            padding: '1px',
          }}
        />

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          initial={{ x: "-100%", opacity: 0 }}
          whileHover={{ x: "200%", opacity: 0.1 }}
          transition={{ duration: 0.6 }}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            transform: "skewX(-20deg)",
          }}
        />

        {/* Icon with glow */}
        <motion.div
          className="relative z-10 text-xl sm:text-2xl mb-1"
          style={{ transform: "translateZ(20px)" }}
          animate={isHovered ? { scale: 1.2, y: -2 } : { scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {icon}
          {/* Icon glow */}
          <motion.div
            className="absolute inset-0 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"
            style={{ color: color }}
          >
            {icon}
          </motion.div>
        </motion.div>

        {/* Name with gradient on hover */}
        <motion.div
          className="relative z-10 text-[10px] sm:text-xs font-medium text-gray-400 group-hover:text-white transition-colors duration-300"
          style={{ transform: "translateZ(10px)" }}
        >
          {name}
        </motion.div>

        {/* Bottom glow line */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-all duration-500"
        />
      </div>
    </motion.div>
  );
}

// ============================================
// CATEGORY HEADER WITH ANIMATED LINE
// ============================================
function CategoryHeader({ color, label }: { color: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-4"
    >
      <motion.div
        className={`w-1.5 h-6 rounded-full bg-gradient-to-b ${color}`}
        animate={{ scaleY: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">{label}</span>
      <motion.div
        className="flex-1 h-px bg-gradient-to-r from-gray-700/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================
export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden py-16">
      <BackgroundGradient />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center pt-10 mb-16"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-6"
        >
          <span className="text-sm text-gray-300">🧪 MY SKILLS</span>
        </motion.div>

        {/* Title with animated gradient */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4">
          <span className="text-white">The Secret </span>
          <motion.span
            className="inline-block italic font-serif"
            style={{
              background: "linear-gradient(90deg, #60a5fa, #a855f7, #6366f1, #60a5fa)",
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            animate={{ backgroundPosition: ["0% center", "300% center"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            Sauce
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4"
        >
          The perfect blend of cutting-edge technologies I use to build exceptional digital experiences
        </motion.p>
      </motion.div>

      {/* Tech Stack Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6"
      >
        {/* Frontend */}
        <div className="mb-8">
          <CategoryHeader color="from-cyan-400 to-blue-500" label="Frontend" />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
            <TechCard3D icon={<SiHtml5 className="text-[#E34F26]" />} name="HTML5" color="rgba(227, 79, 38, 0.3)" />
            <TechCard3D icon={<SiCss3 className="text-[#1572B6]" />} name="CSS3" color="rgba(21, 114, 182, 0.3)" />
            <TechCard3D icon={<SiJavascript className="text-[#F7DF1E]" />} name="JavaScript" color="rgba(247, 223, 30, 0.3)" />
            <TechCard3D icon={<SiTypescript className="text-[#3178C6]" />} name="TypeScript" color="rgba(49, 120, 198, 0.3)" />
            <TechCard3D icon={<SiReact className="text-[#61DAFB]" />} name="React" color="rgba(97, 218, 251, 0.3)" />
            <TechCard3D icon={<SiNextdotjs className="text-white" />} name="Next.js" />
            <TechCard3D icon={<SiTailwindcss className="text-[#06B6D4]" />} name="Tailwind" color="rgba(6, 182, 212, 0.3)" />
            <TechCard3D icon={<SiSass className="text-[#CC6699]" />} name="Sass" color="rgba(204, 102, 153, 0.3)" />
            <TechCard3D icon={<SiFramer className="text-[#0055FF]" />} name="Framer" color="rgba(0, 85, 255, 0.3)" />
            <TechCard3D icon={<SiVite className="text-[#646CFF]" />} name="Vite" color="rgba(100, 108, 255, 0.3)" />
            <TechCard3D icon={<span className="text-lg">🎨</span>} name="shadcn/ui" />
            <TechCard3D icon={<span className="text-lg">⚛️</span>} name="Radix UI" />
          </div>
        </div>

        {/* Backend */}
        <div className="mb-8">
          <CategoryHeader color="from-green-400 to-emerald-500" label="Backend" />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
            <TechCard3D icon={<SiNodedotjs className="text-[#339933]" />} name="Node.js" color="rgba(51, 153, 51, 0.3)" />
            <TechCard3D icon={<SiExpress className="text-white" />} name="Express" />
            <TechCard3D icon={<SiPython className="text-[#3776AB]" />} name="Python" color="rgba(55, 118, 171, 0.3)" />
            <TechCard3D icon={<SiGraphql className="text-[#E10098]" />} name="GraphQL" color="rgba(225, 0, 152, 0.3)" />
            <TechCard3D icon={<span className="text-lg">🔗</span>} name="tRPC" />
            <TechCard3D icon={<SiZod className="text-[#3068B7]" />} name="Zod" color="rgba(48, 104, 183, 0.3)" />
          </div>
        </div>

        {/* Databases */}
        <div className="mb-8">
          <CategoryHeader color="from-blue-400 to-indigo-500" label="Databases" />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
            <TechCard3D icon={<SiPostgresql className="text-[#336791]" />} name="PostgreSQL" color="rgba(51, 103, 145, 0.3)" />
            <TechCard3D icon={<SiMongodb className="text-[#47A248]" />} name="MongoDB" color="rgba(71, 162, 72, 0.3)" />
            <TechCard3D icon={<SiPrisma className="text-[#2D3748]" />} name="Prisma" />
            <TechCard3D icon={<SiRedis className="text-[#DC382D]" />} name="Redis" color="rgba(220, 56, 45, 0.3)" />
            <TechCard3D icon={<SiSupabase className="text-[#3ECF8E]" />} name="Supabase" color="rgba(62, 207, 142, 0.3)" />
            <TechCard3D icon={<SiFirebase className="text-[#FFCA28]" />} name="Firebase" color="rgba(255, 202, 40, 0.3)" />
            <TechCard3D icon={<span className="text-lg">🌍</span>} name="PlanetScale" />
          </div>
        </div>

        {/* AI/ML */}
        <div className="mb-8">
          <CategoryHeader color="from-purple-400 to-blue-500" label="AI / Machine Learning" />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
            <TechCard3D icon={<SiOpenai className="text-[#412991]" />} name="OpenAI" color="rgba(65, 41, 145, 0.3)" />
            <TechCard3D icon={<SiTensorflow className="text-[#FF6F00]" />} name="TensorFlow" color="rgba(255, 111, 0, 0.3)" />
            <TechCard3D icon={<SiPytorch className="text-[#EE4C2C]" />} name="PyTorch" color="rgba(238, 76, 44, 0.3)" />
            <TechCard3D icon={<span className="text-lg">🤗</span>} name="Hugging Face" />
            <TechCard3D icon={<span className="text-lg">🧠</span>} name="LangChain" />
          </div>
        </div>

        {/* DevOps & Cloud */}
        <div className="mb-8">
          <CategoryHeader color="from-orange-400 to-red-500" label="DevOps & Cloud" />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
            <TechCard3D icon={<SiDocker className="text-[#2496ED]" />} name="Docker" color="rgba(36, 150, 237, 0.3)" />
            <TechCard3D icon={<SiKubernetes className="text-[#326CE5]" />} name="Kubernetes" color="rgba(50, 108, 229, 0.3)" />
            <TechCard3D icon={<SiAmazon className="text-[#FF9900]" />} name="AWS" color="rgba(255, 153, 0, 0.3)" />
            <TechCard3D icon={<SiVercel className="text-white" />} name="Vercel" />
            <TechCard3D icon={<SiNetlify className="text-[#00C7B7]" />} name="Netlify" color="rgba(0, 199, 183, 0.3)" />
            <TechCard3D icon={<span className="text-lg">🚂</span>} name="Railway" />
            <TechCard3D icon={<SiLinux className="text-[#FCC624]" />} name="Linux" color="rgba(252, 198, 36, 0.3)" />
            <TechCard3D icon={<SiNginx className="text-[#009639]" />} name="Nginx" color="rgba(0, 150, 57, 0.3)" />
          </div>
        </div>

        {/* Tools & Testing */}
        <div className="mb-8">
          <CategoryHeader color="from-pink-400 to-rose-500" label="Tools & Testing" />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
            <TechCard3D icon={<SiGit className="text-[#F05032]" />} name="Git" color="rgba(240, 80, 50, 0.3)" />
            <TechCard3D icon={<SiGithub className="text-white" />} name="GitHub" />
            <TechCard3D icon={<SiFigma className="text-[#F24E1E]" />} name="Figma" color="rgba(242, 78, 30, 0.3)" />
            <TechCard3D icon={<SiJest className="text-[#C21325]" />} name="Jest" color="rgba(194, 19, 37, 0.3)" />
            <TechCard3D icon={<SiCypress className="text-[#17202C]" />} name="Cypress" />
            <TechCard3D icon={<span className="text-lg">🎭</span>} name="Playwright" />
            <TechCard3D icon={<SiPnpm className="text-[#F69220]" />} name="pnpm" color="rgba(246, 146, 32, 0.3)" />
            <TechCard3D icon={<SiBun className="text-[#FBF0DF]" />} name="Bun" color="rgba(251, 240, 223, 0.3)" />
          </div>
        </div>

        {/* CMS & Auth */}
        <div className="mb-8">
          <CategoryHeader color="from-yellow-400 to-amber-500" label="CMS & Payments" />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
            <TechCard3D icon={<SiSanity className="text-[#F03E2F]" />} name="Sanity" color="rgba(240, 62, 47, 0.3)" />
            <TechCard3D icon={<SiContentful className="text-[#2478CC]" />} name="Contentful" color="rgba(36, 120, 204, 0.3)" />
            <TechCard3D icon={<SiStripe className="text-[#635BFF]" />} name="Stripe" color="rgba(99, 91, 255, 0.3)" />
            <TechCard3D icon={<SiClerk className="text-[#6C47FF]" />} name="Clerk" color="rgba(108, 71, 255, 0.3)" />
          </div>
        </div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-24 h-24 border border-purple-500/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-16 h-16 border border-cyan-500/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 right-20 w-2 h-2 bg-purple-500/50 rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 left-20 w-2 h-2 bg-blue-500/50 rounded-full"
        animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
    </section>
  );
}
