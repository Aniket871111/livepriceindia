'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface TickerItem {
  label: string
  value: string
  change: number
  city?: string
}

export default function LiveTicker() {
  const [tickerData, setTickerData] = useState<TickerItem[]>([
    { label: 'Gold 24K', value: '₹63,450', change: 1.2, city: 'Pune' },
    { label: 'Silver', value: '₹74,800', change: -0.8, city: 'Mumbai' },
    { label: 'Petrol', value: '₹106.50', change: 0, city: 'Pune' },
    { label: 'Diesel', value: '₹94.25', change: 0, city: 'Delhi' },
    { label: 'Nifty 50', value: '22,145.50', change: 0.45 },
    { label: 'Bank Nifty', value: '47,890.25', change: -0.23 },
    { label: 'Bitcoin', value: '₹42,50,000', change: 2.1 },
    { label: 'Ethereum', value: '₹2,85,000', change: 1.8 },
  ])

  return (
    <div className="bg-gradient-to-r from-slate-900 via-primary-900 to-slate-900 text-white py-3 overflow-hidden border-b border-slate-800">
      <div className="relative flex">
        {/* First set of items */}
        <div className="flex animate-ticker">
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
            isPositive ? 'text-success-400' : 'text-danger-400'
          }`}
        >
          {isPositive ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          {Math.abs(item.change)}%
        </span>
      )}
    </div>
  )
}
