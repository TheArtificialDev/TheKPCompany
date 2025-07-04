import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Tools - The KP Company | Frictionless Creativity',
  description: 'Explore The KP Company\'s suite of AI-powered creative tools: Bookify, Fictional, Student Assist, and more.',
  keywords: 'AI tools, Bookify, Fictional, Student Assist, creative tools, AI writing tools',
  openGraph: {
    title: 'AI Tools - The KP Company',
    description: 'Explore The KP Company\'s suite of AI-powered creative tools: Bookify, Fictional, Student Assist, and more.',
    url: 'https://thekp.in/ai-tools',
    siteName: 'The KP Company',
    type: 'website',
  },
  alternates: { canonical: 'https://thekp.in/ai-tools' },
};

const tools = [
  { name: 'Bookify', desc: 'Research smarter, write faster.', href: 'https://bookify.thekp.in' },
  { name: 'Fictional', desc: 'Build worlds, craft stories.', href: 'https://fictional.thekp.in' },
  { name: 'Student Assist', desc: 'Learn deeper, stress less.', href: 'https://studentassist.thekp.in' },
];

export default function AIToolsPage() {
  return (
    <main className="py-24 px-6 bg-deep-space text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-h1 font-bold mb-6">AI Tools</h1>
        <p className="text-body-lg text-light-gray mb-12">Our AI-powered creative tools that help you write, imagine, and learn better.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Link key={tool.name} href={tool.href} target="_blank" rel="noopener noreferrer" className="p-8 bg-charcoal rounded-lg hover:bg-smoke transition">
              <h2 className="text-h4 font-semibold mb-2">{tool.name}</h2>
              <p className="text-body text-light-gray">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
