import { Metadata } from 'next'
import PetrolCityContent from '@/components/city/PetrolCityContent'

export const metadata: Metadata = {
  title: 'Petrol Price Today in Delhi - Diesel & CNG Rate',
  description: 'Today\'s petrol price in Delhi: ₹94.72/L, Diesel ₹87.62/L, CNG ₹76.59/kg. Updated daily. Check fuel cost calculator & 7-day price trend.',
  keywords: ['petrol price delhi today', 'diesel price delhi', 'cng price delhi'],
}

export const revalidate = 300

export default function PetrolPriceDelhi() {
  return <PetrolCityContent cityKey="delhi" />
}
