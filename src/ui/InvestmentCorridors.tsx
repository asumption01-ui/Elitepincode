import { motion } from 'framer-motion'
import { INVESTMENT_CORRIDORS } from '../data/site'
import { AnimateIn } from './components/AnimateIn'
import { SectionHeader } from './components/SectionHeader'

export function InvestmentCorridors() {
  return (
    <section className="py-20" id="corridors">
      <SectionHeader
        eyebrow="Market Intelligence"
        title="Top Investment Corridors"
        subtitle="High-growth micro-markets driving Bengaluru's real estate appreciation."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {INVESTMENT_CORRIDORS.map((corridor, i) => (
          <AnimateIn key={corridor.name} delay={i}>
            <motion.article
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-md"
            >
              <div className="relative h-44">
                <img
                  src={corridor.image}
                  alt={corridor.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute top-3 right-3 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-medium text-white">
                  {corridor.growth}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-semibold text-white">{corridor.name}</h3>
                <p className="mt-1 text-sm text-white/80">Avg. {corridor.avgPrice}</p>
              </div>
            </motion.article>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
