'use client';

import { useEffect, useRef } from 'react';

function useCountUp(target: number, duration = 1200) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const step = Math.ceil(target / (duration / 16));
    let current = 0;
    const el = ref.current;
    if (!el) return;
    const animate = () => {
      current += step;
      if (current > target) current = target;
      el.textContent = current.toLocaleString();
      if (current < target) requestAnimationFrame(animate);
    };
    animate();
  }, [target, duration]);
  return ref;
}

export default function SocialProofSection() {
  const usersRef = useCountUp(10000);
  const projectsRef = useCountUp(50000);
  const uptimeRef = useCountUp(999, 800); // 99.9% as 999/10
  const supportRef = useCountUp(24);

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-charcoal to-smoke">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-h2 font-semibold mb-12 text-white">
          Trusted by Creators Worldwide
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-h1 font-bold text-electric-lime mb-2" ref={usersRef}>10,000</div>
            <div className="text-body text-light-gray">Active Users</div>
          </div>
          <div>
            <div className="text-h1 font-bold text-electric-lime mb-2" ref={projectsRef}>50,000</div>
            <div className="text-body text-light-gray">Projects Created</div>
          </div>
          <div>
            <div className="text-h1 font-bold text-electric-lime mb-2" ref={uptimeRef}>99.9</div>
            <div className="text-body text-light-gray">Uptime</div>
          </div>
          <div>
            <div className="text-h1 font-bold text-electric-lime mb-2" ref={supportRef}>24/7</div>
            <div className="text-body text-light-gray">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
