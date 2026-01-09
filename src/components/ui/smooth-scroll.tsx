'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Add lenis class to html element
    const htmlElement = document.documentElement;
    htmlElement.classList.add('lenis', 'lenis-smooth');

    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Update ScrollTrigger when Lenis scrolls
    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      lenis.off('scroll', ScrollTrigger.update);
      lenis.destroy();
      htmlElement.classList.remove('lenis', 'lenis-smooth');
    };
  }, []);

  return <>{children}</>;
}
