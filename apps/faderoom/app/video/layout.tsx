import { Tab } from "@/ui/Tab";
import React from "react";
import { RandomTab } from "./RandomTab";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='space-y-9'>
      <div className='flex flex-wrap items-center gap-2'>
        <Tab path='/video' item={{ text: "Home" }} />
        <Tab path='/video' item={{ text: "Post 1", slug: "1" }} />
        <Tab path='/video' item={{ text: "Post 2", slug: "2" }} />
        <RandomTab path='/video' />
      </div>
      <div>{children}</div>
    </div>
  );
}
