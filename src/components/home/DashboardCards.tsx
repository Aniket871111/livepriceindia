'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { 
  Coins, Fuel, TrendingUp, Bitcoin, Plane, ArrowRight, TrendingDown, RefreshCw 
} from 'lucide-react'

interface DashboardCard {
  title: string
  icon: React.ElementType
  href: string
  value: string
  change: number
  subtitle: string
  color: string
  bgColor: string
}

const formatINR = (n: number): string => {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`
  return `₹${n.toLocaleString('en-IN')}`
}

export default function DashboardCards() {
  const [cards, setCards] = useState<DashboardCard[]>(defaultCards)
  const [lastUpdated, setLastUpdated] = useState<string>('Loading...')
  const [isRefreshing, setIsRefreshing] = useState(false)

  const fetchLivePrices = useCallback(async () => {
    setIsRefreshing(true)
    try {
      const [goldRes, niftyRes, cryptoRes] = await Promise.allSettled([
        fetch('/api/gold?city=pune'),
        fetch('/api/nifty'),
        fetch('/api/crypto?limit=5'),
      ])

      const updatedCards = [...defaultCards]

      // Gold
      if (goldRes.status === 'fulfilled' && goldRes.value.ok) {
        const gold = await goldRes.value.json()
        if (gold.gold?.['24k']) {
          updatedCards[0] = {
            ...updatedCards[0],
            value: `₹${gold.gold['24k'].toLocaleString('en-IN')}`,
            change: gold.gold.change || 0,
            subtitle: '24K Gold / 10g (Live)',
          }
        }
      }

      // Nifty
      if (niftyRes.status === 'fulfilled' && niftyRes.value.ok) {
        const nifty = await niftyRes.value.json()
        if (nifty.price) {
          updatedCards[2] = {
            ...updatedCards[2],
            value: nifty.price.toLocaleString('en-IN'),
            change: nifty.change || 0,
            subtitle: `Nifty 50 ${nifty.marketStatus === 'open' ? '🟢 Live' : '🔴 Closed'}`,
          }
        }
      }

      // Crypto
      if (cryptoRes.status === 'fulfilled' && cryptoRes.value.ok) {
        const crypto = await cryptoRes.value.json()
        const btc = crypto.coins?.find((c: { symbol: string }) => c.symbol === 'BTC')
        if (btc?.price) {
          updatedCards[3] = {
            ...updatedCards[3],
            value: formatINR(btc.price),
            change: btc.change24h || 0,
            subtitle: 'Bitcoin in INR (Live)',
          }
        }
      }

      setCards(updatedCards)
      const now = new Date()
      setLastUpdated(`Updated ${now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}`)
    } catch {
      setLastUpdated('Update failed — retrying...')
    } finally {
      setIsRefreshing(false)
    }
  }, [])

  useEffect(() => {
    fetchLivePrices()
    const interval = setInterval(fetchLivePrices, 60000) // Refresh every 60s
    return () => clearInterval(interval)
  }, [fetchLivePrices])

  return (
    <section id="dashboard" className="py-16 bg-white dark:bg-slate-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Live Price Dashboard
          </h2>
          <div className="flex items-center justify-center gap-2">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Real-time prices • Auto-refreshing
            </p>
            <button
              onClick={fetchLivePrices}
              disabled={isRefreshing}
              className="p-1 rounded-full hover:bg-slate-100 transition-colors"
              title="Refresh prices"
            >
              <RefreshCw className={`w-4 h-4 text-slate-500 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="price-card group cursor-pointer"
            >
              {/* Icon & Title */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`${card.bgColor} p-3 rounded-lg`}>
                    <card.icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{card.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
              </div>

              {/* Price & Change */}
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-3xl font-bold mb-1">{card.value}</div>
                  {card.change !== 0 && (
                    <div
                      className={`flex items-center gap-1 text-sm font-medium ${
                        card.change > 0 ? 'price-up' : 'price-down'
                      }`}
                    >
                      {card.change > 0 ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      {card.change > 0 ? '+' : ''}
                      {card.change}%
                    </div>
                  )}
                </div>
                
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {lastUpdated}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">
                    Free daily alerts
                  </span>
                  <span className="text-primary-600 hover:text-primary-700 font-medium">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* Free Newsletter Card */}
          <div className="price-card bg-gradient-to-br from-green-600 to-emerald-700 text-white border-none relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4">
                <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  100% Free
                </div>
                <h3 className="font-semibold text-2xl mb-2">
                  Daily Price Updates
                </h3>
                <p className="text-white text-sm">
                  Get gold, petrol, crypto prices in your email every morning
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold mb-1">Subscribe Free</div>
                  <div className="text-sm text-white">No credit card needed</div>
                </div>
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const defaultCards: DashboardCard[] = [
  {
    title: 'Gold & Silver',
    icon: Coins,
    href: '/gold-price-india',
    value: '₹74,500',
    change: 0.8,
    subtitle: '24K Gold / 10g',
    color: 'text-gold-600',
    bgColor: 'bg-gold-50 dark:bg-gold-900/10',
  },
  {
    title: 'Petrol & Diesel',
    icon: Fuel,
    href: '/petrol-price-india',
    value: '₹106.31',
    change: 0,
    subtitle: 'Petrol / Litre (Pune)',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/10',
  },
  {
    title: 'Nifty & Bank Nifty',
    icon: TrendingUp,
    href: '/nifty-live',
    value: '23,800',
    change: 0.42,
    subtitle: 'Nifty 50',
    color: 'text-primary-600',
    bgColor: 'bg-primary-50 dark:bg-primary-900/10',
  },
  {
    title: 'Crypto Prices',
    icon: Bitcoin,
    href: '/crypto-prices-inr',
    value: '₹78.5 L',
    change: 1.2,
    subtitle: 'Bitcoin in INR',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/10',
  },
  {
    title: 'Flight Tracker',
    icon: Plane,
    href: '/flight-prices',
    value: '₹3,450',
    change: -8.5,
    subtitle: 'Pune → Goa',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/10',
  },
]
