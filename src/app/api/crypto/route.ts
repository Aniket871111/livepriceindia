import { NextResponse } from 'next/server'
import { fetchCryptoPrices } from '@/lib/fetchPrices'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const coin = searchParams.get('coin')
  const limit = parseInt(searchParams.get('limit') || '15')

  try {
    const allCoins = await fetchCryptoPrices()

    if (coin) {
      const coinData = allCoins.find(
        (c) => c.id === coin || c.symbol === coin.toUpperCase()
      )
      if (!coinData) {
        return NextResponse.json({ error: 'Coin not found' }, { status: 404 })
      }
      return NextResponse.json({ ...coinData, timestamp: new Date().toISOString() })
    }

    return NextResponse.json({
      coins: allCoins.slice(0, limit),
      timestamp: new Date().toISOString(),
      source: 'CoinGecko',
    }, {
      headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=15' },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch crypto prices' }, { status: 500 })
  }
}
