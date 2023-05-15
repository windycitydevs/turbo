export const getProductionUrl =
  "https://turbo-hillsidetoharbor.vercel.app" as const;

export const getPreviewUrl =
  "https://dev-turbo-hillsidetoharbor.vercel.app" as const;

export const getLocalUrl = "http://localhost:3000" as const;

export const getSiteUrl = (
  env: "development" | "production" | "test" | undefined
) =>
  process.env.VERCEL_ENV === "development"
    ? getPreviewUrl
    : !env || env === "development"
    ? getLocalUrl
    : process.env.VERCEL_ENV
    ? process.env.VERCEL_ENV === "preview"
      ? getPreviewUrl
      : getProductionUrl
    : getPreviewUrl;
