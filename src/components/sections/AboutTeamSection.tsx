export default function AboutTeamSection() {
  return (
    <section className="py-16 px-6 bg-deep-space text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-h2 font-semibold mb-6 text-center">Meet the Team</h2>
        <p className="text-body text-light-gray text-center mb-4">
          Our passionate team of innovators, engineers, and designers is dedicated to making creativity effortless.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Team member placeholders */}
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="text-center">
              <div className="w-24 h-24 bg-smoke rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-light-gray">Photo</span>
              </div>
              <div className="text-body font-medium">Name Placeholder</div>
              <div className="text-small text-light-gray">Role Placeholder</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
