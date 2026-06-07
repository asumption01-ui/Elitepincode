import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ABOUT_SERVICES, ABOUT_VALUES } from '../data/about'
import { CONTACT, HERO_STATS } from '../data/site'

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#2c4c7c] py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="crumbs !text-white/70">
            <Link className="!text-white/80 hover:!text-white" to="/">
              Home
            </Link>
            <span className="crumbSep">/</span>
            <span className="!text-white">About Us</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            About Elite Pincode
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            Bengaluru&apos;s trusted real estate partner — helping buyers, renters, and investors
            discover premium properties with confidence and clarity.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-md bg-[#2c4c7c]/10 px-3 py-1 text-xs font-semibold tracking-wider text-[#2c4c7c] uppercase">
              Our Story
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Built for Bengaluru&apos;s Property Market</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Elite Pincode was founded with a simple mission: make finding the right property in
              Bengaluru effortless. Whether you&apos;re a first-time homebuyer in Jayanagar, an investor
              eyeing Whitefield, or a business owner seeking commercial space in Rajajinagar — we
              bring verified listings, local expertise, and honest advice to every conversation.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              We focus exclusively on Bengaluru, covering every major region from Hebbal and
              Devanahalli in the north to Electronic City and Sarjapur in the south. Our team
              works closely with reputed developers and independent sellers to ensure you see only
              genuine, well-priced opportunities.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg shadow-slate-200/60">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
              alt="Bengaluru skyline and properties"
              className="h-full min-h-[280px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[#2c4c7c] sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Why Choose Elite Pincode</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            A premium experience backed by transparency, local knowledge, and dedicated support.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {ABOUT_VALUES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900">What We Offer</h2>
          <p className="mt-2 text-sm text-slate-500">
            Complete real estate solutions tailored for Bengaluru buyers and investors.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ABOUT_SERVICES.map((service) => (
              <li
                key={service}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
              >
                <span className="text-[#2c4c7c]">✓</span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-2xl bg-[#2c4c7c] p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to Find Your Perfect Property?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/80 sm:text-base">
            Speak with our Bengaluru property experts today. We&apos;re here to help you buy, rent, or
            invest with confidence.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/properties"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#2c4c7c] transition hover:bg-slate-100"
            >
              Browse Properties
            </Link>
            <a
              href={`tel:+91${CONTACT.phone}`}
              className="rounded-lg border-2 border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Call {CONTACT.phoneDisplay}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-lg border-2 border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
