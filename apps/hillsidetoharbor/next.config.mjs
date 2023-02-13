/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  images: {
    loader: "default",
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { hostname: "**.sanity.io" },
      { hostname: "source.unsplash.com" },
      { hostname: "**.hillsidetoharbor.biz" },
      { hostname: "**.hillsidetoharbor.com" },
      { hostname: "wpengine.com" },
      { hostname: "res.cloudinary.com" }
    ]
  }
};

export default nextConfig;
