import type { RemoveFields } from "@/types/helpers";
import type { FC, SVGProps } from "react";

// export type NewsPaperProps = [
//   RemoveFields<SVGProps<SVGSVGElement>, "xmlns" | "viewBox">,
//   RemoveFields<
//     SVGProps<SVGPathElement>,
//     "d" | "strokeLinejoin" | "strokeLinecap"
//   >
// ];

export interface NewsPaperProps
  extends RemoveFields<SVGProps<SVGSVGElement>, "xmlns" | "viewBox"> {
  fillPath?: string;
  strokePath?: string;
  strokeWidthPath?: string | number;
}

const Newspaper: FC<NewsPaperProps> = ({
  width,
  height,
  strokePath,
  strokeWidthPath,
  fillPath,
  ...svg
}) => (
  <svg
    {...svg}
    xmlns='http://www.w3.org/2000/svg'
    width={width ?? "24"}
    height={height ?? "24"}
    viewBox='0 0 24 24'>
    <path
      fill={fillPath ?? "none"}
      stroke={strokePath ?? "currentColor"}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidthPath ?? "2"}
      d='M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8Z'
    />
  </svg>
);

export default Newspaper;

/**
 * USAGE
 * 
 const Example = ([propsSvg, propsPath]: Parameters<typeof Newspaper>[0]) => (
  <Newspaper {...[{ className: propsSvg?.className ?? "", ...propsSVG }, propsPath]} />
);
 */
