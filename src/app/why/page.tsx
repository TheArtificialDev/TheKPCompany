"use client";

import HeroSection from "@/components/ui/HeroSection";
import Section from "@/components/ui/Section";
// import Card from "@/components/ui/Card";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiBrainLine, RiLightbulbLine, RiZoomInLine, RiTimeLine, RiMagicLine, RiUserLine, RiPulseLine, RiBookOpenLine, RiTimer2Line, RiCheckLine, RiCloseLine, RiChatQuoteLine } from "react-icons/ri";

export default function WhyPage() {
  const tableRef = useRef(null);
  const tableRowsRef = useRef<HTMLTableRowElement[]>([]);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate table when it enters viewport
    if (tableRef.current) {
      gsap.from(tableRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top 80%",
        },
        clearProps: "all" // Clear properties after animation to prevent any lingering transforms
      });
      
      // Animate rows with stagger effect
      gsap.from(tableRowsRef.current, {
        opacity: 0,
        y: 15,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top 75%",
        },
        clearProps: "all" // Clear properties after animation to prevent any lingering transforms
      });
    }
  }, []);
  return (
    <>      <HeroSection
        title={<>
          <RiBrainLine className="inline-block mr-2 text-3xl" /> 
          Why TheKPCompany
        </>}
        subtitle="We Don't Build Tools. We Erase Friction. In a world full of AI, we're not here to impress you with complexity. We're here to get the job done, so you can get on with your job."
      />      <Section title={<>
          <RiLightbulbLine className="inline-block mr-2 text-2xl" /> 
          What Makes Us Different?
        </>}>        <div className="comic-border bg-[#f8f7f3] p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">
                <RiZoomInLine className="inline-block mr-2 text-xl" /> 
                Laser Focused
              </h3>
              <p className="mb-6">We don't build general-purpose bots that kind of do everything.<br/>We build specific tools that excel at one job—and do it fast.</p>
              
              <h3 className="text-xl font-bold mb-3">
                <RiBrainLine className="inline-block mr-2 text-xl" />
                Zero Learning Curve
              </h3>
              <p className="mb-6">No dashboards to figure out. No user manuals.<br/>Open the tool, get your task done. That's it.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">
                <RiTimeLine className="inline-block mr-2 text-xl" />
                Time is Sacred
              </h3>
              <p className="mb-6">Our tools give you time back.<br/>Use it to write, study, create, or just breathe.</p>
              
              <h3 className="text-xl font-bold mb-3">
                <RiUserLine className="inline-block mr-2 text-xl" />
                AI That Feels Human
              </h3>
              <p className="mb-6">Built for people, not engineers.<br/>Our tools speak your language and understand your context.</p>
            </div>
          </div>
        </div>
      </Section>      <Section title={<>
        <RiMagicLine className="inline-block mr-2 text-2xl" />
        The Future We're Building
      </>}>
        <div className="comic-border bg-[#f8f7f3] p-8">
          <div className="text-center">
            <p className="text-lg mb-6">We're not just building tools.</p>
            <p className="text-lg">We're creating AI companions that grow with you, adapt to you, and make you wildly productive without burning you out.</p>
          </div>
        </div>
      </Section>      <Section title={<>
        <RiPulseLine className="inline-block mr-2 text-2xl" />
        How We Stack Up
      </>}>
        <div className="text-center mb-4">
          <p className="inline-block comic-border px-3 py-1 bg-black text-white font-heading animate-bounce">
            <span className="inline-block transform rotate-180">
              <RiPulseLine className="inline-block mr-2" />
            </span> 
            Hover over rows for details
          </p>
        </div>
        <div className="table-container p-1"><table ref={tableRef} className="w-full comic-border comic-shadow bg-[#f8f7f3] relative transition-all duration-300 comparison-table"><thead><tr className="border-b-2 border-black"><th className="p-4 text-left font-heading font-bold text-xl w-1/2">Feature</th><th className="p-4 text-center font-heading font-bold text-xl w-1/4">TheKPCompany</th><th className="p-4 text-center font-heading font-bold text-xl w-1/4">Generic AI Tools</th></tr></thead><tbody>
              {[                { 
                  feature: "Setup Time", 
                  kp: "None", 
                  generic: "Medium to High",
                  icon: <RiTimer2Line />
                },
                { 
                  feature: "Task Specificity", 
                  kp: "Laser Focused", 
                  generic: "General Purpose",
                  icon: <RiZoomInLine />
                },
                { 
                  feature: "Learning Curve", 
                  kp: "Zero", 
                  generic: "Steep to Moderate",
                  icon: <RiBookOpenLine />
                },
                { 
                  feature: "Real-world Speed", 
                  kp: "Instant Output", 
                  generic: "Slower Workflow",
                  icon: <RiTimeLine />
                },                { 
                  feature: "Built for Humans", 
                  kp: <span className="checkmark text-2xl font-bold"><RiCheckLine /></span>, 
                  generic: <span className="x-mark text-2xl font-bold"><RiCloseLine /></span>,
                  icon: <RiUserLine />
                }
              ].map((row, index) => (                <tr key={index} ref={(el) => { if (el) tableRowsRef.current[index] = el; }} className={`border-b border-black transition-all duration-300 hover:bg-white ${hoveredRow === index ? 'bg-white shadow-md z-10' : ''}`} onMouseEnter={() => setHoveredRow(index)} onMouseLeave={() => setHoveredRow(null)}><td className="p-5 font-medium flex items-center gap-3 highlight-cell"><span className="inline-block w-8 h-8 flex items-center justify-center rounded-full bg-black text-white comic-border transition-transform hover:rotate-12 cursor-pointer text-center">{row.icon}</span><span className="font-heading">{row.feature}</span></td><td className="p-5 text-center font-bold text-lg highlight-cell">{row.kp}</td><td className="p-5 text-center text-lg highlight-cell">{row.generic}</td></tr>              ))}</tbody></table>
        </div>
      </Section><Section title={<>
        <RiChatQuoteLine className="inline-block mr-2 text-2xl" />
        What Users Say
      </>}>
        <div className="comic-border bg-[#f8f7f3] p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border-2 border-black rounded-lg">
              <p className="mb-4">"It feels like the AI just knows what I want. It's eerie—in a good way."</p>
              <p className="font-bold">— Beta User, Writer</p>
            </div>
            <div className="p-6 border-2 border-black rounded-lg">
              <p className="mb-4">"I solved an entire set of past papers in half the time. Game changer."</p>
              <p className="font-bold">— Student, B.Tech (ECE)</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
