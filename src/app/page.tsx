import HeroSection from "@/components/ui/HeroSection";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import StarRating from "@/components/ui/StarRating";
import Testimonial from "@/components/ui/Testimonial";
import SignupForm from "@/components/ui/SignupForm";
import { RiBookLine, RiBookmarkLine, RiFileTextLine } from "react-icons/ri";

export default function Home() {
  const testimonials = [
    {
      author: "Alex Johnson",
      role: "Graduate Student",
      text: "StudyPal saved me 15+ hours of prep time for my finals. I uploaded my lecture notes and it organized everything perfectly.",
      rating: 5
    },
    {
      author: "Thomas Chen",
      role: "Software Engineer",
      text: "The minimalist design is exactly what I needed. No bloat, no clutter—just the features I actually use. First AI tool that doesn't feel like homework to learn.",
      rating: 5
    },
    {
      author: "Priya Sharma",
      role: "Content Creator",
      text: "They built me a custom hashtag generator that actually understands my niche. I told them what wasn't working about other tools, and they fixed EXACTLY that.",
      rating: 5
    },
    {
      author: "James Wilson",
      role: "High School Teacher",
      text: "I had zero time to learn complicated tech. TheKPCompany's quiz generator was ready to use in minutes—no tutorial needed. My students' engagement jumped 40%.",
      rating: 5
    },
    {
      author: "Emma Thompson",
      role: "Freelance Writer",
      text: "Love that I could customize my writing workflow without coding knowledge. They listened to my friction points and designed around them. Writer's block? Gone.",
      rating: 5
    }
  ];
  
  const moreTestimonials = [
    {
      author: "Maria Rodriguez",
      role: "Marketing Director",
      text: "I was spending 2 hours daily on emails. WriteRight cut that to 20 minutes. No complicated setup, just instant professional writing.",
      rating: 5
    },
    {
      author: "Carlos Mendez",
      role: "Small Business Owner",
      text: "Their customer response assistant saved my one-person shop. The interface is clean, simple, and I was up and running in 10 minutes. Now I can focus on actual growth.",
      rating: 5
    },
    {
      author: "Olivia Kim",
      role: "Medical Student",
      text: "After trying 5 other study tools, this is the only one that didn't overcomplicate things. The clean design helps me focus, and the flashcard system is perfect for med school info overload.",
      rating: 5
    },
    {
      author: "David Okafor",
      role: "Project Manager",
      text: "They built a custom project timeline tool that eliminated our bottlenecks. What would've taken months of development was ready in weeks. No learning curve for my team either.",
      rating: 5
    },
    {
      author: "Sophie Laurent",
      role: "PhD Researcher",
      text: "The literature review assistant they built for me changed everything. Clean interface, instant information extraction, and it works exactly how researchers think. A true time-saver.",
      rating: 5
    }
  ];
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Tools That Just Work."
        subtitle="Built for creators, students, and professionals who want to skip the struggle and get straight to results. No tutorials. No fluff. Just speed, clarity, and outcomes."
        primaryCTA={{
          text: "Explore Products",
          href: "/products"
        }}
        secondaryCTA={{
          text: "Blog & Updates",
          href: "/blog"
        }}
      />

      {/* Features Section */}
      {/* Quick Intro Section */}
      <Section className="py-16">
        <div className="comic-border bg-[#f8f7f3] p-8 max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Cut the Noise. Keep the Output.</h2>
          
          <p className="text-lg mb-6">
            When the AI boom began, we tried everything—ChatGPT, Gemini, you name it. But instead of helping, the tools became more work: too many steps, too much tinkering, and not enough results.
          </p>
          
          <p className="text-lg mb-6">
            That's when we built <strong>TheKPCompany</strong> — born from frustration, fueled by simplicity. Our mission is to create <strong>laser-focused AI tools</strong> that actually do the job, without the noise.
          </p>
          
          <p className="text-lg mb-6">
            We started with a study assistant that helped students prepare faster. Today, we're crafting a suite of AI tools for anyone who values time, focus, and a frictionless experience.
          </p>
          
          <h3 className="text-2xl font-bold mt-8 text-center">No onboarding. No learning curve. Just output.</h3>
        </div>
      </Section>

      {/* Product Highlights Carousel */}
      <Section 
        title="Product Highlights" 
        subtitle="Our powerful AI tools that transform how you work"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title={
            <span className="flex items-center">
              <RiBookLine className="text-2xl mr-2" />
              <span>BookiFy</span>
            </span>
          }>
            <p className="italic mb-2">Think beyond writer's block.</p>
            <p className="mb-4">Our AI-powered book editor revolutionizes the writing process with intelligent research assistance, contextual suggestions, and creative prompts to keep your ideas flowing.</p>
            <Button href="/products#bookify" variant="secondary">
              See in Action
            </Button>
          </Card>
          
          <Card title={
            <span className="flex items-center">
              <RiBookmarkLine className="text-2xl mr-2" />
              <span>Fictional</span>
            </span>
          }>
            <p className="italic mb-2">Where imagination meets organization.</p>
            <p className="mb-4">A state-of-the-art fiction book editor with comprehensive world-building tools, character development frameworks, and visual storyboards to craft captivating narratives.</p>
            <Button href="/products#fictional" variant="secondary">
              See in Action
            </Button>
          </Card>
          
          <Card title={
            <span className="flex items-center">
              <RiFileTextLine className="text-2xl mr-2" />
              <span>Student Assistant</span>
            </span>
          }>
            <p className="italic mb-2">Study smarter, not harder.</p>
            <p className="mb-4">The ultimate learning companion that transforms study materials. Upload your resources, and our AI identifies exactly where answers are located with page references.</p>
            <Button href="/products#student-assistant" variant="secondary">
              See in Action
            </Button>
          </Card>
        </div>
      </Section>
      
      {/* Why We're Different */}
      <Section 
        title="Why We're Different" 
        subtitle="Our tools are designed with a singular focus: getting you results."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "No Learning Curve",
              description: "Our tools work the first time, every time. No tutorials needed."
            },
            {
              title: "Built for Speed",
              description: "Get what you need in seconds, not minutes or hours."
            },
            {
              title: "Purpose-Built AI",
              description: "Each tool solves one specific problem, exceptionally well."
            }
          ].map((feature, index) => (
            <Card key={index} title={feature.title}>
              <p>{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Customer Testimonials */}
      <Section 
        title="What Our Users Say" 
        subtitle="Real people, real outcomes"
        className="py-16"
      >
        {/* First row - left to right flowing testimonials */}
        <div className="mb-12">
          <div className="testimonial-container">
            <div className="testimonial-track">
              {/* First set of testimonials */}
              <div className="testimonial-group">
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">Alex Johnson</h4>
                      <p className="text-sm">Graduate Student</p>
                    </div>
                  </div>
                  <p className="mb-2">"StudyPal saved me 15+ hours of prep time for my finals. I uploaded my lecture notes and it organized everything perfectly."</p>
                  <StarRating rating={5} className="italic" />
                </div>
                
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">Thomas Chen</h4>
                      <p className="text-sm">Software Engineer</p>
                    </div>
                  </div>
                  <p className="mb-2">"The minimalist design is exactly what I needed. No bloat, no clutter—just the features I actually use. First AI tool that doesn't feel like homework to learn."</p>
                  <StarRating rating={5} className="italic" />
                </div>
                
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">Priya Sharma</h4>
                      <p className="text-sm">Content Creator</p>
                    </div>
                  </div>
                  <p className="mb-2">"They built me a custom hashtag generator that actually understands my niche. I told them what wasn't working about other tools, and they fixed EXACTLY that."</p>
                  <div className="text-right italic">⭐⭐⭐⭐⭐</div>
                </div>
                
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">James Wilson</h4>
                      <p className="text-sm">High School Teacher</p>
                    </div>
                  </div>
                  <p className="mb-2">"I had zero time to learn complicated tech. TheKPCompany's quiz generator was ready to use in minutes—no tutorial needed. My students' engagement jumped 40%."</p>
                  <div className="text-right italic">⭐⭐⭐⭐⭐</div>
                </div>
                
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">Emma Thompson</h4>
                      <p className="text-sm">Freelance Writer</p>
                    </div>
                  </div>
                  <p className="mb-2">"Love that I could customize my writing workflow without coding knowledge. They listened to my friction points and designed around them. Writer's block? Gone."</p>
                  <div className="text-right italic">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              
              {/* Duplicate set for seamless infinite scrolling */}
              <div className="testimonial-group">
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">Alex Johnson</h4>
                      <p className="text-sm">Graduate Student</p>
                    </div>
                  </div>
                  <p className="mb-2">"StudyPal saved me 15+ hours of prep time for my finals. I uploaded my lecture notes and it organized everything perfectly."</p>
                  <StarRating rating={5} className="italic" />
                </div>
                
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">Thomas Chen</h4>
                      <p className="text-sm">Software Engineer</p>
                    </div>
                  </div>
                  <p className="mb-2">"The minimalist design is exactly what I needed. No bloat, no clutter—just the features I actually use. First AI tool that doesn't feel like homework to learn."</p>
                  <StarRating rating={5} className="italic" />
                </div>
                
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">Priya Sharma</h4>
                      <p className="text-sm">Content Creator</p>
                    </div>
                  </div>
                  <p className="mb-2">"They built me a custom hashtag generator that actually understands my niche. I told them what wasn't working about other tools, and they fixed EXACTLY that."</p>
                  <div className="text-right italic">⭐⭐⭐⭐⭐</div>
                </div>
                
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">James Wilson</h4>
                      <p className="text-sm">High School Teacher</p>
                    </div>
                  </div>
                  <p className="mb-2">"I had zero time to learn complicated tech. TheKPCompany's quiz generator was ready to use in minutes—no tutorial needed. My students' engagement jumped 40%."</p>
                  <div className="text-right italic">⭐⭐⭐⭐⭐</div>
                </div>
                
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">Emma Thompson</h4>
                      <p className="text-sm">Freelance Writer</p>
                    </div>
                  </div>
                  <p className="mb-2">"Love that I could customize my writing workflow without coding knowledge. They listened to my friction points and designed around them. Writer's block? Gone."</p>
                  <div className="text-right italic">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second row - right to left flowing testimonials */}
        <div>
          <div className="testimonial-container">
            <div className="testimonial-track-reverse">
              {/* Second set of testimonials */}
              <div className="testimonial-group">
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">Maria Rodriguez</h4>
                      <p className="text-sm">Marketing Director</p>
                    </div>
                  </div>
                  <p className="mb-2">"I was spending 2 hours daily on emails. WriteRight cut that to 20 minutes. No complicated setup, just instant professional writing."</p>
                  <div className="text-right italic">⭐⭐⭐⭐⭐</div>
                </div>
                
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">Carlos Mendez</h4>
                      <p className="text-sm">Small Business Owner</p>
                    </div>
                  </div>
                  <p className="mb-2">"Their customer response assistant saved my one-person shop. The interface is clean, simple, and I was up and running in 10 minutes. Now I can focus on actual growth."</p>
                  <div className="text-right italic">⭐⭐⭐⭐⭐</div>
                </div>
                
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">Olivia Kim</h4>
                      <p className="text-sm">Medical Student</p>
                    </div>
                  </div>
                  <p className="mb-2">"After trying 5 other study tools, this is the only one that didn't overcomplicate things. The clean design helps me focus, and the flashcard system is perfect for med school info overload."</p>
                  <div className="text-right italic">⭐⭐⭐⭐⭐</div>
                </div>
                
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">David Okafor</h4>
                      <p className="text-sm">Project Manager</p>
                    </div>
                  </div>
                  <p className="mb-2">"They built a custom project timeline tool that eliminated our bottlenecks. What would've taken months of development was ready in weeks. No learning curve for my team either."</p>
                  <div className="text-right italic">⭐⭐⭐⭐⭐</div>
                </div>
                
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">Sophie Laurent</h4>
                      <p className="text-sm">PhD Researcher</p>
                    </div>
                  </div>
                  <p className="mb-2">"The literature review assistant they built for me changed everything. Clean interface, instant information extraction, and it works exactly how researchers think. A true time-saver."</p>
                  <div className="text-right italic">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              
              {/* Duplicate set for seamless infinite scrolling */}
              <div className="testimonial-group">
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">Maria Rodriguez</h4>
                      <p className="text-sm">Marketing Director</p>
                    </div>
                  </div>
                  <p className="mb-2">"I was spending 2 hours daily on emails. WriteRight cut that to 20 minutes. No complicated setup, just instant professional writing."</p>
                  <div className="text-right italic">⭐⭐⭐⭐⭐</div>
                </div>
                
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">Carlos Mendez</h4>
                      <p className="text-sm">Small Business Owner</p>
                    </div>
                  </div>
                  <p className="mb-2">"Their customer response assistant saved my one-person shop. The interface is clean, simple, and I was up and running in 10 minutes. Now I can focus on actual growth."</p>
                  <div className="text-right italic">⭐⭐⭐⭐⭐</div>
                </div>
                
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">Olivia Kim</h4>
                      <p className="text-sm">Medical Student</p>
                    </div>
                  </div>
                  <p className="mb-2">"After trying 5 other study tools, this is the only one that didn't overcomplicate things. The clean design helps me focus, and the flashcard system is perfect for med school info overload."</p>
                  <div className="text-right italic">⭐⭐⭐⭐⭐</div>
                </div>
                
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">David Okafor</h4>
                      <p className="text-sm">Project Manager</p>
                    </div>
                  </div>
                  <p className="mb-2">"They built a custom project timeline tool that eliminated our bottlenecks. What would've taken months of development was ready in weeks. No learning curve for my team either."</p>
                  <div className="text-right italic">⭐⭐⭐⭐⭐</div>
                </div>
                
                <div className="testimonial-card comic-border bg-[#f8f7f3] p-6 w-96 flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full comic-border bg-black mr-4"></div>
                    <div>
                      <h4 className="font-bold">Sophie Laurent</h4>
                      <p className="text-sm">PhD Researcher</p>
                    </div>
                  </div>
                  <p className="mb-2">"The literature review assistant they built for me changed everything. Clean interface, instant information extraction, and it works exactly how researchers think. A true time-saver."</p>
                  <div className="text-right italic">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Newsletter/Early Access Section */}
      <Section className="py-20">
        <div className="text-center comic-border bg-[#f8f7f3] p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be the First to Try What's Next</h2>
          <p className="text-lg mb-8">Get early access to our newest AI tools and updates.</p>
          <div className="max-w-md mx-auto">
            <SignupForm />
          </div>
        </div>
      </Section>
    </>
  );
}
