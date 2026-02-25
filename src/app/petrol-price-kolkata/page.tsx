import { Metadata } from 'next'
import PetrolCityContent from '@/components/city/PetrolCityContent'

export const metadata: Metadata = {
  title: 'Petrol Price Today in Kolkata - Diesel & CNG Rate',
  description: 'Today\'s petrol price in Kolkata: ₹104.95/L, Diesel ₹91.76/L, CNG ₹73.20/kg. Updated daily. Check fuel cost calculator & 7-day price trend.',
  keywords: ['petrol price kolkata today', 'diesel price kolkata', 'cng price kolkata'],
}

export const revalidate = 300

export default function PetrolPriceKolkata() {
  return <PetrolCityContent cityKey="kolkata" />
}
