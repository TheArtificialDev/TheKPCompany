export default function AboutContactSection() {
  return (
    <section className="py-16 px-6 bg-charcoal text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-h2 font-semibold mb-6">Contact & Partnerships</h2>
        <p className="text-body-lg mb-4">
          Want to collaborate, partner, or just say hi? Reach out to us at <a href="mailto:hello@thekp.in" className="text-electric-lime underline">hello@thekp.in</a>.
        </p>
        <p className="text-body text-light-gray">
          For support, visit our <a href="/contact" className="text-electric-lime underline">Contact page</a> or follow us on <a href="https://twitter.com/thekpcompany" target="_blank" rel="noopener noreferrer" className="text-electric-lime underline">Twitter</a> and <a href="https://linkedin.com/company/thekpcompany" target="_blank" rel="noopener noreferrer" className="text-electric-lime underline">LinkedIn</a>.
        </p>
      </div>
    </section>
  );
}
