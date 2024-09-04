"use client";

import { Blog as PostType } from "contentlayer/generated";
import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";

export const ViewCounter = ({ post }: { post: PostType }) => {
  const [views, setViews] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const getViews = useMemo(
    () => async () => {
      try {
        const response = await axios.get(`/api/views/slug?slug=${post.slug}`);
        const Views = response.data.Views || 0;
        setViews(Views);
      } catch (error) {
        console.error("Error fetching views:", error);
        setViews(0);
      } finally {
        setLoading(false);
      }
    },
    [post.slug]
  );

  useEffect(() => {
    if (post.slug) {
      getViews();
    }
  }, [post.slug, getViews]);

  return (
    <>
      <div>
        {loading ? (
          <p className='text-secondary'>... views</p>
        ) : (
          <p className='text-secondary'>{`${views}`} views</p>
        )}
      </div>
    </>
  );
};
