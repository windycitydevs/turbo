import type { UI } from "@windycitydevs/ui";
import type { FC } from "react";

const SunVector: FC<
  UI.Helpers.RemoveFields<UI.TSX.JSXSelect<"svg">, "viewBox" | "fill" | "xmlns">
> = ({ ...svg }) => (
  <svg
    {...svg}
    viewBox='0 0 162 162'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <circle cx='81' cy='81' r='81' fill='#F49A7A' />
  </svg>
);

export default SunVector;
