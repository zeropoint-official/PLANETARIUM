"use client";

import { motion } from "motion/react";
import { ElegantShape } from "./shape-landing-hero";
import { useEffect, useState } from "react";

/**
 * Star component for the starfield
 */
function Star({ delay, x, y }: { delay: number; x: number; y: number }) {
  const [opacity, setOpacity] = useState(0.3);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(Math.random() * 0.5 + 0.3);
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: Math.random() * 2 + 1,
        height: Math.random() * 2 + 1,
        opacity,
      }}
      animate={{
        opacity: [opacity, opacity * 1.5, opacity],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

/**
 * Enhanced ElegantShape with continuous movement
 */
function MovingShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  initialX = 0,
  initialY = 0,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  initialX?: number;
  initialY?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: initialY - 150,
        x: initialX,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: initialY,
        x: initialX,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [0, 20, -10, 15, 0],
          x: [0, 10, -5, 8, 0],
          rotate: [rotate, rotate + 2, rotate - 1, rotate + 1, rotate],
          scale: [1, 1.05, 0.98, 1.02, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]`}
        />
      </motion.div>
    </motion.div>
  );
}

/**
 * Starfield component
 */
function Starfield() {
  const stars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0">
      {stars.map((star) => (
        <Star key={star.id} delay={star.delay} x={star.x} y={star.y} />
      ))}
    </div>
  );
}

/**
 * Fixed animated background with shapes, stars, and dark overlay
 */
export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Base background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Starfield */}
      <Starfield />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Animated shapes with continuous movement */}
      <div className="absolute inset-0 overflow-hidden">
        <MovingShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.25]"
          initialX={-50}
          initialY={80}
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <MovingShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.25]"
          initialX={50}
          initialY={280}
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <MovingShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.25]"
          initialX={20}
          initialY={400}
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <MovingShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.25]"
          initialX={-30}
          initialY={40}
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <MovingShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.25]"
          initialX={40}
          initialY={20}
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />

        {/* Additional smaller shapes for more movement */}
        <MovingShape
          delay={0.8}
          width={120}
          height={35}
          rotate={35}
          gradient="from-purple-500/[0.20]"
          initialX={-20}
          initialY={200}
          className="left-[30%] md:left-[35%] top-[50%] md:top-[55%]"
        />

        <MovingShape
          delay={0.9}
          width={180}
          height={50}
          rotate={-30}
          gradient="from-pink-500/[0.20]"
          initialX={30}
          initialY={150}
          className="right-[25%] md:right-[30%] top-[40%] md:top-[45%]"
        />
      </div>
    </div>
  );
}

