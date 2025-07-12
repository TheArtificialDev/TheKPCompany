'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

function useCountUp(target: number, isVisible: boolean, duration = 1500) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    if (!isVisible) {
      // Reset to 0 when not visible
      el.textContent = '0';
      return;
    }
    
    const step = Math.ceil(target / (duration / 16));
    let current = 0;
    
    const animate = () => {
      current += step;
      if (current > target) current = target;
      
      // Format the number based on the target
      let displayValue = '';
      if (target === 2400) {
        // For 2.4K
        displayValue = (current / 1000).toFixed(1) + 'K';
      } else if (target === 98) {
        // For 98% uptime
        displayValue = current + '%';
      } else if (target === 24) {
        // For 24 hours support
        displayValue = current + ' hours';
      } else {
        // For regular numbers like 10 projects
        displayValue = current.toString();
      }
      
      el.textContent = displayValue;
      if (current < target) requestAnimationFrame(animate);
    };
    
    animate();
  }, [target, duration, isVisible]);
  
  return ref;
}

export default function SocialProofSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  // All animations use the same duration (1500ms) for consistency
  const usersRef = useCountUp(2400, isInView, 1500); // 2.4K users
  const projectsRef = useCountUp(10, isInView, 1500); // 10 projects
  const uptimeRef = useCountUp(98, isInView, 1500); // 98% uptime
  const supportRef = useCountUp(24, isInView, 1500); // 24 hours support

  return (
    <section className="py-20 px-6" ref={sectionRef}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-h2 font-semibold mb-12 text-white">
          Trusted by Creators Worldwide
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-h1 font-bold text-electric-lime mb-2" ref={usersRef}>2.4K</div>
            <div className="text-body text-light-gray">Active Users</div>
          </div>
          <div>
            <div className="text-h1 font-bold text-electric-lime mb-2" ref={projectsRef}>10</div>
            <div className="text-body text-light-gray">Projects</div>
          </div>
          <div>
            <div className="text-h1 font-bold text-electric-lime mb-2" ref={uptimeRef}>98%</div>
            <div className="text-body text-light-gray">Uptime</div>
          </div>
          <div>
            <div className="text-h1 font-bold text-electric-lime mb-2" ref={supportRef}>24 hours</div>
            <div className="text-body text-light-gray">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
