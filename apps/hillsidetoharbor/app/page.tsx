import { demos } from "@/lib/demos";
import { getHomePageData } from "@/lib/fetch-wp";
import { HomeProps } from "@/types/home-props";
import AddressBar from "@/ui/AddressBar";
import HeroImageComponent, { preload } from "@/ui/HeroImage";
import { Inspector } from "@windycitydevs/ui";
import Link from "next/link";
import GlobalNav from "./GlobalNav";
import { inferObj } from "@/types/helpers";

const getData = getHomePageData({ id: "index", idType: "URI" });

export default async function Page() {
  const [data] = await Promise.all<HomeProps>([getData]);
  preload(data.page.hero);

  return (
    <>
      <HeroImageComponent {...data.page.hero} />
      <div className='grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8'>
        <div className='col-start-2'>
          <GlobalNav />
        </div>
        <div className='col-start-3 space-y-6'>
          <AddressBar />
          <div className='rounded-xl border border-zinc-800 bg-black p-8'>
            <div className='space-y-6'>
              <div className='space-y-8 text-white'>
                {demos
                  .filter(section =>
                    section?.items?.some(
                      x => typeof x.isDisabled === "undefined"
                    )
                  )
                  .map(section => {
                    return (
                      <div key={section.name} className='space-y-3'>
                        <div className='text-xs font-semibold uppercase tracking-wider text-zinc-500'>
                          {section.name}
                        </div>
                        <div className='grid grid-cols-2 gap-5'>
                          {section.items
                            .filter(item => !item.isDisabled)
                            .map(item => {
                              return (
                                <Link
                                  href={`/${item.slug}`}
                                  key={item.name}
                                  className='block space-y-1.5 rounded-lg border border-white/10 px-4 py-3 hover:border-white/20'>
                                  <div>{item.name}</div>

                                  {item.description ? (
                                    <div className='line-clamp-3 text-sm text-zinc-400'>
                                      {item.description}
                                    </div>
                                  ) : null}
                                </Link>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
                <div className={"relative inset-0 mx-auto my-10 min-w-[3/4]"} />
                <Inspector Component='pre' variant='white'>
                  {JSON.stringify({ ...data }, null, 2)}
                </Inspector>
              </div>
            </div>
          </div>
        </div>
        <div className='col-start-3 col-end-4 mt-28 flex items-center justify-center'>
          <div className='text-sm text-zinc-600'>
            Created by{" "}
            <a href='https://github.com/windycitydevs'>
              <b>Windy City Devs</b>
            </a>
            {". "}
            <a
              className='underline decoration-dotted underline-offset-4'
              href='https://github.com/windycitydevs/turbo'>
              View the code
            </a>
            {"."}
          </div>
        </div>
      </div>
    </>
  );
}
