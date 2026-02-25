import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { TrendingUp, BarChart3, Target, ShieldCheck, Zap, BookOpen, ArrowRight, AlertTriangle, DollarSign, LineChart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Stock Market Strategy India 2024 - Nifty, Bank Nifty & Intraday Trading Guide',
  description: 'Complete stock market strategy guide for Indian traders. Learn Nifty 50, Bank Nifty trading strategies, intraday tips, swing trading, support & resistance levels, and risk management. Free for beginners.',
  keywords: [
    'stock market strategy india', 'nifty trading strategy', 'bank nifty strategy',
    'intraday trading tips', 'swing trading india', 'support resistance nifty',
    'stock market for beginners india', 'option trading strategy', 'nifty 50 levels today',
    'how to trade nifty', 'best stock market strategy', 'risk management trading'
  ],
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best strategy for Nifty 50 trading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best Nifty 50 strategy combines support/resistance levels, moving averages (20 EMA, 50 EMA), and RSI. For intraday, use 15-minute candles with VWAP. For swing trading, use daily charts with 200 DMA. Always maintain a 1:2 risk-reward ratio.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much money do I need to start trading in the Indian stock market?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can start with as little as ₹500 for delivery trades. For intraday trading, ₹10,000-₹25,000 is recommended. For F&O (Futures & Options), you need ₹1-2 lakhs minimum margin. Start small and increase as you learn.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best intraday trading strategies for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Best intraday strategies for beginners: 1) Opening Range Breakout (ORB) - trade breakout of first 15-30 min range, 2) VWAP strategy - buy above VWAP, sell below, 3) Moving Average Crossover - 9 EMA crossing 21 EMA. Always use stop-loss and risk only 1-2% per trade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Bank Nifty good for option trading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Bank Nifty is one of the most popular indices for option trading in India due to high volatility and liquidity. Weekly options expiry is every Wednesday. Popular strategies include straddle, strangle, iron condor, and bull/bear spreads.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Stock Market Strategy India 2024 - Complete Trading Guide',
  description: 'Comprehensive guide to stock market strategies for Indian traders covering Nifty 50, Bank Nifty, intraday, swing trading and more.',
  author: { '@type': 'Organization', name: 'LivePriceIndia' },
  publisher: { '@type': 'Organization', name: 'LivePriceIndia' },
  datePublished: '2024-01-01',
  dateModified: new Date().toISOString().split('T')[0],
}

export default function StockMarketStrategyPage() {
  const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero Section */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container">
          <nav className="text-sm mb-6 text-slate-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-900 font-medium">Stock Market Strategy</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <BarChart3 className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Stock Market Strategy India 2024</h1>
              <p className="text-slate-700">Complete Guide for Nifty, Bank Nifty & Intraday Trading • {today}</p>
            </div>
          </div>

          <p className="text-lg text-slate-700 max-w-3xl mb-8">
            Learn proven stock market strategies used by professional Indian traders. From beginner-friendly swing trades 
            to advanced Nifty/Bank Nifty option strategies — everything you need to start trading with confidence.
          </p>

          {/* Quick Navigation */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 mb-10">
            <h2 className="font-bold text-lg text-slate-900 mb-3">📑 Quick Navigation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {[
                { label: 'Nifty 50 Trading Strategy', anchor: '#nifty-strategy' },
                { label: 'Bank Nifty Strategy', anchor: '#bank-nifty-strategy' },
                { label: 'Intraday Trading Tips', anchor: '#intraday-tips' },
                { label: 'Swing Trading Guide', anchor: '#swing-trading' },
                { label: 'Option Trading Strategies', anchor: '#option-strategies' },
                { label: 'Risk Management Rules', anchor: '#risk-management' },
                { label: 'Technical Analysis Basics', anchor: '#technical-analysis' },
                { label: 'Beginner Mistakes to Avoid', anchor: '#mistakes' },
                { label: 'FAQ', anchor: '#faq' },
              ].map((item) => (
                <a key={item.anchor} href={item.anchor} className="text-blue-600 hover:text-blue-800 hover:underline text-sm flex items-center gap-1">
                  <ArrowRight className="w-3 h-3" /> {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Section 1: Nifty 50 Strategy */}
          <div id="nifty-strategy" className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-slate-900">Nifty 50 Trading Strategy</h2>
            </div>
            <p className="text-slate-700 mb-4">
              Nifty 50 is India&apos;s benchmark index comprising the top 50 companies listed on NSE. It&apos;s the most traded 
              index in India with very high liquidity and tight spreads, making it ideal for both beginners and professionals.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-3">Key Nifty 50 Levels to Watch</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Strong Support', value: '23,200', color: 'text-green-700 bg-green-50' },
                { label: 'Immediate Support', value: '23,500', color: 'text-green-600 bg-green-50' },
                { label: 'Immediate Resistance', value: '24,200', color: 'text-red-600 bg-red-50' },
                { label: 'Strong Resistance', value: '24,500', color: 'text-red-700 bg-red-50' },
              ].map((level) => (
                <div key={level.label} className={`rounded-lg p-4 text-center ${level.color}`}>
                  <div className="text-sm font-medium">{level.label}</div>
                  <div className="text-xl font-bold">{level.value}</div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">Nifty 50 Intraday Strategy</h3>
            <div className="bg-blue-50 rounded-lg p-6 mb-4">
              <ol className="list-decimal pl-5 space-y-2 text-slate-800">
                <li><strong>Opening Range Breakout (ORB):</strong> Wait for the first 15 minutes. Mark the high and low. Buy above the high with stop-loss at the low. Sell below the low with stop-loss at the high.</li>
                <li><strong>VWAP Strategy:</strong> If Nifty is trading above VWAP (Volume Weighted Average Price), look for buying opportunities. Below VWAP, look for selling.</li>
                <li><strong>EMA Crossover:</strong> Use 9 EMA and 21 EMA on 5-minute chart. Buy when 9 EMA crosses above 21 EMA. Sell on the reverse.</li>
                <li><strong>Support/Resistance Bounce:</strong> Pre-mark daily support/resistance zones. Enter when price bounces from these levels with confirmation candle.</li>
              </ol>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">Nifty 50 Swing Trading Strategy</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
              <li><strong>200 DMA (Daily Moving Average):</strong> If Nifty is above 200 DMA, the trend is bullish — buy on dips. Below 200 DMA, the trend is bearish — sell on rises.</li>
              <li><strong>Weekly chart analysis:</strong> Use Fibonacci retracement levels (38.2%, 50%, 61.8%) to find swing entry points.</li>
              <li><strong>RSI + MACD combo:</strong> RSI below 30 + MACD bullish crossover = strong buy signal. RSI above 70 + MACD bearish crossover = strong sell signal.</li>
              <li><strong>Sector rotation:</strong> Track which sectors (IT, Banking, Pharma) are leading. Rotate your trades to the strongest sectors.</li>
            </ul>
          </div>

          {/* Section 2: Bank Nifty Strategy */}
          <div id="bank-nifty-strategy" className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-slate-900">Bank Nifty Trading Strategy</h2>
            </div>
            <p className="text-slate-700 mb-4">
              Bank Nifty is a high-volatility index consisting of the 12 most liquid banking stocks. It moves 2-3% daily, 
              making it the favorite of intraday and option traders. Weekly options expire every Wednesday.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-3">Bank Nifty Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-purple-800 mb-2">Why Trade Bank Nifty?</h4>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li>✅ High daily volatility (500-1000+ points)</li>
                  <li>✅ Weekly option expiry (more opportunities)</li>
                  <li>✅ High liquidity = tight bid-ask spreads</li>
                  <li>✅ Clear trends due to RBI policy impact</li>
                  <li>✅ Premium collection strategies work well</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <h4 className="font-bold text-amber-800 mb-2">Bank Nifty Risk Factors</h4>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li>⚠️ Sudden moves on RBI announcements</li>
                  <li>⚠️ Global banking crises affect instantly</li>
                  <li>⚠️ Budget day can cause 5%+ moves</li>
                  <li>⚠️ Higher margin requirements than Nifty</li>
                  <li>⚠️ Gap up/down on result days</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">Bank Nifty Intraday Strategy</h3>
            <div className="bg-slate-50 rounded-lg p-6 mb-4">
              <div className="space-y-4 text-slate-800">
                <div>
                  <strong className="text-lg">Strategy 1: CPR (Central Pivot Range)</strong>
                  <p className="mt-1">Calculate yesterday&apos;s High, Low, Close to derive today&apos;s CPR levels. If Bank Nifty opens above CPR = bullish day. Below CPR = bearish. Trade in the direction of the opening.</p>
                </div>
                <div>
                  <strong className="text-lg">Strategy 2: Previous Day High/Low Breakout</strong>
                  <p className="mt-1">Mark yesterday&apos;s high and low. Buy on breakout above high with 100-point stop-loss. Sell below low. Target: 1.5x to 2x of your stop-loss.</p>
                </div>
                <div>
                  <strong className="text-lg">Strategy 3: 9:20 AM Candle Strategy</strong>
                  <p className="mt-1">Wait for the first 5-minute candle (9:15-9:20). If it&apos;s green and above VWAP, go long. If red and below VWAP, go short. Keep SL at the candle&apos;s low/high.</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">Bank Nifty Levels Today</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Strong Support', value: '49,000', color: 'text-green-700 bg-green-50' },
                { label: 'Pivot', value: '49,800', color: 'text-blue-700 bg-blue-50' },
                { label: 'Resistance 1', value: '50,500', color: 'text-red-600 bg-red-50' },
                { label: 'Strong Resistance', value: '51,200', color: 'text-red-700 bg-red-50' },
              ].map((level) => (
                <div key={level.label} className={`rounded-lg p-4 text-center ${level.color}`}>
                  <div className="text-sm font-medium">{level.label}</div>
                  <div className="text-xl font-bold">{level.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Intraday Trading Tips */}
          <div id="intraday-tips" className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-600" />
              <h2 className="text-2xl font-bold text-slate-900">Intraday Trading Tips for Indian Market</h2>
            </div>
            <p className="text-slate-700 mb-4">
              Intraday trading means buying and selling stocks within the same day. All positions must be closed before 3:30 PM. 
              Here are proven intraday strategies for NSE/BSE:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-green-200 rounded-lg p-5 bg-green-50/50">
                <h3 className="font-bold text-green-800 text-lg mb-3">✅ Do&apos;s of Intraday Trading</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>📌 <strong>Always use stop-loss</strong> — Never trade without a stop-loss order</li>
                  <li>📌 <strong>Risk only 1-2% per trade</strong> — If capital is ₹1 lakh, risk max ₹2,000</li>
                  <li>📌 <strong>Trade liquid stocks only</strong> — Reliance, TCS, HDFC Bank, Infosys</li>
                  <li>📌 <strong>Follow one strategy consistently</strong> — Don&apos;t switch strategies daily</li>
                  <li>📌 <strong>Maintain a trading journal</strong> — Record every trade with entry, exit, reason</li>
                  <li>📌 <strong>Trade first 2 hours</strong> — 9:15 AM to 11:30 AM has the most volatility</li>
                  <li>📌 <strong>Check global cues</strong> — US markets, SGX Nifty before opening</li>
                  <li>📌 <strong>Use 2-3 timeframes</strong> — Confirm on 15-min, 5-min, and 1-min charts</li>
                </ul>
              </div>
              <div className="border border-red-200 rounded-lg p-5 bg-red-50/50">
                <h3 className="font-bold text-red-800 text-lg mb-3">❌ Don&apos;ts of Intraday Trading</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>🚫 <strong>Never average down a losing trade</strong> — Cut losses, don&apos;t add to them</li>
                  <li>🚫 <strong>Don&apos;t trade on tips</strong> — Do your own analysis always</li>
                  <li>🚫 <strong>Avoid overtrading</strong> — Max 3-4 trades per day is enough</li>
                  <li>🚫 <strong>Don&apos;t trade during news events</strong> — RBI policy, budget, earnings</li>
                  <li>🚫 <strong>Never use full margin</strong> — Keep 50% cash as buffer</li>
                  <li>🚫 <strong>Don&apos;t carry intraday to next day</strong> — Close all by 3:15 PM</li>
                  <li>🚫 <strong>Avoid penny stocks</strong> — They&apos;re manipulated and illiquid</li>
                  <li>🚫 <strong>Don&apos;t revenge trade</strong> — After a loss, take a break</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">Best Timeframes for Intraday</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-slate-800">Timeframe</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-800">Best For</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-800">Indicators</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-800">Accuracy</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-900">1-minute</td>
                    <td className="py-3 px-4">Scalping (very quick trades)</td>
                    <td className="py-3 px-4">VWAP, Bollinger Bands</td>
                    <td className="py-3 px-4 text-amber-600 font-medium">Low (noisy)</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-900">5-minute</td>
                    <td className="py-3 px-4">Short intraday trades</td>
                    <td className="py-3 px-4">EMA 9/21, RSI</td>
                    <td className="py-3 px-4 text-green-600 font-medium">Good</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-900">15-minute</td>
                    <td className="py-3 px-4">Standard intraday</td>
                    <td className="py-3 px-4">VWAP, CPR, EMA 20</td>
                    <td className="py-3 px-4 text-green-700 font-medium">Very Good</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">1-hour</td>
                    <td className="py-3 px-4">Positional intraday</td>
                    <td className="py-3 px-4">MACD, 50 EMA, S&R</td>
                    <td className="py-3 px-4 text-green-800 font-medium">Excellent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Swing Trading */}
          <div id="swing-trading" className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <LineChart className="w-6 h-6 text-teal-600" />
              <h2 className="text-2xl font-bold text-slate-900">Swing Trading Strategy India</h2>
            </div>
            <p className="text-slate-700 mb-4">
              Swing trading involves holding stocks for 2-15 days to capture short-term price movements. 
              It&apos;s ideal for people with day jobs who can&apos;t watch charts all day.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-3">Step-by-Step Swing Trading Process</h3>
            <div className="space-y-4 mb-6">
              {[
                { step: 1, title: 'Scan for Stocks', desc: 'Use screeners (Chartink, TradingView) to find stocks near support levels, breaking out of consolidation, or showing bullish patterns like cup & handle, flag, or double bottom.' },
                { step: 2, title: 'Check the Trend', desc: 'Ensure the stock is above 50 DMA and 200 DMA on daily chart. The broader market (Nifty) should also be in uptrend. Don\'t fight the trend.' },
                { step: 3, title: 'Identify Entry Point', desc: 'Wait for a pullback to 20 EMA or previous support. Enter on a green candle with higher-than-average volume. Avoid chasing breakouts that already ran up 5%+.' },
                { step: 4, title: 'Set Stop-Loss', desc: 'Place stop-loss below the recent swing low or 2% below entry. Use ATR (Average True Range) for volatility-based stops. Never risk more than 2% of capital per trade.' },
                { step: 5, title: 'Trail & Exit', desc: 'Target 4-8% profit (2:1 or 3:1 reward-risk ratio). Trail stop-loss using 10 EMA or previous candle\'s low. Book partial profits (50%) at first target, trail rest.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-700 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">Best Stocks for Swing Trading (India)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Reliance', 'TCS', 'HDFC Bank', 'Infosys', 'ICICI Bank', 'SBI', 'Tata Motors', 'L&T', 'Bharti Airtel', 'Asian Paints', 'ITC', 'HUL'].map((stock) => (
                <div key={stock} className="bg-slate-50 rounded-lg px-4 py-2 text-center text-sm font-medium text-slate-800">
                  {stock}
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Option Trading Strategies */}
          <div id="option-strategies" className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-slate-900">Option Trading Strategies for Nifty & Bank Nifty</h2>
            </div>
            <p className="text-slate-700 mb-4">
              Options trading allows you to profit from both up and down moves with limited risk. 
              Here are the most popular strategies used by Indian options traders:
            </p>

            <div className="space-y-6">
              {/* Strategy Cards */}
              {[
                {
                  name: 'Bull Call Spread',
                  risk: 'Limited',
                  reward: 'Limited',
                  bestWhen: 'Moderately bullish',
                  how: 'Buy ATM Call + Sell OTM Call (same expiry). Example: Buy Nifty 24000 CE at ₹200, Sell 24200 CE at ₹100. Max profit = ₹200 × 50 = ₹10,000. Max loss = ₹100 × 50 = ₹5,000.',
                  color: 'border-green-200 bg-green-50/30',
                },
                {
                  name: 'Bear Put Spread',
                  risk: 'Limited',
                  reward: 'Limited',
                  bestWhen: 'Moderately bearish',
                  how: 'Buy ATM Put + Sell OTM Put. Example: Buy Nifty 24000 PE at ₹180, Sell 23800 PE at ₹90. Net debit = ₹90. Max profit = (200-90) × 50 = ₹5,500.',
                  color: 'border-red-200 bg-red-50/30',
                },
                {
                  name: 'Short Straddle',
                  risk: 'Unlimited',
                  reward: 'Limited to premium',
                  bestWhen: 'Low volatility expected / Range-bound',
                  how: 'Sell ATM Call + Sell ATM Put (same strike, same expiry). Collect premium from both sides. Profit if market stays near the strike. Risk: unlimited if market moves big. Use stop-loss at 1.5x premium collected.',
                  color: 'border-purple-200 bg-purple-50/30',
                },
                {
                  name: 'Iron Condor',
                  risk: 'Limited',
                  reward: 'Limited to premium',
                  bestWhen: 'Range-bound market / Weekly expiry',
                  how: 'Sell OTM Call + Buy further OTM Call + Sell OTM Put + Buy further OTM Put. Example: Sell 24200 CE, Buy 24400 CE, Sell 23800 PE, Buy 23600 PE. Profit if market stays between 23800-24200.',
                  color: 'border-indigo-200 bg-indigo-50/30',
                },
                {
                  name: 'Long Straddle',
                  risk: 'Limited to premium paid',
                  reward: 'Unlimited',
                  bestWhen: 'High volatility expected (RBI, Budget, Results)',
                  how: 'Buy ATM Call + Buy ATM Put (same strike). Example: Buy 24000 CE at ₹200 + Buy 24000 PE at ₹180. Total cost = ₹380. Profitable if Nifty moves 380+ points in either direction.',
                  color: 'border-yellow-200 bg-yellow-50/30',
                },
              ].map((strategy) => (
                <div key={strategy.name} className={`border rounded-lg p-5 ${strategy.color}`}>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{strategy.name}</h3>
                  <div className="grid grid-cols-3 gap-2 mb-3 text-sm">
                    <div><span className="text-slate-500">Risk:</span> <span className="font-medium text-slate-800">{strategy.risk}</span></div>
                    <div><span className="text-slate-500">Reward:</span> <span className="font-medium text-slate-800">{strategy.reward}</span></div>
                    <div><span className="text-slate-500">Best when:</span> <span className="font-medium text-slate-800">{strategy.bestWhen}</span></div>
                  </div>
                  <p className="text-slate-700 text-sm"><strong>How:</strong> {strategy.how}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Risk Management */}
          <div id="risk-management" className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-slate-900">Risk Management — The #1 Trading Rule</h2>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <p className="font-bold text-red-800">90% of traders lose money because they ignore risk management.</p>
              </div>
              <p className="text-red-700 text-sm">Even the best strategy will fail without proper risk management. This section is the most important part of this entire guide.</p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">Golden Rules of Risk Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { rule: '1% Rule', desc: 'Never risk more than 1% of your total capital on a single trade. ₹1 lakh capital = ₹1,000 max risk per trade.' },
                { rule: '3:1 Reward-Risk', desc: 'Only take trades where potential profit is 3x the risk. Risk ₹1,000? Target ₹3,000 profit minimum.' },
                { rule: 'Daily Loss Limit', desc: 'Stop trading after losing 3% of capital in a day. If you have ₹1 lakh, stop at ₹3,000 loss.' },
                { rule: 'Position Sizing', desc: 'Calculate lot size based on stop-loss distance. Lot size = (Risk Amount) ÷ (Stop-loss in points × tick value).' },
                { rule: 'Diversification', desc: 'Don\'t put all capital in one trade. Maximum 3-4 open positions at a time, in different sectors.' },
                { rule: 'Trailing Stop-Loss', desc: 'Move stop-loss to breakeven after 1:1 profit. Trail with 10 EMA or previous candle low as profit grows.' },
              ].map((item) => (
                <div key={item.rule} className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                  <h4 className="font-bold text-emerald-800 mb-1">{item.rule}</h4>
                  <p className="text-slate-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">Capital Allocation Strategy</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-slate-800">Capital Range</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-800">Trading Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-800">Instruments</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-800">Max Trades/Day</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-900">₹10K – ₹50K</td>
                    <td className="py-3 px-4">Cash delivery only</td>
                    <td className="py-3 px-4">Large-cap stocks</td>
                    <td className="py-3 px-4">1-2</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-900">₹50K – ₹2L</td>
                    <td className="py-3 px-4">Intraday + Swing</td>
                    <td className="py-3 px-4">Stocks + Nifty Options</td>
                    <td className="py-3 px-4">2-3</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-900">₹2L – ₹5L</td>
                    <td className="py-3 px-4">All types</td>
                    <td className="py-3 px-4">Stocks + F&O (Nifty/Bank Nifty)</td>
                    <td className="py-3 px-4">3-4</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">₹5L+</td>
                    <td className="py-3 px-4">Advanced strategies</td>
                    <td className="py-3 px-4">Multi-leg options, hedging</td>
                    <td className="py-3 px-4">3-5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 7: Technical Analysis Basics */}
          <div id="technical-analysis" className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-slate-900">Technical Analysis Basics for Beginners</h2>
            </div>
            <p className="text-slate-700 mb-4">
              Technical analysis is the study of price charts to predict future price movements. Here are the most important concepts every Indian trader must know:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">1. Candlestick Patterns</h3>
                <p className="text-slate-700 mb-3">Japanese candlesticks show Open, High, Low, Close (OHLC) data. Key patterns:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { pattern: 'Hammer 🔨', signal: 'Bullish reversal', where: 'At bottom of downtrend', desc: 'Small body, long lower shadow (2x body). Shows buyers stepping in.' },
                    { pattern: 'Shooting Star ⭐', signal: 'Bearish reversal', where: 'At top of uptrend', desc: 'Small body, long upper shadow. Shows sellers taking control.' },
                    { pattern: 'Engulfing 🔄', signal: 'Reversal', where: 'At support/resistance', desc: 'Second candle completely engulfs the first. Bullish or bearish depending on direction.' },
                    { pattern: 'Doji ➕', signal: 'Indecision', where: 'At key levels', desc: 'Open = Close. Market is undecided. Wait for next candle confirmation.' },
                    { pattern: 'Morning Star 🌟', signal: 'Bullish reversal', where: 'At bottom', desc: 'Three-candle pattern: Red → Small body → Green. Strong buy signal.' },
                    { pattern: 'Evening Star 🌙', signal: 'Bearish reversal', where: 'At top', desc: 'Three-candle pattern: Green → Small body → Red. Strong sell signal.' },
                  ].map((p) => (
                    <div key={p.pattern} className="bg-orange-50 rounded-lg p-3 border border-orange-100">
                      <h4 className="font-bold text-slate-900 text-sm">{p.pattern}</h4>
                      <p className="text-xs text-orange-700">{p.signal} • {p.where}</p>
                      <p className="text-xs text-slate-600 mt-1">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">2. Moving Averages</h3>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li><strong>20 EMA</strong> — Short-term trend. Used for intraday and swing trades. Price above 20 EMA = bullish.</li>
                  <li><strong>50 EMA</strong> — Medium-term trend. Institutional traders watch this level closely.</li>
                  <li><strong>200 DMA</strong> — Long-term trend. The most important moving average. Bull market = above 200 DMA.</li>
                  <li><strong>Golden Cross</strong> — 50 DMA crossing above 200 DMA. Very bullish signal (buy).</li>
                  <li><strong>Death Cross</strong> — 50 DMA crossing below 200 DMA. Very bearish signal (sell).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">3. Support & Resistance</h3>
                <p className="text-slate-700 mb-2">Support is a price level where buying interest is strong enough to prevent further decline. Resistance is where selling pressure prevents further rise.</p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-slate-800 text-sm"><strong>How to identify:</strong></p>
                  <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1 mt-2">
                    <li>Previous highs and lows on daily/weekly charts</li>
                    <li>Round numbers (Nifty 24,000 / 24,500 / 25,000)</li>
                    <li>Moving averages (20/50/200 EMA act as dynamic S&R)</li>
                    <li>Fibonacci levels (38.2%, 50%, 61.8% retracements)</li>
                    <li>Volume clusters (high volume at certain price = strong S&R)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">4. RSI (Relative Strength Index)</h3>
                <p className="text-slate-700 mb-2">RSI measures momentum on a 0-100 scale. The most commonly used indicator.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-red-600">70+</div>
                    <div className="text-sm text-slate-700">Overbought (Sell zone)</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-slate-700">30-70</div>
                    <div className="text-sm text-slate-700">Neutral (Wait)</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-600">Below 30</div>
                    <div className="text-sm text-slate-700">Oversold (Buy zone)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8: Beginner Mistakes */}
          <div id="mistakes" className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-slate-900">Top 10 Mistakes Beginners Make in Indian Stock Market</h2>
            </div>

            <div className="space-y-4">
              {[
                { mistake: 'Trading without a plan', fix: 'Write down entry, exit, stop-loss, and position size BEFORE entering any trade.' },
                { mistake: 'Not using stop-loss', fix: 'Always set stop-loss at the time of placing order. Use bracket orders (BO) or cover orders (CO).' },
                { mistake: 'Overleveraging', fix: 'Don\'t use full margin. Start with 25% of available margin. Scale up only after consistent profits.' },
                { mistake: 'Following social media "tips"', fix: 'Do your own analysis. If someone is giving free tips, ask yourself — why? They\'re likely selling something.' },
                { mistake: 'Emotional trading', fix: 'Create a rule-based system. Follow it mechanically. Take a break after 2 consecutive losses.' },
                { mistake: 'Ignoring the broader market trend', fix: 'Check Nifty, Bank Nifty, global markets before trading individual stocks. Don\'t go against the trend.' },
                { mistake: 'Overtrading', fix: 'Quality over quantity. 2-3 well-analyzed trades beat 20 impulsive trades. Pay attention to brokerage costs too.' },
                { mistake: 'Not maintaining a trading journal', fix: 'Record every trade: date, entry, exit, P&L, reason, what you learned. Review weekly.' },
                { mistake: 'Trying to catch falling stocks', fix: '"Don\'t catch a falling knife." Wait for reversal confirmation before buying a stock that\'s crashing.' },
                { mistake: 'Expecting quick riches', fix: 'Trading is a marathon, not a sprint. Focus on consistent 2-3% monthly returns. That\'s 30%+ annually, beating most investments.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-700 font-bold text-sm flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.mistake}</h4>
                    <p className="text-slate-700 text-sm">💡 Fix: {item.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div id="faq" className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, i) => (
                <details key={i} className="group border border-slate-200 rounded-lg">
                  <summary className="flex justify-between items-center cursor-pointer px-5 py-4 text-slate-900 font-medium hover:bg-slate-50">
                    {faq.name}
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-5 pb-4 text-slate-700 text-sm">
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Related Pages */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Explore More on LivePriceIndia</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/nifty-live" className="text-blue-600 hover:underline text-sm bg-blue-50 px-4 py-2 rounded-full font-medium">📈 Nifty 50 Live</Link>
              <Link href="/gold-price-india" className="text-yellow-700 hover:underline text-sm bg-yellow-50 px-4 py-2 rounded-full font-medium">🥇 Gold Price India</Link>
              <Link href="/petrol-price-india" className="text-red-600 hover:underline text-sm bg-red-50 px-4 py-2 rounded-full font-medium">⛽ Petrol Price</Link>
              <Link href="/crypto-prices-inr" className="text-purple-600 hover:underline text-sm bg-purple-50 px-4 py-2 rounded-full font-medium">🪙 Crypto Prices</Link>
              <Link href="/flight-prices" className="text-sky-600 hover:underline text-sm bg-sky-50 px-4 py-2 rounded-full font-medium">✈️ Flight Prices</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
