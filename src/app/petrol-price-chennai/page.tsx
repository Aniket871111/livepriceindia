import { Metadata } from 'next'
import PetrolCityContent from '@/components/city/PetrolCityContent'
import { fetchFuelPrices } from '@/lib/fetchPrices'

export const metadata: Metadata = {
  title: 'Petrol Price Today in Chennai - Diesel & CNG Rate',
  description: 'Today\'s petrol price in Chennai with diesel & CNG rates. Updated daily at 6 AM. Fuel cost calculator & city comparison.',
  keywords: ['petrol price chennai today', 'diesel price chennai', 'cng price chennai'],
  alternates: { canonical: 'https://livepriceindia.vercel.app/petrol-price-chennai' },
}

export const revalidate = 3600

export default async function PetrolPriceChennai() {
  const allPrices = await fetchFuelPrices()
  const allCities = Object.fromEntries(
    Object.entries(allPrices).map(([k, v]) => [k, { ...v, name: k.charAt(0).toUpperCase() + k.slice(1) }])
  )
  return <PetrolCityContent cityKey="chennai" cityName="Chennai" data={allPrices['chennai']} allCities={allCities} />
}
