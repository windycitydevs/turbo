// import { getHomePageData } from "@/lib/fetch-wp";
// import AboutUs from "@/ui/About";
// import Email from "@/ui/Email";
import Cta from "@/ui/sections/Cta";
import { HeroSplit } from "@/ui/sections/HeroSplit";
import SubHero from "@/ui/sections/SubHero";
import WeBuyFixerUppers from "@/ui/sections/WeBuyFixerUppers";
import WeCreateWinWins from "@/ui/sections/WeCreateWinWins";

// async function getData() {
//   return getHomePageData({ id: "a-fresh-start", idType: "Uri" });
// }

export default async function Page() {
  // preloadSubHero(data.page.hero);
  return (
    <>
      <HeroSplit />
      <SubHero />
      <WeBuyFixerUppers />
      <WeCreateWinWins />
      <Cta />
      {/* <AboutUs {...data.page.about} />
      <Email /> */}
    </>
  );
}
