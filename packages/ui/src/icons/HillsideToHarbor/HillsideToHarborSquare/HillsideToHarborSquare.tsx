import type { FC, SVGProps } from "react";
import type { RemoveFields } from "../../../typedefs/helpers";

const HillsideToHarborSquare: FC<
  RemoveFields<SVGProps<SVGSVGElement>, "viewBox" | "fill" | "xmlns">
> = ({ ...svg }) => (
  <svg
    {...svg}
    viewBox='0 0 400 400'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <g clipPath='url(#clip0_407_9)'>
      <path
        d='M39.36 125.18C39.36 125.18 116.96 82.79 174.71 164.47C231.08 244.21 277.25 214.24 322.45 199.71C363.78 186.43 373.34 240.37 373.34 240.37V332.88L28.19 382.24V279.62L27.55 196.96L39.36 125.18Z'
        fill='#4E5F4F'
      />
      <path
        d='M28.1899 356.12C28.1899 356.12 15.7799 336.04 156.27 333.08C220.61 331.73 144.08 279.58 226.7 295.83C377.84 325.56 372.38 291.64 372.38 291.64L373.46 384.28H28.1899V356.12Z'
        fill='#91D3CA'
      />
      <path
        d='M377.52 386.43H24V193.09C24 144.99 42.73 99.76 76.75 65.75C110.76 31.73 155.98 13 204.09 13C299.72 13 377.53 90.8 377.53 186.44V386.43H377.52ZM32.38 378.05H369.15V186.44C369.15 95.43 295.1 21.38 204.09 21.38C113.08 21.38 32.38 98.4 32.38 193.09V378.06V378.05Z'
        fill='#4E5F4F'
      />
      <path
        d='M259.77 164.47C288.213 164.47 311.27 141.413 311.27 112.97C311.27 84.5273 288.213 61.47 259.77 61.47C231.327 61.47 208.27 84.5273 208.27 112.97C208.27 141.413 231.327 164.47 259.77 164.47Z'
        fill='#F49A7A'
      />
    </g>
    <defs>
      <clipPath id='clip0_407_9'>
        <rect
          width='353.52'
          height='373.43'
          fill='white'
          transform='translate(24 13)'
        />
      </clipPath>
    </defs>
  </svg>
);

export default HillsideToHarborSquare;
