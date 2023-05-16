/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    nextScriptWorkers: true,
    appDir: true,
    swcPlugins: [
      [
        "@graphql-codegen/client-preset-swc-plugin",
        { artifactDirectory: "./gql", gqlTagName: "graphql" }
      ]
    ]
  },
  images: {
    loader: "default",
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { hostname: ".com" },
      { hostname: "flagcdn.com" },
      { hostname: "**.cloudfront.net" },
      { hostname: "**.unsplash.com" },
      { hostname: "**.hillsidetoharbor.biz" },
      { hostname: "www.hillsidetoharbor.com" },
      { hostname: "dev.hillsidetoharbor.com" },
      { hostname: "schema.org" },
      { hostname: "localhost" },
      { hostname: "ses.hillsidetoharbor.com" },
      { hostname: "hillsidetoharbor.com" },
      { hostname: "*.tailwindcss.com" },
      { hostname: "turbo-hillsidetoharbor.vercel.app" }
    ]
  }
};

export default nextConfig;
