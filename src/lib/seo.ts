// SEO configuration and helpers for The KP Company
export const defaultMeta = {
  title: 'The KP Company - AI-Powered Creative Tools | Frictionless Creativity',
  description:
    'Liberate your creativity with AI-powered tools for writing, research, and productivity. Try Bookify, Fictional, Student Assist, and more everyday utilities for free.',
  keywords:
    'AI creativity tools, creative productivity software, AI-powered writing tools, everyday utility tools, creative workflow optimization, AI writing assistant, free PDF tools, creative process automation',
  author: 'The KP Company',
  robots: 'index, follow',
  canonical: 'https://thekp.in',
  og: {
    site_name: 'The KP Company',
    type: 'website',
    image: '/og-image.png',
  },
  twitter: {
    card: 'summary_large_image',
    image: '/og-image.png',
  },
};

export function getMeta(overrides = {}) {
  return { ...defaultMeta, ...overrides };
}
