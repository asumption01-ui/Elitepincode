import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT, FOOTER_CATEGORIES, FOOTER_REGIONS, whatsappLink } from '../data/site'

const QUICK_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'List Your Property', href: '/#search' },
  { label: 'Site Visits', href: '#contact-form' },
  { label: 'Home Loans', href: '#contact-form' },
  { label: 'Legal Support', href: '#contact-form' },
  { label: 'Blog & Insights', href: '/#why-invest' },
] as const

const SOCIAL = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'YouTube', href: '#' },
] as const

export function SiteFooter() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <footer className="border-t border-slate-200 bg-slate-50" id="contact">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-[#1a2f4b] p-8 text-center sm:p-12"
        >
          <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
          <h2 className="relative text-2xl font-bold text-white sm:text-3xl">
            Looking for Your Dream Home in Bengaluru?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            Connect with our property experts for personalised guidance, site visits, and
            end-to-end buying support.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact-form"
              className="rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#1a2f4b] transition hover:bg-slate-100"
            >
              Schedule Site Visit
            </a>
            <a
              href="#contact-form"
              className="rounded-lg border-2 border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Request Callback
            </a>
            <a
              href="#contact-form"
              className="rounded-lg border-2 border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Lead form */}
        <div id="contact-form" className="mt-12 scroll-mt-24">
          <div className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Get Expert Property Advice</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                Share your requirements and our Bengaluru property consultants will reach out within
                24 hours with curated options.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center"
              >
                <div>
                  <div className="text-3xl text-emerald-600">✓</div>
                  <p className="mt-2 font-semibold text-emerald-700">
                    Thank you! We&apos;ll be in touch soon.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form
                className="grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <input
                  required
                  placeholder="Full Name"
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#1a2f4b] focus:outline-none"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#1a2f4b] focus:outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="sm:col-span-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#1a2f4b] focus:outline-none"
                />
                <select className="sm:col-span-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-[#1a2f4b] focus:outline-none">
                  <option value="">I&apos;m looking to...</option>
                  <option value="buy">Buy a Property</option>
                  <option value="rent">Rent a Property</option>
                  <option value="invest">Invest in Bengaluru</option>
                  <option value="sell">Sell / List My Property</option>
                </select>
                <textarea
                  placeholder="Tell us about your requirements (budget, location, BHK...)"
                  rows={3}
                  className="sm:col-span-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#1a2f4b] focus:outline-none"
                />
                <button
                  type="submit"
                  className="sm:col-span-2 rounded-lg bg-[#1a2f4b] py-3.5 text-sm font-semibold text-white transition hover:bg-[#15263d]"
                >
                  Request Callback
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer links & brand */}
        <div className="mt-14 grid gap-10 border-t border-slate-200 pt-14 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img className="h-9 w-9" src="/logo.svg" alt="" width={36} height={36} />
              <div>
                <div className="text-lg font-semibold text-slate-900">Elite Pincode</div>
                <div className="text-xs text-slate-500">Bengaluru&apos;s Premium Property Partner</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              Empowering your Bengaluru real estate journey with verified listings, trusted
              developers, and end-to-end buying support.
            </p>
            <div className="mt-5 space-y-1 text-sm text-slate-500">
              <p>📍 Koramangala, Bengaluru, Karnataka 560034</p>
              <p>
                📞{' '}
                <a href={`tel:+91${CONTACT.phone}`} className="hover:text-[#2c4c7c]">
                  {CONTACT.phoneDisplay}
                </a>
              </p>
              <p>
                ✉️{' '}
                <a href={`mailto:${CONTACT.email}`} className="hover:text-[#2c4c7c]">
                  {CONTACT.email}
                </a>
              </p>
              <p>
                💬{' '}
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-emerald-600 hover:text-emerald-700"
                >
                  Chat on WhatsApp
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900">Property Categories</h3>
            <ul className="space-y-2">
              {FOOTER_CATEGORIES.map((c) => (
                <li key={c}>
                  <Link to="/properties" className="text-sm text-slate-500 transition hover:text-[#1a2f4b]">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900">Bengaluru Regions</h3>
            <ul className="space-y-2">
              {FOOTER_REGIONS.map((r) => (
                <li key={r}>
                  <a href="/#regions" className="text-sm text-slate-500 transition hover:text-[#1a2f4b]">
                    {r}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith('/') && !l.href.includes('#') ? (
                    <Link to={l.href} className="text-sm text-slate-500 transition hover:text-[#1a2f4b]">
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} className="text-sm text-slate-500 transition hover:text-[#1a2f4b]">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-8">
          <span className="text-sm text-slate-500">Follow us:</span>
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-500 transition hover:border-[#1a2f4b]/30 hover:text-[#1a2f4b]"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-slate-500">
          <span>© 2026 Elite Pincode. All rights reserved.</span>
          <span>RERA: PRM/KA/RERA/1251/446/AG/180120/001234</span>
        </div>
      </div>
    </footer>
  )
}
