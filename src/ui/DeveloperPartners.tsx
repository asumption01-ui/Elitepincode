import { motion } from 'framer-motion'
import { DEVELOPER_PARTNERS } from '../data/site'
import { SectionHeader } from './components/SectionHeader'

export function DeveloperPartners() {
  const doubled = [...DEVELOPER_PARTNERS, ...DEVELOPER_PARTNERS]

  return (
    <section className="overflow-hidden py-20" id="developers">
      <SectionHeader
        eyebrow="Trusted Builders"
        title="Developer Partners"
        subtitle="Partnering with Bengaluru's most reputed developers for verified, RERA-compliant projects."
        align="center"
      />

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          className="flex gap-5"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((dev, i) => (
            <div
              key={`${dev.name}-${i}`}
              className="flex min-w-[200px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-8 py-6"
            >
              <span className="text-xl font-bold text-slate-900">{dev.name}</span>
              <span className="mt-1 text-xs text-slate-500">{dev.tagline}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
