"use client";

import * as React from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Sparkles, Music, Telescope, Gamepad2, CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExpandableFestivalCardProps {
  className?: string;
  items?: Array<{
    id: number | string;
    text: string;
    helperText?: string;
    helperLink?: {
      href: string;
      text: string;
    };
  }>;
}

export const ExpandableFestivalCard = ({
  className,
  items = [],
}: ExpandableFestivalCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(true); // Start as mobile to prevent initial expansion
  const [isInitialized, setIsInitialized] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Always start collapsed
      setIsExpanded(false);
      setIsInitialized(true);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll-based expansion on mobile only
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.8", "start 0.2"],
  });

  const shouldExpand = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 0, 1]
  );

  React.useEffect(() => {
    // Only apply scroll-based expansion on mobile after initialization
    if (!isInitialized || !isMobile) {
      return;
    }
    
    // Set initial state based on current scroll position
    const currentProgress = scrollYProgress.get();
    setIsExpanded(currentProgress > 0.5);
    
    const unsubscribe = shouldExpand.on("change", (latest) => {
      setIsExpanded(latest > 0.5);
    });
    
    return () => unsubscribe();
  }, [shouldExpand, isMobile, isInitialized, scrollYProgress]);

  const highlights = [
    { icon: Telescope, label: "Stargazing", color: "bg-cyan-500" },
    { icon: Gamepad2, label: "VR Adventures", color: "bg-violet-500" },
    { icon: Music, label: "Live Music", color: "bg-amber-500" },
    { icon: Sparkles, label: "More", color: "bg-pink-500" },
  ];

  return (
    <motion.div
      ref={cardRef}
      className={cn("w-full max-w-2xl mx-auto mb-16", className)}
    >
      <Card 
        className="overflow-hidden rounded-2xl border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-white/20"
        onMouseEnter={() => !isMobile && setIsExpanded(true)}
        onMouseLeave={() => !isMobile && setIsExpanded(false)}
      >
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="text-xs text-white/40 uppercase tracking-[0.2em] font-medium mb-2">
                Preparation Guide
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                What to Bring
              </h3>
              <p className="text-sm text-white/60">
                Make sure you have everything ready for an unforgettable 2-day experience
              </p>
            </div>
          </div>

          {/* Checklist Items */}
          {items.length > 0 && (
            <div className="mb-6">
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.id} className="flex flex-col">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-sm font-medium text-white">{item.text}</span>
                    </div>
                    {item.helperText && item.helperLink && (
                      <div className="ml-8 mt-1 text-xs text-white/60">
                        {item.helperText}{" "}
                        <a
                          href={item.helperLink.href}
                          className="text-violet-400 underline-offset-4 hover:text-violet-300 hover:underline transition-colors"
                        >
                          {item.helperLink.text}
                        </a>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Animated expandable section */}
          <AnimatePresence>
            {isExpanded && items.length === 0 && (
              <motion.div
                key="details"
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: "1.5rem" }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Daytime Activities</h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Immerse yourself in VR space adventures, explore interactive planetarium shows, 
                      participate in astronomy workshops, and enjoy family-friendly activities throughout the day.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Nighttime Events</h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      As the sun sets, experience world-class DJ performances, telescope stargazing sessions 
                      with expert astronomers, fire performances, and an unforgettable dance floor under the cosmos.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
};
