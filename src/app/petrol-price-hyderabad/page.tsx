import { Metadata } from 'next'
import PetrolCityContent from '@/components/city/PetrolCityContent'
import { fetchFuelPrices } from '@/lib/fetchPrices'

export const metadata: Metadata = {
  title: 'Petrol Price Today in Hyderabad - Diesel & CNG Rate',
  description: 'Today\'s petrol price in Hyderabad with diesel & CNG rates. Updated daily at 6 AM. Fuel cost calculator & city comparison.',
  keywords: ['petrol price hyderabad today', 'diesel price hyderabad', 'cng price hyderabad'],
}

export const revalidate = 3600

export default async function PetrolPriceHyderabad() {
  const allPrices = await fetchFuelPrices()
  const allCities = Object.fromEntries(
    Object.entries(allPrices).map(([k, v]) => [k, { ...v, name: k.charAt(0).toUpperCase() + k.slice(1) }])
  )
  return <PetrolCityContent cityKey="hyderabad" cityName="Hyderabad" data={allPrices['hyderabad']} allCities={allCities} />
}
