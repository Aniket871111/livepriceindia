import { Metadata } from 'next'
import GoldCityContent from '@/components/city/GoldCityContent'
import { fetchGoldPrices } from '@/lib/fetchPrices'

export const metadata: Metadata = {
  title: 'Gold Rate Today in Kolkata - 22K 24K Price per Gram & 10g',
  description: 'Today\'s gold rate in Kolkata: Live 24K & 22K gold price per 10 grams. Silver rate updated every 5 minutes.',
  keywords: ['gold rate today kolkata', 'gold price kolkata', '22 carat gold rate kolkata'],
}

export const revalidate = 300

export default async function GoldPriceKolkata() {
  const allPrices = await fetchGoldPrices()
  const allCities = Object.fromEntries(
    Object.entries(allPrices).map(([k, v]) => [k, { ...v, name: k.charAt(0).toUpperCase() + k.slice(1) }])
  )
  return <GoldCityContent cityKey="kolkata" cityName="Kolkata" data={allPrices['kolkata']} allCities={allCities} />
}
