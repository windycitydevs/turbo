"use client";
import { Inspector } from "@windycitydevs/ui";
import React, { FormEvent, useCallback, useState } from "react";
import useSWR from "swr";

const fetcher = (input: RequestInfo, init?: RequestInit): Promise<any> =>
  fetch(input, init).then(res => res.json());
type SWRProps = {
  emailState: string;
  firstNameState: string;
  lastNameState: string;
  phoneNumberState: string;
  messageState: string;
  isSubmitted: boolean;
};
type FetcherOptions = {
  options: Readonly<{
    emailState: string;
    firstNameState: string;
    lastNameState: string;
    phoneNumberState: string;
    messageState: string;
    isSubmitted: boolean;
  }>;
};

function useSwrSync({
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
  const { data, isValidating, error } = useSWR(
    isSubmitted
      ? `/api/contact?email=${emailState}&firstName=${firstNameState}&lastName=${lastNameState}&phoneNumber=${phoneNumberState}&messageState=${messageState}`
      : null,
    fetcher,
    {}
  );
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

  const firstNameCb = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (firstNameState !== e.currentTarget.value)
        setfirstNameState(e.currentTarget.value);
    },
    [firstNameState]
  );

  const lastNameCb = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (lastNameState !== e.currentTarget.value)
        setLastNameState(e.currentTarget.value);
    },
    [lastNameState]
  );

  const textAreaCb = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      e.preventDefault();
      if (message !== e.currentTarget.value) setMessage(e.currentTarget.value);
      return e.currentTarget;
    },
    [message]
  );

  const emailCb = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
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
    (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const btnCb = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {},
    []
  );

  async function FormEvent(e: FormEvent<HTMLButtonElement>) {
    e.target.addEventListener("submit", s => {});
    e.preventDefault();
    console.log(e.currentTarget);
    // console.log(Object.fromEntries(variables));
    // const accessTarget = (
    //   props: "first-name" | "last-name" | "email" | "phone-number" | "message"
    // ) => variables.get(props);
    // console.log(accessTarget("message"));
  }
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
          <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <form
              action='#'
              method='POST'
              onSubmit={cb}
              className='px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'>
              <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
                <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                  <div>
                    <label htmlFor='first-name' className='sr-only'>
                      First Name
                    </label>
                    <div className='relative mt-2.5 rounded-md shadow-sm'>
                      <input
                        placeholder='First Name'
                        type='text'
                        onChange={firstNameCb}
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor='last-name' className='sr-only'>
                      Last Name
                    </label>
                    <div className='relative mt-2.5 rounded-md shadow-sm'>
                      <input
                        type='text'
                        onChange={lastNameCb}
                        placeholder='Last Name'
                        name='last-name'
                        id='last-name'
                        autoComplete='family-name'
                        className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <label htmlFor='email' className='sr-only'>
                      Email
                    </label>
                    <div className='relative mt-2.5 rounded-md shadow-sm'>
                      <input
                        onChange={emailCb}
                        placeholder='Email'
                        type='email'
                        name='email'
                        id='email'
                        autoComplete='email'
                        className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                    {invalidEmail === true ? (
                      <p className='mt-2 text-sm text-red-600' id='email-error'>
                        Not a valid email address.
                      </p>
                    ) : (
                      <p className='mt-2'></p>
                    )}
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
                        name='phone-number'
                        id='phone-number'
                        autoComplete='tel'
                        className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                        onChange={textAreaCb}
                        className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className='mt-8 flex justify-end'>
                  <button
                    disabled={invalidEmail === true}
                    type='submit'
                    onSubmit={FormEvent}
                    onClick={e => e}
                    className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                    Submit
                  </button>
                </div>
              </div>
            </form>
            {/* <div className='bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
              <form method='POST' onSubmit={FormEvent} className='space-y-6'>
                <fieldset disabled={loading} aria-busy={loading}>
                  <div>
                    <label
                      htmlFor='email'
                      className='sr-only block text-sm font-medium text-gray-700'>
                      Email
                    </label>
                    <div className='my-1'>
                      <input
                        placeholder="Email"
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        onInput={e => {
                          e.preventDefault();
                          return e.currentTarget.value;
                        }}
                        className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='name'
                      className='sr-only block text-sm font-medium text-gray-700'>
                      Name
                    </label>
                    <div className='my-1'>
                      <input
                        placeholder="Name"
                        id='name'
                        name='name'
                        type='text'
                        autoComplete='given-name'
                        required
                        onInput={e => {
                          e.preventDefault();
                          return e.currentTarget.value;
                        }}
                        className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 sm:text-sm'
                      />
                    </div>
                  </div>
                  <div className='my-1'>
                    <div className='text-sm'></div>
                  </div>
                  <div>
                    <Button
                      variant='secondary'
                      size='lg'
                      Component='button'
                      onClick={() => setLoading(true)}
                      disabled={loading}
                      type='submit'
                      className='mx-auto flex w-2/3 justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                      {loading ? "Signing in..." : "Sign in"}
                    </Button>
                  </div>
                </fieldset>
              </form>
            </div> */}
          </div>
        </div>
      </div>
      <Inspector Component='pre' variant='white'>
        {JSON.stringify(
          {
            data: {
              email: emailState,
              nameFirst: firstNameState,
              nameLast: lastNameState,
              phone: phoneNumberState,
              message: message,
              isSubmitted: isSubmitted
            }
          },
          null,
          2
        )}
      </Inspector>
    </div>
  );
}

export default Cta;
