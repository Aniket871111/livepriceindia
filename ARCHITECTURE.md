# LivePriceIndia - Complete Scalable Architecture

## 🎯 Technology Stack

### Frontend
**Next.js 14+ (App Router)** - Perfect choice for:
- Server-Side Rendering (SSR) for SEO
- Static Site Generation (SSG) for speed
- Incremental Static Regeneration (ISR) for fresh data
- Built-in API routes
- Image optimization
- Edge runtime support

### Backend & Infrastructure
**Hybrid Approach:**
1. **Next.js API Routes** (Primary) - For data aggregation
2. **Vercel Edge Functions** - For real-time data
3. **Firebase/Supabase** (Secondary) - For:
   - User authentication
   - Alert subscriptions
   - User preferences
   - Analytics

### Database Strategy
**PostgreSQL (Supabase) + Redis (Upstash)**

```
PostgreSQL Tables:
├── users (id, email, phone, premium_status, created_at)
├── price_alerts (user_id, asset_type, city, target_price, active)
├── user_preferences (user_id, preferred_cities, notifications)
├── historical_prices (asset_type, city, price, timestamp)
└── blog_posts (seo_optimized_content)

Redis Cache Structure:
├── gold:pune → {price, updated_at, trend} (TTL: 5min)
├── silver:mumbai → {price, updated_at, trend} (TTL: 5min)
├── petrol:delhi → {price, updated_at} (TTL: 1hour)
├── nifty:live → {price, support, resistance} (TTL: 1min)
├── crypto:bitcoin → {inr_price, change_24h} (TTL: 30sec)
└── flights:pune:delhi → {min_price, dates} (TTL: 6hours)
```

---

## 📡 API Integration Strategy

### 1. Gold & Silver Prices

**Free APIs:**
- **Metals-API.com** (Free: 50 req/month, Paid: $10/month for 5000 req)
- **GoldAPI.io** (Free: 30 req/month)
- **Custom Scraper**: Create scraper for goldpriceindia.com, ibjarate.com

**Implementation:**
```javascript
// Fallback chain: Primary API → Secondary API → Cached data → Scraper
// Update frequency: Every 5 minutes during market hours
// Cache: Redis with 5-minute TTL
```

### 2. Petrol & Diesel Prices

**Free APIs:**
- **Indian Oil Corporation Public Data** (Scraper)
- **Manual Daily Updates** (Government publishes daily at 6 AM)

**Implementation:**
```javascript
// Daily cron job at 6:00 AM IST
// Scrape from: iocl.com, hindustanpetroleum.com
// Store in PostgreSQL historical table
// Cache: Redis with 24-hour TTL (prices change daily)
```

### 3. Nifty & Bank Nifty

**Free APIs:**
- **NSE India Official** (Free but rate-limited, requires scraping)
- **Yahoo Finance API** (Free, unlimited)
- **Alpha Vantage** (Free: 5 req/min, 500/day)

**Paid APIs:**
- **Zerodha Kite Connect** ($2000/month - Production)
- **Upstox API** (Free for personal, Paid for commercial)

**Support/Resistance Calculation:**
```javascript
// Use Pivot Points (Standard, Fibonacci, Woodie's)
// Calculate from previous day OHLC data
// Update: Once daily + live price updates
```

### 4. Crypto Prices (INR)

**Free APIs:**
- **CoinGecko API** (Free: 50 calls/min) ✅ BEST CHOICE
- **WazirX API** (Free, INR pairs) ✅ INDIAN EXCHANGE
- **CoinDCX API** (Free, INR pairs)

**Implementation:**
```javascript
// Primary: CoinGecko (vs_currency=inr)
// Secondary: WazirX for accurate INR prices
// Update: Every 30 seconds
// WebSocket for premium users
```

### 5. Flight Price Tracker

**Free APIs:**
- **Amadeus Self-Service API** (Free: 2000 calls/month) ✅
- **Skyscanner Rapid API** (Free tier: 500 calls/month)

**Paid APIs:**
- **Amadeus Production** ($0.002 per call)
- **Google Flights Scraper** (Custom solution)

**Implementation:**
```javascript
// Target routes: Pune → (Delhi, Mumbai, Bangalore, Goa, Hyderabad)
// Update: Every 6 hours
// Store lowest prices in PostgreSQL
// Alert users on 20%+ price drops
```

---

## ⚡ Real-Time Updates Strategy

### Approach 1: Server-Sent Events (SSE) - RECOMMENDED
```javascript
// Client: EventSource connection
// Server: Next.js API route streams updates
// Pros: Simple, automatic reconnection, HTTP/2
// Use for: Nifty, Crypto prices
```

### Approach 2: Polling with SWR
```javascript
// Next.js SWR library with revalidation
// Interval: 30s for crypto, 5min for gold
// Pros: Simple, works everywhere, battery-friendly
// Use for: Gold, Silver, Petrol prices
```

### Approach 3: WebSocket (Premium Feature)
```javascript
// WebSocket connection for real-time alerts
// Use Supabase Realtime or Pusher (Free: 200k msgs/day)
// Only for premium subscribers
```

---

## 🚀 Caching Strategy (Critical for Performance)

### Multi-Layer Caching

**Layer 1: Redis Cache (Upstash - Free tier: 10k req/day)**
```javascript
Cache Keys with TTL:
- Hot data (Nifty, Crypto): 30-60 seconds
- Warm data (Gold, Silver): 5 minutes
- Cold data (Petrol, Flights): 6-24 hours
```

**Layer 2: Next.js ISR (Incremental Static Regeneration)**
```javascript
// Static pages regenerate every N seconds
export const revalidate = 60; // Gold price page

// On-demand revalidation via API
await res.revalidate('/gold-price-pune');
```

**Layer 3: CDN Caching (Vercel Edge)**
```javascript
// Edge functions cache responses globally
// Reduce latency: India users get sub-100ms response
```

**Layer 4: Browser Caching**
```javascript
// SWR library: stale-while-revalidate
// Service Worker: Offline support
```

---

## 📊 Database Schema (PostgreSQL)

```sql
-- Users & Authentication
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(15) UNIQUE,
  premium_status BOOLEAN DEFAULT false,
  premium_expires_at TIMESTAMP,
  preferred_cities TEXT[], -- ['Pune', 'Mumbai']
  created_at TIMESTAMP DEFAULT NOW()
);

-- Price Alerts
CREATE TABLE price_alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  asset_type VARCHAR(50), -- 'gold', 'petrol', 'nifty', 'btc'
  city VARCHAR(50),
  target_price DECIMAL(10,2),
  condition VARCHAR(10), -- 'above', 'below'
  active BOOLEAN DEFAULT true,
  triggered_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  INDEX idx_active_alerts (active, asset_type, city)
);

-- Historical Prices (For charts & analytics)
CREATE TABLE historical_prices (
  id BIGSERIAL PRIMARY KEY,
  asset_type VARCHAR(50),
  city VARCHAR(50),
  price DECIMAL(10,2),
  metadata JSONB, -- {open, high, low, close, volume}
  timestamp TIMESTAMP DEFAULT NOW(),
  INDEX idx_asset_timestamp (asset_type, city, timestamp DESC)
);

-- User Activity (For analytics)
CREATE TABLE user_activity (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID,
  page_visited VARCHAR(255),
  search_query TEXT,
  device_type VARCHAR(50),
  visited_at TIMESTAMP DEFAULT NOW()
);

-- Blog Posts (SEO)
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE,
  title VARCHAR(255),
  meta_description TEXT,
  content TEXT,
  keywords TEXT[],
  published_at TIMESTAMP,
  views INT DEFAULT 0,
  INDEX idx_slug (slug)
);
```

---

## 🎯 Scalability & Performance

### Request Flow
```
User Request
    ↓
Vercel Edge CDN (Global)
    ↓
Next.js App (ISR)
    ↓
Check Redis Cache ← Hit (Return cached data)
    ↓ Miss
API Aggregator Layer
    ↓
External APIs (Gold, Crypto, Flights)
    ↓
Store in Redis + PostgreSQL
    ↓
Return Response
```

### Handling Traffic Spikes
1. **ISR**: Pre-render popular pages
2. **Edge Caching**: Serve from nearest location
3. **Rate Limiting**: Protect APIs (10 req/sec per IP)
4. **Lazy Loading**: Load components on scroll
5. **Image Optimization**: Next.js Image component

### Cost Optimization
- **Vercel Free Tier**: 100GB bandwidth, Hobby plan: $20/month
- **Supabase Free Tier**: 500MB database, 2GB bandwidth
- **Upstash Redis Free**: 10k commands/day (Upgrade: $10/month)
- **Total Cost (Initial)**: $0-$20/month
- **Scale Cost (10k users/day)**: ~$50-$100/month

---

## 🔄 Update Frequencies

| Asset | Update Frequency | Method | Cache TTL |
|-------|-----------------|--------|-----------|
| Gold/Silver | 5 minutes | API + Scraper | 5 min |
| Petrol/Diesel | Daily 6 AM | Scraper + Manual | 24 hours |
| Nifty/Bank Nifty | 1 second (live) | SSE + API | 30 sec |
| Crypto | 30 seconds | API | 30 sec |
| Flights | Every 6 hours | API | 6 hours |

---

## 🛡️ Error Handling & Fallbacks

```javascript
// Cascading fallback system
async function getGoldPrice(city) {
  try {
    // 1. Check Redis cache
    const cached = await redis.get(`gold:${city}`);
    if (cached && !isStale(cached)) return cached;
    
    // 2. Try primary API
    const price = await metalsAPI.getGold(city);
    await redis.set(`gold:${city}`, price, 'EX', 300);
    return price;
  } catch (error) {
    try {
      // 3. Try secondary API
      return await goldAPI.getGold(city);
    } catch {
      // 4. Return last known price from PostgreSQL
      return await db.getLastKnownPrice('gold', city);
    }
  }
}
```

---

## 📱 Mobile Optimization

1. **PWA Support**: Install as app, offline mode
2. **Lazy Loading**: Images, charts load on demand
3. **Code Splitting**: Route-based chunks
4. **Prefetching**: Next.js automatic prefetch
5. **Web Vitals Target**:
   - LCP: < 2.5s
   - FID: < 100ms
   - CLS: < 0.1

---

## 🔐 Security

1. **Rate Limiting**: Upstash Rate Limit (Free)
2. **API Key Protection**: Environment variables
3. **CORS**: Whitelist domains
4. **Input Validation**: Zod schemas
5. **SQL Injection**: Parameterized queries
6. **XSS Protection**: Next.js auto-escaping

---

## 📈 Monitoring & Analytics

1. **Vercel Analytics**: Built-in performance monitoring
2. **Sentry**: Error tracking (Free: 5k errors/month)
3. **Google Analytics 4**: User behavior
4. **Uptime Monitoring**: UptimeRobot (Free: 50 monitors)
5. **Custom Dashboard**: Track API failures, cache hit rates

---

## 🚀 Deployment Strategy

**Phase 1: MVP (Week 1-2)**
- Next.js app with static data
- Basic UI for all 5 features
- Manual data updates

**Phase 2: Real APIs (Week 3-4)**
- Integrate free APIs
- Redis caching
- Real-time updates (SSE)

**Phase 3: User Features (Week 5-6)**
- User authentication
- Price alerts
- Email/SMS notifications

**Phase 4: Monetization (Week 7-8)**
- AdSense integration
- Premium features
- Affiliate links

**Phase 5: Scale (Month 3+)**
- Paid APIs
- More cities
- Mobile app (React Native)

---

## 🎯 Success Metrics (First 6 Months)

- **Traffic**: 50k visitors/month
- **SEO**: Rank top 3 for 20+ keywords
- **Revenue**: $500-$1000/month (Ads + Premium)
- **User Retention**: 40% returning users
- **Page Load**: < 2 seconds
- **Uptime**: 99.9%
