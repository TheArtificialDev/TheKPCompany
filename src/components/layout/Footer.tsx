"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-charcoal text-light-gray py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div>
          <div className="font-bold text-white mb-2">Product Categories</div>
          <ul>
            <li><a href="/ai-tools" className="hover:text-electric-lime">AI Tools</a></li>
            <li><a href="/everyday-tools" className="hover:text-electric-lime">Everyday Tools</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-white mb-2">Company</div>
          <ul>
            <li><a href="/about" className="hover:text-electric-lime">About</a></li>
            <li><a href="/careers" className="hover:text-electric-lime">Careers</a></li>
            <li><a href="/press-kit" className="hover:text-electric-lime">Press Kit</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-white mb-2">Resources</div>
          <ul>
            <li><a href="/blog" className="hover:text-electric-lime">Blog</a></li>
            <li><a href="/docs" className="hover:text-electric-lime">Documentation</a></li>
            <li><a href="/api" className="hover:text-electric-lime">API</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-white mb-2">Legal</div>
          <ul>
            <li><a href="/privacy-policy" className="hover:text-electric-lime">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-electric-lime">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-white mb-2">Connect</div>
          <ul>
            <li><a href="https://twitter.com/thekpcompany" target="_blank" rel="noopener noreferrer" className="hover:text-electric-lime">Twitter</a></li>
            <li><a href="https://linkedin.com/company/thekpcompany" target="_blank" rel="noopener noreferrer" className="hover:text-electric-lime">LinkedIn</a></li>
            <li><a href="https://github.com/thekpcompany" target="_blank" rel="noopener noreferrer" className="hover:text-electric-lime">GitHub</a></li>
          </ul>
        </div>
      </div>
      {/* Newsletter Signup */}
      <div className="max-w-6xl mx-auto mt-8">
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4" action="#" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full sm:w-auto px-4 py-2 rounded bg-charcoal text-white border border-smoke focus:border-electric-lime focus:ring-2 focus:ring-electric-lime outline-none"
          />
          <button type="submit" className="px-6 py-2 bg-electric-lime text-deep-space font-semibold rounded hover:bg-neon-green transition">
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mt-8">
        <div className="text-center text-xs text-light-gray">
          Liberate. Create. Thrive. &copy; {new Date().getFullYear()} The KP Company
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="font-semibold">Contact</span>
          <a href="mailto:info.thekp@gmail.com" className="hover:underline">info.thekp@gmail.com</a>
          <div className="flex gap-4 mt-2">
            <a href="https://x.com/TheKP_Company" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-electric-blue transition-colors">
              {/* Twitter SVG icon */}
            </a>
            <a href="https://www.linkedin.com/company/thekpcompany/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-electric-blue transition-colors">
              {/* LinkedIn SVG icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
