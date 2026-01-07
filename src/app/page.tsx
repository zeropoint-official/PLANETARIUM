'use client';

import { ParallaxHero } from '@/components/ui/parallax-hero';
import { HeroCollage } from '@/components/ui/modern-hero-section';
import { OnboardingChecklist } from '@/components/ui/onboarding-checklist';
import InteractiveImageBentoGallery from '@/components/ui/bento-gallery';
import { OfferCarousel, type Offer } from '@/components/ui/offer-carousel';
import { AnimatedHikeCard, type Stat } from '@/components/ui/card-25';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { ScrollFlyIn } from '@/components/ui/hero-section-3';
import { Timeline } from '@/components/ui/timeline';
import { SparklesText } from '@/components/ui/sparkles-text';
import { AuroraText } from '@/components/ui/aurora-text';
import { Clock, Users, Music, Trophy, Telescope, Gamepad2, Gift, ShoppingBag, Sparkles, Star, PartyPopper, Rocket } from 'lucide-react';

export default function Home() {
  // Daytime Activities Section Data
  const daytimeStats = [
    { value: '10+', label: 'Daytime Activities' },
    { value: '8', label: 'Hours of Fun' },
    { value: '5', label: 'Main Attractions' },
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

  // Bento Gallery Data
  const galleryItems = [
    {
      id: 1,
      title: "VR Space Adventures",
      desc: "Immerse yourself in virtual reality space exploration.",
      url: "https://images.unsplash.com/photo-1593508512255-86ab42a0e620?w=800&q=80",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      title: "Telescope Observations",
      desc: "View planets and stars through professional telescopes.",
      url: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&q=80",
      span: "md:row-span-1",
    },
    {
      id: 3,
      title: "Interactive Games",
      desc: "Fun space-themed games and challenges for all ages.",
      url: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
      span: "md:row-span-1",
    },
    {
      id: 4,
      title: "DJ Party Night",
      desc: "Dance under the stars with cosmic beats and drinks.",
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
      span: "md:row-span-2",
    },
    {
      id: 5,
      title: "Contests & Competitions",
      desc: "Win amazing prizes in space trivia and challenges.",
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      span: "md:row-span-1",
    },
    {
      id: 6,
      title: "Merchandise Shops",
      desc: "Exclusive space-themed souvenirs and collectibles.",
      url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      id: 7,
      title: "Giveaways & Prizes",
      desc: "Exciting giveaways throughout the event.",
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80",
      span: "md:row-span-1",
    },
  ];

  // Offer Carousel Data
  const offers: Offer[] = [
    {
      id: 1,
      imageSrc: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80",
      imageAlt: "Early bird ticket offer",
      tag: "Early Bird",
      title: "Save 30% on Tickets",
      description: "Book now and get exclusive early bird pricing for both days.",
      brandLogoSrc: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=100&q=80",
      brandName: "Planetarium",
      promoCode: "EARLY30",
      href: "#",
    },
    {
      id: 2,
      imageSrc: "https://images.unsplash.com/photo-1593508512255-86ab42a0e620?w=800&q=80",
      imageAlt: "VR package deal",
      tag: "Package Deal",
      title: "VR Experience Bundle",
      description: "Get unlimited VR sessions plus priority access.",
      brandLogoSrc: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=100&q=80",
      brandName: "VR Zone",
      promoCode: "VRBUNDLE",
      href: "#",
    },
    {
      id: 3,
      imageSrc: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
      imageAlt: "Group discount",
      tag: "Group Discount",
      title: "Bring 5+ Friends",
      description: "Groups of 5 or more get 20% off all tickets.",
      brandLogoSrc: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=100&q=80",
      brandName: "Group Rates",
      promoCode: "GROUP20",
      href: "#",
    },
    {
      id: 4,
      imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      imageAlt: "Merchandise offer",
      tag: "Special Offer",
      title: "Free Gift with Purchase",
      description: "Spend €50+ at shops and get a free cosmic t-shirt.",
      brandLogoSrc: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=100&q=80",
      brandName: "Event Shop",
      promoCode: "FREETEE",
      href: "#",
    },
    {
      id: 5,
      imageSrc: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      imageAlt: "DJ party tickets",
      tag: "Night Event",
      title: "DJ Party Access",
      description: "Special pricing for night party with drinks included.",
      brandLogoSrc: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=100&q=80",
      brandName: "Night Party",
      promoCode: "NIGHT25",
      href: "#",
    },
  ];

  // Feature Cards Data
  const vrCard = {
    title: "VR Experience",
    images: [
      "https://images.unsplash.com/photo-1593508512255-86ab42a0e620?w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80",
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80",
    ],
    stats: [
      { icon: <Clock className="h-4 w-4" />, label: "30 min sessions" },
      { icon: <Users className="h-4 w-4" />, label: "Multiplayer" },
      { icon: <Gamepad2 className="h-4 w-4" />, label: "Interactive" },
    ] as Stat[],
    description: "Step into virtual reality and explore distant galaxies, walk on Mars, or journey through black holes in immersive VR experiences.",
    href: "#",
  };

  const telescopeCard = {
    title: "Telescope Viewing",
    images: [
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&q=80",
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80",
      "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&q=80",
    ],
    stats: [
      { icon: <Telescope className="h-4 w-4" />, label: "Professional" },
      { icon: <Clock className="h-4 w-4" />, label: "Night sessions" },
      { icon: <Users className="h-4 w-4" />, label: "Guided tours" },
    ] as Stat[],
    description: "Observe Saturn's rings, Jupiter's moons, and distant nebulas through our state-of-the-art telescopes with expert astronomers.",
    href: "#",
  };

  const djPartyCard = {
    title: "DJ Party Night",
    images: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
      "https://images.unsplash.com/photo-1501281668745-f7f57525c1b4?w=800&q=80",
    ],
    stats: [
      { icon: <Music className="h-4 w-4" />, label: "Live DJ" },
      { icon: <Clock className="h-4 w-4" />, label: "9PM - 2AM" },
      { icon: <Users className="h-4 w-4" />, label: "18+" },
    ] as Stat[],
    description: "As night falls, the planetarium transforms into a cosmic dance floor with DJ sets, drinks, and dancing games under the stars.",
    href: "#",
  };

  const contestsCard = {
    title: "Contests & Games",
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80",
    ],
    stats: [
      { icon: <Trophy className="h-4 w-4" />, label: "Prizes" },
      { icon: <Gamepad2 className="h-4 w-4" />, label: "Fun games" },
      { icon: <Gift className="h-4 w-4" />, label: "Giveaways" },
    ] as Stat[],
    description: "Compete in space trivia, cosmic challenges, and interactive games. Win exclusive prizes and merchandise throughout the event.",
    href: "#",
  };

  return (
    <main className="relative">
      {/* Existing Parallax Hero - higher z-index to stay above background */}
      <div className="relative z-20">
        <ParallaxHero />
      </div>

      {/* Fixed animated background with continuous movement, stars, and dark overlay */}
      <AnimatedBackground />

      {/* All sections after hero - content scrolls over fixed background */}
      <div className="relative z-10">
        {/* Daytime Activities Section */}
        <HeroCollage
          title={
            <>
              <span className="block text-white">Daytime</span>
              <SparklesText
                className="block"
                sparklesCount={6}
                colors={{ first: '#a855f7', second: '#22d3ee' }}
              >
                <AuroraText
                  colors={['#a855f7', '#ec4899', '#06b6d4', '#8b5cf6']}
                  speed={1.0}
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

        {/* Scroll Fly-In Section with Plane */}
        <div className="w-full text-foreground">
          <ScrollFlyIn
            imageUrl="/plane.png"
            imageAlt="Plane flying across the screen"
          >
            <div className="max-w-3xl mx-auto px-4 text-center">
              <p className="text-md font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Join the Journey
              </p>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight mt-2 text-white">
                Where adventures take flight
              </h2>
            </div>
          </ScrollFlyIn>
        </div>

        {/* Event Timeline Section */}
        <section className="w-full py-16">
          <Timeline
            title="Event Schedule"
            subtitle="Two days of non-stop entertainment, activities, and cosmic experiences. Here's what awaits you at the Planetarium Festival."
            data={[
              {
                title: "Day 1 Morning",
                content: (
                  <div>
                    <p className="text-white/70 text-sm md:text-base font-normal mb-6">
                      Kick off your cosmic adventure with hands-on activities and immersive experiences
                    </p>
                    <div className="mb-6 space-y-3">
                      <div className="flex gap-3 items-center text-white/60 text-sm md:text-base">
                        <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                          <Rocket className="w-4 h-4 text-violet-400" />
                        </div>
                        <span>10:00 AM — Gates Open & Welcome Show</span>
                      </div>
                      <div className="flex gap-3 items-center text-white/60 text-sm md:text-base">
                        <div className="w-8 h-8 rounded-lg bg-fuchsia-500/20 flex items-center justify-center">
                          <Gamepad2 className="w-4 h-4 text-fuchsia-400" />
                        </div>
                        <span>11:00 AM — VR Space Exploration Opens</span>
                      </div>
                      <div className="flex gap-3 items-center text-white/60 text-sm md:text-base">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                          <Telescope className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span>12:00 PM — Solar Observation Session</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80"
                        alt="VR Experience"
                        className="rounded-xl object-cover h-32 md:h-44 w-full border border-white/10"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&q=80"
                        alt="Telescope"
                        className="rounded-xl object-cover h-32 md:h-44 w-full border border-white/10"
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "Day 1 Afternoon",
                content: (
                  <div>
                    <p className="text-white/70 text-sm md:text-base font-normal mb-6">
                      Interactive workshops, contests, and entertainment for all ages
                    </p>
                    <div className="mb-6 space-y-3">
                      <div className="flex gap-3 items-center text-white/60 text-sm md:text-base">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                          <Trophy className="w-4 h-4 text-amber-400" />
                        </div>
                        <span>2:00 PM — Space Trivia Championship</span>
                      </div>
                      <div className="flex gap-3 items-center text-white/60 text-sm md:text-base">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                          <Users className="w-4 h-4 text-emerald-400" />
                        </div>
                        <span>3:30 PM — Kids Space Academy Workshop</span>
                      </div>
                      <div className="flex gap-3 items-center text-white/60 text-sm md:text-base">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                          <Gift className="w-4 h-4 text-orange-400" />
                        </div>
                        <span>5:00 PM — Giveaway & Prize Draw</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
                        alt="Contest"
                        className="rounded-xl object-cover h-32 md:h-44 w-full border border-white/10"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80"
                        alt="Games"
                        className="rounded-xl object-cover h-32 md:h-44 w-full border border-white/10"
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "Day 1 Night",
                content: (
                  <div>
                    <p className="text-white/70 text-sm md:text-base font-normal mb-6">
                      As the sun sets, the real party begins under the stars
                    </p>
                    <div className="mb-6 space-y-3">
                      <div className="flex gap-3 items-center text-white/60 text-sm md:text-base">
                        <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                          <Star className="w-4 h-4 text-violet-400" />
                        </div>
                        <span>7:00 PM — Stargazing Session Opens</span>
                      </div>
                      <div className="flex gap-3 items-center text-white/60 text-sm md:text-base">
                        <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center">
                          <Music className="w-4 h-4 text-pink-400" />
                        </div>
                        <span>9:00 PM — DJ Night Party Begins</span>
                      </div>
                      <div className="flex gap-3 items-center text-white/60 text-sm md:text-base">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-blue-400" />
                        </div>
                        <span>11:00 PM — Cosmic Light Show</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
                        alt="DJ Party"
                        className="rounded-xl object-cover h-32 md:h-44 w-full border border-white/10"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80"
                        alt="Night Sky"
                        className="rounded-xl object-cover h-32 md:h-44 w-full border border-white/10"
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "Day 2",
                content: (
                  <div>
                    <p className="text-white/70 text-sm md:text-base font-normal mb-6">
                      The grand finale with exclusive experiences and closing ceremonies
                    </p>
                    <div className="mb-6 space-y-3">
                      <div className="flex gap-3 items-center text-white/60 text-sm md:text-base">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                          <Telescope className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span>10:00 AM — Special Dome Shows</span>
                      </div>
                      <div className="flex gap-3 items-center text-white/60 text-sm md:text-base">
                        <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                          <Trophy className="w-4 h-4 text-violet-400" />
                        </div>
                        <span>2:00 PM — Grand Prize Ceremony</span>
                      </div>
                      <div className="flex gap-3 items-center text-white/60 text-sm md:text-base">
                        <div className="w-8 h-8 rounded-lg bg-fuchsia-500/20 flex items-center justify-center">
                          <PartyPopper className="w-4 h-4 text-fuchsia-400" />
                        </div>
                        <span>6:00 PM — Closing Celebration</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80"
                        alt="Space Show"
                        className="rounded-xl object-cover h-32 md:h-44 w-full border border-white/10"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80"
                        alt="Celebration"
                        className="rounded-xl object-cover h-32 md:h-44 w-full border border-white/10"
                      />
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </section>

        {/* Onboarding Checklist */}
        <section className="w-full flex items-center justify-center p-4 py-16">
          <OnboardingChecklist
            title={checklistData.title}
            description={checklistData.description}
            items={checklistData.items}
            videoThumbnailUrl={checklistData.videoThumbnailUrl}
            videoUrl={checklistData.videoUrl}
          />
        </section>

        {/* Bento Gallery */}
        <InteractiveImageBentoGallery
          imageItems={galleryItems}
          title="Explore Our Activities"
          description="From virtual reality space journeys to telescope observations, interactive games to night parties - discover everything the festival has to offer."
        />

        {/* Offer Carousel */}
        <section className="w-full py-16 px-4">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground text-center">Special Offers & Deals</h2>
            <OfferCarousel offers={offers} />
          </div>
        </section>

        {/* Feature Cards */}
        <section className="w-full py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">Featured Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              <AnimatedHikeCard {...vrCard} />
              <AnimatedHikeCard {...telescopeCard} />
              <AnimatedHikeCard {...djPartyCard} />
              <AnimatedHikeCard {...contestsCard} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
