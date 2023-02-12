import fsSync, { promises as fsAsync } from "fs";
import { join } from "path";

const getMetadata = fsSync.readdirSync(join(process.cwd(), "public/favicon"), {
  encoding: "utf-8",
  withFileTypes: false
});

const getPublicRootData = fsSync
  .readdirSync(join(process.cwd(), "public"), {
    encoding: "utf-8",
    withFileTypes: false
  })
  .filter(
    data =>
      data.split(/([.])/gim).length >= 2 &&
      !data.includes("sitemap") &&
      !data.includes("fonts") &&
      !data.includes("favicon")
  );

const cacheControlHeaders = [
  {
    key: "Cache-Control",
    value: "s-maxage=31536000, immutable"
  }
];

const siteMetadata = () =>
  getMetadata.map(metadata => {
    return {
      source: `/favicon/${metadata}`,
      headers: cacheControlHeaders
    };
  });

const publicRootData = () =>
  getPublicRootData.map(pub => {
    return {
      source: `/${pub}`,
      headers: cacheControlHeaders
    };
  });

const appendDataSources = siteMetadata().concat(publicRootData());

/* generate `vercel.json` from the workup */
(async function VercelIIFE() {
  return await fsAsync.writeFile(
    join(process.cwd(), "vercel.json"),
    JSON.stringify(
      {
        $schema: "https://openapi.vercel.sh/vercel.json",
        headers: appendDataSources
      },
      null,
      2
    )
  );
})();
