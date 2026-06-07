import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { NEW_LAUNCHES } from '../data/newLaunches'
import { AnimateIn } from './components/AnimateIn'

export function NewLaunchSection() {
  return (
    <section className="relative py-16 sm:py-20" id="new-launches">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2f4b] via-[#243f66] to-[#1a2f4b]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="inline-block rounded-md bg-white px-4 py-1.5 text-xs font-bold tracking-widest text-[#1a2f4b] uppercase shadow-lg">
            New Launch Properties
          </span>
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Latest Projects from Trusted Developers
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/75 sm:text-base">
            Discover newly launched RERA-approved projects across Bengaluru with exclusive early-bird
            pricing and premium amenities.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {NEW_LAUNCHES.map((launch, i) => (
            <AnimateIn key={launch.id} delay={i}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white shadow-xl shadow-black/20"
              >
                <div className="relative h-44 overflow-hidden bg-slate-200">
                  <img
                    src={launch.image}
                    alt={`${launch.name} — ${launch.locality}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&h=440&q=80'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 animate-pulse rounded-md bg-emerald-500 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase shadow-md">
                    New Launch
                  </span>
                  <span className="absolute top-3 right-3 rounded-md bg-[#1a2f4b]/90 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                    {launch.developer}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">{launch.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {launch.locality} · {launch.zone}
                  </p>
                  <p className="mt-2 text-xs text-slate-400">{launch.configs}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-medium tracking-wide text-slate-400 uppercase">
                        Starting from
                      </span>
                      <p className="text-lg font-bold text-[#1a2f4b]">{launch.priceFrom}</p>
                    </div>
                    <Link
                      to={launch.propertyId ? `/properties/${launch.propertyId}` : '/properties?type=buy'}
                      className="rounded-lg bg-[#1a2f4b] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-[#15263d]"
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </motion.article>
            </AnimateIn>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/properties?type=buy"
            className="inline-flex rounded-lg border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View All New Launches
          </Link>
        </div>
      </div>
    </section>
  )
}
