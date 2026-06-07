export type TransactionType = 'Buy' | 'Rent' | 'Lease' | 'PG / Co-living'
export type Category = 'Residential' | 'Commercial' | 'Industrial' | 'Land / Plot'
export type Zone = 'North Bengaluru' | 'South Bengaluru' | 'East Bengaluru' | 'West Bengaluru'
export type Config =
  | 'N/A'
  | '1 RK'
  | '1 BHK'
  | '2 BHK'
  | '3 BHK'
  | '4 BHK'
  | '5+ BHK'

export type Property = {
  id: string
  title: string
  transactionType: TransactionType
  category: Category
  zone: Zone
  propertyType: string
  configuration: Config
  city: string
  locality: string
  priceLabel: string
  priceValueINR: number
  areaSqft?: number
  seats?: number
  frontageFt?: number
  baths?: number
  floor?: string
}

export const PROPERTIES: Property[] = [
  {
    id: 'showroom-rajajinagar',
    title: 'Large Showroom for Rent in Rajajinagar – Prime Location',
    transactionType: 'Rent',
    category: 'Commercial',
    zone: 'West Bengaluru',
    propertyType: 'Showroom',
    configuration: 'N/A',
    city: 'Bengaluru',
    locality: 'Rajajinagar',
    priceLabel: '₹ 1,20,000/month',
    priceValueINR: 120000,
    areaSqft: 2200,
    frontageFt: 35,
  },
  {
    id: 'shop-indiranagar',
    title: 'Commercial Shop for Sale in Indiranagar',
    transactionType: 'Buy',
    category: 'Commercial',
    zone: 'East Bengaluru',
    propertyType: 'Shop / Retail Space',
    configuration: 'N/A',
    city: 'Bengaluru',
    locality: 'Indiranagar',
    priceLabel: '₹ 1.65 Cr',
    priceValueINR: 16500000,
    areaSqft: 620,
    frontageFt: 22,
  },
  {
    id: 'office-whitefield',
    title: 'Furnished Office Space for Rent in Whitefield',
    transactionType: 'Rent',
    category: 'Commercial',
    zone: 'East Bengaluru',
    propertyType: 'Office Space',
    configuration: 'N/A',
    city: 'Bengaluru',
    locality: 'Whitefield',
    priceLabel: '₹ 95,000/month',
    priceValueINR: 95000,
    areaSqft: 1400,
    seats: 24,
    floor: '5',
  },
  {
    id: 'pg-electronic-city',
    title: 'PG Accommodation Near Electronic City Phase 1',
    transactionType: 'PG / Co-living',
    category: 'Residential',
    zone: 'South Bengaluru',
    propertyType: 'PG / Hostel',
    configuration: 'N/A',
    city: 'Bengaluru',
    locality: 'Electronic City',
    priceLabel: '₹ 9,500/month',
    priceValueINR: 9500,
  },
  {
    id: 'apt-hsr-1bhk',
    title: '1BHK Fully Furnished Apartment for Rent in HSR Layout',
    transactionType: 'Rent',
    category: 'Residential',
    zone: 'South Bengaluru',
    propertyType: 'Apartment / Flat',
    configuration: '1 BHK',
    city: 'Bengaluru',
    locality: 'HSR Layout',
    priceLabel: '₹ 28,000/month',
    priceValueINR: 28000,
    areaSqft: 560,
    baths: 1,
  },
  {
    id: 'apt-jayanagar-2bhk',
    title: '2BHK Apartment for Sale in Jayanagar',
    transactionType: 'Buy',
    category: 'Residential',
    zone: 'South Bengaluru',
    propertyType: 'Apartment / Flat',
    configuration: '2 BHK',
    city: 'Bengaluru',
    locality: 'Jayanagar',
    priceLabel: '₹ 1.35 Cr',
    priceValueINR: 13500000,
    areaSqft: 980,
    baths: 2,
  },
  {
    id: 'project-sarjapur',
    title: 'Skyline Greens by Elite Builders',
    transactionType: 'Buy',
    category: 'Residential',
    zone: 'East Bengaluru',
    propertyType: 'Project',
    configuration: 'N/A',
    city: 'Bengaluru',
    locality: 'Sarjapur Road',
    priceLabel: '₹ 1.80 Cr - ₹ 3.20 Cr',
    priceValueINR: 18000000,
  },
  {
    id: 'shop-malleswaram',
    title: 'Shop on Rent in Malleswaram',
    transactionType: 'Rent',
    category: 'Commercial',
    zone: 'West Bengaluru',
    propertyType: 'Shop / Retail Space',
    configuration: 'N/A',
    city: 'Bengaluru',
    locality: 'Malleswaram',
    priceLabel: '₹ 48,000/month',
    priceValueINR: 48000,
    areaSqft: 320,
  },
  {
    id: 'apt-yelahanka-2bhk',
    title: '2BHK Apartment for Sale in Yelahanka',
    transactionType: 'Buy',
    category: 'Residential',
    zone: 'North Bengaluru',
    propertyType: 'Apartment / Flat',
    configuration: '2 BHK',
    city: 'Bengaluru',
    locality: 'Yelahanka',
    priceLabel: '₹ 98 Lakh',
    priceValueINR: 9800000,
    areaSqft: 910,
    baths: 2,
  },
  {
    id: 'plot-hebbal',
    title: 'Residential Plot for Sale in Hebbal',
    transactionType: 'Buy',
    category: 'Land / Plot',
    zone: 'North Bengaluru',
    propertyType: 'Residential Plot',
    configuration: 'N/A',
    city: 'Bengaluru',
    locality: 'Hebbal',
    priceLabel: '₹ 2.10 Cr',
    priceValueINR: 21000000,
  },
  {
    id: 'lease-warehouse-peenya',
    title: 'Industrial Warehouse on Lease in Peenya',
    transactionType: 'Lease',
    category: 'Industrial',
    zone: 'West Bengaluru',
    propertyType: 'Warehouse / Godown',
    configuration: 'N/A',
    city: 'Bengaluru',
    locality: 'Peenya',
    priceLabel: '₹ 2,80,000/month',
    priceValueINR: 280000,
    areaSqft: 6000,
  },
]

export function uniqueSorted(values: string[]) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b))
}

