import { FloatingContact } from './FloatingContact'
import { ScrollToTop } from './ScrollToTop'
import { SiteFooter } from './SiteFooter'
import { TopNav } from './TopNav'
import { Route, Routes } from 'react-router-dom'
import { AboutPage } from '../pages/AboutPage'
import { HomePage } from '../pages/HomePage'
import { PropertiesPage } from '../pages/PropertiesPage'
import { PropertyDetailPage } from '../pages/PropertyDetailPage'

export function App() {
  return (
    <div className="min-h-svh overflow-x-hidden bg-white text-slate-800">
      <ScrollToTop />
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
        <TopNav />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/properties/:id" element={<PropertyDetailPage />} />
        </Routes>
      </main>

      <SiteFooter />
      <FloatingContact />
    </div>
  )
}
