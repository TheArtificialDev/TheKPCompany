import { Metadata } from 'next'
import ScribeCanvas from '@/components/tools/ScribeCanvas'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'ScribeCanvas - Rich Text Editor | The KP Company',
  description: 'Intuitive rich text editor for all your writing needs. Write, format, and download in multiple formats including TXT, HTML, Markdown, RTF, and JSON.',
  keywords: 'rich text editor, writing tool, text editor, markdown editor, HTML editor, document editor, writing app',
  openGraph: {
    title: 'ScribeCanvas - Rich Text Editor',
    description: 'Intuitive rich text editor with powerful formatting options and multiple export formats.',
    url: 'https://thekp.in/tools/scribecanvas',
    type: 'website',
    siteName: 'The KP Company',
    images: [
      {
        url: 'https://thekp.in/images/tools/scribecanvas-og.jpg',
        width: 1200,
        height: 630,
        alt: 'ScribeCanvas Rich Text Editor Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScribeCanvas - Rich Text Editor',
    description: 'Intuitive rich text editor with powerful formatting and export features.',
    images: ['https://thekp.in/images/tools/scribecanvas-twitter.jpg']
  }
}

export default function ScribeCanvasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-charcoal to-smoke text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-electric-lime/10 text-electric-lime px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM4 4h16v2H4V4zm0 4h16v12H4V8z"/>
            </svg>
            Rich Text Editor
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Write with
            <span className="block text-electric-lime">Complete Freedom</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-light-gray max-w-3xl mx-auto mb-8 leading-relaxed">
            Your intuitive writing companion. Format text beautifully, add rich content, and export to any format you need. Just write, create, and share.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center text-sm text-light-gray">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 17h14V3H7v14zm7-12h5v2h-5V5zm0 3h5v2h-5V8zm0 3h5v2h-5v-2zM9 5h2v2H9V5zm0 3h2v2H9V8zm0 3h2v2H9v-2z"/>
              </svg>
              Rich Formatting
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="16,10 12,14 8,10"/>
                <line x1="12" y1="14" x2="12" y2="3"/>
              </svg>
              Multiple Formats
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Real-time Stats
            </div>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <ScribeCanvas />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-charcoal/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Writing Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                  <path d="M8 6h8M8 10h8M8 14h6"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rich Text Formatting</h3>
              <p className="text-light-gray">Bold, italic, underline, strikethrough, headings, lists, and more formatting options.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Intuitive Interface</h3>
              <p className="text-light-gray">Clean, spacious writing area that gets out of your way and lets you focus on what matters.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="16,10 12,14 8,10"/>
                  <line x1="12" y1="14" x2="12" y2="3"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Export Formats</h3>
              <p className="text-light-gray">Download as TXT, HTML, Markdown, RTF, or JSON with complete formatting preserved.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Copy & Paste</h3>
              <p className="text-light-gray">Easily copy content to clipboard or paste from other sources with formatting intact.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <path d="M7 17h14V3H7v14zm7-12h5v2h-5V5zm0 3h5v2h-5V8zm0 3h5v2h-5v-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Statistics</h3>
              <p className="text-light-gray">Live word count, character count, and estimated reading time as you write.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-light-gray">Instant formatting, no lag, no delays. Your thoughts flow directly onto the digital canvas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
