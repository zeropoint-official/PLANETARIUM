# ZeroPoint Scroll Animations Guide

A reference guide for implementing GSAP scroll-triggered animations across sections.

---

## Dependencies

```tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin (do this once, typically in useEffect or at component level)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
```

---

## Class Naming Convention

Use these class names for GSAP to target:

| Class | Purpose |
|-------|---------|
| `.section-title` | Section header (h2 + subtitle) |
| `.section-card` | Individual cards/items in a section |
| `.card-image` | Image container within a card |
| `.card-content` | Content area within a card |
| `.card-glow` | Glow effect element |
| `.reveal-text` | Individual text elements to reveal with stagger |
| `.orbit-element` | Floating/orbiting particles |

---

## Animation Patterns

### 1. Section Title Entrance

Fades in the section title when scrolling into view. Reverses when scrolling back up past it.

```tsx
// Set initial state
gsap.set('.section-title', { opacity: 0, y: 60, scale: 0.95 });

// Animate on scroll
gsap.timeline({
  scrollTrigger: {
    trigger: '.section-title',
    start: "top 85%",
    end: "bottom 60%",
    toggleActions: "play none none reverse"
  }
}).to('.section-title', {
  opacity: 1,
  y: 0,
  scale: 1,
  duration: 0.6,
  ease: "power2.out"
});
```

**Timing Values:**
- Duration: `0.6s`
- Ease: `power2.out`
- Start: `top 85%` (triggers when top of element is 85% down the viewport)

---

### 2. Card/Item Entrance

Cards fade in with scale and slide effect. Good for service cards, portfolio items, etc.

```tsx
const cards = document.querySelectorAll('.section-card');

// Set initial states
gsap.set(cards, { opacity: 0, y: 60, scale: 0.95 });

cards.forEach((card, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      end: "bottom 15%",
      toggleActions: "play none none reverse"
    }
  }).to(card, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.5,
    ease: "power2.out"
  });
});
```

**Timing Values:**
- Duration: `0.5s`
- Initial y offset: `60px`
- Initial scale: `0.95`

---

### 3. Staggered Content Reveal (Repeatable)

Individual content elements reveal with stagger. **Appears AND disappears** based on scroll position.

```tsx
const content = document.querySelector('.card-content');
const revealElements = content.querySelectorAll('.reveal-text');

// Set initial state for content wrapper
gsap.set(content, { opacity: 0, y: 30 });

// Animate content wrapper
gsap.to(content, {
  opacity: 1,
  y: 0,
  duration: 0.4,
  ease: "power2.out",
  scrollTrigger: {
    trigger: content,
    start: "top 85%",
    toggleActions: "play none none reverse"
  }
});

// Staggered reveal for individual elements (repeatable)
gsap.fromTo(revealElements, 
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: 0.35,
    stagger: 0.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: content,
      start: "top 85%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse"
    }
  }
);
```

**toggleActions explained:**
- `"play reverse play reverse"` = appears on scroll down, disappears on scroll past, reappears on scroll back up, disappears again when scrolling up past

**Timing Values:**
- Duration: `0.35s` per element
- Stagger: `0.05s` between elements
- Initial y offset: `20px`

---

### 4. Parallax Effect

Subtle vertical movement as you scroll past an element.

```tsx
gsap.to('.section-card', {
  yPercent: -10,  // Moves up 10% of its height
  ease: "none",
  scrollTrigger: {
    trigger: '.section-card',
    start: "top bottom",
    end: "bottom top",
    scrub: 0.5  // Smooth scrubbing (0.5s lag)
  }
});
```

**Values:**
- `yPercent: -10` to `-30` (subtle to noticeable)
- `scrub: 0.5` (responsive) to `scrub: 2` (smoother/slower)

---

### 5. Floating Animation (Continuous)

Continuous floating effect that starts when element enters viewport and stops when it leaves.

```tsx
const card = document.querySelector('.section-card');
const image = card.querySelector('.card-image');
const glow = card.querySelector('.card-glow');

gsap.timeline({
  scrollTrigger: {
    trigger: card,
    start: "top 85%",
    end: "bottom 15%",
    toggleActions: "play none none reverse",
    onEnter: () => {
      // Start floating animation
      gsap.to(image, {
        y: "+=20",
        rotation: 2,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
      
      // Glow pulse
      gsap.to(glow, {
        scale: 1.1,
        opacity: 0.8,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    onLeave: () => {
      // Kill animations when leaving
      gsap.killTweensOf([image, glow]);
    },
    onEnterBack: () => {
      // Restart when scrolling back
      gsap.to(image, {
        y: "+=20",
        rotation: 2,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(glow, {
        scale: 1.1,
        opacity: 0.8,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    onLeaveBack: () => {
      gsap.killTweensOf([image, glow]);
    }
  }
});
```

---

### 6. Orbit/Particle Animation

Rotating particles around an element.

```tsx
const orbitElements = card.querySelectorAll('.orbit-element');

// In onEnter callback:
orbitElements.forEach((orbit, i) => {
  gsap.to(orbit, {
    rotation: 360,
    duration: 10 + i * 3,  // Staggered speeds
    ease: "none",
    repeat: -1,
  });
});

// In onLeave/onLeaveBack callback:
gsap.killTweensOf(orbitElements);
```

---

## Complete Section Example

Here's a full implementation pattern for a section:

### HTML Structure

```tsx
<section ref={sectionRef} className="relative py-12 md:py-20">
  <div className="container mx-auto">
    
    {/* Section Header */}
    <div className="section-title mb-16">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-px bg-orange-500" />
        <span className="text-xs tracking-[0.2em] text-orange-500 uppercase">
          Section Label
        </span>
      </div>
      <h2 className="text-4xl font-light text-white">Section Title</h2>
      <p className="text-slate-500 mt-2">Section description</p>
    </div>

    {/* Cards */}
    <div className="space-y-32">
      {items.map((item, index) => (
        <div key={item.id} className="section-card relative">
          
          {/* Glow Effect */}
          <div className="card-glow absolute inset-0 pointer-events-none opacity-50"
            style={{
              background: `radial-gradient(circle, ${item.glowColor} 0%, transparent 55%)`,
              filter: 'blur(60px)',
            }}
          />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image */}
            <div className="card-image relative">
              {/* Orbit elements */}
              <div className="orbit-element absolute w-3 h-3 rounded-full bg-orange-500" 
                style={{ left: '10%', top: '20%' }} 
              />
              <Image src={item.image} alt={item.title} />
            </div>

            {/* Content */}
            <div className="card-content">
              <div className="reveal-text mb-4">
                <span className="text-xs font-mono text-orange-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="reveal-text mb-3">
                <h3 className="text-3xl font-light text-white">{item.title}</h3>
              </div>
              <div className="reveal-text mb-6">
                <p className="text-slate-400">{item.description}</p>
              </div>
              <div className="reveal-text">
                <Link href={item.link}>Learn more →</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

### JavaScript/React Implementation

```tsx
useEffect(() => {
  const section = sectionRef.current;
  if (!section) return;

  const ctx = gsap.context(() => {
    const title = section.querySelector('.section-title');
    const cards = section.querySelectorAll('.section-card');

    // Title animation
    if (title) {
      gsap.set(title, { opacity: 0, y: 60, scale: 0.95 });
      gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }).to(title, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out"
      });
    }

    // Card animations
    cards.forEach((card, index) => {
      const image = card.querySelector('.card-image');
      const content = card.querySelector('.card-content');
      const glow = card.querySelector('.card-glow');
      const orbits = card.querySelectorAll('.orbit-element');
      const reveals = card.querySelectorAll('.reveal-text');

      // Initial states
      gsap.set(card, { opacity: 0, y: 60, scale: 0.95 });
      if (content) gsap.set(content, { opacity: 0, y: 30 });

      // Card entrance with floating animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            if (image) {
              gsap.to(image, {
                y: "+=20",
                rotation: index % 2 === 0 ? 2 : -2,
                duration: 4 + index,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
              });
            }
            if (glow) {
              gsap.to(glow, {
                scale: 1.1,
                opacity: 0.8,
                duration: 3,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
              });
            }
            orbits.forEach((orbit, i) => {
              gsap.to(orbit, {
                rotation: 360,
                duration: 10 + i * 3,
                ease: "none",
                repeat: -1,
              });
            });
          },
          onLeave: () => gsap.killTweensOf([image, glow, ...orbits].filter(Boolean)),
          onEnterBack: () => {
            // Same as onEnter
          },
          onLeaveBack: () => gsap.killTweensOf([image, glow, ...orbits].filter(Boolean))
        }
      });

      // Staggered entrance
      tl.to(card, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" })
        .to(content, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.3");

      // Reveal text animation (repeatable)
      if (reveals.length > 0) {
        gsap.fromTo(reveals,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: content,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse"
            }
          }
        );
      }

      // Parallax
      gsap.to(card, {
        yPercent: -10 * (index + 1),
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5
        }
      });
    });
  }, section);

  return () => ctx.revert();
}, []);
```

---

## Quick Reference - Timing Values

| Property | Fast | Normal | Slow |
|----------|------|--------|------|
| **Title duration** | 0.4s | 0.6s | 1.0s |
| **Card duration** | 0.3s | 0.5s | 0.8s |
| **Reveal duration** | 0.25s | 0.35s | 0.5s |
| **Stagger** | 0.03s | 0.05s | 0.1s |
| **Floating duration** | 3s | 4s | 6s |
| **Glow pulse** | 2s | 3s | 4s |
| **Orbit rotation** | 8s | 10s | 15s |

---

## toggleActions Reference

Format: `"onEnter onLeave onEnterBack onLeaveBack"`

| Value | Effect |
|-------|--------|
| `play` | Play animation forward |
| `reverse` | Play animation backward |
| `none` | Do nothing |
| `restart` | Jump to start and play |
| `reset` | Jump to start |
| `complete` | Jump to end |
| `pause` | Pause animation |

**Common patterns:**
- `"play none none reverse"` - Play once, reverse when scrolling back up past
- `"play reverse play reverse"` - Repeatable (play/reverse based on scroll direction)
- `"play none none none"` - Play once, never reverse

---

## Mobile Considerations

```tsx
// Detect mobile
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;

// Skip complex animations on mobile
if (isMobile) {
  // Use simpler/faster animations
  gsap.set(cards, { opacity: 1, y: 0, scale: 1 }); // Skip entrance
  return;
}
```

---

## Cleanup

Always clean up GSAP contexts to prevent memory leaks:

```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    // All your animations here
  }, containerRef);

  return () => ctx.revert(); // Cleanup on unmount
}, []);
```
