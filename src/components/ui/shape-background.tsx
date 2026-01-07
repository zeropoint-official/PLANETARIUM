"use client";

import { ElegantShape } from "./shape-landing-hero";
import { cn } from "@/lib/utils";

interface ShapeBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Fixed background component with animated shapes and gradients.
 * The background stays fixed while content scrolls over it.
 */
export function ShapeBackground({ children, className }: ShapeBackgroundProps) {
  return (
    <>
      {/* Fixed background layer that covers entire viewport */}
      <div className="fixed inset-0 w-full h-screen overflow-hidden pointer-events-none z-0">
        {/* Base background */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

        {/* Animated shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-indigo-500/[0.25]"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />

          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient="from-rose-500/[0.25]"
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          />

          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient="from-violet-500/[0.25]"
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          />

          <ElegantShape
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            gradient="from-amber-500/[0.25]"
            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          />

          <ElegantShape
            delay={0.7}
            width={150}
            height={40}
            rotate={-25}
            gradient="from-cyan-500/[0.25]"
            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          />
        </div>
      </div>

      {/* Content wrapper - scrolls over the fixed background */}
      <div className={cn("relative w-full z-10", className)}>
        {children}
      </div>
    </>
  );
}

