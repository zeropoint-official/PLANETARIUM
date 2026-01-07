'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { Calendar, MapPin, Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { SparklesText } from '@/components/ui/sparkles-text';
import { AuroraText } from '@/components/ui/aurora-text';
import { NumberTicker } from '@/components/ui/number-ticker';
import { ShimmerButton } from '@/components/ui/shimmer-button';

export function ParallaxHero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    // Entry animations timeline
    const entryTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate pre-title badge
    entryTl.fromTo(
      '[data-hero-pretitle]',
      { opacity: 0, y: -30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8 }
    );

    // Animate main title - PLANETARIUM
    entryTl.fromTo(
      '[data-hero-title-main]',
      { opacity: 0, y: 60, clipPath: 'inset(100% 0 0 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 1 },
      "-=0.4"
    );

    // Animate main title - FESTIVAL with sparkles
    entryTl.fromTo(
      '[data-hero-title-accent]',
      { opacity: 0, y: 60, clipPath: 'inset(100% 0 0 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)', duration: 1 },
      "-=0.7"
    );

    // Animate tagline
    entryTl.fromTo(
      '[data-hero-tagline]',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5"
    );

    // Animate CTA button
    entryTl.fromTo(
      '[data-hero-cta]',
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6 },
      "-=0.4"
    );

    // Animate astronaut - float in from right with rotation
    entryTl.fromTo(
      '[data-hero-astronaut]',
      { opacity: 0, x: 100, rotate: 15, scale: 0.8 },
      { opacity: 1, x: 0, rotate: 0, scale: 1, duration: 1.2, ease: "power2.out" },
      "-=1"
    );

    // Animate scroll indicator
    entryTl.fromTo(
      '[data-hero-scroll]',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.5"
    );

    // Highlights section animations (when scrolled into view)
    gsap.fromTo(
      '[data-hero-divider]',
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: '[data-hero-divider]',
          start: 'top 85%',
        }
      }
    );

    // Stats animation - staggered
    gsap.fromTo(
      '[data-hero-stat]',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '[data-hero-stats]',
          start: 'top 80%',
        }
      }
    );

    // Day/Night cards animation
    gsap.fromTo(
      '[data-hero-card]',
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '[data-hero-cards]',
          start: 'top 80%',
        }
      }
    );

    // Bottom CTA animation
    gsap.fromTo(
      '[data-hero-bottom-cta]',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: '[data-hero-bottom-cta]',
          start: 'top 90%',
        }
      }
    );

    // Parallax scroll animations
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

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    return () => {
      entryTl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (triggerElement) {
        gsap.killTweensOf(triggerElement);
      }
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={parallaxRef} className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[120vh] min-h-[800px] w-full max-w-full overflow-hidden bg-[#030308]">
        <div className="relative w-full h-full">
          <div data-parallax-layers className="relative w-full h-full">

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
              className="absolute z-[5] top-[12%] md:top-[18%] left-0 right-0 flex flex-col items-center will-change-transform px-4 sm:px-6 w-full max-w-full"
            >
              <div className="max-w-full w-full mx-auto text-center px-2">
                {/* Pre-title */}
                <div data-hero-pretitle className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 sm:mb-8 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-white/60 uppercase whitespace-nowrap">
                    Cyprus' Most Epic 2-Day Event
                  </span>
                </div>

                {/* Main Title */}
                <h1 className="mb-6 sm:mb-8 w-full">
                  <span data-hero-title-main className="block text-[clamp(2.5rem,8vw,6rem)] sm:text-[clamp(3rem,9vw,7rem)] md:text-[clamp(3rem,11vw,8rem)] font-black tracking-[-0.02em] sm:tracking-[-0.03em] leading-[0.9] text-white text-center w-full break-words">
                    PLANETARIUM
                  </span>
                  <SparklesText
                    data-hero-title-accent
                    className="block text-[clamp(2.5rem,8vw,6rem)] sm:text-[clamp(3rem,9vw,7rem)] md:text-[clamp(3rem,11vw,8rem)] font-black tracking-[-0.02em] sm:tracking-[-0.03em] leading-[0.9] text-center w-full break-words"
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
                <p data-hero-tagline className="text-sm sm:text-base md:text-lg lg:text-xl font-normal max-w-lg mx-auto mb-8 sm:mb-12 leading-relaxed text-white/40 tracking-wide px-2">
                  Join Cyprus' most epic celebration — two days of music, art, and unforgettable experiences
                </p>

                {/* Ticket CTA with Magic UI ShimmerButton */}
                <div data-hero-cta className="flex flex-col items-center mb-16 sm:mb-20 relative z-10">
                  <div className="relative">
                    {/* Counter badge on top */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#08080f]/80 border border-white/[0.06] whitespace-nowrap backdrop-blur-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[9px] sm:text-[10px] text-white/50 font-medium tracking-[0.12em] sm:tracking-[0.15em] uppercase">
                        30 days left
                      </span>
                    </div>

                    {/* Magic UI Shimmer Button */}
                    <ShimmerButton
                      className="shadow-2xl"
                      shimmerColor="#a855f7"
                      shimmerSize="0.08em"
                      background="linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(6, 182, 212, 0.08) 100%)"
                    >
                      <span className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-medium text-white/90 whitespace-nowrap tracking-wide px-4 sm:px-6">
                        Get Your Tickets
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fuchsia-400/80" />
                      </span>
                    </ShimmerButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator - positioned at bottom right */}
            <div data-hero-scroll className="absolute bottom-[6%] right-[5%] z-[7] flex flex-col items-center gap-2 text-white/30 md:right-[8%]">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Layer 4: Astronaut */}
            <div
              data-parallax-layer="4"
              data-hero-astronaut
              className="absolute right-[50%] translate-x-[50%] bottom-[10%] z-[4] will-change-transform pointer-events-none sm:right-[50%] sm:translate-x-[50%] sm:bottom-[8%] md:right-[7%] md:translate-x-0 md:bottom-[6%] lg:right-[12%] lg:bottom-[10%]"
            >
              <div className="relative max-w-full">
                {/* Glow behind astronaut */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-t from-violet-600/20 via-cyan-500/10 to-transparent blur-3xl" />

                <img
                  src="/austronaunt.png"
                  alt="Floating Astronaut"
                  className="relative w-[140px] sm:w-[160px] md:w-[240px] lg:w-[320px] h-auto animate-float drop-shadow-2xl max-w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Extended gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#030308] via-[#030308]/80 to-transparent z-[7] pointer-events-none" />
      </section>

      {/* Highlights Section - Seamless continuation */}
      <section className="relative z-10 -mt-20 pt-8 pb-80 px-4 sm:px-6 w-full max-w-full overflow-x-hidden">
        {/* Background that fades out very smoothly */}
        <div className="absolute inset-x-0 top-0 bottom-[400px] bg-[#030308]" />
        <div className="absolute inset-x-0 bottom-0 h-[450px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, #030308 0%, rgba(3,3,8,0.8) 25%, rgba(3,3,8,0.5) 50%, rgba(3,3,8,0.2) 75%, transparent 100%)' }} />

        <div className="relative max-w-6xl mx-auto">

          {/* Section divider */}
          <div data-hero-divider className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
            <Sparkles className="w-4 h-4 text-violet-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          {/* Stats Row with Magic UI NumberTicker */}
          <div data-hero-stats className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div data-hero-stat className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2" >
                <NumberTicker value={2} className="text-white" />
              </div>
              <div className="text-[11px] text-white/35 uppercase tracking-[0.2em] font-medium">Days of Wonder</div>
            </div>
            <div data-hero-stat className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2" >
                <NumberTicker value={30} className="text-white" delay={0.2} />
                <span className="text-violet-400/80">+</span>
              </div>
              <div className="text-[11px] text-white/35 uppercase tracking-[0.2em] font-medium">Live Performances</div>
            </div>
            <div data-hero-stat className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2" >
                <NumberTicker value={5} className="text-white" delay={0.4} />
                <span className="text-white">K</span>
                <span className="text-violet-400/80">+</span>
              </div>
              <div className="text-[11px] text-white/35 uppercase tracking-[0.2em] font-medium">Expected Guests</div>
            </div>
            <div data-hero-stat className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2" >
                ∞
              </div>
              <div className="text-[11px] text-white/35 uppercase tracking-[0.2em] font-medium">Memories to Make</div>
            </div>
          </div>

          {/* Day vs Night Cards */}
          <div data-hero-cards className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Day Card */}
            <div data-hero-card className="group relative p-8 rounded-2xl bg-gradient-to-br from-amber-500/[0.06] to-orange-600/[0.03] border border-amber-500/[0.08] hover:border-amber-500/15 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-400/15 to-transparent rounded-bl-full" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full bg-amber-500/10 text-amber-400/90 text-[10px] font-semibold uppercase tracking-[0.15em]">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Daytime
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight" >
                  Family Adventures
                </h3>

                <p className="text-white/40 mb-6 leading-relaxed text-[15px]">
                  From sunrise to sunset — VR space missions, planetarium shows, drone races, sports competitions, and endless activities for all ages.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['VR Experiences', 'Planetarium Shows', 'Kids Zone', 'Food Trucks'].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[11px] text-white/50 bg-white/[0.04] rounded-full font-medium tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Night Card */}
            <div data-hero-card className="group relative p-8 rounded-2xl bg-gradient-to-br from-violet-500/[0.06] to-fuchsia-600/[0.03] border border-violet-500/[0.08] hover:border-violet-500/15 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-400/15 to-transparent rounded-bl-full" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full bg-violet-500/10 text-violet-400/90 text-[10px] font-semibold uppercase tracking-[0.15em]">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  Nighttime
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight" >
                  Electric Nights
                </h3>

                <p className="text-white/40 mb-6 leading-relaxed text-[15px]">
                  When the sun sets, the party ignites — world-class DJs, drone light spectacles, fire performers, and an unforgettable dance floor under the cosmos.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['Live DJs', 'Drone Shows', 'Fire Acts', 'Open Bar'].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[11px] text-white/50 bg-white/[0.04] rounded-full font-medium tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div data-hero-bottom-cta className="text-center">
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
