import Link from 'next/link'
import { ArrowRight, Bell, Zap, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-primary-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Zap className="w-4 h-4" />
            Live updates every minute
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-primary-600 to-slate-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent animate-slide-up">
            Gold Rate Today, Petrol Price & Nifty Live — Track All Prices in India
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto animate-slide-up">
            Free real-time <span className="font-semibold text-gold-600">Gold & Silver rates</span>, 
            <span className="font-semibold text-orange-600"> Petrol & Diesel prices</span>, 
            <span className="font-semibold text-primary-600"> Nifty 50 & Bank Nifty</span>, 
            <span className="font-semibold text-purple-600"> Crypto prices in INR</span> &amp; 
            <span className="font-semibold text-blue-600"> cheapest flights</span> — updated every minute for 8+ Indian cities
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
            <Link
              href="#dashboard"
              className="btn-primary flex items-center gap-2 text-lg px-8 py-3 w-full sm:w-auto justify-center"
            >
              View Live Prices
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="btn-secondary flex items-center gap-2 text-lg px-8 py-3 w-full sm:w-auto justify-center"
            >
              <Bell className="w-5 h-5" />
              Contact Us
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-slate-600 dark:text-slate-400 animate-fade-in">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-success-600" />
              <span>Verified Sources</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary-600" />
              <span>Real-time Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-gold-600" />
              <span>Free Alerts</span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: '10+', label: 'Cities Covered' },
              { value: '5', label: 'Asset Categories' },
              { value: '24/7', label: 'Price Tracking' },
              { value: 'Free', label: 'Basic Access' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
