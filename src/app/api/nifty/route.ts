import { NextResponse } from 'next/server'
import { fetchNiftyData } from '@/lib/fetchPrices'

export const revalidate = 30

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const index = searchParams.get('index') || 'nifty'

  try {
    const { nifty, bankNifty } = await fetchNiftyData()
    const data = index === 'banknifty' ? bankNifty : nifty

    // Auto-calculate pivot points
    const pivot = parseFloat(((data.high + data.low + data.close) / 3).toFixed(2))
    const r1 = parseFloat((2 * pivot - data.low).toFixed(2))
    const r2 = parseFloat((pivot + (data.high - data.low)).toFixed(2))
    const r3 = parseFloat((data.high + 2 * (pivot - data.low)).toFixed(2))
    const s1 = parseFloat((2 * pivot - data.high).toFixed(2))
    const s2 = parseFloat((pivot - (data.high - data.low)).toFixed(2))
    const s3 = parseFloat((data.low - 2 * (data.high - pivot)).toFixed(2))

    return NextResponse.json({
      ...data,
      index,
      pivot,
      support: [s1, s2, s3],
      resistance: [r1, r2, r3],
      marketStatus: isMarketOpen() ? 'open' : 'closed',
    }, {
      headers: { 'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=10' },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch index data' }, { status: 500 })
  }
}

function isMarketOpen(): boolean {
  const now = new Date()
  const istOffset = 5.5 * 60 * 60 * 1000
  const ist = new Date(now.getTime() + istOffset)
  const day = ist.getUTCDay()
  const hours = ist.getUTCHours()
  const minutes = ist.getUTCMinutes()
  const time = hours * 60 + minutes

  if (day >= 1 && day <= 5) {
    return time >= 9 * 60 + 15 && time <= 15 * 60 + 30
  }
  return false
}
