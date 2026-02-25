import { Metadata } from 'next'
import Link from 'next/link'
import { TrendingUp, TrendingDown, BarChart3, ArrowRight } from 'lucide-react'
import { fetchNiftyData } from '@/lib/fetchPrices'

export const metadata: Metadata = {
  title: 'Nifty 50 Live Chart - Support Resistance Levels & Bank Nifty Today',
  description: 'Nifty 50 live with auto-calculated support & resistance levels, Bank Nifty live chart, intraday pivot points. Free real-time updates for day traders.',
  keywords: ['nifty 50 live', 'nifty live chart', 'bank nifty live', 'nifty support resistance', 'bank nifty intraday levels', 'nifty 50 today'],
  alternates: { canonical: 'https://livepriceindia.vercel.app/nifty-live' },
}

export const revalidate = 60

function calcPivot(high: number, low: number, close: number) {
  const pivot = (high + low + close) / 3
  return {
    pivot: Math.round(pivot * 100) / 100,
    support: [
      Math.round((2 * pivot - high) * 100) / 100,
      Math.round((pivot - (high - low)) * 100) / 100,
      Math.round((low - 2 * (high - pivot)) * 100) / 100,
    ],
    resistance: [
      Math.round((2 * pivot - low) * 100) / 100,
      Math.round((pivot + (high - low)) * 100) / 100,
      Math.round((high + 2 * (pivot - low)) * 100) / 100,
    ],
  }
}

export default async function NiftyLivePage() {
  const { nifty: niftyData, bankNifty: bankNiftyData } = await fetchNiftyData()

  const nifty = niftyData
  const bankNifty = bankNiftyData
  const niftyLevels = calcPivot(nifty.high, nifty.low, nifty.close)
  const bankNiftyLevels = calcPivot(bankNifty.high, bankNifty.low, bankNifty.close)

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
            <p className="text-slate-700">Support & Resistance levels • Auto-calculated pivot points</p>
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
              <div><span className="text-slate-700 block">Open</span><span className="font-semibold">{nifty.open.toLocaleString('en-IN')}</span></div>
              <div><span className="text-slate-700 block">High</span><span className="font-semibold text-green-600">{nifty.high.toLocaleString('en-IN')}</span></div>
              <div><span className="text-slate-700 block">Low</span><span className="font-semibold text-red-600">{nifty.low.toLocaleString('en-IN')}</span></div>
              <div><span className="text-slate-700 block">Pivot</span><span className="font-semibold">{niftyLevels.pivot.toLocaleString('en-IN')}</span></div>
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
              <div><span className="text-slate-700 block">Open</span><span className="font-semibold">{bankNifty.open.toLocaleString('en-IN')}</span></div>
              <div><span className="text-slate-700 block">High</span><span className="font-semibold text-green-600">{bankNifty.high.toLocaleString('en-IN')}</span></div>
              <div><span className="text-slate-700 block">Low</span><span className="font-semibold text-red-600">{bankNifty.low.toLocaleString('en-IN')}</span></div>
              <div><span className="text-slate-700 block">Pivot</span><span className="font-semibold">{bankNiftyLevels.pivot.toLocaleString('en-IN')}</span></div>
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

        {/* Quick Trading Strategies */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">📊 Quick Trading Strategies for Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="font-bold text-green-800 mb-2">🟢 Bullish Setup</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Nifty above VWAP = Buy on dips</li>
                <li>• Buy near S1 ({niftyLevels.support[0].toLocaleString('en-IN')})</li>
                <li>• Target: R1 ({niftyLevels.resistance[0].toLocaleString('en-IN')})</li>
                <li>• Stop-loss: Below S2 ({niftyLevels.support[1].toLocaleString('en-IN')})</li>
                <li>• Risk-Reward: 1:2 minimum</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-5 border border-red-200">
              <h3 className="font-bold text-red-800 mb-2">🔴 Bearish Setup</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Nifty below VWAP = Sell on rises</li>
                <li>• Sell near R1 ({niftyLevels.resistance[0].toLocaleString('en-IN')})</li>
                <li>• Target: S1 ({niftyLevels.support[0].toLocaleString('en-IN')})</li>
                <li>• Stop-loss: Above R2 ({niftyLevels.resistance[1].toLocaleString('en-IN')})</li>
                <li>• Risk-Reward: 1:2 minimum</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-2">⚡ Breakout Setup</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Wait for first 15-min candle range</li>
                <li>• Buy above candle high with volume</li>
                <li>• Sell below candle low with volume</li>
                <li>• SL: Opposite end of candle</li>
                <li>• Trail SL with 9 EMA on 5-min</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
            <p className="text-amber-800 font-medium">💡 Pro Tip: Combine multiple confirmations — Price action + Volume + RSI + Support/Resistance = Higher probability trades. Never trade based on a single indicator.</p>
          </div>
        </div>

        {/* Intraday Tips */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">🎯 Nifty Intraday Trading Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Best Time to Trade</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>🕘 <strong>9:15 - 9:30 AM:</strong> Opening volatility. Wait & watch. Mark opening range.</li>
                <li>🕙 <strong>9:30 - 11:30 AM:</strong> Best trading window. Highest volume & trend moves.</li>
                <li>🕛 <strong>11:30 AM - 1:30 PM:</strong> Lunch session. Low volume. Avoid new trades.</li>
                <li>🕑 <strong>1:30 - 2:30 PM:</strong> Afternoon session. Trend resumes. Good for continuation.</li>
                <li>🕝 <strong>2:30 - 3:15 PM:</strong> Closing time. Book profits. Don&apos;t take new trades after 2:45 PM.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Key Indicators for Nifty</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>📈 <strong>VWAP:</strong> Above = Bullish, Below = Bearish. Most important for intraday.</li>
                <li>📊 <strong>EMA (9 & 21):</strong> Crossover signals on 5-min chart for entry/exit.</li>
                <li>📉 <strong>RSI (14):</strong> Below 30 = Oversold (buy), Above 70 = Overbought (sell).</li>
                <li>🔊 <strong>Volume:</strong> Breakout + high volume = real move. Low volume = fake breakout.</li>
                <li>📐 <strong>CPR:</strong> Central Pivot Range from previous day for bias direction.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <article className="bg-white rounded-xl shadow p-8 border border-slate-200 prose max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Nifty 50 Support & Resistance — How We Calculate</h2>
          <p className="text-slate-700 mb-4">
            Our support and resistance levels are calculated using the <strong>Standard Pivot Point formula</strong> based on previous day&apos;s OHLC data. 
            These levels help intraday traders identify key price zones for entry/exit decisions.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Pivot = (High + Low + Close) / 3</strong>. R1, R2, R3 and S1, S2, S3 are derived from this pivot. 
            Bank Nifty follows a similar calculation with its own OHLC data.
          </p>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Market Outlook & Analysis</h3>
          <p className="text-slate-700 mb-4">
            Monitor global cues from US markets (Dow Jones, S&P 500, Nasdaq), SGX Nifty futures, and commodity prices (crude oil, gold) before the Indian market opens.
            FII and DII activity data from NSE provides insight into institutional sentiment. Positive FII inflows generally support bullish Nifty movement.
          </p>
          <div className="flex flex-wrap gap-3 not-prose">
            <Link href="/stock-market-strategy" className="text-blue-600 hover:underline text-sm bg-blue-50 px-3 py-1 rounded-full font-medium">📖 Full Trading Strategy Guide</Link>
            <Link href="/gold-price-india" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Gold Rate Today</Link>
            <Link href="/crypto-prices-inr" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Crypto Prices INR</Link>
            <Link href="/petrol-price-india" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Petrol Price</Link>
          </div>
        </article>
      </div>
    </section>
  )
}
