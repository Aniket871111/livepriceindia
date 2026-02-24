# LivePriceIndia Deployment Guide

## 🚀 Recommended Deployment Platforms

### 1. **Vercel** (BEST CHOICE for Next.js) ⭐

**Why:** Built by Next.js creators, zero config, global CDN, free tier perfect for starting.

**Free Tier:**
- 100GB bandwidth/month
- Unlimited requests
- Automatic HTTPS
- Edge functions
- Built-in analytics

**Deploy in 2 minutes:**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (from your project folder)
vercel

# Production deployment
vercel --prod
```

**Or via GitHub (Easiest):**
1. Push code to GitHub.
2. Go to [vercel.com](https://vercel.com).
3. Click "Import Project".
4. Connect GitHub repo.
5. Add environment variables.
6. Deploy! ✅

---

### 2. **Netlify** (Great Alternative)

**Free Tier:**
- 100GB bandwidth/month
- 300 build minutes/month
- Form handling included
- Edge functions

**Deploy:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

### 3. **Railway** (Includes Database) 

**Perfect if you need:** PostgreSQL + Redis + App together in one project.

**Free Tier:** $5 credit/month (good for initial testing).

**Deploy:**
1. Go to [railway.app](https://railway.app).
2. "New Project" → "Deploy from GitHub".
3. Add PostgreSQL + Redis services.
4. Deploy!

---

### 4. **Render** (All-in-One)

**Free Tier:**
- Free static sites.
- Free PostgreSQL (90 days).
- Auto-deploy from GitHub.

---

### 5. **DigitalOcean App Platform**

**Good for:** Future scaling and more control over infrastructure.

**Cost:** Starts at $12/month (includes 1GB RAM).

---

## 💰 Cost Comparison (Monthly)

| Platform | Free Tier | Paid Start | Best For |
|----------|-----------|------------|----------|
| **Vercel** | 100GB bandwidth | $20/mo | Next.js apps ⭐ |
| **Netlify** | 100GB bandwidth | $19/mo | Static sites |
| **Railway** | $5 credit | ~$15/mo | With database |
| **Render** | Limited | $7/mo | Budget hosting |
| **DigitalOcean** | No free tier | $12/mo | Scaling later |

---

## 📋 Quick Deploy Checklist

**Before deploying:**

1. **Build locally first:**
   ```bash
   npm run build
   npm start
   ```

2. **Set environment variables** on the platform:
   - `METALS_API_KEY`
   - `COINGECKO_API_KEY`
   - `DATABASE_URL`
   - `UPSTASH_REDIS_URL`

3. **Update URLs** in your configuration:
   - Ensure `SITE_URL` matches your actual domain.

4. **Configure domain:**
   - Add your custom domain in settings.
   - Update DNS records (A/CNAME) as required.

---

## 🎯 Final Recommendation

**Start with Vercel.** It offers the best developer experience for Next.js, a very generous free tier, and superior performance for users in India.

**Complementary services:**
- **Database:** Supabase (Free tier).
- **Redis:** Upstash (Free tier).
- **Email:** Resend (Free tier).
