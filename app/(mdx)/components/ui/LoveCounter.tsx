"use client";

import { Blog as PostType } from "contentlayer/generated";
import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import { FaHeart } from "react-icons/fa";
import { cn } from "@/lib/utils";

export const LoveCounter = ({
  post,
  loveCookie,
}: {
  post: PostType;
  loveCookie: boolean;
}) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [heart, setHeart] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const getLove = useMemo(
    () => async () => {
      try {
        const response = await axios.get(`/api/love/slug?slug=${post.slug}`);
        console.info("response", response);
        const Views = response.data.Likes.love || 0;
        setHeart(Views);
      } catch (error) {
        console.error("Error fetching heart:", error);
        setHeart(0);
      } finally {
        setLoading(false);
      }
    },
    [post.slug]
  );

  const handleHeart = async () => {
    if (loveCookie || liked) return;
    try {
      await axios.post(`/api/love/slug?slug=${post.slug}`);
      setHeart((prev) => prev + 1);
      setLiked(true);
    } catch (error) {
      console.error("Error updating heart:", error);
    }
  };

  useEffect(() => {
    if (post.slug) {
      getLove();
    }
  }, [post.slug, getLove]);

  return (
    <>
      <div>
        {loading ? (
          <p className='flex flex-row items-center gap-2 whitespace-nowrap text-secondary sm:gap-4'>
            <FaHeart />
            ... likes
          </p>
        ) : (
          <button
            onClick={handleHeart}
            className={cn(
              "flex flex-row items-center gap-2 whitespace-nowrap text-secondary"
            )}
          >
            <FaHeart className={cn(liked || loveCookie ? "text-brand" : "")} />
            {`${heart}`} likes
          </button>
        )}
      </div>
    </>
  );
};
