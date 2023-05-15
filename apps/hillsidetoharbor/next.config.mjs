/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { nextScriptWorkers: true, appDir: true },
  images: {
    loader: "default",
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { hostname: "**.cloudfront.net" },
      { hostname: "**.unsplash.com" },
      { hostname: "**.hillsidetoharbor.biz" },
      { hostname: "**.hillsidetoharbor.com" },
      { hostname: "*.tailwindcss.com" },
      { hostname: "turbo-hillsidetoharbor.vercel.app" }
    ]
  }
};

export default nextConfig;
