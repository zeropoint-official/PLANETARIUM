"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; // Your utility for merging class names
import { useInView } from "motion/react";

// Define the props for the DestinationCard component
interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  location: string;
  flag: string;
  stats: string;
  href: string;
  themeColor: string; // e.g., "150 50% 25%" for a deep green
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  ({ className, imageUrl, location, flag, stats, href, themeColor, ...props }, ref) => {
    const cardRef = React.useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    
    // Detect mobile device
    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Use Intersection Observer for mobile scroll detection
    // Activate when card enters viewport (top visible), deactivate when scrolling past (less than 30% visible)
    const isInView = useInView(cardRef, {
      margin: "0px 0px -70% 0px", // Trigger when top enters viewport, deactivate when less than 30% visible
      once: false, // Allow multiple triggers
      amount: 0.3, // At least 30% of the card must be visible to stay active
    });

    // Combine hover state: desktop hover OR mobile in-view
    const isActive = isHovered || (isMobile && isInView);

    return (
      // The 'group' class enables hover effects on child elements
      <div
        ref={(node) => {
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
          cardRef.current = node;
        }}
        style={{
          // @ts-ignore - CSS custom properties are valid
          "--theme-color": themeColor,
        } as React.CSSProperties}
        className={cn("group w-full h-full", className, isActive && "is-active")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <a
          href={href}
          className={cn(
            "relative block w-full h-full rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out",
            isActive && "scale-105 shadow-[0_0_60px_-15px_hsl(var(--theme-color)/0.6)]"
          )}
          aria-label={`Explore details for ${location}`}
          style={{
             boxShadow: isActive 
               ? `0 0 60px -15px hsl(var(--theme-color) / 0.6)`
               : `0 0 40px -15px hsl(var(--theme-color) / 0.5)`
          }}
        >
          {/* Background Image with Parallax Zoom */}
          <div
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out",
              isActive && "scale-110"
            )}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />

          {/* Themed Gradient Overlay - Always visible but subtle */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: `linear-gradient(to top, hsl(var(--theme-color) / 0.4), hsl(var(--theme-color) / 0.2) 30%, transparent 60%)`,
            }}
          />

          {/* Dark Overlay - Only visible when expanded */}
          <div
            className={cn(
              "absolute inset-0 bg-black/60 transition-opacity duration-500",
              isActive ? "opacity-100" : "opacity-0"
            )}
          />
          
          {/* Content */}
          <div className="relative flex flex-col justify-end h-full p-6 text-white">
            {/* Title - Always visible */}
            <h3 className="text-3xl font-bold tracking-tight">
              {location} <span className="text-2xl ml-1">{flag}</span>
            </h3>
            
            {/* Details - Only visible when expanded */}
            <div
              className={cn(
                "overflow-hidden transition-all duration-500 ease-in-out",
                isActive ? "max-h-48 opacity-100 translate-y-0 mt-2" : "max-h-0 opacity-0 translate-y-2 mt-0"
              )}
            >
              <div className="space-y-2">
                {/* Main stats line */}
                <p className="text-sm text-white/90 font-medium leading-relaxed">
                  {stats}
                </p>
                
                {/* Additional concise details */}
                {location === "Family Adventures" && (
                  <p className="text-xs text-white/75 leading-relaxed">
                    Perfect for families with interactive workshops, educational activities, and entertainment for all ages.
                  </p>
                )}
                
                {location === "Electric Nights" && (
                  <p className="text-xs text-white/75 leading-relaxed">
                    Nighttime entertainment with live performances, spectacular shows, and dancing under the stars (18+).
                  </p>
                )}
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
);
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
