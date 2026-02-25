'use client'

import { useEffect, useState, useCallback } from 'react'
import { TrendingUp, TrendingDown, Wifi } from 'lucide-react'

interface TickerItem {
  label: string
  value: string
  change: number
  city?: string
}

export default function LiveTicker() {
  const [tickerData, setTickerData] = useState<TickerItem[]>([
    { label: 'Gold 24K', value: '...', change: 0, city: 'Pune' },
    { label: 'Silver', value: '...', change: 0 },
    { label: 'Petrol', value: '...', change: 0, city: 'Pune' },
    { label: 'Nifty 50', value: '...', change: 0 },
    { label: 'Bank Nifty', value: '...', change: 0 },
    { label: 'Bitcoin', value: '...', change: 0 },
    { label: 'Ethereum', value: '...', change: 0 },
  ])
  const [isLive, setIsLive] = useState(false)

  const fetchAllPrices = useCallback(async () => {
    try {
      const [goldRes, niftyRes, cryptoRes] = await Promise.allSettled([
        fetch('/api/gold?city=pune'),
        fetch('/api/nifty'),
        fetch('/api/crypto?limit=5'),
      ])

      const items: TickerItem[] = []

      // Gold & Silver
      if (goldRes.status === 'fulfilled' && goldRes.value.ok) {
        const gold = await goldRes.value.json()
        items.push(
          { label: 'Gold 24K', value: `₹${gold.gold?.['24k']?.toLocaleString('en-IN') || '—'}`, change: gold.gold?.change || 0, city: 'Pune' },
          { label: 'Silver', value: `₹${gold.silver?.price?.toLocaleString('en-IN') || '—'}`, change: gold.silver?.change || 0 }
        )
      }

      // Petrol (static but from API)
      items.push({ label: 'Petrol', value: '₹106.31', change: 0, city: 'Pune' })

      // Nifty
      if (niftyRes.status === 'fulfilled' && niftyRes.value.ok) {
        const nifty = await niftyRes.value.json()
        items.push({ label: 'Nifty 50', value: nifty.price?.toLocaleString('en-IN') || '—', change: nifty.change || 0 })

        // Fetch Bank Nifty too
        try {
          const bnRes = await fetch('/api/nifty?index=banknifty')
          if (bnRes.ok) {
            const bn = await bnRes.json()
            items.push({ label: 'Bank Nifty', value: bn.price?.toLocaleString('en-IN') || '—', change: bn.change || 0 })
          }
        } catch { /* skip */ }
      }

      // Crypto
      if (cryptoRes.status === 'fulfilled' && cryptoRes.value.ok) {
        const crypto = await cryptoRes.value.json()
        const coins = crypto.coins || []
        const btc = coins.find((c: { symbol: string }) => c.symbol === 'BTC')
        const eth = coins.find((c: { symbol: string }) => c.symbol === 'ETH')
        const sol = coins.find((c: { symbol: string }) => c.symbol === 'SOL')
        if (btc) items.push({ label: 'Bitcoin', value: `₹${btc.price?.toLocaleString('en-IN')}`, change: btc.change24h || 0 })
        if (eth) items.push({ label: 'Ethereum', value: `₹${eth.price?.toLocaleString('en-IN')}`, change: eth.change24h || 0 })
        if (sol) items.push({ label: 'Solana', value: `₹${sol.price?.toLocaleString('en-IN')}`, change: sol.change24h || 0 })
      }

      if (items.length > 0) {
        setTickerData(items)
        setIsLive(true)
      }
    } catch {
      // Keep existing data
    }
  }, [])

  useEffect(() => {
    fetchAllPrices()
    const interval = setInterval(fetchAllPrices, 30000) // Refresh every 30s
    return () => clearInterval(interval)
  }, [fetchAllPrices])

  return (
    <div className="bg-gradient-to-r from-slate-900 via-primary-900 to-slate-900 text-white py-3 overflow-hidden border-b border-slate-800">
      <div className="relative flex">
        {/* Live indicator */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 flex items-center pl-2">
          <span className={`flex items-center gap-1 text-xs font-medium ${isLive ? 'text-green-400' : 'text-yellow-400'}`}>
            <Wifi className="w-3 h-3" />
            {isLive ? 'LIVE' : '...'}
          </span>
        </div>

        {/* First set of items */}
        <div className="flex animate-ticker pl-20">
          {tickerData.map((item, index) => (
            <TickerItemComponent key={`first-${index}`} item={item} />
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex animate-ticker" aria-hidden="true">
          {tickerData.map((item, index) => (
            <TickerItemComponent key={`second-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TickerItemComponent({ item }: { item: TickerItem }) {
  const isPositive = item.change > 0
  const isNegative = item.change < 0

  return (
    <div className="ticker-item mx-2">
      <span className="font-medium text-slate-300">
        {item.label}
        {item.city && (
          <span className="text-xs ml-1 text-slate-500">({item.city})</span>
        )}
        :
      </span>
      <span className="font-bold">{item.value}</span>
      {item.change !== 0 && (
        <span
          className={`flex items-center gap-1 text-sm ${
            isPositive ? 'text-success-400' : isNegative ? 'text-danger-400' : 'text-slate-400'
          }`}
        >
          {isPositive ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          {isPositive ? '+' : ''}{item.change}%
        </span>
      )}
    </div>
  )
}
