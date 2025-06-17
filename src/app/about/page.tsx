"use client";

import HeroSection from "@/components/ui/HeroSection";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutPage() {
  const believeItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const founderInfoRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Add items to ensure refs are properly sized
  believeItemsRef.current = [];
  targetRef.current = [];
    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate founder info section
    if (founderInfoRef.current) {
      gsap.from(founderInfoRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: founderInfoRef.current,
          start: "top 70%",
        }
      });
    }
    
    // Animate belief items
    believeItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.from(item, {
          x: index % 2 === 0 ? -20 : 20,
          opacity: 0,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          }
        });
      }
    });
    
    // Target audience animation
    targetRef.current.forEach((item, index) => {
      if (item) {
        gsap.from(item, {
          scale: 0.9,
          opacity: 0,
          duration: 0.5,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        });
      }
    });
  }, []);
  const whatWeBelieve = [
    { text: "Save time ⏱️", id: 1 },
    { text: "Save energy 🧠", id: 2 },
    { text: "Just work 🛠️", id: 3 }
  ];
  
  // Keeping this commented for future use
  // const targetAudience = [
  //   { text: "Students fighting deadlines", id: 1 },
  //   { text: "Writers chasing clarity", id: 2 },
  //   { text: "Professionals managing chaos", id: 3 },
  //   { text: "Creators craving time for their art", id: 4 }
  // ];

  const currentStatus = [
    { text: "Built our first study assistant to help students crush exams faster", icon: "🛠️", id: 1 },
    { text: "Launching our first public tool in Fall 2025", icon: "📈", id: 2 },
    { text: "Running wishlists and signups to learn what you need most", icon: "📬", id: 3 },
    { text: "Doing it all as a solo founder—from product to code to vision", icon: "🤝", id: 4 }
  ];
  return (
    <>
      <HeroSection
        title="🧬 About TheKPCompany"
        subtitle="Born from Frustration. Built for Flow. TheKPCompany was founded in 2024 with one simple goal: Cut the complexity. Keep the output."
      />
        <Section title="🎯 TheKPCompany is For…">
        <div className="comic-border bg-[#f8f7f3] p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
            {/* Students */}
            <div 
              ref={(el) => { targetRef.current[0] = el; }}
              className="comic-border border-2 border-black p-6 transition-all hover:comic-shadow duration-300 bg-white text-center transform hover:-rotate-1 hover:scale-105"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white font-heading px-4 py-1 comic-border rotate-[-2deg]">
                ✨ Deadline Fighters ✨
              </div>
              <div className="mt-4">
                <p className="font-heading text-2xl mb-3">Students</p>
                <div className="h-1 w-1/3 bg-black mx-auto mb-3"></div>
                <p className="italic">fighting deadlines</p>
                <div className="mt-4 text-4xl">📚✏️⏰</div>
              </div>
            </div>
            
            {/* Writers */}
            <div 
              ref={(el) => { targetRef.current[1] = el; }}
              className="comic-border border-2 border-black p-6 transition-all hover:comic-shadow duration-300 bg-white text-center transform hover:rotate-1 hover:scale-105"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white font-heading px-4 py-1 comic-border rotate-[2deg]">
                ✨ Clarity Seekers ✨
              </div>
              <div className="mt-4">
                <p className="font-heading text-2xl mb-3">Writers</p>
                <div className="h-1 w-1/3 bg-black mx-auto mb-3"></div>
                <p className="italic">chasing clarity</p>
                <div className="mt-4 text-4xl">📝✨📖</div>
              </div>
            </div>
            
            {/* Professionals */}
            <div 
              ref={(el) => { targetRef.current[2] = el; }}
              className="comic-border border-2 border-black p-6 transition-all hover:comic-shadow duration-300 bg-white text-center transform hover:-rotate-1 hover:scale-105"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white font-heading px-4 py-1 comic-border rotate-[-1deg]">
                ✨ Chaos Tamers ✨
              </div>
              <div className="mt-4">
                <p className="font-heading text-2xl mb-3">Professionals</p>
                <div className="h-1 w-1/3 bg-black mx-auto mb-3"></div>
                <p className="italic">managing chaos</p>
                <div className="mt-4 text-4xl">💼🔄🧠</div>
              </div>
            </div>
            
            {/* Creators */}
            <div 
              ref={(el) => { targetRef.current[3] = el; }}
              className="comic-border border-2 border-black p-6 transition-all hover:comic-shadow duration-300 bg-white text-center transform hover:rotate-1 hover:scale-105"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white font-heading px-4 py-1 comic-border rotate-[1deg]">
                ✨ Time Hunters ✨
              </div>
              <div className="mt-4">
                <p className="font-heading text-2xl mb-3">Creators</p>
                <div className="h-1 w-1/3 bg-black mx-auto mb-3"></div>
                <p className="italic">craving time for their art</p>
                <div className="mt-4 text-4xl">🎨⏳🎭</div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="comic-border inline-block px-8 py-4 bg-black text-white transform rotate-[-1deg]">
              <p className="text-xl font-heading mb-0">If you're tired of being stuck, <span className="underline">welcome home</span>.</p>
            </div>
          </div>
        </div>
      </Section>
      
      <Section title="Our Mission">
        <div className="comic-border bg-[#f8f7f3] p-8">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-heading mb-4">Building Tools That Just Work</h3>
              <p className="mb-4">
                At TheKPCompany, we believe that technology should enhance your workflow, not complicate it. We create tools that:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Capture attention instantly</li>
                <li>Reflect your brand's unique personality</li>
                <li>Guide users toward meaningful actions</li>
                <li>Perform flawlessly across all devices</li>
                <li>Load quickly and respond smoothly</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>      <Section title="Our Values" className="bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Creativity",
              description: "We approach every project with fresh eyes and innovative ideas."
            },
            {
              title: "Excellence",
              description: "We hold ourselves to the highest standards in design and development."
            },
            {
              title: "Collaboration",
              description: "We work closely with our clients to ensure their vision comes to life."
            }
          ].map((value, index) => (
            <Card key={index} title={value.title}>
              <p>{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>
        <Section title="👋 Meet the Founder">
        <div className="comic-border bg-[#f8f7f3] p-8" ref={founderInfoRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="comic-border border-2 border-black bg-white p-8 relative">
              <div className="absolute -top-5 -right-5 bg-black text-white font-heading p-3 comic-border transform rotate-6">
                <span className="text-xl">The Builder's Story</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">Abhishek Kumar</h2>
              <p className="text-xl mb-6 font-heading border-b-2 border-black pb-2">Student. Researcher. Developer. Builder.</p>
              
              <p className="mb-6">
                After six years of coding, publishing patents, writing books, and exploring the boundaries of tech, I hit a wall — the tools meant to help me were getting in my way.
              </p>
              
              <div className="comic-border border-2 border-black p-4 bg-[#f8f7f3] mb-6">
                <p className="font-heading text-xl mb-4">
                  So I did what builders do:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🔨</span>
                    <p>I started creating tools that made my work simpler, faster, and lighter.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🚀</span>
                    <p>That collection of tools evolved into TheKPCompany — an AI-powered venture focused on making frictionless productivity available to everyone.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="comic-border border-2 border-black bg-black text-white p-8">
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-2xl font-heading mb-6 border-b border-white pb-2">The Mission</h3>
                <p className="text-lg mb-4">
                  Every tool we build starts with a simple question:
                </p>
                <div className="comic-border border-2 border-white p-6 mb-6">
                  <p className="text-xl font-heading text-center">"What's getting in the way?"</p>
                </div>
                <p className="text-lg">
                  Then we ruthlessly eliminate friction until only the essential remains—a tool that gets out of your way and lets you do your best work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section title="🚀 Where We Are Now">
        <div className="comic-border bg-[#f8f7f3] p-8" ref={timelineRef}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {currentStatus.map((item) => (
              <div key={item.id} className="timeline-item comic-border border-2 border-black p-6 hover:bg-white transition-all duration-300 comic-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
        <Section title="🧭 What We Believe">
        <div className="comic-border bg-[#f8f7f3] p-8">
          <p className="text-center text-xl mb-8">
            We believe productivity shouldn't come with a manual.<br />
            Your tools should:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {whatWeBelieve.map((item, index) => (
              <div 
                key={item.id}
                ref={(el) => {
                  believeItemsRef.current[index] = el;
                }}
                className="comic-border p-6 bg-white text-center hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-2xl font-heading">{item.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="comic-border bg-black text-white p-6">
              <p className="text-xl mb-2 font-heading">Every click, screen, and word we design is guided by one rule:</p>
              <p className="text-3xl font-heading">No friction. All flow.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
