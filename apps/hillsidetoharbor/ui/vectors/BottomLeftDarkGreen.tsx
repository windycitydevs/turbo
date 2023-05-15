import type { RemoveFields } from "@/types/helpers";
import type { FC, SVGProps } from "react";

const BottomLeftDarkGreen: FC<
  RemoveFields<SVGProps<SVGSVGElement>, "xmlns" | "viewBox" | "fill">
> = ({ ...svg }) => (
  <svg
    {...svg}
    viewBox='0 0 412 845'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M578.676 0.67915C578.676 0.67915 324.183 76.8056 337.295 283.327C350.407 489.849 182.692 513.163 60.1413 581.728C-38.5867 636.978 15.6845 722.265 15.6845 722.265L181.139 844.713L1064.15 321.893L880.612 186.064L734.248 75.5633L578.676 0.67915Z'
      fill='#4E5F4F'
    />
  </svg>
);

export default BottomLeftDarkGreen;
