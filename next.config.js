/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    minimumCacheTTL: 180,
    domains: [
      "lh3.googleusercontent.com",
      "www.fosselmans.com",
      "d1ralsognjng37.cloudfront.net",
      "firebasestorage.googleapis.com",
      "scpr.brightspotcdn.com"
    ],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;

// lh3.googleusercontent.com


