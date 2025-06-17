import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiMenuLine } from 'react-icons/ri';

const Navbar = () => {
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
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-[#f8f7f3] comic-border mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">        <div className="font-heading font-bold">
          <Link href="/" className="flex items-center"><Image 
              src="/images/logo.png" 
              alt="TheKPCompany Logo" 
              width={140} 
              height={140} 
              className=""
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-10">          {navItems.map((item) => (
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
          <button aria-label="Menu" className="p-2">
            <RiMenuLine size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
