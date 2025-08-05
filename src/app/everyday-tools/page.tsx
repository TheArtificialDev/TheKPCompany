import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Everyday Tools - The KP Company | Productivity & Utility Tools',
  description: 'Explore The KP Company\'s collection of everyday productivity tools: CalciVerse, MetaMorph, PDF Alchemy, Originality, QR Artisan, and more.',
  keywords: 'everyday tools, productivity tools, PDF tools, calculator, file converter, QR generator, color extractor',
  openGraph: {
    title: 'Everyday Tools - The KP Company',
    description: 'Explore The KP Company\'s collection of everyday productivity tools for creators and professionals.',
    url: 'https://thekp.in/everyday-tools',
    siteName: 'The KP Company',
    type: 'website',
  },
  alternates: { canonical: 'https://thekp.in/everyday-tools' },
};

const tools = [
  { 
    name: 'CalciVerse', 
    desc: 'Advanced scientific calculator for complex computations.', 
    href: '/tools/calciverice',
    icon: '🧮'
  },
  { 
    name: 'MetaMorph', 
    desc: 'Universal file converter for all your format needs.', 
    href: '/tools/metamorph',
    icon: '🔄'
  },
  { 
    name: 'PDF Alchemy', 
    desc: 'Powerful PDF editor and manipulation tool.', 
    href: '/tools/pdfalchemcy',
    icon: '📄'
  },
  { 
    name: 'Originality', 
    desc: 'Advanced plagiarism checker for authentic content.', 
    href: 'https://originality.thekp.in',
    icon: '🔍'
  },
  { 
    name: 'QR Artisan', 
    desc: 'Beautiful QR code generator with customization.', 
    href: '/tools/qrartisan',
    icon: '📱'
  },
  { 
    name: 'ChromaCapture', 
    desc: 'Extract colors from images with precision.', 
    href: '/tools/chromacapture',
    icon: '🎨'
  },
  { 
    name: 'ScribeCanvas', 
    desc: 'Feature-rich text editor for writers.', 
    href: '/tools/scribecanvas',
    icon: '✍️'
  },
];

export default function EverydayToolsPage() {
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
              Everyday Tools
            </h1>
            <p className="text-body-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Essential productivity utilities designed to streamline your daily workflow. Simple, powerful, and always free to use.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Link 
                key={tool.name} 
                href={tool.href} 
                target={tool.href.startsWith('http') ? "_blank" : undefined}
                rel={tool.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="p-8 bg-white/5 backdrop-blur-lg border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-electric-lime/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{tool.icon}</div>
                <h2 className="text-h4 font-semibold mb-3 text-electric-lime group-hover:text-white transition-colors">{tool.name}</h2>
                <p className="text-body text-white/70 group-hover:text-white/90 transition-colors mb-4">{tool.desc}</p>
                <div className="text-sm text-electric-lime/70 group-hover:text-electric-lime transition-colors">
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
