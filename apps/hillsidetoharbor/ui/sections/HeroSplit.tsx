import HeroLogo from "../logos/HeroLogo";

// export type ResProps = {
//   readonly userSpecifications: string;
//   readonly ua: string;
//   readonly userDevice: string;
//   readonly viewport: string;
//   readonly data: {
//     readonly lat: string;
//     readonly lng: string;
//     readonly ip: string;
//     readonly browser: string;
//     readonly city: string;
//     readonly country: string;
//   };
// };

// export const fetcher = (
//   input: RequestInfo,
//   init?: RequestInit
// ): Promise<ResProps> =>
//   fetch(input, init).then(res => res.json() satisfies Promise<ResProps>);

// export const useSWRHook = ({ userAgentKnown }: { userAgentKnown: boolean }) => {
//   const { data, error, isLoading, isValidating } = useSWR(
//     userAgentKnown === false
//       ? process.env.NODE_ENV !== "development"
//         ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/params`
//         : "/api/params"
//       : null,
//     fetcher,
//     {
//       refreshInterval: 100000,
//       fetcher: fetcher
//     }
//   );

//   return {
//     data,
//     error,
//     isLoading,
//     isValidating
//   };
// };

export const HeroSplit = () => {
  // const [uaKnown, setUaKnown] = useState<boolean>(false);
  // const { data, error, isLoading, isValidating } = useSWRHook({
  //   userAgentKnown: uaKnown
  // });

  // const [visible, setIsVisible] = useState<boolean>(true);

  // const useCallbackClick = useCallback(
  //   (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
  //     e.preventDefault();
  //     if (visible === true) {
  //       setIsVisible(false);
  //     }
  //   },
  //   [visible]
  // );

  // const useCallbackData = useCallback(
  //   (e: SyntheticEvent<HTMLDivElement, Event>) => {
  //     e.preventDefault();
  //     if (
  //       typeof data !== "undefined" &&
  //       data?.userDevice?.substring(0).length > 1
  //     ) {
  //       setUaKnown(true);
  //     } else {
  //       return;
  //     }
  //   },
  //   [data]
  // );
  // console.log(`[user-data]: ${data ?? {}}` ?? "");
  return (
    <>
      <div
        // onLoad={useCallbackData}
        className='relative grid h-screen max-h-[1680px] min-h-[80vh] grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1'>
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
          <div className='bg-h2hDarkGreen absolute inset-0 h-full w-full object-cover  object-center lg:border-collapse lg:border-b-4 lg:border-l-4 lg:border-b-white lg:border-l-white'></div>
          <div className='relative flex w-full flex-col-reverse items-start justify-start pr-8 sm:py-6 sm:pr-12'>
            <div className='flex flex-row-reverse'>
              <span className='inline-flex items-start justify-around space-x-2'>
                <span className='font-basis-grotesque-pro text-neutral max-2xl 6xl:text-[12rem] 6xl:leading-[12.25rem] ml-5 inline-block text-left align-bottom text-[6.66666666666667vw] font-medium leading-[6.944444vw] tracking-[-0.06rem] lg:max-w-4xl'>
                  {"Helping You Navigate Challenging Situations"}
                  <svg
                    width='12'
                    height='12'
                    viewBox='0 0 12 12'
                    fill='none'
                    aria-hidden='true'
                    className='ml-1.5 inline-block -translate-y-2.5 align-bottom lg:-translate-y-3.5'
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
