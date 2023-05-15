import clsx from "clsx";
import React from "react";

const Label = ({
  children,
  animateRerendering,
  color
}: {
  children: React.ReactNode;
  animateRerendering?: boolean;
  color?: "default" | "pink" | "blue" | "violet" | "cyan" | "orange";
}) => {
  return (
    <span
      className={clsx("rounded-full shadow-[0_0_1px_3px_black]", {
        "bg-gray-800 text-gray-300": color === "default",
        "bg-wcd-pink text-white": color === "pink",
        "bg-wcd-blue text-white": color === "blue",
        "bg-wcd-cyan text-white": color === "cyan",
        "bg-wcd-violet text-violet-100": color === "violet",
        "bg-wcd-orange text-white": color === "orange",
        "animate-[highlight_1s_ease-in-out_1]": animateRerendering
      })}>
      {children}
    </span>
  );
};
export const Boundary = ({
  children,
  labels = ["children"],
  size = "default",
  color = "default",
  animateRerendering = true
}: {
  children: React.ReactNode;
  labels?: string[];
  size?: "small" | "default";
  color?: "default" | "pink" | "blue" | "violet" | "cyan" | "orange";
  animateRerendering?: boolean;
}) => {
  return (
    <span
      className={clsx("relative", {
        "p-0 lg:p-0": size === "small",
        "lg:p-0": size === "default",
        "border-gray-700": color === "default",
        "border-wcd-pink": color === "pink",
        "border-wcd-blue": color === "blue",
        "border-wcd-cyan": color === "cyan",
        "border-wcd-violet": color === "violet",
        "border-wcd-orange": color === "orange",
        "text-wcd-pink animate-[rerender_1s_ease-in-out_1]": animateRerendering
      })}>
      <></>
      {children}
    </span>
  );
};
