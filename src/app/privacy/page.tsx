import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - LivePriceIndia',
  description: 'Privacy Policy for LivePriceIndia. Learn how we collect, use, and protect your personal information when using our real-time price tracking services.',
}

export default function PrivacyPage() {
  return (
    <section className="py-8 md:py-16">
      <div className="container max-w-4xl">
        <nav className="text-sm mb-6 text-slate-700">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 font-medium">Privacy Policy</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
        <p className="text-slate-700 mb-8">Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        
        <div className="prose max-w-none text-slate-600">
          <h2 className="text-2xl font-bold text-slate-900">1. Introduction</h2>
          <p>
            LivePriceIndia (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the website <strong>livepriceindia.vercel.app</strong>. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">2. Information We Collect</h2>
          <h3 className="text-xl font-semibold text-slate-800">Information You Provide</h3>
          <ul>
            <li>Email address (if you subscribe to price alerts or newsletter)</li>
            <li>City preference for localized pricing</li>
          </ul>
          <h3 className="text-xl font-semibold text-slate-800">Automatically Collected Information</h3>
          <ul>
            <li>Browser type and version</li>
            <li>Device type (mobile, desktop, tablet)</li>
            <li>IP address and approximate location</li>
            <li>Pages visited and time spent</li>
            <li>Referral source</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900">3. How We Use Your Information</h2>
          <ul>
            <li>To provide real-time price data relevant to your city</li>
            <li>To send price alerts you&apos;ve subscribed to</li>
            <li>To improve our website content and user experience</li>
            <li>To display relevant advertisements via Google AdSense</li>
            <li>To analyze traffic patterns using Google Analytics</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900">4. Cookies & Tracking</h2>
          <p>
            We use cookies and similar technologies to enhance your experience. This includes:
          </p>
          <ul>
            <li><strong>Essential cookies</strong> — Required for site functionality</li>
            <li><strong>Analytics cookies</strong> — Google Analytics for traffic analysis</li>
            <li><strong>Advertising cookies</strong> — Google AdSense for personalized ads</li>
          </ul>
          <p>You can control cookies through your browser settings.</p>

          <h2 className="text-2xl font-bold text-slate-900">5. Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li><strong>Google Analytics</strong> — Website analytics</li>
            <li><strong>Google AdSense</strong> — Advertising</li>
            <li><strong>Vercel</strong> — Website hosting</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900">6. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data. Our website is served over HTTPS, 
            and we do not store sensitive financial information.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Disable cookies through browser settings</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900">8. Contact Us</h2>
          <p>
            For privacy-related queries, contact us at: <a href="mailto:hello@livepriceindia.vercel.app" className="text-primary-600">hello@livepriceindia.vercel.app</a>
          </p>
        </div>
      </div>
    </section>
  )
}
