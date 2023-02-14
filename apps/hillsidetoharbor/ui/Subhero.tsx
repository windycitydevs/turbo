import type { HeroCPTUIProps } from "@/types/home-props";
import { blurDataURLShimmer } from "@windycitydevs/ui";
import Image from "next/image";
import { cache } from "react";
export const perloadSubHero = ({ ...props }: Parameters<typeof SubHeroTwo>[0]) => {
  void SubHeroTwo({ ...props });
};

const Subhero = cache(({ subHeroImages3 }: HeroCPTUIProps) => {
  return (
    <div className='bg-h2hDarkGreen relative mx-auto w-full justify-center'>
      <div className='lg:max-w-10xl mx-auto max-w-2xl py-8 px-4 sm:px-6 sm:pb-8 lg:px-12'>
        <div className='mt-5 flex items-center justify-evenly bg-transparent sm:mt-8'>
          {subHeroImages3.map(sub => (
            <div
              key={sub.subHeroImage.databaseId}
              className='flex flex-col-reverse'>
              <div className='mt-6'>
                <h3 className='font-montserrat text-lg font-medium text-gray-50'>
                  {sub.subHeroImageCta}
                </h3>
                <p className='mt-2 text-sm text-gray-500'>
                  {sub.subHeroImageSubCta}
                </p>
              </div>
              <div className='aspect-square flex-grow'>
                <Image
                  quality={100}
                  priority={true}
                  width={sub.subHeroImage.mediaDetails.width}
                  height={sub.subHeroImage.mediaDetails.height}
                  alt={sub.subHeroImage.altText}
                  src={sub.subHeroImage.sourceUrl}
                  placeholder='blur'
                  blurDataURL={blurDataURLShimmer({
                    h:
                      typeof sub.subHeroImage.mediaDetails.height === "string"
                        ? sub.subHeroImage.mediaDetails.height.includes(".") ===
                          true
                          ? Number.parseFloat(
                              sub.subHeroImage.mediaDetails.height
                            )
                          : Number.parseInt(
                              sub.subHeroImage.mediaDetails.height,
                              10
                            )
                        : sub.subHeroImage.mediaDetails.height,
                    w:
                      typeof sub.subHeroImage.mediaDetails.width === "string"
                        ? sub.subHeroImage.mediaDetails.width.includes(".") ===
                          true
                          ? Number.parseFloat(
                              sub.subHeroImage.mediaDetails.width
                            )
                          : Number.parseInt(
                              sub.subHeroImage.mediaDetails.width,
                              10
                            )
                        : sub.subHeroImage.mediaDetails.width
                  })}
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className='rounded-full'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});



export const SubHeroTwo = ({ subHeroImages3 }: HeroCPTUIProps) => {
  return (
    <div className='bg-h2hDarkGreen w-full py-16 sm:py-6 isolate mx-auto overflow-hidden  justify-items-center lg:px-8'>
      <div className='mx-auto flex flex-row max-w-8xl w-full justify-center px-6 lg:px-8'>
        <ul
          role='list'
          className='mx-auto text-center justify-center grid max-w-3xl grid-cols-1 gap-x-8 sm:grid-cols-2 lg:mx-0 lg:gap-x-16 lg:max-w-[65vw] lg:grid-cols-3'>
          {subHeroImages3.map(sub => (
            <li key={sub.subHeroImage.databaseId} className="max-w-2xl flex-col scale-[0.9]">
                                          <h3 className='mb-6 text-3xl font-normal font-montserrat leading-8 tracking-tight text-gray-100'>
                {sub.subHeroImageCta}
              </h3>
              <Image
                className='aspect-square drop-shadow-sm border-collapse border-2 border-gray-100 self-center my-2 w-full h-auto rounded-full object-cover'
                src={sub.subHeroImage.sourceUrl}
                alt=''
                width={sub.subHeroImage.mediaDetails.width}
                height={sub.subHeroImage.mediaDetails.height}
              />
              <p className='text-2xl leading-7 text-gray-200'>
                {sub.subHeroImageSubCta}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SubHeroTwo