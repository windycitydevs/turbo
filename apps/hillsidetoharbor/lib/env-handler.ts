export const envMediatedBaseUrl = (env: typeof process.env.NODE_ENV) =>
  env === "development"
    ? "http://localhost:3000"
    : env === "production"
    ? `https://${process.env.VERCEL_URL}`
    : env === "test"
    ? "http://localhost:3000"
    : `http://${process.env.VERCEL_URL}`;
