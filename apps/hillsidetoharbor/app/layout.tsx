import { getSiteUrl } from "@/lib/env-handler";
import * as gtag from "@/utils/analytics";
import cn from "clsx";
import type { Metadata } from "next";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font/dist/types";
import localFont from "next/font/local";
import Script from "next/script";
import type { ReactNode } from "react";
import "./global.css";

export const metadata = {
  metadataBase: new URL(getSiteUrl(process.env.NODE_ENV)),
  title: {
    default: "Hillside To Harbor",
    template: "%s | Hillside To Harbor"
  },
  colorScheme: "normal",
  themeColor: "#F9F2E8",
  manifest: new URL(
    "/favicon/site.webmanifest",
    getSiteUrl(process.env.NODE_ENV)
  ),
  appleWebApp: {
    capable: true,
    title: "Hillside To Harbor",
    statusBarStyle: "black-translucent"
  },
  icons: [
    {
      type: "image/vnd.microsoft.icon",
      rel: "shortcut icon",
      url: new URL("/favicon/favicon.ico", getSiteUrl(process.env.NODE_ENV)),
      sizes: "32x32"
    },
    {
      type: "image/png",
      rel: "apple-touch-icon",
      url: new URL(
        "/favicon/apple-touch-icon.png",
        getSiteUrl(process.env.NODE_ENV)
      ),
      sizes: "180x180"
    },
    {
      type: "image/svg+xml",
      rel: "mask-icon",
      url: new URL(
        "/favicon/safari-pinned-tab.svg",
        getSiteUrl(process.env.NODE_ENV)
      )
    },
    {
      type: "image/png",
      rel: "icon",
      url: new URL(
        "/favicon/favicon-32x32.png",
        getSiteUrl(process.env.NODE_ENV)
      ),
      sizes: "32x32"
    },
    {
      type: "image/png",
      rel: "icon",
      url: new URL(
        "/favicon/favicon-16x16.png",
        getSiteUrl(process.env.NODE_ENV)
      ),
      sizes: "16x16"
    }
  ],
  viewport: {
    viewportFit: "auto",
    initialScale: 1,
    maximumScale: 1,
    width: "device-width"
  },
  robots: {
    googleBot: {
      follow: true,
      index: true
    },
    follow: true,
    index: true
  },
  verification: { yandex: "233588648fdd9692" },
  openGraph: {
    title: "Hillside To Harbor | Helping You Navigate Challenging Situations",
    description: `Helping You Navigate Challenging Situations - ${getSiteUrl(
      process.env.NODE_ENV
    )}`,
    type: "website",
    countryName: "US",
    emails: ["contact@hillsidetoharbor.com", "carol@hillsidetoharbor.com"],
    locale: "en-US",
    url: getSiteUrl(process.env.NODE_ENV),
    siteName: "Hillside To Harbor",
    phoneNumbers: "+18652146943",
    images: [
      {
        url: `${getSiteUrl(process.env.NODE_ENV)}/H2HOG.png`,
        width: 880,
        height: 384,
        alt: "Helping You Navigate Challenging Situations."
      }
    ]
  }
} satisfies Metadata;

const BasisGrotesquePro = localFont<"--font-basis-grotesque-pro">({
  variable: "--font-basis-grotesque-pro",
  display: "swap",
  src: [
    {
      path: "./fonts/BasisGrotesquePro-Black.woff2",
      weight: "900",
      style: "normal"
    },
    {
      path: "./fonts/BasisGrotesquePro-BlackItalic.woff2",
      weight: "900",
      style: "italic"
    },
    {
      path: "./fonts/BasisGrotesquePro-Bold.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "./fonts/BasisGrotesquePro-BoldItalic.woff2",
      weight: "700",
      style: "italic"
    },
    {
      path: "./fonts/BasisGrotesquePro-Light.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "./fonts/BasisGrotesquePro-LightItalic.woff2",
      weight: "300",
      style: "italic"
    },
    {
      path: "./fonts/BasisGrotesquePro-Medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/BasisGrotesquePro-MediumItalic.woff2",
      weight: "500",
      style: "italic"
    },
    {
      path: "./fonts/BasisGrotesquePro-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/BasisGrotesquePro-Italic.woff2",
      weight: "400",
      style: "italic"
    }
  ]
}) satisfies NextFontWithVariable;

const DomainDisplayCondensed = localFont({
  variable: "--font-domaine-display-condensed",
  display: "swap",
  src: [
    {
      path: "./fonts/domaine-display-condensed-regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/domaine-display-condensed-medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/domaine-display-condensed-semibold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "./fonts/domaine-display-condensed-bold.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "./fonts/domaine-display-condensed-extrabold.woff2",
      weight: "800",
      style: "normal"
    },
    {
      path: "./fonts/domaine-display-condensed-black.woff2",
      weight: "900",
      style: "normal"
    }
  ]
}) satisfies NextFontWithVariable;

const SohneBuch = localFont<"--font-sohne-buch">({
  variable: "--font-sohne-buch",
  display: "swap",
  src: "./fonts/Sohne-Buch.woff2"
}) satisfies NextFontWithVariable;

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cn(
        "h-full",
        DomainDisplayCondensed.variable,
        BasisGrotesquePro.variable,
        SohneBuch.variable
      )}>
      <body
        className={`max-w-10xl bg-neutral font-basis-grotesque-pro mx-auto h-full overflow-y-scroll scroll-smooth`}>
        <div className='bg-accents-0'>{children}</div>
      </body>
      <Script
        async
        strategy='worker'
        id='gtag-init'
        key={"gtag-init".concat(gtag.GA_TRACKING_ID ?? "").trim()}
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
         `
        }}
      />
      <Script
        async
        id={gtag.GA_TRACKING_ID}
        data-test={gtag.GA_TRACKING_ID}
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
    </html>
  );
}
