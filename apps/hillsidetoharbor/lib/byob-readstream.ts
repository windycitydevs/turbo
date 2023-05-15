import type { EnhancedNextApiRequest } from "./page-api-util";

export function getRawBody<T>(req: EnhancedNextApiRequest<T>) {
  return new Promise(async (resolve, reject) => {
    const readable = new ReadableStream({
      type: "bytes",
      async pull(controller) {
        const byobRequest = controller.byobRequest;
        byobRequest?.respond(byobRequest?.view?.byteLength!);
      }
    });
    const reader = new ReadableStreamBYOBReader(readable);
    const bodyStream = Buffer.from(
      Buffer.from(JSON.stringify(req.body)).toJSON().data
    );
    const first = await reader.read(bodyStream);
    console.log(first);
    let bodyChunks = Array.of<Uint8Array>();
    req.on("end", () => {
      const rawBody = Buffer.concat(bodyChunks).toString("utf8");
      resolve(rawBody);
    });
    req.on("data", chunk => bodyChunks.push(chunk));
  });
}
