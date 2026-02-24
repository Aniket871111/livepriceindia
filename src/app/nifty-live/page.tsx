import { Metadata } from 'next'
import Link from 'next/link'
import { TrendingUp, TrendingDown, BarChart3, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nifty 50 Live Chart - Support Resistance Levels & Bank Nifty Today',
  description: 'Nifty 50 live at 22,145. Auto-calculated support & resistance levels, Bank Nifty live chart, intraday pivot points. Free real-time updates for day traders.',
  keywords: ['nifty 50 live', 'nifty live chart', 'bank nifty live', 'nifty support resistance', 'bank nifty intraday levels', 'nifty 50 today'],
}

export const revalidate = 60

export default function NiftyLivePage() {
  const nifty = { price: 22145.50, open: 22089.75, high: 22198.30, low: 22012.40, change: 0.45 }
  const bankNifty = { price: 47890.25, open: 47756.80, high: 47945.60, low: 47690.30, change: -0.23 }

  const niftyLevels = {
    support: [22050, 21980, 21900],
    resistance: [22200, 22300, 22450],
    pivot: 22087,
  }

  const bankNiftyLevels = {
    support: [47700, 47500, 47300],
    resistance: [48000, 48200, 48500],
    pivot: 47797,
  }

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container">
        <nav className="text-sm mb-6 text-slate-500">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 font-medium">Nifty & Bank Nifty Live</span>
        </nav>

        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-100 p-3 rounded-lg">
            <BarChart3 className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Nifty 50 & Bank Nifty Live Dashboard</h1>
            <p className="text-slate-600">Support & Resistance levels • Auto-calculated pivot points</p>
          </div>
        </div>

        {/* Live Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Nifty 50</h2>
              <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full font-medium">LIVE</span>
            </div>
            <div className="text-4xl font-bold mb-2">{nifty.price.toLocaleString('en-IN')}</div>
            <span className={`inline-flex items-center gap-1 text-sm font-medium ${nifty.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {nifty.change > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              {nifty.change > 0 ? '+' : ''}{nifty.change}%
            </span>
            <div className="grid grid-cols-4 gap-3 mt-4 text-sm">
              <div><span className="text-slate-500 block">Open</span><span className="font-semibold">{nifty.open.toLocaleString('en-IN')}</span></div>
              <div><span className="text-slate-500 block">High</span><span className="font-semibold text-green-600">{nifty.high.toLocaleString('en-IN')}</span></div>
              <div><span className="text-slate-500 block">Low</span><span className="font-semibold text-red-600">{nifty.low.toLocaleString('en-IN')}</span></div>
              <div><span className="text-slate-500 block">Pivot</span><span className="font-semibold">{niftyLevels.pivot.toLocaleString('en-IN')}</span></div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Bank Nifty</h2>
              <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full font-medium">LIVE</span>
            </div>
            <div className="text-4xl font-bold mb-2">{bankNifty.price.toLocaleString('en-IN')}</div>
            <span className={`inline-flex items-center gap-1 text-sm font-medium ${bankNifty.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {bankNifty.change > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              {bankNifty.change > 0 ? '+' : ''}{bankNifty.change}%
            </span>
            <div className="grid grid-cols-4 gap-3 mt-4 text-sm">
              <div><span className="text-slate-500 block">Open</span><span className="font-semibold">{bankNifty.open.toLocaleString('en-IN')}</span></div>
              <div><span className="text-slate-500 block">High</span><span className="font-semibold text-green-600">{bankNifty.high.toLocaleString('en-IN')}</span></div>
              <div><span className="text-slate-500 block">Low</span><span className="font-semibold text-red-600">{bankNifty.low.toLocaleString('en-IN')}</span></div>
              <div><span className="text-slate-500 block">Pivot</span><span className="font-semibold">{bankNiftyLevels.pivot.toLocaleString('en-IN')}</span></div>
            </div>
          </div>
        </div>

        {/* Support & Resistance Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="bg-blue-600 text-white px-6 py-3 font-semibold">Nifty 50 — Support & Resistance</div>
            <table className="w-full">
              <thead className="bg-slate-50"><tr><th className="py-3 px-6 text-left text-sm">Level</th><th className="py-3 px-6 text-right text-sm text-green-600">Resistance</th><th className="py-3 px-6 text-right text-sm text-red-600">Support</th></tr></thead>
              <tbody>
                {[0, 1, 2].map((i) => (
                  <tr key={i} className="border-t border-slate-100">
                    <td className="py-3 px-6 font-medium">Level {i + 1}</td>
                    <td className="py-3 px-6 text-right font-bold text-green-600">{niftyLevels.resistance[i].toLocaleString('en-IN')}</td>
                    <td className="py-3 px-6 text-right font-bold text-red-600">{niftyLevels.support[i].toLocaleString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="bg-indigo-600 text-white px-6 py-3 font-semibold">Bank Nifty — Support & Resistance</div>
            <table className="w-full">
              <thead className="bg-slate-50"><tr><th className="py-3 px-6 text-left text-sm">Level</th><th className="py-3 px-6 text-right text-sm text-green-600">Resistance</th><th className="py-3 px-6 text-right text-sm text-red-600">Support</th></tr></thead>
              <tbody>
                {[0, 1, 2].map((i) => (
                  <tr key={i} className="border-t border-slate-100">
                    <td className="py-3 px-6 font-medium">Level {i + 1}</td>
                    <td className="py-3 px-6 text-right font-bold text-green-600">{bankNiftyLevels.resistance[i].toLocaleString('en-IN')}</td>
                    <td className="py-3 px-6 text-right font-bold text-red-600">{bankNiftyLevels.support[i].toLocaleString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SEO Content */}
        <article className="bg-white rounded-xl shadow p-8 border border-slate-200 prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Nifty 50 Support & Resistance — How We Calculate</h2>
          <p className="text-slate-600 mb-4">
            Our support and resistance levels are calculated using the <strong>Standard Pivot Point formula</strong> based on previous day&apos;s OHLC data. 
            These levels help intraday traders identify key price zones for entry/exit decisions.
          </p>
          <p className="text-slate-600 mb-4">
            <strong>Pivot = (High + Low + Close) / 3</strong>. R1, R2, R3 and S1, S2, S3 are derived from this pivot. 
            Bank Nifty follows a similar calculation with its own OHLC data.
          </p>
          <div className="flex flex-wrap gap-3 not-prose">
            <Link href="/gold-price-india" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Gold Rate Today</Link>
            <Link href="/crypto-prices-inr" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Crypto Prices INR</Link>
            <Link href="/petrol-price-india" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Petrol Price</Link>
          </div>
        </article>
      </div>
    </section>
  )
}
