import { Metadata } from 'next'
import GoldCityContent from '@/components/city/GoldCityContent'

export const metadata: Metadata = {
  title: 'Gold Rate Today in Bangalore - 22K 24K Price per Gram & 10g',
  description: 'Today\'s gold rate in Bangalore: 24K ₹63,500/10g, 22K ₹58,300/10g. Live silver rate ₹74,700/kg. Updated every 5 minutes.',
  keywords: ['gold rate today bangalore', 'gold price bangalore', '22 carat gold rate bangalore'],
}

export const revalidate = 300

export default function GoldPriceBangalore() {
  return <GoldCityContent cityKey="bangalore" />
}
