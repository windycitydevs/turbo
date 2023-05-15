import type { FC } from "react";
import Hand from "../vectors/Hand";
import House from "../vectors/House";
import PuzzlePiece from "../vectors/PuzzlePiece";

const SubHero: FC = () => {
  return (
    <div className='relative isolate overflow-visible bg-white'>
      <div className='flow-root pb-16 pt-24 sm:pt-[5rem]'>
        <div className='mx-auto my-0 max-w-[85rem] px-[2.5rem] align-top lg:pb-[5rem]'>
          <div className='font-basis-grotesque-pro relative mx-auto grid max-w-md grid-cols-1 gap-x-[1.25rem] gap-y-8 lg:mx-0 lg:my-0 lg:-mb-14 lg:max-w-full lg:grid-cols-3 '>
            <div className='relative my-0'>
              <div className='rounded-[1.5rem] bg-[#E9DFCA]/30 px-4 py-16 lg:p-12 '>
                <div className='mx-auto flow-root'>
                  <Hand className='mx-auto h-fit w-[10.030625rem]' />
                </div>
              </div>
              <h3 className='text-h2hDarkGreen text-[2rem] font-extrabold leading-[100%] tracking-[-0.06em] lg:mt-[1rem]'>
                We pay cash
              </h3>
              <span className='text-[1.3125rem] font-normal leading-[140%] tracking-[-0.06em] text-[#313A2E] lg:mt-[0.75rem] '>
                No auctions or signs in your yard.
              </span>
            </div>
            <div className='relative z-[100] my-0'>
              <div className='rounded-[2.1875rem] bg-[#ECF0F4] p-8 lg:pt-12 xl:p-10 xl:pt-14'>
                <div className='mx-auto flow-root'>
                  <House className='mx-auto h-fit w-[12.68rem]' />
                </div>
              </div>
              <h3 className='text-h2hDarkGreen text-[2rem] font-extrabold leading-[100%] tracking-[-0.06em] lg:mt-[1rem]'>
                We close fast
              </h3>
              <span className='text-[1.3125rem] font-normal leading-[140%] tracking-[-0.06em] text-[#313A2E] lg:mt-[0.75rem] '>
                No open houses or surprise walkthroughs.
              </span>
            </div>
            <div className='relative my-0'>
              <div className='rounded-[2rem] bg-[#EEEFE6] p-4 xl:px-10'>
                <div className='mx-auto flow-root'>
                  <PuzzlePiece className='mx-auto h-fit w-[10.639375rem]' />
                </div>
              </div>
              <h3 className='text-h2hDarkGreen text-[2rem] font-extrabold leading-[100%] tracking-[-0.06em] lg:mt-[1rem]'>
                We solve problems
              </h3>
              <span className='text-[1.3125rem] font-normal leading-[140%] tracking-[-0.06em] text-[#313A2E] lg:mt-[0.75rem] '>
                No repairs needed - we buy your house &quot;as-is&quot;.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
