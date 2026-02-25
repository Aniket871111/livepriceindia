import { Metadata } from 'next'
import GoldCityContent from '@/components/city/GoldCityContent'

export const metadata: Metadata = {
  title: 'Gold Rate Today in Chennai - 22K 24K Price per Gram & 10g',
  description: 'Today\'s gold rate in Chennai: 24K ₹63,550/10g, 22K ₹58,350/10g. Live silver rate ₹74,850/kg. Updated every 5 minutes.',
  keywords: ['gold rate today chennai', 'gold price chennai', '22 carat gold rate chennai'],
}

export const revalidate = 300

export default function GoldPriceChennai() {
  return <GoldCityContent cityKey="chennai" />
}
