import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-0 py-0 overflow-hidden">
      {/* Frosted glass effect container, 80% of viewport width and height, centered */}
      <div
        className="relative z-10 rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl flex flex-col items-center border border-white/20"
        style={{
          width: '80vw',
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
        }}
      >
        <div className="w-full max-w-4xl mx-auto text-center px-4 sm:px-8">
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
      </div>
    </section>
  );
}
