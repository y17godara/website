/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['react'],
  },
};

module.exports = nextConfig;
