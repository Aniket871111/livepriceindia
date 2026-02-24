import { Metadata } from 'next'
import Link from 'next/link'
import { Fuel, MapPin, TrendingUp, TrendingDown } from 'lucide-react'

type CityData = {
  name: string
  petrol: number
  diesel: number
  cng: number
  petrolChange: number
  dieselChange: number
}

const cityDataMap: Record<string, CityData> = {
  pune: { name: 'Pune', petrol: 106.50, diesel: 94.25, cng: 72.50, petrolChange: 0, dieselChange: 0 },
  mumbai: { name: 'Mumbai', petrol: 111.35, diesel: 97.28, cng: 75.00, petrolChange: 0, dieselChange: 0 },
  delhi: { name: 'Delhi', petrol: 96.72, diesel: 89.62, cng: 76.50, petrolChange: 0, dieselChange: 0 },
  bangalore: { name: 'Bangalore', petrol: 101.94, diesel: 87.89, cng: 0, petrolChange: 0, dieselChange: 0 },
  hyderabad: { name: 'Hyderabad', petrol: 109.66, diesel: 97.82, cng: 0, petrolChange: 0, dieselChange: 0 },
  chennai: { name: 'Chennai', petrol: 102.63, diesel: 94.24, cng: 0, petrolChange: 0, dieselChange: 0 },
  kolkata: { name: 'Kolkata', petrol: 104.95, diesel: 91.76, cng: 0, petrolChange: 0, dieselChange: 0 },
  ahmedabad: { name: 'Ahmedabad', petrol: 96.63, diesel: 92.38, cng: 70.80, petrolChange: 0, dieselChange: 0 },
}

export function generateStaticParams() {
  return Object.keys(cityDataMap).map((city) => ({ city }))
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const data = cityDataMap[params.city]
  if (!data) return { title: 'City Not Found' }
  return {
    title: `Petrol Price Today in ${data.name} - Diesel Rate per Litre | LivePriceIndia`,
    description: `Petrol price in ${data.name} today: ₹${data.petrol}/litre. Diesel rate: ₹${data.diesel}/litre. Daily 6 AM updates, price history, and free fuel cost calculator. ${data.cng > 0 ? `CNG price: ₹${data.cng}/kg.` : ''}`,
    keywords: [`petrol price ${data.name.toLowerCase()}`, `diesel price ${data.name.toLowerCase()} today`, `fuel price ${data.name.toLowerCase()}`, `petrol rate ${data.name.toLowerCase()} today per litre`],
  }
}

export const revalidate = 3600

export default function PetrolPriceCityPage({ params }: { params: { city: string } }) {
  const data = cityDataMap[params.city]
  if (!data) return <div className="container py-16 text-center text-xl">City not found</div>

  const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
  const otherCities = Object.values(cityDataMap).filter(c => c.name !== data.name)

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="container">
        <nav className="text-sm mb-6 text-slate-500">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/petrol-price-india" className="hover:text-primary-600">Petrol Price India</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 font-medium">{data.name}</span>
        </nav>

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-orange-100 p-3 rounded-lg">
            <Fuel className="w-8 h-8 text-orange-600" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Petrol & Diesel Price in {data.name} Today</h1>
            <p className="text-slate-600">Updated: {today} at 6:00 AM</p>
          </div>
        </div>

        {/* Price Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-lg border-2 border-orange-200 p-6 text-center">
            <div className="text-sm text-slate-500 mb-1">Petrol / Litre</div>
            <div className="text-3xl font-bold text-orange-700">₹{data.petrol.toFixed(2)}</div>
            <span className="text-sm text-slate-500 mt-1 block">No change today</span>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 text-center">
            <div className="text-sm text-slate-500 mb-1">Diesel / Litre</div>
            <div className="text-3xl font-bold">₹{data.diesel.toFixed(2)}</div>
            <span className="text-sm text-slate-500 mt-1 block">No change today</span>
          </div>
          {data.cng > 0 && (
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 text-center">
              <div className="text-sm text-slate-500 mb-1">CNG / kg</div>
              <div className="text-3xl font-bold text-green-700">₹{data.cng.toFixed(2)}</div>
              <span className="text-sm text-slate-500 mt-1 block">CNG available</span>
            </div>
          )}
        </div>

        {/* Fuel Cost Calculator */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">⛽ Fuel Cost Calculator — {data.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-sm text-slate-600 mb-1">5 litres petrol</div>
              <div className="text-2xl font-bold">₹{(data.petrol * 5).toFixed(0)}</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-sm text-slate-600 mb-1">10 litres petrol</div>
              <div className="text-2xl font-bold">₹{(data.petrol * 10).toFixed(0)}</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-sm text-slate-600 mb-1">Full tank (35L)</div>
              <div className="text-2xl font-bold">₹{(data.petrol * 35).toFixed(0)}</div>
            </div>
          </div>
        </div>

        {/* Compare with Other Cities */}
        <div className="bg-white rounded-xl shadow p-6 border border-slate-200 mb-8">
          <h2 className="text-xl font-bold mb-4">Compare Fuel Price — {data.name} vs Others</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherCities.slice(0, 4).map((city) => (
              <Link key={city.name} href={`/petrol-price-${city.name.toLowerCase()}`} className="block p-4 rounded-lg border border-slate-200 hover:border-orange-300 hover:shadow transition-all text-center">
                <div className="flex items-center justify-center gap-1 text-sm text-slate-500 mb-1">
                  <MapPin className="w-3 h-3" /> {city.name}
                </div>
                <div className="font-bold text-lg">₹{city.petrol.toFixed(2)}</div>
                <div className="text-xs text-slate-500">Petrol / L</div>
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Content */}
        <article className="bg-white rounded-xl shadow p-8 border border-slate-200 prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Petrol & Diesel Price in {data.name} — Daily Updates</h2>
          <p className="text-slate-600 mb-4">
            The petrol price in {data.name} today is <strong>₹{data.petrol.toFixed(2)} per litre</strong> and diesel is 
            priced at <strong>₹{data.diesel.toFixed(2)} per litre</strong>. Fuel prices in {data.name} are revised daily at 6:00 AM 
            by oil marketing companies (IOCL, BPCL, HPCL).
          </p>
          <h3 className="text-xl font-bold mb-3">Why {data.name} Fuel Prices Differ</h3>
          <p className="text-slate-600 mb-4">
            The variation in fuel prices across Indian cities is primarily due to <strong>state VAT</strong> and <strong>local body taxes</strong>. 
            {data.name === 'Mumbai' ? ' Maharashtra has one of the highest state VATs on fuel, making Mumbai the costliest city for petrol.' : 
             data.name === 'Delhi' ? ' Delhi benefits from lower state VAT, keeping fuel prices among the cheapest in India.' : 
             ` ${data.name} falls in the mid-range for fuel pricing in India.`}
          </p>
          <div className="flex flex-wrap gap-3 not-prose">
            <Link href="/petrol-price-india" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">All Cities Petrol Price</Link>
            <Link href={`/gold-price-${params.city}`} className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Gold Rate {data.name}</Link>
            <Link href="/nifty-live" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Nifty Live</Link>
          </div>
        </article>
      </div>
    </section>
  )
}
