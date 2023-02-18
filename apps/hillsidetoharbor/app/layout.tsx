import { DefaultHead } from "@/ui/DefaultHead";
import type { NextFontWithVariable } from "@next/font";
import { Caveat, Inter, Montserrat } from "@next/font/google";
import {
  Button,
  EnvelopeIcon,
  HillsideToHarborHorizontal,
  HillsideToHarborSquare,
  PhoneIcon
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
        <nav className='bg-background font-gotham relative z-20 mx-auto w-full justify-between border-b border-gray-200 py-5 px-10 shadow-magical'>
          <div className='md:flex md:items-center md:justify-between md:space-x-5'>
            <div className='ml-10 flex items-start space-x-5'>
              <div className='flex-shrink-0'>
                <div className='relative'>
                  <Link href='/' id='top' className='mx-auto flex text-left'>
                    <span className='z-10'>
                      <HillsideToHarborSquare
                        className='h-16 w-16'
                        height={64}
                        width={64}
                        shapeRendering='geometricPrecision'
                      />
                    </span>
                  </Link>
                  <span
                    className='absolute inset-0 rounded-full shadow-inner'
                    aria-hidden='true'
                  />
                </div>
              </div>
            </div>
            <div className='md:justify-stretch sr-only md:mx-10 md:not-sr-only md:flex md:justify-stretch md:space-y-0 md:mt-0 md:flex-row md:space-x-3'>
              <span className='text-accents-5 ml-2 flex h-full cursor-not-allowed items-center outline-1 '>
                <Button
                  variant='secondary'
                  Component='a'
                  className='mx-auto'
                  href={`tel:+18658306061`}
                  target='_blank'
                  rel='noreferrer noopener'>
                  <span className='sr-only'>Call</span>
                  <PhoneIcon className='h-5 w-5' aria-hidden='true' />
                </Button>
              </span>
              <span className='text-accents-5  ml-2 inline-flex h-full cursor-not-allowed items-end'>
                <Button
                  variant='secondary'
                  Component='a'
                  className='mx-auto'
                  href={`mailto:contact@hillsidetoharbor.com`}
                  target='_blank'
                  rel='noreferrer noopener'>
                  <span className='sr-only'>Email</span>
                  <EnvelopeIcon className=' h-5 w-5' aria-hidden='true' />
                </Button>
              </span>
            </div>
          </div>
        </nav>
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
