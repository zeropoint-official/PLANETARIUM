"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; // Your utility for merging class names
import { ArrowRight } from "lucide-react";
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

          {/* Themed Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, hsl(var(--theme-color) / 0.9), hsl(var(--theme-color) / 0.6) 30%, transparent 60%)`,
            }}
          />
          
          {/* Content */}
          <div className="relative flex flex-col justify-end h-full p-6 text-white">
            <h3 className="text-3xl font-bold tracking-tight">
              {location} <span className="text-2xl ml-1">{flag}</span>
            </h3>
            <p className="text-sm text-white/80 mt-1 font-medium">{stats}</p>

            {/* Explore Button */}
            <div
              className={cn(
                "mt-8 flex items-center justify-between bg-[hsl(var(--theme-color)/0.2)] backdrop-blur-md border border-[hsl(var(--theme-color)/0.3)] rounded-lg px-4 py-3 transition-all duration-300",
                isActive && "bg-[hsl(var(--theme-color)/0.4)] border-[hsl(var(--theme-color)/0.5)]"
              )}
            >
              <span className="text-sm font-semibold tracking-wide">Explore Now</span>
              <ArrowRight className={cn("h-4 w-4 transform transition-transform duration-300", isActive && "translate-x-1")} />
            </div>
          </div>
        </a>
      </div>
    );
  }
);
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
