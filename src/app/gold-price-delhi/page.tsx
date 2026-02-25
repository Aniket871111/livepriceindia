import { Metadata } from 'next'
import GoldCityContent from '@/components/city/GoldCityContent'
import { fetchGoldPrices } from '@/lib/fetchPrices'

const SITE_URL = process.env.SITE_URL || 'https://livepriceindia.vercel.app'

export const metadata: Metadata = {
  title: 'Gold Rate Today in Delhi - 22K 24K Price per Gram & 10g',
  description: 'Today\'s gold rate in Delhi: Live 24K & 22K gold price per 10 grams. Silver rate updated every 5 minutes. Check gold price trend for Delhi.',
  keywords: ['gold rate today delhi', 'gold price delhi', '22 carat gold rate delhi', '24 carat gold rate delhi'],
  alternates: { canonical: `${SITE_URL}/gold-price-delhi` },
}

export const revalidate = 60 // 1 minute ISR - faster updates

export default async function GoldPriceDelhi() {
  const allPrices = await fetchGoldPrices()
  const allCities = Object.fromEntries(
    Object.entries(allPrices).map(([k, v]) => [k, { ...v, name: k.charAt(0).toUpperCase() + k.slice(1) }])
  )
  return <GoldCityContent cityKey="delhi" cityName="Delhi" data={allPrices['delhi']} allCities={allCities} />
}
