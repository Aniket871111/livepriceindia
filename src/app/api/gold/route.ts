import { NextResponse } from 'next/server'

// Mock data - Replace with actual API calls
const mockData = {
  gold: {
    pune: { '22k': 58250, '24k': 63450, change: 1.2 },
    mumbai: { '22k': 58400, '24k': 63600, change: 1.1 },
    delhi: { '22k': 58150, '24k': 63350, change: 1.3 },
  },
  silver: {
    pune: { price: 74800, change: -0.8 },
    mumbai: { price: 74950, change: -0.7 },
    delhi: { price: 74650, change: -0.9 },
  },
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get('city') || 'pune'

  // In production, implement:
  // 1. Check Redis cache
  // 2. If cache miss, call external API (Metals-API, GoldAPI, etc.)
  // 3. Store in Redis with TTL
  // 4. Log to PostgreSQL for historical data

  try {
    const data = {
      gold: mockData.gold[city as keyof typeof mockData.gold] || mockData.gold.pune,
      silver: mockData.silver[city as keyof typeof mockData.silver] || mockData.silver.pune,
      city,
      timestamp: new Date().toISOString(),
      source: 'Metals-API',
    }

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
      },
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch gold prices' },
      { status: 500 }
    )
  }
}

// Example implementation with actual API:
/*
import axios from 'axios'
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
})

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get('city') || 'pune'
  
  // Check cache
  const cacheKey = `gold:${city}`
  const cached = await redis.get(cacheKey)
  
  if (cached) {
    return NextResponse.json(cached)
  }
  
  // Fetch from API
  try {
    const response = await axios.get('https://metals-api.com/api/latest', {
      params: {
        access_key: process.env.METALS_API_KEY,
        base: 'XAU',
        symbols: 'INR',
      }
    })
    
    const data = {
      gold: {
        '24k': response.data.rates.INR * 10, // per 10 grams
        '22k': response.data.rates.INR * 10 * 0.916,
      },
      city,
      timestamp: new Date().toISOString(),
    }
    
    // Cache for 5 minutes
    await redis.set(cacheKey, data, { ex: 300 })
    
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'API Error' }, { status: 500 })
  }
}
*/
