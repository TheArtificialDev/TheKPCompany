"use client";
import Link from 'next/link';
import { useState } from 'react';

const aiTools = [
  { name: 'Bookify', href: 'https://bookify.thekp.in' },
  { name: 'Fictional', href: 'https://fictional.thekp.in' },
  { name: 'Student Assist', href: 'https://studentassist.thekp.in' },
  { name: 'All AI Tools', href: '/ai-tools' },
];
const everydayTools = [
  { name: 'CalciVerse', href: 'https://calciverice.thekp.in' },
  { name: 'MetaMorph', href: 'https://metamorph.thekp.in' },
  { name: 'PDF Alchemy', href: 'https://pdfalchemcy.thekp.in' },
  { name: 'Originality', href: 'https://originality.thekp.in' },
  { name: 'QR Artisan', href: 'https://qrartisan.thekp.in' },
  { name: 'ChromaCapture', href: 'https://chromacapture.thekp.in' },
  { name: 'ScribeCanvas', href: 'https://scribecanvas.thekp.in' },
  { name: 'All Everyday Tools', href: '/everyday-tools' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [everydayOpen, setEverydayOpen] = useState(false);

  return (
    <header className="w-full bg-deep-space text-white py-4 px-6 flex items-center justify-between shadow-sm relative z-50">
      <div className="font-bold text-2xl tracking-tight">
        <Link href="/">The KP Company</Link>
      </div>
      <nav className="hidden md:flex gap-8 text-lg font-medium items-center">
        <div className="relative group">
          <button
            className="hover:text-electric-lime focus:text-electric-lime focus:outline-none"
            aria-haspopup="true"
            aria-expanded={aiOpen}
            onMouseEnter={() => setAiOpen(true)}
            onMouseLeave={() => setAiOpen(false)}
            onFocus={() => setAiOpen(true)}
            onBlur={() => setAiOpen(false)}
          >
            AI Tools
          </button>
          {aiOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-charcoal rounded shadow-lg py-2" onMouseEnter={() => setAiOpen(true)} onMouseLeave={() => setAiOpen(false)}>
              {aiTools.map((tool) => (
                <Link key={tool.name} href={tool.href} target={tool.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block px-4 py-2 hover:bg-electric-lime/10 hover:text-electric-lime">
                  {tool.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="relative group">
          <button
            className="hover:text-electric-lime focus:text-electric-lime focus:outline-none"
            aria-haspopup="true"
            aria-expanded={everydayOpen}
            onMouseEnter={() => setEverydayOpen(true)}
            onMouseLeave={() => setEverydayOpen(false)}
            onFocus={() => setEverydayOpen(true)}
            onBlur={() => setEverydayOpen(false)}
          >
            Everyday Tools
          </button>
          {everydayOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-charcoal rounded shadow-lg py-2" onMouseEnter={() => setEverydayOpen(true)} onMouseLeave={() => setEverydayOpen(false)}>
              {everydayTools.map((tool) => (
                <Link key={tool.name} href={tool.href} target={tool.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block px-4 py-2 hover:bg-electric-lime/10 hover:text-electric-lime">
                  {tool.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link href="/about" className="hover:text-electric-lime">About</Link>
        <Link href="/blog" className="hover:text-electric-lime">Blog</Link>
        <Link href="/contact" className="hover:text-electric-lime">Contact</Link>
      </nav>
      <button
        className="md:hidden text-white"
        aria-label="Open navigation menu"
        onClick={() => setMobileOpen((v) => !v)}
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-charcoal text-white flex flex-col py-4 px-6 md:hidden shadow-lg z-50 animate-fade-in">
          <Link href="/ai-tools" className="py-2 hover:text-electric-lime" onClick={() => setMobileOpen(false)}>AI Tools</Link>
          <div className="pl-4">
            {aiTools.slice(0, 3).map((tool) => (
              <Link key={tool.name} href={tool.href} target={tool.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block py-1 text-sm hover:text-electric-lime" onClick={() => setMobileOpen(false)}>
                {tool.name}
              </Link>
            ))}
          </div>
          <Link href="/everyday-tools" className="py-2 hover:text-electric-lime" onClick={() => setMobileOpen(false)}>Everyday Tools</Link>
          <div className="pl-4">
            {everydayTools.slice(0, 4).map((tool) => (
              <Link key={tool.name} href={tool.href} target={tool.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block py-1 text-sm hover:text-electric-lime" onClick={() => setMobileOpen(false)}>
                {tool.name}
              </Link>
            ))}
          </div>
          <Link href="/about" className="py-2 hover:text-electric-lime" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/blog" className="py-2 hover:text-electric-lime" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link href="/contact" className="py-2 hover:text-electric-lime" onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
