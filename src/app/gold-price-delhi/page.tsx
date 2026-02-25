import { Metadata } from 'next'
import GoldCityContent from '@/components/city/GoldCityContent'

export const metadata: Metadata = {
  title: 'Gold Rate Today in Delhi - 22K 24K Price per Gram & 10g',
  description: 'Today\'s gold rate in Delhi: 24K ₹63,350/10g, 22K ₹58,150/10g. Live silver rate ₹74,650/kg. Updated every 5 minutes. Free gold price alerts for Delhi.',
  keywords: ['gold rate today delhi', 'gold price delhi', '22 carat gold rate delhi', '24 carat gold rate delhi'],
}

export const revalidate = 300

export default function GoldPriceDelhi() {
  return <GoldCityContent cityKey="delhi" />
}
