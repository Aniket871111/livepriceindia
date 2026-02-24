import Hero from '@/components/home/Hero'
import LiveTicker from '@/components/home/LiveTicker'
import DashboardCards from '@/components/home/DashboardCards'
import FeaturesSection from '@/components/home/FeaturesSection'
import CTASection from '@/components/home/CTASection'

export const revalidate = 60 // Revalidate every 60 seconds (ISR)

export default function HomePage() {
  return (
    <>
      <LiveTicker />
      <Hero />
      <DashboardCards />
      <FeaturesSection />
      <CTASection />
    </>
  )
}
