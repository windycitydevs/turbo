import type { RemoveFields } from "@/types/helpers";
import type { FC, SVGProps } from "react";

const ArrowDown: FC<
  RemoveFields<SVGProps<SVGSVGElement>, "xmlns" | "viewBox" | "fill">
> = ({ ...svg }) => (
  <svg
    {...svg}
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 20L20 28L28 20'
      stroke='#F9F2E8'
      strokeWidth='2'
      strokeLinecap='square'
      strokeLinejoin='round'
    />
    <line
      x1='1'
      y1='-1'
      x2='17'
      y2='-1'
      transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 19 28)'
      stroke='#F9F2E8'
      strokeWidth='2'
      strokeLinecap='square'
      strokeLinejoin='round'
    />
  </svg>
);

export default ArrowDown;
