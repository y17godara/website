export const siteConfig = {
  siteVersion: `1.0.1`,
  title: `Yash Godara`,
  aboutMe: ``,
  creator: `Yash Godara`,
  publisher: `Yash Godara`,
  category: `technology`,
  authors: [
    {
      name: `Yash Godara`,
      twitterHandle: `@y17godara`,
    },
  ],
  description: `Developer Expertise in Tech like ▲ Next.js, TailwindCSS, React, TypeScript, Node.js, Serverless, Prisma PostgreSQL, MongoDB, and more. Aspiring to become a successful software and web developer.`,
  twitterHandle: `@y17godara`,
  meta: `Developer Expertise in Tech like ▲ Next.js, TailwindCSS, React, TypeScript, Node.js, Serverless, Prisma PostgreSQL, MongoDB, and more. Aspiring to become a successful software and web developer.`,
  url: `${process.env.NEXT_PUBLIC_BASE_URL}` || `https://y-g.tech`,
  generator: `Next.js`,
  ogImage: `https://website-61p9jbjff-y17godara.vercel.app/opengraph-image.png`,
  links: {
    twitter: "https://x.com/y17godara",
    github: "https://github.com/y17godara",
  },
  keywords: [
    "Yash Godara y17godara",
    "y17godar",
    "Yash Github",
    "Yash Godara",
    "Yash Portfolio Website",
    "Yash Blogs Website",
    "Yash Personal Website",
    "Yash Godara Website",
    "Yash Godara Portfolio",
    "Yash Godara Blogs",
    "Yash Godara Personal Website",
    "Yash Godara Github",
    "Github y17godara",
  ],
};

export type SiteConfig = typeof siteConfig;
