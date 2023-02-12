import cn from "clsx";
import Wcd from "../../icons/Wcd";
import type UI from "../../typedefs/namespace";
import Button from "../Buttons";
import DeployButton, {
  type DeployButtonProps
} from "../DeployButton/DeployButton";
import Link from "../NextLink";

const REPO_URL =
  "https://github.com/windycitydevs/turbo/tree/main" as const;

export interface NavProps extends UI.TSX.JSXSelect<"nav"> {
  path: string;
  deployButton?: Partial<DeployButtonProps>;
  variant?: "primary" | "secondary" | "ghost" | "violet" | "black" | "white";
}

export default function Nav({
  path,
  deployButton,
  variant,
  className,
  ...rest
}: NavProps) {
  const displayPath = ["turbo"]
    .concat(path?.split("/").filter(Boolean) || [])
    .join(" / ");
  const repositoryUrl = deployButton?.repositoryUrl
    ? deployButton.repositoryUrl
    : (`${REPO_URL}/${path}` as const);

  return (
    <nav
      className={cn(
        "bg-background font-gotham relative z-20 border-b border-gray-200 py-5 shadow-[0_0_15px_0_rgb(0,0,0,0.1)]",
        className
      )}
      {...rest}>
      <div className='mx-auto flex max-w-7xl items-center px-14 sm:px-8 lg:px-6'>
        <div className='flex flex-row items-center'>
          <Link href='/'>
            <span>
              <Wcd height='32' shapeRendering='geometricPrecision'>
                <title>{"Windy City Devs"}</title>
              </Wcd>
            </span>
          </Link>
          <ul className='flex content-center items-center'>
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
          </ul>
        </div>
        <div className='hidden flex-1 justify-end md:flex'>
          <nav className='inline-flex flex-row items-center'>
            <span className='text-accents-5 ml-2 flex h-full cursor-not-allowed items-center'>
              <Button
                variant='secondary'
                Component='a'
                href={REPO_URL}
                target='_blank'
                rel='noreferrer noopener'>
                View the Codebase →
              </Button>
            </span>
            <span className='text-accents-5 ml-2 flex h-full cursor-not-allowed items-center'>
              <DeployButton
                {...deployButton}
                variant={variant ? variant : "primary"}
                repositoryUrl={repositoryUrl}
                projectName={deployButton?.projectName || path}
                repositoryName={deployButton?.repositoryName || path}
              />
            </span>
          </nav>
        </div>
      </div>
    </nav>
  );
}
