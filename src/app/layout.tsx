import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://livepriceindia.com'),
  title: {
    default: 'Live Gold, Petrol, Crypto & Flight Prices India | LivePriceIndia',
    template: '%s | LivePriceIndia'
  },
  description: 'Real-time gold rates, petrol prices, Nifty levels, crypto prices & flight fare tracker for Pune, Mumbai, Delhi. Updated every minute. Free alerts!',
  keywords: [
    'gold price today',
    'petrol price india',
    'nifty live',
    'crypto prices inr',
    'flight price tracker',
    'gold rate pune',
    'bank nifty live',
    'bitcoin price inr'
  ],
  authors: [{ name: 'LivePriceIndia' }],
  creator: 'LivePriceIndia',
  publisher: 'LivePriceIndia',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://livepriceindia.com',
    title: 'Live Gold, Petrol, Crypto & Flight Prices India',
    description: 'Real-time financial prices for India. Track gold, silver, petrol, Nifty, crypto & flight prices.',
    siteName: 'LivePriceIndia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LivePriceIndia - Real-time Financial Prices'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Gold, Petrol, Crypto & Flight Prices India',
    description: 'Real-time financial prices tracking for India',
    images: ['/og-image.jpg'],
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
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
