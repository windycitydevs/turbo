import { geolocation, ipAddress } from "@vercel/edge";
import {
  NextResponse,
  userAgent,
  userAgentFromString,
  type NextRequest
} from "next/server";

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;
// RegExp used to test if a pathname is coming from _next or public directories
const PUBLIC_FILE = /\.(.*)$/;

export default function middleware(req: NextRequest) {
  // extract geolocation info, including iso3166-2 country code
  const { city, country, countryRegion, latitude, longitude, region } =
    geolocation(req);

  // extract client IP address via vercel proxy
  const ip = ipAddress(req);

  // extract nextUrl, headers, referrer, and token (if authenticated)
  const { nextUrl: url, headers } = req;

  // use headers to extract userAgent et al
  const { ua, device, engine, os, browser, isBot, cpu } = userAgent({
    headers: headers
  });

  const auth = headers.get("Authorization") || null;

  const getUAData = userAgentFromString(ua);

  const matchedPath = url.pathname || "";
  const operatingSystem = os?.name || "Windows";
  const operatingSystemVersion = os?.version || "";
  const osWithVersion = operatingSystem + " " + operatingSystemVersion;
  const countryVercel = country ? country : "US";
  const bot = isBot === true ? "true" : "false";
  const architecture = cpu?.architecture || "";
  const userBrowserName = browser?.name || "Chrome";
  const userBrowserVersion = browser?.version || "";
  const userBrowser = userBrowserName + " " + userBrowserVersion;

  // The region part of the ISO 3166-2 code of the client IP.
  const countryIso3166Vercel =
    countryRegion != null ? countryRegion : "unknown";

  const cityVercel = city ? city : "Chicago";

  const regionVercel = region ? region : "IL";

  const latVercel = latitude ? latitude : "42.360082499999997196";

  const lngVercel = longitude ? longitude : "-71.058880099999996105";

  const ipVercel = ip ? ip : "0.0.0.0";

  // get the users timezone
  const tz = headers.get("x-vercel-ip-timezone") || "";

  const deviceModel = getUAData.device.model || device?.model || "";

  const deviceVendor = device?.vendor || "";

  const engineName = engine?.name || "";

  const viewport: XOR<`mobile`, `desktop`> =
    device?.type === "mobile" ? "mobile" : "desktop";

  const code = url.searchParams.get("code");
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set(
    "Authorization",
    `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  );
  url.searchParams.set("browserName", userBrowserName);
  url.searchParams.set("browserVersion", userBrowserVersion);
  url.searchParams.set("match", matchedPath);
  url.searchParams.set("viewport", viewport);
  url.searchParams.set("deviceModel", deviceModel);
  url.searchParams.set("deviceVendor", deviceVendor);
  url.searchParams.set("ip", ipVercel);
  url.searchParams.set("engineName", engineName);
  url.searchParams.set("os", osWithVersion);
  url.searchParams.set("isBot", bot);
  url.searchParams.set("architecture", architecture);
  url.searchParams.set("browser", userBrowser);
  url.searchParams.set("country", countryVercel);
  url.searchParams.set("countryIso", countryIso3166Vercel);
  url.searchParams.set("city", cityVercel);
  url.searchParams.set("region", regionVercel);
  url.searchParams.set("lat", latVercel);
  code ? url.searchParams.set("code", code) : null;
  url.searchParams.set("lng", lngVercel);
  url.searchParams.set("ua", ua);
  url.searchParams.set("tz", tz);
  // if (STATIC_FILE.test(req.nextUrl.pathname) === true) {
  //   return;
  // }
  return NextResponse.rewrite(url);
}

/**
 * Match all request paths except for the ones starting with:
 * - _next/static (static files)
 * - favicon.ico (favicon file)
 */

// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
// };
