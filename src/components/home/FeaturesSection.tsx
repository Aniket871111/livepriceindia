import { Bell, Smartphone, BarChart3, Zap, Shield, Globe } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Live price updates every 30-60 seconds across all assets',
      color: 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/10'
    },
    {
      icon: Bell,
      title: 'Smart Price Alerts',
      description: 'Get notified via email, SMS, or WhatsApp when prices hit your target',
      color: 'text-primary-600 bg-primary-50 dark:bg-primary-900/10'
    },
    {
      icon: BarChart3,
      title: 'Advanced Charts',
      description: 'Interactive charts with historical data and trend analysis',
      color: 'text-purple-600 bg-purple-50 dark:bg-purple-900/10'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Perfect experience on all devices. Install as PWA for offline access',
      color: 'text-green-600 bg-green-50 dark:bg-green-900/10'
    },
    {
      icon: Shield,
      title: 'Verified Data',
      description: 'All prices sourced from official exchanges and verified sources',
      color: 'text-red-600 bg-red-50 dark:bg-red-900/10'
    },
    {
      icon: Globe,
      title: 'Multi-city Support',
      description: 'Track prices across 10+ major Indian cities including Pune, Mumbai, Delhi',
      color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/10'
    },
  ]

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose LivePriceIndia?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive price tracking with powerful features to help you make informed decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
