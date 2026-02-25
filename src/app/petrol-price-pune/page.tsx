import { Metadata } from 'next'
import PetrolCityContent from '@/components/city/PetrolCityContent'

export const metadata: Metadata = {
  title: 'Petrol Price Today in Pune - Diesel & CNG Rate',
  description: 'Today\'s petrol price in Pune: ₹106.31/L, Diesel ₹92.15/L, CNG ₹89.50/kg. Updated daily. Check fuel cost calculator & 7-day price trend.',
  keywords: ['petrol price pune today', 'diesel price pune', 'cng price pune', 'fuel price pune'],
}

export const revalidate = 300

export default function PetrolPricePune() {
  return <PetrolCityContent cityKey="pune" />
}
