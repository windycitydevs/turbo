import type { LinkProps } from "next/link";
import { createElement } from "react";

export type LinkedUp = React.ForwardRefExoticComponent<
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps & {
      children?: React.ReactNode;
    } & React.RefAttributes<HTMLAnchorElement>
>;

export type ExtractLinkType<T> = T extends React.ForwardRefExoticComponent<
  infer U
>
  ? U
  : T;

export type Maybe = ExtractLinkType<LinkedUp>;

const Recreate = ({ children, ...props }: ExtractLinkType<LinkedUp>) =>
  createElement("a", props, children);
