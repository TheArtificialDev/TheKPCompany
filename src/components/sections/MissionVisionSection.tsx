export default function MissionVisionSection() {
  return (
    <section className="py-16 px-6 bg-charcoal text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-h2 font-semibold mb-6 text-center">Mission & Vision</h2>
        <dl className="space-y-8">
          <div>
            <dt className="text-h4 font-medium">Mission</dt>
            <dd className="text-body text-light-gray">
              Empower people to focus on what matters by automating the mundane with smart AI tools.
            </dd>
          </div>
          <div>
            <dt className="text-h4 font-medium">Vision</dt>
            <dd className="text-body text-light-gray">
              A world where every creative mind is unshackled from drudgery, free to innovate, express, and grow.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
