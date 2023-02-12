"use client";
import quasiRandom from "@/lib/quasi-random";
import { Tab } from "@/ui/Tab";
import clsx from "clsx";
import React, { useEffect } from "react";

export function RandomTab({ path }: { path: string }) {
  const [post, setPost] = React.useState<null | { text: string; slug: string }>(
    null
  );

  useEffect(() => {
    const randomId = String(quasiRandom([3, 100]));
    setPost({ text: `Post ${randomId} (On Demand)`, slug: randomId });
  }, []);

  return (
    <div
      className={clsx("inline-flex transition", {
        "opacity-0": !post,
        "opacity-100": post
      })}>
      {post ? (
        <Tab path={path} item={{ text: post.text, slug: post.slug }} />
      ) : null}
    </div>
  );
}
