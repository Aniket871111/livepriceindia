import { Metadata } from 'next'
import GoldCityContent from '@/components/city/GoldCityContent'
import { fetchGoldPrices } from '@/lib/fetchPrices'

export const metadata: Metadata = {
  title: 'Gold Rate Today in Hyderabad - 22K 24K Price per Gram & 10g',
  description: 'Today\'s gold rate in Hyderabad: Live 24K & 22K gold price per 10 grams. Silver rate updated every 5 minutes.',
  keywords: ['gold rate today hyderabad', 'gold price hyderabad', '22 carat gold rate hyderabad'],
}

export const revalidate = 300

export default async function GoldPriceHyderabad() {
  const allPrices = await fetchGoldPrices()
  const allCities = Object.fromEntries(
    Object.entries(allPrices).map(([k, v]) => [k, { ...v, name: k.charAt(0).toUpperCase() + k.slice(1) }])
  )
  return <GoldCityContent cityKey="hyderabad" cityName="Hyderabad" data={allPrices['hyderabad']} allCities={allCities} />
}
