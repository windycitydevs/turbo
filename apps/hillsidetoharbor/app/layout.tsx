import { DefaultHead } from "@/ui/DefaultHead";
import type { NextFontWithVariable } from "@next/font";
import localFont from "@next/font/local";
import { HillsideToHarborHorizontal } from "@windycitydevs/ui";
import Link from "next/link";
import { ReactNode } from "react";
import "../styles/globals.css";

const DomainDisplayCondensed = localFont<"--font-domain-display-condensed">({
  variable: "--font-domain-display-condensed",
  display: "swap",
  src: [
    {
      path: "./fonts/DomaineDisplayCondensedWeb-Medium.woff"
    },
    {
      path: "./fonts/DomaineDisplayCondensedWeb-Medium.woff2"
    }
  ]
});

const BasisGrotesquePro = localFont<"--font-basis-grotesque-pro">({
  variable: "--font-basis-grotesque-pro",
  display: "swap",
  src: [
    {
      path: "./fonts/basis-grotesque-pro-bold-italic.ttf"
    },
    {
      path: "./fonts/basis-grotesque-pro-bold-italic.woff"
    },
    {
      path: "./fonts/basis-grotesque-pro-bold-italic.woff2"
    },
    {
      path: "./fonts/basis-grotesque-pro-bold.ttf"
    },
    {
      path: "./fonts/basis-grotesque-pro-bold.woff"
    },
    {
      path: "./fonts/basis-grotesque-pro-bold.woff2"
    },
    {
      path: "./fonts/basis-grotesque-pro-italic.ttf"
    },
    {
      path: "./fonts/basis-grotesque-pro-italic.woff"
    },
    {
      path: "./fonts/basis-grotesque-pro-italic.woff2"
    },
    {
      path: "./fonts/basis-grotesque-pro.ttf"
    },
    {
      path: "./fonts/basis-grotesque-pro.woff"
    },
    {
      path: "./fonts/basis-grotesque-pro.woff2"
    }
  ]
});

const kaiseiTokumin = localFont<"--font-kaisei-tokumin">({
  variable: "--font-kaisei-tokumin",
  display: "swap",
  src: [
    {
      path: "./fonts/kaisei-tokumin-bold.ttf"
    },
    {
      path: "./fonts/kaisei-tokumin-latin-400-normal.woff2",
      style: "normal",
      weight: "400"
    },
    {
      path: "./fonts/kaisei-tokumin-latin-700-normal.woff2",
      style: "normal",
      weight: "700"
    }
  ]
}) satisfies NextFontWithVariable;

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html className='h-full'>
      <head>
        <DefaultHead />
        <title>Hillside To Harbor</title>
        <meta
          name='description'
          content='Each Exit is an Entrance to a New Experience'
        />
      </head>
      <body
        className={`max-w-10xl mx-auto h-full overflow-y-scroll scroll-smooth ${DomainDisplayCondensed.variable} ${BasisGrotesquePro.variable} ${kaiseiTokumin.variable} font-basis-grotesque-pro`}>
        {/* <Nav
          variantEmail='secondary'
          variantPhone='secondary'
          logo='HillsidetoharborLogo'
        /> */}
        <div className='bg-accents-0'>{children}</div>{" "}
        <footer className='bg-accents-1 z-20 mt-auto flex w-full items-center justify-center border-t py-10'>
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
/**
 import { DefaultHead } from "@/ui/DefaultHead";

export default function Head() {
  return (
    <>
      <DefaultHead />
      <title>Hillside To Harbor</title>
      <meta
        name='description'
        content='If you can dream it you can (maybe) do it 🎉'
      />
    </>
  );
}

 */
