import { Metadata } from 'next'
import PetrolCityContent from '@/components/city/PetrolCityContent'
import { fetchFuelPrices } from '@/lib/fetchPrices'

export const metadata: Metadata = {
  title: 'Petrol Price Today in Delhi - Diesel & CNG Rate',
  description: 'Today\'s petrol price in Delhi with diesel & CNG rates. Updated daily at 6 AM. Fuel cost calculator & city comparison.',
  keywords: ['petrol price delhi today', 'diesel price delhi', 'cng price delhi'],
}

export const revalidate = 3600

export default async function PetrolPriceDelhi() {
  const allPrices = await fetchFuelPrices()
  const allCities = Object.fromEntries(
    Object.entries(allPrices).map(([k, v]) => [k, { ...v, name: k.charAt(0).toUpperCase() + k.slice(1) }])
  )
  return <PetrolCityContent cityKey="delhi" cityName="Delhi" data={allPrices['delhi']} allCities={allCities} />
}
