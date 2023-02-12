export type ShimmerProps = {
  w: number;
  h: number;
};

export const ShimmerEffect = ({ w, h }: ShimmerProps) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str, "utf-8").toString("base64")
    : window.btoa(str);

export const fromBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str, "base64").toString("utf-8")
    : window.atob(str);

const blurDataURLShimmer = ({ w, h }: ShimmerProps) =>
  `data:image/svg+xml;base64,${toBase64(ShimmerEffect({ w, h }))}`;

export default blurDataURLShimmer;
