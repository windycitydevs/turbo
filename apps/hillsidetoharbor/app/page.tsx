import { getHomePageData } from "@/lib/fetch-wp";
import AboutUs, { preloadAboutUs } from "@/ui/About";
import HeroImageComponent, { preload } from "@/ui/HeroImage";
import Subhero, { preloadSubHero } from "@/ui/Subhero";

async function getData() {
  return getHomePageData({ id: "a-fresh-start", idType: "Uri" });
}

export default async function Page() {
  const [data] = await Promise.all([getData()]);
  preload(data.page.hero);
  preloadSubHero(data.page.hero);
  preloadAboutUs(data.page.about);

  return (
    <>
      <HeroImageComponent {...data.page.hero} />
      <Subhero {...data.page.hero} />
      <AboutUs {...data.page.about} />
    </>
  );
}
