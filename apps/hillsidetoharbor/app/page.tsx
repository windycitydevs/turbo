import { getHomePageData } from "@/lib/fetch-wp";
import HeroImageComponent, { preload } from "@/ui/HeroImage";
import Subhero, { perloadSubHero } from "@/ui/Subhero";

async function getData() {
  return getHomePageData({ id: "a-fresh-start", idType: "URI" });
}

export default async function Page() {
  const [data] = await Promise.all([getData()]);
  preload(data.page.hero);
  perloadSubHero(data.page.hero);

  return (
    <>
      <HeroImageComponent {...data.page.hero} />
      <Subhero {...data.page.hero} />
    </>
  );
}
