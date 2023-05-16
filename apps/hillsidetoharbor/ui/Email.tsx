import { EnvelopeIcon, PhoneIcon } from "@windycitydevs/ui";

const Email = () => {
  return (
    <div className='relative bg-white'>
      <div className='absolute inset-0'>
        <div className='absolute inset-y-0 left-0 w-1/3 bg-gray-50' />
      </div>
      <div className='max-w-10xl relative mx-auto lg:grid lg:grid-cols-5'>
        <div className='bg-gray-50 px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12'>
          <div className='mx-auto max-w-lg'>
            <h2 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
              Get in touch
            </h2>
            <p className='mt-3 text-lg leading-6 text-gray-500'>
              {/* Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu. */}
            </p>
            <dl className='mt-8 text-base text-gray-500'>
              <div>
                <dt className='sr-only'>Postal address</dt>
                <dd>
                  <p>{"2042 Town Center Blvd #114"}</p>
                  <p>{"Knoxville, TN 37922"}</p>
                </dd>
              </div>
              <div className='mt-6'>
                <dt className='sr-only'>Phone number</dt>
                <dd className='flex'>
                  <a
                    rel='noopener'
                    target={"_blank"}
                    className='ml-3'
                    href='tel:+18652149643'>
                    <PhoneIcon
                      className='h-6 w-6 flex-shrink-0 text-gray-400'
                      aria-hidden='true'
                    />
                    <span className='ml-3'>{"(865)-214-6943"}</span>
                  </a>
                </dd>
              </div>
              <div className='mt-3'>
                <dt className='sr-only'>Email</dt>
                <dd className='flex'>
                  <a rel='noopener' target={"_blank"} className='ml-3'>
                    {" "}
                    <EnvelopeIcon
                      className='h-6 w-6 flex-shrink-0 text-gray-400'
                      aria-hidden='true'
                    />
                    <span className='ml-3'>
                      {"mailto:contact@hillsidetoHarbor.com"}
                    </span>
                  </a>
                </dd>
              </div>
            </dl>
            {/* <p className='mt-6 text-base text-gray-500'>
              Looking for careers?{" "}
              <a href='#' className='font-medium text-gray-700 underline'>
                View all job openings
              </a>
              .
            </p> */}
          </div>
        </div>
        <div className='bg-white px-6 py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12'>
          <div className='mx-auto max-w-lg lg:max-w-none'>
            <form action='#' method='POST' className='grid grid-cols-1 gap-y-6'>
              <div>
                <label
                  htmlFor='full-name'
                  className='block text-sm font-medium text-gray-700'>
                  Full name
                </label>
                <input
                  type='text'
                  name='full-name'
                  id='full-name'
                  autoComplete='name'
                  className='focus:border-h2hTurquoise focus:ring-h2hTurquoise block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm'
                  placeholder='Full name'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='focus:border-h2hTurquoise focus:ring-h2hTurquoise block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm'
                  placeholder='Email'
                />
              </div>
              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700'>
                  Phone
                </label>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  autoComplete='tel'
                  className='focus:border-h2hTurquoise focus:ring-h2hTurquoise block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm'
                  placeholder='Phone'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  className='focus:border-h2hTurquoise focus:ring-h2hTurquoise block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm'
                  placeholder='Message'
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  type='submit'
                  className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
