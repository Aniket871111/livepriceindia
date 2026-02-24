import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MessageSquare, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - LivePriceIndia',
  description: 'Contact LivePriceIndia for inquiries, feedback, or partnership requests. We track live gold rates, petrol prices, Nifty data, and crypto prices across India.',
}

export default function ContactPage() {
  return (
    <section className="py-8 md:py-16">
      <div className="container max-w-4xl">
        <nav className="text-sm mb-6 text-slate-500">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-900 font-medium">Contact Us</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-slate-600 mb-10">
          Have questions, feedback, or partnership inquiries? We&apos;d love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-primary-50 rounded-xl p-6 text-center">
            <Mail className="w-10 h-10 text-primary-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:hello@livepriceindia.vercel.app" className="text-primary-600 text-sm hover:underline">hello@livepriceindia.vercel.app</a>
          </div>
          <div className="bg-primary-50 rounded-xl p-6 text-center">
            <MessageSquare className="w-10 h-10 text-primary-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Response Time</h3>
            <p className="text-sm text-slate-600">Within 24 hours</p>
          </div>
          <div className="bg-primary-50 rounded-xl p-6 text-center">
            <MapPin className="w-10 h-10 text-primary-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-slate-600">Pune, Maharashtra, India</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
              <select id="subject" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20">
                <option>General Inquiry</option>
                <option>Report a Bug</option>
                <option>Partnership / Advertising</option>
                <option>Feature Request</option>
                <option>Data Correction</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="btn-primary px-8 py-3">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
