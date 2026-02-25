import { Metadata } from 'next'
import GoldCityContent from '@/components/city/GoldCityContent'

export const metadata: Metadata = {
  title: 'Gold Rate Today in Pune - 22K 24K Price per Gram & 10g',
  description: 'Today\'s gold rate in Pune: 24K ₹63,450/10g, 22K ₹58,250/10g. Live silver rate ₹74,800/kg. Updated every 5 minutes. Free gold price alerts for Pune.',
  keywords: ['gold rate today pune', 'gold price pune', '22 carat gold rate pune', '24 carat gold rate pune', 'silver rate pune today'],
}

export const revalidate = 300

export default function GoldPricePune() {
  return <GoldCityContent cityKey="pune" />
}
