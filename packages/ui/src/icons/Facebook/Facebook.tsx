import type { FC } from "react";
import type UI from "../../typedefs/namespace";

const Facebook: FC<UI.TSX.JSXSelect<"svg">> = ({ ...svg }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 62.684 62.304'
    {...svg}>
    <path
      d='M62.684,31.342A31.342,31.342,0,1,0,26.445,62.3V40.4H18.487v-9.06h7.958V24.437c0-7.855,4.679-12.194,11.838-12.194a48.2,48.2,0,0,1,7.016.612v7.713H41.347c-3.894,0-5.108,2.416-5.108,4.895v5.879h8.693l-1.39,9.06h-7.3V62.3A31.35,31.35,0,0,0,62.684,31.342Z'
      fill={svg.fill ? svg.fill : "#e1242a"}
    />
  </svg>
);

export default Facebook;
