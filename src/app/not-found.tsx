import { Metadata } from 'next'
import Link from 'next/link'
import { Home, Search, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found - LivePriceIndia',
  description: 'The page you are looking for does not exist. Browse LivePriceIndia for live gold rates, petrol prices, Nifty data, and more.',
}

export default function NotFound() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-2xl text-center">
        <div className="text-8xl font-bold text-primary-200 mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-slate-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/" className="btn-primary inline-flex items-center justify-center gap-2">
            <Home className="w-5 h-5" /> Go to Homepage
          </Link>
          <Link href="/gold-price-india" className="btn-secondary inline-flex items-center justify-center gap-2">
            <Search className="w-5 h-5" /> Check Gold Rate
          </Link>
        </div>

        <div className="bg-slate-50 rounded-xl p-6">
          <h2 className="font-semibold mb-4">Popular Pages</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/gold-price-india" className="text-primary-600 hover:underline text-sm bg-white px-4 py-2 rounded-full border border-slate-200">Gold Rate Today</Link>
            <Link href="/petrol-price-india" className="text-primary-600 hover:underline text-sm bg-white px-4 py-2 rounded-full border border-slate-200">Petrol Price</Link>
            <Link href="/nifty-live" className="text-primary-600 hover:underline text-sm bg-white px-4 py-2 rounded-full border border-slate-200">Nifty Live</Link>
            <Link href="/crypto-prices-inr" className="text-primary-600 hover:underline text-sm bg-white px-4 py-2 rounded-full border border-slate-200">Crypto INR</Link>
            <Link href="/flight-prices" className="text-primary-600 hover:underline text-sm bg-white px-4 py-2 rounded-full border border-slate-200">Flight Prices</Link>
            <Link href="/gold-price-pune" className="text-primary-600 hover:underline text-sm bg-white px-4 py-2 rounded-full border border-slate-200">Gold Rate Pune</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
