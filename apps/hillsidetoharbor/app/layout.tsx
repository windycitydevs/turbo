import { getSiteUrl } from "@/lib/env-handler";
import { DefaultHead } from "@/ui/DefaultHead";
import { HillsideToHarborHorizontal } from "@windycitydevs/ui";
import cn from "clsx";
import type { Metadata } from "next";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font/dist/types";
import localFont from "next/font/local";
import Link from "next/link";
import type { ReactNode } from "react";
import "./global.css";

export const metadata = {
  metadataBase: new URL(getSiteUrl(process.env.NODE_ENV)),
  title: "Hillside To Harbor",
  colorScheme: "normal",
  themeColor: "#F9F2E8",
  manifest: new URL(
    "/favicon/site.webmanifest",
    getSiteUrl(process.env.NODE_ENV)
  ),
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
  openGraph: {
    title: "Hillside To Harbor | Helping You Navigate Challenging Situations",
    description: `Helping You Navigate Challenging Situations - ${getSiteUrl(
      process.env.NODE_ENV
    )}`,
    type: "website",
    locale: "en-US",
    url: getSiteUrl(process.env.NODE_ENV),
    siteName: "Hillside To Harbor",
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
      <head>
        <DefaultHead />
        <meta
          name='description'
          content='Each Exit is an Entrance to a New Experience'
        />
      </head>
      <body
        className={`max-w-10xl bg-neutral font-basis-grotesque-pro mx-auto h-full overflow-y-scroll scroll-smooth`}>
        <div className='bg-accents-0'>{children}</div>{" "}
        <footer className='bg-accents-1 z-20 mt-auto w-full flex items-center justify-center border-t py-10'>
          <span className='sr-only'>back to top</span>
          <Link
            href='/'
            aria-label='Hillside To Harbor'
            scroll={true}
            className='leading-relaxed tracking-wider text-black'>
            <HillsideToHarborHorizontal className='text-primary ml-3 inline-block h-20' />
          </Link>
        </footer>
      </body>
    </html>
  );
}
