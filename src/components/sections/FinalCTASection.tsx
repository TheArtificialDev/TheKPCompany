import Link from 'next/link';

export default function FinalCTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20">
        <h2 className="text-h2 font-semibold mb-6 text-white">
          Ready to Liberate Your Creativity?
        </h2>
        <p className="text-body-lg text-light-gray mb-12 max-w-2xl mx-auto">
          Join thousands of creators who have transformed their workflow with our AI-powered tools.
        </p>
        <Link
          href="/ai-tools"
          className="inline-block px-12 py-4 bg-electric-lime text-deep-space font-bold rounded-lg hover:bg-neon-green hover:shadow-2xl hover:shadow-electric-lime/30 transition-all duration-300 transform hover:scale-105"
        >
          Start Creating Today
        </Link>
      </div>
    </section>
  );
}
