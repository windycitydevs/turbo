import { getSiteUrl } from "@/lib/env-handler";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/*"]
      }
    ],
    sitemap: `${getSiteUrl(process.env.NODE_ENV)}/sitemap.xml` as const,
    host: getSiteUrl(process.env.NODE_ENV)
  };
}
