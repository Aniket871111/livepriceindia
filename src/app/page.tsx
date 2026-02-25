import Hero from '@/components/home/Hero'
import LiveTicker from '@/components/home/LiveTicker'
import DashboardCards from '@/components/home/DashboardCards'
import FeaturesSection from '@/components/home/FeaturesSection'
import CTASection from '@/components/home/CTASection'
import Script from 'next/script'
import Link from 'next/link'

export const revalidate = 60 // Revalidate every 60 seconds (ISR)

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'LivePriceIndia',
  url: 'https://livepriceindia.vercel.app',
  description: 'Real-time gold rate, petrol price, Nifty live chart, crypto prices in INR & flight tracker for India.',
  areaServed: { '@type': 'Country', name: 'India' },
  sameAs: [
    'https://twitter.com/livepriceindia',
    'https://facebook.com/livepriceindia',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is today\'s gold rate in Pune?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can check today\'s live 24K and 22K gold rate in Pune on LivePriceIndia. Prices are sourced from live markets and updated every 5 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is today\'s petrol price in Mumbai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Today\'s petrol and diesel prices in Mumbai are available on LivePriceIndia. Fuel prices in India are revised daily at 6 AM by oil marketing companies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to check live Nifty 50 support and resistance levels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can check live Nifty 50 and Bank Nifty support & resistance levels on LivePriceIndia. Our system auto-calculates levels using pivot point analysis updated in real-time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Bitcoin price in INR today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check the live Bitcoin price in Indian Rupees on LivePriceIndia. We track top 15 cryptocurrency prices in INR with 30-second updates.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to find cheapest flights from Pune?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the LivePriceIndia flight tracker to compare Pune to Goa, Delhi, Mumbai and other routes. We track IndiGo, SpiceJet, Air India prices and alert you on price drops.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LiveTicker />
      <Hero />
      <DashboardCards />
      <PopularCities />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
    </>
  )
}

/* Popular Cities Section — Internal Linking for SEO */
function PopularCities() {
  const goldCities = [
    { name: 'Pune', href: '/gold-price-pune' },
    { name: 'Mumbai', href: '/gold-price-mumbai' },
    { name: 'Delhi', href: '/gold-price-delhi' },
    { name: 'Bangalore', href: '/gold-price-bangalore' },
    { name: 'Hyderabad', href: '/gold-price-hyderabad' },
    { name: 'Chennai', href: '/gold-price-chennai' },
  ]
  const petrolCities = [
    { name: 'Pune', href: '/petrol-price-pune' },
    { name: 'Mumbai', href: '/petrol-price-mumbai' },
    { name: 'Delhi', href: '/petrol-price-delhi' },
    { name: 'Bangalore', href: '/petrol-price-bangalore' },
    { name: 'Hyderabad', href: '/petrol-price-hyderabad' },
    { name: 'Chennai', href: '/petrol-price-chennai' },
  ]

  return (
    <section className="py-12 bg-slate-50">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Check Prices by City</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-yellow-700">🪙 Gold Rate by City</h3>
            <div className="flex flex-wrap gap-2">
              {goldCities.map((city) => (
                <Link key={city.href} href={city.href} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium hover:border-yellow-400 hover:bg-yellow-50 transition-colors">
                  Gold Rate {city.name}
                </Link>
              ))}
              <Link href="/gold-price-india" className="px-4 py-2 bg-yellow-100 border border-yellow-300 rounded-full text-sm font-medium text-yellow-800 hover:bg-yellow-200 transition-colors">
                All Cities →
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-orange-700">⛽ Petrol Price by City</h3>
            <div className="flex flex-wrap gap-2">
              {petrolCities.map((city) => (
                <Link key={city.href} href={city.href} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium hover:border-orange-400 hover:bg-orange-50 transition-colors">
                  Petrol {city.name}
                </Link>
              ))}
              <Link href="/petrol-price-india" className="px-4 py-2 bg-orange-100 border border-orange-300 rounded-full text-sm font-medium text-orange-800 hover:bg-orange-200 transition-colors">
                All Cities →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* FAQ Section — Matches JSON-LD FAQ Schema */
function FAQSection() {
  const faqs = [
    { q: 'What is today\'s gold rate in Pune?', a: 'You can check today\'s live 24K and 22K gold rate in Pune on LivePriceIndia. Prices are sourced from live markets and updated every 5 minutes.' },
    { q: 'What is today\'s petrol price in Mumbai?', a: 'Today\'s petrol and diesel prices in Mumbai are available on LivePriceIndia. Fuel prices in India are revised daily at 6 AM by oil marketing companies.' },
    { q: 'How to check live Nifty 50 support and resistance levels?', a: 'You can check live Nifty 50 and Bank Nifty support & resistance levels on LivePriceIndia. Our system auto-calculates levels using pivot point analysis updated in real-time.' },
    { q: 'What is Bitcoin price in INR today?', a: 'Check the live Bitcoin price in Indian Rupees on LivePriceIndia. We track top 15 cryptocurrency prices in INR with 30-second updates.' },
    { q: 'How to find cheapest flights from Pune?', a: 'Use the LivePriceIndia flight tracker to compare Pune to Goa, Delhi, Mumbai and other routes. We track IndiGo, SpiceJet, Air India prices and alert you on price drops.' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-slate-900 flex items-center justify-between hover:bg-slate-100 transition-colors">
                {faq.q}
                <span className="text-primary-600 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-6 pb-4 text-slate-600">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
