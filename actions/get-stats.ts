"use server";

import prisma from "@/lib/prisma";
import redis, { REDIS_CACHE_EXPIRATION } from "@/lib/redis";

const USERNAME = "y17godara";

export async function getViews() {
  const cachedViews = await redis.get("total-views");

  if (cachedViews) {
    console.info("cached data found: total-views", cachedViews);
    return Number(cachedViews) as number | 0;
  }

  const res = await prisma.post.findMany({
    select: {
      views: true,
    },
  });
  const totalViews = res.reduce(
    (acc: number, curr: { views: number }) => acc + curr.views,
    0
  ) as number;

  await redis.set("total-views", JSON.stringify(totalViews), {
    ex: REDIS_CACHE_EXPIRATION,
  });
  console.info("cached data set: total-views", totalViews);

  return totalViews as number | 0;
}

export async function getStars() {
  try {
    const cachedStars = await redis.get("total-stars");

    if (cachedStars) {
      console.info("cached data found: total-stars", cachedStars);
      return Number(cachedStars);
    }

    const res = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?per_page=100000000`
    );

    const data = await res.json();
    const stars = data.reduce(
      (acc: number, curr: { stargazers_count: number }) =>
        acc + curr.stargazers_count,
      0
    );

    await redis.set("total-stars", JSON.stringify(stars), {
      ex: REDIS_CACHE_EXPIRATION,
    });
    console.info("cached data set: total-stars", stars);

    return stars;
  } catch {
    return 0;
  }
}

export async function getContributions() {
  try {
    const cachedContributions = await redis.get("total-contributions");

    if (cachedContributions) {
      console.info(
        "cached data found: total-contributions",
        cachedContributions
      );
      return Number(cachedContributions);
    }

    const res = await fetch(
      `https://api.github.com/search/commits?q=author:${USERNAME}`
    );
    const data = await res.json();

    await redis.set("total-contributions", JSON.stringify(data.total_count), {
      ex: REDIS_CACHE_EXPIRATION,
    });
    console.info("cached data set: total-contributions", data.total_count);

    return data.total_count;
  } catch {
    return 0;
  }
}
