"use client";

import { cn } from "@/lib/utils";
import React from "react";
import {
  LinkedinShare,
  WhatsappShare,
  FacebookShare,
  EmailShare,
  TwitterShare,
  RedditShare,
} from "react-share-kit";

export default function ShareButtons({ slug }: { slug: string }) {
  return (
    <div className={cn("flex gap-1.5 sm:gap-2 md:gap-2.5", "text-gray-500")}>
      <LinkedinShare url={`https://y-g.tech/blogs/${slug}`} size={24} round />
      <WhatsappShare url={`https://y-g.tech/blogs/${slug}`} size={24} round />
      <FacebookShare url={`https://y-g.tech/blogs/${slug}`} size={24} round />
      <EmailShare url={`https://y-g.tech/blogs/${slug}`} size={24} round />
      <TwitterShare url={`https://y-g.tech/blogs/${slug}`} size={24} round />
      <RedditShare url={`https://y-g.tech/blogs/${slug}`} size={24} round />
    </div>
  );
}
