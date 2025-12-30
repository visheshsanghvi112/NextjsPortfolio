import { Metadata } from 'next';
import ProjectsContent from './ProjectsContent';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Explore my portfolio of full-stack projects, featuring Next.js, React, and TypeScript applications.',
    alternates: {
        canonical: '/projects',
    },
    openGraph: {
        title: 'Projects | Vishesh Sanghvi',
        description: 'Explore my portfolio of full-stack projects.',
        url: 'https://visheshsanghvi.com/projects',
    },
};

export default function Page() {
    return <ProjectsContent />;
}
