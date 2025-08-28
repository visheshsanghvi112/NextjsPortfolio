import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my featured projects and case studies. Built with Next.js, React, TypeScript, and modern technologies.',
  keywords: ['portfolio', 'projects', 'Next.js', 'React', 'TypeScript', 'full stack developer', 'web development'],
  openGraph: {
    title: 'Projects | Vishesh Sanghvi',
    description: 'Explore my featured projects and case studies built with modern technologies.',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
