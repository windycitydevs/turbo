// import { ConditionalToRequired } from "@/types/helpers";
import type { LinkProps } from "next/link";
// import { CElement, cloneElement, ReactHTML } from "react";

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

// const Recreate = ({
//   children,
//   ...props
// }: ConditionalToRequired<ExtractLinkType<LinkedUp>, "ref" | "key" | "type">) =>
//   cloneElement<
//     Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
//       LinkProps & {
//         children?: React.ReactNode;
//       } & React.RefAttributes<HTMLAnchorElement>,
//       CElement<ReactHTML,
//       Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
//         LinkProps & {
//           children?: React.ReactNode;
//         } & React.RefAttributes<HTMLAnchorElement>
//     >
//   >({...props}, ...[children]);
