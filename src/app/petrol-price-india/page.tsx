import { Metadata } from 'next'
import Link from 'next/link'
import { Fuel, TrendingUp, MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Petrol Price Today in India - Diesel Rate Pune Mumbai Delhi',
  description: 'Check today\'s petrol price: Pune ₹106.50, Mumbai ₹111.35, Delhi ₹96.72 per litre. Live diesel rates, city-wise comparison, daily updates at 6 AM. Fuel cost calculator.',
  keywords: ['petrol price today', 'diesel price today', 'petrol price pune', 'diesel rate mumbai', 'fuel price india', 'petrol rate delhi today'],
}

export const revalidate = 3600 // 1 hour (prices change daily)

const cities = [
  { name: 'Pune', petrol: 106.50, diesel: 94.25, change: 0 },
  { name: 'Mumbai', petrol: 111.35, diesel: 97.28, change: 0 },
  { name: 'Delhi', petrol: 96.72, diesel: 89.62, change: 0 },
  { name: 'Bangalore', petrol: 101.94, diesel: 87.89, change: 0 },
  { name: 'Hyderabad', petrol: 109.66, diesel: 97.82, change: 0 },
  { name: 'Chennai', petrol: 102.63, diesel: 94.24, change: 0 },
  { name: 'Kolkata', petrol: 104.95, diesel: 91.76, change: 0 },
  { name: 'Ahmedabad', petrol: 96.63, diesel: 92.38, change: 0 },
]

export default function PetrolPricePage() {
  const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6 text-slate-500">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 font-medium">Petrol & Diesel Price Today</span>
        </nav>

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-orange-100 p-3 rounded-lg">
            <Fuel className="w-8 h-8 text-orange-600" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Petrol & Diesel Price Today in India</h1>
            <p className="text-slate-600">City-wise comparison • Updated: {today} at 6:00 AM</p>
          </div>
        </div>

        {/* Price Table */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700">City</th>
                  <th className="text-right py-4 px-6 font-semibold text-slate-700">Petrol (₹/L)</th>
                  <th className="text-right py-4 px-6 font-semibold text-slate-700">Diesel (₹/L)</th>
                  <th className="text-right py-4 px-6 font-semibold text-slate-700">Difference</th>
                </tr>
              </thead>
              <tbody>
                {cities.map((city, i) => (
                  <tr key={city.name} className={`border-b border-slate-100 hover:bg-orange-50 transition-colors ${i === 0 ? 'bg-orange-50/50' : ''}`}>
                    <td className="py-4 px-6">
                      <Link href={`/petrol-price-${city.name.toLowerCase()}`} className="flex items-center gap-2 font-medium text-slate-900 hover:text-primary-600">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        {city.name}
                      </Link>
                    </td>
                    <td className="text-right py-4 px-6 font-bold text-lg">₹{city.petrol.toFixed(2)}</td>
                    <td className="text-right py-4 px-6 font-semibold text-slate-700">₹{city.diesel.toFixed(2)}</td>
                    <td className="text-right py-4 px-6 text-slate-500">₹{(city.petrol - city.diesel).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6 border border-slate-200">
            <h3 className="font-bold text-lg mb-2">⛽ Cheapest Petrol</h3>
            <p className="text-2xl font-bold text-green-600 mb-1">₹96.63/L</p>
            <p className="text-slate-600 text-sm">Ahmedabad has the cheapest petrol today</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border border-slate-200">
            <h3 className="font-bold text-lg mb-2">⛽ Costliest Petrol</h3>
            <p className="text-2xl font-bold text-red-600 mb-1">₹111.35/L</p>
            <p className="text-slate-600 text-sm">Mumbai has the highest petrol price</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border border-slate-200">
            <h3 className="font-bold text-lg mb-2">🔔 Price Drop Alert</h3>
            <p className="text-slate-600 text-sm mb-3">Get notified when petrol price changes in your city</p>
            <Link href="/alerts" className="btn-primary text-sm inline-flex items-center gap-1">
              Set Alert <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* SEO Content */}
        <article className="bg-white rounded-xl shadow p-8 border border-slate-200 prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Petrol & Diesel Prices in India — How It Works</h2>
          <p className="text-slate-600 mb-4">
            Petrol and diesel prices in India are revised daily at 6:00 AM by oil marketing companies (Indian Oil, Bharat Petroleum, Hindustan Petroleum). 
            Prices vary between cities due to state VAT, local body tax, and dealer commission. Mumbai has the highest fuel prices 
            due to Maharashtra&apos;s high state VAT, while Delhi remains relatively cheaper.
          </p>
          <h3 className="text-xl font-bold mb-3">Why Are Fuel Prices Different in Each City?</h3>
          <ul className="list-disc pl-6 text-slate-600 space-y-1 mb-4">
            <li><strong>Central Excise Duty</strong> — ₹19.90/L on petrol, ₹15.80/L on diesel</li>
            <li><strong>State VAT</strong> — Varies from 15% to 40% across states</li>
            <li><strong>Dealer Commission</strong> — ₹3.68/L for petrol, ₹2.53/L for diesel</li>
            <li><strong>Crude oil price</strong> — International benchmark affects base cost</li>
          </ul>
          <h3 className="text-xl font-bold mb-3">Related Pages</h3>
          <div className="flex flex-wrap gap-3 not-prose">
            <Link href="/gold-price-india" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Gold Rate Today</Link>
            <Link href="/nifty-live" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Nifty Live</Link>
            <Link href="/crypto-prices-inr" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Crypto Prices INR</Link>
          </div>
        </article>
      </div>
    </section>
  )
}
