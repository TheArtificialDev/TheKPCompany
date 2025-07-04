import type { Metadata } from 'next';

import HeroSection from '@/components/sections/HeroSection';
import ValuePropsSection from '@/components/sections/ValuePropsSection';
import ToolsShowcaseSection from '@/components/sections/ToolsShowcaseSection';
import EverydayToolsGridSection from '@/components/sections/EverydayToolsGridSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export const metadata: Metadata = {
  title: 'The KP Company - AI-Powered Creative Tools | Frictionless Creativity',
  description: 'Liberate your creativity with AI-powered tools for writing, research, and productivity. Try Bookify, Fictional, Student Assist, and more everyday utilities for free.',
  keywords: 'AI creativity tools, creative productivity software, AI writing assistant, everyday utility tools, creative workflow optimization, AI-powered writing tools, free PDF tools, creative process automation',
  authors: [{ name: 'The KP Company' }],
  openGraph: {
    title: 'The KP Company - AI-Powered Creative Tools',
    description: 'Liberate your creativity with AI-powered tools for writing, research, and productivity.',
    url: 'https://thekp.in',
    siteName: 'The KP Company',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The KP Company - AI-Powered Creative Tools',
    description: 'Liberate your creativity with AI-powered tools for writing, research, and productivity.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://thekp.in',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuePropsSection />
      <ToolsShowcaseSection />
      <EverydayToolsGridSection />
      <SocialProofSection />
      <FinalCTASection />
    </>
  );
}
