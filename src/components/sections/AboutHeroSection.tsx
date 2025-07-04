export default function AboutHeroSection() {
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
        <div className="w-full max-w-4xl mx-auto text-center px-6 sm:px-12">
          <h1 className="text-h1 font-bold mb-8 bg-gradient-to-r from-electric-lime to-neon-green bg-clip-text text-transparent leading-tight">
            About The KP Company
          </h1>
          <p className="text-body-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Liberating creativity through thoughtful AI innovation. Discover our story, mission, and the values that drive us to empower creators everywhere.
          </p>
        </div>
      </div>
    </section>
  );
}
