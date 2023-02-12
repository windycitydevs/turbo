import cn from "clsx";
import React, { type FC } from "react";
import type UI from "../../typedefs/namespace";
import LoadingDots from "../LoadingDots";

/**
 * All the component types allowed by the Code component.
 */
export type CodeComponentType =
  | "code"
  | React.JSXElementConstructor<UI.TSX.ReactMapped["code"]>;

export interface CodeProps<
  C extends CodeComponentType = React.JSXElementConstructor<
    UI.TSX.ReactMapped["code"]
  >
> {
  lang?: UI.TSX.ReactMapped["code"]["lang"];
  className?: UI.TSX.ReactMapped["code"]["className"];
  variant?: "blue" | "white" | "black";
  horizontalScrolling?: boolean;
  Component?: C;
  loading?: boolean;
}
/**
 * The HTML props allowed by the Code Component.
 */
export type CodeHTMLType<C extends CodeComponentType = "code"> =
  C extends "code" ? UI.TSX.ReactMapped["code"] : UI.TSX.ReactMapped["html"];

export type CodeFC<C extends CodeComponentType = "code"> = FC<
  CodeHTMLType<C> & CodeProps<C>
>;

export type CodeType = <C extends CodeComponentType = "code">(
  ...args: Parameters<CodeFC<C>>
) => ReturnType<CodeFC<C>>;

const Code: CodeFC = props => {
  const {
    variant = "black",
    loading = false,
    Component = "code",
    horizontalScrolling = false,
    style = {},
    className,
    lang = "json",
    children,
    ...rest
  } = props;

  const rootClassName = cn(
    `ring-offset-[#facc15] ring-1 text-code text-base whitespace-pre-wrap font-gotham`,
    `bg-[#111010a8] min-w-fit w-[90vw] md:w-[80vw] xl:w-[72.5vw] text-[0.625rem] xs:text-[0.75rem]`,
    `shadow-[0_0.3125rem_0.625rem_rgba(0,68,255,12%)] md:text-[0.875rem] xl:text-[1rem] accent-[#ffffff9d]`,
    `cursor-text py-0 px-[0.875rem] rounded-[0.425rem] font-light select-auto`,
    `outline-none align-middle break-words leading-[1.25rem] max-h-[100%] lg:overflow-x-auto`,
    `transition-[border_0.2s_ease_0s,color_0.2s_ease_0s,background_0.2s_ease] tracking-[0.023rem]`,
    [
      variant === "black"
        ? "hover:ring-2"
        : variant === "blue"
        ? "bg-[rgb(0,112,243)] border-[1px] border-solid border-[rgb(240,241,242)] text-[rgb(240,241,242)]"
        : variant === "white"
        ? "bg-[rgb(255,255,255)] border-[1px] border-solid border-[rgb(36,37,38)] text-[rgb(36,37,38)]"
        : ""
    ],
    [
      horizontalScrolling === true
        ? "overflow-x-scroll"
        : horizontalScrolling === false
        ? "overflow-x-hidden"
        : "overflow-x-auto"
    ],
    { [loading === true ? "bg-blend-darken transition-all" : ""]: loading },
    className ?? ""
  );
  return (
    <Component
      style={{ ...style }}
      data-variant={variant}
      lang={lang ? lang : "ts"}
      className={cn('before:content-["`"] after:content-["`"]', rootClassName)}
      {...rest}>
      {loading ? (
        <i className={"m-0 flex"}>
          <LoadingDots />
        </i>
      ) : (
        children ?? <></>
      )}
    </Component>
  );
};

export default Code as CodeType;
