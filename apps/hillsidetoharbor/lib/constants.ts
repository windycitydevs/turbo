import { execSync } from "child_process";
import { Abortable } from "events";
import fsSync, { promises as fsAsync } from "fs";
import { join } from "path";

// this file is for running prebuild scripts -- NODE_ENV is undefined when ran locally from the terminal
// however, NODE_ENV is equal to dev when nextjs is spun up

export const defaultProductionUrl =
  "https://www.hillsidetoharbor.com" as const;

export const defaultPreviewUrl =
  "https://dev.hillsidetoharbor.com" as const;

export const defaultLocalUrl = "http://localhost:3000" as const;

export const currentBranch = (cwd: string | URL | undefined) =>
  Buffer.from(
    Buffer.from(execSync("git branch --show-current", { cwd }).toJSON().data)
  ).toString("utf-8");

export const getBranchesArr = (cwd: string | URL | undefined) =>
  Buffer.from(Buffer.from(execSync("git branch --list", { cwd }).toJSON().data))
    .toString("utf-8")
    .split(
      `
`
    )
    .map(t =>
      t.split(/([*])/gim).length > 1 ? t.replace("*", "").trim() : t.trim()
    )
    .filter(p => p.length > 0);

export const branchObj = {
  dev: "dev",
  main: "production"
} as const;

export const handleBranch = (branch: keyof typeof branchObj | string) => {
  switch (branch) {
    case "main":
      return branchObj[branch];
    case "dev":
      return branchObj[branch];
    default:
      return "dev";
  }
};

export const handleEnv = (
  env: string | undefined,
  cwd: string | URL | undefined
) =>
  !env
    ? ("local" as const)
    : process.env.VERCEL_ENV
    ? process.env.VERCEL_ENV === "preview"
      ? ("development" as const)
      : ("production" as const)
    : handleBranch(currentBranch(cwd));

export const handleSiteUrl = (
  env: string | undefined,
  cwd: string | URL | undefined
) =>
  !env
    ? defaultLocalUrl
    : process.env.VERCEL_ENV
    ? process.env.VERCEL_ENV === "preview"
      ? defaultPreviewUrl
      : defaultProductionUrl
    : handleBranch(currentBranch(cwd)) === "dev"
    ? defaultPreviewUrl
    : defaultProductionUrl;

export type WriteStreamProps<T extends string = string> = {
  data: WithImplicitCoercion<string | Uint8Array | readonly number[]>;
  cwd: string;
  path: T;
};

export type WriteFileAsyncProps<T extends string = string> = {
  file: T;
  cwd: string;
  data: WithImplicitCoercion<string | Uint8Array | readonly number[]>;
  options?:
    | (fsSync.ObjectEncodingOptions & {
        mode?: fsSync.Mode | undefined;
        flag?: fsSync.OpenMode | undefined;
      } & Abortable)
    | BufferEncoding
    | null;
};

export const withWs = <T extends string = string>({
  data,
  cwd,
  path
}: WriteStreamProps<T>) =>
  fsSync
    .createWriteStream(join(cwd, path), { autoClose: true })
    .write(
      Buffer.from(
        Buffer.from(data).toJSON().data satisfies number[]
      ).valueOf() satisfies Uint8Array
    );

export const writeFileAsync = async <T extends string = string>({
  data,
  cwd,
  file,
  options
}: WriteFileAsyncProps<T>) =>
  await fsAsync.writeFile(
    join(cwd, file),
    Buffer.from(
      Buffer.from(
        data satisfies WithImplicitCoercion<
          string | Uint8Array | readonly number[]
        >
      ).toJSON().data satisfies number[]
    ) satisfies Uint8Array,
    options
  );

export type FileToBufferProps<T extends string> = {
  cwd: string;
  path: T;
};

export const fileToBuffer = <T extends string = string>({
  cwd,
  path
}: FileToBufferProps<T>) =>
  Buffer.from(
    Buffer.from(
      fsSync.readFileSync(join(cwd, path)).toJSON().data satisfies number[]
    ) satisfies WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>
  ) satisfies Buffer;

export const snakeCaseConditional = (props: string) =>
  props.includes(" ")
    ? props
        .split(/([ ])/gim)
        .filter((_, r) => r % 2 === 0 || r === 0)
        .join("_")
    : props;

export interface TupleHelperProps<T> {
  arr: Array<T> | ReadonlyArray<T>;
  one: readonly [number, number];
  two: readonly [number, number];
}

export const tupleHelper = <T extends string = string>({
  arr,
  one,
  two
}: TupleHelperProps<T>) =>
  [arr.slice(one[0], one[1]), arr.slice(two[0], two[1])] as const;

export const deriveIndex = (
  arr: Array<string>,
  target: "firstQuarter" | "secondQuarter" | "thirdQuarter" | "fourthQuarter"
) => {
  return target === "firstQuarter"
    ? ([0, Math.ceil(arr.length * 0.25)] as const)
    : target === "secondQuarter"
    ? ([Math.ceil(arr.length * 0.25), Math.ceil(arr.length * 0.5)] as const)
    : target === "thirdQuarter"
    ? ([Math.ceil(arr.length * 0.5), Math.ceil(arr.length * 0.75)] as const)
    : target === "fourthQuarter"
    ? ([Math.ceil(arr.length * 0.75), arr.length] as const)
    : ([0, arr.length] as const);
};

export const deriveFractionated = (
  arr: Array<string>,
  target:
    | "1/10"
    | "2/10"
    | "3/10"
    | "4/10"
    | "5/10"
    | "6/10"
    | "7/10"
    | "8/10"
    | "9/10"
    | "10/10"
) => {
  function l(arr: Array<string>, value: number) {
    return Math.ceil(arr.length * value);
  }
  return target === "1/10"
    ? ([0, l(arr, 0.1)] as const)
    : target === "2/10"
    ? ([l(arr, 0.1), l(arr, 0.2)] as const)
    : target === "3/10"
    ? ([l(arr, 0.2), l(arr, 0.3)] as const)
    : target === "4/10"
    ? ([l(arr, 0.3), l(arr, 0.4)] as const)
    : target === "5/10"
    ? ([l(arr, 0.4), l(arr, 0.5)] as const)
    : target === "6/10"
    ? ([l(arr, 0.5), l(arr, 0.6)] as const)
    : target === "7/10"
    ? ([l(arr, 0.6), l(arr, 0.7)] as const)
    : target === "8/10"
    ? ([l(arr, 0.7), l(arr, 0.8)] as const)
    : target === "9/10"
    ? ([l(arr, 0.8), l(arr, 0.9)] as const)
    : target === "10/10"
    ? ([l(arr, 0.9), arr.length] as const)
    : ([0, arr.length] as const);
};
