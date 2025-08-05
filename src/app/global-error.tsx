'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-space text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-electric-lime mb-4">500</h1>
        <h2 className="text-2xl font-semibold mb-6">Something went wrong!</h2>
        <p className="text-light-gray mb-8">An unexpected error occurred.</p>
        <button
          onClick={() => reset()}
          className="inline-block bg-electric-lime text-deep-space px-6 py-3 rounded-lg font-medium hover:bg-electric-lime/90 transition-colors mr-4"
        >
          Try again
        </button>
        <a 
          href="/" 
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
        >
          Go Back Home
        </a>
      </div>
    </div>
  )
}
