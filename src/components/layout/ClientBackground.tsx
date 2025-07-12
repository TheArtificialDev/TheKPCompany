"use client";

export default function ClientBackground() {
  return (
    <div className="fixed inset-0 bg-deep-space z-0">
      {/* Simple CSS-based animated background */}
      <div 
        className="absolute inset-0 opacity-20 animate-pulse"
        style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #00FF88 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}
