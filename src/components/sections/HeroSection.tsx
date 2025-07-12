"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function HeroSection() {
  const [typingText, setTypingText] = useState('');
  const [showPoweredBy, setShowPoweredBy] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  
  const controls = useAnimation();
  
  const fullText = 'Frictionless Creativity';
  
  useEffect(() => {
    const sequence = async () => {
      // Start glass container animation after 1 second
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Animate container rising up
      await controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.23, 1, 0.320, 1], // Premium easing
        }
      });
      
      // Start typing animation
      for (let i = 0; i <= fullText.length; i++) {
        setTypingText(fullText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 80));
      }
      
      // Pause for 1.5 seconds, then show "Powered by AI"
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowPoweredBy(true);
      
      // Wait for fade-in, then show subtitle
      await new Promise(resolve => setTimeout(resolve, 600));
      setShowSubtitle(true);
      
      // Wait a bit, then show buttons
      await new Promise(resolve => setTimeout(resolve, 400));
      setShowButtons(true);
    };
    
    sequence();
  }, [controls]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-8 overflow-hidden">
      {/* Animated frosted glass container */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
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
          {/* Main heading with typing animation */}
          <div className="text-h1 font-bold mb-8 leading-tight min-h-[200px] flex flex-col items-center justify-center">
            <motion.span
              className="bg-gradient-to-r from-electric-lime to-neon-green bg-clip-text text-transparent block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              {typingText}
              <motion.span
                className="inline-block w-1 h-20 bg-electric-lime ml-2"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </motion.span>
            
            {/* "Powered by AI" fade-in */}
            <motion.span
              className="bg-gradient-to-r from-electric-lime to-neon-green bg-clip-text text-transparent block mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={showPoweredBy ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.8,
                ease: [0.23, 1, 0.320, 1]
              }}
            >
              Powered by AI
            </motion.span>
          </div>
          
          {/* Subtitle animation from top */}
          <motion.p
            className="text-body-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -30 }}
            animate={showSubtitle ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ 
              duration: 0.8,
              ease: [0.23, 1, 0.320, 1]
            }}
          >
            Transform ideas into reality with our suite of AI-powered tools and everyday utilities. 
            Liberate your creative potential and thrive in the digital age with tools designed for modern creators.
          </motion.p>
          
          {/* CTA buttons sliding in from sides */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={showButtons ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={showButtons ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.23, 1, 0.320, 1],
                delay: 0.2
              }}
            >
              <Link
                href="/ai-tools"
                className="block px-10 py-4 bg-electric-lime text-deep-space font-bold rounded-xl hover:bg-neon-green transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-electric-lime/30"
              >
                Explore AI Tools
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={showButtons ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.23, 1, 0.320, 1],
                delay: 0.4
              }}
            >
              <Link
                href="/everyday-tools"
                className="block px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-electric-lime/50 transition-all duration-300 transform hover:scale-105"
              >
                Try Everyday Tools
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
