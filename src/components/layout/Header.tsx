"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ExpandableTabs } from '@/components/ui/ExpandableTabs';
import { Brain, Wrench, User, BookOpen, Mail } from 'lucide-react';

export default function Header() {
  const [showNav, setShowNav] = useState(false);
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

  // Navigation items with icons
  const navTabs = [
    { title: 'AI Tools', icon: Brain, href: '/ai-tools' },
    { title: 'Everyday Tools', icon: Wrench, href: '/everyday-tools' },
    { title: 'About', icon: User, href: '/about' },
    { title: 'Blog', icon: BookOpen, href: '/blog' },
    { title: 'Contact', icon: Mail, href: '/contact' },
  ];

  // Find active tab index
  const activeIndex = navTabs.findIndex(tab => pathname.startsWith(tab.href));

  return (
    showNav ? (
      <header
        className={
          "fixed left-1/2 top-8 transform -translate-x-1/2 z-50 transition-all duration-300 opacity-100 pointer-events-auto"
        }
        aria-hidden={!showNav}
        style={{ width: 'min(98vw, 1200px)' }}
      >
        <div className="w-full flex flex-col md:flex-row items-center justify-between md:justify-center relative gap-4">
          <div className="font-bold text-2xl tracking-tight text-white drop-shadow-lg select-none md:absolute md:left-0">
            <Link href="/">The KP Company</Link>
          </div>
          <div className="flex justify-center flex-1">
            <ExpandableTabs 
              tabs={navTabs}
              activeIndex={activeIndex >= 0 ? activeIndex : null}
            />
          </div>
        </div>
      </header>
    ) : null
  );
}
