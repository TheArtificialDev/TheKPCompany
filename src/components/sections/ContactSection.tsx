"use client";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    // Simulate async submit
    setTimeout(() => {
      setSubmitting(false);
      setStatus("Thank you! We'll be in touch soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  }

  return (
    <section className="py-24 px-6 bg-deep-space text-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-h1 font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-body-lg text-light-gray mb-10 text-center">
          Reach out for support, partnerships, or general inquiries. We usually respond within 24 hours.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit} aria-label="Contact form">
          <div>
            <label htmlFor="name" className="block text-body font-medium mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full px-4 py-3 rounded bg-charcoal text-white border border-smoke focus:border-electric-lime focus:ring-2 focus:ring-electric-lime outline-none"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-body font-medium mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full px-4 py-3 rounded bg-charcoal text-white border border-smoke focus:border-electric-lime focus:ring-2 focus:ring-electric-lime outline-none"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-body font-medium mb-1">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="w-full px-4 py-3 rounded bg-charcoal text-white border border-smoke focus:border-electric-lime focus:ring-2 focus:ring-electric-lime outline-none"
              value={form.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-body font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded bg-charcoal text-white border border-smoke focus:border-electric-lime focus:ring-2 focus:ring-electric-lime outline-none"
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded bg-electric-lime text-deep-space font-bold hover:bg-neon-green transition disabled:opacity-60"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
          {status && <div className="text-center text-electric-lime mt-4">{status}</div>}
        </form>
        <div className="mt-12 text-center text-body text-light-gray">
          <div>Email: <a href="mailto:hello@thekp.in" className="text-electric-lime underline">hello@thekp.in</a></div>
          <div>Twitter: <a href="https://twitter.com/thekpcompany" target="_blank" rel="noopener noreferrer" className="text-electric-lime underline">@thekpcompany</a></div>
          <div>LinkedIn: <a href="https://linkedin.com/company/thekpcompany" target="_blank" rel="noopener noreferrer" className="text-electric-lime underline">The KP Company</a></div>
        </div>
      </div>
    </section>
  );
}
