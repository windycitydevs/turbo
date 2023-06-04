import type { FC } from "react";
import { StoneObj, type ContactUsIconProps } from "./Helpers";

const Email: FC<ContactUsIconProps> = ({
  strokeFill,
  height,
  width,
  ...svg
}) => (
  <svg
    {...svg}
    width={width ?? "30"}
    height={height ?? "30"}
    viewBox='0 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <g clipPath='url(#clip0_430_448)'>
      <path
        d='M27.5 7.5C27.5 6.125 26.375 5 25 5H5C3.625 5 2.5 6.125 2.5 7.5V22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5ZM25 7.5L15 13.75L5 7.5H25ZM25 22.5H5V10L15 16.25L25 10V22.5Z'
        fill={strokeFill ? StoneObj[strokeFill] : "#151515"}
      />
    </g>
    <defs>
      <clipPath id='clip0_430_448'>
        <rect width='30' height='30' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export default Email;
