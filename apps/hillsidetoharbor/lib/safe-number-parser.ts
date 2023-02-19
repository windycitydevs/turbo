import type { SafeNumber } from "@/types/wp-types";

export function safeNumberParser(widthOrHeight: SafeNumber) {
  return typeof widthOrHeight === "string"
    ? widthOrHeight?.includes(".") === true
      ? Number.parseFloat(widthOrHeight)
      : Number.parseInt(widthOrHeight, 10)
    : widthOrHeight;
}
