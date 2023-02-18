import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";
import HillsideToHarborSquare from "../../icons/HillsideToHarbor/HillsideToHarborSquare";
import EnvelopeIcon from "../../icons/UI/Envelope/Envelope";
import PhoneIcon from "../../icons/UI/Phone/Phone";
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

export interface NavProps extends UI.TSX.JSXSelect<"nav"> {
  variantPhone?: VariantOpts;
  variantEmail?: VariantOpts;
}

const Nav: FC<PropsWithChildren<NavProps>> = ({
  variantEmail,
  variantPhone,
  children,
  className,
  ...rest
}) => {
  return (
    <nav
      className={clsx(
        "bg-background font-gotham shadow-magical relative z-20 mx-auto w-full justify-between border-b border-gray-200 py-5 px-10",
        className ? className : ""
      )}
      {...rest}>
      <div className='md:flex md:items-center md:justify-between md:space-x-5'>
        <div className='ml-10 flex items-start space-x-5'>
          <div className='flex-shrink-0'>
            <div className='relative'>
              <Link href='/' id='top' className='mx-auto flex text-left'>
                <span className='z-10'>
                  {typeof children !== "undefined" ? (
                    children
                  ) : (
                    <HillsideToHarborSquare
                      className='h-16 w-16'
                      height={64}
                      width={64}
                      shapeRendering='geometricPrecision'
                    />
                  )}
                </span>
              </Link>
              <span
                className='absolute inset-0 rounded-full shadow-inner'
                aria-hidden='true'
              />
            </div>
          </div>
        </div>
        <div className='md:justify-stretch md:justify-stretch sr-only md:not-sr-only md:mx-10 md:mt-0 md:flex md:flex-row md:space-y-0 md:space-x-3'>
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
