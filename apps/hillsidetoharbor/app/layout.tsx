import { DefaultHead } from "@/ui/DefaultHead";
import type { NextFontWithVariable } from "@next/font";
import { Caveat, Inter, Montserrat } from "@next/font/google";
import {
  HillsideToHarborHorizontal,
  HillsideToHarborSquare,
  Nav
} from "@windycitydevs/ui";

import localFont from "@next/font/local";
import Link from "next/link";
import { ReactNode } from "react";
import "../styles/globals.css";

const inter = Inter<"--font-inter">({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter"
});

const montserrat = Montserrat<"--font-montserrat">({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  display: "swap"
});

const caveat = Caveat<"--font-caveat">({
  variable: "--font-caveat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: "variable"
});

const indieFlower = localFont<"--font-flower">({
  variable: "--font-flower",
  display: "swap",
  src: [
    { path: "./fonts/IndieFlower-Regular.ttf" },
    {
      path: "./fonts/IndieFlower.woff2"
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
    <html>
      <head>
        <DefaultHead />
        <title>Hillside To Harbor</title>
        <meta
          name='description'
          content='If you can dream it you can (maybe) do it 🎉'
        />
      </head>
      <body
        className={`max-w-10xl mx-auto  overflow-y-scroll scroll-smooth ${inter.variable} ${montserrat.variable} ${kaiseiTokumin.variable} ${indieFlower.variable} ${caveat.variable} font-montserrat`}>
        <Nav variantEmail='secondary' variantPhone='secondary'>
          <HillsideToHarborSquare
            className='h-16 w-16'
            height={64}
            width={64}
            shapeRendering='geometricPrecision'
          />
        </Nav>
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
