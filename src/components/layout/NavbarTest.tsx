'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

const NavbarTest = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarVersion, setNavbarVersion] = useState<'framer' | 'simple'>('framer');

  const toggleMenu = () => {
    console.log('Menu toggled!');
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleVersion = () => {
    setNavbarVersion(prev => prev === 'framer' ? 'simple' : 'framer');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Navbar Testing Page</h1>
      <p className="mb-4">Current version: {navbarVersion === 'framer' ? 'Framer Motion' : 'CSS-only'}</p>
      <button 
        onClick={toggleVersion} 
        className="mb-8 px-4 py-2 bg-black text-white comic-border"
      >
        Switch to {navbarVersion === 'framer' ? 'CSS-only' : 'Framer Motion'} version
      </button>
      
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Hamburger Menu Test</h2>
        <div className="bg-[#f8f7f3] p-4 rounded-lg border-2 border-black">
          <div className="flex items-center justify-between">
            <div className="font-bold">Logo</div>
            <div>
              <button 
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"} 
                className="p-2 comic-border comic-shadow hover:bg-gray-100 transition-all duration-300"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
              </button>
            </div>
          </div>
          
          {isMenuOpen && (
            <div className="mt-4 animate-slideDown">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <div
                    key={item.name}
                    className="transform transition-all duration-200 hover:scale-[1.03] hover:translate-x-1"
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      animation: `slideDown 0.3s ease-out forwards ${index * 50}ms`
                    }}
                  >
                    <Link 
                      href={item.path}
                      className="font-medium py-2 px-4 block comic-border hover:bg-white transition-colors w-full flex items-center justify-between"
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
        </div>
        
        <div className="mt-4">
          <p>Status: Menu is currently {isMenuOpen ? 'open' : 'closed'}</p>
          <p className="text-sm text-gray-600 mt-2">
            Click the hamburger icon to toggle the menu. This is a simplified test 
            version of the menu to verify toggle functionality works correctly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavbarTest;
