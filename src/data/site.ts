export const CONTACT = {
  phone: '8147139953',
  phoneDisplay: '+91 81471 39953',
  email: 'Prahulkumar46@gmail.com',
  whatsapp: '9198147139953',
} as const

const DEFAULT_WHATSAPP_MESSAGE =
  'Hi Elite Pincode, I am interested in properties in Bengaluru. Please assist me.'

export function whatsappLink(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`
}

export const HERO_STATS = [
  { value: '500+', label: 'Properties' },
  { value: '1000+', label: 'Happy Buyers' },
  { value: '50+', label: 'Developers' },
  { value: '15+', label: 'Years Experience' },
] as const

export const WHY_INVEST = [
  {
    icon: '💼',
    title: 'IT Hub Growth',
    description:
      'Bengaluru drives India\'s tech economy with 400+ global R&D centres and sustained white-collar demand.',
  },
  {
    icon: '🚇',
    title: 'Metro Expansion',
    description:
      'Phase 2 & 3 metro corridors are unlocking new micro-markets and boosting connectivity across the city.',
  },
  {
    icon: '🏠',
    title: 'Rental Demand',
    description:
      'Strong rental yields in IT corridors make Bengaluru a top choice for investors seeking steady returns.',
  },
  {
    icon: '🏗️',
    title: 'Infrastructure Growth',
    description:
      'Peripheral Ring Road, airport expansion, and SEZs are reshaping premium property corridors.',
  },
] as const

export const INVESTMENT_CORRIDORS = [
  {
    name: 'Whitefield',
    growth: '+8.2% YoY',
    avgPrice: '₹9,800/sqft',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  },
  {
    name: 'Sarjapur Road',
    growth: '+7.5% YoY',
    avgPrice: '₹8,200/sqft',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    name: 'Hebbal',
    growth: '+6.8% YoY',
    avgPrice: '₹11,500/sqft',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  },
  {
    name: 'Devanahalli',
    growth: '+9.1% YoY',
    avgPrice: '₹6,400/sqft',
    image:
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80',
  },
  {
    name: 'Electronic City',
    growth: '+5.9% YoY',
    avgPrice: '₹7,100/sqft',
    image:
      'https://images.unsplash.com/photo-1599423300746-b68314dbb7d0?w=600&q=80',
  },
  {
    name: 'North Bengaluru',
    growth: '+7.2% YoY',
    avgPrice: '₹8,900/sqft',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
  },
] as const

export const DEVELOPER_PARTNERS = [
  { name: 'Prestige', tagline: 'Luxury Living' },
  { name: 'Sobha', tagline: 'Quality Craftsmanship' },
  { name: 'Brigade', tagline: 'Urban Excellence' },
  { name: 'Puravankara', tagline: 'Trusted Legacy' },
  { name: 'Godrej', tagline: 'Premium Homes' },
  { name: 'Embassy', tagline: 'Global Standards' },
] as const

export const BUYING_JOURNEY = [
  {
    step: 1,
    title: 'Requirement Analysis',
    description:
      'Share your budget, location preferences, and lifestyle needs with our Bengaluru property experts.',
  },
  {
    step: 2,
    title: 'Property Shortlisting',
    description:
      'Receive a curated list of verified properties matched to your investment or living goals.',
  },
  {
    step: 3,
    title: 'Site Visit',
    description:
      'Schedule guided site visits with neighbourhood insights, builder credentials, and price comparisons.',
  },
  {
    step: 4,
    title: 'Booking & Handover',
    description:
      'End-to-end support for documentation, home loans, legal checks, and possession.',
  },
] as const

export const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    location: 'Whitefield',
    rating: 5,
    review:
      'Elite Pincode helped us find our dream 3BHK in Whitefield. The team understood our budget and delivered options we never found on other portals.',
    avatar: 'PS',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
  },
  {
    name: 'Rahul Menon',
    location: 'Hebbal',
    rating: 5,
    review:
      'As an NRI investor, I needed a trusted partner in Bengaluru. Their due diligence on builders and RERA compliance gave me complete peace of mind.',
    avatar: 'RM',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
  },
  {
    name: 'Ananya Reddy',
    location: 'Jayanagar',
    rating: 5,
    review:
      'From shortlisting to registration, the entire buying journey was seamless. The site visit coordination alone saved us weeks of effort.',
    avatar: 'AR',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
  },
  {
    name: 'Vikram Iyer',
    location: 'Electronic City',
    rating: 4,
    review:
      'Excellent rental portfolio advisory. They identified high-yield properties near Electronic City that are already generating strong returns.',
    avatar: 'VI',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
  },
] as const

export const FOOTER_REGIONS = [
  'North Bengaluru',
  'South Bengaluru',
  'East Bengaluru',
  'West Bengaluru',
] as const

export const FOOTER_CATEGORIES = [
  'Apartments',
  'Villas',
  'Plots',
  'Commercial',
  'New Launches',
  'Luxury Homes',
] as const
