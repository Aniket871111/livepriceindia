import { NextResponse } from 'next/server'

// Mock data - Replace with actual API
const mockData = {
  nifty: {
    price: 22145.50,
    open: 22089.75,
    high: 22198.30,
    low: 22012.40,
    close: 22145.50,
    change: 0.45,
    support: [22050, 21980, 21900],
    resistance: [22200, 22300, 22450],
  },
  bankNifty: {
    price: 47890.25,
    open: 47756.80,
    high: 47945.60,
    low: 47690.30,
    close: 47890.25,
    change: -0.23,
    support: [47700, 47500, 47300],
    resistance: [48000, 48200, 48500],
  },
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const index = searchParams.get('index') || 'nifty'

  // In production:
  // 1. Use NSE India API or Yahoo Finance
  // 2. Calculate support/resistance using Pivot Points
  // 3. Update every 30-60 seconds during market hours
  // 4. Cache in Redis

  try {
    const data = {
      ...(index === 'nifty' ? mockData.nifty : mockData.bankNifty),
      index,
      timestamp: new Date().toISOString(),
      marketStatus: isMarketOpen() ? 'open' : 'closed',
    }

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=10',
      },
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch index data' },
      { status: 500 }
    )
  }
}

function isMarketOpen(): boolean {
  const now = new Date()
  const day = now.getDay()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const time = hours * 60 + minutes

  // Monday to Friday, 9:15 AM to 3:30 PM IST
  if (day >= 1 && day <= 5) {
    const marketOpen = 9 * 60 + 15 // 9:15 AM
    const marketClose = 15 * 60 + 30 // 3:30 PM
    return time >= marketOpen && time <= marketClose
  }

  return false
}

// Example: Calculate Pivot Points for Support/Resistance
/*
function calculatePivotPoints(high: number, low: number, close: number) {
  const pivot = (high + low + close) / 3
  
  return {
    pivot,
    resistance1: 2 * pivot - low,
    resistance2: pivot + (high - low),
    resistance3: high + 2 * (pivot - low),
    support1: 2 * pivot - high,
    support2: pivot - (high - low),
    support3: low - 2 * (high - pivot),
  }
}
*/
