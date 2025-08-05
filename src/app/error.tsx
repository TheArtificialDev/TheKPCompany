'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Page error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-space text-white p-5">
      <div className="text-center max-w-2xl w-full">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-electric-lime mb-4">
            Oops!
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-white">
            Something went wrong
          </h2>
        </div>
        
        <p className="text-light-gray mb-8 text-lg leading-relaxed">
          We apologize for the inconvenience. An unexpected error has occurred. 
          Please try again or return to the homepage.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => reset()}
            className="bg-electric-lime text-deep-space px-8 py-3 rounded-lg font-semibold text-lg hover:bg-neon-green transition-colors duration-200"
          >
            Try again
          </button>
          
          <a
            href="/"
            className="bg-charcoal text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-smoke transition-colors duration-200"
          >
            Go home
          </a>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left bg-charcoal p-6 rounded-lg border border-smoke">
            <summary className="cursor-pointer font-semibold mb-2 text-electric-lime">
              Error Details (Development)
            </summary>
            <pre className="text-sm text-red-400 overflow-auto whitespace-pre-wrap break-words">
              {error.message}
              {error.stack && '\n\n' + error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}
