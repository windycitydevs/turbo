import type { HeroCPTUIProps } from "@/types/home-props";
import { blurDataURLShimmer } from "@windycitydevs/ui";
import clsx from "clsx";
import Image from "next/image";
import { cache } from "react";
export const preloadSubHero = ({
  ...props
}: Parameters<typeof SubHeroTwo>[0]) => {
  void SubHeroTwo({ ...props });
};

export const SubHeroTwo = cache(({ subHeroImages3 }: HeroCPTUIProps) => {
  return (
    <div className='bg-h2hDarkGreen font-basis-grotesque-pro isolate mx-auto w-full justify-items-center overflow-hidden  py-4 sm:py-6 lg:px-8'>
      <div className='sm:max-w-8xl mx-auto flex w-full max-w-2xl flex-row justify-center px-6 lg:px-8'>
        <ul
          role='list'
          className='mx-auto grid max-w-xs grid-cols-1 justify-center text-center sm:max-w-3xl sm:grid-cols-2 sm:gap-x-8 lg:mx-0 lg:max-w-[65vw] lg:grid-cols-3 lg:gap-x-16'>
          {subHeroImages3.map((sub, i) => (
            <li
              key={sub.subHeroImage.databaseId}
              className={clsx(
                "mx-auto my-auto max-w-[85%] scale-[0.9] flex-col py-4 sm:max-w-none",
                i !== 2
                  ? "border-separate border-b-[1px] border-white sm:border-b-[0px]"
                  : ""
              )}>
              <h3 className='4xs:text-lg 2xs:text-2xl text-base font-normal tracking-tight text-gray-100 sm:mb-6 sm:text-3xl sm:leading-8'>
                {sub.subHeroImageCta}
              </h3>
              <Image
                className='my-2 mx-auto aspect-square h-auto w-10/12 border-collapse self-center rounded-full border-2 border-gray-100 object-cover drop-shadow-sm sm:w-full'
                src={sub.subHeroImage.sourceUrl}
                alt={sub.subHeroImage.altText ?? sub.subHeroImageCta}
                quality={100}
                placeholder={"blur"}
                blurDataURL={blurDataURLShimmer({ w: 300, h: 300 })}
                width={sub.subHeroImage.mediaDetails.width}
                height={sub.subHeroImage.mediaDetails.height}
              />
              <p className=' pb-8 text-xs text-gray-200 sm:pb-0 sm:text-2xl sm:leading-7'>
                {sub.subHeroImageSubCta}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
export default SubHeroTwo;
