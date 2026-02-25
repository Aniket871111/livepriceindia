/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'api.dicebear.com', 'coin-images.coingecko.com', 'assets.coingecko.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable compression
  compress: true,
  // Keep console.error/warn in production for debugging, remove only console.log
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  // Environment variables
  env: {
    SITE_NAME: 'LivePriceIndia',
    SITE_URL: process.env.SITE_URL || 'https://livepriceindia.vercel.app',
  },
}

module.exports = nextConfig
