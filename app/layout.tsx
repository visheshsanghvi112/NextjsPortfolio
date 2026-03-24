import LayoutContent from '../components/LayoutContent';
import { ContactModalProvider } from '../contexts/ContactModalContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import PerformanceMonitor from '../components/PerformanceMonitor';
import MobileOptimizer from '../components/MobileOptimizer';
import '../app/globals.css';
import type { Metadata } from 'next';
import JsonLd from '../components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://visheshsanghvi.com'),
  title: {
    default: 'Vishesh Sunil Sanghvi — Portfolio',
    template: '%s | Vishesh Sanghvi',
  },
  description:
    'Full‑stack developer • Data analyst • ML explorer. I build polished, futuristic web experiences with Next.js, React, and TypeScript.',
  applicationName: 'Vishesh Sanghvi Portfolio',
  authors: [{ name: 'Vishesh Sunil Sanghvi', url: 'https://visheshsanghvi.com' }],
  creator: 'Vishesh Sunil Sanghvi',
  publisher: 'Vishesh Sunil Sanghvi',
  keywords: [
    'Vishesh Sanghvi',
    'portfolio',
    'full stack developer',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'web performance',
  ],
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://visheshsanghvi.com',
    title: 'Vishesh Sunil Sanghvi — Portfolio',
    description: 'Full‑stack developer • Data analyst • ML explorer.',
    siteName: 'Vishesh Sanghvi',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Vishesh Sanghvi — Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishesh Sunil Sanghvi — Portfolio',
    description: 'Full‑stack developer • Data analyst • ML explorer.',
    images: ['/og-default.png'],
    creator: '@',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [
      { url: '/favicon-192.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#a855f7' },
    ],
  },
  other: {
    'theme-color': '#0b0b0b',
    'color-scheme': 'dark only',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className="bg-black text-white" suppressHydrationWarning>
        <ThemeProvider>
          <ContactModalProvider>
            <LayoutContent>{children}</LayoutContent>
            <PerformanceMonitor />
            <MobileOptimizer />
            <JsonLd />
          </ContactModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
