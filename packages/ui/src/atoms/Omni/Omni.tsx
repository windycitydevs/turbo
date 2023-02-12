import cn from "clsx";
import {
  DetailedHTMLProps,
  DOMAttributes,
  forwardRef,
  JSXElementConstructor,
  useCallback,
  useMemo,
  useRef,
  type ComponentType,
  type FC,
  type PropsWithChildren
} from "react";
import type UI from "../../typedefs/namespace";
import mergeRefs from "../../utils/MergeRefs";

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
  video: "video",
  small: "small"
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
  video: "mx-auto aspect-[16/9]",
  small: "text-sm font-semibold text-blue uppercase tracking-tight pl-1 block"
} as const;

export type ComponentsMapSatisfies = {
  readonly [P in Variant]:
    | ComponentType<
        | UI.TSX.JSXSelect<(typeof VariantObj)[P]>
        | `${(typeof VariantObj)[P]}`
        | UI.TSX.ReactMapped[(typeof VariantObj)[P]]
      >
    | P;
};

export type ComponentsMapSatisfiesMapped = {
  [Z in keyof ComponentsMapSatisfies]: ComponentsMapSatisfies[Z];
};

type UnwrapDomAttribs<T> = T extends DOMAttributes<infer U> ? U : T;
// const v = <T extends (typeof VariantObj)[keyof typeof VariantObj]>(props: T) => cloneElement(createElement<UI.TSX.JSXSelect<>, UI.TSX.ElementMap[T]>(props));
type OmniJsxElementConstructors =
  | JSXElementConstructor<
      DetailedHTMLProps<UI.TSX.ReactMapped["video"], UI.TSX.ElementMap["video"]>
    >
  | JSXElementConstructor<
      DetailedHTMLProps<
        UI.TSX.ReactMapped["blockquote"],
        UI.TSX.ElementMap["blockquote"]
      >
    >
  | JSXElementConstructor<
      DetailedHTMLProps<UI.TSX.ReactMapped["small"], UI.TSX.ElementMap["small"]>
    >
  | JSXElementConstructor<
      DetailedHTMLProps<UI.TSX.ReactMapped["body"], UI.TSX.ElementMap["body"]>
    >
  | JSXElementConstructor<
      DetailedHTMLProps<UI.TSX.ReactMapped["p"], UI.TSX.ElementMap["p"]>
    >
  | JSXElementConstructor<
      DetailedHTMLProps<
        UI.TSX.ReactMapped["details"],
        UI.TSX.ElementMap["details"]
      >
    >
  | JSXElementConstructor<
      DetailedHTMLProps<
        UI.TSX.ReactMapped[Exclude<
          Variant,
          "video" | "blockquote" | "p" | "body" | "details" | "small"
        >],
        UI.TSX.ElementMap[Exclude<
          Variant,
          "video" | "blockquote" | "p" | "body" | "details" | "small"
        >]
      >
    >;
export type OmniComponentType =
  | keyof typeof VariantObj
  | OmniJsxElementConstructors;
/**
 * Base props of the Omni component.
 */

export interface OmniProperties<
  C extends OmniComponentType = Variant | OmniJsxElementConstructors
> {
  size?: "sm" | "md" | "lg";
  Component?: C;
  variant: Variant;
}

/**
 * The HTML props allowed by the Omni component. These
 * props depend on the used component type (C).
 */
export type OmniHTMLType<C extends OmniComponentType = Variant> =
  C extends Exclude<
    Variant,
    "video" | "blockquote" | "p" | "body" | "details" | "small"
  >
    ? UI.TSX.ReactMapped[Exclude<
        Variant,
        "video" | "blockquote" | "p" | "body" | "details" | "small"
      >]
    : C extends "video"
    ? UI.TSX.ReactMapped["video"]
    : C extends "blockquote"
    ? UI.TSX.ReactMapped["blockquote"]
    : C extends "p"
    ? UI.TSX.ReactMapped["p"]
    : C extends "body"
    ? UI.TSX.ReactMapped["body"]
    : C extends "details"
    ? UI.TSX.ReactMapped["details"]
    : C extends "small"
    ? UI.TSX.ReactMapped["small"]
    : UI.TSX.ReactMapped[Variant];
export type OmniFC<C extends OmniComponentType = Variant> = FC<
  OmniHTMLType<C> & OmniProperties<C>
>;
export type OmniType = <C extends OmniComponentType = Variant>(
  ...args: Parameters<OmniFC<C>>
) => ReturnType<OmniFC<C>>;
export type OmniProps = {
  variant: Variant;
  className?: string;
  overrideStyleDefaults?: boolean;
};

export interface OmniScaffold<
  T extends keyof typeof VariantObj = keyof typeof VariantObj
> {
  props: (t: T) => UI.TSX.ReactMapped[typeof t];
}

export interface OmniScaffoldExtended<
  C extends OmniComponentType = Variant | OmniJsxElementConstructors
> {
  El?: C;
}
const Omni = forwardRef<
  UI.TSX.ElementMap[OmniProps["variant"]],
  PropsWithChildren<OmniProps> &
    OmniScaffold<OmniProps["variant"]> &
    OmniScaffoldExtended
>(({ children, El, className, overrideStyleDefaults, variant, props }, ref) => {
  const Components = useCallback((variant: Variant) => {
    const componentsMap = {
      h1: VariantObj["h1"],
      h2: VariantObj["h2"],
      h3: VariantObj["h3"],
      h4: VariantObj["h4"],
      h5: VariantObj["h5"],
      h6: VariantObj["h6"],
      blockquote: VariantObj["blockquote"],
      p: VariantObj["p"],
      video: VariantObj["video"],
      body: VariantObj["body"],
      details: VariantObj["details"],
      small: VariantObj["small"]
    } as const satisfies { [P in Variant]: ComponentsMapSatisfiesMapped[P] };

    return componentsMap[variant] satisfies
      | (typeof componentsMap)[typeof variant]
      | ComponentType<
          | UI.TSX.JSXSelect<(typeof VariantObj)[typeof variant]>
          | (typeof componentsMap)[typeof variant]
          | UI.TSX.ReactMapped[(typeof componentsMap)[typeof variant]]
        >;
  }, []);
  const memoized = useMemo(() => {
    return Components(variant);
  }, [Components, variant]);
  const localRef = useRef<UI.TSX.ElementMap[typeof memoized] | null>(null);
  const Component = memoized;
  const { ...rest } = props(memoized);
  return (
    // @ts-ignore
    <El
      {...rest}
      key={memoized}
      ref={mergeRefs([ref, localRef])}
      className={cn(
        overrideStyleDefaults === true
          ? className
          : variants[memoized].concat(className ?? "")
      )}>
      {children}
    </El>
  );
});
Omni.displayName = "Omni";

export default Omni;
