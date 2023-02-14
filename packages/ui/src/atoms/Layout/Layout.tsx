import Head from "next/head.js";
import type { FC, ReactNode } from "react";
import WcdAbbreviated from "../../icons/WcdAbbreviated";
import Nav, { NavProps } from "../Nav/Nav.js";

export interface LayoutProps extends NavProps {
  children?: ReactNode;
  title?: string;
  description?: string;
}

const Layout: FC<LayoutProps> = ({ title, description, children, ...rest }) => {
  return (
    <div className='mx-auto flex h-screen flex-col'>
      <Head>
        {title ? (
          <title>{`${title}`}</title>
        ) : (
          <title>{"Takeda Digital"}</title>
        )}
        {description ? (
          <meta name='description' content={description} />
        ) : (
          <meta name='description' content='Takeda Digital Turborepo' />
        )}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav {...rest} />
      <div className='bg-accents-0 px-8'>{children}</div>
      <footer className='bg-accents-1 z-20 mt-auto flex w-full items-center justify-center border-t py-10'>
        <span className='text-primary'>Created by</span>
        <a
          href='https://github.com/windycitydevs'
          aria-label='Wcd GitHub Link'
          target='_blank'
          rel='noreferrer'
          className='font-normal text-black'>
          <WcdAbbreviated className='text-wcd-red ml-3 inline-block h-6' />
        </a>
      </footer>
    </div>
  );
};

export default Layout;
