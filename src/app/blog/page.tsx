import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creative AI Blog - Tips, Tutorials & Industry Insights | The KP Company',
  description: 'Discover AI creativity tips, productivity hacks, and tool tutorials. Learn how to optimize your creative workflow with expert insights.',
  keywords: 'AI blog, creative workflow, productivity, tutorials, industry insights, creative process',
  openGraph: {
    title: 'Creative AI Blog - Tips, Tutorials & Industry Insights',
    description: 'Discover AI creativity tips, productivity hacks, and tool tutorials. Learn how to optimize your creative workflow with expert insights.',
    url: 'https://thekp.in/blog',
    siteName: 'The KP Company',
    type: 'website',
  },
  alternates: { canonical: 'https://thekp.in/blog' },
};

export default function BlogPage() {
  return (
    <main className="text-white">
      {/* Hero Section with 90vh/90vw design */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-8 overflow-hidden">
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
          <div className="w-full max-w-5xl mx-auto text-center px-6 sm:px-12">
            <h1 className="text-h1 font-bold mb-8 bg-gradient-to-r from-electric-lime to-neon-green bg-clip-text text-transparent leading-tight">
              Creative AI Blog
            </h1>
            <p className="text-body-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Discover AI creativity tips, productivity hacks, and tool tutorials. Learn how to optimize your creative workflow with expert insights and unlock your full creative potential.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Categories Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 backdrop-blur-lg border-2 border-white/30 rounded-xl text-left">
              <h3 className="text-h4 font-semibold text-electric-lime mb-3">AI & Creativity</h3>
              <p className="text-white/70">
                Explore how AI enhances rather than replaces human creativity, with practical tips and real-world applications.
              </p>
            </div>
            
            <div className="p-8 bg-white/5 backdrop-blur-lg border-2 border-white/30 rounded-xl text-left">
              <h3 className="text-h4 font-semibold text-electric-lime mb-3">Tool Tutorials</h3>
              <p className="text-white/70">
                Step-by-step guides to maximize your productivity with our AI tools and everyday utilities.
              </p>
            </div>
            
            <div className="p-8 bg-white/5 backdrop-blur-lg border-2 border-white/30 rounded-xl text-left">
              <h3 className="text-h4 font-semibold text-electric-lime mb-3">Workflow Optimization</h3>
              <p className="text-white/70">
                Learn proven strategies to streamline your creative process and eliminate friction from your workflow.
              </p>
            </div>
            
            <div className="p-8 bg-white/5 backdrop-blur-lg border-2 border-white/30 rounded-xl text-left">
              <h3 className="text-h4 font-semibold text-electric-lime mb-3">Industry Insights</h3>
              <p className="text-white/70">
                Stay ahead with the latest trends, tools, and techniques shaping the creative industry.
              </p>
            </div>
          </div>
          
          {/* Coming Soon Notice */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="p-8 bg-white/5 backdrop-blur-lg border-2 border-white/30 rounded-xl">
              <div className="text-h4 text-electric-lime mb-4">Coming Soon</div>
              <p className="text-white/80">
                We're crafting insightful content to help you master the art of AI-assisted creativity. 
                Subscribe to our newsletter to be the first to know when we launch!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
