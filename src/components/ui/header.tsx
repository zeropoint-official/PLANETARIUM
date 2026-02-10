'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Ticket, Calendar, Telescope, MapPin, Sparkles } from 'lucide-react';

const navItems = [
  { label: 'Schedule', href: '#schedule', icon: Calendar },
  { label: 'Activities', href: '#activities', icon: Telescope },
  { label: 'Experience', href: '#experience', icon: Sparkles },
  { label: 'Location', href: '#location', icon: MapPin },
  { label: 'Tickets', href: '#tickets', icon: Ticket },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#030308]/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="relative flex items-center group"
            >
              <div className="relative overflow-hidden">
                <img
                  src="/Memora logo.png"
                  alt="Memora"
                  className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-violet-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.1 + index * 0.05,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="relative px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5 group"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </span>
                    {/* Active/hover indicator */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-1/2 transition-all duration-300 rounded-full" />
                  </motion.a>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <motion.a
              href="#tickets"
              onClick={(e) => handleNavClick(e, '#tickets')}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/10 hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 group"
            >
              <span className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                Get Tickets
              </span>
              <span className="text-xs text-violet-400/80 bg-violet-500/10 px-2 py-0.5 rounded-full">
                €20
              </span>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-[280px] bg-[#0a0a14]/95 backdrop-blur-2xl border-l border-white/10 md:hidden"
            >
              <div className="flex flex-col h-full pt-20 pb-6 px-6">
                {/* Navigation Items */}
                <nav className="flex-1 space-y-1">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-violet-500/10 group-hover:border-violet-500/20 transition-all">
                          <Icon className="w-4 h-4 text-white/50 group-hover:text-violet-400 transition-colors" />
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </motion.a>
                    );
                  })}
                </nav>

                {/* CTA Section */}
                <div className="pt-6 border-t border-white/10">
                  <motion.a
                    href="#tickets"
                    onClick={(e) => handleNavClick(e, '#tickets')}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border border-violet-500/20 text-white font-semibold hover:from-violet-600/30 hover:to-cyan-600/30 transition-all duration-300"
                  >
                    <Ticket className="w-4 h-4" />
                    Get Tickets
                    <span className="text-xs text-violet-300/80 bg-violet-500/10 px-2 py-0.5 rounded-full">
                      €20
                    </span>
                  </motion.a>

                  {/* Event Info */}
                  <div className="mt-4 text-center">
                    <p className="text-xs text-white/40">
                      9-10 October • Nicosia, Cyprus
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
