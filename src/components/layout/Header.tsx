'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { TrendingUp, Menu, X, Bell, Search } from 'lucide-react'

const allPages = [
  { href: '/gold-price-india', label: 'Gold Rate Today India', desc: 'Live 22K & 24K gold prices across 8 cities' },
  { href: '/petrol-price-india', label: 'Petrol & Diesel Price', desc: "Today's petrol, diesel & CNG rates by city" },
  { href: '/nifty-live', label: 'Nifty 50 Live', desc: 'Nifty & Bank Nifty with support/resistance levels' },
  { href: '/stock-market-strategy', label: 'Stock Market Strategy', desc: 'Intraday & swing trading strategies guide' },
  { href: '/crypto-prices-inr', label: 'Cryptocurrency Prices INR', desc: 'Bitcoin, Ethereum & top 15 coins in INR' },
  { href: '/cricket-live', label: 'Live Cricket Score', desc: "Today's live cricket matches & scores" },
  { href: '/flight-prices', label: 'Cheap Flights from Pune', desc: 'Best flight deals & price tracker from Pune' },
  { href: '/gold-price-pune', label: 'Gold Rate Pune', desc: 'Live gold price in Pune today' },
  { href: '/gold-price-mumbai', label: 'Gold Rate Mumbai', desc: 'Live gold price in Mumbai today' },
  { href: '/gold-price-delhi', label: 'Gold Rate Delhi', desc: 'Live gold price in Delhi today' },
  { href: '/gold-price-bangalore', label: 'Gold Rate Bangalore', desc: 'Live gold price in Bangalore today' },
  { href: '/gold-price-chennai', label: 'Gold Rate Chennai', desc: 'Live gold price in Chennai today' },
  { href: '/gold-price-hyderabad', label: 'Gold Rate Hyderabad', desc: 'Live gold price in Hyderabad today' },
  { href: '/petrol-price-pune', label: 'Petrol Price Pune', desc: "Today's petrol & diesel price in Pune" },
  { href: '/petrol-price-mumbai', label: 'Petrol Price Mumbai', desc: "Today's petrol & diesel price in Mumbai" },
  { href: '/petrol-price-delhi', label: 'Petrol Price Delhi', desc: "Today's petrol & diesel price in Delhi" },
  { href: '/about', label: 'About Us', desc: 'About LivePriceIndia' },
  { href: '/contact', label: 'Contact Us', desc: 'Get in touch with us' },
]

const notifications = [
  { id: 1, icon: '🥇', title: 'Gold price updated', desc: 'Latest 24K & 22K gold rate fetched from live market', time: 'Just now' },
  { id: 2, icon: '📊', title: 'Nifty 50 data live', desc: 'Nifty & Bank Nifty support/resistance levels updated', time: '1 min ago' },
  { id: 3, icon: '🪙', title: 'Crypto prices refreshed', desc: 'Bitcoin, ETH & top 15 coins updated via CoinGecko', time: '2 min ago' },
  { id: 4, icon: '⛽', title: 'Petrol prices stable', desc: 'No change in petrol/diesel rates across cities today', time: '6h ago' },
  { id: 5, icon: '🏏', title: 'Cricket matches today', desc: 'Live scores & upcoming matches available', time: 'Today' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isNotifOpen, setIsNotifOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const notifRef = useRef<HTMLDivElement>(null)

  // Close notification dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setIsNotifOpen(false)
      }
    }
    if (isNotifOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isNotifOpen])

  // Close overlays on Escape key
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
        setIsNotifOpen(false)
        setSearchQuery('')
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [])

  const filteredPages = allPages.filter(
    (p) =>
      searchQuery === '' ||
      p.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const navLinks = [
    { href: '/gold-price-india', label: 'Gold & Silver' },
    { href: '/petrol-price-india', label: 'Petrol & Diesel' },
    { href: '/nifty-live', label: 'Nifty' },
    { href: '/stock-market-strategy', label: 'Strategy' },
    { href: '/crypto-prices-inr', label: 'Crypto' },
    { href: '/cricket-live', label: '🏏 Cricket' },
    { href: '/about', label: 'About' },
  ]

  return (
    <>
      <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                  LivePrice
                </span>
                <span className="text-xl font-bold text-gold-600">India</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Search Button */}
              <button
                onClick={() => { setIsSearchOpen(true); setIsNotifOpen(false) }}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Search pages"
              >
                <Search className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </button>

              {/* Notification Button */}
              <div className="relative" ref={notifRef}>
                <button
                  onClick={() => { setIsNotifOpen(!isNotifOpen); setIsSearchOpen(false) }}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors relative"
                  aria-label="Notifications"
                >
                  <Bell className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Notification Dropdown */}
                {isNotifOpen && (
                  <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                      <h3 className="font-semibold text-slate-900">Notifications</h3>
                      <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full font-medium">5 new</span>
                    </div>
                    <div className="max-h-72 overflow-y-auto divide-y divide-slate-100">
                      {notifications.map((n) => (
                        <div key={n.id} className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors">
                          <span className="text-xl mt-0.5">{n.icon}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-slate-900">{n.title}</p>
                            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{n.desc}</p>
                          </div>
                          <span className="text-xs text-slate-400 whitespace-nowrap mt-0.5">{n.time}</span>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-3 border-t border-slate-100 bg-slate-50">
                      <p className="text-xs text-slate-500 text-center">🔔 Price alert push notifications coming soon</p>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="hidden md:inline-flex btn-primary text-sm"
              >
                Contact Us
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-slate-700" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-800 pt-4 animate-fade-in">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 px-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary text-center mt-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Search Modal Overlay */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-16 px-4"
          onClick={() => { setIsSearchOpen(false); setSearchQuery('') }}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-100">
              <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
              <input
                autoFocus
                type="text"
                placeholder="Search prices, cities, strategies..."
                className="flex-1 outline-none text-slate-900 text-base placeholder:text-slate-400 bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={() => { setIsSearchOpen(false); setSearchQuery('') }}
                className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto divide-y divide-slate-50">
              {filteredPages.length === 0 ? (
                <div className="px-4 py-8 text-center text-slate-500 text-sm">
                  No results found for &quot;{searchQuery}&quot;
                </div>
              ) : (
                filteredPages.slice(0, 10).map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    onClick={() => { setIsSearchOpen(false); setSearchQuery('') }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="w-4 h-4 text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">{page.label}</p>
                      <p className="text-xs text-slate-500 truncate">{page.desc}</p>
                    </div>
                    <span className="text-slate-400 group-hover:text-primary-600 transition-colors text-sm">→</span>
                  </Link>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
              <p className="text-xs text-slate-400">
                Press <kbd className="bg-white border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-xs font-mono">Esc</kbd> to close
              </p>
              <p className="text-xs text-slate-400">{filteredPages.length} pages</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
