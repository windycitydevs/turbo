import cn from "clsx";
import HillsideToHarborVerticalWide from "../../icons/HillsideToHarbor/HillsideToHarborVerticalWide";
import EnvelopeIcon from "../../icons/UI/Envelope/Envelope";
import PhoneIcon from "../../icons/UI/Phone/Phone";
import type UI from "../../typedefs/namespace";
import Button from "../Buttons";
import Link from "../NextLink";
const REPO_URL = "https://github.com/windycitydevs/turbo/tree/main" as const;

export interface NavProps extends UI.TSX.JSXSelect<"nav"> {
  variant?: "primary" | "secondary" | "ghost" | "violet" | "black" | "white";
}

export default function Nav({ variant, className, ...rest }: NavProps) {
  return (
    <nav
      className={cn(
        "bg-background font-gotham relative z-20 border-b border-gray-200 py-5 shadow-[0_0_15px_0_rgb(0,0,0,0.1)]",
        className
      )}
      {...rest}>
      <div className='max-w-8xl mx-auto flex items-center px-14 sm:px-8 lg:px-6'>
        <div className='flex flex-row items-center justify-start'>
          <Link href='/' id='top'>
            <span>
              <HillsideToHarborVerticalWide
                height='36'
                shapeRendering='geometricPrecision'>
                <title>{"Hillside To Harbor"}</title>
              </HillsideToHarborVerticalWide>
            </span>
          </Link>
          {/* <ul className='flex content-center items-center'>
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
            <li className='font-normal' style={{ letterSpacing: ".01px" }}>
              <Link
                href={repositoryUrl}
                className='text-wcd-red hover:text-accents-8 cursor-pointer no-underline transition-colors duration-200'
                target='_blank'
                rel='noreferrer noopener'>
                {displayPath}
              </Link>
            </li>
          </ul> */}
        </div>
        <div className='hidden flex-1 justify-end md:flex'>
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
            <span className='text-accents-5 ml-2 flex h-full cursor-not-allowed items-center'>
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
