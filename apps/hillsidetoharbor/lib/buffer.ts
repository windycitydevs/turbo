import { Readable } from "node:stream";

export async function buffer(readable: Readable) {
  const chunks = Array.of<Uint8Array>();
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}
