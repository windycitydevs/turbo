import { type FC } from "react";
import { type UI } from "../../../typedefs/namespace";

const EnvelopeIcon: FC<
  UI.Helpers.RemoveFields<UI.TSX.JSXSelect<"svg">, "xmlns" | "viewBox">
> = ({ fill, ...svg }) => (
  <svg
    {...svg}
    viewBox='0 0 52 44'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M5.375 6.875V37.125H46.625V6.875H5.375ZM43.05 9.625L26 17.6L8.95 9.625H43.05ZM43.875 34.375H8.125V12.2375L26 20.625L43.875 12.2375V34.375Z'
      fill={fill ?? "currentColor"}
    />
  </svg>
);

EnvelopeIcon.defaultProps = {
  width: "52",
  height: "44"
};

export default EnvelopeIcon;
