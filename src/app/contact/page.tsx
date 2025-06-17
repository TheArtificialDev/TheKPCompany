import HeroSection from "@/components/ui/HeroSection";
import Section from "@/components/ui/Section";
// import Button from "@/components/ui/Button";
import { RiMailLine, RiLinkedinBoxLine, RiTwitterXFill, RiQuestionLine } from "react-icons/ri";


export default function ContactPage() {  // Social media links
  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com/TheKP_Company", icon: <RiTwitterXFill className="text-4xl" />, label: "@TheKP_Company" },
    { name: "LinkedIn", url: "https://linkedin.com/company/thekpcompany", icon: <RiLinkedinBoxLine className="text-4xl" />, label: "TheKPCompany" },
    { name: "Email", url: "mailto:Info.TheKP@gmail.com", icon: <RiMailLine className="text-4xl" />, label: "Info.TheKP@gmail.com" }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: "What is TheKPCompany?",
      answer: "We're a D2C AI solutions brand building tools that erase complexity. Think of us as your shortcut to productivity — no fluff, no learning curve."
    },
    {
      question: "Who are your tools for?",
      answer: "Students, writers, professionals, and creators — anyone who values their time and wants to get more done, faster."
    },
    {
      question: "Are your tools free or paid?",
      answer: "We plan to offer a mix of free and premium features, depending on the product. Stay tuned for launch details."
    },
    {
      question: "Do I need any technical skills to use your tools?",
      answer: "Not at all. Our tools are made to be intuitive. If you can click, you can create."
    },
    {
      question: "How are your tools different from ChatGPT or Gemini?",
      answer: "We build focused, task-specific tools. No prompt engineering. No configuration. Just results."
    },
    {
      question: "What products are you launching first?",
      answer: "Our first launch includes a study assistant for students and a writing assistant for creators. More are on the way."
    },
    {
      question: "Can I try your tools before launch?",
      answer: "Yes — sign up for early access and join our wishlist. You'll be the first to know (and test)."
    },
    {
      question: "Is there a mobile app?",
      answer: "Not yet, but mobile-friendly versions of our tools are in the works."
    },
    {
      question: "Can I suggest a feature or idea?",
      answer: "Absolutely. We love building with feedback. Drop us a line at Info.TheKP@gmail.com."
    },
    {
      question: "I'm a creator/educator. Can I collaborate with you?",
      answer: "We'd love that. If your work aligns with ours, let's talk — we're always looking to amplify great voices."
    },
    {
      question: "Are you hiring?",
      answer: "Not right now — but we're open to conversations. Check our Careers page for more info."
    },
    {
      question: "Where are you based?",
      answer: "We're fully digital — building from India, connecting globally."
    }
  ];
  return (
    <>      <HeroSection
        title={<>
          <RiMailLine className="inline-block mr-2 text-4xl" />
          Got Questions? Let's Talk Simplicity.
        </>}
        subtitle="We're not fans of long forms or hold music. If you have questions, feedback, or just want to say hi — we're listening."
      />

      <Section className="bg-secondary">
        <div className="comic-border bg-[#f8f7f3] p-8">
          <h2 className="text-3xl font-bold mb-6 text-center font-heading">Ways to Reach Us:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                className="comic-border border-2 border-black p-6 bg-white hover:bg-[#f8f7f3] transition-all duration-300 text-center transform hover:scale-105 hover:rotate-1 group"
              >
                <div className="mb-3">{social.icon}</div>
                <h3 className="text-xl font-bold mb-2">{social.name}</h3>
                <p className="group-hover:underline">{social.label}</p>
              </a>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="comic-border inline-block bg-black text-white px-8 py-4 transform rotate-[-1deg]">
              <h3 className="text-xl font-heading mb-0">Prefer instant answers?</h3>
              <p className="mb-0">Check out our FAQ below 👇</p>
            </div>
          </div>
        </div>
      </Section>      <Section title={<>
        <RiQuestionLine className="inline-block mr-2 text-2xl" />
        Frequently Asked Questions
      </>}>
        <div className="comic-border bg-[#f8f7f3] p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="comic-border border-2 border-black bg-white p-6 transition-all hover:comic-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-3 font-heading flex items-start">
                  <span className="inline-block w-8 h-8 mr-2 flex-shrink-0 text-center leading-8 comic-border border-2 border-black bg-[#f8f7f3]">{index + 1}</span>
                  <span>{faq.question}</span>
                </h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="comic-border inline-block p-6 bg-black text-white transform rotate-[1deg]">
              <p className="text-lg mb-0">
                Still have questions? Reach out to us at{" "}
                <a href="mailto:Info.TheKP@gmail.com" className="underline">Info.TheKP@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
