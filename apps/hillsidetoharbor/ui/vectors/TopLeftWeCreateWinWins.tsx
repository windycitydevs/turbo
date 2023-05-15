import type { RemoveFields } from "@/types/helpers";
import type { FC, SVGProps } from "react";

const TopLeftWeCreateWinWins: FC<
  RemoveFields<SVGProps<SVGSVGElement>, "xmlns" | "viewBox" | "fill">
> = ({ width, height, ...svg }) => (
  <svg
    {...svg}
    width={width ?? "880"}
    height={height ?? "378"}
    viewBox='0 0 880 378'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      opacity='0.2'
      d='M-207.543 344.588C-207.543 344.588 45.1469 473.284 233.199 225.303C421.251 -22.6779 562.119 92.9332 714.286 118.314C836.886 138.747 880 -5.12973 880 -5.12973V-285.991L-243.916 -435.848V-124.293L-246 126.663L-207.543 344.588Z'
      fill='#4E5F4F'
    />
  </svg>
);

export default TopLeftWeCreateWinWins;
