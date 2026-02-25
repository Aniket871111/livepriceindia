import { Metadata } from 'next'
import PetrolCityContent from '@/components/city/PetrolCityContent'

export const metadata: Metadata = {
  title: 'Petrol Price Today in Bangalore - Diesel & CNG Rate',
  description: 'Today\'s petrol price in Bangalore: ₹101.94/L, Diesel ₹87.89/L, CNG ₹72.00/kg. Updated daily. Check fuel cost calculator & 7-day price trend.',
  keywords: ['petrol price bangalore today', 'diesel price bangalore', 'cng price bangalore'],
}

export const revalidate = 300

export default function PetrolPriceBangalore() {
  return <PetrolCityContent cityKey="bangalore" />
}
