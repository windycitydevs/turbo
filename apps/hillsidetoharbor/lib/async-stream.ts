import { deriveAssetMimeType } from "@/utils/mime-type";

export const AssetToBufferView = async <T extends string = string>(path: T) => {
  const fetcher = await fetch(path).then(t => t.arrayBuffer());
  const reader = new ReadableStream({
    type: "bytes",
    async pull(controller) {
      const byobRequest = controller.byobRequest;
      byobRequest?.respond(byobRequest?.view?.byteLength!);
    }
  });
  const readerByob = new ReadableStreamBYOBReader(reader);
  const readableByteStream = fetcher;

  const data = await readerByob.read(Buffer.from(readableByteStream));

  return `data:${deriveAssetMimeType(path)};base64, ${Buffer.from(
    Buffer.from(data.value!).toJSON().data
  ).toString("base64")}` as const;
};
