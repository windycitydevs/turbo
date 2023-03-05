import HeroLogo from "../logos/HeroLogo";

export const HeroSplit = () => (
  <>
    <div className='grid h-screen min-h-[80vh] grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1'>
      <div className='bg-neutral relative flex h-full w-full'>
        <div className='relative mx-auto flex w-full flex-col items-center justify-center p-8 sm:p-12'>
          <HeroLogo
            width={237.18}
            height={360.52}
            className='mx-auto self-center'
          />
        </div>
      </div>
      <div className='relative flex'>
        <div className='bg-h2hDarkGreen absolute inset-0 h-full w-full lg:border-collapse  lg:border-l-4 lg:border-b-4 lg:border-l-white lg:border-b-white object-cover object-center'></div>
        <div className='relative flex w-full flex-col-reverse items-start justify-start pr-8 sm:py-6 sm:pr-12'>
          <div className='flex flex-row-reverse'>
            <span className='inline-flex items-start justify-around space-x-2'>
              <span className='font-basis-grotesque-pro text-neutral inline-block text-left align-bottom font-medium leading-[100%] lg:leading-[6.25rem] tracking-[-0.06em] max-2xl lg:max-w-4xl text-[3.5rem] lg:text-[6rem] ml-5'>
                {"Helping You Navigate Challenging Situations"}
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  aria-hidden='true'
                  className='inline-block align-bottom -translate-y-2.5 ml-1.5'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z'
                    fill='#F49A7A'
                  />
                </svg>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </>
);
