const siteUrl =
  process.env.NODE_ENV != "development"
    ? process.env.NODE_ENV != "production"
      ? "http://localhost:3000"
      : "https://turbo-hillsidetoharbor.vercel.app"
    : "https://dev.hillsidetoharbor.com";

// @ts-check
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteUrl,
  changefreq: "daily",
  generateIndexSitemap: false,
  priority: 0.9,
  exclude: ["/_*"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: ["/"]
      },
      {
        userAgent: "*",
        disallow: ["/_*"]
      }
    ]
  }
};
// https://images.unsplash.com/photo-1637633049332-663b04be7408?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=100&auto=format&fit=crop&crop=focalpoint&fp-y=.88&blend=F49A7A&blend-mode=multiply