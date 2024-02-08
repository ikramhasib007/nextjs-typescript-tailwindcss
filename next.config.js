/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
      },
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'odo.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'api.odo.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'admin.odo.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
