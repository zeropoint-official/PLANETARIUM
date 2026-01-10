'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { SparklesText } from '@/components/ui/sparkles-text';
import { AuroraText } from '@/components/ui/aurora-text';
import { NumberTicker } from '@/components/ui/number-ticker';
import { ShimmerButton } from '@/components/ui/shimmer-button';
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
              className="absolute z-[5] top-[5%] sm:top-[15%] md:top-[18%] left-0 right-0 flex flex-col items-center will-change-transform px-4 sm:px-6"
            >
              <div className="max-w-4xl mx-auto text-center w-full">
                {/* Pre-title */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-8 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
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
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal max-w-lg mx-auto mb-5 sm:mb-12 leading-relaxed text-white/40 tracking-wide px-2">
                  Join Cyprus' most epic celebration — two days of music, art, and unforgettable experiences
                </p>
                
                {/* Ticket CTA with Magic UI ShimmerButton - Mobile layout with astronaut */}
                <div className="flex flex-col items-center mb-0 sm:mb-20 mt-8 sm:mt-0">
                  {/* Counter badge on top - desktop only */}
                  <div className="hidden sm:flex absolute -top-3 left-1/2 -translate-x-1/2 z-10 items-center gap-1.5 px-3 py-1 rounded-full bg-[#08080f]/80 border border-white/[0.06] whitespace-nowrap backdrop-blur-sm animate-float-subtle">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-white/50 font-medium tracking-[0.15em] uppercase">
                      30 days left
                    </span>
                  </div>
                  
                  {/* Mobile: Horizontal row with CTA and astronaut */}
                  <div className="sm:hidden flex flex-col items-center justify-center gap-4 relative w-full mt-4">
                    {/* Counter badge - mobile version with floating animation */}
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#08080f]/80 border border-white/[0.06] whitespace-nowrap backdrop-blur-sm z-10 animate-float-subtle">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-white/50 font-medium tracking-[0.15em] uppercase">
                        30 days left
                      </span>
                    </div>
                    
                    {/* CTA and Astronaut Container */}
                    <div className="flex items-center justify-center gap-2 relative w-full -mt-8">
                      {/* CTA Button Container with rotation animation */}
                      <div className="flex flex-col items-center gap-2 relative z-10 animate-rotate-subtle" style={{ transformOrigin: 'left center' }}>
                        {/* Magic UI Shimmer Button */}
                        <ShimmerButton 
                          className="shadow-2xl whitespace-nowrap"
                          shimmerColor="#a855f7"
                          shimmerSize="0.08em"
                          background="linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(6, 182, 212, 0.08) 100%)"
                        >
                          <span className="flex items-center gap-2.5 text-sm font-medium text-white/90 whitespace-nowrap tracking-wide">
                            Get Your Tickets
                            <ArrowRight className="w-4 h-4 text-fuchsia-400/80 flex-shrink-0" />
                          </span>
                        </ShimmerButton>
                      </div>
                      
                      {/* Mobile Astronaut - floating next to CTA */}
                      <div className="relative w-[280px] h-[280px] animate-float-smooth" style={{ animationDelay: '0.3s', position: 'relative', top: '35px' }}>
                        {/* Enhanced glow for mobile */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-violet-600/35 via-fuchsia-500/25 to-cyan-400/30 blur-2xl animate-pulse" />
                        
                        <img
                          src="/austronaunt.png"
                          alt="Cosmic Explorer"
                          className="relative w-full h-full object-contain drop-shadow-2xl"
                          style={{
                            filter: 'drop-shadow(0 0 25px rgba(168, 85, 247, 0.5)) drop-shadow(0 0 50px rgba(34, 211, 238, 0.4))'
                          }}
                        />
                        
                        {/* Decorative sparkles around mobile astronaut */}
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75" />
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-fuchsia-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }} />
                        <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-violet-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop: CTA only */}
                  <div className="hidden sm:flex flex-col items-center gap-2 relative z-10">
                    {/* Magic UI Shimmer Button */}
                    <ShimmerButton 
                      className="shadow-2xl whitespace-nowrap"
                      shimmerColor="#a855f7"
                      shimmerSize="0.08em"
                      background="linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(6, 182, 212, 0.08) 100%)"
                    >
                      <span className="flex items-center gap-2.5 text-sm font-medium text-white/90 whitespace-nowrap tracking-wide">
                        Get Your Tickets
                        <ArrowRight className="w-4 h-4 text-fuchsia-400/80 flex-shrink-0" />
                      </span>
                    </ShimmerButton>
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
      <section className="relative z-10 pt-0 pb-16 sm:pt-2 sm:pb-24 px-6">
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
          <div className="mb-4">
            <OnboardingChecklist
              title=""
              description=""
              items={[]}
              videoThumbnailUrl="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=900&auto=format&fit=crop&q=80"
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?si=_MZFE2nm9fevcj76"
            />
          </div>

          {/* Minimal Centered Stats */}
          <div className="relative max-w-2xl mx-auto mb-12">
            {/* Stats Items */}
            <div className="space-y-10 md:space-y-12">
              {/* Stat 1: Experience Zones */}
              <div className="group relative text-center">
                <div className="text-xs text-white/40 uppercase tracking-[0.2em] font-medium mb-4">
                  Experience Zones
                </div>
                <div className="text-6xl md:text-7xl font-bold text-white mb-3">
                  <NumberTicker value={15} className="text-white" delay={0.5} />
                  <span className="text-violet-400/70 ml-2 text-4xl md:text-5xl font-normal">+</span>
                </div>
                <div className="text-sm md:text-base text-white/50 max-w-md mx-auto">
                  Unique interactive areas and immersive spaces
                </div>
                {/* Separator */}
                <div className="mt-6 md:mt-8 flex items-center justify-center gap-4">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
                </div>
              </div>

              {/* Stat 2: Performances */}
              <div className="group relative text-center">
                <div className="text-xs text-white/40 uppercase tracking-[0.2em] font-medium mb-4">
                  Live Entertainment
                </div>
                <div className="text-6xl md:text-7xl font-bold text-white mb-3">
                  <NumberTicker value={50} className="text-white" delay={1.0} />
                  <span className="text-cyan-400/70 ml-2 text-4xl md:text-5xl font-normal">+</span>
                </div>
                <div className="text-sm md:text-base text-white/50 max-w-md mx-auto">
                  World-class DJs, live bands, and performances
                </div>
                {/* Separator */}
                <div className="mt-6 md:mt-8 flex items-center justify-center gap-4">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
                </div>
              </div>

              {/* Stat 3: Expected Guests */}
              <div className="group relative text-center">
                <div className="text-xs text-white/40 uppercase tracking-[0.2em] font-medium mb-4">
                  Expected Attendance
                </div>
                <div className="text-6xl md:text-7xl font-bold text-white mb-3">
                  <NumberTicker value={8} className="text-white" delay={1.5} />
                  <span className="text-amber-400/70 ml-2 text-4xl md:text-5xl font-normal">K+</span>
                </div>
                <div className="text-sm md:text-base text-white/50 max-w-md mx-auto">
                  Join thousands of festival-goers from around the world
                </div>
                {/* Separator */}
                <div className="mt-6 md:mt-8 flex items-center justify-center gap-4">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
                </div>
              </div>

              {/* Stat 4: Days */}
              <div className="group relative text-center">
                <div className="text-xs text-white/40 uppercase tracking-[0.2em] font-medium mb-4">
                  Event Duration
                </div>
                <div className="text-6xl md:text-7xl font-bold text-white mb-3">
                  <NumberTicker value={2} className="text-white" delay={2.0} />
                  <span className="text-violet-400/70 ml-2 text-4xl md:text-5xl font-normal">Days</span>
                </div>
                <div className="text-sm md:text-base text-white/50 max-w-md mx-auto">
                  Two full days of immersive experiences
                </div>
              </div>
            </div>
          </div>

          {/* Festival Cards - Daytime & Nighttime */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 max-w-5xl mx-auto">
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
