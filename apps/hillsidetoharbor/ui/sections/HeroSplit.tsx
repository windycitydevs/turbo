import HeroLogo from "../logos/HeroLogo";

export const HeroSplit = () => {
  return (
    <>
      <div
        // onLoad={useCallbackData}
        className='relative grid max-h-fit min-h-fit grid-cols-1 grid-rows-2 sm:h-screen sm:max-h-[1680px] sm:min-h-[80vh] lg:grid-cols-2 lg:grid-rows-1'>
        <div className='bg-neutral relative flex h-full w-full'>
          <div className='relative mx-auto flex w-full flex-col items-center justify-center p-8 sm:p-12'>
            <HeroLogo
              width={237.18}
              height={360.52}
              className='mx-auto self-center'
            />
          </div>
        </div>
        <div className='relative flex h-[45vh] sm:h-full'>
          <div className='bg-h2hDarkGreen absolute inset-0 h-full w-full object-cover  object-center lg:border-collapse lg:border-b-4 lg:border-l-4 lg:border-b-white lg:border-l-white'></div>
          <div className='relative flex w-full flex-col-reverse items-start justify-start pt-6 sm:py-6 sm:pr-12'>
            <div className='flex flex-row-reverse'>
              <span className='inline-flex items-start justify-around space-x-2'>
                <span className='font-basis-grotesque-pro text-neutral max-2xl 6xl:text-[12rem] 6xl:leading-[12.25rem] ml-5 inline-block text-left align-bottom text-[14vw] font-medium leading-[14vw] tracking-[-0.06rem] sm:text-[6.66666666666667vw] sm:leading-[6.944444vw] lg:max-w-4xl'>
                  {"Helping You Navigate Challenging Situations"}
                  <svg
                    width='12'
                    height='12'
                    viewBox='0 0 12 12'
                    fill='none'
                    aria-hidden='true'
                    className='3xl:w-4 3xl:h-4 ml-0.5 inline-block h-2 w-2 -translate-y-1.5 align-bottom sm:ml-1.5 sm:h-3 sm:w-3 sm:-translate-y-2.5 lg:-translate-y-3.5'
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
};
