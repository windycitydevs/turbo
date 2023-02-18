import clsx from "clsx";
import HillsideToHarborSquare from "../../icons/HillsideToHarbor/HillsideToHarborSquare";
import EnvelopeIcon from "../../icons/UI/Envelope/Envelope";
import PhoneIcon from "../../icons/UI/Phone/Phone";
import type UI from "../../typedefs/namespace";
import Button from "../Buttons";
import Link from "../NextLink";

export interface NavProps extends UI.TSX.JSXSelect<"nav"> {
  variant?: "primary" | "secondary" | "ghost" | "violet" | "black" | "white";
}

export default function Nav({ variant, className, ...rest }: NavProps) {
  return (
    <nav
      className={clsx(
        "bg-background font-gotham z-20 mx-auto inline-grid w-full justify-between border-b border-gray-200 py-5 shadow-[0_0_15px_0_rgb(0,0,0,0.1)]",
        className ? className : ""
      )}>
      <div className='max-w-8xl mx-auto flex-row px-14 sm:px-8 lg:px-6'>
        <div className='inline-flex items-start justify-start'>
          <Link href='/' id='top' className='mx-auto flex text-left'>
            <span>
              <HillsideToHarborSquare
                height='36'
                width='36'
                shapeRendering='geometricPrecision'>
                <title>{"Hillside To Harbor"}</title>
              </HillsideToHarborSquare>
            </span>
          </Link>
          <ul className='invisible flex content-center items-center'>
            <li className='ml-2 text-gray-200'>
              <svg
                viewBox='0 0 24 24'
                width='32'
                height='32'
                stroke='currentColor'
                strokeWidth='1'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                shapeRendering='geometricPrecision'>
                <path d='M16.88 3.549L7.12 20.451'></path>
              </svg>
            </li>
            <li className='font-normal' style={{ letterSpacing: ".01px" }}></li>
          </ul>
        </div>
        <div className='flex-1 justify-end md:flex-row-reverse'>
          <nav className='inline-flex flex-row items-center'>
            <span className='text-accents-5 ml-2 flex h-full cursor-not-allowed items-center'>
              <Button
                variant='secondary'
                Component='a'
                className='mx-auto'
                href={`tel:+18658306061`}
                target='_blank'
                rel='noreferrer noopener'>
                <span className='sr-only'>Call</span>
                <PhoneIcon className='h-5 w-5' aria-hidden='true' />
              </Button>
            </span>
            <span className='text-accents-5 ml-2 inline-flex h-full cursor-not-allowed items-end'>
              <Button
                variant='primary'
                Component='a'
                className='mx-auto'
                href={`mailto:contact@hillsidetoharbor.com`}
                target='_blank'
                rel='noreferrer noopener'>
                <span className='sr-only'>Email</span>
                <EnvelopeIcon className=' h-5 w-5' aria-hidden='true' />
              </Button>
            </span>
          </nav>
        </div>
      </div>
    </nav>
  );
}
// {`mailto:${useData.betaMe?.mail}`

const BetterNav = () => {
  return (
    <div className='md:flex md:items-center md:justify-between md:space-x-5'>
      <div className='flex items-start space-x-5'>
        <div className='flex-shrink-0'>
          <div className='relative'>
            <Link href='/' id='top' className='mx-auto flex text-left'>
              <HillsideToHarborSquare
                className='h-16 w-16'
                height={64}
                width={64}
                shapeRendering='geometricPrecision'
              />
            </Link>
            <span
              className='absolute inset-0 rounded-full shadow-inner'
              aria-hidden='true'
            />
          </div>
        </div>
      </div>
      <div className='justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3'>
      <span className='text-accents-5 ml-2 flex h-full cursor-not-allowed items-center'>
              <Button
                variant='secondary'
                Component='a'
                className='mx-auto'
                href={`tel:+18658306061`}
                target='_blank'
                rel='noreferrer noopener'>
                <span className='sr-only'>Call</span>
                <PhoneIcon className='h-5 w-5' aria-hidden='true' />
              </Button>
            </span>
            <span className='text-accents-5 ml-2 inline-flex h-full cursor-not-allowed items-end'>
              <Button
                variant='primary'
                Component='a'
                className='mx-auto'
                href={`mailto:contact@hillsidetoharbor.com`}
                target='_blank'
                rel='noreferrer noopener'>
                <span className='sr-only'>Email</span>
                <EnvelopeIcon className=' h-5 w-5' aria-hidden='true' />
              </Button>
            </span>
      </div>
    </div>
  );
};
