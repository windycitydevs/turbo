import type { RemoveFields } from "@/types/helpers";
import type { FC, SVGProps } from "react";

const TopRightWeCreateWinWins: FC<
  RemoveFields<SVGProps<SVGSVGElement>, "xmlns" | "viewBox" | "fill">
> = ({ width, height, ...svg }) => (
  <svg
    {...svg}
    width={width ?? "382"}
    height={height ?? "589"}
    viewBox='0 0 382 589'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      opacity='0.3'
      d='M578.676 588.087C578.676 588.087 324.183 498.169 337.295 254.234C350.407 10.2993 182.692 -17.2384 60.1413 -98.2245C-38.5866 -163.483 15.6846 -264.221 15.6846 -264.221L181.139 -408.851L1064.15 208.682L880.612 369.118L734.248 499.637L578.676 588.087Z'
      fill='#4E5F4F'
    />
  </svg>
);

export default TopRightWeCreateWinWins;
//TopLeftWeCreateWinWins
/**
 * <svg width="880" height="378" viewBox="0 0 880 378" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" d="M-207.543 344.588C-207.543 344.588 45.1469 473.284 233.199 225.303C421.251 -22.6779 562.119 92.9332 714.286 118.314C836.886 138.747 880 -5.12973 880 -5.12973V-285.991L-243.916 -435.848V-124.293L-246 126.663L-207.543 344.588Z" fill="#4E5F4F"/>
</svg>

 */
