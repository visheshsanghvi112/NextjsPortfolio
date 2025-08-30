import { 
  ChatBubbleIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { 
  Mail, 
  Clock, 
  Code2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { Globe } from "@/components/magicui/globe";

const techStackRow1 = [
  { name: "React", color: "bg-blue-500", textColor: "text-blue-300", bgClass: "bg-blue-500/10 border-blue-500/30" },
  { name: "Next.js", color: "bg-gray-800", textColor: "text-white", bgClass: "bg-gray-800/50 border-gray-600/30" },
  { name: "TypeScript", color: "bg-blue-600", textColor: "text-blue-400", bgClass: "bg-blue-600/10 border-blue-600/30" },
  { name: "Tailwind CSS", color: "bg-cyan-500", textColor: "text-cyan-300", bgClass: "bg-cyan-500/10 border-cyan-500/30" },
  { name: "Framer Motion", color: "bg-purple-500", textColor: "text-purple-300", bgClass: "bg-purple-500/10 border-purple-500/30" },
  { name: "Zustand", color: "bg-orange-600", textColor: "text-orange-400", bgClass: "bg-orange-600/10 border-orange-600/30" },
  { name: "React Query", color: "bg-red-500", textColor: "text-red-300", bgClass: "bg-red-500/10 border-red-500/30" },
];

const techStackRow2 = [
  { name: "Node.js", color: "bg-green-500", textColor: "text-green-300", bgClass: "bg-green-500/10 border-green-500/30" },
  { name: "Express.js", color: "bg-green-600", textColor: "text-green-400", bgClass: "bg-green-600/10 border-green-600/30" },
  { name: "PostgreSQL", color: "bg-blue-700", textColor: "text-blue-300", bgClass: "bg-blue-700/10 border-blue-700/30" },
  { name: "MongoDB", color: "bg-green-700", textColor: "text-green-400", bgClass: "bg-green-700/10 border-green-700/30" },
  { name: "Prisma", color: "bg-indigo-600", textColor: "text-indigo-400", bgClass: "bg-indigo-600/10 border-indigo-600/30" },
  { name: "Supabase", color: "bg-emerald-500", textColor: "text-emerald-300", bgClass: "bg-emerald-500/10 border-emerald-500/30" },
  { name: "Firebase", color: "bg-yellow-500", textColor: "text-yellow-300", bgClass: "bg-yellow-500/10 border-yellow-500/30" },
];

const techStackRow3 = [
  { name: "Docker", color: "bg-blue-600", textColor: "text-blue-400", bgClass: "bg-blue-600/10 border-blue-600/30" },
  { name: "AWS", color: "bg-orange-500", textColor: "text-orange-300", bgClass: "bg-orange-500/10 border-orange-500/30" },
  { name: "Vercel", color: "bg-gray-800", textColor: "text-white", bgClass: "bg-gray-800/50 border-gray-600/30" },
  { name: "Git", color: "bg-red-600", textColor: "text-red-400", bgClass: "bg-red-600/10 border-red-600/30" },
  { name: "GitHub", color: "bg-gray-700", textColor: "text-gray-300", bgClass: "bg-gray-700/10 border-gray-700/30" },
  { name: "Figma", color: "bg-pink-500", textColor: "text-pink-300", bgClass: "bg-pink-500/10 border-pink-500/30" },
  { name: "VS Code", color: "bg-blue-500", textColor: "text-blue-300", bgClass: "bg-blue-500/10 border-blue-500/30" },
];





const features = [
  {
    Icon: ChatBubbleIcon,
    name: "Client Collaboration",
    description: "I prioritize client collaboration, fostering open communication throughout the project.",
    href: "/book",
    cta: "Book a call →",
    className: "col-span-1 md:col-span-2 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Network Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-20 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-80 animate-pulse">
            <div className="w-full h-full rounded-full border-2 border-white/20"></div>
          </div>
          <div className="absolute top-32 right-24 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-60 animate-pulse delay-300">
            <div className="w-full h-full rounded-full border-2 border-white/20"></div>
          </div>
          <div className="absolute bottom-24 left-16 w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-70 animate-pulse delay-700">
            <div className="w-full h-full rounded-full border-2 border-white/20"></div>
          </div>
          <div className="absolute bottom-32 right-20 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-50 animate-pulse delay-1000">
            <div className="w-full h-full rounded-full border-2 border-white/20"></div>
          </div>
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <line x1="20%" y1="25%" x2="80%" y2="45%" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse" />
            <line x1="80%" y1="45%" x2="25%" y2="75%" stroke="url(#gradient2)" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse delay-500" />
            <line x1="25%" y1="75%" x2="85%" y2="80%" stroke="url(#gradient3)" strokeWidth="1" strokeDasharray="5,5" className="animate-pulse delay-1000" />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-center space-y-4 p-8 relative z-10">
          <div className="text-sm text-gray-400 max-w-xs">
            Open communication • Regular updates • Collaborative approach
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: Code2,
    name: "Tech Stack",
    description: "Passionate about cutting-edge technologies and modern development tools.",
    href: "#",
    cta: "View skills",
    className: "col-span-1 md:col-span-1 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex flex-col justify-center overflow-hidden py-4">
        {/* First row - moving right */}
        <Marquee
          pauseOnHover
          className="mb-2 [--duration:25s]"
        >
          {techStackRow1.map((tech, idx) => (
            <div
              key={idx}
              className={cn(
                "relative mx-2 cursor-pointer overflow-hidden rounded-lg border px-3 py-1.5 whitespace-nowrap",
                tech.bgClass,
                "backdrop-blur-sm transform-gpu transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg"
              )}
            >
              <div className="flex items-center gap-2">
                <div className={cn("w-1.5 h-1.5 rounded-full", tech.color)} />
                <span className={cn("text-xs font-medium", tech.textColor)}>{tech.name}</span>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Second row - moving left */}
        <Marquee
          pauseOnHover
          className="mb-2 [--duration:30s] [animation-direction:reverse]"
        >
          {techStackRow2.map((tech, idx) => (
            <div
              key={idx}
              className={cn(
                "relative mx-2 cursor-pointer overflow-hidden rounded-lg border px-3 py-1.5 whitespace-nowrap",
                tech.bgClass,
                "backdrop-blur-sm transform-gpu transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg"
              )}
            >
              <div className="flex items-center gap-2">
                <div className={cn("w-1.5 h-1.5 rounded-full", tech.color)} />
                <span className={cn("text-xs font-medium", tech.textColor)}>{tech.name}</span>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Third row - moving right */}
        <Marquee
          pauseOnHover
          className="[--duration:35s]"
        >
          {techStackRow3.map((tech, idx) => (
            <div
              key={idx}
              className={cn(
                "relative mx-2 cursor-pointer overflow-hidden rounded-lg border px-3 py-1.5 whitespace-nowrap",
                tech.bgClass,
                "backdrop-blur-sm transform-gpu transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg"
              )}
            >
              <div className="flex items-center gap-2">
                <div className={cn("w-1.5 h-1.5 rounded-full", tech.color)} />
                <span className={cn("text-xs font-medium", tech.textColor)}>{tech.name}</span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    ),
  },
  {
    Icon: Clock,
    name: "I'm very flexible with time zone communications",
    description: "Available across UK, India, USA, and remote work.",
    href: "#",
    cta: "Schedule call",
    className: "col-span-1 md:col-span-1 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden p-2 md:p-4">
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <Globe className="opacity-70 scale-50 md:scale-75 mb-2 md:mb-4" />
          <div className="z-10 space-y-2 md:space-y-3">
            <div className="flex gap-1 md:gap-2 justify-center flex-wrap">
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 md:py-1.5 border border-gray-600/50 text-xs">
                <span className="text-gray-200">🇬🇧 UK</span>
              </div>
              <div className="bg-blue-600/90 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 md:py-1.5 border border-blue-400/50 text-xs">
                <span className="text-white">🇮🇳 India</span>
              </div>
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 md:py-1.5 border border-gray-600/50 text-xs">
                <span className="text-gray-200">🇺🇸 USA</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-full px-3 md:px-4 py-1 md:py-1.5 border border-gray-600/50 text-xs inline-block">
                <span className="text-blue-400 font-medium">🌍 Remote Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: Mail,
    name: "Let's Work Together",
    description: "Ready to collaborate on your next project. Get in touch to discuss your ideas.",
    href: "mailto:visheshsanghvi112@gmail.com",
    cta: "Send email",
    className: "col-span-1 md:col-span-2 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            VS
          </div>
          <div className="space-y-2">
            <div className="text-lg font-semibold text-white">Let's work together</div>
            <div className="text-lg font-semibold text-white">on your next project</div>
          </div>
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700/50">
            <div className="text-sm text-gray-300">visheshsanghvi112@gmail.com</div>
          </div>
        </div>
      </div>
    ),
  },
];

export function CollaborationBento() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}