import { getHomePageData } from "@/lib/fetch-wp";
import AboutUs, { preloadAboutUs } from "@/ui/About";
import ContactUs from "@/ui/ContactUs";
import Email from "@/ui/Email";
import HeroImageComponent, { preload } from "@/ui/HeroImage";
import { HeroSplit } from "@/ui/sections/HeroSplit";
import Subhero, { preloadSubHero } from "@/ui/Subhero";

async function getData() {
  return getHomePageData({ id: "a-fresh-start", idType: "Uri" });
}

export default async function Page() {
  const [data] = await Promise.all([getData()]);
  preloadSubHero(data.page.hero);
  preloadAboutUs(data.page.about);

  return (
    <>
      <HeroSplit />
      <Subhero {...data.page.hero} />
      <AboutUs {...data.page.about} />
      <Email />
    </>
  );
}

export const revalidate = 60;