import { Metadata } from 'next';
import ProjectDetailContent from './ProjectDetailContent';
import projects from '@/lib/projectsData';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Vishesh Sanghvi',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.name} | Vishesh Sanghvi`,
    description: project.description,
    openGraph: {
      title: `${project.name} | Vishesh Sanghvi`,
      description: project.description,
      images: [
        {
          url: `/projects/${project.id}.png`,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default function Page() {
  return <ProjectDetailContent />;
}
