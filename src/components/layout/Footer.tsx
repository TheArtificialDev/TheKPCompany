import React from 'react';
import Link from 'next/link';
import { RiTwitterXFill, RiLinkedinBoxFill, RiInstagramFill, RiGithubFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-[#f8f7f3] py-12 comic-border mx-4 mb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              TheKPCompany
            </h3>
            <p className="mb-4 font-body font-normal">
              Creating beautiful digital experiences with comic-style flair.
            </p>            <div className="flex space-x-4">
              {/* Social media icons */}
              <a href="#" className="text-black hover:scale-110 transition-transform">
                <RiTwitterXFill size={20} />
              </a>
              <a href="#" className="text-black hover:scale-110 transition-transform">
                <RiLinkedinBoxFill size={20} />
              </a>
              <a href="#" className="text-black hover:scale-110 transition-transform">
                <RiInstagramFill size={20} />
              </a>
              <a href="#" className="text-black hover:scale-110 transition-transform">
                <RiGithubFill size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Pages</h3>
            <ul className="space-y-2 font-body font-normal">
              {['Home', 'Products', 'Why Us', 'About'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Resources</h3>
            <ul className="space-y-2 font-body font-normal">
              {['Blog', 'Careers', 'Contact', 'Support'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Contact Us</h3>
            <address className="not-italic font-body font-normal">
              <p className="mb-2">123 Comic Street</p>
              <p className="mb-2">Animation City, AC 12345</p>
              <p className="mb-2">hello@thekpcompany.com</p>
              <p>(123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-black mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} TheKPCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
