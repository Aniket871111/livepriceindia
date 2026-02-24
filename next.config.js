/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'api.dicebear.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Environment variables
  env: {
    SITE_NAME: 'LivePriceIndia',
    SITE_URL: process.env.SITE_URL || 'https://livepriceindia.vercel.app',
  },
}

module.exports = nextConfig
