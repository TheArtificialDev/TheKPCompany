import { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Tool Under Maintenance | The KP Company',
  description: 'This tool is currently under maintenance. We are working hard to bring you the best experience. Please check back soon.',
  keywords: 'maintenance, under construction, coming soon, tool development',
  openGraph: {
    title: 'Tool Under Maintenance - The KP Company',
    description: 'This tool is currently under maintenance. We are working hard to bring you the best experience.',
    url: 'https://thekp.in/tools/maintenance',
    type: 'website',
    siteName: 'The KP Company',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tool Under Maintenance - The KP Company',
    description: 'This tool is currently under maintenance. Coming soon!',
  }
}

export default function MaintenancePage() {
  return (
    <div className="min-h-screen text-white relative">
      {/* Background animation matching main site */}
      <div className="fixed inset-0 bg-deep-space z-0">
        <div 
          className="absolute inset-0 opacity-20 animate-pulse"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, #00FF88 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <Link 
            href="/everyday-tools"
            className="inline-flex items-center gap-2 bg-charcoal/80 backdrop-blur-lg text-white px-4 py-2 rounded-lg border border-smoke hover:bg-charcoal hover:border-electric-lime transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            Back to Tools
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Maintenance Icon */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-electric-lime/10 rounded-full flex items-center justify-center mb-6">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Under Maintenance
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Tool Under
              <span className="block text-electric-lime">Maintenance</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-light-gray max-w-3xl mx-auto mb-8 leading-relaxed">
              We're working hard to bring you an amazing experience. This tool is currently being improved and will be available soon.
            </p>

            {/* Features Coming Soon */}
            <div className="bg-charcoal/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-electric-lime">What's Coming</h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-electric-lime/20 rounded-full flex items-center justify-center mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-electric-lime">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Enhanced Performance</h3>
                    <p className="text-light-gray text-sm">Lightning-fast processing and improved reliability.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-electric-lime/20 rounded-full flex items-center justify-center mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-electric-lime">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Better User Experience</h3>
                    <p className="text-light-gray text-sm">Intuitive interface and smoother interactions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-electric-lime/20 rounded-full flex items-center justify-center mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-electric-lime">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Advanced Features</h3>
                    <p className="text-light-gray text-sm">New capabilities and powerful functionality.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-electric-lime/20 rounded-full flex items-center justify-center mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-electric-lime">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Security Improvements</h3>
                    <p className="text-light-gray text-sm">Enhanced privacy and data protection.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/everyday-tools"
                className="inline-flex items-center justify-center gap-2 bg-electric-lime text-deep-space px-6 py-3 rounded-lg font-semibold hover:bg-electric-lime/90 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
                Browse Other Tools
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-charcoal/80 backdrop-blur-lg text-white px-6 py-3 rounded-lg border border-smoke hover:bg-charcoal hover:border-electric-lime transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
                Get Notified
              </Link>
            </div>

            {/* Status */}
            <div className="mt-8 text-sm text-light-gray">
              <p>Expected completion: <span className="text-electric-lime font-medium">Coming Soon</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
