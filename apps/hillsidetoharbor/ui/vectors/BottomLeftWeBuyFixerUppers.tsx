import type { RemoveFields } from "@/types/helpers";
import type { FC, SVGProps } from "react";

export const BottomLeftWeBuyFixerUppers: FC<
  RemoveFields<SVGProps<SVGSVGElement>, "viewBox" | "xmlns" | "fill">
> = ({ width, height, ...svg }) => (
  <svg
    {...svg}
    width={width ?? "893"}
    height={height ?? "301"}
    viewBox='0 0 893 301'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M-194.543 28.2634C-194.543 28.2634 58.1469 -80.6942 246.199 129.253C434.251 339.2 575.119 241.321 727.286 219.832C849.886 202.534 893 324.343 893 324.343V562.127L-230.916 689V425.23L-233 212.764L-194.543 28.2634Z'
      fill='#4E5F4F'
    />
  </svg>
);

export default BottomLeftWeBuyFixerUppers;
