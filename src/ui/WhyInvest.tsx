import { motion } from 'framer-motion'
import { WHY_INVEST } from '../data/site'
import { AnimateIn } from './components/AnimateIn'
import { SectionHeader } from './components/SectionHeader'

export function WhyInvest() {
  return (
    <section className="py-20" id="why-invest">
      <SectionHeader
        eyebrow="Investment Insights"
        title="Why Invest in Bengaluru"
        subtitle="India's Silicon Valley continues to deliver exceptional growth for property buyers and investors."
        align="center"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_INVEST.map((item, i) => (
          <AnimateIn key={item.title} delay={i}>
            <motion.div
              whileHover={{ y: -4 }}
              className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-3xl" role="img" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
            </motion.div>
          </AnimateIn>
        ))}
      </div>
    </section>
  )
}
