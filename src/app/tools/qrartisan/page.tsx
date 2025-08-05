import { Metadata } from 'next'
import QRCodeGenerator from '@/components/tools/QRCodeGenerator'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'QR Artisan - Beautiful QR Code Generator | The KP Company',
  description: 'Create stunning, customizable QR codes with colors, rounded corners, and custom logos. Download in PNG or JPG format. Free QR code generator with advanced design options.',
  keywords: 'QR code generator, custom QR codes, QR code with logo, colored QR codes, QR code maker, download QR code, PNG QR code, JPG QR code',
  openGraph: {
    title: 'QR Artisan - Beautiful QR Code Generator',
    description: 'Create stunning, customizable QR codes with colors, rounded corners, and custom logos. Download in PNG or JPG format.',
    url: 'https://thekp.in/tools/qrartisan',
    type: 'website',
    siteName: 'The KP Company',
    images: [
      {
        url: 'https://thekp.in/images/tools/qrartisan-og.jpg',
        width: 1200,
        height: 630,
        alt: 'QR Artisan QR Code Generator Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QR Artisan - Beautiful QR Code Generator',
    description: 'Create stunning, customizable QR codes with colors, rounded corners, and custom logos.',
    images: ['https://thekp.in/images/tools/qrartisan-twitter.jpg']
  }
}

export default function QRCodeGeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-charcoal to-smoke text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-electric-lime/10 text-electric-lime px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 15h2v6h-2zM19 15h2v2h-2zM17 19h2v2h-2zM19 19h2v2h-2z"/>
            </svg>
            QR Code Generator
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Craft Beautiful
            <span className="block text-electric-lime">QR Codes</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-light-gray max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform any link into a stunning QR code. Customize colors, add rounded corners, embed your logo, and download in high quality. Perfect for branding and marketing.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center text-sm text-light-gray">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Custom Colors & Styles
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Logo Integration
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 10v6m0-6V4m0 6h6m-6 0H6"/>
              </svg>
              PNG & JPG Download
            </div>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <QRCodeGenerator />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-charcoal/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional QR Code Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <circle cx="13.5" cy="6.5" r=".5"/>
                  <circle cx="17.5" cy="10.5" r=".5"/>
                  <circle cx="8.5" cy="7.5" r=".5"/>
                  <circle cx="6.5" cy="11.5" r=".5"/>
                  <circle cx="12.5" cy="13.5" r=".5"/>
                  <circle cx="13.5" cy="17.5" r=".5"/>
                  <circle cx="10.5" cy="16.5" r=".5"/>
                  <circle cx="15.5" cy="14.5" r=".5"/>
                  <circle cx="9" cy="12" r="1"/>
                  <circle cx="12" cy="9" r="1"/>
                  <circle cx="15" cy="12" r="1"/>
                  <circle cx="12" cy="15" r="1"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Colors</h3>
              <p className="text-light-gray">Choose any color for your QR code foreground and background to match your brand perfectly.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <rect x="3" y="3" width="18" height="18" rx="9" ry="9"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rounded Corners</h3>
              <p className="text-light-gray">Add modern rounded corners to your QR codes for a sleek, contemporary appearance.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Logo Integration</h3>
              <p className="text-light-gray">Embed your logo or custom image in the center of the QR code while maintaining scannability.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">High Quality Download</h3>
              <p className="text-light-gray">Export your QR codes in PNG or JPG format with customizable resolution for any use case.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Preview</h3>
              <p className="text-light-gray">See your customized QR code update in real-time as you adjust colors, corners, and add logos.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                  <path d="M9 11H5a2 2 0 00-2 2v3a2 2 0 002 2h4m6-6h4a2 2 0 012 2v3a2 2 0 01-2 2h-4m-6 0a2 2 0 002 2h2a2 2 0 002-2m-6 0V9a2 2 0 012-2h2a2 2 0 012 2v8"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Universal Compatibility</h3>
              <p className="text-light-gray">Generated QR codes work with all standard QR code scanners and mobile devices.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
