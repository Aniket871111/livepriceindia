import { Metadata } from 'next'
import GoldCityContent from '@/components/city/GoldCityContent'
import { fetchGoldPrices } from '@/lib/fetchPrices'

const SITE_URL = process.env.SITE_URL || 'https://livepriceindia.vercel.app'

export const metadata: Metadata = {
  title: 'Gold Rate Today in Ahmedabad - 22K 24K Price per Gram & 10g',
  description: 'Today\'s gold rate in Ahmedabad: Live 24K & 22K gold price per 10 grams. Silver rate updated every 5 minutes.',
  keywords: ['gold rate today ahmedabad', 'gold price ahmedabad', '22 carat gold rate ahmedabad'],
  alternates: { canonical: `${SITE_URL}/gold-price-ahmedabad` },
}

export const revalidate = 300

export default async function GoldPriceAhmedabad() {
  const allPrices = await fetchGoldPrices()
  const allCities = Object.fromEntries(
    Object.entries(allPrices).map(([k, v]) => [k, { ...v, name: k.charAt(0).toUpperCase() + k.slice(1) }])
  )
  return <GoldCityContent cityKey="ahmedabad" cityName="Ahmedabad" data={allPrices['ahmedabad']} allCities={allCities} />
}
