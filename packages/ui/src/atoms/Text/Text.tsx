import cn from "clsx";
import { type LinkProps } from "next/link";
import {
  type ComponentType,
  type CSSProperties,
  type FC,
  type PropsWithChildren,
  type ReactNode
} from "react";
import type UI from "../../typedefs/namespace";

export type TextProps = {
  variant: Variant;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode | any;
  html?: string;
};

export const VariantObj = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  body: "body",
  blockquote: "blockquote",
  details: "details",
  section: "section",
  small: "small",
  sub: "sub",
  sup: "sup",
  caption: "caption",
  aside: "aside"
} as const;

export type Variant = keyof typeof VariantObj;

export const variants = {
  h1: "text-5xl tracking-tight",
  h2: "text-4xl tracking-tight",
  h3: "text-3xl tracking-normal",
  h4: "text-2xl",
  h5: "text-xl",
  h6: "text-xl",
  details: "text-lg tracking-tight text-accents-5",
  p: "text-base font-normal",
  body: "mx-auto font-gotham",
  blockquote: "font-light tracking-wide",
  section: "font-gotham mx-auto",
  small: "text-sm font-semibold text-blue uppercase tracking-tight pl-1 block",
  sub: "",
  sup: "",
  caption: "",
  aside: ""
} as const;

export type ComponentsMapSatisfies = {
  readonly [P in Variant]:
    | ComponentType<
        | UI.TSX.JSXSelect<(typeof VariantObj)[P]>
        | `${(typeof VariantObj)[P]}`
        | UI.TSX.ReactMapped[(typeof VariantObj)[P]]
      >
    | P
    | React.ForwardRefExoticComponent<
        Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
          LinkProps & {
            children?: React.ReactNode;
          } & React.RefAttributes<HTMLAnchorElement>
      >;
};

export type ComponentsMapSatisfiesMapped = {
  [Z in keyof ComponentsMapSatisfies]: ComponentsMapSatisfies[Z];
};

const Text: FC<PropsWithChildren<TextProps>> = ({
  style,
  className = "",
  variant,
  children
}) => {
  const componentsMap = {
    aside: VariantObj["aside"],
    blockquote: VariantObj["blockquote"],
    body: VariantObj["body"],
    caption: VariantObj["caption"],
    details: VariantObj["details"],
    h1: VariantObj["h1"],
    h2: VariantObj["h2"],
    h3: VariantObj["h3"],
    h4: VariantObj["h4"],
    h5: VariantObj["h5"],
    h6: VariantObj["h6"],
    p: VariantObj["p"],
    section: VariantObj["section"],
    small: VariantObj["small"],
    sub: VariantObj["sub"],
    sup: VariantObj["sup"]
  } as const satisfies {
    readonly [P in Variant]: ComponentsMapSatisfiesMapped[P];
  };

  const Component = componentsMap[variant] satisfies
    | (typeof componentsMap)[typeof variant]
    | ComponentType<
        | UI.TSX.JSXSelect<(typeof VariantObj)[typeof variant]>
        | (typeof componentsMap)[typeof variant]
        | UI.TSX.ReactMapped[(typeof componentsMap)[typeof variant]]
      >;
  return (
    <Component
      className={cn("font-gotham", variants[variant], className)}
      style={style}>
      {children}
    </Component>
  );
};

export default Text;
