"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';

interface HeroCollageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  subtitle: string;
  stats: { value: string; label: string }[];
  images: string[];
  accentColor?: string;
}

const HeroCollage = React.forwardRef<HTMLDivElement, HeroCollageProps>(
  ({ className, title, subtitle, stats, images, accentColor = 'text-violet-500', ...props }, ref) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const displayImages = images.slice(0, 7);

    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [50, -150]);
    const y3 = useTransform(scrollYProgress, [0, 1], [150, -50]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [-5, 5]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [5, -5]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
      <section
        ref={sectionRef}
        className={cn(
          'relative w-full pt-8 md:pt-12 pb-12 md:pb-16 overflow-hidden',
          className
        )}
        {...props}
      >
        {/* Ambient glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Floating Image Grid - Left Side - Hidden on mobile */}
        <div className="hidden md:block absolute left-0 top-0 h-full w-1/3 overflow-hidden">
          <motion.div 
            style={{ y: y1, rotate: rotate1 }}
            className="absolute top-[15%] left-[10%]"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
              <img
                src={displayImages[1]}
                alt="Activity"
                className="relative w-48 h-32 object-cover rounded-xl border border-white/10"
              />
            </div>
          </motion.div>
          
          <motion.div 
            style={{ y: y2 }}
            className="absolute top-[45%] left-[5%]"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <img
                src={displayImages[5]}
                alt="Activity"
                className="relative w-56 h-40 object-cover rounded-xl border border-white/10"
              />
            </div>
          </motion.div>

          <motion.div 
            style={{ y: y3, rotate: rotate2 }}
            className="absolute bottom-[15%] left-[15%]"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <img
                src={displayImages[6]}
                alt="Activity"
                className="relative w-44 h-28 object-cover rounded-xl border border-white/10"
              />
            </div>
          </motion.div>
        </div>

        {/* Floating Image Grid - Right Side - Hidden on mobile */}
        <div className="hidden md:block absolute right-0 top-0 h-full w-1/3 overflow-hidden">
          <motion.div 
            style={{ y: y2, rotate: rotate2 }}
            className="absolute top-[20%] right-[10%]"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
              <img
                src={displayImages[2]}
                alt="Activity"
                className="relative w-52 h-36 object-cover rounded-xl border border-white/10"
              />
            </div>
          </motion.div>

          <motion.div 
            style={{ y: y1 }}
            className="absolute top-[50%] right-[5%]"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <img
                src={displayImages[3]}
                alt="Activity"
                className="relative w-48 h-32 object-cover rounded-xl border border-white/10"
              />
            </div>
          </motion.div>

          <motion.div 
            style={{ y: y3, rotate: rotate1 }}
            className="absolute bottom-[20%] right-[15%]"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <img
                src={displayImages[4]}
                alt="Activity"
                className="relative w-40 h-28 object-cover rounded-xl border border-white/10"
              />
            </div>
          </motion.div>
        </div>

        {/* Center Content */}
        <motion.div 
          style={{ scale, opacity }}
          className="relative z-10 flex flex-col items-center justify-center px-4 py-8 md:py-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-violet-500/10 border border-violet-500/20 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-[10px] md:text-xs font-medium text-violet-400 uppercase tracking-wider">
                10AM — 6PM Daily
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-center tracking-tight leading-[0.9] mb-6 md:mb-8 px-2"
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl text-center text-sm sm:text-base md:text-lg lg:text-xl text-white/50 leading-relaxed mb-8 md:mb-12 px-4"
          >
            {subtitle}
          </motion.p>

          {/* Mobile Image Grid - Only visible on mobile */}
          <div className="md:hidden w-full mb-8">
            <div className="grid grid-cols-2 gap-3 px-4">
              {displayImages.slice(1, 5).map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500/50 to-fuchsia-500/50 rounded-xl blur-sm opacity-40 group-hover:opacity-60 transition-opacity" />
                  <img
                    src={img}
                    alt={`Activity ${idx + 1}`}
                    className="relative w-full h-32 object-cover rounded-lg border border-white/10"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Central Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative mb-8 md:mb-16 w-full max-w-[400px] md:max-w-[500px]"
          >
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 rounded-3xl blur-2xl opacity-30" />
            <div className="absolute -inset-0.5 md:-inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl opacity-60" />
            <img
              src={displayImages[0]}
              alt="Featured Activity"
              className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-2xl"
            />
            
            {/* Floating stat cards on the image - Hidden on mobile */}
            <div className="hidden md:block absolute -bottom-6 -left-6 px-4 py-3 bg-black/80 backdrop-blur-xl rounded-xl border border-white/10">
              <div className={cn("text-2xl font-bold", accentColor)}>{stats[0]?.value}</div>
              <div className="text-xs text-white/50">{stats[0]?.label}</div>
            </div>
            <div className="hidden md:block absolute -top-4 -right-4 px-4 py-3 bg-black/80 backdrop-blur-xl rounded-xl border border-white/10">
              <div className={cn("text-2xl font-bold", accentColor)}>{stats[1]?.value}</div>
              <div className="text-xs text-white/50">{stats[1]?.label}</div>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-16 w-full px-4"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center group flex-1 min-w-[100px] md:flex-none">
                <div className={cn(
                  "text-3xl sm:text-4xl md:text-5xl font-black tracking-tight transition-transform group-hover:scale-110",
                  accentColor
                )}>
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-white/40 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    );
  }
);

HeroCollage.displayName = 'HeroCollage';

export { HeroCollage };
