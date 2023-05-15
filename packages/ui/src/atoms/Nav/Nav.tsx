import clsx from "clsx";
import type { FC } from "react";
import HillsideToHarborSquare from "../../icons/HillsideToHarbor/HillsideToHarborSquare";
import EnvelopeIcon from "../../icons/UI/Envelope/Envelope";
import PhoneIcon from "../../icons/UI/Phone/Phone";
import Wcd from "../../icons/Wcd";
import type UI from "../../typedefs/namespace";
import Button from "../Buttons";
import Link from "../NextLink";

export type VariantOpts =
  | "primary"
  | "secondary"
  | "ghost"
  | "violet"
  | "black"
  | "white";

export const LogoObject = {
  HillsidetoharborLogo: (
    <HillsideToHarborSquare
      className='h-16 w-16'
      height={64}
      width={64}
      shapeRendering='geometricPrecision'
    />
  ),
  Wcd: (
    <Wcd
      className='h-min w-16'
      width={64}
      shapeRendering='geometricPrecision'
    />
  )
} as const;

export const LogoObjectHelper = <
  T extends keyof typeof LogoObject = keyof typeof LogoObject
>({
  logo
}: {
  logo: T;
}) => LogoObject[logo];

export interface NavProps extends UI.TSX.JSXSelect<"nav"> {
  variantPhone?: VariantOpts;
  variantEmail?: VariantOpts;
  logo: keyof typeof LogoObject;
}

const Nav: FC<NavProps> = ({
  variantEmail,
  variantPhone,
  logo,
  className,
  ...rest
}) => {
  return (
    <nav
      className={clsx(
        "bg-background font-gotham shadow-magical relative z-20 mx-auto w-full justify-between border-b border-gray-200 px-10 py-5",
        className ? className : ""
      )}
      {...rest}>
      <div className='md:flex md:items-center md:justify-between md:space-x-5'>
        <div className='flex items-start md:ml-10 md:space-x-5'>
          <div className='flex-shrink-0'>
            <div className='relative'>
              <Link href='/' id='top' className='mx-auto flex text-left'>
                <span className='z-10'>
                  <LogoObjectHelper logo={logo} />
                </span>
              </Link>
              <span
                className='absolute inset-0 rounded-full shadow-inner'
                aria-hidden='true'
              />
            </div>
          </div>
        </div>
        <div className='sr-only md:not-sr-only md:mx-10 md:mt-0 md:flex md:flex-row md:justify-stretch md:justify-stretch md:space-x-3 md:space-y-0'>
          <span className='text-accents-5 ml-2 flex h-full cursor-not-allowed items-center outline-1 '>
            <Button
              variant={variantPhone ?? "secondary"}
              Component='a'
              className='mx-auto'
              href={`tel:+18658306061`}
              target='_blank'
              rel='noreferrer noopener'>
              <span className='sr-only'>Call</span>
              <PhoneIcon className='h-5 w-5' aria-hidden='true' />
            </Button>
          </span>
          <span className='text-accents-5  ml-2 inline-flex h-full cursor-not-allowed items-end'>
            <Button
              variant={variantEmail ?? "secondary"}
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
    </nav>
  );
};

export default Nav;
