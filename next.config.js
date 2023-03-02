/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'agencyanalytics-api.vercel.app',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
