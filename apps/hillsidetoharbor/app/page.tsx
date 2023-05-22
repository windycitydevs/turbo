import Cta from "@/ui/sections/Cta";
import { HeroSplit } from "@/ui/sections/HeroSplit";
import SubHero from "@/ui/sections/SubHero";
import WeBuyFixerUppers from "@/ui/sections/WeBuyFixerUppers";
import WeCreateWinWins from "@/ui/sections/WeCreateWinWins";

// async function getData() {
//   return getHomePageData({ id: "a-fresh-start", idType: "Uri" });
// }

export default async function Page() {
  return (
    <>
      <HeroSplit />
      <SubHero />
      <WeBuyFixerUppers />
      <WeCreateWinWins />
      <Cta />
    </>
  );
}
