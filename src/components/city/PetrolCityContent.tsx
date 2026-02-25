import Link from 'next/link'
import { Fuel, MapPin, TrendingUp } from 'lucide-react'
import { FuelPriceData } from '@/lib/fetchPrices'

interface PetrolCityContentProps {
  cityKey: string
  cityName: string
  data: FuelPriceData
  allCities: Record<string, FuelPriceData & { name: string }>
}

export default function PetrolCityContent({ cityKey, cityName, data, allCities }: PetrolCityContentProps) {
  const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
  const otherCities = Object.entries(allCities).filter(([k]) => k !== cityKey)

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="container">
        <nav className="text-sm mb-6 text-slate-700">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/petrol-price-india" className="hover:text-primary-600">Petrol Price India</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 font-medium">{cityName}</span>
        </nav>

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-orange-100 p-3 rounded-lg">
            <Fuel className="w-8 h-8 text-orange-600" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Petrol & Diesel Price in {cityName} Today</h1>
            <p className="text-slate-600">Updated: {today} at 6:00 AM</p>
          </div>
        </div>

        {/* Price Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-lg border-2 border-orange-300 p-6 text-center">
            <div className="text-sm text-slate-600 mb-1">Petrol / Litre</div>
            <div className="text-3xl font-bold text-red-600">₹{data.petrol.toFixed(2)}</div>
            <span className="text-sm text-slate-600 mt-1 block">{data.change === 0 ? 'No change today' : `${data.change > 0 ? '+' : ''}₹${data.change.toFixed(2)}`}</span>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 text-center">
            <div className="text-sm text-slate-600 mb-1">Diesel / Litre</div>
            <div className="text-3xl font-bold text-slate-900">₹{data.diesel.toFixed(2)}</div>
            <span className="text-sm text-slate-600 mt-1 block">{data.change === 0 ? 'No change today' : `${data.change > 0 ? '+' : ''}₹${data.change.toFixed(2)}`}</span>
          </div>
          {data.cng > 0 && (
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 text-center">
              <div className="text-sm text-slate-600 mb-1">CNG / kg</div>
              <div className="text-3xl font-bold text-green-700">₹{data.cng.toFixed(2)}</div>
              <span className="text-sm text-slate-600 mt-1 block">CNG available</span>
            </div>
          )}
        </div>

        {/* Fuel Calculator */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">⛽ Fuel Cost Calculator — {cityName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-sm text-slate-700 mb-1">5 litres petrol</div>
              <div className="text-2xl font-bold text-slate-900">₹{(data.petrol * 5).toFixed(0)}</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-sm text-slate-700 mb-1">10 litres petrol</div>
              <div className="text-2xl font-bold text-slate-900">₹{(data.petrol * 10).toFixed(0)}</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-sm text-slate-700 mb-1">Full tank (35L)</div>
              <div className="text-2xl font-bold text-slate-900">₹{(data.petrol * 35).toFixed(0)}</div>
            </div>
          </div>
        </div>

        {/* Compare Cities */}
        <div className="bg-white rounded-xl shadow p-6 border border-slate-200 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Compare Fuel Price — {cityName} vs Others</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherCities.slice(0, 4).map(([key, city]) => (
              <Link key={key} href={`/petrol-price-${key}`} className="block p-4 rounded-lg border border-slate-200 hover:border-orange-400 hover:shadow transition-all text-center">
                <div className="flex items-center justify-center gap-1 text-sm text-slate-600 mb-1">
                  <MapPin className="w-3 h-3" /> {city.name}
                </div>
                <div className="font-bold text-lg text-slate-900">₹{city.petrol.toFixed(2)}</div>
                <div className="text-xs text-slate-500">Petrol / L</div>
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Content */}
        <article className="bg-white rounded-xl shadow p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Petrol & Diesel Price in {cityName} — Daily Updates</h2>
          <p className="text-slate-700 mb-4">
            The petrol price in {cityName} today is <strong className="text-red-600">₹{data.petrol.toFixed(2)} per litre</strong> and diesel is 
            priced at <strong className="text-slate-900">₹{data.diesel.toFixed(2)} per litre</strong>. Fuel prices in {cityName} are revised daily at 6:00 AM 
            by oil marketing companies (IOCL, BPCL, HPCL).
          </p>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Why {cityName} Fuel Prices Differ</h3>
          <p className="text-slate-700 mb-4">
            The variation in fuel prices across Indian cities is primarily due to <strong>state VAT</strong> and <strong>local body taxes</strong>. 
            {cityName === 'Mumbai' ? ' Maharashtra has one of the highest state VATs on fuel, making Mumbai the costliest city for petrol.' : 
             cityName === 'Delhi' ? ' Delhi benefits from lower state VAT, keeping fuel prices among the cheapest in India.' : 
             ` ${cityName} falls in the mid-range for fuel pricing in India.`}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/petrol-price-india" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full font-medium">All Cities Petrol Price</Link>
            <Link href={`/gold-price-${cityKey}`} className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full font-medium">Gold Rate {cityName}</Link>
            <Link href="/nifty-live" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full font-medium">Nifty Live</Link>
            <Link href="/cricket-live" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full font-medium">🏏 Live Cricket</Link>
          </div>
        </article>
      </div>
    </section>
  )
}
