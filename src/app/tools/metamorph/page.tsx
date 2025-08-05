import type { Metadata } from 'next';
import Link from 'next/link';
import { LazyMetaMorphConverter } from '@/components/tools/LazyComponents';

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'MetaMorph - Universal File Converter | The KP Company',
  description: 'Convert files between any format with MetaMorph. Support for images, documents, text files, audio, video, spreadsheets, presentations, and archives. Fast, secure, and free file conversion.',
  keywords: 'file converter, image converter, document converter, text converter, audio converter, video converter, spreadsheet converter, presentation converter, archive converter, format conversion, online file converter',
  openGraph: {
    title: 'MetaMorph - Universal File Converter',
    description: 'Convert files between any format with MetaMorph. Support for images, documents, text files, audio, video, spreadsheets, presentations, and archives.',
    url: 'https://thekp.in/tools/metamorph',
    siteName: 'The KP Company',
    type: 'website',
  },
  alternates: { canonical: 'https://thekp.in/tools/metamorph' },
};

export default function MetaMorphPage() {
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

        <div className="max-w-6xl mx-auto px-4 py-24">
          <LazyMetaMorphConverter />
        </div>
      </div>
    </div>
  )
}
