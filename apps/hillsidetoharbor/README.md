### Had to axe because Pro doesn't support more than 2MB of data in edge (enterprise supports 10mb)

- `pages/api/hero-stream.ts`

```ts
export const config = {
  runtime: "edge"
};

const heroFetcher = () =>
  fetch(new URL("../../../public/tennessee-autumn.webp", import.meta.url));

export default async function HeroEdge() {
  const [avifData] = await Promise.all([heroFetcher()]);

  return new Response(avifData.body, {
    status: avifData.status,
    headers: {
      "Content-Type": avifData.headers.get("Content-Type") || "image/webp",
      "Cache-Control": "public, max-age=604800, must-revalidate=1987200"
    }
  });
}
```
