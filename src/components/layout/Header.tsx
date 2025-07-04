"use client";
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

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
  const [showNav, setShowNav] = useState(false);
  // Timers for delayed close
  const aiTimer = useRef<NodeJS.Timeout | null>(null);
  const everydayTimer = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Show nav if not on hero (e.g. on other pages)
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper functions for AI Tools dropdown
  const handleAiMouseEnter = () => {
    if (aiTimer.current) clearTimeout(aiTimer.current);
    if (everydayTimer.current) clearTimeout(everydayTimer.current);
    setAiOpen(true);
    setEverydayOpen(false); // Close other dropdown immediately
  };
  const handleAiMouseLeave = () => {
    aiTimer.current = setTimeout(() => setAiOpen(false), 200);
  };

  // Helper functions for Everyday Tools dropdown
  const handleEverydayMouseEnter = () => {
    if (everydayTimer.current) clearTimeout(everydayTimer.current);
    if (aiTimer.current) clearTimeout(aiTimer.current);
    setEverydayOpen(true);
    setAiOpen(false); // Close other dropdown immediately
  };
  const handleEverydayMouseLeave = () => {
    everydayTimer.current = setTimeout(() => setEverydayOpen(false), 200);
  };

  // Navigation items
  const navItems = [
    { name: 'AI Tools', href: '/ai-tools' },
    { name: 'Everyday Tools', href: '/everyday-tools' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    showNav ? (
      <header
        className={
          "fixed left-1/2 top-8 transform -translate-x-1/2 z-50 transition-all duration-300 opacity-100 pointer-events-auto"
        }
        aria-hidden={!showNav}
        style={{ width: 'min(96vw, 1100px)' }}
      >
        <div className="w-full flex items-center justify-between relative">
          <div className="font-bold text-2xl tracking-tight text-white drop-shadow-lg select-none">
            <Link href="/">The KP Company</Link>
          </div>
          <nav className="hidden md:flex gap-2 text-lg font-medium items-center relative px-2 py-2 bg-white/20 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/30" style={{minHeight:'60px'}}>
            {/* Frosted highlight for active tab */}
            <div
              className="absolute top-2 left-0 h-[44px] w-[120px] rounded-xl bg-white/60 shadow-lg backdrop-blur-2xl transition-all duration-300 ease-in-out z-0"
              style={{
                transform: `translateX(${(() => {
                  const idx = navItems.findIndex(item => pathname.startsWith(item.href));
                  return idx >= 0 ? idx * 124 : 0;
                })()}px)`
              }}
            />
            {navItems.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative z-10 px-5 py-2 rounded-xl transition-colors duration-200 font-semibold ${pathname.startsWith(item.href) ? 'text-deep-space' : 'text-white/90 hover:text-electric-lime'}`}
                style={{
                  background: pathname.startsWith(item.href) ? 'rgba(255,255,255,0.7)' : 'transparent',
                  boxShadow: pathname.startsWith(item.href) ? '0 2px 16px 0 rgba(255,255,255,0.15)' : undefined,
                  backdropFilter: pathname.startsWith(item.href) ? 'blur(8px)' : undefined,
                  transition: 'background 0.3s, color 0.3s',
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    ) : null
  );
}
