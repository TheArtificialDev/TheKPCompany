export const dynamic = 'force-dynamic'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-space text-white p-5">
      <div className="text-center max-w-2xl w-full">
        <h1 className="text-6xl md:text-8xl font-bold text-electric-lime mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-white">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block bg-electric-lime text-deep-space px-8 py-3 rounded-lg font-semibold text-lg hover:bg-neon-green transition-colors duration-200"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
