/* eslint-disable import/no-extraneous-dependencies */
import * as dotenv from "dotenv";
import { expand, type DotenvExpandOutput } from "dotenv-expand";
import * as path from "path";
import { Indexer } from "../types/namespace";

export function GetUserInfo<
  T extends `${keyof typeof Indexer.Utility.OSandNpmInformation}`
>(target: T) {
  return Object.entries<DotenvExpandOutput | null>(
    {
      props: Object.entries(process.env)
        .map(([key, val], i) =>
          key.includes(target) ? { [i]: expand({ [key]: val }) }[i++] : null
        )
        .filter(props => props !== null)
    }.props
  )[0][1];
}

export function ParseProcessEnv(): {
  keysWithIndices: string[];
  valsWithIndices: string[];
} {
  const pushIt = Array.of<[string, string]>();

  const envPaths = [
    ".env",
    ".env.local",
    ".env.local.production",
    ".env.local.dev",
    ".env.local.staging",
    ".env.local.test",
    ".env.local.development",
    ".env.prod",
    ".env.dev",
    ".env.development",
    ".env.staging",
    ".env.test",
    ".env.production"
  ] as const;

  for (const p of envPaths) {
    Object?.entries(
      dotenv.config({
        path: path.relative(process.cwd(), p),
        override: true
      })?.parsed ?? ""
    ).map(([key, val]) => {
      return pushIt.push([key, val]);
    });
  }

  const mapParams = (params: (string | undefined)[][]) =>
    params
      .reduce<string[]>((arr, [k, v]) => {
        if (v) arr.push(`${k}=${encodeURIComponent(v)}`);
        return arr;
      }, [])
      .join("&");

  const handleMap = mapParams(pushIt)
    .split("&")
    .map((keyval, i) => {
      const { [0]: key, [2]: val } = keyval.split(/([=])/gim);
      return `${key.concat(`:${i}|`).concat(val)}:${i}`;
    });

  const handleKeyVals = (number: 0 | 1) =>
    handleMap.map(p => {
      return p.split("|")[number];
    });

  const keysWithIndices = handleKeyVals(0);
  const valsWithIndices = handleKeyVals(1);

  return { keysWithIndices, valsWithIndices };
}
