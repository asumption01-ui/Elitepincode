import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  action?: ReactNode
  compact?: boolean
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'left', action, compact }: Props) {
  const centered = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`${compact ? 'mb-6' : 'mb-10'} flex flex-col gap-4 ${centered ? 'items-center text-center' : ''} ${action ? 'sm:flex-row sm:items-end sm:justify-between' : ''}`}
    >
      <div className={centered ? 'max-w-2xl' : ''}>
        {eyebrow ? (
          <span className="mb-2 inline-block rounded-md bg-[#1a2f4b]/10 px-3 py-1 text-xs font-semibold tracking-wider text-[#1a2f4b] uppercase">
            {eyebrow}
          </span>
        ) : null}
        <h2 className={`font-bold tracking-tight text-slate-900 ${compact ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'}`}>{title}</h2>
        {subtitle ? (
          <p className={`${compact ? 'mt-2 text-sm' : 'mt-3 text-base'} text-slate-500 ${centered ? 'mx-auto' : ''} max-w-2xl`}>
            {subtitle}
          </p>
        ) : null}
      </div>
      {action}
    </motion.div>
  )
}
