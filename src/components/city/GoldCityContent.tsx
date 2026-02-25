import Link from 'next/link'
import { Coins, MapPin, TrendingUp, TrendingDown } from 'lucide-react'
import { GoldPriceData } from '@/lib/fetchPrices'

interface GoldCityContentProps {
  cityKey: string
  cityName: string
  data: GoldPriceData
  allCities: Record<string, GoldPriceData & { name: string }>
}

const cityNames: Record<string, string> = {
  pune: 'Pune', mumbai: 'Mumbai', delhi: 'Delhi', bangalore: 'Bangalore',
  hyderabad: 'Hyderabad', chennai: 'Chennai', kolkata: 'Kolkata', ahmedabad: 'Ahmedabad',
}

export default function GoldCityContent({ cityKey, cityName, data, allCities }: GoldCityContentProps) {
  const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
  const otherCities = Object.entries(allCities).filter(([k]) => k !== cityKey)

  const gold18k = Math.round(data.gold24k * 0.75)
  const gramPrices = [
    { weight: '1 gram', k24: data.gold24k / 10, k22: data.gold22k / 10 },
    { weight: '8 grams', k24: (data.gold24k / 10) * 8, k22: (data.gold22k / 10) * 8 },
    { weight: '10 grams', k24: data.gold24k, k22: data.gold22k },
    { weight: '100 grams', k24: data.gold24k * 10, k22: data.gold22k * 10 },
  ]

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      <div className="container">
        <nav aria-label="Breadcrumb" className="text-sm mb-6 text-slate-700">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/gold-price-india" className="hover:text-primary-600">Gold Rate India</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 font-medium">{cityName}</span>
        </nav>

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <Coins className="w-8 h-8 text-yellow-600" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Gold Rate Today in {cityName}</h1>
            <p className="text-slate-600">22K & 24K live prices • Updated: <time dateTime={new Date().toISOString().split('T')[0]}>{today}</time></p>
          </div>
        </div>

        {/* Price Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-lg border-2 border-yellow-300 p-6 text-center">
            <div className="text-sm text-slate-600 mb-1">24 Karat / 10g</div>
            <div className="text-3xl font-bold text-red-600">₹{data.gold24k.toLocaleString('en-IN')}</div>
            <span className={`inline-flex items-center gap-1 text-sm font-semibold mt-1 ${data.change >= 0 ? 'text-green-700' : 'text-red-700'}`}>
              {data.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />} {data.change >= 0 ? '+' : ''}{data.change}%
            </span>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 text-center">
            <div className="text-sm text-slate-600 mb-1">22 Karat / 10g</div>
            <div className="text-3xl font-bold text-slate-900">₹{data.gold22k.toLocaleString('en-IN')}</div>
            <span className={`inline-flex items-center gap-1 text-sm font-semibold mt-1 ${data.change >= 0 ? 'text-green-700' : 'text-red-700'}`}>
              {data.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />} {data.change >= 0 ? '+' : ''}{data.change}%
            </span>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 text-center">
            <div className="text-sm text-slate-600 mb-1">Silver / kg</div>
            <div className="text-3xl font-bold text-slate-800">₹{data.silver.toLocaleString('en-IN')}</div>
            <span className="inline-flex items-center gap-1 text-sm text-slate-600 font-semibold mt-1">
              Updated live
            </span>
          </div>
        </div>

        {/* Price per Gram Table */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-8">
          <div className="bg-yellow-600 text-white px-6 py-3 font-semibold">Gold Price in {cityName} — By Weight</div>
          <table className="w-full">
            <caption className="sr-only">Gold price per weight in {cityName}</caption>
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left py-3 px-6 font-semibold text-slate-700">Weight</th>
                <th className="text-right py-3 px-6 font-semibold text-slate-700">24K Price</th>
                <th className="text-right py-3 px-6 font-semibold text-slate-700">22K Price</th>
              </tr>
            </thead>
            <tbody>
              {gramPrices.map((row) => (
                <tr key={row.weight} className="border-b border-slate-100 hover:bg-yellow-50">
                  <td className="py-3 px-6 font-medium text-slate-800">{row.weight}</td>
                  <td className="py-3 px-6 text-right font-bold text-red-600">₹{Math.round(row.k24).toLocaleString('en-IN')}</td>
                  <td className="py-3 px-6 text-right font-bold text-slate-800">₹{Math.round(row.k22).toLocaleString('en-IN')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Compare Cities */}
        <div className="bg-white rounded-xl shadow p-6 border border-slate-200 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Compare Gold Rate — {cityName} vs Other Cities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherCities.slice(0, 7).map(([key, city]) => (
              <Link key={key} href={`/gold-price-${key}`} className="block p-4 rounded-lg border border-slate-200 hover:border-yellow-400 hover:shadow transition-all text-center">
                <div className="flex items-center justify-center gap-1 text-sm text-slate-600 mb-1">
                  <MapPin className="w-3 h-3" /> {city.name}
                </div>
                <div className="font-bold text-lg text-slate-900">₹{city.gold24k.toLocaleString('en-IN')}</div>
                <div className="text-xs text-slate-500">24K / 10g</div>
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Content */}
        <article className="bg-white rounded-xl shadow p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Gold Rate in {cityName} — Today&apos;s Complete Guide</h2>
          <p className="text-slate-700 mb-4">
            The gold rate in {cityName} today for 24 Karat is <strong className="text-red-600">₹{data.gold24k.toLocaleString('en-IN')} per 10 grams</strong> and 
            22 Karat gold is priced at <strong className="text-slate-900">₹{data.gold22k.toLocaleString('en-IN')} per 10 grams</strong>. Silver is trading at 
            <strong className="text-slate-900"> ₹{data.silver.toLocaleString('en-IN')} per kg</strong>. These prices are updated every 5 minutes.
          </p>
          <p className="text-slate-700 mb-4">
            Gold prices in {cityName} are influenced by international gold rates (LBMA), the USD/INR exchange rate, 
            import duty (15%), GST (3%), and local market demand. During wedding season (October to February), 
            gold demand in {cityName} increases, often pushing prices slightly higher.
          </p>
          <h3 className="text-xl font-bold text-slate-900 mb-3">How to Buy Gold in {cityName}</h3>
          <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-4">
            <li><strong>Physical Gold</strong> — Visit reputed jewellers like Tanishq, Kalyan, PNG in {cityName}</li>
            <li><strong>Digital Gold</strong> — Buy from ₹1 on Google Pay, PhonePe, or Paytm</li>
            <li><strong>Gold ETFs</strong> — Trade on NSE/BSE through your demat account</li>
            <li><strong>Sovereign Gold Bonds</strong> — Government-backed, 2.5% annual interest</li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link href="/gold-price-india" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full font-medium">All Cities Gold Rate</Link>
            <Link href={`/petrol-price-${cityKey}`} className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full font-medium">Petrol Price {cityName}</Link>
            <Link href="/nifty-live" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full font-medium">Nifty Live</Link>
            <Link href="/stock-market-strategy" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full font-medium">Stock Market Strategy</Link>
          </div>
        </article>
      </div>
    </section>
  )
}
