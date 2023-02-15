export const glbBlobby = async (base64DataUrl: string): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const sliceSize = 512;
    const typeMatch = base64DataUrl.match(/data:(.*);/);

    if (!typeMatch) {
      return reject(new Error(`${base64DataUrl} is not a valid data Url`));
    }

    const type = typeMatch[1];
    const base64 = base64DataUrl.replace(/data:model\/gltf-binary;base64,/, "");
    // window.atob(base64);
    const byteCharacters = Buffer.from(base64, "base64").toString("utf-8");
    const byteArrays = Array.of<Uint8Array>();

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = Array.of<number>(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    resolve(new Blob(byteArrays, { type }));
  });
};
