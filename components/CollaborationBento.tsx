"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { World } from "@/components/ui/globe";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  Zap,
  GitBranch,
  Database,
  Brain,
  Rocket,
  Mail,
  MapPin,
  Terminal,
} from "lucide-react";

// ============================================
// SKELETON ONE - Live Code Editor Animation
// ============================================
const SkeletonOne = () => {
  const codeLines = [
    { text: "const vishesh = {", color: "text-purple-400" },
    { text: '  role: "Full-Stack Dev",', color: "text-cyan-400" },
    { text: '  passion: "Building dreams",', color: "text-pink-400" },
    { text: '  status: "Available ✓"', color: "text-green-400" },
    { text: "};", color: "text-purple-400" },
  ];

  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev < codeLines.length ? prev + 1 : 0));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20 p-4 font-mono text-sm overflow-hidden relative">
      {/* Terminal header */}
      <div className="absolute top-2 left-3 flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
      </div>

      <div className="mt-6 space-y-1">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: i < visibleLines ? 1 : 0.2, x: 0 }}
            className={cn("font-mono text-xs", line.color)}
          >
            {line.text}
          </motion.div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-purple-400 ml-1"
        />
      </div>
    </div>
  );
};

// ============================================
// SKELETON TWO - Tech Stack Orbiting Animation
// ============================================
const SkeletonTwo = () => {
  const techStack = [
    { name: "React", color: "#61DAFB", angle: 0 },
    { name: "Next.js", color: "#ffffff", angle: 60 },
    { name: "TypeScript", color: "#3178C6", angle: 120 },
    { name: "Python", color: "#3776AB", angle: 180 },
    { name: "Node.js", color: "#339933", angle: 240 },
    { name: "TailwindCSS", color: "#06B6D4", angle: 300 },
  ];

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-center relative overflow-hidden">
      {/* Center core */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 blur-sm"
      />
      <div className="absolute w-10 h-10 rounded-full bg-black flex items-center justify-center z-10">
        <Code2 className="w-5 h-5 text-white" />
      </div>

      {/* Orbiting tech icons */}
      {techStack.map((tech, i) => (
        <motion.div
          key={tech.name}
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        >
          <motion.div
            className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold border border-white/20"
            style={{
              backgroundColor: `${tech.color}20`,
              color: tech.color,
              transform: `translateX(${50 + i * 8}px)`,
            }}
            whileHover={{ scale: 1.5 }}
          >
            {tech.name.slice(0, 2)}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

// ============================================
// SKELETON THREE - GitHub Activity Graph
// ============================================
const SkeletonThree = () => {
  const [contributions, setContributions] = useState<number[]>([]);

  useEffect(() => {
    // Generate random contribution data
    const data = Array.from({ length: 52 }, () =>
      Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
    ).flat();
    setContributions(data);
  }, []);

  const getColor = (level: number) => {
    const colors = [
      "bg-gray-800",
      "bg-purple-900/50",
      "bg-purple-700/60",
      "bg-purple-500/70",
      "bg-purple-400",
    ];
    return colors[level] || colors[0];
  };

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] flex-col p-3 overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <GitBranch className="w-3 h-3 text-green-400" />
        <span className="text-[10px] text-gray-400">1,247 contributions this year</span>
      </div>
      <div className="flex-1 grid grid-cols-[repeat(26,1fr)] gap-[2px]">
        {contributions.slice(0, 182).map((level, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.005 }}
            className={cn("aspect-square rounded-[2px]", getColor(level))}
          />
        ))}
      </div>
    </div>
  );
};

// ============================================
// SKELETON FOUR - Floating Timezone Clocks (Large Card)
// ============================================
const SkeletonFour = () => {
  const [time, setTime] = useState<Date | null>(null);
  const [activeZone, setActiveZone] = useState(1);

  useEffect(() => {
    // Set initial time on client side only
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveZone((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const zones = [
    { code: "🇬🇧", name: "London", offset: 0, color: "from-blue-500 to-cyan-500" },
    { code: "🇮🇳", name: "Mumbai", offset: 5.5, color: "from-orange-500 to-pink-500" },
    { code: "🇺🇸", name: "New York", offset: -5, color: "from-purple-500 to-indigo-500" },
  ];

  const getTimeForZone = (offset: number) => {
    if (!time) {
      // Return default time during SSR/initial render
      return { hours: 12, minutes: 0, seconds: 0 };
    }
    const utc = time.getTime() + time.getTimezoneOffset() * 60000;
    const zoneTime = new Date(utc + 3600000 * offset);
    return {
      hours: zoneTime.getHours(),
      minutes: zoneTime.getMinutes(),
      seconds: zoneTime.getSeconds(),
    };
  };

  const Clock = ({ zone, index }: { zone: typeof zones[0]; index: number }) => {
    const { hours, minutes, seconds } = getTimeForZone(zone.offset);
    const isActive = index === activeZone;

    return (
      <motion.div
        animate={{
          scale: isActive ? 1.15 : 1,
          y: isActive ? -5 : 0,
        }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        {/* Clock face */}
        <motion.div
          className={cn(
            "relative w-16 h-16 rounded-full border-2 flex items-center justify-center",
            isActive ? "border-cyan-400/60" : "border-gray-600/40",
            "bg-gradient-to-br from-gray-900 to-gray-800"
          )}
          animate={{ boxShadow: isActive ? "0 0 20px rgba(6, 182, 212, 0.3)" : "none" }}
        >
          {/* Hour markers */}
          {[0, 3, 6, 9].map((h) => (
            <div
              key={h}
              className="absolute w-1 h-1 rounded-full bg-gray-500"
              style={{
                transform: `rotate(${h * 30}deg) translateY(-24px)`,
              }}
            />
          ))}

          {/* Hour hand */}
          <motion.div
            suppressHydrationWarning
            className={cn("absolute w-1 h-4 rounded-full origin-bottom", isActive ? "bg-cyan-400" : "bg-gray-400")}
            style={{
              transform: `rotate(${(hours % 12) * 30 + minutes * 0.5}deg)`,
              bottom: "50%",
            }}
          />

          {/* Minute hand */}
          <motion.div
            suppressHydrationWarning
            className={cn("absolute w-0.5 h-5 rounded-full origin-bottom", isActive ? "bg-purple-400" : "bg-gray-500")}
            style={{
              transform: `rotate(${minutes * 6}deg)`,
              bottom: "50%",
            }}
          />

          {/* Second hand */}
          <motion.div
            suppressHydrationWarning
            className="absolute w-[1px] h-6 bg-red-500 rounded-full origin-bottom"
            style={{
              transform: `rotate(${seconds * 6}deg)`,
              bottom: "50%",
            }}
          />

          {/* Center dot */}
          <div className={cn("absolute w-2 h-2 rounded-full", isActive ? "bg-cyan-400" : "bg-gray-400")} />
        </motion.div>

        {/* Label */}
        <div className="mt-2 text-center">
          <div className="text-lg">{zone.code}</div>
          <div className={cn("text-[10px] font-medium", isActive ? "text-cyan-400" : "text-gray-400")}>
            {zone.name}
          </div>
          <div className="text-[10px] text-gray-500">
            {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] flex-col relative overflow-hidden">
      {/* Header */}
      <div className="text-center z-10 pt-3 px-4">
        <p className="text-lg font-light italic text-white/90">
          I'm very flexible with
        </p>
        <p className="text-lg font-light italic bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          time zone communications
        </p>
      </div>

      {/* Clocks Container */}
      <div className="flex-1 flex items-center justify-center gap-6 md:gap-10 px-4 relative">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <motion.line
            x1="25%" y1="50%" x2="50%" y2="50%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            strokeDasharray="4 4"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.line
            x1="50%" y1="50%" x2="75%" y2="50%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            strokeDasharray="4 4"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Clocks */}
        {zones.map((zone, i) => (
          <Clock key={zone.name} zone={zone} index={i} />
        ))}
      </div>

      {/* Active indicator */}
      <motion.div
        key={activeZone}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[10px] text-gray-400">
          Available in {zones[activeZone].name}
        </span>
      </motion.div>
    </div>
  );
};

// ============================================
// SKELETON FIVE - AI/ML Neural Network
// ============================================
const SkeletonFive = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-center relative overflow-hidden">
      {/* Neural network nodes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120">
        {/* Connection lines */}
        {[0, 1, 2].map((i) =>
          [0, 1, 2, 3].map((j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={30}
              y1={30 + i * 30}
              x2={100}
              y2={15 + j * 30}
              stroke="url(#gradient)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))
        )}
        {[0, 1, 2, 3].map((i) =>
          [0, 1, 2].map((j) => (
            <motion.line
              key={`h-${i}-${j}`}
              x1={100}
              y1={15 + i * 30}
              x2={170}
              y2={30 + j * 30}
              stroke="url(#gradient)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 + i * 0.2 }}
            />
          ))
        )}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>

        {/* Input nodes */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`in-${i}`}
            cx={30}
            cy={30 + i * 30}
            r={6}
            fill="#8b5cf6"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}

        {/* Hidden layer nodes */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={`h-${i}`}
            cx={100}
            cy={15 + i * 30}
            r={5}
            fill="#ec4899"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 + i * 0.15 }}
          />
        ))}

        {/* Output nodes */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`out-${i}`}
            cx={170}
            cy={30 + i * 30}
            r={6}
            fill="#06b6d4"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1 + i * 0.2 }}
          />
        ))}
      </svg>

      {/* Label */}
      <div className="absolute bottom-2 left-3 text-[10px] text-gray-400 flex items-center gap-1">
        <Brain className="w-3 h-3 text-purple-400" />
        <span>Neural Network</span>
      </div>
    </div>
  );
};

// ============================================
// SKELETON SIX - Stats Counter
// ============================================
const SkeletonSix = () => {
  const stats = [
    { label: "Projects", value: 50, suffix: "+", color: "from-purple-500 to-pink-500" },
    { label: "Clients", value: 30, suffix: "+", color: "from-cyan-500 to-blue-500" },
    { label: "Years", value: 5, suffix: "+", color: "from-green-500 to-emerald-500" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, i) => {
      let current = 0;
      const increment = stat.value / 30;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const next = [...prev];
          next[i] = Math.floor(current);
          return next;
        });
      }, 50);
    });
  }, []);

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-center gap-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="text-center"
        >
          <div className={cn("text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent", stat.color)}>
            {counts[i]}{stat.suffix}
          </div>
          <div className="text-[10px] text-gray-400 mt-1">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

// ============================================
// SKELETON SEVEN - Quick Connect CTA
// ============================================
const SkeletonSeven = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col items-center justify-center relative overflow-hidden bg-black group"
    >
      <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
      <DottedGlowBackground
        color="#525252"
        glowColor="#d8b4fe"
        gap={15}
        speedMin={0.5}
        speedMax={2}
      />

      {/* Content */}
      <motion.div
        whileHover={{ y: -5 }}
        className="relative z-10 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-[2px] mx-auto mb-3">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">VS</span>
          </div>
        </div>
        <p className="text-white font-medium">Let's Build Together</p>
        <p className="text-gray-400 text-xs mt-1">visheshsanghvi112@gmail.com</p>

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-3 flex items-center justify-center gap-2 text-green-400 text-xs"
        >
          <span className="w-2 h-2 rounded-full bg-green-400" />
          Available for new projects
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// ============================================
// ITEMS CONFIGURATION
// ============================================
const items = [
  {
    title: "Who I Am",
    description: "Full-stack developer crafting digital experiences with clean code and creative solutions.",
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <Terminal className="h-4 w-4 text-purple-400" />,
  },
  {
    title: "Tech Arsenal",
    description: "Mastery across the modern development ecosystem.",
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <Code2 className="h-4 w-4 text-cyan-400" />,
  },
  {
    title: "Contribution Graph",
    description: "Consistently shipping quality code, every single day.",
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <GitBranch className="h-4 w-4 text-green-400" />,
  },
  {
    title: "Global Availability",
    description: "Ready to collaborate across any timezone.",
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <Sparkles className="h-4 w-4 text-cyan-400" />,
  },
  {
    title: "ML & AI Explorer",
    description: "Building intelligent systems with neural networks.",
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <Brain className="h-4 w-4 text-pink-400" />,
  },
  {
    title: "Track Record",
    description: "Years of delivering excellence.",
    header: <SkeletonSix />,
    className: "md:col-span-1",
    icon: <Rocket className="h-4 w-4 text-orange-400" />,
  },
  {
    title: "Ready to Start?",
    description: "Let's create something extraordinary.",
    header: <SkeletonSeven />,
    className: "md:col-span-2",
    icon: <Mail className="h-4 w-4 text-purple-400" />,
  },
];

// ============================================
// MAIN EXPORT
// ============================================
export function CollaborationBento() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[22rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn(item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}