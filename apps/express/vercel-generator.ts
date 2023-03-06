import fsSync from "fs";
import { join } from "path";

const getPublicRootData = fsSync
  .readdirSync(join(process.cwd(), "public"), {
    encoding: "utf-8",
    withFileTypes: false
  })
  .filter(
    data => data.split(/([.])/gim).length >= 2 && !data.includes("sitemap")
  );

const cacheControlHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=604800, must-revalidate=1987200"
  }
];

const publicRootData = () =>
  getPublicRootData.map(pub => {
    return {
      source: `/${pub}`,
      headers: cacheControlHeaders
    };
  });

const dataSources = publicRootData();

const ws = fsSync.createWriteStream(join(process.cwd(), "vercel.json"), {
  autoClose: true
});

/**
 * generate `vercel.json` from workup
 */
(function VercelIIFE() {
  return ws.write(
    Buffer.from(
      Buffer.from(
        JSON.stringify(
          {
            $schema: "https://openapi.vercel.sh/vercel.json",
            rewrites: [
              {
                source: "/api/(.*)",
                destination: "/(.*)"
              }
            ],
            headers: dataSources
          },
          null,
          2
        )
      ).toJSON().data
    ).valueOf() satisfies Uint8Array
  );
})();
