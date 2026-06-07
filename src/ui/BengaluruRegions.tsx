import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BENGALURU_REGIONS } from '../data/regions'
import { AnimateIn } from './components/AnimateIn'

const SHORT_LABELS: Record<string, string> = {
  north: 'North',
  south: 'South',
  east: 'East',
  west: 'West',
}

function ExternalIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  )
}

export function BengaluruRegions() {
  return (
    <section className="bg-white py-16 sm:py-20" id="regions">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <AnimateIn>
          <h2 className="text-3xl font-bold tracking-tight text-[#1a2f4b] sm:text-4xl">
            Bengaluru Regions We Serve
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
            Connecting you to premium properties across every region of Bengaluru.
          </p>
        </AnimateIn>

        <div className="mt-12 flex flex-wrap items-start justify-center gap-10 sm:gap-14">
          {BENGALURU_REGIONS.map((region, i) => (
            <AnimateIn key={region.id} delay={i}>
              <Link to="/properties" className="group flex flex-col items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-lg shadow-slate-300/60 sm:h-32 sm:w-32"
                >
                  <img
                    src={region.image}
                    alt={region.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </motion.div>
                <span className="text-lg font-bold text-[#1a2f4b] sm:text-xl">
                  {SHORT_LABELS[region.id] ?? region.name}
                </span>
              </Link>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={4}>
          <Link
            to="/properties"
            className="mt-12 inline-flex items-center gap-2 rounded-lg bg-[#1a2f4b] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#15263d]"
          >
            More
            <ExternalIcon />
          </Link>
        </AnimateIn>
      </div>
    </section>
  )
}
