import { NextResponse } from 'next/server'
import { fetchCricketScores } from '@/lib/fetchPrices'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    const matches = await fetchCricketScores()

    return NextResponse.json({
      matches,
      timestamp: new Date().toISOString(),
      source: 'Cricbuzz',
    }, {
      headers: { 'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=10' },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch cricket scores' }, { status: 500 })
  }
}
