import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Providers } from './providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = process.env.SITE_URL || 'https://livepriceindia.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Gold Rate Today, Petrol Price, Nifty Live, Crypto INR & Flight Tracker | LivePriceIndia',
    template: '%s | LivePriceIndia'
  },
  description: 'Check today\'s gold rate in Pune, Mumbai & Delhi. Live petrol price, Nifty 50 chart, Bitcoin price in INR & cheap flight tracker. Updated every minute. 100% free alerts!',
  keywords: [
    'gold rate today pune',
    'gold price today mumbai',
    'petrol price today india',
    'diesel price today',
    'nifty 50 live chart',
    'bank nifty live today',
    'bitcoin price in inr',
    'crypto prices india',
    'silver rate today',
    'cheapest flights from pune',
    'gold rate today delhi',
    'petrol price pune today',
    'ethereum price inr',
    'flight price tracker india'
  ],
  authors: [{ name: 'LivePriceIndia' }],
  creator: 'LivePriceIndia',
  publisher: 'LivePriceIndia',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    title: 'Gold Rate Today, Petrol Price, Nifty Live, Crypto INR | LivePriceIndia',
    description: 'Check today gold rate, petrol price, Nifty 50 live chart, Bitcoin INR price & cheapest flights from Pune, Mumbai, Delhi. Free alerts!',
    siteName: 'LivePriceIndia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Gold, Petrol, Crypto & Flight Prices India',
    description: 'Real-time financial prices tracking for India',
    creator: '@livepriceindia'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#0284c7',
  },
  verification: {
    google: 'googlee29e8d7fc27c5500',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9858531287299681"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
