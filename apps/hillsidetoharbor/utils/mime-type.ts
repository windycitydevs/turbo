export const assetType = (path: string) =>
  path?.split(/([.])/gim)?.reverse()?.[0] as
    | "avif"
    | "bmp"
    | "cjs"
    | "css"
    | "csv"
    | "doc"
    | "docx"
    | "eot"
    | "gif"
    | "htm"
    | "html"
    | "gz"
    | "js"
    | "mjs"
    | "ico"
    | "jpeg"
    | "jpg"
    | "json"
    | "jsonld"
    | "m3u8"
    | "mp4"
    | "ndjson"
    | "pkpass"
    | "png"
    | "svg"
    | "tif"
    | "tiff"
    | "ts"
    | "ttf"
    | "webp"
    | "woff"
    | "woff2";

export const deriveAssetMimeType = (path: string) =>
  assetType(path) === "avif"
    ? ("image/avif" as const)
    : assetType(path) === "bmp"
    ? ("image/bmp" as const)
    : assetType(path) === "cjs"
    ? ("application/javascript" as const)
    : assetType(path) === "gif"
    ? ("image/gif" as const)
    : assetType(path) === "jpg"
    ? ("image/jpeg" as const)
    : assetType(path) === "jpeg"
    ? ("image/jpeg" as const)
    : assetType(path) === "js"
    ? ("application/javascript" as const)
    : assetType(path) === "json"
    ? ("application/json" as const)
    : assetType(path) === "jsonld"
    ? ("application/ld+json" as const)
    : assetType(path) === "m3u8"
    ? (`application/vnd.apple.mpegurl` as const)
    : assetType(path) === "mjs"
    ? ("application/javascript" as const)
    : assetType(path) === "mp4"
    ? ("video/mp4" as const)
    : assetType(path) === "ndjson"
    ? ("application/x-ndjson" as const)
    : assetType(path) === "pkpass"
    ? ("application/vnd.apple.pkpass" as const)
    : assetType(path) === "png"
    ? ("image/png" as const)
    : assetType(path) === "tif"
    ? ("image/tif" as const)
    : assetType(path) === "tiff"
    ? ("image/tif" as const)
    : assetType(path) === "webp"
    ? ("image/webp" as const)
    : ("application/octet-stream" as const);