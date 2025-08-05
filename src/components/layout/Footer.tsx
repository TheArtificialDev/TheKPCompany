"use client";
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full px-6 pb-6 mt-16 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Frosted glass container */}
        <div className="bg-white/5 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-8">
          {/* Navigation Links */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-8 text-white/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors font-medium">
                  About
                </a>
              </li>
              <li>
                <a href="/ai-tools" className="hover:text-white transition-colors font-medium">
                  AI Tools
                </a>
              </li>
              <li>
                <a href="/everyday-tools" className="hover:text-white transition-colors font-medium">
                  Everyday Tools
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors font-medium">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Direct Product Links */}
          <div className="mb-8">
            <h3 className="text-center text-white/60 text-sm font-medium mb-4">Our Products</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {/* AI Tools */}
              <div className="space-y-2">
                <h4 className="text-white/80 text-xs font-semibold mb-2">AI Tools</h4>
                <div className="space-y-1">
                  <a 
                    href="https://bookify.thekp.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-white/60 hover:text-electric-lime transition-colors text-xs"
                  >
                    Bookify
                  </a>
                  <a 
                    href="https://fictional.thekp.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-white/60 hover:text-electric-lime transition-colors text-xs"
                  >
                    Fictional
                  </a>
                  <a 
                    href="https://studentassist.thekp.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-white/60 hover:text-electric-lime transition-colors text-xs"
                  >
                    Student Assist
                  </a>
                </div>
              </div>
              
              {/* Everyday Tools Column 1 */}
              <div className="space-y-2">
                <h4 className="text-white/80 text-xs font-semibold mb-2">Utilities</h4>
                <div className="space-y-1">
                  <a 
                    href="/tools/calciverice" 
                    className="block text-white/60 hover:text-electric-lime transition-colors text-xs"
                  >
                    CalciVerse
                  </a>
                  <a 
                    href="/tools/metamorph" 
                    className="block text-white/60 hover:text-electric-lime transition-colors text-xs"
                  >
                    MetaMorph
                  </a>
                  <a 
                    href="/tools/pdfalchemcy" 
                    className="block text-white/60 hover:text-electric-lime transition-colors text-xs"
                  >
                    PDF Alchemy
                  </a>
                </div>
              </div>

              {/* Everyday Tools Column 2 */}
              <div className="space-y-2">
                <h4 className="text-white/80 text-xs font-semibold mb-2">Tools</h4>
                <div className="space-y-1">
                  <a 
                    href="https://originality.thekp.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-white/60 hover:text-electric-lime transition-colors text-xs"
                  >
                    Originality
                  </a>
                  <a 
                    href="/tools/qrartisan" 
                    className="block text-white/60 hover:text-electric-lime transition-colors text-xs"
                  >
                    QR Artisan
                  </a>
                  <a 
                    href="/tools/chromacapture" 
                    className="block text-white/60 hover:text-electric-lime transition-colors text-xs"
                  >
                    ChromaCapture
                  </a>
                </div>
              </div>

              {/* Additional Tools */}
              <div className="space-y-2">
                <h4 className="text-white/80 text-xs font-semibold mb-2">Editors</h4>
                <div className="space-y-1">
                  <a 
                    href="/tools/scribecanvas" 
                    className="block text-white/60 hover:text-electric-lime transition-colors text-xs"
                  >
                    ScribeCanvas
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://x.com/TheKP_Company" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/company/thekpcompany/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-8">
            <form 
              className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto" 
              action="#" 
              onSubmit={(e) => e.preventDefault()} 
              aria-label="Newsletter signup"
            >
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 w-full sm:w-auto px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/30 focus:border-electric-lime focus:ring-2 focus:ring-electric-lime/50 outline-none placeholder-white/60 text-sm"
              />
              <button 
                type="submit" 
                className="px-6 py-2.5 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} The KP Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
