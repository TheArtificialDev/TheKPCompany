import { Metadata } from 'next'
import Link from 'next/link'
import { LazyCalciVerse } from '@/components/tools/LazyComponents'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'CalciVerse - Scientific Calculator | The KP Company',
  description: 'High-precision scientific calculator with 15-digit accuracy. Features trigonometric functions, logarithms, memory operations, and comprehensive calculation history.',
  keywords: 'scientific calculator, high precision calculator, trigonometric functions, logarithms, mathematical calculator, engineering calculator',
  openGraph: {
    title: 'CalciVerse - Scientific Calculator',
    description: 'High-precision scientific calculator with advanced mathematical functions and 15-digit accuracy.',
    url: 'https://thekp.in/tools/calciverice',
    type: 'website',
    siteName: 'The KP Company',
    images: [
      {
        url: 'https://thekp.in/images/tools/calciverice-og.jpg',
        width: 1200,
        height: 630,
        alt: 'CalciVerse Scientific Calculator Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CalciVerse - Scientific Calculator',
    description: 'High-precision scientific calculator with advanced mathematical functions.',
    images: ['https://thekp.in/images/tools/calciverice-twitter.jpg']
  }
}

export default function CalciVersePage() {
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

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-electric-lime/10 text-electric-lime px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
              Scientific Calculator
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Calculate with
              <span className="block text-electric-lime">Scientific Precision</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-light-gray max-w-3xl mx-auto mb-8 leading-relaxed">
              Advanced scientific calculator with 15-digit precision. Trigonometric functions, logarithms, memory operations, and comprehensive calculation history.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center text-sm text-light-gray">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                15-Digit Precision
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Scientific Functions
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                </svg>
                Calculation History
              </div>
            </div>
          </div>
        </section>

        {/* Tool Section */}
        <section className="pb-24 px-4">
          <div className="max-w-7xl mx-auto">
            <LazyCalciVerse />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-charcoal/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Advanced Calculator Features</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">High Precision</h3>
                <p className="text-light-gray">15-digit accuracy for complex calculations with automatic scientific notation for large numbers.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                    <path d="M3 3l18 18M10.584 10.587a2 2 0 002.828 2.83M21 12a9 9 0 11-6.219-8.56"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Trigonometric Functions</h3>
                <p className="text-light-gray">Complete set of trig functions with radian/degree mode switching and inverse functions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Memory Operations</h3>
                <p className="text-light-gray">Full memory functionality with store, recall, add, subtract, and clear operations.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Calculation History</h3>
                <p className="text-light-gray">Keep track of your calculations with a comprehensive history panel and quick result reuse.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                    <rect x="4" y="4" width="16" height="16" rx="2"/>
                    <rect x="9" y="9" width="6" height="6"/>
                    <path d="M9 1v6M15 1v6M9 17v6M15 17v6M1 9h6M1 15h6M17 9h6M17 15h6"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced Functions</h3>
                <p className="text-light-gray">Logarithms, exponentials, roots, powers, factorials, and mathematical constants.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Keyboard Support</h3>
                <p className="text-light-gray">Full keyboard navigation for faster calculations with intuitive key mappings.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
