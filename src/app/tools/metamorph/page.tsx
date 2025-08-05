import type { Metadata } from 'next';
import MetaMorphConverter from '@/components/tools/MetaMorphConverter';

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
    <main className="text-white min-h-screen">
      {/* Hero Section */}
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
          <div className="w-full max-w-4xl mx-auto text-center px-6 sm:px-12">
            <div className="text-6xl mb-6">🔄</div>
            <h1 className="text-h1 font-bold mb-6 bg-gradient-to-r from-electric-lime to-neon-green bg-clip-text text-transparent leading-tight">
              MetaMorph
            </h1>
            <p className="text-body-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              Universal file converter for all your format needs. Transform images, documents, text files, audio, video, spreadsheets, presentations, and more with just a few clicks.
            </p>
            
            <MetaMorphConverter />
          </div>
        </div>
      </section>
    </main>
  );
}
