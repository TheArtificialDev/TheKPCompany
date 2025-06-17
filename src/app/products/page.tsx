import HeroSection from "@/components/ui/HeroSection";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { 
  RiBookLine, 
  RiBookmarkLine, 
  RiFileTextLine, 
  RiFileTransferLine, 
  RiScissorsCutLine, 
  RiSearch2Line, 
  RiQrCodeLine, 
  RiPaletteLine, 
  RiFileEditLine, 
  RiCalculatorLine 
} from "react-icons/ri";


export default function ProductsPage() {
  // Primary AI products data
  const primaryProducts = [
    { 
      id: "bookify", 
      title: "BookiFy", 
      icon: <RiBookLine className="text-3xl mb-4" />,
      tagline: "Think beyond writer's block.",
      description: "Our AI-powered book editor revolutionizes the writing process with intelligent research assistance, contextual suggestions, and creative prompts to keep your ideas flowing. Never stare at a blank page again.",
      features: [
        "Real-time AI-powered writing suggestions that adapt to your unique style",
        "Integrated research assistant that finds and cites sources with academic precision",
        "Smart editing tools that enhance clarity and flow while preserving your voice",
        "Genre-specific templates and guidance from literary experts",
        "Seamless cloud syncing across all your devices with offline capability"
      ],
      callToAction: "Transform your writing process",
      marketingText: "BookiFy doesn't just help you write—it reimagines the entire creative process. Our AI understands context, narrative structure, and your unique voice, providing suggestions that feel like they came from you on your best day. Whether you're crafting your first novel or your tenth research paper, BookiFy adapts to your needs, learning your preferences and evolving alongside your skills."
    },
    { 
      id: "fictional", 
      title: "Fictional", 
      icon: <RiBookmarkLine className="text-3xl mb-4" />,
      tagline: "Where imagination meets organization.",
      description: "A state-of-the-art fiction book editor built specifically for creative minds. With comprehensive world-building tools, character development frameworks, and visual storyboards, Fictional helps you craft captivating narratives with depth and consistency.",
      features: [
        "Interactive world-building canvas with relationship mapping and conflict visualization",
        "Character profile templates with psychological trait suggestions based on your story",
        "Timeline visualization to prevent plot inconsistencies and manage complex narratives",
        "Mood and tone analysis to maintain narrative voice throughout your manuscript",
        "Integrated reference library for historical and cultural accuracy with one-click citation"
      ],
      callToAction: "Craft your masterpiece",
      marketingText: "Fictional is the only tool designed from the ground up for the unique challenges fiction writers face. Stop juggling dozens of documents, spreadsheets, and sticky notes. Our world-building engine helps you track characters, locations, plot threads, and timelines in one intuitive interface, eliminating continuity errors and letting you focus on what matters most—your story. Used by published authors and aspiring novelists alike, Fictional brings order to the creative chaos."
    },
    { 
      id: "student-assistant", 
      title: "Student Assistant", 
      icon: <RiFileTextLine className="text-3xl mb-4" />,
      tagline: "Study smarter, not harder.",
      description: "The ultimate learning companion that transforms how students interact with study materials. Upload your lectures, textbooks, and question banks, and our AI identifies exactly where answers are located in your materials, complete with page references and highlighted passages.",
      features: [
        "Smart content indexing of PDFs, presentations, and documents with 99.8% accuracy",
        "Question-answer matching with exact page references and context highlighting",
        "Automatic generation of study notes from uploaded materials using AI summarization",
        "Customizable flashcard creation from key concepts with spaced repetition algorithms",
        "Progress tracking and performance analytics to focus on areas needing improvement"
      ],
      callToAction: "Ace your next exam",
      marketingText: "Student Assistant doesn't replace studying—it revolutionizes it. By creating a searchable knowledge base from your course materials, it becomes your personal tutor that knows exactly where to find every answer. No more flipping through hundreds of pages or rewatching entire lectures. Just ask a question, and get directed to the exact paragraph in your textbook or minute mark in your lecture recording. Used by students from high school to post-graduate levels, Student Assistant adapts to any subject and any learning style."
    },
  ];
  
  // Utility tools data
  const utilityTools = [
    { 
      id: "calciVerse",
      title: "CalciVerse", 
      icon: <RiCalculatorLine className="text-xl" />,
      description: "High-precision unit converter and scientific calculator with support for complex equations, physics formulas, and dimensional analysis—all in a clean, intuitive interface."
    },
    { 
      id: "metamorph",
      title: "Metamorph", 
      icon: <RiFileTransferLine className="text-xl" />,
      description: "Transform any file format to another with perfect fidelity. Support for documents, images, audio, video, and specialized formats with batch processing capabilities."
    },
    { 
      id: "pdfAlchemy",
      title: "PDFAlchemy", 
      icon: <RiScissorsCutLine className="text-xl" />,
      description: "Complete PDF toolkit for merging, splitting, reordering, and annotating documents with precision. Includes OCR, electronic signatures, and form field creation."
    },
    { 
      id: "originality",
      title: "Originality", 
      icon: <RiSearch2Line className="text-xl" />,
      description: "Advanced plagiarism detection for web content, academic papers, and creative writing with source attribution and paraphrasing suggestions for unique content."
    },
    { 
      id: "qrArtisan",
      title: "QR Artisan", 
      icon: <RiQrCodeLine className="text-xl" />,
      description: "Generate custom QR codes with your brand colors, logos, and unique designs that stand out while maintaining perfect scannability and error correction."
    },
    { 
      id: "chromaCapture",
      title: "ChromaCapture", 
      icon: <RiPaletteLine className="text-xl" />,
      description: "Extract exact color codes from any image with our precision color picker and palette generator. Create harmonious color schemes for your design projects instantly."
    },
    { 
      id: "scribeCanvas",
      title: "ScribeCanvas", 
      icon: <RiFileEditLine className="text-xl" />,
      description: "Feature-rich online text editor with formatting, collaboration, and export capabilities. Includes version history, commenting, and multi-format publishing options."
    }
  ];

  return (
    <>      <HeroSection
        title="Simple Tools, Remarkable Results"
        subtitle="Laser-focused solutions that solve real problems without the fluff. No learning curve, no complexity - just results."
        primaryCTA={{
          text: "Explore AI Tools",
          href: "#primary-tools"
        }}
        secondaryCTA={{
          text: "Utility Tools",
          href: "#utility-tools"
        }}
      />

      <Section 
        title="Tools That Just Work" 
        subtitle="We build AI-powered solutions that eliminate friction, not add to it."
      >
        <div className="comic-border bg-[#f8f7f3] p-8 mb-12">
          <p className="text-lg mb-4">
            At TheKPCompany, we don't chase trends or add features for the sake of it. We build focused, task-specific tools that solve one problem exceptionally well. Our products are designed with a singular goal: to help you get more done, faster, with less effort.
          </p>
          <p className="text-lg">
            Each tool undergoes rigorous testing to ensure it truly eliminates friction points rather than creating new ones. We believe software should feel invisible—it should just work, letting you focus on what matters. That's our promise with every product we create.
          </p>
        </div>
      </Section><Section id="primary-tools" title="Our Primary AI Tools">
        {/* Primary AI Products */}
        <div className="space-y-16">
          {primaryProducts.map((product) => (
            <div 
              key={product.id} 
              id={product.id}
              className="comic-border comic-shadow bg-[#f8f7f3] p-8 transition-all hover:translate-y-[-5px]"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <div className="flex items-center mb-4">
                    {product.icon}
                    <h3 className="text-3xl font-bold">{product.title}</h3>
                  </div>
                  <p className="text-xl italic mb-4">{product.tagline}</p>
                  <p className="text-lg mb-6">{product.description}</p>
                  
                  <div className="mb-8 p-4 bg-white comic-border">
                    <p className="text-lg">{product.marketingText}</p>
                  </div>
                  
                  <h4 className="font-bold mb-2 text-lg">Key Features:</h4>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <Button href={`#${product.id}-details`}>
                      {product.callToAction}
                    </Button>
                    <Button variant="secondary" href={`#${product.id}-details`} className="ml-4">
                      Learn More
                    </Button>
                  </div>
                </div>
                
                <div className="md:w-1/3 flex items-center justify-center">
                  <div className="w-full aspect-square comic-border bg-white flex items-center justify-center p-4">
                    <div className="text-6xl">
                      {product.icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>      <Section id="utility-tools" title="Productivity Toolkit">
        <div className="mb-8 comic-border bg-[#f8f7f3] p-6">
          <p className="text-xl text-center mb-4">
            Our collection of focused utility tools - each designed to solve one specific problem quickly and efficiently.
          </p>
          <p className="text-center">
            No bloat, no complexity, no learning curve. Just open the tool, accomplish your task, and move on with your day.
          </p>
        </div>
        
        {/* Utility Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {utilityTools.map((tool) => (
            <Card key={tool.id} title={
              <span className="flex items-center">
                <span className="inline-block mr-2">{tool.icon}</span>
                {tool.title}
              </span>
            }>              <p className="mb-6">{tool.description}</p>
              <Button variant="secondary" href={`#${tool.id}`} className="w-full">
                Under maintenance
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg mb-6">All tools are available with a single subscription. No separate purchases needed.</p>
          <Button href="#pricing">View Pricing Plans</Button>
        </div>
      </Section>
    </>
  );
}
