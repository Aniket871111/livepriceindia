import { Metadata } from 'next'
import Link from 'next/link'
import { Users, Target, Shield, TrendingUp, Heart, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About LivePriceIndia - India\'s #1 Free Real-Time Price Tracker',
  description: 'LivePriceIndia provides free real-time gold rates, petrol prices, Nifty live data, cryptocurrency rates in INR, and flight prices across India. Trusted by 10K+ users daily.',
  alternates: { canonical: 'https://livepriceindia.vercel.app/about' },
}

export default function AboutPage() {
  return (
    <section className="py-8 md:py-16">
      <div className="container max-w-4xl">
        <nav className="text-sm mb-6 text-slate-500">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 font-medium">About Us</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">About LivePriceIndia</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            LivePriceIndia is India&apos;s free, real-time financial price tracking platform. We help millions of Indians make 
            smarter financial decisions by providing instant access to gold rates, petrol prices, stock market data, 
            cryptocurrency prices, and flight fares — all in one place.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 not-prose">
            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <TrendingUp className="w-10 h-10 text-primary-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary-700">5+</div>
              <div className="text-sm text-slate-600">Price Categories</div>
            </div>
            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <Globe className="w-10 h-10 text-primary-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary-700">8+</div>
              <div className="text-sm text-slate-600">Indian Cities Covered</div>
            </div>
            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <Heart className="w-10 h-10 text-primary-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary-700">100%</div>
              <div className="text-sm text-slate-600">Free Forever</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-slate-600 mb-6">
            Financial information in India is fragmented across dozens of websites. We built LivePriceIndia to be the 
            <strong>single dashboard</strong> where Indians can track all essential prices in one place — free, fast, and accurate.
          </p>

          <h2 className="text-2xl font-bold mb-4">What We Track</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 not-prose">
            {[
              { title: '🪙 Gold & Silver Rates', desc: 'Live 22K/24K gold and silver prices for 8+ cities' },
              { title: '⛽ Petrol & Diesel Prices', desc: 'Daily fuel rates updated at 6 AM for all major cities' },
              { title: '📈 Nifty & Bank Nifty', desc: 'Real-time stock market with support/resistance levels' },
              { title: '₿ Cryptocurrency in INR', desc: 'Top 15 crypto prices with direct INR conversion' },
              { title: '✈️ Flight Prices', desc: 'Cheapest flights from Pune to top destinations' },
              { title: '🔔 Price Alerts', desc: 'Get notified when prices hit your target (coming soon)' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-4 bg-slate-50 rounded-lg">
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-slate-600">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Data Sources</h2>
          <p className="text-slate-600 mb-6">
            Our prices are sourced from official APIs and trusted data providers including NSE India, LBMA, 
            oil marketing companies (IOCL, BPCL, HPCL), CoinGecko, and airline aggregators. 
            Data is refreshed every 30 seconds to 1 hour depending on the category.
          </p>

          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-slate-600 mb-4">
            Have questions, suggestions, or partnership inquiries? We&apos;d love to hear from you.
          </p>
          <ul className="text-slate-600 space-y-2">
            <li>📧 Email: <a href="mailto:hello@livepriceindia.vercel.app" className="text-primary-600 hover:underline">hello@livepriceindia.vercel.app</a></li>
            <li>🌐 Website: <a href="https://livepriceindia.vercel.app" className="text-primary-600 hover:underline">livepriceindia.vercel.app</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
