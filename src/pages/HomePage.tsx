import type { ReactNode } from 'react'
import { BengaluruRegions } from '../ui/BengaluruRegions'
import { BuyingJourney } from '../ui/BuyingJourney'
import { DeveloperPartners } from '../ui/DeveloperPartners'
import { HeroAccent } from '../ui/HeroAccent'
import { HeroSearch } from '../ui/HeroSearch'
import { InvestmentCorridors } from '../ui/InvestmentCorridors'
import { ListingsSection } from '../ui/ListingsSection'
import { NewLaunchSection } from '../ui/NewLaunchSection'
import { PropertySearch } from '../ui/PropertySearch'
import { Testimonials } from '../ui/Testimonials'
import { WhyInvest } from '../ui/WhyInvest'

function PageSection({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-7xl px-6">{children}</div>
}

export function HomePage() {
  return (
    <>
      <HeroSearch />
      <HeroAccent />
      <PropertySearch />
      <PageSection>
        <BengaluruRegions />
        <ListingsSection />
      </PageSection>
      <NewLaunchSection />
      <PageSection>
        <WhyInvest />
        <InvestmentCorridors />
        <DeveloperPartners />
        <BuyingJourney />
        <Testimonials />
      </PageSection>
    </>
  )
}
