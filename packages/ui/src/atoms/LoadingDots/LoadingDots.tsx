import type { FC } from "react";
import type UI from "../../typedefs/namespace";

const loading =
  "motion-safe:animate-[blink_1s_ease_0s_infinite_normal_both]" as const;
const dot = `rounded-full h-2 w-2 mx-0.5 bg-current ${loading}` as const;

const LoadingDots: FC<UI.TSX.JSXSelect<"span">> = ({ ...props }) => {
  return (
    <span
      className={"inline-flex items-center text-center leading-7"}
      {...props}>
      <span className={dot} key="dot_1'" />
      <span className={dot} style={{ animationDelay: "0.2s" }} key='dot_2' />
      <span className={dot} style={{ animationDelay: "0.2s" }} key='dot_3' />
    </span>
  );
};

export default LoadingDots;
