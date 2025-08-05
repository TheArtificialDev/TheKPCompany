import type { Metadata } from 'next';
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import AboutStorySection from '@/components/sections/AboutStorySection';
import MissionVisionSection from '@/components/sections/MissionVisionSection';
import AboutValuesSection from '@/components/sections/AboutValuesSection';
import AboutApproachSection from '@/components/sections/AboutApproachSection';
import AboutTeamSection from '@/components/sections/AboutTeamSection';
import AboutContactSection from '@/components/sections/AboutContactSection';

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'About The KP Company - Liberating Creativity Through AI Innovation',
  description: 'Learn about The KP Company\'s mission to eliminate friction from creative workflows through thoughtful AI tools and everyday utilities.',
  keywords: 'about The KP Company, AI innovation, creative workflow, company mission, micro-SaaS, core values',
  openGraph: {
    title: 'About The KP Company',
    description: 'Learn about The KP Company\'s mission to eliminate friction from creative workflows through thoughtful AI tools and everyday utilities.',
    url: 'https://thekp.in/about',
    siteName: 'The KP Company',
    type: 'website',
  },
  alternates: { canonical: 'https://thekp.in/about' },
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutStorySection />
      <MissionVisionSection />
      <AboutValuesSection />
      <AboutApproachSection />
      <AboutTeamSection />
      <AboutContactSection />
    </>
  );
}
