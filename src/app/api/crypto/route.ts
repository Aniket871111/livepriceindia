import { NextResponse } from 'next/server'

// Mock data - Replace with CoinGecko/WazirX API
const mockData = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', price: 4250000, change24h: 2.1 },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', price: 285000, change24h: 1.8 },
  { id: 'tether', symbol: 'USDT', name: 'Tether', price: 83.50, change24h: 0.1 },
  { id: 'binancecoin', symbol: 'BNB', name: 'BNB', price: 42800, change24h: -0.5 },
  { id: 'ripple', symbol: 'XRP', name: 'XRP', price: 52.30, change24h: 3.2 },
  { id: 'cardano', symbol: 'ADA', name: 'Cardano', price: 45.80, change24h: 1.5 },
  { id: 'solana', symbol: 'SOL', name: 'Solana', price: 12500, change24h: 4.7 },
  { id: 'dogecoin', symbol: 'DOGE', name: 'Dogecoin', price: 9.25, change24h: -1.2 },
  { id: 'polkadot', symbol: 'DOT', name: 'Polkadot', price: 820, change24h: 2.3 },
  { id: 'matic', symbol: 'MATIC', name: 'Polygon', price: 95.40, change24h: 1.9 },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const coin = searchParams.get('coin')
  const limit = parseInt(searchParams.get('limit') || '10')

  // In production:
  // 1. Use CoinGecko API: /simple/price?vs_currency=inr
  // 2. Or WazirX API for accurate INR prices
  // 3. Update every 30 seconds
  // 4. Cache in Redis

  try {
    if (coin) {
      const coinData = mockData.find((c) => c.id === coin || c.symbol === coin.toUpperCase())
      if (!coinData) {
        return NextResponse.json({ error: 'Coin not found' }, { status: 404 })
      }
      return NextResponse.json({
        ...coinData,
        timestamp: new Date().toISOString(),
      })
    }

    const data = {
      coins: mockData.slice(0, limit),
      timestamp: new Date().toISOString(),
      source: 'CoinGecko',
    }

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=15',
      },
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch crypto prices' },
      { status: 500 }
    )
  }
}

// Example with CoinGecko API:
/*
import axios from 'axios'

export async function GET() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: 'bitcoin,ethereum,tether,binancecoin,ripple,cardano,solana,dogecoin,polkadot,matic-network',
        vs_currencies: 'inr',
        include_24hr_change: true,
      },
      headers: {
        'x-cg-demo-api-key': process.env.COINGECKO_API_KEY,
      },
    })

    const coins = Object.entries(response.data).map(([id, data]: [string, any]) => ({
      id,
      price: data.inr,
      change24h: data.inr_24h_change,
      timestamp: new Date().toISOString(),
    }))

    return NextResponse.json({ coins })
  } catch (error) {
    return NextResponse.json({ error: 'API Error' }, { status: 500 })
  }
}
*/
