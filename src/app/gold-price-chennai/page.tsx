import { Metadata } from 'next'
import GoldCityContent from '@/components/city/GoldCityContent'
import { fetchGoldPrices } from '@/lib/fetchPrices'

const SITE_URL = process.env.SITE_URL || 'https://livepriceindia.vercel.app'

export const metadata: Metadata = {
  title: 'Gold Rate Today in Chennai - 22K 24K Price per Gram & 10g',
  description: 'Today\'s gold rate in Chennai: Live 24K & 22K gold price per 10 grams. Silver rate updated every 5 minutes.',
  keywords: ['gold rate today chennai', 'gold price chennai', '22 carat gold rate chennai'],
  alternates: { canonical: `${SITE_URL}/gold-price-chennai` },
}

export const revalidate = 60 // 1 minute ISR - faster updates

export default async function GoldPriceChennai() {
  const allPrices = await fetchGoldPrices()
  const allCities = Object.fromEntries(
    Object.entries(allPrices).map(([k, v]) => [k, { ...v, name: k.charAt(0).toUpperCase() + k.slice(1) }])
  )
  return <GoldCityContent cityKey="chennai" cityName="Chennai" data={allPrices['chennai']} allCities={allCities} />
}
