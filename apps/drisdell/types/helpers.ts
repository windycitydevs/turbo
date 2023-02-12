import localFont from "@next/font/local";

export type Depth<
  Y extends { [record: string | symbol | number]: unknown },
  X extends keyof Y = keyof Y
> = {
  [H in keyof Y[X]]: Y[X][H][keyof Y[X][H]];
};

export type InferDepth<T> = T extends Depth<infer U> ? U : T;

export const inferObj = <J, T extends InferDepth<J>>(props: T) => props;

export const objInference = <T extends Parameters<typeof inferObj>["0"]>(
  props: T
) => inferObj(props);

export type LocalFontProps<T extends `--${string}` = `--${string}`> =
  Parameters<typeof localFont<T>>["0"];

export const fontObj = {
  Black: "Black",
  Bold: "Bold",
  Book: "Book",
  Light: "Light",
  Medium: "Medium",
  Thin: "Thin",
  Ultra: "Ultra",
  XLight: "XLight"
} as const;

export const fontHelper = (props: keyof typeof fontObj) => fontObj[props];

export type FontWeights = `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}00`;

export type AlternativeFontFileTypes = `.woff` | `.otf` | `.eot`;

export type FontStyle = "normal" | "italic";

export type PathHelper =
  | `./fonts/Gotham-${ReturnType<typeof fontHelper>}.woff2`
  | `./fonts/Gotham-${ReturnType<typeof fontHelper>}Italic.woff2`
  | `./fonts/Gotham-Book${AlternativeFontFileTypes}`;

export type SrcHelperProps = {
  path: PathHelper;
  style?: FontStyle;
  weight?: FontWeights;
};
export const SrcHelper = ({ path, style, weight }: SrcHelperProps) => ({
  style,
  weight,
  path
});
