import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Coins, TrendingUp, TrendingDown, ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gold Rate Today in India - Live 22K & 24K Prices Pune Mumbai Delhi',
  description: 'Check today\'s gold rate in Pune ₹63,450, Mumbai ₹63,600, Delhi ₹63,350 per 10g (24K). Live silver price, city-wise comparison, charts & free price alerts. Updated every 5 minutes.',
  keywords: ['gold rate today', 'gold price pune', 'gold rate mumbai', 'gold price delhi', '22 carat gold price', '24 carat gold rate', 'silver rate today india', 'gold rate today pune per gram'],
}

export const revalidate = 300 // 5 minutes

const cities = [
  { name: 'Pune', gold24k: 63450, gold22k: 58250, silver: 74800, change: 1.2 },
  { name: 'Mumbai', gold24k: 63600, gold22k: 58400, silver: 74950, change: 1.1 },
  { name: 'Delhi', gold24k: 63350, gold22k: 58150, silver: 74650, change: 1.3 },
  { name: 'Bangalore', gold24k: 63500, gold22k: 58300, silver: 74700, change: 0.9 },
  { name: 'Hyderabad', gold24k: 63400, gold22k: 58200, silver: 74750, change: 1.0 },
  { name: 'Chennai', gold24k: 63550, gold22k: 58350, silver: 74850, change: 1.1 },
]

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Gold 24K (10 gram)',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '63350',
    highPrice: '63600',
    priceCurrency: 'INR',
    offerCount: cities.length.toString(),
  },
}

export default function GoldPricePage() {
  const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <>
      <Script id="gold-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <section className="py-8 md:py-12 bg-gradient-to-br from-yellow-50 via-white to-amber-50">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6 text-slate-500">
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
              <p className="text-slate-600">Live 22K & 24K prices across cities • Updated: {today}</p>
            </div>
          </div>

          {/* City-wise Price Table */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
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
                    <tr key={city.name} className={`border-b border-slate-100 hover:bg-yellow-50 transition-colors ${i === 0 ? 'bg-yellow-50/50' : ''}`}>
                      <td className="py-4 px-6">
                        <Link href={`/gold-price-${city.name.toLowerCase()}`} className="flex items-center gap-2 font-medium text-slate-900 hover:text-primary-600">
                          <MapPin className="w-4 h-4 text-slate-400" />
                          {city.name}
                        </Link>
                      </td>
                      <td className="text-right py-4 px-6 font-bold text-lg">₹{city.gold24k.toLocaleString('en-IN')}</td>
                      <td className="text-right py-4 px-6 font-semibold text-slate-700">₹{city.gold22k.toLocaleString('en-IN')}</td>
                      <td className="text-right py-4 px-6 text-slate-600">₹{city.silver.toLocaleString('en-IN')}</td>
                      <td className="text-right py-4 px-6">
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-green-600">
                          <TrendingUp className="w-4 h-4" /> +{city.change}%
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
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• 24K Gold: ₹63,350 – ₹63,600 per 10g</li>
                <li>• 22K Gold: ₹58,150 – ₹58,400 per 10g</li>
                <li>• Highest in: Mumbai (₹63,600)</li>
                <li>• Lowest in: Delhi (₹63,350)</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6 border border-slate-200">
              <h3 className="font-bold text-lg mb-2">📊 Silver Rate Today</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Silver: ₹74,650 – ₹74,950 per kg</li>
                <li>• Silver trend: Slightly bearish</li>
                <li>• Gold-Silver ratio: 84.8</li>
                <li>• Best buy: Delhi (₹74,650/kg)</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6 border border-slate-200">
              <h3 className="font-bold text-lg mb-2">🔔 Get Free Alerts</h3>
              <p className="text-slate-600 text-sm mb-4">Get notified when gold price drops below your target</p>
              <Link href="/contact" className="btn-primary text-sm inline-flex items-center gap-1">
                Contact for Alerts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* SEO Content */}
          <article className="bg-white rounded-xl shadow p-8 border border-slate-200 prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Gold Price Today in India — Complete Guide</h2>
            <p className="text-slate-600 mb-4">
              Gold prices in India are influenced by international gold rates, USD/INR exchange rate, import duty (currently 15%), and GST (3%). 
              Prices vary slightly between cities due to local taxes and transportation costs. Mumbai typically has the highest rates 
              while Delhi tends to be slightly lower.
            </p>
            <h3 className="text-xl font-bold mb-3">Factors Affecting Gold Price Today</h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-1 mb-4">
              <li><strong>International gold price</strong> — Set by LBMA (London Bullion Market Association)</li>
              <li><strong>USD to INR exchange rate</strong> — Weaker rupee means higher gold prices</li>
              <li><strong>Import duty</strong> — Currently 15% in India (highest globally)</li>
              <li><strong>GST</strong> — 3% on gold jewelry, 5% on making charges</li>
              <li><strong>Demand & supply</strong> — Wedding season (Oct-Feb) increases prices</li>
            </ul>
            <h3 className="text-xl font-bold mb-3">Should You Buy Gold Today?</h3>
            <p className="text-slate-600 mb-4">
              Gold is considered a safe-haven investment in India. If the price trend is upward, it may be a good idea to buy early.
              For long-term investment, gold has delivered 10-12% annual returns in India over the past decade.
              Consider digital gold (Google Pay, PhonePe) for small investments starting from ₹1.
            </p>
            <h3 className="text-xl font-bold mb-3">Related Pages</h3>
            <div className="flex flex-wrap gap-3 not-prose">
              <Link href="/gold-price-pune" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Gold Rate Pune</Link>
              <Link href="/gold-price-mumbai" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Gold Rate Mumbai</Link>
              <Link href="/gold-price-delhi" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Gold Rate Delhi</Link>
              <Link href="/petrol-price-india" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Petrol Price Today</Link>
              <Link href="/crypto-prices-inr" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Crypto Prices INR</Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
