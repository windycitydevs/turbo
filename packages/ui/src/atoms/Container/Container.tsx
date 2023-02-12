import cn from "clsx";
import { type FC, type JSXElementConstructor, type ReactNode } from "react";
import type UI from "../../typedefs/namespace";
import LoadingDots from "../LoadingDots";

export type DivComponentType =
  | "div"
  | JSXElementConstructor<UI.TSX.JSXSelect<"div">>;

interface DivContainerProps<
  C extends DivComponentType = React.JSXElementConstructor<
    UI.TSX.JSXSelect<"div">
  >
> {
  lang?: UI.TSX.JSXSelect<"div">["lang"];
  className?: UI.TSX.JSXSelect<"div">["className"];
  clean?: boolean;
  El?: C;
  children?: ReactNode;
  loading?: boolean;
}

type ContainerHTMLType<C extends DivComponentType = "div"> = C extends "div"
  ? UI.TSX.JSXSelect<"div">
  : UI.TSX.JSXSelect<"html">;

export type ContainerFC<C extends DivComponentType = "div"> = FC<
  ContainerHTMLType<C> & DivContainerProps<C>
>;

export type ContainerType = <C extends DivComponentType = "div">(
  ...args: Parameters<ContainerFC<C>>
) => ReturnType<ContainerFC<C>>;

const Container: ContainerFC = props => {
  const {
    children,
    El = "div",
    clean,
    className,
    style = {},
    loading = false,
    ...rest
  } = props;
  const rootClassName = cn(className ? className : ``, `container`, {
    "mx-auto max-w-[auto]": !clean,
    "mx-auto": clean
  });

  return (
    <El style={{ ...style }} className={rootClassName} {...rest}>
      {loading ? (
        <i className={"m-0 flex"}>
          <LoadingDots />
        </i>
      ) : (
        children ?? <></>
      )}
    </El>
  );
};

export default Container as ContainerType;
