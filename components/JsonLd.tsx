import { Project } from '@/lib/projectsData';

export function generatePersonSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Vishesh Sunil Sanghvi',
        url: 'https://visheshsanghvi.com',
        image: 'https://visheshsanghvi.com/og-default.png',
        sameAs: [
            'https://github.com/visheshsanghvi',
            'https://linkedin.com/in/visheshsanghvi',
            'https://twitter.com/visheshsanghvi',
        ],
        jobTitle: 'Full-Stack Developer',
        worksFor: {
            '@type': 'Organization',
            name: 'Freelance',
        },
        description: 'Full-stack developer specializing in Next.js, React, and TypeScript. Building polished, futuristic web experiences.',
    };
}

export function generateWebsiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Vishesh Sanghvi Portfolio',
        url: 'https://visheshsanghvi.com',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://visheshsanghvi.com/?q={search_term_string}',
            'query-input': 'required name=search_term_string',
        },
    };
}

export default function JsonLd() {
    const personSchema = generatePersonSchema();
    const websiteSchema = generateWebsiteSchema();

    return (
        <section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </section>
    );
}
