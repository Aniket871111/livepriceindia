import { Metadata } from 'next'
import PetrolCityContent from '@/components/city/PetrolCityContent'

export const metadata: Metadata = {
  title: 'Petrol Price Today in Ahmedabad - Diesel & CNG Rate',
  description: 'Today\'s petrol price in Ahmedabad: ₹94.26/L, Diesel ₹89.72/L, CNG ₹71.40/kg. Updated daily. Check fuel cost calculator & 7-day price trend.',
  keywords: ['petrol price ahmedabad today', 'diesel price ahmedabad', 'cng price ahmedabad'],
}

export const revalidate = 300

export default function PetrolPriceAhmedabad() {
  return <PetrolCityContent cityKey="ahmedabad" />
}
