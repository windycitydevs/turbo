import { safeNumberParser } from "@/lib/safe-number-parser";
import { HeroCPTUIProps } from "@/types/home-props";
import {
  blurDataURLShimmer,
  HillsideToHarborHorizontal,
  HillsideToHarborVertical
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
      <div className='relative isolate mx-auto overflow-hidden bg-gray-900  px-6 py-24 transition-all sm:pb-32 sm:pt-20 lg:px-8'>
        <Image
          className={cn(
            `absolute inset-0 -z-10 h-full w-full bg-fixed object-cover object-center`
          )}
          style={{ objectFit: "cover" }}
          quality={100}
          loading='eager'
          priority={true}
          alt='Tennessee Harbor'
          height={heroImage.mediaDetails.height}
          width={heroImage.mediaDetails.width}
          blurDataURL={blurDataURLShimmer({
            h: safeNumberParser(heroImage.mediaDetails.height),
            w: safeNumberParser(heroImage.mediaDetails.width)
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
          className='absolute -top-52 left-1/2 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0'>
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
        <div className='mx-auto max-w-[75vw] transform-gpu select-none gap-y-10 bg-gradient-to-r from-white/[0.2] via-white/[0.5] to-white/[0.2] pb-4 pt-14 text-center align-bottom transition-transform delay-200 duration-500 ease-in-out [flex:auto] sm:max-w-2xl sm:from-white/[0.175] sm:via-white/[0.5] sm:to-white/[0.175]'>
          <div className='sr-only sm:not-sr-only sm:mx-auto sm:mb-5 sm:mt-auto sm:h-fit sm:min-h-fit sm:w-fit sm:flex-auto sm:content-center sm:pb-8 sm:text-center'>
            <HillsideToHarborHorizontal
              width={435}
              height={187}
              className='sm:-my-10 sm:mx-auto sm:flex-shrink sm:object-scale-down sm:object-center sm:align-top sm:transition-all sm:duration-150 sm:ease-in-out'
            />
          </div>
          <div className='mx-auto mt-auto h-fit min-h-fit w-fit flex-auto content-center pb-2 text-center sm:hidden'>
            <HillsideToHarborVertical className=' mx-auto h-min w-[60%]  flex-shrink object-scale-down object-center align-top transition-all duration-150 ease-in-out' />
          </div>
          <h3 className='text-h2hTurquoise 4xs:text-sm xs:text-sm font-basis-grotesque-pro rounded-lg from-transparent via-white/20 to-transparent text-[0.6275rem] font-medium leading-[0.75rem] transition-colors ease-in-out [h3:text-3xl] sm:mt-6 sm:pt-2 sm:text-3xl lg:text-4xl'>
            {cta.toUpperCase()}&nbsp;
            <hr className='mx-auto mt-[0.4375rem] w-[75%] pb-[0.2675rem]' />
            <p className='font-basis-grotesque-pro smxs:text-base mx-auto w-[75%] text-[0.6275rem] font-normal leading-[0.75rem] text-gray-100 sm:w-[100%] sm:text-lg lg:text-xl'>
              {subCta}
            </p>
          </h3>
        </div>
      </div>
    );
  }
);

export default HeroImageComponent;
