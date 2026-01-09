'use client';

import { ParallaxHero } from '@/components/ui/parallax-hero';
import { HeroCollage } from '@/components/ui/modern-hero-section';
import { OnboardingChecklist } from '@/components/ui/onboarding-checklist';
import InteractiveImageBentoGallery from '@/components/ui/bento-gallery';
import { OfferCarousel, type Offer } from '@/components/ui/offer-carousel';
import { AnimatedHikeCard, type Stat } from '@/components/ui/card-25';
import { CosmicBackground } from '@/components/ui/cosmic-background';
import { SparklesText } from '@/components/ui/sparkles-text';
import { AuroraText } from '@/components/ui/aurora-text';
import { Timeline } from '@/components/ui/timeline';
import { Clock, Users, Music, Trophy, Telescope, Gamepad2, Gift, ShoppingBag } from 'lucide-react';

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
              <Clock className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">10:00 AM - Welcome & Registration</div>
                <div className="text-white/60">Check-in and receive your event pass</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Telescope className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">10:30 AM - Telescope Viewing Session</div>
                <div className="text-white/60">Observe planets and stars with professional telescopes</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Gamepad2 className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
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
              <Users className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">2:00 PM - Interactive Workshops</div>
                <div className="text-white/60">Learn about space science and astronomy</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Trophy className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">3:30 PM - Cosmic Games & Contests</div>
                <div className="text-white/60">Compete in space trivia and win prizes</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <ShoppingBag className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
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
              <Telescope className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">7:00 PM - Night Telescope Session</div>
                <div className="text-white/60">Stargazing with expert astronomers</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Music className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">9:00 PM - DJ Party Night</div>
                <div className="text-white/60">Dance under the stars with cosmic beats (18+)</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Gift className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
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
              <Clock className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">10:00 AM - Day 2 Kickoff</div>
                <div className="text-white/60">All activities resume with new experiences</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Trophy className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">3:00 PM - Grand Finale Contests</div>
                <div className="text-white/60">Final competitions with major prizes</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Music className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">8:00 PM - Closing Celebration</div>
                <div className="text-white/60">Final night party with special performances</div>
              </div>
            </div>
            <div className="flex gap-3 items-start text-white/80 text-xs md:text-sm">
              <Gift className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" />
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
                sparklesCount={6}
                colors={{ first: '#f59e0b', second: '#fbbf24' }}
              >
                <AuroraText
                  colors={['#f59e0b', '#fbbf24', '#fcd34d', '#f59e0b']}
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
          accentColor="text-amber-500"
        />

        {/* Event Timeline */}
        <div className="w-full">
          <Timeline data={timelineData} />
        </div>

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
