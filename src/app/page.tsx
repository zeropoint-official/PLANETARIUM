'use client';

import { ParallaxHero } from '@/components/ui/parallax-hero';
import { HeroCollage } from '@/components/ui/modern-hero-section';
import { ExpandableFestivalCard } from '@/components/ui/expandable-festival-card';
import { CosmicBackground } from '@/components/ui/cosmic-background';
import { SparklesText } from '@/components/ui/sparkles-text';
import { AuroraText } from '@/components/ui/aurora-text';
import { Timeline } from '@/components/ui/timeline';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Clock, Telescope, Music, Users, MapPin, Gamepad2, Trophy, ShoppingBag, Gift, ArrowRight, Calendar, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  // Ticket form state
  const [adultTickets, setAdultTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const adultPrice = 25;
  const childPrice = 0;
  const totalPrice = adultTickets * adultPrice + childTickets * childPrice;

  const handleQuantityChange = (type: 'adult' | 'child', delta: number) => {
    if (type === 'adult') {
      setAdultTickets((prev) => Math.max(0, Math.min(10, prev + delta)));
    } else {
      setChildTickets((prev) => Math.max(0, Math.min(10, prev + delta)));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here (Stripe integration)
    console.log('Form submitted:', { adultTickets, childTickets, formData, totalPrice });
  };

  // Daytime Activities Section Data
  const daytimeStats = [
    { value: '100+', label: 'Daytime Activities' },
    { value: '28', label: 'Hours of Fun' },
    { value: '10', label: 'Main Attractions' },
  ];

  const daytimeImages = [
    // Central: VR Experience
    'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=900&auto=format&fit=crop&q=80',
    // Top-Left: Telescope viewing
    'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=900&auto=format&fit=crop&q=80',
    // Top-Right: Interactive exhibit
    'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=900&auto=format&fit=crop&q=80',
    // Bottom-Right: Workshop
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&auto=format&fit=crop&q=80',
    // Far-Right: Kids activities
    'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=900&auto=format&fit=crop&q=80',
    // Bottom-Left: Gaming zone
    'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80',
    // Far-Left: Food & drinks
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&auto=format&fit=crop&q=80',
  ];

  // Event Timeline Data
  const timelineData = [
    {
      title: "Day 1 - Morning",
      content: (
        <div>
          <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
            Kick off your cosmic journey with immersive experiences and interactive activities
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Clock className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">10:00 AM - Welcome & Registration</div>
                <div className="text-white/60">Check-in and receive your event pass</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Telescope className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">10:30 AM - Telescope Viewing Session</div>
                <div className="text-white/60">Observe planets and stars with professional telescopes</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Gamepad2 className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">11:00 AM - VR Space Adventures</div>
                <div className="text-white/60">Immersive virtual reality space exploration</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&q=80"
              alt="Telescope viewing"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1593508512255-86ab42a0e620?w=800&q=80"
              alt="VR experience"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&q=80"
              alt="Interactive exhibit"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
              alt="Workshop"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Day 1 - Afternoon",
      content: (
        <div>
          <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
            Continue exploring with workshops, games, and exclusive daytime events
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Users className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">2:00 PM - Interactive Workshops</div>
                <div className="text-white/60">Learn about space science and astronomy</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Trophy className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">3:30 PM - Cosmic Games & Contests</div>
                <div className="text-white/60">Compete in space trivia and win prizes</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <ShoppingBag className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">5:00 PM - Shopping & Food Zone</div>
                <div className="text-white/60">Browse exclusive merchandise and enjoy cosmic cuisine</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
              alt="Contests"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80"
              alt="Games"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
              alt="Shopping"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
              alt="Food"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Day 1 - Evening",
      content: (
        <div>
          <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
            As night falls, the festival transforms into an epic celebration under the stars
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Telescope className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">7:00 PM - Night Telescope Session</div>
                <div className="text-white/60">Stargazing with expert astronomers</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Music className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">9:00 PM - DJ Party Night</div>
                <div className="text-white/60">Dance under the stars with cosmic beats (18+)</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Gift className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">11:00 PM - Midnight Giveaways</div>
                <div className="text-white/60">Win exclusive prizes and merchandise</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
              alt="DJ party"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80"
              alt="Planetarium dome"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80"
              alt="Night event"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1501281668745-f7f57525c1b4?w=800&q=80"
              alt="Celebration"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Day 2 - Full Day",
      content: (
        <div>
          <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
            Experience all activities again with new surprises, extended hours, and special finale events
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Clock className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">10:00 AM - Day 2 Kickoff</div>
                <div className="text-white/60">All activities resume with new experiences</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Trophy className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">3:00 PM - Grand Finale Contests</div>
                <div className="text-white/60">Final competitions with major prizes</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Music className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">8:00 PM - Closing Celebration</div>
                <div className="text-white/60">Final night party with special performances</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Gift className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">10:00 PM - Final Giveaways</div>
                <div className="text-white/60">Last chance to win amazing prizes</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80"
              alt="Activities"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80"
              alt="Prizes"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80"
              alt="Planetarium"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80"
              alt="Finale"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
          </div>
        </div>
      ),
    },
  ];

  // Onboarding Checklist Data
  const checklistData = {
    title: "Prepare for Your Cosmic Adventure",
    description: "Make sure you have everything ready for an unforgettable 2-day experience",
    items: [
      { id: 1, text: "Event tickets (printed or digital)" },
      { id: 2, text: "Valid ID for age verification" },
      {
        id: 3,
        text: "Comfortable clothing & shoes",
        helperText: "Dress code?",
        helperLink: { href: "#", text: "Check guidelines" }
      },
      {
        id: 4,
        text: "Camera or phone for photos",
        helperText: "Photography allowed?",
        helperLink: { href: "#", text: "See policy" }
      },
      { id: 5, text: "Cash or card for shops & food" },
      { id: 6, text: "Positive energy & excitement!" },
    ],
    videoThumbnailUrl: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=900&auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=_MZFE2nm9fevcj76",
  };

  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Existing Parallax Hero - higher z-index to stay above background */}
      <div className="relative z-20 w-full overflow-x-hidden">
        <ParallaxHero />
      </div>

      {/* Fixed cosmic background with interactive particles */}
      <CosmicBackground />

      {/* All sections after hero - content scrolls over fixed background */}
      <div className="relative z-10 w-full overflow-x-hidden">
        {/* Daytime Activities Section */}
        <HeroCollage
          title={
            <>
              <span className="block text-white">Daytime</span>
              <SparklesText 
                className="block"
                sparklesCount={8}
                colors={{ first: '#a855f7', second: '#22d3ee' }}
              >
                <AuroraText
                  colors={['#a855f7', '#ec4899', '#06b6d4', '#8b5cf6']}
                  speed={1.2}
                >
                  Adventures
                </AuroraText>
              </SparklesText>
            </>
          }
          subtitle="From sunrise to sunset, explore immersive VR experiences, interactive workshops, telescope observations, cosmic games, and exclusive daytime events. Discover the universe in a whole new light."
          stats={daytimeStats}
          images={daytimeImages}
          accentColor="text-violet-500"
        />

        {/* Event Timeline */}
        <div className="w-full">
          <Timeline data={timelineData} />
        </div>

        {/* Preparation Checklist */}
        <section className="w-full flex items-center justify-center p-4 py-16">
          <div className="max-w-6xl mx-auto w-full">
            <ExpandableFestivalCard 
              items={checklistData.items}
            />
          </div>
        </section>

        {/* Ticket Purchase Section */}
        <section id="tickets" className="w-full py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            {/* Section divider */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
              <div className="w-2 h-2 rounded-full bg-violet-500/50" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
            </div>

            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
                <AuroraText
                  colors={['#a855f7', '#ec4899', '#06b6d4', '#8b5cf6']}
                  speed={1.2}
                >
                  Get Your Tickets
                </AuroraText>
              </h2>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                Secure your spot for Cyprus' most epic 2-day celebration
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-16 md:space-y-8">
              {/* Mobile: Separate Cards | Desktop: Unified Card */}
              <div className="md:bg-gradient-to-br md:from-white/[0.03] md:to-white/[0.01] md:border md:border-white/10 md:rounded-3xl md:p-12 md:backdrop-blur-sm md:shadow-2xl md:shadow-violet-500/5 md:space-y-12">
                
                {/* Ticket Selection Card */}
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 mb-12 md:mb-0 md:bg-transparent md:border-0 md:p-0 backdrop-blur-sm">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Select Tickets</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Adult Ticket */}
                    <div className="group relative p-5 md:p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-violet-500" />
                            <h4 className="text-lg font-bold text-white">Adult</h4>
                          </div>
                          <div className="text-2xl md:text-3xl font-black text-violet-400 mb-1">€25</div>
                          <div className="text-xs text-white/50">Ages 13+</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => handleQuantityChange('adult', -1)}
                            disabled={adultTickets === 0}
                            className="w-10 h-10 md:w-8 md:h-8 rounded-lg border border-white/10 bg-white/[0.02] text-white hover:bg-violet-500/20 hover:border-violet-500/50 transition-all flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            <Minus className="w-4 h-4 md:w-3.5 md:h-3.5" />
                          </button>
                          <div className="w-12 md:w-10 text-center text-xl font-bold text-white">
                            {adultTickets}
                          </div>
                          <button
                            type="button"
                            onClick={() => handleQuantityChange('adult', 1)}
                            disabled={adultTickets >= 10}
                            className="w-10 h-10 md:w-8 md:h-8 rounded-lg border border-white/10 bg-white/[0.02] text-white hover:bg-violet-500/20 hover:border-violet-500/50 transition-all flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            <Plus className="w-4 h-4 md:w-3.5 md:h-3.5" />
                          </button>
                        </div>
                      </div>
                      <div className="text-xs text-white/60 space-y-1">
                        <div>• Full access</div>
                        <div>• VR & planetarium</div>
                        <div>• Live entertainment</div>
                      </div>
                    </div>

                    {/* Child Ticket */}
                    <div className="group relative p-5 md:p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-cyan-500" />
                            <h4 className="text-lg font-bold text-white">Child</h4>
                          </div>
                          <div className="text-2xl md:text-3xl font-black text-cyan-400 mb-1">Free</div>
                          <div className="text-xs text-white/50">Ages 12 & under</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => handleQuantityChange('child', -1)}
                            disabled={childTickets === 0}
                            className="w-10 h-10 md:w-8 md:h-8 rounded-lg border border-white/10 bg-white/[0.02] text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            <Minus className="w-4 h-4 md:w-3.5 md:h-3.5" />
                          </button>
                          <div className="w-12 md:w-10 text-center text-xl font-bold text-white">
                            {childTickets}
                          </div>
                          <button
                            type="button"
                            onClick={() => handleQuantityChange('child', 1)}
                            disabled={childTickets >= 10}
                            className="w-10 h-10 md:w-8 md:h-8 rounded-lg border border-white/10 bg-white/[0.02] text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            <Plus className="w-4 h-4 md:w-3.5 md:h-3.5" />
                          </button>
                        </div>
                      </div>
                      <div className="text-xs text-white/60 space-y-1">
                        <div>• Full access</div>
                        <div>• Kids zone</div>
                        <div>• With adult</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Divider */}
                <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Personal Information Card */}
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 mb-12 md:mb-0 md:bg-transparent md:border-0 md:p-0 backdrop-blur-sm">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Your Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                        placeholder="Doe"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-white/70 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-white/70 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
                        placeholder="+357 99 123 456"
                      />
                    </div>
                  </div>
                </div>

                {/* Desktop Divider */}
                <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Order Summary Card */}
                <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl p-6 md:bg-transparent md:border-0 md:p-0 backdrop-blur-sm">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      {(adultTickets > 0 || childTickets > 0) ? (
                        <div className="flex flex-wrap items-center gap-3">
                          {adultTickets > 0 && (
                            <div className="px-4 py-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                              <span className="text-sm text-white/80">{adultTickets}x Adult</span>
                              <span className="text-sm font-semibold text-violet-400 ml-2">€{adultTickets * adultPrice}</span>
                            </div>
                          )}
                          {childTickets > 0 && (
                            <div className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                              <span className="text-sm text-white/80">{childTickets}x Child</span>
                              <span className="text-sm font-semibold text-cyan-400 ml-2">Free</span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <p className="text-white/40 text-sm">Select tickets above</p>
                      )}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-violet-400/70" />
                          <span>3-4 October</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-cyan-400/70" />
                          <span>Nicosia, Cyprus</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-white/10 sm:border-t-0 sm:pt-0">
                      <div className="text-center sm:text-right">
                        <div className="text-xs text-white/60 mb-1">Total</div>
                        <div className="text-2xl md:text-3xl font-black text-violet-400">€{totalPrice}</div>
                      </div>
                      <ShimmerButton
                        type="submit"
                        disabled={totalPrice === 0 || !formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                        className="shadow-2xl px-6 md:px-8 py-3 md:py-4 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap w-full sm:w-auto"
                        shimmerColor="#a855f7"
                        shimmerSize="0.08em"
                        background="linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(6, 182, 212, 0.08) 100%)"
                      >
                        <span className="flex items-center justify-center gap-2 font-semibold text-white tracking-wide">
                          Proceed to Payment
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-violet-400/80 flex-shrink-0" />
                        </span>
                      </ShimmerButton>
                    </div>
                  </div>
                  <p className="text-xs text-white/40 text-center mt-6 pt-6 border-t border-white/5 md:mt-8">
                    Secure checkout powered by Stripe
                  </p>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
