import { Metadata } from 'next'
import Link from 'next/link'
import { Bitcoin, TrendingUp, TrendingDown } from 'lucide-react'
import { fetchCryptoPrices } from '@/lib/fetchPrices'

export const metadata: Metadata = {
  title: 'Cryptocurrency Prices in INR - Bitcoin, Ethereum & Top 15 Live',
  description: 'Live cryptocurrency prices in Indian Rupees (INR). Bitcoin, Ethereum + top 15 coins with 24h change. Updated every 60 seconds via CoinGecko.',
  keywords: ['bitcoin price inr', 'cryptocurrency prices india', 'ethereum to inr', 'crypto prices inr live', 'bitcoin rate in indian rupees', 'best crypto to buy india'],
  alternates: { canonical: 'https://livepriceindia.vercel.app/crypto-prices-inr' },
}

export const revalidate = 60

export default async function CryptoPricesPage() {
  const coins = await fetchCryptoPrices()

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="container">
        <nav className="text-sm mb-6 text-slate-700">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 font-medium">Crypto Prices in INR</span>
        </nav>

        <div className="flex items-center gap-3 mb-8">
          <div className="bg-purple-100 p-3 rounded-lg">
            <Bitcoin className="w-8 h-8 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Cryptocurrency Prices in INR</h1>
            <p className="text-slate-700">Top {coins.length} coins • Live from CoinGecko • Updated every 60 seconds</p>
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
                {coins.map((coin, i) => (
                  <tr key={coin.id} className="border-b border-slate-100 hover:bg-purple-50 transition-colors">
                    <td className="py-4 px-4 text-slate-700 font-medium">{i + 1}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        {coin.image && <img src={coin.image} alt={coin.name} className="w-6 h-6 rounded-full" />}
                        <div>
                          <div className="font-medium">{coin.name}</div>
                          <div className="text-xs text-slate-600 font-medium">{coin.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right py-4 px-4 font-bold text-slate-900">₹{(coin.price || 0).toLocaleString('en-IN', { maximumFractionDigits: 2 })}</td>
                    <td className="text-right py-4 px-4">
                      <span className={`inline-flex items-center gap-1 text-sm font-medium ${coin.change24h > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {coin.change24h > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {coin.change24h > 0 ? '+' : ''}{coin.change24h}%
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
            <li><strong>WazirX</strong> — Largest exchange, INR pairs</li>
            <li><strong>CoinDCX</strong> — Beginner friendly, 200+ coins</li>
            <li><strong>ZebPay</strong> — Oldest Indian exchange, secure</li>
          </ul>
          <div className="flex flex-wrap gap-3 not-prose">
            <Link href="/gold-price-india" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Gold Rate Today</Link>
            <Link href="/nifty-live" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">Nifty Live</Link>
            <Link href="/cricket-live" className="text-primary-600 hover:underline text-sm bg-primary-50 px-3 py-1 rounded-full">🏏 Live Cricket</Link>
          </div>
        </article>
      </div>
    </section>
  )
}
