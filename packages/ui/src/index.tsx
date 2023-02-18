import cn from "clsx";
import type { AppProps } from "next/app";
import type { ComponentType, FC, HTMLAttributes, ReactNode } from "react";

// global
export const Noop: FC<{ children?: ReactNode }> = ({ children }) => (
  <>{children}</>
);

export const Page: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...props
}) => (
  <main {...props} className={cn("mx-auto w-full max-w-3xl py-16", className)}>
    {children}
  </main>
);

/**
 * @type `UIAppProps`
 * @description
 * Accepts Generic Args which are inherited by the `pageProps` field of the `AppProps` Base Entity
 *
 *
 */
export type UIAppProps<P = {}> = AppProps<P> & {
  Component: AppProps["Component"] & {
    getLayout: (page: ReactNode) => ReactNode;
  };
};

export function getLayout<LP extends {}>(
  Component: ComponentType<any>
): ComponentType<LP> {
  return (Component as any).Layout || Noop;
}
// atoms
export { default as Button } from "./atoms/Buttons";
export { default as Code } from "./atoms/Code";
export { default as Container } from "./atoms/Container";
export { default as DeployButton } from "./atoms/DeployButton";
export { default as Input } from "./atoms/Input";
export { default as Inspector } from "./atoms/Inspector";
export { default as Layout } from "./atoms/Layout";
export { default as LoadingDots } from "./atoms/LoadingDots";
export { default as Nav } from "./atoms/Nav";
export { default as NextLink } from "./atoms/NextLink";
export { default as Snippet } from "./atoms/Snippet";
export { default as Spinner } from "./atoms/Spinner";
export { default as Text } from "./atoms/Text";
// icons
export { default as FacebookIcon } from "./icons/Facebook";
export { default as HillsideToHarborHorizontal } from "./icons/HillsideToHarbor/HillsideToHarborHorizontal";
export { default as HillsideToHarborSquare } from "./icons/HillsideToHarbor/HillsideToHarborSquare";
export { default as HillsideToHarborTypeOneLine } from "./icons/HillsideToHarbor/HillsideToHarborTypeOneLine";
export { default as HillsideToHarborTypeTwoLine } from "./icons/HillsideToHarbor/HillsideToHarborTypeTwoLine";
export { default as HillsideToHarborVertical } from "./icons/HillsideToHarbor/HillsideToHarborVertical";
export { default as HillsideToHarborVerticalWide } from "./icons/HillsideToHarbor/HillsideToHarborVerticalWide";
export { default as InstagramIcon } from "./icons/Instagram";
export { default as LinkedInIcon } from "./icons/LinkedIn";
export { default as SanityLogo } from "./icons/Sanity";
export { default as TwitterIcon } from "./icons/Twitter";
export { default as EnvelopeIcon } from "./icons/UI/Envelope";
export { default as Heart } from "./icons/UI/Heart";
export { default as Lifebuoy } from "./icons/UI/Lifebuoy";
export { default as Newspaper } from "./icons/UI/Newspaper";
export { default as PhoneIcon } from "./icons/UI/Phone";
export { default as Wcd } from "./icons/Wcd";
export { default as WcdAbbreviated } from "./icons/WcdAbbreviated";
// lib
export { default as mapParams } from "./lib/map-params";
export { default as blurDataURLShimmer } from "./lib/shimmer";
// molecules
export { default as SubHero } from "./molecules/SubHero";
// types
export { default as WcdEnums } from "./typedefs/enum";
export { default as UI } from "./typedefs/namespace";
// utils
export { default as CaseHelpers } from "./utils/CaseHelpers";
export { default as DateTimeHelper } from "./utils/DateTimeHelper";
export { default as MergeRefs } from "./utils/MergeRefs";
export { default as queryParamHandler } from "./utils/q-param-handler";
export {
  default as safeLdJsonReplacer,
  toJson
} from "./utils/SafeJsonLdReplacer";
export { default as toSlug } from "./utils/Slugify";
export { default as useIsomorphicLayoutEffect } from "./utils/UseIsomorphicLayoutEffect";
