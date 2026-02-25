import { Metadata } from 'next'
import PetrolCityContent from '@/components/city/PetrolCityContent'
import { fetchFuelPrices } from '@/lib/fetchPrices'

export const metadata: Metadata = {
  title: 'Petrol Price Today in Ahmedabad - Diesel & CNG Rate',
  description: 'Today\'s petrol price in Ahmedabad with diesel & CNG rates. Updated daily at 6 AM. Fuel cost calculator & city comparison.',
  keywords: ['petrol price ahmedabad today', 'diesel price ahmedabad', 'cng price ahmedabad'],
  alternates: { canonical: 'https://livepriceindia.vercel.app/petrol-price-ahmedabad' },
}

export const revalidate = 3600

export default async function PetrolPriceAhmedabad() {
  const allPrices = await fetchFuelPrices()
  const allCities = Object.fromEntries(
    Object.entries(allPrices).map(([k, v]) => [k, { ...v, name: k.charAt(0).toUpperCase() + k.slice(1) }])
  )
  return <PetrolCityContent cityKey="ahmedabad" cityName="Ahmedabad" data={allPrices['ahmedabad']} allCities={allCities} />
}
