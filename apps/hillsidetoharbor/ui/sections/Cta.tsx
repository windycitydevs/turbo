export function Cta() {
  return (
    <div className='relative flex min-h-fit w-full flex-col justify-evenly overflow-hidden bg-[rgba(249,242,232,0.3)] align-top'>
      <div
        className={`absolute inset-0 bg-center [mask-image:linear-gradient(180deg,rgba(249,242,232,0.3)/30,rgba(249,242,232,0.3))]`}></div>
      <div className='pl- relative mx-[4.93055555555556%] mb-[10.83%] mt-[4.1666%] rounded-[3.88vw] bg-[rgba(249,242,232,1)] ring-1 ring-gray-900/5 drop-shadow-lg sm:max-w-[88.88888vw]'>
        <div className='6xl:gap-x-[5rem] container mx-auto flex max-h-[788px] w-full min-w-full max-w-[2560px] flex-row justify-between gap-x-[13.045375%] selection:text-[#F49A7A]'>
          <div className='relative my-auto mb-[7.77777777777778%] ml-[5.5vw] mt-[8.6111111111111%]  w-[66.67vw] max-w-[1440px] align-top sm:ml-[5rem] sm:w-[49.5833vw]'>
            <h2 className='font-basis-grotesque-pro 6xl:text-[9.5rem] 6xl:leading-[9.5rem] top-0 inline-flex h-fit max-h-[360px] object-contain align-top text-[5.55555555555556vw] font-medium leading-[5.55555555555556vw] tracking-[-0.06em] text-black'>
              Let us know how we can help
            </h2>
          </div>
          <div className='6xl:max-w-[480px] mb-[5.20833333333333%] mr-[5vw] mt-[5.9722%] inline-flex max-w-[16.319%] sm:mr-[5rem]'>
            <svg
              viewBox='0 0 235 235'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-auto w-[16.319vw] min-w-full'>
              <path
                d='M117.5 164.5L164.5 117.5L117.5 70.5'
                stroke='#F49A7A'
                strokeWidth='11.75'
                strokeLinecap='square'
                strokeLinejoin='round'
              />
              <line
                x1='5.875'
                y1='-5.875'
                x2='99.875'
                y2='-5.875'
                transform='matrix(-1 0 0 1 164.5 123.375)'
                stroke='#F49A7A'
                strokeWidth='11.75'
                strokeLinecap='square'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      </div>
      <div className='space-y-[2rem]'>
        <div className='relative mx-auto my-0 text-center sm:w-[47.71%] sm:max-w-[1374px]'>
          <h2 className='font-domaine-display-condensed 6xl:text-[12rem] 6xl:leading-[12rem] text-h2hDarkGreen text-[5.555556vw] font-semibold leading-[5.555556vw] '>
            Get in touch
          </h2>
        </div>
        <div className='max-w-[28.57vw]'>
          <form action='' className=''></form>
        </div>
      </div>
    </div>
  );
}

export default Cta;
