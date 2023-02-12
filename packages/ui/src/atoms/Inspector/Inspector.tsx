import cn from "clsx";
import React, { type FC } from "react";
import type UI from "../../typedefs/namespace";
import LoadingDots from "../LoadingDots";
/**
 * All the component types allowed by the Inspector component.
 */
export type InspectorComponentType =
  | "pre"
  | React.JSXElementConstructor<
      React.DetailedHTMLProps<UI.TSX.JSXSelect<"pre">, UI.TSX.ElementMap["pre"]>
    >;

export interface InspectorProps<C extends InspectorComponentType = "pre"> {
  lang?: UI.TSX.JSXSelect<"pre">["lang"];
  className?: UI.TSX.JSXSelect<"pre">["className"];
  variant?: "blue" | "white" | "black";
  horizontalScrolling?: boolean;
  Component?: C;
  loading?: boolean;
}
/**
 * The HTML props allowed by the Inspector Component.
 */
export type InspectorHTMLType<C extends InspectorComponentType = "pre"> =
  C extends "pre" ? UI.TSX.JSXSelect<"pre"> : UI.TSX.JSXSelect<"html">;

export type InspectorFC<C extends InspectorComponentType = "pre"> = FC<
  InspectorHTMLType<C> & InspectorProps<C>
>;

export type InspectorType = <C extends InspectorComponentType = "pre">(
  ...args: Parameters<InspectorFC<C>>
) => ReturnType<InspectorFC<C>>;

const Inspector: InspectorFC = props => {
  const {
    variant = "black",
    loading = false,
    Component = "pre",
    horizontalScrolling = false,
    style = {},
    className,
    lang = "json",
    children,
    ...rest
  } = props;
  const rootClassName = cn(
    `ring-offset-[#facc15] ring-1 font-gotham relative flex items-center justify-center`,
    `bg-[#111010a8] min-w-fit w-[90vw] md:w-[80vw] xl:w-[72.5vw] text-[0.625rem] xs:text-[0.75rem]`,
    `shadow-[0_0.3125rem_0.625rem_rgba(0,68,255,12%)] md:text-[0.875rem] xl:text-[1rem] accent-[#ffffff9d]`,
    `cursor-text py-0 px-[0.875rem] rounded-[0.425rem] prose-code:text-stone-50 font-light select-auto`,
    `outline-none align-middle whitespace-pre-wrap break-words leading-[1.25rem] max-h-[100%] lg:overflow-x-auto`,
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
      className={rootClassName}
      lang={lang ? lang : "json"}
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

export default Inspector as InspectorType;

/**
 * Base props of the Inspector component.
 * .root {
  font-family: inherit;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  padding: 0 14px;
  border-radius: 0.425rem;
  border: 1px solid rgb(250, 204, 21);
  color: rgb(250, 204, 21);
  background-color: rgb(21,21,21);
  font-size: 1.125rem;
  font-weight: 500;
  outline: none;
  -webkit-user-select: auto;
  -moz-user-select: auto;
  -ms-user-select: none;
  user-select: auto;
  accent-color: #fff;
  box-shadow: 0 5px 10px rgb(0 68 255 / 12%);
  vertical-align: middle;
  white-space: nowrap;
  line-height: 24px;
  height: 80vh;
  width: 50vw;
  transition: border 0.2s ease 0s, color 0.2s ease 0s, background 0.2s ease;
}

.black {
  border: 1px solid rgb(240,241,242);
  border-collapse: collapse;
  background-color: rgb(21, 21, 21);
  color:  rgb(250, 204, 21);
  box-shadow: none;
}

.blue {
  background-color: rgb(0, 112, 243);
  border: 1px solid rgb(240,241,242);
  border-collapse: collapse;
  color: rgb(240, 241, 242);
  box-shadow: none;
}

.white {
  background-color: #ffffff;
  border: 1px solid rgb(36, 37, 38);
  color: rgb(36,37,38);
  border-color: rgb(36,37,38);
}

.loading {
  background-blend-mode: darken;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.loading:hover {
  cursor: wait;
}

.i {
  display: flex;
  margin: 0;
}

.horizontalScrolling {
  overflow-x: scroll;
}

.noHorizontalScrolling {
  overflow-x: hidden;
  white-space: pre-wrap;
}

 */
