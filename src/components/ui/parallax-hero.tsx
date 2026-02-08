'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Sparkles, ChevronDown, ArrowRight, Telescope, Music, Users } from 'lucide-react';
import { SparklesText } from '@/components/ui/sparkles-text';
import { AuroraText } from '@/components/ui/aurora-text';
import { NumberTicker } from '@/components/ui/number-ticker';
import { OnboardingChecklist } from '@/components/ui/onboarding-checklist';
import { DestinationCard } from '@/components/ui/card-21';

export function ParallaxHero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0
        }
      });

      const layers = [
        { layer: "1", yPercent: 20 },
        { layer: "3", yPercent: 50 },
        { layer: "4", yPercent: 80 },
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (triggerElement) {
        gsap.killTweensOf(triggerElement);
      }
    };
  }, []);

  return (
    <div ref={parallaxRef} className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[550px] sm:h-screen sm:min-h-[700px] w-full overflow-hidden bg-[#030308]">
        <div className="relative w-full h-full overflow-hidden">
          <div data-parallax-layers className="relative w-full h-full overflow-hidden">
            
            {/* Layer 1: Video Background */}
            <div data-parallax-layer="1" className="absolute inset-0 will-change-transform">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[120%] object-cover brightness-[0.65] saturate-[1.3] contrast-[1.1]"
              >
                <source src="/bg-video.mp4" type="video/mp4" />
              </video>
              {/* Noise texture overlay - reduced opacity */}
              <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
            </div>

            {/* Layer 2: Gradient Overlays (static) - lighter to show more video */}
            <div className="absolute inset-0 z-[2] pointer-events-none">
              {/* Radial vignette - lighter */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,3,8,0.2)_50%,rgba(3,3,8,0.5)_100%)]" />
              {/* Color accents */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_10%_20%,rgba(124,58,237,0.08),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_90%_80%,rgba(6,182,212,0.05),transparent_40%)]" />
            </div>

            {/* Layer 3: Title Content */}
            <div 
              data-parallax-layer="3" 
              className="absolute z-[5] top-[3%] sm:top-[12%] md:top-[15%] left-0 right-0 flex flex-col items-center will-change-transform px-4 sm:px-6"
            >
              <div className="max-w-4xl mx-auto text-center w-full">
                {/* Logo */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <img 
                    src="/Memora logo.png" 
                    alt="Memora Logo" 
                    className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
                  />
                </div>
                
                {/* Pre-title */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-8 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-breath-smooth" />
                  <span className="text-[9px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-white/60 uppercase">
                    Cyprus' Most Epic 2-Day Event
                  </span>
                </div>
                
                {/* Main Title */}
                <h1 className="mb-5 sm:mb-8 w-full">
                  <span className="block text-[clamp(2rem,8vw,6rem)] sm:text-[clamp(3rem,10vw,7rem)] font-black tracking-[-0.02em] sm:tracking-[-0.03em] leading-[0.9] text-white break-words">
                    PLANETARIUM
                  </span>
                  <SparklesText 
                    className="block text-[clamp(2rem,8vw,6rem)] sm:text-[clamp(3rem,10vw,7rem)] font-black tracking-[-0.02em] sm:tracking-[-0.03em] leading-[0.9] break-words"
                    sparklesCount={8}
                    colors={{ first: '#a855f7', second: '#22d3ee' }}
                  >
                    <AuroraText
                      colors={['#a855f7', '#ec4899', '#06b6d4', '#8b5cf6']}
                      speed={1.2}
                    >
                      FESTIVAL
                    </AuroraText>
                  </SparklesText>
                </h1>
                
                {/* Tagline */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal max-w-lg mx-auto mb-3 sm:mb-6 leading-relaxed text-white/40 tracking-wide px-2">
                  Join Cyprus' most epic celebration — two days of music, art, and unforgettable experiences
                </p>
                
                {/* Ticket CTA - Premium Animated Gradient Border Button */}
                <div className="flex flex-col items-center mt-4 sm:mt-0 mb-0 sm:mb-20">
                  
                  {/* ── Mobile Layout ── */}
                  <div className="sm:hidden flex flex-col items-center relative w-full">
                    {/* CTA Button */}
                    <a href="#tickets" className="group relative z-10">
                      {/* Ambient glow behind button */}
                      <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-600/30 via-fuchsia-500/20 to-cyan-500/30 blur-2xl animate-pulse-slow pointer-events-none" />
                      
                      {/* Animated gradient border wrapper */}
                      <div className="relative rounded-full p-[1.5px] overflow-hidden">
                        {/* Spinning conic gradient for border */}
                        <div className="absolute inset-[-200%] animate-spin-slow bg-[conic-gradient(from_0deg,#a855f7_0%,transparent_20%,#06b6d4_33%,transparent_53%,#ec4899_66%,transparent_86%,#a855f7_100%)]" />
                        
                        {/* Button interior */}
                        <div className="relative rounded-full bg-[#0a0a18]/95 backdrop-blur-2xl px-6 py-3 flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                          <span className="text-sm font-semibold text-white tracking-wide">Get Tickets</span>
                          <div className="w-px h-4 bg-white/10" />
                          <span className="text-xs text-violet-300/80 font-medium">€25</span>
                          <ArrowRight className="w-3.5 h-3.5 text-violet-400/80 flex-shrink-0" />
                        </div>
                      </div>
                    </a>
                    
                    {/* Date & Location */}
                    <div className="flex items-center gap-2 mt-3 text-[10px] text-white/30 tracking-[0.15em] uppercase font-medium">
                      <span>June 14-15</span>
                      <span className="text-violet-400/40">·</span>
                      <span>Nicosia, Cyprus</span>
                    </div>
                    
                    {/* Mobile Astronaut - floating below CTA */}
                    <div className="relative w-[260px] h-[260px] animate-float-smooth -mt-3" style={{ animationDelay: '0.3s' }}>
                      {/* Glow behind astronaut */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-violet-600/30 via-fuchsia-500/20 to-cyan-400/25 blur-2xl animate-pulse" />
                      
                      <img
                        src="/austronaunt.png"
                        alt="Cosmic Explorer"
                        className="relative w-full h-full object-contain drop-shadow-2xl"
                        style={{
                          filter: 'drop-shadow(0 0 25px rgba(168, 85, 247, 0.5)) drop-shadow(0 0 50px rgba(34, 211, 238, 0.4))'
                        }}
                      />
                      
                      {/* Decorative sparkles */}
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75" />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-fuchsia-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-violet-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }} />
                    </div>
                  </div>
                  
                  {/* ── Desktop Layout ── */}
                  <div className="hidden sm:flex flex-col items-center gap-4 relative z-10">
                    {/* CTA Button */}
                    <a href="#tickets" className="group relative">
                      {/* Ambient glow behind button */}
                      <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-violet-600/20 via-fuchsia-500/15 to-cyan-500/20 blur-3xl animate-pulse-slow opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      
                      {/* Animated gradient border wrapper */}
                      <div className="relative rounded-full p-[1.5px] overflow-hidden">
                        {/* Spinning conic gradient for border */}
                        <div className="absolute inset-[-200%] animate-spin-slow bg-[conic-gradient(from_0deg,#a855f7_0%,transparent_20%,#06b6d4_33%,transparent_53%,#ec4899_66%,transparent_86%,#a855f7_100%)]" />
                        
                        {/* Button interior */}
                        <div className="relative rounded-full bg-[#0a0a18]/90 backdrop-blur-2xl px-8 py-4 flex items-center gap-4 group-hover:bg-[#0a0a18]/80 transition-colors duration-300">
                          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                          <span className="text-base font-semibold text-white tracking-wide">Get Tickets</span>
                          <div className="w-px h-5 bg-white/10" />
                          <span className="text-sm text-violet-300/80 font-medium">From €25</span>
                          <ArrowRight className="w-4 h-4 text-violet-400 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                        </div>
                      </div>
                    </a>
                    
                    {/* Date & Location */}
                    <div className="flex items-center gap-3 text-xs text-white/30 tracking-[0.15em] uppercase font-medium">
                      <span>June 14-15, 2026</span>
                      <span className="text-violet-400/30">·</span>
                      <span>Nicosia, Cyprus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator - positioned at bottom left, hidden on mobile */}
            <div className="absolute bottom-[6%] left-[5%] z-[7] hidden sm:flex flex-col items-center gap-2 text-white/30 md:left-[8%]">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </div>


            {/* Layer 4: Desktop Astronaut - hidden on mobile, right-aligned on desktop */}
            <div 
              data-parallax-layer="4" 
              className="hidden sm:block absolute z-[6] will-change-transform pointer-events-none
                sm:right-[5%] sm:bottom-[6%]
                lg:right-[10%] lg:bottom-[8%]"
            >
              <div className="relative">
                {/* Enhanced glow behind astronaut */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-t from-violet-600/30 via-cyan-500/20 to-fuchsia-500/15 blur-3xl animate-pulse" />
                
                <img
                  src="/austronaunt.png"
                  alt="Floating Astronaut"
                  className="relative w-[200px] md:w-[260px] lg:w-[320px] h-auto animate-float-enhanced drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.5)) drop-shadow(0 0 60px rgba(34, 211, 238, 0.3))'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Extended gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-[35%] sm:h-[40%] bg-gradient-to-t from-[#030308] via-[#030308]/80 to-transparent z-[7] pointer-events-none" />
      </section>

      {/* Highlights Section - Seamless continuation */}
      <section className="relative z-10 pt-0 pb-6 sm:pt-2 sm:pb-8 px-6">
        {/* Background that fades out very smoothly */}
        <div className="absolute inset-x-0 top-0 bottom-[400px] bg-[#030308]" />
        <div className="absolute inset-x-0 bottom-0 h-[450px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, #030308 0%, rgba(3,3,8,0.8) 25%, rgba(3,3,8,0.5) 50%, rgba(3,3,8,0.2) 75%, transparent 100%)' }} />
        
        <div className="relative max-w-6xl mx-auto">
          
          {/* Section divider */}
          <div className="flex items-center justify-center gap-4 mb-4 hidden md:flex">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
            <Sparkles className="w-4 h-4 text-violet-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          {/* Prepare for Your Cosmic Adventure with What to Expect */}
          <div className="mb-12 md:mb-16">
            <OnboardingChecklist
              title=""
              description=""
              items={[]}
              videoThumbnailUrl="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=900&auto=format&fit=crop&q=80"
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?si=_MZFE2nm9fevcj76"
            />
          </div>

          {/* Stats Dashboard Grid */}
          <div className="relative max-w-5xl mx-auto mb-16 md:mb-24">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              
              {/* Stat 1: Experience Zones */}
              <div className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] p-5 md:p-7 hover:border-violet-500/20 transition-all duration-500">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
                  <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-violet-300/80 to-transparent animate-shimmer-line" />
                </div>
                {/* Hover glow */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-24 bg-violet-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-violet-500/10 border border-violet-500/15 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-violet-500/15 group-hover:border-violet-500/25 transition-colors duration-500">
                    <Telescope className="w-3.5 h-3.5 md:w-4 md:h-4 text-violet-400" />
                  </div>
                  
                  {/* Number */}
                  <div className="flex items-baseline gap-1 mb-1.5">
                    <NumberTicker value={15} className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight" delay={0.3} />
                    <span className="text-lg md:text-xl text-violet-400/60 font-light">+</span>
                  </div>
                  
                  {/* Label */}
                  <div className="text-[10px] md:text-[11px] text-white/35 uppercase tracking-[0.15em] font-medium">
                    Experience Zones
                  </div>
                </div>
              </div>
              
              {/* Stat 2: Live Entertainment */}
              <div className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] p-5 md:p-7 hover:border-cyan-500/20 transition-all duration-500">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
                  <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent animate-shimmer-line-delay-1" />
                </div>
                {/* Hover glow */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-24 bg-cyan-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-cyan-500/15 group-hover:border-cyan-500/25 transition-colors duration-500">
                    <Music className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400" />
                  </div>
                  
                  {/* Number */}
                  <div className="flex items-baseline gap-1 mb-1.5">
                    <NumberTicker value={50} className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight" delay={0.6} />
                    <span className="text-lg md:text-xl text-cyan-400/60 font-light">+</span>
                  </div>
                  
                  {/* Label */}
                  <div className="text-[10px] md:text-[11px] text-white/35 uppercase tracking-[0.15em] font-medium">
                    Live Performances
                  </div>
                </div>
              </div>
              
              {/* Stat 3: Attendance */}
              <div className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] p-5 md:p-7 hover:border-amber-500/20 transition-all duration-500">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
                  <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-amber-300/80 to-transparent animate-shimmer-line-delay-2" />
                </div>
                {/* Hover glow */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-24 bg-amber-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-amber-500/10 border border-amber-500/15 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-amber-500/15 group-hover:border-amber-500/25 transition-colors duration-500">
                    <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-400" />
                  </div>
                  
                  {/* Number */}
                  <div className="flex items-baseline gap-1 mb-1.5">
                    <NumberTicker value={8} className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight" delay={0.9} />
                    <span className="text-lg md:text-xl text-amber-400/60 font-light">K+</span>
                  </div>
                  
                  {/* Label */}
                  <div className="text-[10px] md:text-[11px] text-white/35 uppercase tracking-[0.15em] font-medium">
                    Expected Guests
                  </div>
                </div>
              </div>
              
              {/* Stat 4: Duration */}
              <div className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] p-5 md:p-7 hover:border-fuchsia-500/20 transition-all duration-500">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" />
                  <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-fuchsia-300/80 to-transparent animate-shimmer-line-delay-3" />
                </div>
                {/* Hover glow */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-24 bg-fuchsia-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/15 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-fuchsia-500/15 group-hover:border-fuchsia-500/25 transition-colors duration-500">
                    <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-fuchsia-400" />
                  </div>
                  
                  {/* Number */}
                  <div className="flex items-baseline gap-1 mb-1.5">
                    <NumberTicker value={2} className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight" delay={1.2} />
                    <span className="text-lg md:text-xl text-fuchsia-400/60 font-light ml-1">Days</span>
                  </div>
                  
                  {/* Label */}
                  <div className="text-[10px] md:text-[11px] text-white/35 uppercase tracking-[0.15em] font-medium">
                    Non-Stop Festival
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          {/* Festival Cards - Daytime & Nighttime */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 max-w-5xl mx-auto">
            <div className="h-[450px]">
              <DestinationCard
                imageUrl="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1200&auto=format&fit=crop&q=90"
                location="Family Adventures"
                flag="☀️"
                stats="VR Experiences • Planetarium Shows • Kids Zone • Food Trucks"
                href="#daytime"
                themeColor="270 91% 65%"
              />
            </div>
            <div className="h-[450px]">
              <DestinationCard
                imageUrl="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&auto=format&fit=crop&q=90"
                location="Electric Nights"
                flag="🌙"
                stats="Live DJs • Drone Shows • Fire Acts • Open Bar"
                href="#nighttime"
                themeColor="330 81% 60%"
              />
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-white/35 mb-6 text-[13px] tracking-wide">
              Limited tickets available for the inaugural event
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.05]">
              <Calendar className="w-4 h-4 text-cyan-400/70" />
              <span className="text-white/50 text-[13px] font-medium tracking-wide">June 14-15, 2026</span>
              <div className="w-px h-4 bg-white/[0.08]" />
              <MapPin className="w-4 h-4 text-cyan-400/70" />
              <span className="text-white/50 text-[13px] font-medium tracking-wide">Nicosia, Cyprus</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
