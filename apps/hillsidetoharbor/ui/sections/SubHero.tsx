import type { FC } from "react";
import Hand from "../vectors/Hand";
import House from "../vectors/House";
import PuzzlePiece from "../vectors/PuzzlePiece";

const SubHero: FC = () => {
  return (
    <div className='isolate overflow-visible bg-white'>
      <div className='flow-root pt-24 pb-16 sm:pt-[5rem]'>
        <div className='mx-auto max-w-[85rem] px-[2.5rem] lg:pb-[5rem] align-top my-0'>
          <div className='relative mx-auto grid max-w-md grid-cols-1 gap-x-[1.25rem] gap-y-8 lg:mx-0 lg:my-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3 font-basis-grotesque-pro '>
            <div className='relative my-0'>
              <div className='p-4 rounded-[1.5rem] lg:p-12 bg-[#E9DFCA]/30'>
                <div className='mx-auto flow-root'>
                  <Hand className="h-fit w-[10.030625rem] mx-auto" />
                </div>
              </div>
              <h3 className="text-h2hDarkGreen font-extrabold text-[2rem] leading-[100%] tracking-[-0.06em] lg:mt-[1rem]">We pay cash</h3>
              <span className="text-[#313A2E] text-[1.3125rem] leading-[140%] tracking-[-0.06em] lg:mt-[0.75rem] font-normal ">No auctions or signs in your yard.</span>
            </div>
            <div className='relative z-[100] my-0'>
              <div className='p-8 lg:pt-12 xl:p-10 xl:pt-14 bg-[#ECF0F4] rounded-[2.1875rem]'>
                <div className='mx-auto flow-root'>
                  <House className="w-[12.68rem] h-fit mx-auto" />
                </div>
              </div>
              <h3 className="text-h2hDarkGreen font-extrabold text-[2rem] leading-[100%] tracking-[-0.06em] lg:mt-[1rem]">We close fast</h3>
              <span className="text-[#313A2E] text-[1.3125rem] leading-[140%] tracking-[-0.06em] lg:mt-[0.75rem] font-normal ">No open houses or surprise walkthroughs.</span>
            </div>
            <div className='relative my-0'>
              <div className='p-4 rounded-[2rem] bg-[#EEEFE6] xl:px-10'>
                <div className='mx-auto flow-root'>
                  <PuzzlePiece className='h-fit w-[10.639375rem] mx-auto' />
                </div>
              </div>
              <h3 className="text-h2hDarkGreen font-extrabold text-[2rem] leading-[100%] tracking-[-0.06em] lg:mt-[1rem]">We solve problems</h3>
              <span className="text-[#313A2E] text-[1.3125rem] leading-[140%] tracking-[-0.06em] lg:mt-[0.75rem] font-normal ">No repairs needed - we buy your house &quot;as-is&quot;.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
