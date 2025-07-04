import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-8 overflow-hidden">
      {/* Frosted glass effect container, 90% of viewport width and height, centered */}
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
        <div className="w-full max-w-5xl mx-auto text-center px-6 sm:px-12">
          <h1 className="text-h1 font-bold mb-8 bg-gradient-to-r from-electric-lime to-neon-green bg-clip-text text-transparent leading-tight">
            Frictionless Creativity
            <br />
            Powered by AI
          </h1>
          <p className="text-body-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform ideas into reality with our suite of AI-powered tools and everyday utilities. 
            Liberate your creative potential and thrive in the digital age with tools designed for modern creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/ai-tools"
              className="px-10 py-4 bg-electric-lime text-deep-space font-bold rounded-xl hover:bg-neon-green transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-electric-lime/30"
            >
              Explore AI Tools
            </Link>
            <Link
              href="/everyday-tools"
              className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-electric-lime/50 transition-all duration-300 transform hover:scale-105"
            >
              Try Everyday Tools
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
