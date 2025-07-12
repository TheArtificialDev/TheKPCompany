"use client";
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
    <header
      className={`fixed left-1/2 top-8 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        showNav 
          ? 'opacity-100 pointer-events-auto translate-y-0' 
          : 'opacity-0 pointer-events-none -translate-y-4'
      }`}
      aria-hidden={!showNav}
      style={{ width: 'min(98vw, 1200px)' }}
    >
      <div className="w-full flex justify-center">
        <ExpandableTabs 
          tabs={navTabs}
          activeIndex={activeIndex >= 0 ? activeIndex : null}
        />
      </div>
    </header>
  );
}
