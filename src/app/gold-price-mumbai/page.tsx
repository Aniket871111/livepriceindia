import { Metadata } from 'next'
import GoldCityContent from '@/components/city/GoldCityContent'

export const metadata: Metadata = {
  title: 'Gold Rate Today in Mumbai - 22K 24K Price per Gram & 10g',
  description: 'Today\'s gold rate in Mumbai: 24K ₹63,600/10g, 22K ₹58,400/10g. Live silver rate ₹74,950/kg. Updated every 5 minutes. Free gold price alerts for Mumbai.',
  keywords: ['gold rate today mumbai', 'gold price mumbai', '22 carat gold rate mumbai', '24 carat gold rate mumbai'],
}

export const revalidate = 300

export default function GoldPriceMumbai() {
  return <GoldCityContent cityKey="mumbai" />
}
