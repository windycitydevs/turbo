import type { RemoveFields } from "@/types/helpers";
import type { FC, SVGProps } from "react";

const ArrowRight: FC<
  RemoveFields<SVGProps<SVGSVGElement>, "xmlns" | "fill" | "viewBox">
> = ({ ...svg }) => (
  <svg
    {...svg}
    viewBox='0 0 141 141'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M70.5 117.5L117.5 70.5L70.5 23.5'
      stroke='#F49A7A'
      strokeWidth='11.75'
      strokeLinecap='square'
      strokeLinejoin='round'
    />
    <line
      x1='5.875'
      y1='-5.875'
      x2='99.875'
      y2='-5.875'
      transform='matrix(-1 0 0 1 117.5 76.375)'
      stroke='#F49A7A'
      strokeWidth='11.75'
      strokeLinecap='square'
      strokeLinejoin='round'
    />
  </svg>
);

export default ArrowRight;
