import type { RemoveFields } from "@/types/helpers";
import type { FC, SVGProps } from "react";

const FooterVector: FC<
  RemoveFields<SVGProps<SVGSVGElement>, "xmlns" | "viewBox" | "fill">
> = ({ height, width, ...svg }) => (
  <svg
    {...svg}
    viewBox='0 0 1440 437'
    fill={"#FFFFFF"}
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M245.372 13.2164C137.138 -26.7632 -9.09295 53.8623 -68.679 99.1725L-125 437H1926.43L1965 107.668C1865.01 113.832 1622.54 108.168 1452.6 36.2046C1240.17 -53.7495 1108.55 48.6982 901.634 77.6834C694.716 106.669 380.665 63.1909 245.372 13.2164Z'
      fill='white'
      className="absolute top-0 left-0"
    />
  </svg>
);

export default FooterVector;
