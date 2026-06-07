import { motion } from 'framer-motion'

export function HeroAccent() {
  return (
    <section className="border-b border-slate-100 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-6"
        >
          <div className="h-20 w-px shrink-0 bg-[#2c4c7c]/40 sm:h-24" />
          <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
            Residential &amp; commercial properties curated across every region of Bengaluru.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
