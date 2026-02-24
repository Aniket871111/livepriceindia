import { NextResponse } from 'next/server'

// Mock data - Replace with actual scraping/API
const mockData = {
  pune: { petrol: 106.50, diesel: 94.25 },
  mumbai: { petrol: 111.35, diesel: 97.28 },
  delhi: { petrol: 96.72, diesel: 89.62 },
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get('city') || 'pune'

  // In production:
  // 1. Scrape from IOCL/HPCL websites (daily at 6 AM)
  // 2. Cache in Redis with 24-hour TTL
  // 3. Store in PostgreSQL for historical tracking

  try {
    const prices = mockData[city as keyof typeof mockData] || mockData.pune

    const data = {
      petrol: prices.petrol,
      diesel: prices.diesel,
      city,
      effectiveDate: new Date().toISOString().split('T')[0],
      timestamp: new Date().toISOString(),
      source: 'Indian Oil Corporation',
    }

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=300',
      },
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch petrol prices' },
      { status: 500 }
    )
  }
}
