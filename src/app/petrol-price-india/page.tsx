import { Metadata } from 'next'
import Link from 'next/link'
import { Fuel, MapPin, ArrowRight } from 'lucide-react'
import { fetchFuelPrices } from '@/lib/fetchPrices'

export const metadata: Metadata = {
  title: 'Petrol Price Today in India - Diesel Rate Pune Mumbai Delhi',
  description: 'Check today\'s petrol & diesel price in all Indian cities. Live fuel rates updated daily at 6 AM. City-wise comparison & fuel cost calculator.',
  keywords: ['petrol price today', 'diesel price today', 'petrol price pune', 'diesel rate mumbai', 'fuel price india', 'petrol rate delhi today'],
}

export const revalidate = 3600

const cityNames: Record<string, string> = {
  pune: 'Pune', mumbai: 'Mumbai', delhi: 'Delhi', bangalore: 'Bangalore',
  hyderabad: 'Hyderabad', chennai: 'Chennai', kolkata: 'Kolkata', ahmedabad: 'Ahmedabad',
}

export default async function PetrolPricePage() {
  const allPrices = await fetchFuelPrices()
  const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

  const cities = Object.entries(allPrices).map(([key, data]) => ({
    key,
    name: cityNames[key] || key,
    petrol: data.petrol,
    diesel: data.diesel,
    change: data.change,
  }))

  const cheapest = cities.reduce((a, b) => a.petrol < b.petrol ? a : b)
  const costliest = cities.reduce((a, b) => a.petrol > b.petrol ? a : b)

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="container">
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
                  <tr key={city.key} className={`border-b border-slate-100 hover:bg-orange-50 transition-colors ${i === 0 ? 'bg-orange-50/50' : ''}`}>
                    <td className="py-4 px-6">
                      <Link href={`/petrol-price-${city.key}`} className="flex items-center gap-2 font-medium text-slate-900 hover:text-primary-600">
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
            <p className="text-2xl font-bold text-green-600 mb-1">₹{cheapest.petrol.toFixed(2)}/L</p>
            <p className="text-slate-600 text-sm">{cheapest.name} has the cheapest petrol today</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border border-slate-200">
            <h3 className="font-bold text-lg mb-2">⛽ Costliest Petrol</h3>
            <p className="text-2xl font-bold text-red-600 mb-1">₹{costliest.petrol.toFixed(2)}/L</p>
            <p className="text-slate-600 text-sm">{costliest.name} has the highest petrol price</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border border-slate-200">
            <h3 className="font-bold text-lg mb-2">🔔 Price Drop Alert</h3>
            <p className="text-slate-600 text-sm mb-3">Get notified when petrol price changes in your city</p>
            <Link href="/contact" className="btn-primary text-sm inline-flex items-center gap-1">
              Contact for Alerts <ArrowRight className="w-4 h-4" />
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
            <Link href="/cricket-live" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">🏏 Live Cricket</Link>
          </div>
        </article>
      </div>
    </section>
  )
}
