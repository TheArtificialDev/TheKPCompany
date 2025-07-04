import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-br from-deep-space via-charcoal to-deep-space overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-h1 font-bold mb-6 bg-gradient-to-r from-electric-lime to-neon-green bg-clip-text text-transparent">
          Frictionless Creativity
          <br />
          Powered by AI
        </h1>
        <p className="text-body-lg text-light-gray mb-12 max-w-2xl mx-auto leading-relaxed">
          Transform ideas into reality with our suite of AI-powered tools and everyday utilities. 
          Liberate your creative potential and thrive in the digital age.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/ai-tools"
            className="px-8 py-4 bg-electric-lime text-deep-space font-semibold rounded-lg hover:bg-neon-green transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-electric-lime/25"
          >
            Explore AI Tools
          </Link>
          <Link
            href="/everyday-tools"
            className="px-8 py-4 bg-charcoal text-white font-semibold rounded-lg border border-electric-lime hover:bg-electric-lime hover:text-deep-space transition-all duration-200 transform hover:scale-105"
          >
            Try Everyday Tools
          </Link>
        </div>
      </div>
      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-electric-lime rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-neon-green rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-electric-blue rounded-full opacity-50 animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-electric-lime rounded-full opacity-30 animate-pulse delay-1500"></div>
      </div>
    </section>
  );
}
