import { Metadata } from 'next'
import GoldCityContent from '@/components/city/GoldCityContent'

export const metadata: Metadata = {
  title: 'Gold Rate Today in Hyderabad - 22K 24K Price per Gram & 10g',
  description: 'Today\'s gold rate in Hyderabad: 24K ₹63,400/10g, 22K ₹58,200/10g. Live silver rate ₹74,750/kg. Updated every 5 minutes.',
  keywords: ['gold rate today hyderabad', 'gold price hyderabad', '22 carat gold rate hyderabad'],
}

export const revalidate = 300

export default function GoldPriceHyderabad() {
  return <GoldCityContent cityKey="hyderabad" />
}
