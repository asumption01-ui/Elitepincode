import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PROPERTIES } from '../data/properties'
import { AnimateIn } from './components/AnimateIn'
import { SectionHeader } from './components/SectionHeader'

const PROPERTY_IMAGES: Record<string, string> = {
  'showroom-rajajinagar':
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  'shop-indiranagar':
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  'office-whitefield':
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
  'pg-electronic-city':
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80',
  'apt-jayanagar-2bhk':
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',
  'apt-yelahanka-2bhk':
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
}

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80'

function badgeClass(type: string) {
  if (type === 'Rent') return 'bg-sky-50 text-sky-700 border-sky-200'
  if (type === 'Buy') return 'bg-[#1a2f4b]/10 text-[#1a2f4b] border-[#1a2f4b]/20'
  if (type === 'PG / Co-living') return 'bg-violet-50 text-violet-700 border-violet-200'
  return 'bg-slate-50 text-slate-600 border-slate-200'
}

function PropertyCard({ p, index }: { p: (typeof PROPERTIES)[0]; index: number }) {
  const [fav, setFav] = useState(false)
  const meta: string[] = []
  if (p.areaSqft) meta.push(`${p.areaSqft.toLocaleString()} sq.ft`)
  if (p.baths) meta.push(`${p.baths} Bath`)
  if (p.configuration !== 'N/A') meta.push(p.configuration)

  return (
    <AnimateIn delay={index}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md shadow-slate-200/50"
      >
        <div className="relative h-52 overflow-hidden">
          <img
            src={PROPERTY_IMAGES[p.id] ?? DEFAULT_IMAGE}
            alt={p.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className={`rounded-full border px-3 py-1 text-xs font-medium ${badgeClass(p.transactionType)}`}>
              {p.transactionType}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setFav(!fav)}
            aria-label={fav ? 'Remove from favorites' : 'Add to favorites'}
            className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/90 text-lg shadow-sm"
          >
            {fav ? '♥' : '♡'}
          </button>
          <div className="absolute bottom-3 left-3">
            <div className="text-xl font-bold text-white drop-shadow-md">{p.priceLabel}</div>
          </div>
        </div>

        <div className="p-5">
          <h3 className="line-clamp-2 font-semibold text-slate-900">{p.title}</h3>
          <p className="mt-1 text-sm text-slate-500">
            {p.locality}, {p.city}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600">
              {p.zone}
            </span>
            {meta.map((m) => (
              <span
                key={m}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600"
              >
                {m}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-slate-400">Listed by Elite Pincode</span>
            <Link
              to={`/properties/${p.id}`}
              className="rounded-lg bg-[#1a2f4b] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#15263d]"
            >
              View Details →
            </Link>
          </div>
        </div>
      </motion.article>
    </AnimateIn>
  )
}

export function ListingsSection() {
  const featured = PROPERTIES.slice(0, 6)

  return (
    <section className="py-20" id="properties">
      <SectionHeader
        eyebrow="Featured Listings"
        title="Explore Our Top Properties"
        subtitle="Handpicked premium properties that offer the best value and amenities across Bengaluru."
        action={
          <Link
            to="/properties"
            className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            View All Properties
          </Link>
        }
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <PropertyCard key={p.id} p={p} index={i} />
        ))}
      </div>
    </section>
  )
}
