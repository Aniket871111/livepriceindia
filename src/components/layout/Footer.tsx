import Link from 'next/link'
import { TrendingUp, Twitter, Facebook, Instagram, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Quick Links': [
      { label: 'Gold Price Today', href: '/gold-price-india' },
      { label: 'Petrol Price Today', href: '/petrol-price-india' },
      { label: 'Nifty Live Chart', href: '/nifty-live' },
      { label: 'Crypto Prices INR', href: '/crypto-prices-inr' },
      { label: 'Flight Price Tracker', href: '/flight-prices' },
    ],
    'Cities': [
      { label: 'Pune', href: '/gold-price-pune' },
      { label: 'Mumbai', href: '/gold-price-mumbai' },
      { label: 'Delhi', href: '/gold-price-delhi' },
      { label: 'Bangalore', href: '/gold-price-bangalore' },
      { label: 'All Cities', href: '/cities' },
    ],
    'Resources': [
      { label: 'Blog', href: '/blog' },
      { label: 'Price Alerts', href: '/alerts' },
      { label: 'API Documentation', href: '/api-docs' },
      { label: 'Calculators', href: '/calculators' },
      { label: 'About Us', href: '/about' },
    ],
    'Legal': [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Disclaimer', href: '/disclaimer' },
      { label: 'Contact Us', href: '/contact' },
    ],
  }

  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <Mail className="w-12 h-12 mx-auto mb-4 text-primary-500" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Get Daily Price Updates
            </h3>
            <p className="text-slate-400 mb-6">
              Subscribe to receive gold, petrol, crypto & stock prices in your inbox every morning
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe Free
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">LivePrice</span>
                <span className="text-xl font-bold text-gold-500">India</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 mb-4">
              Real-time financial prices for India. Track gold, petrol, crypto, stocks & flight prices.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear} LivePriceIndia. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Prices are for reference only. Please verify before making decisions.
          </p>
        </div>
      </div>
    </footer>
  )
}
