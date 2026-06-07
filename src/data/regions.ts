import { PROPERTIES } from './properties'

export type BengaluruRegion = {
  id: string
  name: string
  icon: string
  image: string
  gradient: string
  locations: readonly string[]
  propertyCount: number
}

const REGION_DEFS = [
  {
    id: 'north',
    name: 'North Bengaluru',
    icon: '↑',
    image: '/images/north-bengaluru.png',
    gradient: 'from-emerald-600/80 via-teal-700/70 to-slate-900/90',
    locations: [
      'Hebbal',
      'Yelahanka',
      'Thanisandra',
      'Hennur',
      'Jakkur',
      'Nagawara',
      'Airport Road',
      'Devanahalli',
    ],
  },
  {
    id: 'south',
    name: 'South Bengaluru',
    icon: '↓',
    image: '/images/south-bengaluru.png',
    gradient: 'from-amber-500/80 via-orange-600/70 to-slate-900/90',
    locations: [
      'Jayanagar',
      'JP Nagar',
      'Banashankari',
      'BTM Layout',
      'Electronic City',
      'Uttarahalli',
      'Kanakapura Road',
      'Kumaraswamy Layout',
    ],
  },
  {
    id: 'east',
    name: 'East Bengaluru',
    icon: '→',
    image: '/images/east-bengaluru.png',
    gradient: 'from-blue-500/80 via-indigo-600/70 to-slate-900/90',
    locations: [
      'Whitefield',
      'Marathahalli',
      'KR Puram',
      'Brookefield',
      'Mahadevapura',
      'Varthur',
      'Hoodi',
      'Kadugodi',
    ],
  },
  {
    id: 'west',
    name: 'West Bengaluru',
    icon: '←',
    image: '/images/west-bengaluru.png',
    gradient: 'from-violet-500/80 via-purple-600/70 to-slate-900/90',
    locations: [
      'Rajajinagar',
      'Vijayanagar',
      'Nagarbhavi',
      'Kengeri',
      'Basaveshwaranagar',
      'Magadi Road',
      'Malleshwaram',
      'Yeshwanthpur',
    ],
  },
] as const

function countByRegion(regionName: string) {
  return PROPERTIES.filter((p) => p.zone === regionName).length
}

const BASE_COUNTS: Record<string, number> = {
  'North Bengaluru': 48,
  'South Bengaluru': 62,
  'East Bengaluru': 85,
  'West Bengaluru': 41,
}

export const BENGALURU_REGIONS: BengaluruRegion[] = REGION_DEFS.map((r) => ({
  ...r,
  propertyCount: BASE_COUNTS[r.name] + countByRegion(r.name),
}))
