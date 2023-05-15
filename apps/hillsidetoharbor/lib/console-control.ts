// echo-stdin.mjs
import { Readable } from "node:stream";

export const readWriteConsole = async () => {
  const webStream = Readable.toWeb(process.stdin).values();
  for await (const chunk of webStream) {
    console.log(
      ">>>",
      Buffer.from(Buffer.from(chunk).toJSON().data).toString("utf-8")
    );
  }
};
