import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TESTIMONIALS } from '../data/site'
import { SectionHeader } from './components/SectionHeader'

export function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const current = TESTIMONIALS[active]!

  return (
    <section className="py-20" id="testimonials" aria-labelledby="trusted">
      <SectionHeader
        eyebrow="Client Stories"
        title="Trusted by Thousands"
        subtitle="Real experiences from homebuyers and investors across Bengaluru."
        align="center"
      />

      <div className="relative mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.figure
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 sm:p-10"
          >
            <div className="mb-4 flex gap-1">
              {Array.from({ length: current.rating }).map((_, i) => (
                <span key={i} className="text-amber-400">
                  ★
                </span>
              ))}
            </div>
            <blockquote className="text-lg leading-relaxed text-slate-700 sm:text-xl">
              &ldquo;{current.review}&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <img
                src={current.image}
                alt={current.name}
                className="h-14 w-14 rounded-xl object-cover ring-2 ring-[#1a2f4b]/20"
              />
              <div>
                <div className="font-semibold text-slate-900">{current.name}</div>
                <div className="text-sm text-slate-500">Purchased in {current.location}</div>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === active ? 'w-8 bg-[#1a2f4b]' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
