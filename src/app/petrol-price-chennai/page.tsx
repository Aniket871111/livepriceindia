import { Metadata } from 'next'
import PetrolCityContent from '@/components/city/PetrolCityContent'

export const metadata: Metadata = {
  title: 'Petrol Price Today in Chennai - Diesel & CNG Rate',
  description: 'Today\'s petrol price in Chennai: ₹102.63/L, Diesel ₹94.24/L, CNG ₹75.80/kg. Updated daily. Check fuel cost calculator & 7-day price trend.',
  keywords: ['petrol price chennai today', 'diesel price chennai', 'cng price chennai'],
}

export const revalidate = 300

export default function PetrolPriceChennai() {
  return <PetrolCityContent cityKey="chennai" />
}
