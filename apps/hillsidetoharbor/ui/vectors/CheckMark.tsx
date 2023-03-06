import type { UI } from "@windycitydevs/ui";
import type { FC } from "react";

const CheckMark: FC<
  UI.Helpers.RemoveFields<UI.TSX.JSXSelect<"svg">, "viewBox" | "fill" | "xmlns">
> = ({ ...svg }) => (
  <svg
    {...svg}
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.7048 4.15303C16.7834 4.21266 16.8494 4.28719 16.8991 4.37236C16.9488 4.45753 16.9812 4.55166 16.9945 4.64938C17.0078 4.74709 17.0017 4.84646 16.9765 4.94181C16.9513 5.03716 16.9076 5.1266 16.8478 5.20503L8.84782 15.705C8.78293 15.7901 8.70059 15.8603 8.60634 15.9109C8.51209 15.9615 8.4081 15.9913 8.30135 15.9984C8.19461 16.0056 8.08758 15.9897 7.98745 15.9521C7.88732 15.9144 7.79641 15.8557 7.72082 15.78L3.22082 11.28C3.08834 11.1379 3.01622 10.9498 3.01965 10.7555C3.02308 10.5612 3.10179 10.3758 3.2392 10.2384C3.37661 10.101 3.562 10.0223 3.7563 10.0189C3.9506 10.0154 4.13865 10.0876 4.28082 10.22L8.17482 14.113L15.6548 4.29603C15.7752 4.13799 15.9534 4.03416 16.1502 4.00735C16.3471 3.98054 16.5466 4.03294 16.7048 4.15303Z'
      fill='black'
    />
  </svg>
);

export default CheckMark;