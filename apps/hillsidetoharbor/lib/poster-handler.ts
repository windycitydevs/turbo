export interface ParsedUrlInfo {
  href: string;
  protocol: string;
  baseUrl: string;
  host: string;
  pathname: string;
  search: string;
  hash: string;
}

export const URL_REGEX =
  /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;

export function parseUrl(url?: string): ParsedUrlInfo | undefined {
  if (!url) {
    return;
  }

  const parsed: RegExpExecArray | null = URL_REGEX.exec(url);

  if (!parsed || parsed.length < 1) {
    return;
  }

  return {
    href: parsed[0],
    protocol: parsed[1],
    baseUrl: `${parsed[1]}${parsed[3]}`,
    host: parsed[4],
    pathname: parsed[5],
    search: parsed[6],
    hash: parsed[8]
  };
}
export const possibleVideoExtensions = (url: string) =>
  url?.includes(".mp4")
    ? ".mp4"
    : url?.includes(".m3u8")
    ? ".m3u8"
    : url.includes(".ogg")
    ? ".ogg"
    : url.includes(".ogv")
    ? ".ogv"
    : url.includes(".m4v")
    ? ".m4v"
    : url.includes(".m4s")
    ? ".m4s"
    : url.includes(".webm")
    ? ".webm"
    : " ";
export const videoBase =
  "https://res.cloudinary.com/windycitydevs/video/upload/" as const;
export const videoToFormatAutoPoster = `${videoBase}f_auto` as const;
export const videoSpAutoSansPg = `${videoBase}sp_auto` as const;
export const videoSpAutoPg4 = `${videoBase}sp_auto/pg_4` as const;
export const videoSpAutoPg3 = `${videoBase}sp_auto/pg_3` as const;
export const videoSpAutoPg2 = `${videoBase}sp_auto/pg_2` as const;
export const videoSpAutoPg1 = `${videoBase}sp_auto/pg_1` as const;
export const videoVc264 = `${videoBase}vc_h264` as const;
export const videoVc265 = `${videoBase}vc_h265` as const;
export const videoFmp4 = `${videoBase}f_mp4` as const;
export const videoFwebm = `${videoBase}f_webm` as const;
export const videoFm4s = `${videoBase}f_m4s` as const;
export const videoFm3u8 = `${videoBase}f_m3u8` as const;
export const videoFauto = `${videoBase}f_auto` as const;

export const CloudinaryVideoToPosterConditional = (url: string) =>
  url.includes(videoVc264)
    ? url
        .replace(videoVc264, videoToFormatAutoPoster)
        .split(possibleVideoExtensions(url))[0]
        .concat(".webp")
    : url.includes(videoVc265)
    ? url
        .replace(videoVc265, videoToFormatAutoPoster)
        .split(possibleVideoExtensions(url))[0]
        .concat(".webp")
    : url.includes(videoFmp4)
    ? url
        .replace(videoFmp4, videoToFormatAutoPoster)
        .split(possibleVideoExtensions(url))[0]
        .concat(".webp")
    : url.includes(videoFwebm)
    ? url
        .replace(videoFwebm, videoToFormatAutoPoster)
        .split(possibleVideoExtensions(url))[0]
        .concat(".webp")
    : url.includes(videoFm4s)
    ? url
        .replace(videoFm4s, videoToFormatAutoPoster)
        .split(possibleVideoExtensions(url))[0]
        .concat(".webp")
    : url.includes(videoFauto)
    ? url
        .replace(videoFauto, videoToFormatAutoPoster)
        .split(possibleVideoExtensions(url))[0]
        .concat(".webp")
    : url.includes(videoSpAutoPg4)
    ? url
        .replace(videoSpAutoPg4, videoToFormatAutoPoster)
        .split(possibleVideoExtensions(url))[0]
        .concat(".webp")
    : url.includes(videoSpAutoPg3)
    ? url
        .replace(videoSpAutoPg3, videoToFormatAutoPoster)
        .split(possibleVideoExtensions(url))[0]
        .concat(".webp")
    : url.includes(videoSpAutoPg2)
    ? url
        .replace(videoSpAutoPg2, videoToFormatAutoPoster)
        .split(possibleVideoExtensions(url))[0]
        .concat(".webp")
    : url.includes(videoSpAutoPg1)
    ? url
        .replace(videoSpAutoPg1, videoToFormatAutoPoster)
        .split(possibleVideoExtensions(url))[0]
        .concat(".webp")
    : url.includes(videoSpAutoSansPg)
    ? url
        .replace(videoSpAutoSansPg, videoToFormatAutoPoster)
        .split(possibleVideoExtensions(url))[0]
        .concat(".webp")
    : url.includes(videoBase)
    ? url
        .replace(
          parseUrl(url)?.pathname ?? "",
          parseUrl(url)?.pathname?.split(/([.])/gim)[0]?.concat(".webp") ?? ""
        )
        .replace(videoBase, videoToFormatAutoPoster.concat("/"))
    : url;

/**
 *
##### INPUT
```ts
const videoData = [
  `https://res.cloudinary.com/windycitydevs/video/upload/v1657259586/Windy-City-Devs-stock.ogg`,
  `https://res.cloudinary.com/windycitydevs/video/upload/v1657259586/Windy-City-Devs-stock.ogv`,
  `https://res.cloudinary.com/windycitydevs/video/upload/v1657259586/Windy-City-Devs-stock.webm`,
  `https://res.cloudinary.com/windycitydevs/video/upload/vc_h264/v1657259586/Windy-City-Devs-stock.mp4`,
  `https://res.cloudinary.com/windycitydevs/video/upload/f_mp4/v1657259586/Windy-City-Devs-stock.mp4`,
  `https://res.cloudinary.com/windycitydevs/video/upload/vc_h265/v1657259586/Windy-City-Devs-stock.mp4`,
  `https://res.cloudinary.com/windycitydevs/video/upload/sp_auto/pg_3/v1657259586/Windy-City-Devs-stock.m4s`
] as const;
videoData.map((url, i) => {
  return console.log(
    `[${i++}]: ${ExtractPosterPathFromCloudinaryVideoId(url)}`
  );
});
```
---

##### OUTPUT
```bash
dopaminedriven@LAPTOP-2IH011V4:~/wcd/turbo/apps/drisdell$ yarn tsx lib/poster-handler.ts
yarn run v1.22.19
$ /home/dopaminedriven/wcd/turbo/node_modules/.bin/tsx lib/poster-handler.ts
[0]: https://res.cloudinary.com/windycitydevs/video/upload/f_auto/v1657259586/Windy-City-Devs-stock.webp
[1]: https://res.cloudinary.com/windycitydevs/video/upload/f_auto/v1657259586/Windy-City-Devs-stock.webp
[2]: https://res.cloudinary.com/windycitydevs/video/upload/f_auto/v1657259586/Windy-City-Devs-stock.webp
[3]: https://res.cloudinary.com/windycitydevs/video/upload/f_auto/v1657259586/Windy-City-Devs-stock.webp
[4]: https://res.cloudinary.com/windycitydevs/video/upload/f_auto/v1657259586/Windy-City-Devs-stock.webp
[5]: https://res.cloudinary.com/windycitydevs/video/upload/f_auto/v1657259586/Windy-City-Devs-stock.webp
[6]: https://res.cloudinary.com/windycitydevs/video/upload/f_auto/v1657259586/Windy-City-Devs-stock.webp
Done in 0.23s.
```
 */

export const ExtractPosterPathFromCloudinaryVideoId = (url: string) =>
  CloudinaryVideoToPosterConditional(url);

// const videoData = [
//   `https://res.cloudinary.com/windycitydevs/video/upload/v1657259586/Windy-City-Devs-stock.ogg`,
//   `https://res.cloudinary.com/windycitydevs/video/upload/v1657259586/Windy-City-Devs-stock.ogv`,
//   `https://res.cloudinary.com/windycitydevs/video/upload/v1657259586/Windy-City-Devs-stock.webm`,
//   `https://res.cloudinary.com/windycitydevs/video/upload/vc_h264/v1657259586/Windy-City-Devs-stock.mp4`,
//   `https://res.cloudinary.com/windycitydevs/video/upload/f_mp4/v1657259586/Windy-City-Devs-stock.mp4`,
//   `https://res.cloudinary.com/windycitydevs/video/upload/vc_h265/v1657259586/Windy-City-Devs-stock.mp4`,
//   `https://res.cloudinary.com/windycitydevs/video/upload/sp_auto/pg_3/v1657259586/Windy-City-Devs-stock.m4s`
// ] as const;
// videoData.map((url, i) => {
//   return console.log(
//     `[${i++}]: ${ExtractPosterPathFromCloudinaryVideoId(url)}`
//   );
// });
