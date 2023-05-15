"use-client";
import { blurDataURLShimmer } from "@windycitydevs/ui";
import cn from "clsx";
import Image from "next/image";
import { cache } from "react";
import * as archerGif from "../public/archer.gif";

export const preload = () => {
  void VideoComponent();
};

const VideoComponent = cache(() => {
  return (
    <div className='relative isolate mx-auto overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8'>
      <Image
        className={cn(`absolute inset-0 -z-10 h-full w-full object-cover`)}
        style={{ objectFit: "contain" }}
        quality={100}
        priority={true}
        alt='archer'
        height={archerGif.default.height}
        width={archerGif.default.width}
        blurDataURL={blurDataURLShimmer({
          h: archerGif.default.blurHeight
            ? archerGif.default.blurHeight
            : archerGif.default.height,
          w: archerGif.default.blurWidth
            ? archerGif.default.blurWidth
            : archerGif.default.width
        })}
        placeholder='blur'
        src={archerGif.default.src}
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1097 845'
        aria-hidden='true'
        className='hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]'>
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
            <stop stopColor='#776FFF' />
            <stop offset={1} stopColor='#FF4694' />
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
            <stop stopColor='#776FFF' />
            <stop offset={1} stopColor='#FF4694' />
          </linearGradient>
        </defs>
      </svg>
      <div className='mx-auto max-w-2xl transform-gpu select-none text-center align-bottom transition-transform delay-200 duration-500 ease-in-out'>
        <h2 className='font-kaisei-tokumin from-wcd-red/50 to-wcd-red/50 text-wcd-blue via-transparent text-2xl font-medium tracking-tight transition-colors ease-in-out hover:bg-gradient-to-r sm:text-3xl'>
          {"Windy City Devs LLC"}&nbsp;
        </h2>
        <h3 className='text-wcd-red via-wcd-blue mt-6 rounded-lg from-transparent to-transparent text-4xl font-medium leading-8 transition-colors ease-in-out hover:bg-gradient-to-r'>
          <em>{"Bleeding Edge Solutions Made Simple"}</em>
        </h3>
      </div>
    </div>
  );
});

export default VideoComponent;
