import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Option = { value: string; label: string }
type Mode = 'search' | 'list'

const propertyTypes: Option[] = [
  { value: 'any', label: 'All Types' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'villa', label: 'Villa' },
  { value: 'house', label: 'Independent House' },
  { value: 'plot', label: 'Plot / Land' },
  { value: 'commercial', label: 'Commercial' },
]

const budgets: Option[] = [
  { value: 'any', label: 'Any Budget' },
  { value: 'under50', label: 'Under ₹50 Lac' },
  { value: '50-1cr', label: '₹50 Lac - ₹1 Cr' },
  { value: '1-2cr', label: '₹1 Cr - ₹2 Cr' },
  { value: 'above2', label: 'Above ₹2 Cr' },
]

const locations = [
  'Whitefield',
  'Hebbal',
  'Jayanagar',
  'Electronic City',
  'Marathahalli',
  'Rajajinagar',
  'Sarjapur Road',
  'Yelahanka',
]

function SearchIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
    </svg>
  )
}

const fieldClass =
  'w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#2c4c7c] focus:ring-2 focus:ring-[#2c4c7c]/15 focus:outline-none'

export function PropertySearch() {
  const navigate = useNavigate()
  const [mode, setMode] = useState<Mode>('search')
  const [location, setLocation] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

  const filteredLocations = locations.filter((l) =>
    l.toLowerCase().includes(location.toLowerCase()),
  )

  return (
    <section className="bg-slate-50 py-12" id="search">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-8 lg:grid-cols-2"
        >
          {/* Left — search card */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-200/50 sm:p-8">
            <h2 className="text-2xl leading-tight font-bold text-[#2c4c7c] sm:text-3xl">
              Your Property Search
              <br />
              Starts Here
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Find the right property faster with verified listings, reliable budgets, and trusted
              real estate advisors.
            </p>

            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={() => setMode('search')}
                className={`rounded-lg px-5 py-2.5 text-sm font-medium transition ${
                  mode === 'search'
                    ? 'bg-[#2c4c7c] text-white'
                    : 'border border-[#2c4c7c] text-[#2c4c7c] hover:bg-[#2c4c7c]/5'
                }`}
              >
                Search Property
              </button>
              <button
                type="button"
                onClick={() => setMode('list')}
                className={`rounded-lg px-5 py-2.5 text-sm font-medium transition ${
                  mode === 'list'
                    ? 'bg-[#2c4c7c] text-white'
                    : 'border border-[#2c4c7c] text-[#2c4c7c] hover:bg-[#2c4c7c]/5'
                }`}
              >
                List Your Property
              </button>
            </div>

            {mode === 'search' ? (
              <form
                className="mt-6 grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  navigate('/properties')
                }}
              >
                <div className="relative">
                  <label className="mb-1.5 block text-xs font-medium text-slate-500">Location</label>
                  <input
                    className={fieldClass}
                    placeholder="Enter location..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                  />
                  {showSuggestions && location && filteredLocations.length > 0 ? (
                    <ul className="absolute z-20 mt-1 w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
                      {filteredLocations.map((l) => (
                        <li key={l}>
                          <button
                            type="button"
                            className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                            onMouseDown={() => {
                              setLocation(l)
                              setShowSuggestions(false)
                            }}
                          >
                            {l}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-500">Property Type</label>
                  <select className={fieldClass}>
                    {propertyTypes.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-500">Budget</label>
                  <select className={fieldClass}>
                    {budgets.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2c4c7c] py-2.5 text-sm font-semibold text-white transition hover:bg-[#243f66]"
                  >
                    <SearchIcon />
                    Search
                  </button>
                </div>
              </form>
            ) : (
              <form
                className="mt-6 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  window.location.hash = 'contact'
                }}
              >
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-500">Property Location</label>
                  <input className={fieldClass} placeholder="Enter locality in Bengaluru..." required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-500">Your Name</label>
                    <input className={fieldClass} placeholder="Full name" required />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-500">Phone Number</label>
                    <input className={fieldClass} type="tel" placeholder="+91..." required />
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2c4c7c] py-2.5 text-sm font-semibold text-white transition hover:bg-[#243f66] sm:w-auto sm:px-8"
                >
                  Submit Listing Request
                </button>
              </form>
            )}
          </div>

          {/* Right — hero image */}
          <div className="overflow-hidden rounded-2xl shadow-md shadow-slate-200/50">
            <img
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80"
              alt="Luxury villa with infinity pool"
              className="h-full min-h-[280px] w-full object-cover sm:min-h-[360px] lg:min-h-[420px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
