import { Metadata } from 'next'
import Link from 'next/link'
import { Coins, MapPin, TrendingUp } from 'lucide-react'

type CityData = {
  name: string
  gold24k: number
  gold22k: number
  gold18k: number
  silver: number
  change24k: number
  changeSilver: number
}

const cityDataMap: Record<string, CityData> = {
  pune: { name: 'Pune', gold24k: 63450, gold22k: 58250, gold18k: 47590, silver: 74800, change24k: 1.2, changeSilver: 0.8 },
  mumbai: { name: 'Mumbai', gold24k: 63600, gold22k: 58400, gold18k: 47700, silver: 74950, change24k: 1.1, changeSilver: 0.9 },
  delhi: { name: 'Delhi', gold24k: 63350, gold22k: 58150, gold18k: 47520, silver: 74650, change24k: 1.3, changeSilver: 0.7 },
  bangalore: { name: 'Bangalore', gold24k: 63500, gold22k: 58300, gold18k: 47630, silver: 74700, change24k: 0.9, changeSilver: 0.6 },
  hyderabad: { name: 'Hyderabad', gold24k: 63400, gold22k: 58200, gold18k: 47560, silver: 74750, change24k: 1.0, changeSilver: 0.5 },
  chennai: { name: 'Chennai', gold24k: 63550, gold22k: 58350, gold18k: 47670, silver: 74850, change24k: 1.1, changeSilver: 0.7 },
  kolkata: { name: 'Kolkata', gold24k: 63380, gold22k: 58180, gold18k: 47540, silver: 74680, change24k: 1.2, changeSilver: 0.8 },
  ahmedabad: { name: 'Ahmedabad', gold24k: 63420, gold22k: 58220, gold18k: 47570, silver: 74720, change24k: 1.0, changeSilver: 0.6 },
}

export function generateStaticParams() {
  return Object.keys(cityDataMap).map((city) => ({ city }))
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const data = cityDataMap[params.city]
  if (!data) return { title: 'City Not Found' }
  return {
    title: `Gold Rate Today in ${data.name} - 22K 24K Price per Gram & 10g | LivePriceIndia`,
    description: `Today's gold rate in ${data.name}: 24K ₹${data.gold24k.toLocaleString('en-IN')}/10g, 22K ₹${data.gold22k.toLocaleString('en-IN')}/10g. Live silver rate ₹${data.silver.toLocaleString('en-IN')}/kg. Updated every 5 minutes. Free gold price alerts for ${data.name}.`,
    keywords: [`gold rate today ${data.name.toLowerCase()}`, `gold price ${data.name.toLowerCase()}`, `22 carat gold rate ${data.name.toLowerCase()}`, `24 carat gold rate ${data.name.toLowerCase()}`, `silver rate ${data.name.toLowerCase()} today`, `gold rate per gram ${data.name.toLowerCase()}`],
  }
}

export const revalidate = 300

export default function GoldPriceCityPage({ params }: { params: { city: string } }) {
  const data = cityDataMap[params.city]
  if (!data) return <div className="container py-16 text-center text-xl">City not found</div>

  const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
  const otherCities = Object.values(cityDataMap).filter(c => c.name !== data.name)

  const gramPrices = [
    { weight: '1 gram', k24: data.gold24k / 10, k22: data.gold22k / 10 },
    { weight: '8 grams', k24: (data.gold24k / 10) * 8, k22: (data.gold22k / 10) * 8 },
    { weight: '10 grams', k24: data.gold24k, k22: data.gold22k },
    { weight: '100 grams', k24: data.gold24k * 10, k22: data.gold22k * 10 },
  ]

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      <div className="container">
        <nav className="text-sm mb-6 text-slate-500">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/gold-price-india" className="hover:text-primary-600">Gold Rate India</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 font-medium">{data.name}</span>
        </nav>

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <Coins className="w-8 h-8 text-yellow-600" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Gold Rate Today in {data.name}</h1>
            <p className="text-slate-600">22K & 24K live prices • Updated: {today}</p>
          </div>
        </div>

        {/* Price Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-lg border-2 border-yellow-200 p-6 text-center">
            <div className="text-sm text-slate-500 mb-1">24 Karat / 10g</div>
            <div className="text-3xl font-bold text-yellow-700">₹{data.gold24k.toLocaleString('en-IN')}</div>
            <span className="inline-flex items-center gap-1 text-sm text-green-600 mt-1"><TrendingUp className="w-3 h-3" /> +{data.change24k}%</span>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 text-center">
            <div className="text-sm text-slate-500 mb-1">22 Karat / 10g</div>
            <div className="text-3xl font-bold">₹{data.gold22k.toLocaleString('en-IN')}</div>
            <span className="inline-flex items-center gap-1 text-sm text-green-600 mt-1"><TrendingUp className="w-3 h-3" /> +{data.change24k}%</span>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 text-center">
            <div className="text-sm text-slate-500 mb-1">Silver / kg</div>
            <div className="text-3xl font-bold text-slate-600">₹{data.silver.toLocaleString('en-IN')}</div>
            <span className="inline-flex items-center gap-1 text-sm text-green-600 mt-1"><TrendingUp className="w-3 h-3" /> +{data.changeSilver}%</span>
          </div>
        </div>

        {/* Price per Gram Table */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-8">
          <div className="bg-yellow-600 text-white px-6 py-3 font-semibold">Gold Price in {data.name} — By Weight</div>
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left py-3 px-6 font-semibold text-slate-700">Weight</th>
                <th className="text-right py-3 px-6 font-semibold text-slate-700">24 Karat</th>
                <th className="text-right py-3 px-6 font-semibold text-slate-700">22 Karat</th>
              </tr>
            </thead>
            <tbody>
              {gramPrices.map((row) => (
                <tr key={row.weight} className="border-b border-slate-100">
                  <td className="py-3 px-6 font-medium">{row.weight}</td>
                  <td className="py-3 px-6 text-right font-bold">₹{Math.round(row.k24).toLocaleString('en-IN')}</td>
                  <td className="py-3 px-6 text-right font-semibold text-slate-700">₹{Math.round(row.k22).toLocaleString('en-IN')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Compare with Other Cities */}
        <div className="bg-white rounded-xl shadow p-6 border border-slate-200 mb-8">
          <h2 className="text-xl font-bold mb-4">Compare Gold Rate — {data.name} vs Other Cities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherCities.slice(0, 4).map((city) => (
              <Link key={city.name} href={`/gold-price-${city.name.toLowerCase()}`} className="block p-4 rounded-lg border border-slate-200 hover:border-yellow-300 hover:shadow transition-all text-center">
                <div className="flex items-center justify-center gap-1 text-sm text-slate-500 mb-1">
                  <MapPin className="w-3 h-3" /> {city.name}
                </div>
                <div className="font-bold text-lg">₹{city.gold24k.toLocaleString('en-IN')}</div>
                <div className="text-xs text-slate-500">24K / 10g</div>
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Content */}
        <article className="bg-white rounded-xl shadow p-8 border border-slate-200 prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Gold Rate in {data.name} — Today&apos;s Complete Guide</h2>
          <p className="text-slate-600 mb-4">
            The gold rate in {data.name} today for 24 Karat is <strong>₹{data.gold24k.toLocaleString('en-IN')} per 10 grams</strong> and 
            22 Karat gold is priced at <strong>₹{data.gold22k.toLocaleString('en-IN')} per 10 grams</strong>. Silver is trading at 
            ₹{data.silver.toLocaleString('en-IN')} per kg. These prices are updated every 5 minutes from major bullion markets.
          </p>
          <p className="text-slate-600 mb-4">
            Gold prices in {data.name} are influenced by international gold rates (LBMA), the USD/INR exchange rate, 
            import duty (15%), GST (3%), and local market demand. During wedding seasons (October to February), 
            gold demand in {data.name} increases significantly, often pushing prices slightly higher than other cities.
          </p>
          <h3 className="text-xl font-bold mb-3">How to Buy Gold in {data.name}</h3>
          <ul className="list-disc pl-6 text-slate-600 space-y-1 mb-4">
            <li><strong>Physical Gold</strong> — Visit reputed jewellers like Tanishq, Kalyan, PNG in {data.name}</li>
            <li><strong>Digital Gold</strong> — Buy from ₹1 on Google Pay, PhonePe, or Paytm</li>
            <li><strong>Gold ETFs</strong> — Trade on NSE/BSE through your demat account</li>
            <li><strong>Sovereign Gold Bonds</strong> — Government-backed, 2.5% annual interest</li>
          </ul>
          <div className="flex flex-wrap gap-3 not-prose">
            <Link href="/gold-price-india" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">All Cities Gold Rate</Link>
            <Link href="/petrol-price-india" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Petrol Price Today</Link>
            <Link href="/nifty-live" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Nifty Live</Link>
          </div>
        </article>
      </div>
    </section>
  )
}
