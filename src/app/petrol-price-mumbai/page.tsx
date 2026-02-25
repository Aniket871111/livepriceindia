import { Metadata } from 'next'
import PetrolCityContent from '@/components/city/PetrolCityContent'
import { fetchFuelPrices } from '@/lib/fetchPrices'

export const metadata: Metadata = {
  title: 'Petrol Price Today in Mumbai - Diesel & CNG Rate',
  description: 'Today\'s petrol price in Mumbai with diesel & CNG rates. Updated daily at 6 AM. Fuel cost calculator & city comparison.',
  keywords: ['petrol price mumbai today', 'diesel price mumbai', 'cng price mumbai'],
  alternates: { canonical: 'https://livepriceindia.vercel.app/petrol-price-mumbai' },
}

export const revalidate = 3600

export default async function PetrolPriceMumbai() {
  const allPrices = await fetchFuelPrices()
  const allCities = Object.fromEntries(
    Object.entries(allPrices).map(([k, v]) => [k, { ...v, name: k.charAt(0).toUpperCase() + k.slice(1) }])
  )
  return <PetrolCityContent cityKey="mumbai" cityName="Mumbai" data={allPrices['mumbai']} allCities={allCities} />
}
