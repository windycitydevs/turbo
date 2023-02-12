import fs from "fs";
import { join } from "path";

export function JsonStreamHandler<T extends `${string}`, U extends unknown>(
  path: T
): U {
  return JSON.parse(
    Buffer.from(
      Buffer.from(fs.readFileSync(join(process.cwd(), path))).toJSON().data
    ).toString("utf-8")
  );
}
