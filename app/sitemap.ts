import type { MetadataRoute } from 'next';
import projects from '@/lib/projectsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://visheshsanghvi.com';
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projects/${p.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...pages, ...projectPages];
}
