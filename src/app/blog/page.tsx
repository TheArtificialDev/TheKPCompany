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
    <main className="max-w-4xl mx-auto py-24 px-6">
      <div className="text-center p-12 rounded-3xl bg-white/5 backdrop-blur-lg border-2 border-white/30">
        <h1 className="text-h1 font-bold mb-6 text-white">Creative AI Blog</h1>
        <p className="text-body-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover AI creativity tips, productivity hacks, and tool tutorials. Learn how to optimize your creative workflow with expert insights and unlock your full creative potential.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-left">
            <h3 className="text-h4 font-semibold text-electric-lime mb-3">AI & Creativity</h3>
            <p className="text-white/70 text-sm">
              Explore how AI enhances rather than replaces human creativity, with practical tips and real-world applications.
            </p>
          </div>
          
          <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-left">
            <h3 className="text-h4 font-semibold text-electric-lime mb-3">Tool Tutorials</h3>
            <p className="text-white/70 text-sm">
              Step-by-step guides to maximize your productivity with our AI tools and everyday utilities.
            </p>
          </div>
          
          <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-left">
            <h3 className="text-h4 font-semibold text-electric-lime mb-3">Workflow Optimization</h3>
            <p className="text-white/70 text-sm">
              Learn proven strategies to streamline your creative process and eliminate friction from your workflow.
            </p>
          </div>
          
          <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-left">
            <h3 className="text-h4 font-semibold text-electric-lime mb-3">Industry Insights</h3>
            <p className="text-white/70 text-sm">
              Stay updated with the latest trends in AI, creativity, and the evolving landscape of digital tools.
            </p>
          </div>
        </div>
        
        <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl">
          <div className="text-body text-white/60 mb-4">Coming Soon</div>
          <p className="text-white/80 text-sm">
            We're crafting insightful content to help you master the art of AI-assisted creativity. 
            Subscribe to our newsletter to be the first to know when we launch!
          </p>
        </div>
      </div>
    </main>
  );
}
