"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ValuePropsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: 0.5 
  }); // Trigger when 50% of section is visible

  const titleWords = ["Why", "Choose", "The", "KP", "Company?"];

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-h2 font-semibold text-center mb-16 text-white">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-3"
              initial={{ y: -50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
              transition={{
                delay: i * 0.2,
                duration: 0.6,
                ease: [0.23, 1, 0.320, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{
              delay: 1.0,
              duration: 0.8,
              ease: [0.23, 1, 0.320, 1],
            }}
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-electric-lime rounded-full flex items-center justify-center">
              {/* Unlock icon */}
              <svg className="w-8 h-8 text-deep-space" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 11V7a5 5 0 00-10 0v4"/><rect width="18" height="11" x="3" y="11" rx="2"/><circle cx="12" cy="16" r="2"/></svg>
            </div>
            <h3 className="text-h4 font-medium mb-3 text-white">Freedom through Automation</h3>
            <p className="text-body text-light-gray">
              Automate repetitive tasks and focus on what matters most—your creative vision.
            </p>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{
              delay: 1.2,
              duration: 0.8,
              ease: [0.23, 1, 0.320, 1],
            }}
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-electric-lime rounded-full flex items-center justify-center">
              {/* Shield with arrow icon */}
              <svg className="w-8 h-8 text-deep-space" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3l7 4v5c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V7l7-4z"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <h3 className="text-h4 font-medium mb-3 text-white">Bold Resilience</h3>
            <p className="text-body text-light-gray">
              Built for reliability with enterprise-grade security and 99.9% uptime guarantee.
            </p>
          </motion.div>
          {/* Card 3 */}
          <motion.div
            className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{
              delay: 1.4,
              duration: 0.8,
              ease: [0.23, 1, 0.320, 1],
            }}
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-electric-lime rounded-full flex items-center justify-center">
              {/* Brain with circuits icon */}
              <svg className="w-8 h-8 text-deep-space" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 9a3 3 0 016 0v6a3 3 0 01-6 0V9z"/><path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            </div>
            <h3 className="text-h4 font-medium mb-3 text-white">Thoughtful Innovation</h3>
            <p className="text-body text-light-gray">
              Every tool is crafted with purpose, solving real problems for modern creators.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
