export default function AboutTeamSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border-2 border-white/30">
          <h2 className="text-h2 font-semibold mb-4 text-white">Meet the Team</h2>
          <p className="text-body text-white/80 max-w-2xl mx-auto">
            Our passionate team of innovators, engineers, and designers is dedicated to making creativity effortless.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Team member placeholders */}
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-lg border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white/60 text-sm">Photo</span>
              </div>
              <div className="text-body font-semibold text-electric-lime mb-1">Team Member</div>
              <div className="text-small text-white/70">Role Title</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
