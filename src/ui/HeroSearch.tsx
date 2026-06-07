import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HERO_SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80',
    alt: 'Modern luxury bedroom interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    alt: 'Premium villa with pool',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    alt: 'Luxury living room in Bengaluru',
  },
] as const

const SLIDE_INTERVAL_MS = 5000

export function HeroSearch() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_SLIDES.length)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-73px)] overflow-hidden" id="top">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={HERO_SLIDES[active]!.src}
            alt={HERO_SLIDES[active]!.alt}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <a
            href="#new-launches"
            className="inline-block cursor-pointer rounded-md bg-[#1a2f4b] px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase transition-colors duration-300 hover:bg-white hover:text-[#1a2f4b]"
          >
            New Launch Properties
          </a>

          <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find Your Dream Home
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
            Discover the perfect property with Elite Pincode. From luxury apartments to family
            homes, we help you find your ideal living space across Bengaluru.
          </p>

          <div className="mt-8">
            <Link
              to="/properties"
              className="inline-block rounded-lg bg-[#1a2f4b] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#15263d]"
            >
              View Properties
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === active ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => setActive((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 z-10 hidden -translate-y-1/2 rounded-full border border-white/30 bg-black/20 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/40 sm:block"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => setActive((prev) => (prev + 1) % HERO_SLIDES.length)}
        aria-label="Next slide"
        className="absolute top-1/2 right-4 z-10 hidden -translate-y-1/2 rounded-full border border-white/30 bg-black/20 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/40 sm:block"
      >
        ›
      </button>
    </section>
  )
}
