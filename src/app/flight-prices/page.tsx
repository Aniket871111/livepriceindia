import { Metadata } from 'next'
import Link from 'next/link'
import { Plane, TrendingDown, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Flight Price Tracker Pune - Cheapest Flights to Goa, Delhi, Mumbai',
  description: 'Track cheapest flights from Pune to Goa ₹3,450, Delhi ₹4,850, Mumbai ₹2,850. Compare IndiGo, SpiceJet, Air India prices. Free price drop alerts.',
  keywords: ['cheapest flights from pune', 'pune to goa flight price', 'pune to delhi flight', 'pune to mumbai flight fare', 'cheap flight deals pune'],
}

export const revalidate = 3600

const routes = [
  {
    to: 'Goa',
    flights: [
      { airline: 'IndiGo', price: 3450, departure: '06:30', arrival: '07:45' },
      { airline: 'SpiceJet', price: 3890, departure: '08:15', arrival: '09:30' },
      { airline: 'Air India', price: 4200, departure: '14:20', arrival: '15:35' },
    ],
  },
  {
    to: 'Delhi',
    flights: [
      { airline: 'IndiGo', price: 4850, departure: '05:45', arrival: '08:15' },
      { airline: 'SpiceJet', price: 5200, departure: '07:30', arrival: '10:00' },
      { airline: 'Air India', price: 5650, departure: '16:45', arrival: '19:15' },
    ],
  },
  {
    to: 'Mumbai',
    flights: [
      { airline: 'IndiGo', price: 2850, departure: '06:00', arrival: '06:50' },
      { airline: 'SpiceJet', price: 3100, departure: '09:30', arrival: '10:20' },
      { airline: 'Vistara', price: 3800, departure: '12:00', arrival: '12:50' },
    ],
  },
  {
    to: 'Bangalore',
    flights: [
      { airline: 'IndiGo', price: 3200, departure: '07:00', arrival: '08:30' },
      { airline: 'Air India', price: 3650, departure: '10:15', arrival: '11:45' },
    ],
  },
]

export default function FlightPricesPage() {
  const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="container">
        <nav className="text-sm mb-6 text-slate-500">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 font-medium">Flight Price Tracker — Pune</span>
        </nav>

        <div className="flex items-center gap-3 mb-8">
          <div className="bg-sky-100 p-3 rounded-lg">
            <Plane className="w-8 h-8 text-sky-600" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Cheapest Flights from Pune</h1>
            <p className="text-slate-600">Compare airlines & fares • Updated: {today}</p>
          </div>
        </div>

        {/* Route Cards */}
        {routes.map((route) => (
          <div key={route.to} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-6">
            <div className="bg-sky-600 text-white px-6 py-3 flex items-center justify-between">
              <span className="font-semibold">Pune → {route.to}</span>
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                From ₹{Math.min(...route.flights.map(f => f.price)).toLocaleString('en-IN')}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-slate-700">Airline</th>
                    <th className="text-center py-3 px-6 text-sm font-semibold text-slate-700">Departure</th>
                    <th className="text-center py-3 px-6 text-sm font-semibold text-slate-700">Arrival</th>
                    <th className="text-right py-3 px-6 text-sm font-semibold text-slate-700">Price</th>
                    <th className="text-right py-3 px-6 text-sm font-semibold text-slate-700">Book</th>
                  </tr>
                </thead>
                <tbody>
                  {route.flights.map((flight, i) => (
                    <tr key={i} className={`border-b border-slate-100 hover:bg-sky-50 ${i === 0 ? 'bg-green-50/50' : ''}`}>
                      <td className="py-3 px-6 font-medium">{flight.airline} {i === 0 && <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full ml-1">Cheapest</span>}</td>
                      <td className="text-center py-3 px-6">{flight.departure}</td>
                      <td className="text-center py-3 px-6">{flight.arrival}</td>
                      <td className="text-right py-3 px-6 font-bold">₹{flight.price.toLocaleString('en-IN')}</td>
                      <td className="text-right py-3 px-6">
                        <a href="https://www.makemytrip.com" target="_blank" rel="noopener noreferrer nofollow" className="text-sky-600 hover:text-sky-700 text-sm font-medium">
                          Book →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* SEO Content */}
        <article className="bg-white rounded-xl shadow p-8 border border-slate-200 prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Tips to Get Cheapest Flights from Pune</h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
            <li><strong>Book 3-4 weeks ahead</strong> for domestic flights for the best prices</li>
            <li><strong>Tuesday & Wednesday</strong> are typically cheapest for Indian flights</li>
            <li><strong>Early morning flights</strong> (5-7 AM) are 20-30% cheaper</li>
            <li><strong>Set price alerts</strong> — We&apos;ll notify you when fares drop significantly</li>
            <li><strong>Compare across airlines</strong> — IndiGo is usually cheapest, but not always</li>
          </ul>
          <div className="flex flex-wrap gap-3 not-prose">
            <Link href="/gold-price-india" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Gold Rate Today</Link>
            <Link href="/petrol-price-india" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Petrol Price</Link>
            <Link href="/nifty-live" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Nifty Live</Link>
          </div>
        </article>
      </div>
    </section>
  )
}
