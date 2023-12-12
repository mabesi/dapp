/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MARKETPLACE_ADDRESS: process.env.MARKETPLACE_ADDRESS,
    COLLECTION_ADDRESS: process.env.COLLECTION_ADDRESS,
    CHAIN_ID: process.env.CHAIN_ID,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET
  },
  images: {
    domains: ["gateway.pinata.cloud", "images.unsplash.com"]
  }
}

module.exports = nextConfig
