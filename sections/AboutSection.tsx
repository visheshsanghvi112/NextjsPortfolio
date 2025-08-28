"use client";
import { motion } from 'framer-motion';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer, 
  SiPostgresql, 
  SiMongodb, 
  SiPrisma, 
  SiGit, 
  SiGithub,
  SiPnpm,
  SiBun
} from 'react-icons/si';
import { 
  HiUsers, 
  HiChartBar,
  HiLightningBolt 
} from 'react-icons/hi';
import { DiRedis } from 'react-icons/di';

export default function AboutSection() {
  return (
    <div className="min-h-screen text-white p-8 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Collaboration Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-3xl p-8 col-span-1 lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <HiUsers className="text-2xl text-blue-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Collaboration</div>
                <div className="font-medium">I prioritize client collaboration, fostering open communication</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/avatar.svg" alt="Profile" className="w-16 h-16 rounded-full border border-gray-700" />
              <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
                Book a call →
              </button>
            </div>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-3xl p-8"
          >
            <div className="text-right mb-8">
              <div className="text-xl font-medium mb-2">Passionate about cutting-edge technologies</div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <TechBadge icon={<SiTypescript />} name="TypeScript" color="blue" />
              <TechBadge icon={<SiTailwindcss />} name="Tailwind CSS" color="cyan" />
              <TechBadge icon={<SiFramer />} name="Motion" color="purple" />
              <TechBadge icon={<SiPostgresql />} name="PostgreSQL" color="blue" />
              <TechBadge icon={<SiMongodb />} name="MongoDB" color="green" />
              <TechBadge icon={<SiPrisma />} name="Prisma" color="blue" />
              <TechBadge icon={<DiRedis />} name="Zustand" color="orange" />
              <TechBadge icon={<SiPnpm />} name="pnpm" color="yellow" />
              <TechBadge icon={<SiBun />} name="Bun" color="yellow" />
              <TechBadge icon={<SiGit />} name="Git" color="red" />
              <TechBadge icon={<SiGithub />} name="GitHub" color="gray" />
            </div>
          </motion.div>

          {/* Timezone Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="mb-6">
              <div className="text-xl font-medium mb-2">I'm very flexible with time zone communications</div>
            </div>
            <div className="flex gap-2 mb-8">
              <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">UK</span>
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">India</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">USA</span>
            </div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="w-8 h-8 bg-blue-500 rounded-full mb-2"></div>
              <div className="text-sm text-gray-400">Remote</div>
              <div className="font-medium">India</div>
            </div>
          </motion.div>

          {/* Work Together Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-3xl p-8 text-center"
          >
            <div className="text-4xl mb-4">AB</div>
            <div className="text-xl font-medium mb-4">Let's work together on your next project</div>
            <div className="bg-gray-800 px-4 py-2 rounded-lg text-sm text-gray-300 mb-4">
              hello@visheshsanghvi.in
            </div>
          </motion.div>

          {/* Portfolio Showcase */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-3xl p-8"
          >
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <div className="text-sm text-gray-400 mb-2">Websites that stand out and make a difference</div>
                <div className="bg-purple-600 text-white px-3 py-1 rounded text-xs inline-block">Contact</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6">
          <ServiceCard 
            title="Design System" 
            subtitle="Consistency" 
            description="I ensure consistency across all platforms and devices."
          />
          <ServiceCard 
            title="API Gateway & Performance" 
            subtitle="Scales" 
            description="I build scalable and performant applications."
          />
          <ServiceCard 
            title="User Onboarding & Flow Design" 
            subtitle="Flow Design" 
            description="I design user-friendly onboarding flows."
          />
          <ServiceCard 
            title="Payment Architecture" 
            subtitle="Architecture" 
            description="I implement secure payment systems."
          />
          <ServiceCard 
            title="Marketing & Infrastructure" 
            subtitle="Infrastructure" 
            description="I build robust marketing infrastructure."
          />
          <ServiceCard 
            title="Design System & Guidelines" 
            subtitle="Consistency" 
            description="I maintain design system consistency."
          />
        </div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-3xl p-8 mt-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
              <HiChartBar className="text-xl text-blue-400" />
            </div>
            <div>
              <div className="text-sm text-gray-400">The Inside Scoop</div>
              <div className="font-medium">Currently building a Saas Application</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function TechBadge({ icon, name, color }: { icon: React.ReactNode; name: string; color: string }) {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-600/20 text-blue-300',
    cyan: 'bg-cyan-600/20 text-cyan-300',
    purple: 'bg-purple-600/20 text-purple-300',
    green: 'bg-green-600/20 text-green-300',
    orange: 'bg-orange-600/20 text-orange-300',
    yellow: 'bg-yellow-600/20 text-yellow-300',
    red: 'bg-red-600/20 text-red-300',
    gray: 'bg-gray-600/20 text-gray-300',
  };

  return (
    <div className={`${colorMap[color]} rounded-lg px-2 py-1 text-xs text-center hover:scale-105 transition-transform cursor-pointer`}>
      <div className="text-sm mb-1">{icon}</div>
      <div className="font-medium">{name}</div>
    </div>
  );
}

function ServiceCard({ title, subtitle, description }: { title: string; subtitle: string; description: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-6 text-center cursor-pointer"
    >
      <div className="w-12 h-12 bg-gray-800 rounded-lg mx-auto mb-3 flex items-center justify-center">
        <HiLightningBolt className="text-xl text-yellow-400" />
      </div>
      <div className="text-sm font-medium mb-1">{title}</div>
      <div className="text-xs text-gray-400 mb-2">{subtitle}</div>
      <div className="text-xs text-gray-500">{description}</div>
    </motion.div>
  );
}
