import { NextResponse } from 'next/server'
import { fetchCricketScores } from '@/lib/fetchPrices'

export const revalidate = 30

export async function GET() {
  try {
    const matches = await fetchCricketScores()

    return NextResponse.json({
      matches,
      timestamp: new Date().toISOString(),
      source: 'CricAPI',
    }, {
      headers: { 'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=10' },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch cricket scores' }, { status: 500 })
  }
}
