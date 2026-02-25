import { Metadata } from 'next'
import GoldCityContent from '@/components/city/GoldCityContent'

export const metadata: Metadata = {
  title: 'Gold Rate Today in Kolkata - 22K 24K Price per Gram & 10g',
  description: 'Today\'s gold rate in Kolkata: 24K ₹63,380/10g, 22K ₹58,180/10g. Live silver rate ₹74,680/kg. Updated every 5 minutes.',
  keywords: ['gold rate today kolkata', 'gold price kolkata', '22 carat gold rate kolkata'],
}

export const revalidate = 300

export default function GoldPriceKolkata() {
  return <GoldCityContent cityKey="kolkata" />
}
