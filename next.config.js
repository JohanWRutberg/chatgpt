/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "pixabay.com"]
  },
  experimental: {
    appDir: true
  }
};
