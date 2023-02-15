export const envMediatedBaseUrl = (env: typeof process.env.NODE_ENV) =>
  env === "development"
    ? "http://localhost:3000"
    : env === "production"
    ? "https://turbo-hillsidetoharbor.vercel.app"
    : env === "test"
    ? "http://localhost:3000"
    : "http://localhost:3000";
