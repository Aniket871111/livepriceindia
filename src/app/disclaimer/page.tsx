import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Disclaimer - LivePriceIndia',
  description: 'Disclaimer for LivePriceIndia. Price data is for informational purposes only and should not be considered financial advice.',
}

export default function DisclaimerPage() {
  return (
    <section className="py-8 md:py-16">
      <div className="container max-w-4xl">
        <nav className="text-sm mb-6 text-slate-700">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 font-medium">Disclaimer</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Disclaimer</h1>
        <p className="text-slate-700 mb-8">Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        
        <div className="prose max-w-none text-slate-600">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8 not-prose">
            <p className="font-semibold text-yellow-800">⚠️ Important Notice</p>
            <p className="text-yellow-700 mt-2">
              All prices displayed on LivePriceIndia are for <strong>informational purposes only</strong> and should not be 
              considered as financial, investment, or trading advice. Always verify prices with official sources before 
              making financial decisions.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">1. No Financial Advice</h2>
          <p>
            LivePriceIndia is an <strong>information aggregator</strong>. We do not provide financial advice, investment recommendations, 
            or trading signals. Any decisions made based on information from this website are at your own risk. 
            Always consult a SEBI-registered financial advisor before making investment decisions.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">2. Price Accuracy</h2>
          <p>
            While we strive to provide the most accurate and up-to-date prices, we cannot guarantee 100% accuracy at all times. 
            Price data may have a slight delay (30 seconds to a few minutes) from real-time market prices. 
            Prices may differ from actual transaction prices at jewellers, fuel stations, exchanges, or airlines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">3. Data Sources</h2>
          <p>
            Our data is sourced from publicly available APIs and third-party providers. We do not own or control these data sources. 
            Any interruptions or inaccuracies from upstream providers will be reflected on our platform.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">4. No Guarantee of Returns</h2>
          <p>
            Past price trends and historical data shown on this website do not guarantee future performance. 
            Investments in gold, stocks, and cryptocurrency carry inherent risks. You may lose some or all of your invested capital.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">5. Third-Party Links</h2>
          <p>
            Our website may contain links to external websites (exchanges, booking platforms, etc.). We are not responsible 
            for the content, accuracy, or practices of these third-party websites.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">6. Limitation of Liability</h2>
          <p>
            LivePriceIndia shall not be held liable for any financial loss, damage, or inconvenience caused by reliance on 
            information provided on this website. Use this website at your own discretion.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">7. Contact</h2>
          <p>
            If you have questions about this disclaimer, please contact us at: 
            <a href="mailto:hello@livepriceindia.vercel.app" className="text-primary-600"> hello@livepriceindia.vercel.app</a>
          </p>
        </div>
      </div>
    </section>
  )
}
