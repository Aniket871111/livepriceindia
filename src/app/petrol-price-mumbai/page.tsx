import { Metadata } from 'next'
import PetrolCityContent from '@/components/city/PetrolCityContent'

export const metadata: Metadata = {
  title: 'Petrol Price Today in Mumbai - Diesel & CNG Rate',
  description: 'Today\'s petrol price in Mumbai: ₹106.31/L, Diesel ₹92.12/L, CNG ₹89.50/kg. Updated daily. Check fuel cost calculator & 7-day price trend.',
  keywords: ['petrol price mumbai today', 'diesel price mumbai', 'cng price mumbai'],
}

export const revalidate = 300

export default function PetrolPriceMumbai() {
  return <PetrolCityContent cityKey="mumbai" />
}
