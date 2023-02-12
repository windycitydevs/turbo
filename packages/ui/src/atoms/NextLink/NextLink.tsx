import cn from "clsx";
import NextLink, { type LinkProps } from "next/link.js";
import React, { type FC } from "react";
import type UI from "../../typedefs/namespace";

const css = [
  "hover:text-gray-600 text-gray-400 transition-colors no-underline",
  // CSS for <code/>
  "[&_code]:text-link [&_code]:hover:text-link-light [&_code]:transition-colors"
] as const;
const Link: FC<
  React.PropsWithChildren<
    UI.Helpers.RemoveFields<
      UI.TSX.JSXSelect<"a">,
      "href" | "onClick" | "onMouseEnter" | "onTouchStart"
    > &
      LinkProps
  >
> = ({ href, children, className, ...props }) => (
  <NextLink href={href} legacyBehavior>
    <a className={cn(css, className)} {...props}>
      {children}
    </a>
  </NextLink>
);

// A normal anchor tag is also exported for relative links to paths that don't exist in the app.
// For example apps that are using Multi Zones.

export const A: FC<UI.TSX.JSXSelect<"a">> = ({
  children,
  className,
  ...props
}) => (
  <a className={cn(css, className)} {...props}>
    {children}
  </a>
);
export default Link;
