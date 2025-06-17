import HeroSection from "@/components/ui/HeroSection";
import Section from "@/components/ui/Section";
// import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function BlogPage() {
  // Featured articles data
  const featuredArticles = [
    {
      id: 1,
      title: "The Power of Comic-Style Web Design",
      excerpt: "Discover how comic-style design can make your website stand out in a crowded digital landscape.",
      category: "Design",
      date: "June 10, 2025",
      image: "/placeholder-blog1.jpg" // Will be replaced with actual image
    },
    {
      id: 2,
      title: "Optimizing Website Performance for Better Conversions",
      excerpt: "Learn how website performance affects conversion rates and what you can do to improve it.",
      category: "Development",
      date: "June 5, 2025",
      image: "/placeholder-blog2.jpg" // Will be replaced with actual image
    },
    {
      id: 3,
      title: "The Psychology of Animated UI Elements",
      excerpt: "Explore how subtle animations can influence user behavior and improve engagement.",
      category: "UX Design",
      date: "May 28, 2025",
      image: "/placeholder-blog3.jpg" // Will be replaced with actual image
    }
  ];

  // Regular articles data
  const articles = [
    {
      id: 4,
      title: "Building a Brand Identity That Resonates",
      excerpt: "How to create a brand identity that connects with your target audience and stands the test of time.",
      category: "Branding",
      date: "May 20, 2025"
    },
    {
      id: 5,
      title: "The Future of Web Design: Trends to Watch",
      excerpt: "Stay ahead of the curve with these emerging web design trends that are shaping the future of the internet.",
      category: "Design",
      date: "May 15, 2025"
    },
    {
      id: 6,
      title: "Accessibility in Comic-Style Websites",
      excerpt: "How to ensure your creative design choices don't compromise accessibility for all users.",
      category: "Accessibility",
      date: "May 8, 2025"
    },
    {
      id: 7,
      title: "From Concept to Launch: Our Design Process",
      excerpt: "A behind-the-scenes look at how we take a website from initial concept to successful launch.",
      category: "Process",
      date: "May 1, 2025"
    },
    {
      id: 8,
      title: "The ROI of Investing in Quality Web Design",
      excerpt: "Numbers don't lie: How investing in professional web design pays off in the long run.",
      category: "Business",
      date: "April 25, 2025"
    },
    {
      id: 9,
      title: "Responsive Design Best Practices in 2025",
      excerpt: "Updated guidelines for creating websites that look and function perfectly across all devices.",
      category: "Development",
      date: "April 18, 2025"
    }
  ];

  // Categories
  const categories = [
    "All", "Design", "Development", "UX Design", "Branding", 
    "Accessibility", "Business", "Process"
  ];

  return (
    <>
      <HeroSection
        title="TheKPCompany Blog"
        subtitle="Insights, tutorials, and trends from our team of experts."
      />

      <Section className="bg-secondary">
        {/* Search bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full py-3 px-4 comic-border bg-white focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button 
              key={category}
              className={`px-4 py-2 comic-border bg-white hover:bg-primary hover:text-white transition-colors ${
                category === "All" ? "bg-primary text-white" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      <Section title="Featured Articles">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article 
              key={article.id}
              className="comic-border bg-white overflow-hidden"
            >
              <div className="aspect-video bg-secondary relative">
                {/* Placeholder for article image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">{article.title.split(' ')[0]}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="inline-block bg-secondary px-3 py-1 text-sm font-medium comic-border">
                    {article.category}
                  </span>
                  <span className="text-sm">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="mb-4">{article.excerpt}</p>
                <Button variant="secondary" href={`/blog/${article.id}`} className="w-full">
                  Read More
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Latest Articles" className="bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="comic-border bg-white p-6"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="inline-block bg-secondary px-3 py-1 text-sm font-medium comic-border">
                  {article.category}
                </span>
                <span className="text-sm">{article.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{article.title}</h3>
              <p className="mb-4">{article.excerpt}</p>
              <a 
                href={`/blog/${article.id}`}
                className="inline-block font-bold relative"
              >
                Read More
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-black"></span>
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <div className="comic-border bg-white p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-8">Get the latest articles, tutorials, and updates delivered straight to your inbox.</p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow py-3 px-4 comic-border bg-white focus:outline-none"
              />
              <Button variant="primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
