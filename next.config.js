/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.WP_IMAGES_URL,
      },
    ],
  },
};

module.exports = nextConfig;
