/* eslint-disable import/no-extraneous-dependencies */
import * as dotenv from "dotenv";
import { expand } from "dotenv-expand";
import * as fs from "fs";
import * as path from "path";
import { Indexer } from "../types/namespace";

let initialEnv: Indexer.Utility.ProcessEnv | undefined = undefined;
let combinedEnv: Indexer.Utility.ProcessEnv | undefined = undefined;
let cachedLoadedEnvFiles: Indexer.Utility.LoadedEnvFiles = [];
let previousLoadedEnvFiles: Indexer.Utility.LoadedEnvFiles = [];

export function processEnv(
  loadedEnvFiles: Indexer.Utility.LoadedEnvFiles,
  dir?: string,
  log: Indexer.Utility.Log = console,
  forceReload = false
) {
  if (!initialEnv) {
    initialEnv = Object.assign({}, process.env);
  }
  // only reload env when forceReload is specified
  if (
    !forceReload &&
    (process.env.__NEXT_PROCESSED_ENV || loadedEnvFiles.length === 0)
  ) {
    return process.env as Indexer.Utility.ProcessEnv;
  }
  // flag that we processed the environment values in case a serverless
  // function is re-used or we are running in `next start` mode
  process.env.__NEXT_PROCESSED_ENV = "true";

  const origEnv = Object.assign({}, initialEnv);
  const parsed: dotenv.DotenvParseOutput = {};

  for (const envFile of loadedEnvFiles) {
    try {
      let result: dotenv.DotenvConfigOutput = {};
      result.parsed = dotenv.parse(envFile.contents);

      result = expand(result);

      if (
        result.parsed &&
        !previousLoadedEnvFiles.some(
          item =>
            item.contents === envFile.contents && item.path === envFile.path
        )
      ) {
        log.info(`Loaded env from ${path.join(dir || "", envFile.path)}`);
      }

      for (const key of Object.keys(result.parsed || {})) {
        if (
          typeof parsed[key] === "undefined" &&
          typeof origEnv[key] === "undefined"
        ) {
          parsed[key] = result.parsed?.[key]!;
        }
      }
    } catch (err) {
      log.error(
        `Failed to load env from ${path.join(dir || "", envFile.path)}`,
        err
      );
    }
  }
  return Object.assign<NodeJS.ProcessEnv, dotenv.DotenvParseOutput>(
    process.env,
    parsed
  );
}

export function loadEnvConfig(
  dir: string,
  dev?: boolean,
  log: Indexer.Utility.Log = console,
  forceReload = false
): {
  combinedEnv: Indexer.Utility.ProcessEnv;
  loadedEnvFiles: Indexer.Utility.LoadedEnvFiles;
} {
  if (!initialEnv) {
    initialEnv = Object.assign({}, process.env);
  }
  // only reload env when forceReload is specified
  if (combinedEnv && !forceReload) {
    return { combinedEnv, loadedEnvFiles: cachedLoadedEnvFiles };
  }
  process.env = Object.assign({}, initialEnv) as NodeJS.ProcessEnv;
  previousLoadedEnvFiles = cachedLoadedEnvFiles;
  cachedLoadedEnvFiles = [];

  const isTest = process.env.NODE_ENV === "test";
  const mode = isTest ? "test" : dev ? "development" : "production";
  const dotenvFiles = [
    `.env.${mode}.local`,
    // Don't include `.env.local` for `test` environment
    // since normally you expect tests to produce the same
    // results for everyone
    mode !== "test" && `.env.local`,
    `.env.${mode}`,
    ".env"
  ].filter(Boolean) as string[];

  for (const envFile of dotenvFiles) {
    // only load .env if the user provided has an env config file
    const dotEnvPath = path.join(dir, envFile);

    try {
      const stats = fs.statSync(dotEnvPath);

      // make sure to only attempt to read files
      if (!stats.isFile()) {
        continue;
      }

      const contents = fs.readFileSync(dotEnvPath, "utf8");
      cachedLoadedEnvFiles.push({
        path: envFile,
        contents
      });
    } catch (err: any) {
      if (err.code !== "ENOENT") {
        log.error(`Failed to load env from ${envFile}`, err);
      }
    }
  }
  combinedEnv = processEnv(cachedLoadedEnvFiles, dir, log, forceReload);
  return { combinedEnv, loadedEnvFiles: cachedLoadedEnvFiles };
}
