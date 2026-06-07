import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

type NavItem = {
  label: string
  to: string
  hash?: string
  typeFilter?: string
}

const LINKS: NavItem[] = [
  { label: 'Buy', to: '/properties', typeFilter: 'buy' },
  { label: 'Rent', to: '/properties', typeFilter: 'rent' },
  { label: 'Properties', to: '/properties' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/', hash: 'contact' },
  { label: 'Insights', to: '/', hash: 'why-invest' },
]

function navTarget(item: NavItem) {
  if (item.hash) return { pathname: item.to, hash: item.hash }
  if (item.typeFilter) return { pathname: item.to, search: `?type=${item.typeFilter}` }
  return item.to
}

function isNavActive(item: NavItem, pathname: string, search: string) {
  if (item.hash) return pathname === item.to && false
  if (item.typeFilter) {
    return pathname === '/properties' && search.includes(`type=${item.typeFilter}`)
  }
  if (item.to === '/properties') {
    return pathname === '/properties' && !search.includes('type=')
  }
  return pathname === item.to
}

export function TopNav() {
  const [open, setOpen] = useState(false)
  const { pathname, search, hash } = useLocation()

  const linkClass = (active: boolean) =>
    `text-sm font-medium transition ${active ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`

  return (
    <div className="mx-auto max-w-7xl px-6 py-4">
      <div className="flex items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="Elite Pincode home">
          <img className="h-9 w-9" src="/logo.svg" alt="" width={36} height={36} />
          <span className="text-lg font-semibold tracking-tight text-slate-800">Elite Pincode</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {LINKS.map((l) =>
            l.hash ? (
              <a
                key={l.label}
                href={`${l.to}#${l.hash}`}
                className={linkClass(pathname === l.to && hash === `#${l.hash}`)}
              >
                {l.label}
              </a>
            ) : (
              <NavLink
                key={l.label}
                to={navTarget(l)}
                className={() => linkClass(isNavActive(l, pathname, search))}
              >
                {l.label}
              </NavLink>
            ),
          )}
        </nav>

        <a
          href="/#contact"
          className="hidden rounded-lg bg-[#1a2f4b] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#15263d] lg:inline-block"
        >
          Login / Sign Up
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open ? (
        <nav className="mt-4 flex flex-col gap-1 border-t border-slate-100 pt-4 lg:hidden">
          {LINKS.map((l) =>
            l.hash ? (
              <a
                key={l.label}
                href={`${l.to}#${l.hash}`}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-slate-600"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ) : (
              <NavLink
                key={l.label}
                to={navTarget(l)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-slate-600"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ),
          )}
          <a
            href="/#contact"
            className="mt-2 rounded-lg bg-[#1a2f4b] py-2.5 text-center text-sm font-medium text-white"
            onClick={() => setOpen(false)}
          >
            Login / Sign Up
          </a>
        </nav>
      ) : null}
    </div>
  )
}
