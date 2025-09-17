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
  { name: "React", color: "bg-blue-500", textColor: "text-blue-300", bgClass: "bg-blue-500/10 border-blue-500/30", category: "Frontend" },
  { name: "Next.js", color: "bg-gray-800", textColor: "text-white", bgClass: "bg-gray-800/50 border-gray-600/30", category: "Framework" },
  { name: "TypeScript", color: "bg-blue-600", textColor: "text-blue-400", bgClass: "bg-blue-600/10 border-blue-600/30", category: "Language" },
  { name: "Tailwind CSS", color: "bg-cyan-500", textColor: "text-cyan-300", bgClass: "bg-cyan-500/10 border-cyan-500/30", category: "Styling" },
  { name: "Framer Motion", color: "bg-purple-500", textColor: "text-purple-300", bgClass: "bg-purple-500/10 border-purple-500/30", category: "Animation" },
  { name: "Zustand", color: "bg-orange-600", textColor: "text-orange-400", bgClass: "bg-orange-600/10 border-orange-600/30", category: "State" },
];

const techStackRow2 = [
  { name: "Node.js", color: "bg-green-500", textColor: "text-green-300", bgClass: "bg-green-500/10 border-green-500/30", category: "Backend" },
  { name: "Express.js", color: "bg-green-600", textColor: "text-green-400", bgClass: "bg-green-600/10 border-green-600/30", category: "API" },
  { name: "PostgreSQL", color: "bg-blue-700", textColor: "text-blue-300", bgClass: "bg-blue-700/10 border-blue-700/30", category: "Database" },
  { name: "Prisma", color: "bg-indigo-600", textColor: "text-indigo-400", bgClass: "bg-indigo-600/10 border-indigo-600/30", category: "ORM" },
  { name: "Supabase", color: "bg-emerald-500", textColor: "text-emerald-300", bgClass: "bg-emerald-500/10 border-emerald-500/30", category: "BaaS" },
  { name: "MongoDB", color: "bg-green-700", textColor: "text-green-400", bgClass: "bg-green-700/10 border-green-700/30", category: "NoSQL" },
];

const techStackRow3 = [
  { name: "Docker", color: "bg-blue-600", textColor: "text-blue-400", bgClass: "bg-blue-600/10 border-blue-600/30", category: "DevOps" },
  { name: "AWS", color: "bg-orange-500", textColor: "text-orange-300", bgClass: "bg-orange-500/10 border-orange-500/30", category: "Cloud" },
  { name: "Vercel", color: "bg-gray-800", textColor: "text-white", bgClass: "bg-gray-800/50 border-gray-600/30", category: "Deploy" },
  { name: "GitHub", color: "bg-gray-700", textColor: "text-gray-300", bgClass: "bg-gray-700/10 border-gray-700/30", category: "Version Control" },
  { name: "Figma", color: "bg-pink-500", textColor: "text-pink-300", bgClass: "bg-pink-500/10 border-pink-500/30", category: "Design" },
  { name: "VS Code", color: "bg-blue-500", textColor: "text-blue-300", bgClass: "bg-blue-500/10 border-blue-500/30", category: "IDE" },
];





const features = [
  {
    Icon: ChatBubbleIcon,
    name: "Partnership-First Approach",
    description: "I treat every project as a true partnership, ensuring your vision becomes reality through constant collaboration and feedback.",
    href: "/book",
    cta: "Schedule a discovery call →",
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
        <div className="text-center space-y-6 p-8 relative z-10">
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-sm text-blue-300">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Daily standups & progress updates</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-purple-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
              <span>Slack/Discord for instant communication</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-pink-300">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-700"></div>
              <span>Weekly demos & feedback sessions</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: Code2,
    name: "Modern Tech Stack",
    description: "I use the latest technologies to build scalable, performant applications that stand the test of time.",
    href: "#skills",
    cta: "Explore my toolkit →",
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
    name: "Global Availability",
    description: "Flexible across time zones with overlapping hours for UK, India, USA, and remote teams worldwide.",
    href: "https://calendly.com/visheshsanghvi",
    cta: "Book a time slot →",
    className: "col-span-1 md:col-span-1 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden p-2 md:p-4">
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <Globe className="opacity-70 scale-50 md:scale-75 mb-2 md:mb-4" />
          <div className="z-10 space-y-2 md:space-y-3">
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-blue-400/30 text-center">
                <div className="text-lg mb-1">🇬🇧</div>
                <div className="text-xs text-blue-300 font-medium">UK</div>
                <div className="text-xs text-gray-400">9 AM - 6 PM GMT</div>
              </div>
              <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-orange-400/30 text-center">
                <div className="text-lg mb-1">🇮🇳</div>
                <div className="text-xs text-orange-300 font-medium">India</div>
                <div className="text-xs text-gray-400">2:30 PM - 11:30 PM IST</div>
              </div>
              <div className="bg-gradient-to-r from-red-600/20 to-red-500/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-red-400/30 text-center">
                <div className="text-lg mb-1">🇺🇸</div>
                <div className="text-xs text-red-300 font-medium">USA</div>
                <div className="text-xs text-gray-400">4 AM - 1 PM EST</div>
              </div>
              <div className="bg-gradient-to-r from-green-600/20 to-green-500/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-400/30 text-center">
                <div className="text-lg mb-1">🌍</div>
                <div className="text-xs text-green-300 font-medium">Remote</div>
                <div className="text-xs text-gray-400">Flexible hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: Mail,
    name: "Ready to Start Your Project?",
    description: "Let's discuss your vision and turn it into reality. I'm excited to hear about your next big idea.",
    href: "mailto:visheshsanghvi112@gmail.com",
    cta: "Get in touch →",
    className: "col-span-1 md:col-span-2 lg:col-span-2",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-8">
          <div className="relative">
            <div className="text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              VS
            </div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          
          <div className="space-y-3">
            <div className="text-xl font-bold text-white">Ready to bring your vision to life?</div>
            <div className="text-lg text-gray-300">Let's create something extraordinary together</div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-gray-600/50">
              <div className="text-sm text-gray-400 mb-1">Email me directly</div>
              <div className="text-base text-white font-medium">visheshsanghvi112@gmail.com</div>
            </div>
            
            <div className="flex gap-3 justify-center">
              <div className="bg-green-600/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-500/30">
                <div className="text-xs text-green-300">Usually responds within 2 hours</div>
              </div>
            </div>
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