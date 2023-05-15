/// <reference types="@edge-runtime/types" />
/// <reference types="google.analytics" />
/// <reference types="gtag.js" />
/// <reference types="react/next" />
/// <reference path="../../node_modules/server-only/index.js" />

declare module "react/next";
declare module "@edge-runtime/types";
declare module "google.analytics";
declare module "gtag.js";

export declare global {
  interface Window {
    dataLayer?: object[];
  }
}