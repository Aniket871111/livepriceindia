import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Coins, TrendingUp, TrendingDown, ArrowRight, MapPin } from 'lucide-react'
import { fetchGoldPrices, GoldPriceData } from '@/lib/fetchPrices'

const SITE_URL = process.env.SITE_URL || 'https://livepriceindia.vercel.app'

export const metadata: Metadata = {
  title: 'Gold Rate Today in India - Live 22K & 24K Prices Pune Mumbai Delhi',
  description: 'Check today\'s live gold rate in India. 24K & 22K gold price per 10g across Pune, Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Kolkata, Ahmedabad. Updated every 5 minutes.',
  keywords: ['gold rate today', 'gold price pune', 'gold rate mumbai', 'gold price delhi', '22 carat gold price', '24 carat gold rate', 'silver rate today india', 'gold rate today pune per gram'],
  alternates: {
    canonical: `${SITE_URL}/gold-price-india`,
  },
}

export const revalidate = 300 // 5 minutes ISR

export default async function GoldPricePage() {
  const allPrices = await fetchGoldPrices()
  const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

  const cityOrder = ['pune', 'mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 'ahmedabad']
  const cityNames: Record<string, string> = {
    pune: 'Pune', mumbai: 'Mumbai', delhi: 'Delhi', bangalore: 'Bangalore',
    hyderabad: 'Hyderabad', chennai: 'Chennai', kolkata: 'Kolkata', ahmedabad: 'Ahmedabad',
  }

  const cities = cityOrder.map((key) => ({
    key,
    name: cityNames[key],
    ...allPrices[key],
  }))

  const prices24k = cities.map(c => c.gold24k)
  const minPrice = Math.min(...prices24k)
  const maxPrice = Math.max(...prices24k)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Gold Rate Today India', item: `${SITE_URL}/gold-price-india` },
    ],
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Gold Rate Today in India',
    description: `Live 24K gold price ranges from ₹${minPrice.toLocaleString('en-IN')} to ₹${maxPrice.toLocaleString('en-IN')} per 10g across 8 Indian cities.`,
    url: `${SITE_URL}/gold-price-india`,
    dateModified: new Date().toISOString(),
    publisher: {
      '@type': 'Organization',
      name: 'LivePriceIndia',
      url: SITE_URL,
    },
  }

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <section className="py-8 md:py-12 bg-gradient-to-br from-yellow-50 via-white to-amber-50">
        <div className="container">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm mb-6 text-slate-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-900 font-medium">Gold Rate Today India</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Coins className="w-8 h-8 text-yellow-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Gold Rate Today in India</h1>
              <p className="text-slate-700">Live 22K & 24K prices across 8 cities • Updated: <time dateTime={new Date().toISOString().split('T')[0]}>{today}</time></p>
            </div>
          </div>

          {/* City-wise Price Table */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <caption className="sr-only">Gold and silver prices across Indian cities today</caption>
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">City</th>
                    <th className="text-right py-4 px-6 font-semibold text-slate-700">24K / 10g</th>
                    <th className="text-right py-4 px-6 font-semibold text-slate-700">22K / 10g</th>
                    <th className="text-right py-4 px-6 font-semibold text-slate-700">Silver / kg</th>
                    <th className="text-right py-4 px-6 font-semibold text-slate-700">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {cities.map((city, i) => (
                    <tr key={city.key} className={`border-b border-slate-100 hover:bg-yellow-50 transition-colors ${i === 0 ? 'bg-yellow-50/50' : ''}`}>
                      <td className="py-4 px-6">
                        <Link href={`/gold-price-${city.key}`} className="flex items-center gap-2 font-medium text-slate-900 hover:text-primary-600">
                          <MapPin className="w-4 h-4 text-slate-400" />
                          {city.name}
                        </Link>
                      </td>
                      <td className="text-right py-4 px-6 font-bold text-lg text-red-600">₹{city.gold24k.toLocaleString('en-IN')}</td>
                      <td className="text-right py-4 px-6 font-semibold text-slate-900">₹{city.gold22k.toLocaleString('en-IN')}</td>
                      <td className="text-right py-4 px-6 font-medium text-slate-800">₹{city.silver.toLocaleString('en-IN')}</td>
                      <td className="text-right py-4 px-6">
                        <span className={`inline-flex items-center gap-1 text-sm font-medium ${city.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {city.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          {city.change >= 0 ? '+' : ''}{city.change}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow p-6 border border-slate-200">
              <h3 className="font-bold text-lg mb-2">💰 Today&apos;s Gold Highlights</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• 24K Gold: ₹{minPrice.toLocaleString('en-IN')} – ₹{maxPrice.toLocaleString('en-IN')} per 10g</li>
                <li>• 22K Gold: ₹{Math.min(...cities.map(c => c.gold22k)).toLocaleString('en-IN')} – ₹{Math.max(...cities.map(c => c.gold22k)).toLocaleString('en-IN')} per 10g</li>
                <li>• Highest in: {cities.reduce((a, b) => a.gold24k > b.gold24k ? a : b).name} (₹{maxPrice.toLocaleString('en-IN')})</li>
                <li>• Lowest in: {cities.reduce((a, b) => a.gold24k < b.gold24k ? a : b).name} (₹{minPrice.toLocaleString('en-IN')})</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6 border border-slate-200">
              <h3 className="font-bold text-lg mb-2">📊 Silver Rate Today</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Silver: ₹{Math.min(...cities.map(c => c.silver)).toLocaleString('en-IN')} – ₹{Math.max(...cities.map(c => c.silver)).toLocaleString('en-IN')} per kg</li>
                <li>• Gold-Silver ratio: {(cities[0].gold24k / (cities[0].silver / 100)).toFixed(1)}</li>
                <li>• Prices update every 5 minutes from live market data</li>
                <li>• Source: CoinGecko & Yahoo Finance</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6 border border-slate-200">
              <h3 className="font-bold text-lg mb-2">🔔 Get Free Alerts</h3>
              <p className="text-slate-700 text-sm mb-4">Get notified when gold price drops below your target</p>
              <Link href="/contact" className="btn-primary text-sm inline-flex items-center gap-1">
                Contact for Alerts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* SEO Content */}
          <article className="bg-white rounded-xl shadow p-8 border border-slate-200 prose max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Gold Price Today in India — Complete Guide</h2>
            <p className="text-slate-700 mb-4">
              Gold prices in India are influenced by international gold rates, USD/INR exchange rate, import duty (currently 15%), and GST (3%). 
              Prices vary slightly between cities due to local taxes and transportation costs.
              Our prices are fetched from live market data and updated every 5 minutes.
            </p>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Factors Affecting Gold Price Today</h3>
            <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-4">
              <li><strong>International gold price</strong> — Set by LBMA (London Bullion Market Association)</li>
              <li><strong>USD to INR exchange rate</strong> — Weaker rupee means higher gold prices</li>
              <li><strong>Import duty</strong> — Currently 15% in India (highest globally)</li>
              <li><strong>GST</strong> — 3% on gold jewelry, 5% on making charges</li>
              <li><strong>Demand & supply</strong> — Wedding season (Oct-Feb) increases prices</li>
            </ul>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Should You Buy Gold Today?</h3>
            <p className="text-slate-700 mb-4">
              Gold is considered a safe-haven investment in India. If the price trend is upward, it may be a good idea to buy early.
              For long-term investment, gold has delivered 10-12% annual returns in India over the past decade.
              Consider digital gold (Google Pay, PhonePe) for small investments starting from ₹1.
            </p>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Related Pages</h3>
            <div className="flex flex-wrap gap-3 not-prose">
              <Link href="/gold-price-pune" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Gold Rate Pune</Link>
              <Link href="/gold-price-mumbai" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Gold Rate Mumbai</Link>
              <Link href="/gold-price-delhi" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Gold Rate Delhi</Link>
              <Link href="/petrol-price-india" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Petrol Price Today</Link>
              <Link href="/crypto-prices-inr" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Crypto Prices INR</Link>
              <Link href="/cricket-live" className="text-green-600 hover:underline text-sm bg-green-50 px-3 py-1 rounded-full">🏏 Live Cricket</Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
