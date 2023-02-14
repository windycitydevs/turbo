import type { HeroCPTUIProps } from "@/types/home-props";
import { blurDataURLShimmer } from "@windycitydevs/ui";
import Image from "next/image";
import { cache } from "react";
export const perloadSubHero = ({
  ...props
}: Parameters<typeof SubHeroTwo>[0]) => {
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
    <div className='bg-h2hDarkGreen isolate mx-auto w-full justify-items-center overflow-hidden py-16  sm:py-6 lg:px-8'>
      <div className='max-w-8xl mx-auto flex w-full flex-row justify-center px-6 lg:px-8'>
        <ul
          role='list'
          className='mx-auto grid max-w-3xl grid-cols-1 justify-center gap-x-8 text-center sm:grid-cols-2 lg:mx-0 lg:max-w-[65vw] lg:grid-cols-3 lg:gap-x-16'>
          {subHeroImages3.map(sub => (
            <li
              key={sub.subHeroImage.databaseId}
              className='max-w-2xl scale-[0.9] flex-col'>
              <h3 className='font-montserrat mb-6 text-3xl font-normal leading-8 tracking-tight text-gray-100'>
                {sub.subHeroImageCta}
              </h3>
              <Image
                className='my-2 aspect-square h-auto w-full border-collapse self-center rounded-full border-2 border-gray-100 object-cover drop-shadow-sm'
                src={sub.subHeroImage.sourceUrl}
                alt={sub.subHeroImage.altText ?? sub.subHeroImageCta}
                quality={100}
                placeholder={"blur"}
                blurDataURL={blurDataURLShimmer({ w: 300, h: 300 })}
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
export default SubHeroTwo;
