import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic'

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
    <main className="text-white">
      {/* Hero Section with 90vh/90vw design */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-8 overflow-hidden">
        <div
          className="relative z-10 rounded-3xl bg-white/5 backdrop-blur-lg shadow-2xl flex flex-col items-center border-2 border-white/30"
          style={{
            width: '90vw',
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
          }}
        >
          <div className="w-full max-w-5xl mx-auto text-center px-6 sm:px-12">
            <h1 className="text-h1 font-bold mb-8 bg-gradient-to-r from-electric-lime to-neon-green bg-clip-text text-transparent leading-tight">
              AI Tools
            </h1>
            <p className="text-body-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Our AI-powered creative tools that help you write, imagine, and learn better. Each tool is designed to eliminate friction and amplify your creative potential.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Link 
                key={tool.name} 
                href={tool.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-8 bg-white/5 backdrop-blur-lg border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-electric-lime/50 transition-all duration-300 hover:scale-105 group"
              >
                <h2 className="text-h4 font-semibold mb-3 text-electric-lime group-hover:text-white transition-colors">{tool.name}</h2>
                <p className="text-body text-white/70 group-hover:text-white/90 transition-colors">{tool.desc}</p>
                <div className="mt-4 text-sm text-electric-lime/70 group-hover:text-electric-lime transition-colors">
                  Launch Tool →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}