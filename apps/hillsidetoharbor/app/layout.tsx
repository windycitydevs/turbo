import "../styles/globals.css";
import AddressBar from "@/ui/AddressBar";
import VideoComponent, { preload } from "@/ui/Video";
import HeroImageComponent, {preload as HeroImagePreload} from "@/ui/HeroImage";
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

  return (
    <html>
      <body
        className={`bg-gray-1100 overflow-y-scroll ${kaiseiTokumin.variable} font-kaisei-tokumin`}>
        {children}
      </body>
    </html>
  );
}
