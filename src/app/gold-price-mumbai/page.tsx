import { Metadata } from 'next'
import GoldCityContent from '@/components/city/GoldCityContent'
import { fetchGoldPrices } from '@/lib/fetchPrices'

export const metadata: Metadata = {
  title: 'Gold Rate Today in Mumbai - 22K 24K Price per Gram & 10g',
  description: 'Today\'s gold rate in Mumbai: Live 24K & 22K gold price per 10 grams. Silver rate updated every 5 minutes. Check gold price trend for Mumbai.',
  keywords: ['gold rate today mumbai', 'gold price mumbai', '22 carat gold rate mumbai', '24 carat gold rate mumbai'],
}

export const revalidate = 300

export default async function GoldPriceMumbai() {
  const allPrices = await fetchGoldPrices()
  const allCities = Object.fromEntries(
    Object.entries(allPrices).map(([k, v]) => [k, { ...v, name: k.charAt(0).toUpperCase() + k.slice(1) }])
  )
  return <GoldCityContent cityKey="mumbai" cityName="Mumbai" data={allPrices['mumbai']} allCities={allCities} />
}
