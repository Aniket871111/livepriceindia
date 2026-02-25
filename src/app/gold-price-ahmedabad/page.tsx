import { Metadata } from 'next'
import GoldCityContent from '@/components/city/GoldCityContent'

export const metadata: Metadata = {
  title: 'Gold Rate Today in Ahmedabad - 22K 24K Price per Gram & 10g',
  description: 'Today\'s gold rate in Ahmedabad: 24K ₹63,420/10g, 22K ₹58,220/10g. Live silver rate ₹74,720/kg. Updated every 5 minutes.',
  keywords: ['gold rate today ahmedabad', 'gold price ahmedabad', '22 carat gold rate ahmedabad'],
}

export const revalidate = 300

export default function GoldPriceAhmedabad() {
  return <GoldCityContent cityKey="ahmedabad" />
}
