"use client";

import { Particles } from "./particles";

/**
 * Cosmic background with interactive particles and subtle nebula effects
 * Optimized for performance while maintaining visual appeal
 */
export function CosmicBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Nebula gradient layers - static, no animation for performance */}
      <div className="absolute inset-0">
        {/* Primary nebula - purple/violet */}
        <div 
          className="absolute top-0 left-0 w-[80%] h-[60%] opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 20% 30%, rgba(139, 92, 246, 0.4) 0%, transparent 60%)',
          }}
        />
        
        {/* Secondary nebula - indigo/blue */}
        <div 
          className="absolute bottom-0 right-0 w-[70%] h-[50%] opacity-25"
          style={{
            background: 'radial-gradient(ellipse at 80% 70%, rgba(99, 102, 241, 0.4) 0%, transparent 55%)',
          }}
        />
        
        {/* Accent nebula - cyan hint */}
        <div 
          className="absolute top-[40%] right-[10%] w-[40%] h-[40%] opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 60% 50%, rgba(34, 211, 238, 0.3) 0%, transparent 50%)',
          }}
        />
        
        {/* Deep space accent - rose/pink */}
        <div 
          className="absolute bottom-[20%] left-[20%] w-[35%] h-[35%] opacity-15"
          style={{
            background: 'radial-gradient(ellipse at 40% 60%, rgba(244, 114, 182, 0.3) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Interactive particles - white stars */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        staticity={40}
        ease={70}
        size={1}
        color="#ffffff"
        vx={0}
        vy={0}
      />
      
      {/* Secondary particle layer - colored particles for depth */}
      <Particles
        className="absolute inset-0"
        quantity={30}
        staticity={60}
        ease={90}
        size={1.5}
        color="#a78bfa"
        vx={0}
        vy={0}
      />

      {/* Subtle overall gradient overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
        }}
      />
      
      {/* Very subtle noise texture for depth */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
