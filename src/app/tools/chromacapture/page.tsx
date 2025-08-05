import { Metadata } from 'next'
import ChromaCaptureExtractor from '@/components/tools/ChromaCaptureExtractor'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'ChromaCapture - AI Color Extraction Tool | The KP Company',
  description: 'Extract colors from any image instantly. Get top 5 color recommendations, hover to detect colors anywhere on your image, and zoom for precise selection. Free AI-powered color extraction tool.',
  keywords: 'color extractor, color picker, image colors, color palette, hex colors, rgb colors, color analysis, design tools',
  openGraph: {
    title: 'ChromaCapture - AI Color Extraction Tool',
    description: 'Extract colors from any image instantly. Get top 5 color recommendations, hover to detect colors anywhere on your image, and zoom for precise selection.',
    url: 'https://thekp.in/tools/chromacapture',
    type: 'website',
    siteName: 'The KP Company',
    images: [
      {
        url: 'https://thekp.in/images/tools/chromacapture-og.jpg',
        width: 1200,
        height: 630,
        alt: 'ChromaCapture Color Extraction Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChromaCapture - AI Color Extraction Tool',
    description: 'Extract colors from any image instantly. Get top 5 color recommendations and precise color detection.',
    images: ['https://thekp.in/images/tools/chromacapture-twitter.jpg']
  }
}

export default function ChromaCapturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-charcoal to-smoke text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-electric-lime/10 text-electric-lime px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Color Extraction Tool
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Extract Colors with
            <span className="block text-electric-lime">Pixel Precision</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-light-gray max-w-3xl mx-auto mb-8 leading-relaxed">
            Upload any image and instantly get the top 5 color recommendations. Hover over your image to detect colors anywhere with our intelligent color picker. Zoom in for precise color selection.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center text-sm text-light-gray">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Top 5 Color Extraction
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              Hover Color Detection
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
              </svg>
              Zoom & Pan Support
            </div>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <ChromaCaptureExtractor />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-charcoal/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Color Extraction Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Color Extraction</h3>
              <p className="text-light-gray">AI-powered algorithm identifies the most prominent and visually appealing colors from your image.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Formats</h3>
              <p className="text-light-gray">Get colors in HEX, RGB, and HSL formats. Copy any format with a single click for immediate use.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                  <circle cx="12" cy="13" r="3"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Precision Picker</h3>
              <p className="text-light-gray">Hover anywhere on your image to get the exact color at that pixel. Zoom in for ultra-precise selection.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
