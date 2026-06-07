import { motion } from 'framer-motion'
import { BUYING_JOURNEY } from '../data/site'
import { AnimateIn } from './components/AnimateIn'
import { SectionHeader } from './components/SectionHeader'

export function BuyingJourney() {
  return (
    <section className="py-20" id="journey" aria-labelledby="buying-journey">
      <SectionHeader
        eyebrow="Your Path to Ownership"
        title="Property Buying Journey"
        subtitle="A guided, transparent process from first conversation to keys in hand."
        align="center"
      />

      <div className="relative">
        <div className="absolute top-8 right-0 left-0 hidden h-0.5 bg-gradient-to-r from-transparent via-[#1a2f4b]/20 to-transparent lg:block" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BUYING_JOURNEY.map((step, i) => (
            <AnimateIn key={step.step} delay={i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1a2f4b] text-lg font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
