import type { NextFontWithVariable } from "@next/font";
import { Caveat, Inter, Montserrat } from "@next/font/google";
import localFont from "@next/font/local";
import { ReactNode } from "react";
import "../styles/globals.css";
const inter = Inter<"--inter">({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap"
});

const montserrat = Montserrat<"--montserrat">({
  variable: "--montserrat",
  subsets: ["latin", "latin-ext"],
  display: "swap"
});

const caveat = Caveat<"--caveat">({
  variable: "--caveat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: "variable"
});

const indieFlower = localFont<"--flower">({
  variable: "--flower",
  display: "swap",
  src: [
    { path: "./fonts/IndieFlower-Regular.ttf" },
    {
      path: "./fonts/IndieFlower.woff2"
    }
  ]
});

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
  return (
    <html>
      <body
        className={`overflow-y-scroll bg-gray-100 mx-auto ${inter.variable} ${montserrat.variable} ${kaiseiTokumin.variable} ${indieFlower.variable} ${caveat.variable} font-montserrat`}>
        {children}
      </body>
    </html>
  );
}
