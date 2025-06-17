import HeroSection from "@/components/ui/HeroSection";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";


export default function CareersPage() {
  // Future roles
  const futureRoles = [
    {
      title: "Product Engineers",
      specialty: "AI-focused",
      description: "Build the next generation of AI tools that help users achieve more with less effort."
    },
    {
      title: "UX Designers",
      specialty: "who love clarity",
      description: "Create intuitive, frictionless interfaces that make complex processes feel simple."
    },
    {
      title: "Growth Hackers",
      specialty: "& storytellers",
      description: "Help us reach the people who need our tools the most through compelling narratives."
    },
    {
      title: "Creators & Educators",
      specialty: "who get our vibe",
      description: "Teach users how to make the most of our tools and inspire new ways of working."
    }
  ];
  return (
    <>
      <HeroSection
        title="🧑‍🚀 Careers at TheKPCompany"
        subtitle="We're Not Hiring Right Now — But That Could Change Soon."
      />

      <Section title="Our Current Status" className="bg-secondary">
        <div className="comic-border bg-white p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">What We're Building</h3>
              <p className="mb-6">
                At TheKPCompany, we're building AI tools that erase friction and empower people to get more done with less effort.
              </p>
              <div className="comic-border border-2 border-black p-6 bg-[#f8f7f3]">
                <p className="font-heading">
                  Right now, we're a one-man mission — led by our founder, Abhishek Kumar — but growth is on the horizon.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch Anyway</h3>
              <p className="mb-6">
                If you're excited by what we're building, love solving real problems with code, design, or words, and think you could add magic to this mission…
              </p>
              <div className="comic-border border-2 border-black p-6 bg-black text-white">
                <p className="text-xl font-heading mb-0">
                  📬 We'd still love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>      <Section title="Get In Touch">
        <div className="comic-border bg-[#f8f7f3] p-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center font-heading">
              Shoot us a note at <span className="underline">info.thekp@gmail.com</span>, and tell us:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="comic-border border-2 border-black p-6 bg-white text-center transform hover:-rotate-1 hover:scale-105 transition-all duration-300">
                <h4 className="text-lg font-bold mb-2">👤</h4>
                <p>Who you are</p>
              </div>
              <div className="comic-border border-2 border-black p-6 bg-white text-center transform hover:rotate-1 hover:scale-105 transition-all duration-300">
                <h4 className="text-lg font-bold mb-2">🔨</h4>
                <p>What you'd love to build</p>
              </div>
              <div className="comic-border border-2 border-black p-6 bg-white text-center transform hover:-rotate-1 hover:scale-105 transition-all duration-300">
                <h4 className="text-lg font-bold mb-2">📈</h4>
                <p>How you think TheKPCompany can grow</p>
              </div>
            </div>
            <div className="comic-border p-6 bg-white text-center">
              <p className="text-lg italic">
                We might not reply right away, but we read everything.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="✨ Future Roles May Include:" className="bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {futureRoles.map((role, index) => (
            <Card key={index} className="h-full flex flex-col">
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                <div className="inline-block bg-secondary px-3 py-1 text-sm font-medium comic-border mb-4">
                  {role.specialty}
                </div>
                <p>{role.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <div className="comic-border bg-black text-white p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Let's build something brilliant</h2>
          <p className="text-lg italic">— when the time is right.</p>
          
          <div className="mt-8 mb-4 text-center">
            <div className="inline-block transform rotate-[-2deg]">
              <div className="comic-border border-2 border-white px-6 py-3 bg-black">
                <p className="font-heading text-xl mb-0">The future is coming. Stay tuned.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
