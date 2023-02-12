"use client";

import { demos } from "@/lib/demos";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";
export type LinkedUp = React.ForwardRefExoticComponent<
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps & {
      children?: React.ReactNode;
    } & React.RefAttributes<HTMLAnchorElement>
>;
export type ExtractLinkType<T> = T extends React.ForwardRefExoticComponent<
  infer U
>
  ? U
  : T;

const Recreate = ({ children, ...props }: ExtractLinkType<LinkedUp>) =>
  React.createElement<ExtractLinkType<LinkedUp>>("a", { ...props }, [children]);

const Linked = (r: Parameters<typeof Recreate>[0]) => <Linked {...r} />;
export default function GlobalNav() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <div className='space-y-5'>
      {demos.map(demo => {
        return (
          <div key={demo.name}>
            <div className='mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500'>
              <div>{demo.name}</div>
            </div>

            {demo.items.map(item => {
              const isActive = item.slug === selectedLayoutSegments;

              return (
                <div key={item.slug}>
                  {item.isDisabled ? (
                    <div
                      className='block rounded-md px-3 py-2 text-sm font-medium text-zinc-600'
                      title='Coming Soon'>
                      {item.name}
                    </div>
                  ) : (
                    <Link
                      href={`/${item.slug}`}
                      className={clsx(
                        "block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-100",
                        { "text-zinc-400": !isActive, "text-white": isActive }
                      )}>
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
