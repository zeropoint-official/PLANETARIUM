'use client';

import { ParallaxHero } from '@/components/ui/parallax-hero';
import { HeroCollage } from '@/components/ui/modern-hero-section';
import { ExpandableFestivalCard } from '@/components/ui/expandable-festival-card';
import { CosmicBackground } from '@/components/ui/cosmic-background';
import { SparklesText } from '@/components/ui/sparkles-text';
import { AuroraText } from '@/components/ui/aurora-text';
import { Timeline } from '@/components/ui/timeline';
import { Clock, Telescope, Music, Users, MapPin, Gamepad2, Trophy, ShoppingBag, Gift, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Home() {

  // Daytime Activities Section Data
  const daytimeStats = [
    { value: '50+', label: 'Activities & Demos' },
    { value: '20', label: 'Hours of Entertainment' },
    { value: '6', label: 'Experience Zones' },
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
            The planetarium comes alive — kids zone, immersive dome projections, and the vendor market opens its doors
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Clock className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">10:00 AM - Gates Open</div>
                <div className="text-white/60">Check-in and explore the transformed planetarium</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Gamepad2 className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">10:30 AM - Kids Zone Opens</div>
                <div className="text-white/60">Board games, arts & crafts, survival games, and VR experiences</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <ShoppingBag className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">11:00 AM - Vendor Market & Food Court</div>
                <div className="text-white/60">Local fashion, accessories, pop-up library, street food & craft coffee</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80"
              alt="Kids activities"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1593508512255-86ab42a0e620?w=800&q=80"
              alt="VR experience"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
              alt="Street food"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&q=80"
              alt="Dome projections"
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
            Live sports demonstrations, dance performances, and nutrition workshops take centre stage
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Trophy className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">1:00 PM - Live Sports Demonstrations</div>
                <div className="text-white/60">Gymnastics, judo, karate & boxing with top athletes and coaches</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Music className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">3:00 PM - Dance Performances</div>
                <div className="text-white/60">Traditional Cypriot dances, tango, aerobics & more from local dance schools</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Users className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">5:00 PM - Nutrition Workshops</div>
                <div className="text-white/60">Talks and demos from athletes and nutrition experts</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
              alt="Sports demonstrations"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
              alt="Workshops"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
              alt="Vendor market"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80"
              alt="Dance performances"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Day 1 - Night Party",
      content: (
        <div>
          <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
            The planetarium transforms into one of the island's most unique nightlife settings
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Music className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">8:00 PM - Night Party Begins</div>
                <div className="text-white/60">The venue shifts into a completely different atmosphere</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Telescope className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">9:00 PM - Renowned DJs Take the Stage</div>
                <div className="text-white/60">A curated lineup for an unforgettable Friday night</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Gift className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">Late Night - Party Till Late</div>
                <div className="text-white/60">Dance under the dome in Cyprus' most unique party venue</div>
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
            All zones reopen with fresh lineups — plus a brand new party with different DJs and organizers to close the weekend
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Clock className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">10:00 AM - Day 2 Opens</div>
                <div className="text-white/60">Kids zone, sports demos, dance shows & vendor market all return</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Trophy className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">2:00 PM - New Sports & Dance Lineups</div>
                <div className="text-white/60">Fresh demonstrations and performances you won't want to miss</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Music className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">8:00 PM - Night 2: A Different Party</div>
                <div className="text-white/60">New DJs, new organizers — a completely different vibe to close the weekend</div>
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
              alt="Entertainment"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80"
              alt="Planetarium"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80"
              alt="Closing party"
              className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full border border-white/10"
            />
          </div>
        </div>
      ),
    },
  ];

  // Onboarding Checklist Data
  const checklistData = {
    title: "Prepare for the Takeover",
    description: "Everything you need for two days of non-stop fun at the planetarium",
    items: [
      { id: 1, text: "Event tickets (printed or digital)" },
      { id: 2, text: "Valid ID for night party entry" },
      {
        id: 3,
        text: "Comfortable clothing & shoes",
        helperText: "Daytime is active!",
        helperLink: { href: "#", text: "Check guidelines" }
      },
      {
        id: 4,
        text: "Camera or phone for photos",
        helperText: "Photography allowed?",
        helperLink: { href: "#", text: "See policy" }
      },
      { id: 5, text: "Cash or card for vendors, food & drinks" },
      { id: 6, text: "The kids — it's a family-friendly daytime!" },
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
        <section id="activities">
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
                    Experience
                  </AuroraText>
                </SparklesText>
              </>
            }
            subtitle="From sunrise to sunset — a kids zone with board games, VR, and dome projections, live sports demonstrations, dance performances from traditional Cypriot to tango, nutrition workshops, and a full vendor market with street food, craft coffee, and local fashion."
            stats={daytimeStats}
            images={daytimeImages}
            accentColor="text-violet-500"
          />
        </section>

        {/* Event Timeline */}
        <section id="schedule" className="w-full">
          <Timeline data={timelineData} />
        </section>

        {/* Preparation Checklist */}
        <section id="experience" className="w-full flex items-center justify-center p-4 py-16">
          <div className="max-w-6xl mx-auto w-full">
            <ExpandableFestivalCard 
              items={checklistData.items}
            />
          </div>
        </section>

        {/* Ticket Purchase Section */}
        <section id="tickets" className="w-full py-20 px-4 relative">
          <div id="location" className="absolute -top-20" />
          <div className="max-w-xl mx-auto">

            {/* Title */}
            <div className="text-center mb-12">
              <div className="text-xs text-violet-400/70 uppercase tracking-[0.25em] font-medium mb-4">Tickets</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
                <AuroraText colors={['#a855f7', '#ec4899', '#06b6d4', '#8b5cf6']} speed={1.2}>
                  Get Your Tickets
                </AuroraText>
              </h2>
              <p className="text-base md:text-lg text-white/60 max-w-lg mx-auto">
                Full access to all daytime activities — kids zone, sports, dance shows, vendor market & dome projections. Night party included.
              </p>
            </div>

            {/* Single Ticket Card */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">

              {/* Pricing tiers */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-3xl font-black text-white mb-1">€20</div>
                  <div className="text-xs text-white/40">Adults<br/>18+</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-3xl font-black text-violet-400 mb-1">€5</div>
                  <div className="text-xs text-white/40">Teens<br/>14–18</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-3xl font-black text-cyan-400 mb-1">Free</div>
                  <div className="text-xs text-white/40">Kids<br/>under 14</div>
                </div>
              </div>

              {/* Inclusions */}
              <ul className="space-y-3 mb-8">
                {[
                  'Full daytime access — all zones & activities',
                  'Night party entry (18+)',
                  'Kids zone, VR & immersive dome projections',
                  'Live sports demonstrations & dance performances',
                  'Vendor market, street food & drinks',
                  'Children under 14 must be accompanied by a ticketed adult',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white/[0.04] border border-white/10 text-white/40 font-semibold cursor-default select-none"
              >
                <ExternalLink className="w-4 h-4" />
                Buy Tickets — Coming Soon
              </a>
              <p className="text-xs text-white/25 text-center mt-3">Online ticket sales opening soon</p>
            </div>

            {/* Bottom info */}
            <div className="flex items-center justify-center gap-6 mt-10 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-violet-400/70" />
                <span>10-11 October</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400/70" />
                <span>Nicosia, Cyprus</span>
              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
