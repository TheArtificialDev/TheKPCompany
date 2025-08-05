import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-charcoal to-smoke text-white flex items-center justify-center">
      <div className="max-w-md w-full mx-4 text-center">
        <div className="bg-charcoal/50 backdrop-blur-lg rounded-2xl border border-smoke p-8">
          {/* Animated 404 */}
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-electric-lime mb-2 animate-pulse">404</h1>
            <div className="w-24 h-1 bg-electric-lime mx-auto rounded-full opacity-60"></div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-light-gray mb-8">The page you're looking for doesn't exist or has been moved.</p>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-block w-full bg-electric-lime text-deep-space px-6 py-3 rounded-lg font-medium hover:bg-electric-lime/90 transition-colors"
            >
              Go Back Home
            </Link>
            
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link 
                href="/ai-tools"
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
              >
                AI Tools
              </Link>
              <Link 
                href="/everyday-tools"
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
              >
                Everyday Tools
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
