import type { RemoveFields } from "@/types/helpers";
import type { SVGProps } from "react";

export const StoneObj = {
  "stone-1": "#FAFAFA",
  "stone-100": "#151515"
} as const;

export interface ContactUsIconProps
  extends RemoveFields<SVGProps<SVGSVGElement>, "viewBox" | "fill" | "xmlns"> {
  strokeFill?: keyof typeof StoneObj;
}
