"use client";

import { motion } from "motion/react";
import { 
  MapPin, 
  Clock, 
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Sparkles
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Cosmic Horizons</h3>
                <p className="text-xs text-white/40">June 14-15, 2026</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              The ultimate 2-day cosmic festival at the Cyprus Planetarium. 
              Family fun by day, epic party by night.
            </p>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Event Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-violet-400" />
                <span>Πλανητάριο Κύπρου, Nicosia</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Clock className="w-4 h-4 text-violet-400" />
                <span>10:00 AM - 3:00 AM</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-violet-400" />
                <span>info@cosmichorizons.cy</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex items-center gap-3">
              {[
                { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
                { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
                { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-violet-500/20 border border-white/10 flex items-center justify-center text-white/50 hover:text-violet-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/30">
              © 2026 Cosmic Horizons. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/30">
              <a href="#" className="hover:text-white/50 transition-colors">Privacy</a>
              <a href="#" className="hover:text-white/50 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
