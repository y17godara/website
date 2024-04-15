"use server";

import prisma from "@/lib/prisma";

const USERNAME = "y17godara";

export async function getViews() {
  const toatlView = await prisma.post.aggregate({
    _sum: {
      views: true,
    },
  });

  // console.log(toatlView);
  return toatlView._sum.views || 0;
}

export async function getStars() {
  const res = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?per_page=100000000`
  );

  const data = await res.json();
  const stars = data.reduce(
    (acc: number, curr: { stargazers_count: number }) =>
      acc + curr.stargazers_count,
    0
  );

  return stars;
}

export async function getContributions() {
  const res = await fetch(
    `https://api.github.com/search/commits?q=author:${USERNAME}`
  );
  const data = await res.json();
  return data.total_count;
}
