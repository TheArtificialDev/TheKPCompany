const values = [
  {
    icon: (
      <svg className="w-8 h-8 text-electric-lime" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 11V7a5 5 0 00-10 0v4"/><rect width="18" height="11" x="3" y="11" rx="2"/><circle cx="12" cy="16" r="2"/></svg>
    ),
    title: 'Freedom through Automation',
    desc: 'We automate the boring stuff so you can focus on what matters: creating.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-electric-lime" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3l7 4v5c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V7l7-4z"/><path d="M12 8v4l3 3"/></svg>
    ),
    title: 'Bold Resilience',
    desc: 'We build for reliability, security, and creative confidence.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-electric-lime" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 9a3 3 0 016 0v6a3 3 0 01-6 0V9z"/><path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
    ),
    title: 'Thoughtful Innovation',
    desc: 'We solve real problems for real creators, not just build features.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-electric-lime" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M9 9h6"/></svg>
    ),
    title: 'Clarity & Simplicity',
    desc: 'We believe the best tools are the ones you barely notice—because they just work.'
  },
];

export default function AboutValuesSection() {
  return (
    <section className="py-16 px-6 bg-charcoal text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-h2 font-semibold mb-10 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col items-center p-6 rounded-lg bg-smoke/60 hover:bg-electric-lime/10 transition-all duration-300">
              <div className="mb-3">{v.icon}</div>
              <h3 className="text-h4 font-medium mb-2 text-white">{v.title}</h3>
              <p className="text-body text-light-gray text-center">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
