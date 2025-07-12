import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact The KP Company - Get in Touch | AI Creative Tools Support',
  description: 'Contact The KP Company for support, partnerships, or questions about our AI-powered creative tools. We\'re here to help liberate your creativity.',
  keywords: 'contact The KP Company, support, help, customer service, partnerships, AI tools support',
  openGraph: {
    title: 'Contact The KP Company',
    description: 'Contact The KP Company for support, partnerships, or questions about our AI-powered creative tools.',
    url: 'https://thekp.in/contact',
    siteName: 'The KP Company',
    type: 'website',
  },
  alternates: { canonical: 'https://thekp.in/contact' },
};

export default function ContactPage() {
  return (
    <main className="text-white">
      {/* Hero Section with 90vh/90vw design */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-8 overflow-hidden">
        <div
          className="relative z-10 rounded-3xl bg-white/5 backdrop-blur-lg shadow-2xl flex flex-col items-center border-2 border-white/30"
          style={{
            width: '90vw',
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
          }}
        >
          <div className="w-full max-w-3xl mx-auto text-center px-6 sm:px-12">
            <h1 className="text-h1 font-bold mb-8 bg-gradient-to-r from-electric-lime to-neon-green bg-clip-text text-transparent leading-tight">
              Get in Touch
            </h1>
            <p className="text-body-lg text-white/80 mb-12 leading-relaxed">
              Ready to liberate your creativity? Have questions about our tools? 
              We&apos;d love to hear from you and help you on your creative journey.
            </p>
            
            {/* Contact Information Grid */}
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl">
                <h3 className="text-h4 font-semibold text-electric-lime mb-2">Email Us</h3>
                <a 
                  href="mailto:info.thekp@gmail.com" 
                  className="text-white/80 hover:text-electric-lime transition-colors text-lg"
                >
                  info.thekp@gmail.com
                </a>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl">
                  <h3 className="text-h4 font-semibold text-electric-lime mb-2">Follow Us</h3>
                  <div className="space-y-2">
                    <a 
                      href="https://x.com/TheKP_Company" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-white/80 hover:text-electric-lime transition-colors"
                    >
                      Twitter/X
                    </a>
                    <a 
                      href="https://linkedin.com/company/thekpcompany" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-white/80 hover:text-electric-lime transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
                
                <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl">
                  <h3 className="text-h4 font-semibold text-electric-lime mb-2">Support</h3>
                  <div className="space-y-2">
                    <div className="text-white/80 text-sm">
                      Get help with our tools
                    </div>
                    <div className="text-white/80 text-sm">
                      Feature requests & feedback
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl">
                <h3 className="text-h4 font-semibold text-electric-lime mb-2">Response Time</h3>
                <p className="text-white/80 text-sm">
                  We typically respond within 24-48 hours. For urgent matters, 
                  please mention &quot;URGENT&quot; in your subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
