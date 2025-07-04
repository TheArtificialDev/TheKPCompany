import { Metadata } from 'next';
import { getMeta } from '@/lib/seo';
import type { Meta } from '@/types/seo';

export function generateMetadata(overrides: Partial<Meta> = {}): Metadata {
  const meta = getMeta(overrides);
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: meta.author }],
    robots: meta.robots,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
      siteName: meta.og.site_name,
      images: [meta.og.image],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [meta.twitter.image],
    },
    alternates: {
      canonical: meta.canonical,
    },
  };
}
