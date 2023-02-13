"use-client";
import { HeroCPTUIProps } from "@/types/home-props";
import {
  blurDataURLShimmer,
  HillsideToHarborHorizontal
} from "@windycitydevs/ui";
import cn from "clsx";
import Image from "next/image";
import { cache } from "react";
export type HeroImageComponeentProps = {
  src: string;
  width: SafeNumber;
  height: SafeNumber;
};
export const preload = ({
  ...props
}: Parameters<typeof HeroImageComponent>[0]) => {
  void HeroImageComponent({ ...props });
};
export type SafeNumber = `${number}` | number;

const HeroImageComponent = cache(
  ({ heroImage, cta, subCta }: HeroCPTUIProps) => {
    return (
      <div className='relative isolate transition-all mx-auto overflow-hidden  bg-gray-900 py-24 px-6 sm:py-32 lg:px-8'>
        <Image
          className={cn(`absolute inset-0 -z-10 h-full w-full object-cover`)}
          style={{ objectFit: "cover"}}
          quality={100}
          priority={true}

          alt='archer'
          height={heroImage.mediaDetails.height}
          width={heroImage.mediaDetails.width}
          blurDataURL={blurDataURLShimmer({
            h:
              typeof heroImage.mediaDetails.height === "string"
                ? heroImage.mediaDetails.height?.includes(".") === true
                  ? Number.parseFloat(heroImage.mediaDetails.height)
                  : Number.parseInt(heroImage.mediaDetails.height, 10)
                : heroImage.mediaDetails.height,
            w:
              typeof heroImage.mediaDetails.width === "string"
                ? heroImage.mediaDetails.width.includes(".") === true
                  ? Number.parseFloat(heroImage.mediaDetails.width)
                  : Number.parseInt(heroImage.mediaDetails.width, 10)
                : heroImage.mediaDetails.width
          })}
          placeholder='blur'
          src={heroImage.sourceUrl}
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1097 845'
          aria-hidden='true'
          className='hidden transform-gpu blur-3xl  sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]'>
          <path
            fill='url(#10724532-9d81-43d2-bb94-866e98dd6e42)'
            fillOpacity='.2'
            d='M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z'
          />
          <defs>
            <linearGradient
              id='10724532-9d81-43d2-bb94-866e98dd6e42'
              x1='1097.04'
              x2='-141.165'
              y1='.22'
              y2='363.075'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor='#4E5F4F' />
              <stop offset={1} stopColor='#F49A7A' />
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1097 845'
          aria-hidden='true'
          className='absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0'>
          <path
            fill='url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)'
            fillOpacity='.2'
            d='M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z'
          />
          <defs>
            <linearGradient
              id='8ddc7edb-8983-4cd7-bccb-79ad21097d70'
              x1='1097.04'
              x2='-141.165'
              y1='.22'
              y2='363.075'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor='#4E5F4F' />
              <stop offset={1} stopColor='#F49A7A' />
            </linearGradient>
          </defs>
        </svg>

        <div className='relative mx-auto max-w-2xl gap-y-10 bg-gradient-to-r pt-14 pb-4  from-white/[0.175] via-white/[0.5] to-white/[0.175]  transform-gpu select-none text-center align-bottom transition-transform delay-200 duration-500 ease-in-out font-kaisei-tokumin'>
          <div className="mb-5 flex-row pb-8">
          <HillsideToHarborHorizontal width={435} height={187} className="align-top inline-flex -my-10" />
          </div>

          <h3 className='text-h2hTurquoise italic via-white/20 mt-6 pt-2 rounded-lg from-transparent to-transparent lg:text-[2rem] lg:leading-[2.375rem] font-medium leading-8 transition-colors ease-in-out sm:text-3xl'>
            {cta.toUpperCase()}&nbsp;
            <hr className="w-[75%] mx-auto mt-2.5 pb-[0.2675rem]" />
            <em className="lg:text-2xl sm:text-xl font-medium text-gray-100">{subCta}</em>
          </h3>
        </div>
      </div>
    );
  }
);

export default HeroImageComponent;
