import { Metadata } from 'next'
import Link from 'next/link'
import { LazyPDFAlchemy } from '@/components/tools/LazyComponents'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'PDF Alchemy - Complete PDF Toolkit | The KP Company',
  description: 'Professional PDF manipulation toolkit. Split, merge, compress, convert to images, add/remove pages, and more. All-in-one PDF solution with intuitive interface.',
  keywords: 'PDF editor, PDF split, PDF merge, PDF compress, PDF to image, PDF converter, PDF manipulation, PDF tools',
  openGraph: {
    title: 'PDF Alchemy - Complete PDF Toolkit',
    description: 'Professional PDF manipulation toolkit. Split, merge, compress, convert to images, and more PDF operations in one place.',
    url: 'https://thekp.in/tools/pdfalchemcy',
    type: 'website',
    siteName: 'The KP Company',
    images: [
      {
        url: 'https://thekp.in/images/tools/pdfalchemcy-og.jpg',
        width: 1200,
        height: 630,
        alt: 'PDF Alchemy PDF Manipulation Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF Alchemy - Complete PDF Toolkit',
    description: 'Professional PDF manipulation toolkit with split, merge, compress, and conversion features.',
    images: ['https://thekp.in/images/tools/pdfalchemcy-twitter.jpg']
  }
}

export default function PDFAlchemyPage() {
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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
            </svg>
            PDF Manipulation Toolkit
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Master Your
            <span className="block text-electric-lime">PDF Documents</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-light-gray max-w-3xl mx-auto mb-8 leading-relaxed">
            Complete PDF toolkit for professionals. Split, merge, compress, convert to images, add/remove pages, and more. Everything you need to work with PDFs efficiently.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center text-sm text-light-gray">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
              </svg>
              Split & Merge PDFs
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="16,10 12,14 8,10"/>
                <line x1="12" y1="14" x2="12" y2="3"/>
              </svg>
              Compress & Optimize
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="9" cy="9" r="2"/>
                <path d="m21 15-3.086-3.086a2 2 0 00-2.828 0L6 21"/>
              </svg>
              Convert to Images
            </div>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <LazyPDFAlchemy />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-charcoal/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional PDF Operations</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Split & Extract</h3>
              <p className="text-light-gray">Split PDFs into individual pages or extract specific page ranges with precision.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8z"/>
                  <polyline points="7.5,4.21 12,6.81 16.5,4.21"/>
                  <polyline points="7.5,19.79 7.5,14.6 3,12"/>
                  <polyline points="21,12 16.5,14.6 16.5,19.79"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Merge & Combine</h3>
              <p className="text-light-gray">Combine multiple PDFs into one document with flexible page ordering.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                  <path d="M11 8a3 3 0 1 0 0 6"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Compress & Optimize</h3>
              <p className="text-light-gray">Reduce PDF file size while maintaining quality for faster sharing and storage.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 00-2.828 0L6 21"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Convert to Images</h3>
              <p className="text-light-gray">Export PDF pages as high-quality PNG or JPG images with batch processing.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Page Management</h3>
              <p className="text-light-gray">Add, remove, reorder, and insert pages at any position with drag-and-drop interface.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Batch Processing</h3>
              <p className="text-light-gray">Process multiple PDFs simultaneously with powerful batch operations and queue management.</p>
            </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
