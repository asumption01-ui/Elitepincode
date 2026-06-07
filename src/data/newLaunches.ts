export type NewLaunch = {
  id: string
  name: string
  developer: string
  locality: string
  zone: string
  priceFrom: string
  configs: string
  image: string
  propertyId?: string
}

export const NEW_LAUNCHES: NewLaunch[] = [
  {
    id: 'skyline-greens',
    name: 'Skyline Greens',
    developer: 'Elite Builders',
    locality: 'Sarjapur Road',
    zone: 'East Bengaluru',
    priceFrom: '₹ 1.80 Cr',
    configs: '2, 3 & 4 BHK',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&h=440&q=80',
    propertyId: 'project-sarjapur',
  },
  {
    id: 'prestige-hebbal',
    name: 'Prestige Meridian Park',
    developer: 'Prestige Group',
    locality: 'Hebbal',
    zone: 'North Bengaluru',
    priceFrom: '₹ 1.05 Cr',
    configs: '2 & 3 BHK',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&h=440&q=80',
  },
  {
    id: 'brigade-whitefield',
    name: 'Brigade Cornerstone Utopia',
    developer: 'Brigade Group',
    locality: 'Whitefield',
    zone: 'East Bengaluru',
    priceFrom: '₹ 85 Lakh',
    configs: '1, 2 & 3 BHK',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&h=440&q=80',
  },
  {
    id: 'sobha-electronic',
    name: 'Sobha Dream Acres',
    developer: 'Sobha Limited',
    locality: 'Electronic City',
    zone: 'South Bengaluru',
    priceFrom: '₹ 96 Lakh',
    configs: '2 & 3 BHK',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=700&h=440&q=80',
  },
]
