import { Metadata } from 'next'
import PetrolCityContent from '@/components/city/PetrolCityContent'
import { fetchFuelPrices } from '@/lib/fetchPrices'

export const metadata: Metadata = {
  title: 'Petrol Price Today in Bangalore - Diesel & CNG Rate',
  description: 'Today\'s petrol price in Bangalore with diesel & CNG rates. Updated daily at 6 AM. Fuel cost calculator & city comparison.',
  keywords: ['petrol price bangalore today', 'diesel price bangalore', 'cng price bangalore'],
  alternates: { canonical: 'https://livepriceindia.vercel.app/petrol-price-bangalore' },
}

export const revalidate = 3600

export default async function PetrolPriceBangalore() {
  const allPrices = await fetchFuelPrices()
  const allCities = Object.fromEntries(
    Object.entries(allPrices).map(([k, v]) => [k, { ...v, name: k.charAt(0).toUpperCase() + k.slice(1) }])
  )
  return <PetrolCityContent cityKey="bangalore" cityName="Bangalore" data={allPrices['bangalore']} allCities={allCities} />
}
