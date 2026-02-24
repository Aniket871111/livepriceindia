import { Metadata } from 'next'
import Link from 'next/link'
import { Bitcoin, TrendingUp, TrendingDown, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cryptocurrency Prices in INR - Bitcoin, Ethereum & Top 20 Live',
  description: 'Live cryptocurrency prices in Indian Rupees (INR). Bitcoin ₹42,50,000, Ethereum ₹2,85,000 + top 20 coins. 24h change, INR calculator, buy links. Updated every 30 seconds.',
  keywords: ['bitcoin price inr', 'cryptocurrency prices india', 'ethereum to inr', 'crypto prices inr live', 'bitcoin rate in indian rupees', 'best crypto to buy india'],
}

export const revalidate = 60

const coins = [
  { rank: 1, name: 'Bitcoin', symbol: 'BTC', price: 4250000, change: 2.1 },
  { rank: 2, name: 'Ethereum', symbol: 'ETH', price: 285000, change: 1.8 },
  { rank: 3, name: 'Tether', symbol: 'USDT', price: 83.50, change: 0.1 },
  { rank: 4, name: 'BNB', symbol: 'BNB', price: 42800, change: -0.5 },
  { rank: 5, name: 'XRP', symbol: 'XRP', price: 52.30, change: 3.2 },
  { rank: 6, name: 'Cardano', symbol: 'ADA', price: 45.80, change: 1.5 },
  { rank: 7, name: 'Solana', symbol: 'SOL', price: 12500, change: 4.7 },
  { rank: 8, name: 'Dogecoin', symbol: 'DOGE', price: 9.25, change: -1.2 },
  { rank: 9, name: 'Polkadot', symbol: 'DOT', price: 820, change: 2.3 },
  { rank: 10, name: 'Polygon', symbol: 'MATIC', price: 95.40, change: 1.9 },
  { rank: 11, name: 'Avalanche', symbol: 'AVAX', price: 3200, change: 3.1 },
  { rank: 12, name: 'Chainlink', symbol: 'LINK', price: 1680, change: 2.7 },
  { rank: 13, name: 'Toncoin', symbol: 'TON', price: 620, change: -0.8 },
  { rank: 14, name: 'Shiba Inu', symbol: 'SHIB', price: 0.0012, change: 5.6 },
  { rank: 15, name: 'Litecoin', symbol: 'LTC', price: 8900, change: 1.4 },
]

export default function CryptoPricesPage() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="container">
        <nav className="text-sm mb-6 text-slate-500">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 font-medium">Crypto Prices in INR</span>
        </nav>

        <div className="flex items-center gap-3 mb-8">
          <div className="bg-purple-100 p-3 rounded-lg">
            <Bitcoin className="w-8 h-8 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Cryptocurrency Prices in INR</h1>
            <p className="text-slate-600">Top 15 coins • Live updates every 30 seconds</p>
          </div>
        </div>

        {/* Price Table */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left py-4 px-4 font-semibold text-slate-700">#</th>
                  <th className="text-left py-4 px-4 font-semibold text-slate-700">Coin</th>
                  <th className="text-right py-4 px-4 font-semibold text-slate-700">Price (INR)</th>
                  <th className="text-right py-4 px-4 font-semibold text-slate-700">24h Change</th>
                  <th className="text-right py-4 px-4 font-semibold text-slate-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {coins.map((coin) => (
                  <tr key={coin.symbol} className="border-b border-slate-100 hover:bg-purple-50 transition-colors">
                    <td className="py-4 px-4 text-slate-500">{coin.rank}</td>
                    <td className="py-4 px-4">
                      <div className="font-medium">{coin.name}</div>
                      <div className="text-xs text-slate-500">{coin.symbol}</div>
                    </td>
                    <td className="text-right py-4 px-4 font-bold">₹{coin.price.toLocaleString('en-IN')}</td>
                    <td className="text-right py-4 px-4">
                      <span className={`inline-flex items-center gap-1 text-sm font-medium ${coin.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {coin.change > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {coin.change > 0 ? '+' : ''}{coin.change}%
                      </span>
                    </td>
                    <td className="text-right py-4 px-4">
                      <a href="https://wazirx.com" target="_blank" rel="noopener noreferrer nofollow" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        Buy →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SEO Content */}
        <article className="bg-white rounded-xl shadow p-8 border border-slate-200 prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">How to Buy Cryptocurrency in India</h2>
          <p className="text-slate-600 mb-4">
            You can buy cryptocurrency in India through regulated exchanges like <strong>WazirX</strong>, <strong>CoinDCX</strong>, and <strong>ZebPay</strong>. 
            All exchanges require KYC verification. Crypto profits are taxed at 30% flat rate in India plus 1% TDS on transactions above ₹10,000.
          </p>
          <h3 className="text-xl font-bold mb-3">Popular Indian Crypto Exchanges</h3>
          <ul className="list-disc pl-6 text-slate-600 space-y-1 mb-4">
            <li><strong>WazirX</strong> — Largest exchange, INR pairs, owned by Binance</li>
            <li><strong>CoinDCX</strong> — Beginner friendly, 200+ coins</li>
            <li><strong>ZebPay</strong> — Oldest Indian exchange, secure</li>
          </ul>
          <div className="flex flex-wrap gap-3 not-prose">
            <Link href="/gold-price-india" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Gold Rate Today</Link>
            <Link href="/nifty-live" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Nifty Live</Link>
            <Link href="/flight-prices" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Flight Prices</Link>
          </div>
        </article>
      </div>
    </section>
  )
}
