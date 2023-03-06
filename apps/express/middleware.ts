import { next } from "@vercel/edge";

export default function middleware(_req: Request) {
  return next({
    headers: {
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "X-Content-Type-Options": "nosniff",
      "X-DNS-Prefetch-Control": "on",
      "Strict-Transport-Security":
        "max-age=31536000; includeSubDomains; preload"
    }
  });
}
