export function remToPx(remValue: string) {
  let rootFontSize =
    typeof window === "undefined"
      ? 16
      : Number.parseFloat(
          window.getComputedStyle(document.documentElement).fontSize
        );

  return Number.parseFloat(remValue) * rootFontSize;
}
