import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'LivePriceIndia - Real-time Gold, Petrol, Crypto & Stock Prices in India'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0c4a6e 0%, #0284c7 50%, #0ea5e9 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#0284c7',
            }}
          >
            LP
          </div>
          <div style={{ display: 'flex', fontSize: '48px', fontWeight: 'bold' }}>
            <span style={{ color: 'white' }}>LivePrice</span>
            <span style={{ color: '#fbbf24' }}>India</span>
          </div>
        </div>
        <div
          style={{
            fontSize: '28px',
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          Real-time Gold Rate, Petrol Price, Nifty 50, Crypto Prices & Flight Tracker for India
        </div>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            marginTop: '40px',
          }}
        >
          {['🪙 Gold', '⛽ Petrol', '📈 Nifty', '₿ Crypto', '✈️ Flights'].map((item) => (
            <div
              key={item}
              style={{
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '12px',
                padding: '12px 24px',
                color: 'white',
                fontSize: '18px',
                fontWeight: '600',
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          livepriceindia.vercel.app • Updated every minute • 8+ Indian cities
        </div>
      </div>
    ),
    { ...size }
  )
}
