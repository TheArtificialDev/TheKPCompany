'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

const NavbarSimple = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scrolling for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('nav') && !target.closest('button')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Why Us', path: '/why' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-[#f8f7f3] comic-border mx-4 mt-4 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-heading font-bold">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="TheKPCompany Logo" 
              width={140} 
              height={140} 
              className="transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link 
                href={item.path}
                className="font-heading font-medium"
              >
                <span className="nav-link-zoom">
                  {item.name}
                </span>
              </Link>
            </div>
          ))}
        </nav>
        <div className="md:hidden text-black">
          <button 
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"} 
            className="p-2 comic-border comic-shadow hover:bg-gray-100 transition-all duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with CSS animations */}
      {isMenuOpen && (
        <div 
          className="md:hidden bg-[#f8f7f3] comic-border comic-shadow mx-4 mt-2 p-6 absolute left-0 right-0 animate-slideDown"
        >
          <nav className="flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="transform transition-all duration-200 hover:scale-[1.03] hover:translate-x-1 active:scale-[0.97]"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: `slideDown 0.3s ease-out forwards ${index * 50}ms`
                }}
              >
                <Link 
                  href={item.path}
                  className="font-heading font-medium py-3 px-5 block comic-border hover:bg-white transition-colors w-full flex items-center justify-between"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  <span className="text-xl">→</span>
                </Link>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavbarSimple;
