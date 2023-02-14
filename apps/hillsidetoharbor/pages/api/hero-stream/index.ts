export const config = {
  runtime: "edge"
};

const heroFetcher = () =>
  fetch(new URL("../../../public/hero.avif", import.meta.url));

export default async function HeroEdge() {
  const [avifData] = await Promise.all([heroFetcher()]);

  return new Response(avifData.body, {
    status: avifData.status,
    headers: {
      "Content-Type": avifData.headers.get("Content-Type") || "image/avif",
      "Cache-Control": "public, max-age=604800, must-revalidate=1987200"
    }
  });
}
