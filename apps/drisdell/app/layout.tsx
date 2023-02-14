import "@/styles/globals.css";
import AddressBar from "@/ui/AddressBar";
import VideoComponent, { preload } from "@/ui/Video";
import type { NextFontWithVariable } from "@next/font";
import localFont from "@next/font/local";
import { ReactNode } from "react";
import GlobalNav from "./GlobalNav";

const kaiseiTokumin = localFont<"--kaisei-tokumin">({
  variable: "--kaisei-tokumin",
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
  preload();

  // const [data] = await Promise.all([fetcherr()])
  return (
    <html>
      <head>
        <link
          rel='preload'
          href='/api/edge-video'
          as='fetch'
          crossOrigin='anonymous'
        />
      </head>
      <body
        className={`bg-gray-1100 overflow-y-scroll ${kaiseiTokumin.variable} font-kaisei-tokumin`}>
        <VideoComponent />
        <div className='grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8'>
          <div className='col-start-2'>
            <GlobalNav />
          </div>
          <div className='col-start-3 space-y-6'>
            <AddressBar />
            <div className='rounded-xl border border-zinc-800 bg-black p-8'>
              {children}
            </div>
          </div>
          <div className='col-start-3 col-end-4 mt-28 flex items-center justify-center'>
            <div className='text-sm text-zinc-600'>
              Created by{" "}
              <a href='https://github.com/windycitydevs'>
                <b>Windy City Devs</b>
              </a>
              {". "}
              <a
                className='underline decoration-dotted underline-offset-4'
                href='https://github.com/windycitydevs/turbo'>
                View the code
              </a>
              {"."}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
