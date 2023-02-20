import { safeNumberParser } from "@/lib/safe-number-parser";
import type { AboutSectionProps } from "@/types/home-props";
import { blurDataURLShimmer } from "@windycitydevs/ui";
import Image from "next/image";
import { cache } from "react";

export const preloadAboutUs = ({ ...props }: Parameters<typeof AboutUs>[0]) => {
  void AboutUs({ ...props });
};

const AboutUs = cache(({ aboutimage, abouttextarea }: AboutSectionProps) => {
  return (
    <div className='relative bg-gray-100 font-montserrat '>
      <div className='relative h-80 overflow-hidden grayscale bg-h2hPinkOrange md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/3'>
        <Image
          className='h-full w-full object-cover bg-blend-multiply'
          src={aboutimage.sourceUrl}
          alt={aboutimage.altText}
          width={aboutimage.mediaDetails.height}
          height={aboutimage.mediaDetails.width}
          quality={100}
          placeholder='blur'
          blurDataURL={blurDataURLShimmer({
            w: safeNumberParser(aboutimage.mediaDetails.width),
            h: safeNumberParser(aboutimage.mediaDetails.height)
          })}
        />
        <svg
          viewBox='0 0 926 676'
          aria-hidden='true'
          className='absolute left-24 -bottom-24 w-[57.875rem] transform-gpu blur-[118px]'>
          <path
            fill='url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)'
            fillOpacity='.4'
            d='m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z'
          />
          <defs>
            <linearGradient
              id='60c3c621-93e0-4a09-a0e6-4c228a0116d8'
              x1='926.392'
              x2='-109.635'
              y1='.176'
              y2='321.024'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor='#F49A7A' />
              <stop offset={1} stopColor='#FF4694' />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8'>
        
        <div className='pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-2/3 lg:pl-12 lg:pr-0 xl:pl-32'>
          <h4 className='mt-2 text-4xl font-bold tracking-tight text-h2hTurquoise'>
            About Us
          </h4>
          <p className='mt-6 text-base leading-7 text-gray-800 ' dangerouslySetInnerHTML={{__html: abouttextarea}} />
          <div className='mt-8'>
            <a
              className='inline-flex rounded-md bg-h2hTurquoise/90 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-h2hTurquoise/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              href={`mailto:contact@hillsidetoharbor.com`}
              target='_blank'
              rel='noreferrer noopener'>
              Let us know how we can help
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutUs;

/**
  <Button
              variant={variantEmail ?? "secondary"}
              Component='a'
              className='mx-auto'
              href={`mailto:contact@hillsidetoharbor.com`}
              target='_blank'
              rel='noreferrer noopener'>
              <span className='sr-only'>Email</span>
              <EnvelopeIcon className=' h-5 w-5' aria-hidden='true' />
            </Button>

                  <div className='relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8'>
        <div className='pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32'>
          <h2 className='text-base font-semibold leading-7 text-indigo-400'>
            Award winning support
          </h2>
          <p className='mt-2 text-4xl font-bold tracking-tight text-white'>
            We’re here to help
          </p>
          <p className='mt-6 text-base leading-7 text-gray-300'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.

 */
