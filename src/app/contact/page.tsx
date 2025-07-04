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
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="p-12 rounded-3xl bg-white/5 backdrop-blur-lg border-2 border-white/30">
          <h1 className="text-h1 font-bold mb-6 text-white">Get in Touch</h1>
          <p className="text-body-lg text-white/80 mb-8 leading-relaxed">
            Ready to liberate your creativity? Have questions about our tools? 
            We'd love to hear from you and help you on your creative journey.
          </p>
          
          <div className="space-y-6 mb-8">
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
                    href="https://www.linkedin.com/company/thekpcompany/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-white/80 hover:text-electric-lime transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl">
                <h3 className="text-h4 font-semibold text-electric-lime mb-2">Response Time</h3>
                <p className="text-white/80">
                  We typically respond within 24-48 hours during business days.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-white/60">
            Liberate. Create. Thrive.
          </div>
        </div>
      </div>
    </main>
  );
}
