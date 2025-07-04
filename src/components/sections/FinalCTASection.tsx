import Link from 'next/link';

export default function FinalCTASection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-electric-lime to-neon-green">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-h2 font-semibold mb-6 text-deep-space">
          Ready to Liberate Your Creativity?
        </h2>
        <p className="text-body-lg text-deep-space mb-12 max-w-2xl mx-auto">
          Join thousands of creators who have transformed their workflow with our AI-powered tools.
        </p>
        <Link
          href="/ai-tools"
          className="inline-block px-12 py-4 bg-deep-space text-electric-lime font-bold rounded-lg hover:shadow-2xl hover:shadow-deep-space/30 transition-all duration-300 transform hover:scale-105"
        >
          Start Creating Today
        </Link>
      </div>
    </section>
  );
}
