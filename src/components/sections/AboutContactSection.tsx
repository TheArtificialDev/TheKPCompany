export default function AboutContactSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl bg-white/5 backdrop-blur-lg border-2 border-white/30">
        <h2 className="text-h2 font-semibold mb-6 text-white">Contact & Partnerships</h2>
        <p className="text-body-lg mb-6 text-white/90 leading-relaxed">
          Want to collaborate, partner, or just say hi? Reach out to us at{' '}
          <a href="mailto:info.thekp@gmail.com" className="text-electric-lime hover:text-neon-green underline transition-colors">
            info.thekp@gmail.com
          </a>
        </p>
        <p className="text-body text-white/70 leading-relaxed">
          For support, visit our{' '}
          <a href="/contact" className="text-electric-lime hover:text-neon-green underline transition-colors">
            Contact page
          </a>{' '}
          or follow us on{' '}
          <a 
            href="https://x.com/TheKP_Company" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-electric-lime hover:text-neon-green underline transition-colors"
          >
            Twitter
          </a>{' '}
          and{' '}
          <a 
            href="https://www.linkedin.com/company/thekpcompany/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-electric-lime hover:text-neon-green underline transition-colors"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}
