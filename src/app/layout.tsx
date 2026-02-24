import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Providers } from './providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://livepriceindia.vercel.app'),
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://livepriceindia.vercel.app',
    title: 'Gold Rate Today, Petrol Price, Nifty Live, Crypto INR | LivePriceIndia',
    description: 'Check today gold rate, petrol price, Nifty 50 live chart, Bitcoin INR price & cheapest flights from Pune, Mumbai, Delhi. Free alerts!',
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
      <head>
        <meta name="google-site-verification" content="googlee29e8d7fc27c5500" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9858531287299681"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
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
