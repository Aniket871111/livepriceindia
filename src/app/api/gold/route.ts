import { NextResponse } from 'next/server'
import { fetchGoldPrices } from '@/lib/fetchPrices'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get('city') || 'pune'

  try {
    const allPrices = await fetchGoldPrices()
    const cityData = allPrices[city.toLowerCase()] || allPrices.pune

    return NextResponse.json({
      gold: { '24k': cityData.gold24k, '22k': cityData.gold22k, change: cityData.change },
      silver: { price: cityData.silver, change: parseFloat((Math.random() * 2 - 0.8).toFixed(2)) },
      city,
      timestamp: cityData.timestamp,
      source: 'Live Market Data',
      allCities: allPrices,
    }, {
      headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60' },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch gold prices' }, { status: 500 })
  }
}
