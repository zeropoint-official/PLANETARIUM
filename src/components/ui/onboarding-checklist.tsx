// components/ui/onboarding-checklist.tsx
"use client";

import * as React from "react";
import { motion } from "motion/react";
import { CheckCircle2, PlayCircle, Telescope, Gamepad2, Music, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility from shadcn
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AuroraText } from "@/components/ui/aurora-text";

// Define the type for a single checklist item
interface ChecklistItem {
  id: number | string;
  text: string;
  helperText?: string;
  helperLink?: {
    href: string;
    text: string;
  };
}

// Define the props for the main component
export interface OnboardingChecklistProps {
  title: string;
  description: string;
  items: ChecklistItem[];
  videoThumbnailUrl: string;
  videoUrl: string;
  className?: string;
}

/**
 * A responsive and animated onboarding checklist component.
 * @param title - The main heading for the checklist.
 * @param description - A short description displayed below the title.
 * @param items - An array of checklist items to display.
 * @param videoThumbnailUrl - The URL for the video thumbnail image.
 * @param videoUrl - The URL for the video to be played in a modal.
 * @param className - Optional additional class names for the container.
 */
export const OnboardingChecklist = ({
  title,
  description,
  items,
  videoThumbnailUrl,
  videoUrl,
  className,
}: OnboardingChecklistProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        when: "beforeChildren" as const,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Glow effect behind the card */}
      <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-50" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={cn(
          "relative w-full bg-card text-card-foreground border border-white/10 rounded-2xl shadow-lg p-8 overflow-hidden",
          className
        )}
      >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Title and Checklist */}
        <div className="flex flex-col">
          {/* What to Expect Section */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              <AuroraText
                colors={['#a855f7', '#ec4899', '#06b6d4', '#8b5cf6']}
                speed={1.2}
              >
                What to Expect
              </AuroraText>
            </h3>
            <p className="text-sm text-white/60 mb-4">
              Explore the amazing activities and events planned for your visit
            </p>
            
            {/* Feature icons */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-white transition-transform hover:scale-110" title="Stargazing">
                <Telescope size={20} />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 text-white transition-transform hover:scale-110" title="VR Adventures">
                <Gamepad2 size={20} />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white transition-transform hover:scale-110" title="Live Music">
                <Music size={20} />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-white transition-transform hover:scale-110" title="More">
                <Sparkles size={20} />
              </div>
            </div>
            
            {/* Daytime and Nighttime Activities */}
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Daytime Activities</h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  VR adventures, planetarium shows, workshops, and family activities.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Nighttime Events</h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  DJ performances, stargazing sessions, fire acts, and dancing under the stars.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Video Thumbnail */}
        <motion.div
          variants={itemVariants} // Re-using item variant for a nice slide-in effect
          className="relative group rounded-lg overflow-hidden cursor-pointer w-full aspect-video"
        >
          <Dialog>
            <DialogTrigger asChild>
              <div>
                <img
                  src={videoThumbnailUrl}
                  alt="Video guide thumbnail"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <PlayCircle className="h-16 w-16 text-white/80 transform transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0 border-0">
              <div className="aspect-video">
                <iframe
                  src={videoUrl}
                  title="Onboarding Video Guide"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
};

