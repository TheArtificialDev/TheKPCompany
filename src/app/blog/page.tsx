import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creative AI Blog - Tips, Tutorials & Industry Insights | The KP Company',
  description: 'Discover AI creativity tips, productivity hacks, and tool tutorials. Learn how to optimize your creative workflow with expert insights.',
  keywords: 'AI blog, creative workflow, productivity, tutorials, industry insights, creative process',
  openGraph: {
    title: 'Creative AI Blog - Tips, Tutorials & Industry Insights',
    description: 'Discover AI creativity tips, productivity hacks, and tool tutorials. Learn how to optimize your creative workflow with expert insights.',
    url: 'https://thekp.in/blog',
    siteName: 'The KP Company',
    type: 'website',
  },
  alternates: { canonical: 'https://thekp.in/blog' },
};

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto py-24 px-6 text-center">
      <h1 className="text-h1 font-bold mb-6 text-white">Creative AI Blog</h1>
      <p className="text-body-lg text-light-gray mb-8">
        Discover AI creativity tips, productivity hacks, and tool tutorials. Learn how to optimize your creative workflow with expert insights.
      </p>
      <div className="text-body text-light-gray">Blog categories and posts coming soon.</div>
    </main>
  );
}
