import { fileToBuffer, handleSiteUrl, withWs } from "@/lib/constants";

const readWebManifest = fileToBuffer({
  cwd: process.cwd(),
  path: "og/manifest/site.webmanifest"
}).toString("utf-8");

// prettier-ignore
function transformManifest(manifest: string) {
  return manifest.split(`"start_url": "/"`).join(`"start_url": "${handleSiteUrl(process.env.NODE_ENV, process.cwd())}"`);
}

withWs({
  data: transformManifest(readWebManifest),
  cwd: process.cwd(),
  path: "public/favicon/site.webmanifest"
});
