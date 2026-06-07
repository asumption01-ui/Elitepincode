import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { PROPERTIES, type Property, type TransactionType, uniqueSorted } from '../data/properties'

type Filters = {
  transactionType: 'All Types' | Property['transactionType']
  category: 'All Categories' | Property['category']
  propertyType: 'All Property Types' | string
  configuration: 'Any' | Property['configuration']
  city: 'All Cities' | string
  locality: 'All Localities' | string
  priceMin: string
  priceMax: string
}

const DEFAULT_FILTERS: Filters = {
  transactionType: 'All Types',
  category: 'All Categories',
  propertyType: 'All Property Types',
  configuration: 'Any',
  city: 'Bengaluru',
  locality: 'All Localities',
  priceMin: '',
  priceMax: '',
}

function transactionFromParam(param: string | null): Filters['transactionType'] {
  const map: Record<string, TransactionType> = {
    buy: 'Buy',
    rent: 'Rent',
    lease: 'Lease',
    pg: 'PG / Co-living',
  }
  if (!param) return 'All Types'
  return map[param.toLowerCase()] ?? 'All Types'
}

function filtersFromUrl(typeParam: string | null): Filters {
  return { ...DEFAULT_FILTERS, transactionType: transactionFromParam(typeParam) }
}

function clampNumString(s: string) {
  if (!s.trim()) return ''
  const n = Number(s)
  if (!Number.isFinite(n) || n < 0) return ''
  return String(Math.floor(n))
}

function matches(p: Property, f: Filters) {
  if (f.transactionType !== 'All Types' && p.transactionType !== f.transactionType) return false
  if (f.category !== 'All Categories' && p.category !== f.category) return false
  if (f.propertyType !== 'All Property Types' && p.propertyType !== f.propertyType) return false
  if (f.configuration !== 'Any' && p.configuration !== f.configuration) return false
  if (f.city !== 'All Cities' && p.city !== f.city) return false
  if (f.locality !== 'All Localities' && p.locality !== f.locality) return false

  const min = f.priceMin ? Number(f.priceMin) : undefined
  const max = f.priceMax ? Number(f.priceMax) : undefined
  if (min !== undefined && p.priceValueINR < min) return false
  if (max !== undefined && p.priceValueINR > max) return false

  return true
}

function Select<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: T
  options: { value: T; label: string }[]
  onChange: (v: T) => void
}) {
  return (
    <label className="filterField">
      <span className="filterLabel">{label}</span>
      <select className="fieldControl" value={value} onChange={(e) => onChange(e.target.value as T)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  )
}

function PriceRange({
  min,
  max,
  onMin,
  onMax,
  className,
}: {
  min: string
  max: string
  onMin: (v: string) => void
  onMax: (v: string) => void
  className?: string
}) {
  return (
    <div className={`filterField${className ? ` ${className}` : ''}`}>
      <div className="filterLabel">Price Range (₹)</div>
      <div className="priceRow">
        <input
          className="fieldControl"
          placeholder="Min"
          inputMode="numeric"
          value={min}
          onChange={(e) => onMin(clampNumString(e.target.value))}
        />
        <input
          className="fieldControl"
          placeholder="Max"
          inputMode="numeric"
          value={max}
          onChange={(e) => onMax(clampNumString(e.target.value))}
        />
      </div>
    </div>
  )
}

function PropertyRow({ p }: { p: Property }) {
  const meta: string[] = []
  if (p.frontageFt) meta.push(`${p.frontageFt.toFixed(2)}ft Frontage`)
  if (p.seats) meta.push(`${p.seats} Seats`)
  if (p.areaSqft) meta.push(`${p.areaSqft.toFixed(2)} sqft`)
  if (p.floor) meta.push(`Floor ${p.floor}`)
  if (p.baths) meta.push(`${p.baths} Bath`)

  const badgeClass =
    p.transactionType === 'Rent'
      ? 'badge badge--rent'
      : p.transactionType === 'Buy'
        ? 'badge badge--sale'
        : p.transactionType === 'PG / Co-living'
          ? 'badge badge--pg'
          : 'badge badge--lease'

  return (
    <article className="propRow">
      <div className="propRowTop">
        <div className={badgeClass}>{p.transactionType}</div>
        <div className="propType">{p.propertyType}</div>
      </div>
      <div className="propTitle">{p.title}</div>
      <div className="propLoc">
        {p.locality}, {p.city}
      </div>
      <div className="listingMeta">
        {meta.length ? (
          meta.map((m) => (
            <span key={m} className="chip">
              {m}
            </span>
          ))
        ) : (
          <span className="chip">N/A</span>
        )}
      </div>
      <div className="propBottom">
        <div className="propPrice">{p.priceLabel}</div>
        <Link className="btnSmall" to={`/properties/${p.id}`}>
          View <span className="btnIcon">→</span>
        </Link>
      </div>
    </article>
  )
}

export function PropertiesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const typeParam = searchParams.get('type')
  const urlFilters = useMemo(() => filtersFromUrl(typeParam), [typeParam])

  const [draft, setDraft] = useState<Filters>(urlFilters)
  const [applied, setApplied] = useState<Filters>(urlFilters)

  useEffect(() => {
    setDraft(urlFilters)
    setApplied(urlFilters)
  }, [urlFilters])

  const pageTitle =
    applied.transactionType === 'Buy'
      ? 'Properties for Buy'
      : applied.transactionType === 'Rent'
        ? 'Properties for Rent'
        : applied.transactionType === 'Lease'
          ? 'Properties for Lease'
          : applied.transactionType === 'PG / Co-living'
            ? 'PG & Co-living'
            : 'Properties'

  const cities = useMemo(() => uniqueSorted(PROPERTIES.map((p) => p.city)), [])
  const localities = useMemo(() => uniqueSorted(PROPERTIES.map((p) => p.locality)), [])
  const propertyTypes = useMemo(() => uniqueSorted(PROPERTIES.map((p) => p.propertyType)), [])

  const localitiesForCity = useMemo(() => {
    if (draft.city === 'All Cities') return localities
    return uniqueSorted(PROPERTIES.filter((p) => p.city === draft.city).map((p) => p.locality))
  }, [draft.city, localities])

  const results = useMemo(() => PROPERTIES.filter((p) => matches(p, applied)), [applied])

  return (
    <section className="section mx-auto max-w-7xl px-6">
      <div className="crumbs">
        <Link className="crumbLink" to="/">
          Home
        </Link>
        <span className="crumbSep">/</span>
        <span className="crumbHere">{pageTitle}</span>
      </div>

      <div className="pageTitleRow">
        <h1 className="pageTitle">{pageTitle}</h1>
      </div>

      <div className="propsLayout">
        <aside className="filterCard" aria-label="Filters">
          <div className="filterHead">Filters</div>

          <div className="filterGrid">
            <Select
              label="Transaction Type"
              value={draft.transactionType}
              onChange={(v) => {
                setDraft((d) => ({ ...d, transactionType: v }))
                if (v === 'Buy') setSearchParams({ type: 'buy' })
                else if (v === 'Rent') setSearchParams({ type: 'rent' })
                else if (v === 'Lease') setSearchParams({ type: 'lease' })
                else if (v === 'PG / Co-living') setSearchParams({ type: 'pg' })
                else setSearchParams({})
              }}
              options={[
                { value: 'All Types', label: 'All Types' },
                { value: 'Buy', label: 'Buy' },
                { value: 'Rent', label: 'Rent' },
                { value: 'Lease', label: 'Lease' },
                { value: 'PG / Co-living', label: 'PG / Co-living' },
              ]}
            />

            <Select
              label="Category"
              value={draft.category}
              onChange={(v) => setDraft((d) => ({ ...d, category: v }))}
              options={[
                { value: 'All Categories', label: 'All Categories' },
                { value: 'Residential', label: 'Residential' },
                { value: 'Commercial', label: 'Commercial' },
                { value: 'Industrial', label: 'Industrial' },
                { value: 'Land / Plot', label: 'Land / Plot' },
              ]}
            />

            <Select
              label="Property Type"
              value={draft.propertyType}
              onChange={(v) => setDraft((d) => ({ ...d, propertyType: v }))}
              options={[
                { value: 'All Property Types', label: 'All Property Types' },
                ...propertyTypes.map((t) => ({ value: t, label: t })),
              ]}
            />

            <Select
              label="Configuration"
              value={draft.configuration}
              onChange={(v) => setDraft((d) => ({ ...d, configuration: v }))}
              options={[
                { value: 'Any', label: 'Any' },
                { value: '1 RK', label: '1 RK' },
                { value: '1 BHK', label: '1 BHK' },
                { value: '2 BHK', label: '2 BHK' },
                { value: '3 BHK', label: '3 BHK' },
                { value: '4 BHK', label: '4 BHK' },
                { value: '5+ BHK', label: '5+ BHK' },
                { value: 'N/A', label: 'N/A' },
              ]}
            />

            <Select
              label="City"
              value={draft.city}
              onChange={(v) =>
                setDraft((d) => ({
                  ...d,
                  city: v,
                  locality: v === 'All Cities' ? d.locality : 'All Localities',
                }))
              }
              options={[{ value: 'All Cities', label: 'All Cities' }, ...cities.map((c) => ({ value: c, label: c }))]}
            />

            <Select
              label="Locality"
              value={draft.locality}
              onChange={(v) => setDraft((d) => ({ ...d, locality: v }))}
              options={[
                { value: 'All Localities', label: draft.city === 'All Cities' ? 'All Localities' : 'Select a city first' },
                ...(draft.city === 'All Cities'
                  ? []
                  : localitiesForCity.map((l) => ({ value: l, label: l }))),
              ]}
            />

            <PriceRange
              min={draft.priceMin}
              max={draft.priceMax}
              onMin={(v) => setDraft((d) => ({ ...d, priceMin: v }))}
              onMax={(v) => setDraft((d) => ({ ...d, priceMax: v }))}
              className="filterSpan2"
            />
          </div>

          <div className="filterBtns">
            <button
              className="searchBtn"
              type="button"
              onClick={() => {
                setApplied(draft)
                if (draft.transactionType === 'Buy') setSearchParams({ type: 'buy' })
                else if (draft.transactionType === 'Rent') setSearchParams({ type: 'rent' })
                else if (draft.transactionType === 'Lease') setSearchParams({ type: 'lease' })
                else if (draft.transactionType === 'PG / Co-living') setSearchParams({ type: 'pg' })
                else setSearchParams({})
              }}
            >
              Apply Filter
            </button>
            <button
              className="ctaGhost"
              type="button"
              onClick={() => {
                setDraft(DEFAULT_FILTERS)
                setApplied(DEFAULT_FILTERS)
                setSearchParams({})
              }}
            >
              Reset Filters
            </button>
          </div>
        </aside>

        <div className="resultsCard" aria-label="Results">
          <div className="resultsHead">
            <div className="resultsTitle">Featured Listings</div>
            <div className="resultsCount">
              Showing <b>{Math.min(results.length, results.length)}</b> of <b>{results.length}</b> results
            </div>
          </div>

          <div className="propGrid">
            {results.map((p) => (
              <PropertyRow key={p.id} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

