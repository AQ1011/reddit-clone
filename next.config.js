/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{appDir: true},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'b.thumbs.redditmedia.com',
      },
      {
        protocol: "https",
        hostname: 'a.thumbs.redditmedia.com',
      },
    ],
  },
}

module.exports = nextConfig
