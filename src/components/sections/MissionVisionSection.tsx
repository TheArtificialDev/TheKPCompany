export default function MissionVisionSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border-2 border-white/30">
          <h2 className="text-h2 font-semibold text-white">Mission & Vision</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border-2 border-white/30">
            <dt className="text-h3 font-semibold mb-4 text-electric-lime">Mission</dt>
            <dd className="text-body-lg text-white/80 leading-relaxed">
              Empower people to focus on what matters by automating the mundane with smart AI tools that enhance creativity and productivity.
            </dd>
          </div>
          <div className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border-2 border-white/30">
            <dt className="text-h3 font-semibold mb-4 text-electric-lime">Vision</dt>
            <dd className="text-body-lg text-white/80 leading-relaxed">
              A world where every creative mind is unshackled from drudgery, free to innovate, express, and grow without limitations.
            </dd>
          </div>
        </div>
      </div>
    </section>
  );
}
