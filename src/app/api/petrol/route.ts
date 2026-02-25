import { NextResponse } from 'next/server'
import { fetchFuelPrices } from '@/lib/fetchPrices'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get('city') || 'pune'

  try {
    const allPrices = await fetchFuelPrices()
    const cityData = allPrices[city.toLowerCase()] || allPrices.pune

    return NextResponse.json({
      petrol: cityData.petrol,
      diesel: cityData.diesel,
      cng: cityData.cng,
      city,
      effectiveDate: cityData.effectiveDate,
      timestamp: new Date().toISOString(),
      source: 'Indian Oil Corporation',
      allCities: allPrices,
    }, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=300' },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch fuel prices' }, { status: 500 })
  }
}
