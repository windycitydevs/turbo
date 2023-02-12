import cn from "clsx";
import type { DetailedHTMLProps, FC, JSXElementConstructor } from "react";
import type UI from "../../typedefs/namespace";
import LoadingDots from "../LoadingDots";

/**
 * All the component types allowed by the Button component.
 */
export type ButtonComponentType =
  | "button"
  | "a"
  | JSXElementConstructor<
      DetailedHTMLProps<
        UI.TSX.JSXSelect<"button">,
        UI.TSX.JSXElementSelect<"button">
      >
    >
  | JSXElementConstructor<
      DetailedHTMLProps<UI.TSX.JSXSelect<"a">, UI.TSX.JSXElementSelect<"a">>
    >;

/**
 * Base props of the Button component.
 */
export interface ButtonProps<C extends ButtonComponentType = "button"> {
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "violet" | "black" | "white";
  size?: "sm" | "md" | "lg";
  active?: boolean;
  type?: "submit" | "reset" | "button";
  Component?: C;
  width?: string | number;
  loading?: boolean;
  disabled?: boolean;
}

/**
 * The HTML props allowed by the Button component. These
 * props depend on the used component type (C).
 */
export type ButtonHTMLType<C extends ButtonComponentType = "button"> =
  C extends "a" ? UI.TSX.JSXSelect<"a"> : UI.TSX.JSXSelect<"button">;

export type ButtonFC<C extends ButtonComponentType = "button"> = FC<
  ButtonHTMLType<C> & ButtonProps<C>
>;

export type ButtonType = <C extends ButtonComponentType = "button">(
  ...args: Parameters<ButtonFC<C>>
) => ReturnType<ButtonFC<C>>;
const variants = {
  primary:
    "text-background bg-success border-success-dark hover:bg-success/90 shadow-[0_5px_10px_rgb(0,68,255,0.12)]",
  ghost: "text-success hover:bg-[rgba(0,68,255,0.06)]",
  secondary:
    "text-accents-5 bg-background border-accents-2 hover:border-foreground hover:text-foreground",
  black:
    "bg-foreground text-background border-foreground hover:bg-background hover:text-foreground",
  white: "bg-background text-foreground border-background hover:bg-accents-1",
  violet: "text-background bg-violet border-violet-dark hover:bg-[#7123be]"
} as const;

const sizes = {
  sm: "h-8 leading-3 text-sm px-1.5 py-3",
  md: "h-10 leading-10 text-[15px]",
  lg: "h-12 leading-12 text-[17px]"
} as const;

const Button: ButtonFC = props => {
  const {
    width,
    active,
    children,
    variant = "primary",
    Component = "button",
    loading = false,
    style = {},
    disabled,
    size = "md",
    className,
    ...rest
  } = props;

  const rootClassName = cn(
    "relative inline-flex items-center justify-center cursor pointer no-underline px-3.5 rounded-md",
    "font-medium outline-0 select-none align-middle whitespace-nowrap",
    "transition-colors ease-in duration-200",
    variant !== "ghost" && "border border-solid",
    variants[variant],
    sizes[size],
    { "cursor-not-allowed": loading },
    className
  );

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style
      }}
      {...rest}>
      {loading ? (
        <i className='m-0 flex'>
          <LoadingDots />
        </i>
      ) : (
        children
      )}
    </Component>
  );
};

// Button component built thinking of it as a button not a link
// but it can also be used as a link and include the anchor props

export default Button as ButtonType;
