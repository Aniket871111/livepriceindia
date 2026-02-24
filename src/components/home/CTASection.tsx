import Link from 'next/link'
import { ArrowRight, Bell } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <Bell className="w-16 h-16 mx-auto mb-6 opacity-90" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Never Miss a Price Change Again
          </h2>
          
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Set up free price alerts and get notified instantly when gold, petrol, crypto, or flight prices change
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/alerts"
              className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Setup Free Alerts
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="/premium"
              className="bg-primary-800 hover:bg-primary-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2 w-full sm:w-auto justify-center border-2 border-primary-500"
            >
              Explore Premium Features
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>10,000+ users trust us</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
