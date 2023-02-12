import cn from "clsx";
import { type FC } from "react";
import type UI from "../../typedefs/namespace";

const Input: FC<UI.TSX.JSXSelect<"input">> = ({
  children,
  className,
  ...rest
}) => (
  <input
    className={cn(
      "bg-background font-gotham text-foreground caret-foreground block w-full px-3 py-1 text-sm leading-7 transition-colors duration-200",
      "border-accents-2 box-border appearance-none text-ellipsis rounded-md border border-solid outline-0",
      "active:border-wcd-red focus:border-red-700",
      className
    )}
    {...rest}>
    {children}
  </input>
);

export default Input;
