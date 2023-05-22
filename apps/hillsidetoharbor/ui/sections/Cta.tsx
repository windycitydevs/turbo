"use client";
import type { SubmitGfFormPayload } from "@/gql/graphql";
import Email from "@/ui/vectors/Email";
import FooterVector from "@/ui/vectors/FooterVector";
import Phone from "@/ui/vectors/Phone";
import { HillsideToHarborFooter } from "@windycitydevs/ui";
import cn from "clsx";
import {
  useCallback,
  useEffect,
  useState,
  type FormEvent,
  type ChangeEvent as ReactChangeEvent,
  type MouseEvent as ReactMouseEvent
} from "react";
import useSWR from "swr";

const fetcher = (input: RequestInfo, init?: RequestInit): Promise<any> =>
  fetch(input, init).then(res => res.json());

function UseSwrSync({
  emailState,
  firstNameState,
  isSubmitted,
  lastNameState,
  messageState,
  phoneNumberState
}: {
  emailState: string;
  firstNameState: string;
  lastNameState: string;
  phoneNumberState: string;
  messageState: string;
  isSubmitted: boolean;
}) {
  const { data, isValidating, error } = useSWR<SubmitGfFormPayload>(
    isSubmitted === true
      ? // prettier-ignore
        `/api?email=${emailState}&firstName=${firstNameState}&lastName=${lastNameState}&phoneNumber=${phoneNumberState}&message=${messageState}&timestamp=${new Date(Date.now()).toLocaleString("en-US", {timeZone: "America/New_York", hour12: false }).split(/([,])/gmi).filter((_,r) => r %2 === 0 || r===0).join(" at").concat(" EST")}`
      : null,
    fetcher,
    {}
  );
  return { data, isValidating, error };
}
export function Cta() {
  const [emailState, setEmailState] = useState<string | null>(null);
  const [firstNameState, setfirstNameState] = useState<string | null>(null);
  const [lastNameState, setLastNameState] = useState<string | null>(null);
  const [phoneNumberState, setPhoneNumberState] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [dataState, setDataState] = useState<SubmitGfFormPayload | undefined>(
    undefined
  );
  const { data, isValidating, error } = UseSwrSync({
    emailState: emailState ?? "",
    firstNameState: firstNameState ?? "",
    isSubmitted,
    lastNameState: lastNameState ?? "",
    messageState: message ?? "",
    phoneNumberState: phoneNumberState ?? ""
  });

  const firstNameCb = useCallback(
    (e: ReactChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (firstNameState !== e.currentTarget.value)
        setfirstNameState(e.currentTarget.value);
    },
    [firstNameState]
  );

  const lastNameCb = useCallback(
    (e: ReactChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (lastNameState !== e.currentTarget.value)
        setLastNameState(e.currentTarget.value);
    },
    [lastNameState]
  );

  const textAreaCb = useCallback(
    (e: ReactChangeEvent<HTMLTextAreaElement>) => {
      e.preventDefault();
      if (message !== e.currentTarget.value) setMessage(e.currentTarget.value);
      return e.currentTarget;
    },
    [message]
  );

  const emailCb = useCallback(
    (e: ReactChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (emailState !== e.currentTarget.value) {
        e.currentTarget.value.substring(0).length >= 6 &&
          setInvalidEmail(
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e.currentTarget.value) ===
              false
              ? true
              : false
          );
        setEmailState(e.currentTarget.value);
      }

      return e.currentTarget;
    },
    [emailState]
  );

  const phoneCb = useCallback(
    (e: ReactChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (phoneNumberState !== e.currentTarget.value)
        setPhoneNumberState(e.currentTarget.value);
      return e.currentTarget;
    },
    [phoneNumberState]
  );

  const cb = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const variables = new FormData(e.currentTarget);
    console.log(Object.fromEntries(variables));
  }, []);

  const btnCb = async (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);
    setIsSubmitted(true);
    setHasSubmitted(true);
    console.log(e.eventPhase);
    try {
      setTimeout(() => setIsSubmitted(false), 1000);
    } catch (err) {
      console.error(`${err}`);
    }
  };

  useEffect(() => {
    typeof data !== "undefined"
      ? (setDataState(data), setIsSubmitted(false), setLoading(false))
      : undefined;
  }, [data]);
  return (
    <>
      <div className='relative flex min-h-fit w-full flex-col justify-evenly overflow-hidden bg-[rgba(249,242,232,0.3)] align-top'>
        <div
          className={`absolute inset-0 bg-center [mask-image:linear-gradient(180deg,rgba(249,242,232,0.3)/30,rgba(249,242,232,0.3))]`}></div>
        <div className='relative mx-[4.93055555555556%] mb-[10.83%] mt-[4.1666%] rounded-[3.88vw] bg-[rgba(249,242,232,1)] ring-1 ring-gray-900/5 sm:max-w-[88.88888vw]'>
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
        <div className='space-y-[1rem]'>
          <div className='relative mx-auto my-0 text-center sm:w-[47.71%] sm:max-w-[1374px] '>
            <h2 className='font-domaine-display-condensed 6xl:text-[12rem] 6xl:leading-[12rem] text-h2hDarkGreen text-[5.555556vw] font-semibold leading-[5.555556vw] '>
              Get in touch
            </h2>
          </div>
          <div className='mx-auto max-w-[95.27777777777778vw] md:w-[27.777778vw] md:max-w-[1250px]'>
            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-xl'>
              <form
                action='#'
                method='POST'
                onSubmit={cb}
                className='pb-24 pt-16 sm:pb-32  lg:py-20'>
                <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
                  <div className='font-basis-grotesque-pro grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2'>
                    <div className='sm:col-span-2'>
                      <label htmlFor='first-name' className='sr-only'>
                        First Name
                      </label>
                      <div className='relative mt-2.5 box-border rounded-[0.25rem]'>
                        <input
                          placeholder='First Name'
                          type='text'
                          readOnly={!!hasSubmitted}
                          onChange={firstNameCb}
                          name='first-name'
                          id='first-name'
                          autoComplete='given-name'
                          className={cn(
                            hasSubmitted === true
                              ? "cursor-default bg-gray-50"
                              : "cursor-text",
                            "focus:ring-h2hDarkGreen placeholder:font-sohne-buche block w-full rounded-[0.25rem] border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-[#CBCBCB] placeholder:text-[#494949]  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                          )}
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-2'>
                      <label htmlFor='last-name' className='sr-only'>
                        Last Name
                      </label>
                      <div className='relative mt-2.5 box-border rounded-[0.25rem]'>
                        <input
                          type='text'
                          onChange={lastNameCb}
                          placeholder='Last Name'
                          readOnly={!!hasSubmitted}
                          name='last-name'
                          id='last-name'
                          autoComplete='family-name'
                          className={cn(
                            hasSubmitted === true
                              ? "cursor-default bg-gray-50"
                              : "cursor-text",
                            "focus:ring-h2hDarkGreen placeholder:font-sohne-buche block w-full rounded-[0.25rem] border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-[#CBCBCB] placeholder:text-[#494949]  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                          )}
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-2'>
                      <label htmlFor='email' className='sr-only'>
                        Email
                      </label>
                      <div className='font-sohne-buche relative mt-2.5 rounded-md shadow-sm'>
                        <input
                          onChange={emailCb}
                          placeholder='Email'
                          type='email'
                          readOnly={!!hasSubmitted}
                          name='email'
                          id='email'
                          autoComplete='email'
                          className={cn(
                            hasSubmitted === true
                              ? "cursor-default bg-gray-50"
                              : "cursor-text",
                            "focus:ring-h2hDarkGreen placeholder:font-sohne-buche block w-full rounded-[0.25rem] border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-[#CBCBCB] placeholder:text-[#494949]  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                          )}
                        />
                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                          {invalidEmail === true ? (
                            <svg
                              width='20'
                              className={"h-5 w-5 text-[#990000]"}
                              aria-hidden='true'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M18 10C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84285 14.1566 2 12.1217 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10ZM10 5C10.1989 5 10.3897 5.07902 10.5303 5.21967C10.671 5.36032 10.75 5.55109 10.75 5.75V10.25C10.75 10.4489 10.671 10.6397 10.5303 10.7803C10.3897 10.921 10.1989 11 10 11C9.80109 11 9.61032 10.921 9.46967 10.7803C9.32902 10.6397 9.25 10.4489 9.25 10.25V5.75C9.25 5.55109 9.32902 5.36032 9.46967 5.21967C9.61032 5.07902 9.80109 5 10 5ZM10 15C10.2652 15 10.5196 14.8946 10.7071 14.7071C10.8946 14.5196 11 14.2652 11 14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13C9.73478 13 9.48043 13.1054 9.29289 13.2929C9.10536 13.4804 9 13.7348 9 14C9 14.2652 9.10536 14.5196 9.29289 14.7071C9.48043 14.8946 9.73478 15 10 15Z'
                                fill='black'
                              />
                            </svg>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className='sm:col-span-2'>
                      <label htmlFor='phone-number' className='sr-only'>
                        Phone number
                      </label>
                      <div className='relative mt-2.5 rounded-md shadow-sm'>
                        <input
                          placeholder='Phone Number'
                          type='tel'
                          onChange={phoneCb}
                          readOnly={!!hasSubmitted}
                          name='phone-number'
                          id='phone-number'
                          autoComplete='tel'
                          className={cn(
                            hasSubmitted === true
                              ? "cursor-default bg-gray-50"
                              : "cursor-text",
                            "focus:ring-h2hDarkGreen placeholder:font-sohne-buche block w-full rounded-[0.25rem] border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-[#CBCBCB] placeholder:text-[#494949]  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                          )}
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-2'>
                      <label htmlFor='message' className='sr-only'>
                        Message
                      </label>
                      <div className='relative mt-2.5 rounded-md shadow-sm'>
                        <textarea
                          name='message'
                          placeholder='Message'
                          id='message'
                          rows={5}
                          readOnly={!!hasSubmitted}
                          onChange={textAreaCb}
                          className={cn(
                            hasSubmitted === true
                              ? "cursor-default bg-gray-50"
                              : "cursor-text",
                            "focus:ring-h2hDarkGreen block w-full rounded-[0.25rem] border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-[#CBCBCB] placeholder:text-[#494949]  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                          )}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  {hasSubmitted === true ? (
                    <div className='w-full rounded-md p-4'>
                      <div className='flex'>
                        <div className='flex-shrink-0'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='mt-2 w-[1.125rem]'
                            viewBox='0 0 20 20'>
                            <path
                              fill='#313A2E'
                              fillRule='evenodd'
                              d='M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586L7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </div>
                        <div className='6xl:text-[2.5rem] font-basis-grotesque-pro 6xl:leading-[3.85rem] text-[1.1258333rem] font-normal leading-[1.125rem] tracking-[-0.01em] text-[#313A2E]'>
                          <div className='mt-2 '>
                            <p>
                              {`Thanks ${firstNameState}, we'll be reaching out soon!`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className='relative mx-auto flex w-full max-w-[9.02777777777778vw] flex-row justify-center py-8'>
                      <button
                        type='submit'
                        onClick={btnCb}
                        disabled={
                          !emailState &&
                          !firstNameState &&
                          !lastNameState &&
                          !message &&
                          !phoneNumberState
                        }
                        className={cn(
                          "font-basis-grotesque-pro bg-h2hPinkOrange z-10 rounded-[3.5rem] px-[2.5625rem] py-[1.25rem] text-[1rem] font-medium tracking-[-0.06em] text-black  hover:bg-opacity-95  ",
                          hasSubmitted === false
                            ? "cursor-pointer"
                            : "cursor-default"
                        )}>
                        {hasSubmitted === false ? "Submit" : <></>}
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='isolate flow-root'>
          <FooterVector className='relative bottom-0 left-0 w-[100%]' />
          <HillsideToHarborFooter className='absolute bottom-[2.5%] left-[40%] w-[19.23611111111111%] sm:bottom-[5%]' />
          <div className='absolute bottom-0 mx-auto w-screen min-w-full max-w-[2760px] justify-center text-center sm:bottom-[1.5%]'>
            <span className='mx-auto flex w-[5.97222222222222%] flex-row justify-around gap-x-2 text-center'>
              <a
                className='col-span-1 mx-auto my-auto inline-grid'
                rel='noopener'
                target='_blank'
                href='tel:+18652146943'>
                <Phone
                  className='w-[0.875rem] flex-shrink sm:w-[1.875rem]'
                  aria-hidden='true'
                />
              </a>
              <a
                className='col-span-1 mx-auto inline-grid'
                rel='noopener'
                target='_blank'
                href='mailto:contact@hillsidetoHarbor.com'>
                <Email
                  className='w-[0.875rem] flex-shrink sm:w-[1.875rem]'
                  aria-hidden='true'
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cta;
