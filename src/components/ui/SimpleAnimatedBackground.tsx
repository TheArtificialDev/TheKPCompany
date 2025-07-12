"use client";

import { useEffect, useRef } from "react";

interface SimpleAnimatedBackgroundProps {
  color?: string;
  maxOpacity?: number;
  dotSize?: number;
  spacing?: number;
  className?: string;
}

export default function SimpleAnimatedBackground({
  color = "rgb(0,255,136)",
  maxOpacity = 0.3,
  dotSize = 2,
  spacing = 40,
  className = ""
}: SimpleAnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let dots: Array<{ x: number; y: number; opacity: number; phase: number }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Create dots grid
      dots = [];
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          dots.push({
            x: x + Math.random() * spacing,
            y: y + Math.random() * spacing,
            opacity: Math.random() * maxOpacity,
            phase: Math.random() * Math.PI * 2
          });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.001;
      
      dots.forEach((dot, index) => {
        // Create flickering effect
        const flicker = Math.sin(time + dot.phase + index * 0.1) * 0.5 + 0.5;
        const opacity = dot.opacity * flicker;
        
        ctx.fillStyle = color.replace('rgb', 'rgba').replace(')', `, ${opacity})`);
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [color, maxOpacity, dotSize, spacing]);

  return (
    <div className={`fixed inset-0 z-0 ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: '#0A0A0B' }}
      />
    </div>
  );
}
