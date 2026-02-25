import { Metadata } from 'next'
import GoldCityContent from '@/components/city/GoldCityContent'
import { fetchGoldPrices } from '@/lib/fetchPrices'

export const metadata: Metadata = {
  title: 'Gold Rate Today in Pune - 22K 24K Price per Gram & 10g',
  description: 'Today\'s gold rate in Pune: Live 24K & 22K gold price per 10 grams. Silver rate updated every 5 minutes. Check gold price trend for Pune.',
  keywords: ['gold rate today pune', 'gold price pune', '22 carat gold rate pune', '24 carat gold rate pune', 'silver rate pune today'],
}

export const revalidate = 300

export default async function GoldPricePune() {
  const allPrices = await fetchGoldPrices()
  const allCities = Object.fromEntries(
    Object.entries(allPrices).map(([k, v]) => [k, { ...v, name: k.charAt(0).toUpperCase() + k.slice(1) }])
  )
  return <GoldCityContent cityKey="pune" cityName="Pune" data={allPrices['pune']} allCities={allCities} />
}
