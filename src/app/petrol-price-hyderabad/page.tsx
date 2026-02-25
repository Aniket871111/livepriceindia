import { Metadata } from 'next'
import PetrolCityContent from '@/components/city/PetrolCityContent'

export const metadata: Metadata = {
  title: 'Petrol Price Today in Hyderabad - Diesel & CNG Rate',
  description: 'Today\'s petrol price in Hyderabad: ₹109.66/L, Diesel ₹97.82/L, CNG ₹78.50/kg. Updated daily. Check fuel cost calculator & 7-day price trend.',
  keywords: ['petrol price hyderabad today', 'diesel price hyderabad', 'cng price hyderabad'],
}

export const revalidate = 300

export default function PetrolPriceHyderabad() {
  return <PetrolCityContent cityKey="hyderabad" />
}
